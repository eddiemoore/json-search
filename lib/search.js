const chalk = require('chalk')
const getFileList = require('./getFileList')
const loadJSON = require('./loadJSON')
const searchJSON = require('./searchJSON')
const print = require('./print')

/**
 * Find and print table
 * @param {Object} opts - Search options
 * @param {string} opts.search - Search term
 * @param {string} opts.files - Files glob
 */
const search = async (opts = {}) => {
  try {
    if (typeof opts.search !== 'string') {
      throw new Error('Search term missing')
    }

    const fileList = await getFileList(opts.files)

    fileList.forEach(path => {
      const file = loadJSON(path)
      const items = searchJSON(opts, file)
      print(path, items)
    })
  } catch (err) {
    console.log(chalk.red(err.message))
  }
}

module.exports = search
