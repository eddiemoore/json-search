const chalk = require('chalk')
const getFileList = require('./getFileList')
const loadJson = require('./loadJSON')
const searchJSON = require('./searchJSON')
const print = require('./print')

/**
 * Find and print table
 * @param {Object} opts - Search options
 * @param {string} opts.search - Search term
 * @param {string} opts.files - Files glob
 */
const search = async (opts = {}) => {
  if (typeof opts.search !== 'string') {
    console.log(chalk.red('Search term missing'))
    return
  }

  try {
    const fileList = await getFileList(opts.files)

    fileList.forEach(path => {
      const file = loadJson(path)
      const items = searchJSON(opts, file)
      print(path, items)
    })
  } catch (err) {
    console.log(chalk.red(err.message))
  }
}

module.exports = search
