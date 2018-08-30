/**
 * Contains Term
 * @param {Object} options
 * @param {string} options.search - Term to search for
 * @returns {(x: any) => boolean}
 */
const containsTerm = options => x => {
  if (x === Object(x)) {
    return Object.values(x).some(containsTerm(options))
  }
  if (options.search === '') {
    return x === options.search
  }
  return String(x)
    .toLowerCase()
    .includes(options.search.toLowerCase())
}

/**
 * Search Array
 * @param {Object} options
 * @param {string} options.search - Term to search for
 * @returns {Array}
 */
const searchJSON = (options, json) => {
  if (!Array.isArray(json) && json !== Object(json)) {
    throw new Error('JSON is not valid')
  }

  if (Array.isArray(json)) {
    return json.filter(containsTerm(options))
  }

  return Object.entries(json).reduce((acc, [key, value]) => {
    return containsTerm(options)(value) ? acc.concat({ [key]: value }) : acc
  }, [])
}

module.exports = searchJSON
