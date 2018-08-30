import * as fs from 'fs'
import { resolve } from 'path'

const loadJson = (path: string) => {
  const data = fs.readFileSync(resolve(path), 'utf8')
  return JSON.parse(data)
}

export default loadJson
