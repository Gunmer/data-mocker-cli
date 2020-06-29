data-mocker-cli
===============


![CI](https://github.com/Gunmer/data-mocker-cli/workflows/CI/badge.svg)
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
data-mocker-cli/0.2.0 linux-x64 node-v12.18.1
$ dmcli --help [COMMAND]
USAGE
  $ dmcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dmcli generate NUMBER`](#dmcli-generate-number)
* [`dmcli help [COMMAND]`](#dmcli-help-command)

## `dmcli generate NUMBER`

Generate a file with mock data in json, csv or sql insert format

```
USAGE
  $ dmcli generate NUMBER

ARGUMENTS
  NUMBER  Number of mock data

OPTIONS
  -h, --help                 show CLI help
  -o, --output=sql|json|csv  Output file format
  -s, --schema=schema        (required) Schema of the data to be generated
```

_See code: [src/commands/generate.ts](https://github.com/Gunmer/data-mocker-cli/blob/v0.2.0/src/commands/generate.ts)_

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
