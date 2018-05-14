
<h1 align="center">shell-exec</h1>
<div align="center">
  <strong>Execute a command through the system shell</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/shell-exec">
    <img src="https://img.shields.io/npm/v/shell-exec.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/shell-exec">
  <img src="https://img.shields.io/npm/dm/shell-exec.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/shell-exec">
    <img src="https://img.shields.io/travis/tiaanduplessis/shell-exec.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/shell-exec/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/shell-exec.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/shell-exec/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/shell-exec.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/shell-exec/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/shell-exec.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20shell-exec!%20https://github.com/tiaanduplessis/shell-exec%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/shell-exec.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/shell-exec/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/shell-exec.svg)](https://greenkeeper.io/)

A tiny cross-platform promise based wrapper around [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).

## Install

```sh
$ npm install shell-exec
# OR
$ yarn add shell-exec
```

## Usage

```js
const shellExec = require('shell-exec')

shellExec('echo Hi!').then(console.log).catch(console.log)
// Hi!
// { stdout: '', stderr: '', cmd: 'echo Hi!', code: 0 }
```

## API

### `shellExec(command, options)`

**Parameters:**

- *`command`* {String | Array} - String or Array of commands to run
- *`options`* {Object} - Options object passed to [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)

The function then returns a `Promise`.

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/shell-exec/issues).

## License

Licensed under the MIT License.
