const util = require('util')
const glob = util.promisify(require('glob'))

/**
 * Get file list from glob
 * @param {string} fileGlob - glob to search
 */
const getFileList = async fileGlob => {
  if (!fileGlob || typeof fileGlob !== 'string') {
    throw new Error('Files glob is missing')
  }

  const files = await glob(fileGlob)

  if (files.length === 0) {
    throw new Error(`No files found that match ${fileGlob}`)
  }

  return files
}

module.exports = getFileList
