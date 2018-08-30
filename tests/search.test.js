const chalk = require('chalk')
const search = require('../lib/search')

describe('find', () => {
  let originalConsole = console.log
  beforeAll(() => {
    console.log = jest.fn()
  })

  afterAll(() => {
    console.log = originalConsole
  })

  it('should fail without passing arguments', async () => {
    const expected = chalk.red('Search term missing')
    await search()
    expect(console.log).toHaveBeenCalledWith(expected)
  })

  it('should fail when passing an empty object', async () => {
    const expected = chalk.red('Search term missing')
    await search({})
    expect(console.log).toHaveBeenCalledWith(expected)
  })

  it('should fail when files glob missing', async () => {
    const expected = chalk.red('Files glob is missing')
    await search({ search: 'Luke Skywalker' })
    expect(console.log).toHaveBeenCalledWith(expected)
  })

  it('should fail when the files is not a string', async () => {
    const expected = chalk.red('Files glob is missing')
    await search({ search: 'Darth Vader', files: 2 })
    expect(console.log).toHaveBeenCalledWith(expected)
  })

  it('should fail if no files are found', async () => {
    const files = './somedirthatdoesntexist/*.json'
    const expected = chalk.red(`No files found that match ${files}`)
    await search({ search: 'Han Solo', files })
    expect(console.log).toHaveBeenCalledWith(expected)
  })

  it('should search the files', async () => {
    const asTable = require('as-table').configure({
      delimiter: chalk.cyan(' | '),
      dash: chalk.cyan('-'),
      title: x => chalk.magenta.bold(x),
    })
    const files = './tests/fixtures/*.json'
    await search({ search: 'ringo', files })
    expect(console.log).toHaveBeenCalledWith(
      chalk.green('./tests/fixtures/users.json')
    )
    expect(console.log).toHaveBeenCalledWith(
      asTable([{ id: 4, name: 'ringo' }]) + '\n'
    )
  })

  it('should output no entries matching', async () => {
    const files = './tests/fixtures/*.json'
    await search({ search: 'dave', files })
    expect(console.log).toHaveBeenCalledWith(
      chalk.green('./tests/fixtures/users.json')
    )
    expect(console.log).toHaveBeenCalledWith(
      chalk.yellow(`No matching entries\n`)
    )
  })
})
