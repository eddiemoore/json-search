import chalk from 'chalk'

const asTable = require('as-table').configure({
  dash: chalk.cyan('-'),
  delimiter: chalk.cyan(' | '),
  title: (x: string) => chalk.magenta.bold(x),
})

const print = (title: string, items: any[]) => {
  console.log(chalk.green(title))

  if (items.length === 0) {
    console.log(chalk.yellow('No matching entries\n'))
    return
  }

  console.log(asTable(items) + '\n')
}

export default print
