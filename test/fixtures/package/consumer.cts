import assert from "assert";
import shellExec from "shell-exec";
import shellExecModule = require("shell-exec");

assert.strictEqual(shellExec, shellExecModule.default);

shellExec("echo typed-commonjs")
  .then((result) => {
    assert.strictEqual(result.stdout.trim(), "typed-commonjs");
    assert.strictEqual(result.code, 0);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

if (false) {
  // @ts-expect-error The CommonJS namespace is not callable.
  shellExecModule("");
  // @ts-expect-error Commands must be strings or arrays of strings.
  shellExec(false);
}
