import shellExec from "shell-exec";

shellExec("echo Hi!").then(console.log).catch(console.log);
// Hi!
// { stdout: '', stderr: '', cmd: 'echo Hi!', code: 0 }
