import * as fs from 'fs'
import { resolve } from 'path'

const loadJSON = (path: string) => {
  const data = fs.readFileSync(resolve(path), 'utf8')
  return JSON.parse(data)
}

export default loadJSON
