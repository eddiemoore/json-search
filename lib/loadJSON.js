const fs = require('fs')
const { resolve } = require('path')

/**
 * loadJson
 * @param {string} path - path to file
 */
const loadJson = path => {
  const data = fs.readFileSync(resolve(path), 'utf8')
  return JSON.parse(data)
}

module.exports = loadJson
