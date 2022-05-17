
# 🐚 shell-exec
[![package version](https://img.shields.io/npm/v/shell-exec.svg?style=flat-square)](https://npmjs.org/package/shell-exec)
[![package downloads](https://img.shields.io/npm/dm/shell-exec.svg?style=flat-square)](https://npmjs.org/package/shell-exec)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/shell-exec.svg?style=flat-square)](https://npmjs.org/package/shell-exec)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A tiny cross-platform promise based wrapper around child_process.spawn.

## Table of Contents

- [🐚 shell-exec](#-shell-exec)
  - [Table of Contents](#table-of-contents)
  - [⚙️ Install](#️-install)
  - [📖 Usage](#-usage)
  - [📚 API](#-api)
    - [`shellExec(command, options)`](#shellexeccommand-options)
  - [💬 Contributing](#-contributing)
  - [🪪 License](#-license)

## ⚙️ Install

Install the package locally within you project folder with your package manager:

With `npm`:
```sh
npm install feature-flip
```

With `yarn`:
```sh
yarn add feature-flip
```

With `pnpm`:
```sh
pnpm add feature-flip
```

## 📖 Usage

```ts
import shellExec from 'shell-exec'
shellExec('echo Hi!').then(console.log).catch(console.log)
```

## 📚 API

### `shellExec(command, options)`

**Parameters:**

- *`command`* {String | Array} - String or Array of commands to run
- *`options`* {Object} - Options object passed to [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)

The function then returns a `Promise`.

See the hosted docs [here]()

## 💬 Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please [open up an issue](https://github.com/tiaanduplessis/feature-flip/issues) or [make a pull request](https://makeapullrequest.com/).

## 🪪 License

[MIT © Tiaan du Plessis](./LICENSE)

