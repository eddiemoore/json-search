import chalk from 'chalk'
import getFileList from './getFileList'
import loadJson from './loadJSON'
import print from './print'
import searchJSON from './searchJSON'

interface SearchOptions {
  search: string
  files: string
}

const search = async (opts: SearchOptions) => {
  if (!opts || typeof opts.search !== 'string') {
    console.log(chalk.red('Search term missing'))
    return
  }

  try {
    const fileList = await getFileList(opts.files)

    fileList.forEach((path: string) => {
      const file = loadJson(path)
      const items = searchJSON(opts, file)
      print(path, items)
    })
  } catch (err) {
    console.log(chalk.red(err.message))
  }
}

export default search
