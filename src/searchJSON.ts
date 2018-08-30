interface Options {
  search: string
}

const containsTerm = (options: Options) => (x: any): boolean => {
  if (x === Object(x)) {
    return Boolean(Object.values(x).some(containsTerm(options)))
  }
  if (options.search === '') {
    return x === options.search
  }
  return String(x)
    .toLowerCase()
    .includes(options.search.toLowerCase())
}

const searchJSON = (options: Options, json: any[] | object) => {
  if (!Array.isArray(json) && json !== Object(json)) {
    throw new Error('JSON is not valid')
  }

  if (Array.isArray(json)) {
    return json.filter(containsTerm(options))
  }

  return Object.entries(json).reduce(
    (acc: object[], [key, value]: [string, any]) => {
      return containsTerm(options)(value) ? acc.concat({ [key]: value }) : acc
    },
    []
  )
}

export default searchJSON
