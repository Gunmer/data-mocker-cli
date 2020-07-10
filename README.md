data-mocker-cli
===============

![CI](https://github.com/Gunmer/data-mocker-cli/workflows/CI/badge.svg)
[![Version](https://img.shields.io/npm/v/data-mocker-cli.svg)](https://npmjs.org/package/data-mocker-cli)
![Downloads/week](https://img.shields.io/npm/dw/data-mocker-cli.svg)
![License](https://img.shields.io/npm/l/data-mocker-cli.svg)
[![codecov](https://codecov.io/gh/Gunmer/data-mocker-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/Gunmer/data-mocker-cli)

<!-- toc -->
* [Summary](#summary)
* [Usage](#usage)
* [Commands](#commands)
* [Schema file](#schema-file)
* [Field types](#field-types)
<!-- tocstop -->
# Summary
Cli to generate a test data set, with it you can generate any flat data structure, being able to specify the type of each field or attribute.

With it you can generate thousands of test data


# Usage
<!-- usage -->
```sh-session
$ npm install -g data-mocker-cli
$ dmcli COMMAND
running command...
$ dmcli (-v|--version|version)
data-mocker-cli/1.0.1 linux-x64 node-v12.18.1
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
  -o, --output=sql|json|csv  [default: json] Output file format
  -s, --schema=schema        (required) Schema of the data to be generated
```

_See code: [src/commands/generate.ts](https://github.com/Gunmer/data-mocker-cli/blob/v1.0.1/src/commands/generate.ts)_

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

# Schema file
The schema file is a json that contains a list of the fields that each data must have.

If you want to export in sql format, you can report the name of the table within the schema.json

```json
{
  "tableName": "people",
  "nameFormatter": "LowerSnakeCase",
  "fields": [
    {
      "type": "Number",
      "name": "Id",
      "isNullable": false,
      "min": 1
    },
    {
      "type": "Name",
      "name": "First Name"
    },
    {
      "type": "Surname",
      "name": "last name 2",
      "isNullable": true
    },
    {
      "type": "Enum",
      "name": "Gender",
      "isNullable": true,
      "source": ["Female", "Male", "Non-binary"]
    },
    {
      "type": "Phone",
      "name": "Mobile",
      "prefix": "+34",
      "pattern": "6dd dd dd dd"
    },
    {
      "type": "Email",
      "name": "Email",
      "userNames": ["gunmer", "ironMan", "spiderman"],
      "domains": ["private.es"]
    },
    {
      "type": "String",
      "name": "Description",
      "min": 25,
      "max": 100
    }
  ]
}
```

### NameFormatters
With this property you set the style of the name of the columns or attributes. If not reported by default it is LowerCamelCase

| NameFormatters | Formats                                |
|----------------|----------------------------------------|
| UpperCamelCase | 'lorem ipsum' formats as 'LoremIpsum'  |
| LowerCamelCase | 'lorem ipsum' formats as 'loremIpsum'  |
| UpperSnakeCase | 'lorem ipsum' formats as 'Lorem_Ipsum' |
| LowerSnakeCase | 'lorem ipsum' formats as 'lorem_ipsum' |
| UpperKebabCase | 'lorem ipsum' formats as 'Lorem-Ipsum' |
| LowerKebabCase | 'lorem ipsum' formats as 'lorem-ipsum' |
| WithoutFormat  | 'lorem ipsum' formats as 'lorem ipsum' |

## Common attributes

All fields contain the following attributes:

| Attribute  | Description                                                                | Required | Default |
|------------|----------------------------------------------------------------------------|----------|---------|
| type       | Indicates the type of the field, if it is a name, surname, number, etc...  | Yes      |         |
| name       | Name of the field with which the data will be created                      | Yes      |         |
| isNullable | If true 25% of data contains an undefined value in the field               | No       | false   |

# Field types
### String
Generates a text string (lorem ipsum) up to the maximum number of characters indicated

| Attribute | Description                               | Required |
|-----------|-------------------------------------------|----------|
| max       | Indicates the maximum value of the string | Yes      |
| min       | Indicates the minimum length range value  | No       |

### Number
Generate integers

| Attribute | Description   | Required | Default           |
|-----------|---------------|----------|-------------------|
| min       | Minimum value | False    | −9007199254740991 |
| max       | Maximum value | False    | 9007199254740991  |

### Enum
Randomly choose a value from the reported source

| Attribute | Description                | Required |
|-----------|----------------------------|----------|
| source    | Array of options to choose | Yes      |

### Name
Generate a random name

| Attribute | Description                   | Required |
|-----------|-------------------------------|----------|
| source    | Array of names to choose from | False    |

### Surname
Generate a random surname

| Attribute | Description                      | Required |
|-----------|----------------------------------|----------|
| source    | Array of surnames to choose from | False    |

### Email
Generate a random email with default or specific username and domain 

| Attribute | Description                       | Required |
|-----------|-----------------------------------|----------|
| userNames | Array of usernames to choose from | False    |
| domains   | Array of domains to choose from   | False    |

### Phone
Generate a random phone number with a pattern and prefix if needed

| Attribute | Description                             | Required | Default   |
|-----------|-----------------------------------------|----------|-----------|
| prefix    | Set the prefix number                   | False    | Empty     |
| pattern   | Set the patter with 'd' of phone number | False    | ddddddddd |
