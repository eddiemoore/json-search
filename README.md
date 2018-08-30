# JSON Search

[![codecov](https://img.shields.io/codecov/c/github/eddiemoore/json-search.svg?style=flat-square)](https://codecov.io/gh/eddiemoore/json-search)
[![Build Status](https://img.shields.io/travis/eddiemoore/json-search/master.svg?style=flat-square)](https://travis-ci.org/eddiemoore/json-search)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/eddiemoore/json-search.svg?style=flat-square)](https://david-dm.org/eddiemoore/json-search)
[![dev dependencies](https://img.shields.io/david/dev/eddiemoore/json-search.svg?style=flat-square)](https://david-dm.org/eddiemoore/json-search?type=dev)

Command line tool to search JSON

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need node version `8` or higher

Clone the repository

```bash
$ git clone https://github.com/eddiemoore/json-search.git
$ cd json-search
```

Install dependencies

```bash
$ npm install
```

If you would like to use the cli in any directory, you may install it globally

```bash
$ npm i -g
```

## Build

No build step required. 😀

### Usage

To run the cli in the cloned repositories directory

```bash
$ node index.js -s <search_term> [-f <files_glob>]
```

Or if the cli has been installed globally

```
$ zdsearch -s <search_term> [-f <files_glob>]
```

By default the cli will search the json files within the `data` folder.

```bash
$ zdsearch -s "Miss Coffey"
```

If you would like to search other json files, you may pass a files glob option.

```bash
$ zdsearch -s John -f './some_folder/*.json'
```

#### Options

- `--search`, `-s` - Term to search for (required)
- `--files`, `-f` - Glob for files to search

## Running Tests

```bash
$ npm test
```

## Licence

The MIT License (MIT)
