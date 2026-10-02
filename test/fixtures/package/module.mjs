import assert from "assert";
import shellExec from "shell-exec";
import deepImport from "shell-exec/dist/index.mjs";

assert.strictEqual(typeof shellExec, "function");
assert.strictEqual(deepImport, shellExec);

shellExec("echo packed-module")
  .then((result) => {
    assert.strictEqual(result.stdout.trim(), "packed-module");
    assert.strictEqual(result.code, 0);
    return shellExec("exit 64");
  })
  .then((result) => assert.strictEqual(result.code, 64))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
