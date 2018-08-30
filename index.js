#!/usr/bin/env node
const path = require('path')
const argv = require('yargs')
  .usage('$0 --search <search_term> [--files <files_glob>]')
  .alias('h', 'help')
  .alias('v', 'version')
  .options({
    search: {
      alias: 's',
      describe: 'What you want to search for',
      demandOption: true,
    },
    files: {
      alias: 'f',
      describe: 'Glob of JSON files to search. Defaults to included JSON',
      string: true,
      default: path.join(__dirname, 'data', '*.json'),
    },
  })
  .help().argv

require('./lib/search')(argv)
