#!/usr/bin/env node
import * as path from 'path'
import * as yargs from 'yargs'
import search from './search'

const argv = yargs
  .usage('$0 --search <search_term> [--files <files_glob>]')
  .alias('h', 'help')
  .alias('v', 'version')
  .options({
    files: {
      alias: 'f',
      default: path.join(__dirname, '..', 'data', '*.json'),
      describe: 'Glob of JSON files to search. Defaults to included JSON',
      string: true,
    },
    search: {
      alias: 's',
      demandOption: true,
      describe: 'What you want to search for',
    },
  })
  .help().argv

search({ search: argv.search, files: argv.files })
