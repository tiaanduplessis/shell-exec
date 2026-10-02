import assert from "assert";
import shellExec, { FailedExec, SuccessfulExec } from "shell-exec";

const failure: FailedExec = {
  error: new Error("example"),
  stdout: "",
  stderr: "",
  cmd: "example",
};
const success: SuccessfulExec = { code: 0, stdout: "", stderr: "", cmd: "" };
assert.strictEqual(failure.error.message, "example");
assert.strictEqual(success.code, 0);

shellExec(["echo typed-module"], { env: process.env })
  .then((result) => {
    assert.strictEqual(result.stdout.trim(), "typed-module");
    assert.strictEqual(result.code, 0);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

if (false) {
  // @ts-expect-error Commands must be strings or arrays of strings.
  shellExec(123);
  // @ts-expect-error The wrapper controls cwd.
  shellExec("", { cwd: "/" });
}
