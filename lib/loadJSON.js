const fs = require('fs')
const { resolve } = require('path')

/**
 * Load JSON file
 * @param {string} path - path to file
 */
const loadJSON = path => {
  const data = fs.readFileSync(resolve(path), 'utf8')
  return JSON.parse(data)
}

module.exports = loadJSON
