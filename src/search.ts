import chalk from 'chalk'
import getFileList from './getFileList'
import loadJSON from './loadJSON'
import print from './print'
import searchJSON from './searchJSON'

interface SearchOptions {
  search: string
  files: string
}

const search = async (opts: SearchOptions) => {
  try {
    if (!opts || typeof opts.search !== 'string') {
      throw new Error('Search term missing')
    }

    const fileList = await getFileList(opts.files)

    fileList.forEach((path: string) => {
      const file = loadJSON(path)
      const items = searchJSON(opts, file)
      print(path, items)
    })
  } catch (err) {
    console.log(chalk.red(err.message))
  }
}

export default search
