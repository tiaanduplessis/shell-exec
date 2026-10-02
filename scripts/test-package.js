const assert = require("assert");
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "shell-exec-package-"));
const node = process.env.SHELL_EXEC_TEST_NODE || process.execPath;
const compiler = require.resolve("typescript/bin/tsc");
const fixtureDirectory = path.join(root, "test/fixtures/package");

function npm(args, cwd) {
  return execFileSync(process.platform === "win32" ? "npm.cmd" : "npm", args, {
    cwd,
    encoding: "utf8",
    shell: process.platform === "win32",
  });
}

function run(file) {
  execFileSync(node, [path.join(temporary, file)], { stdio: "inherit" });
}

function typecheck(module, files, outDir, extra = []) {
  execFileSync(
    process.execPath,
    [
      compiler,
      "--strict",
      "--skipLibCheck",
      "--esModuleInterop",
      "--target",
      "es2019",
      "--module",
      module,
      "--moduleResolution",
      module === "commonjs" ? "node" : module,
      "--typeRoots",
      path.join(root, "node_modules/@types"),
      "--outDir",
      outDir,
      ...extra,
      ...files,
    ],
    { cwd: temporary, stdio: "inherit" }
  );
}

try {
  const [packed] = JSON.parse(
    npm(["pack", root, "--ignore-scripts", "--json"], temporary)
  );
  for (const file of [
    "dist/index.js",
    "dist/index.mjs",
    "dist/index.d.ts",
    "dist/index.d.mts",
  ]) {
    assert(
      packed.files.some((entry) => entry.path === file),
      `${file} is packed`
    );
  }
  fs.writeFileSync(path.join(temporary, "package.json"), '{"private":true}');
  npm(
    [
      "install",
      path.join(temporary, packed.filename),
      "--ignore-scripts",
      "--offline",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
    ],
    temporary
  );
  for (const file of fs.readdirSync(fixtureDirectory)) {
    fs.copyFileSync(
      path.join(fixtureDirectory, file),
      path.join(temporary, file)
    );
  }
  run("commonjs.cjs");
  run("module.mjs");

  for (const module of ["node16", "nodenext"]) {
    typecheck(module, ["consumer.cts", "consumer.mts"], module);
    run(`${module}/consumer.cjs`);
    run(`${module}/consumer.mjs`);
    typecheck(module, ["consumer.cts", "consumer.mts"], module, [
      "--esModuleInterop",
      "false",
      "--allowSyntheticDefaultImports",
      "true",
      "--noEmit",
    ]);
  }

  // TypeScript's older node resolution must continue to use the top-level types field.
  fs.copyFileSync(
    path.join(temporary, "consumer.cts"),
    path.join(temporary, "legacy.ts")
  );
  typecheck("commonjs", ["legacy.ts"], "legacy");
  run("legacy/legacy.js");
  console.log(
    "Packed CommonJS, ESM, Node16, NodeNext, and legacy TypeScript consumers passed."
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
