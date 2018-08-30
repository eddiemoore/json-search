import * as _glob from 'glob'
import * as util from 'util'
const glob = util.promisify(_glob)

const getFileList = async (fileGlob: string) => {
  if (!fileGlob || typeof fileGlob !== 'string') {
    throw new Error('Files glob is missing')
  }

  const files = await glob(fileGlob)

  if (files.length === 0) {
    throw new Error(`No files found that match ${fileGlob}`)
  }

  return files
}

export default getFileList
