data-mocker-cli
===============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/data-mocker-cli.svg)](https://npmjs.org/package/data-mocker-cli)
[![Downloads/week](https://img.shields.io/npm/dw/data-mocker-cli.svg)](https://npmjs.org/package/data-mocker-cli)
[![License](https://img.shields.io/npm/l/data-mocker-cli.svg)](https://github.com/Gunmer/data-mocker-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g data-mocker-cli
$ dmcli COMMAND
running command...
$ dmcli (-v|--version|version)
data-mocker-cli/0.0.0 darwin-x64 node-v12.7.0
$ dmcli --help [COMMAND]
USAGE
  $ dmcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dmcli generate [FILE]`](#dmcli-generate-file)
* [`dmcli hello [FILE]`](#dmcli-hello-file)
* [`dmcli help [COMMAND]`](#dmcli-help-command)

## `dmcli generate [FILE]`

describe the command here

```
USAGE
  $ dmcli generate [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generate.ts](https://github.com/Gunmer/data-mocker-cli/blob/v0.0.0/src/commands/generate.ts)_

## `dmcli hello [FILE]`

describe the command here

```
USAGE
  $ dmcli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dmcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Gunmer/data-mocker-cli/blob/v0.0.0/src/commands/hello.ts)_

## `dmcli help [COMMAND]`

display help for dmcli

```
USAGE
  $ dmcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
