const chalk = require('chalk')
const asTable = require('as-table').configure({
  delimiter: chalk.cyan(' | '),
  dash: chalk.cyan('-'),
  title: x => chalk.magenta.bold(x),
})

/**
 * Print Table
 * @param {string} title
 * @param {Array} items
 */
const print = (title, items) => {
  console.log(chalk.green(title))

  if (items.length === 0) {
    console.log(chalk.yellow('No matching entries\n'))
    return
  }

  console.log(asTable(items) + '\n')
}

module.exports = print
