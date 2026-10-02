const assert = require("assert");
const shellExec = require("shell-exec").default;

assert.strictEqual(typeof shellExec, "function");
assert.strictEqual(require("shell-exec/dist").default, shellExec);
assert.strictEqual(require("shell-exec/dist/index").default, shellExec);
assert.strictEqual(require("shell-exec/dist/index.js").default, shellExec);
assert.strictEqual(require("shell-exec/package.json").name, "shell-exec");
assert.strictEqual(
  require("shell-exec/package"),
  require("shell-exec/package.json")
);
require.resolve("shell-exec/README.md");
require.resolve("shell-exec/LICENSE");

shellExec("echo packed-commonjs")
  .then((result) => {
    assert.strictEqual(result.stdout.trim(), "packed-commonjs");
    assert.strictEqual(result.code, 0);
    return shellExec("exit 64");
  })
  .then((result) => assert.strictEqual(result.code, 64))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
