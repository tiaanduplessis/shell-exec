import * as childProcess from "child_process";

type Command = string | string[];

interface CmdResult {
  code?: number | null;
  stdout: string;
  stderr: string;
  error?: Error;
  cmd: string;
}

export interface FailedExec extends CmdResult {
  error: Error;
}
export interface SuccessfulExec extends CmdResult {
  code: number | null;
}

function shellExec(
  cmd: Command,
  opts?: Omit<childProcess.SpawnOptionsWithoutStdio, "stdio" | "cwd">
): Promise<CmdResult> {
  const executable = Array.isArray(cmd) ? cmd.join(";") : cmd;
  const options: childProcess.SpawnOptionsWithoutStdio = {
    ...opts,
    stdio: "pipe",
    cwd: process.cwd(),
  };

  const { platform } = process;

  try {
    const cmd = platform === "win32" ? "cmd" : "sh";
    const arg = platform === "win32" ? "/C" : "-c";
    const child = childProcess.spawn(cmd, [arg, executable], options);

    return new Promise((resolve) => {
      const stdoutList: string[] = [];
      const stderrList: string[] = [];

      if (child.stdout) {
        child.stdout.on("data", (data) => {
          if (Buffer.isBuffer(data)) return stdoutList.push(data.toString());
          stdoutList.push(data);
        });
      }

      if (child.stderr) {
        child.stderr.on("data", (data) => {
          if (Buffer.isBuffer(data)) return stderrList.push(data.toString());
          stderrList.push(JSON.stringify(data));
        });
      }

      const getDefaultResult = () => {
        const stderr = stderrList.join("\n");
        const stdout = stdoutList.join("\n");
        return { stdout, stderr, cmd: executable };
      };

      child.on("error", (error) => resolve({ ...getDefaultResult(), error }));
      child.on("close", (code) => resolve({ ...getDefaultResult(), code }));
    });
  } catch (error) {
    return Promise.reject(error);
  }
}

export default shellExec;
