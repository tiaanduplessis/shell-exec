const shellExec = require("../dist").default;

test("should export function", () => {
  expect(shellExec).toBeDefined();
  expect(typeof shellExec).toBe("function");
});

test("should return promise", () => {
  expect(shellExec("")).resolves.toMatchObject({
    stdout: "",
    stderr: "",
  });
});

test("must return the code 64 on command result", () => {
  expect(shellExec("exit 64")).resolves.toMatchObject({ code: 64 });
});
