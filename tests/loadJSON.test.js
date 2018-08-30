const loadJson = require('../lib/loadJSON')

describe('load json', () => {
  it('should load and parse a json file', () => {
    const expected = require('./fixtures/users.json')
    const actual = loadJson('./tests/fixtures/users.json')
    expect(actual).toEqual(expected)
  })

  it("should throw an error if the file doesn't exist", done => {
    try {
      loadJson('./tests/fixtures/random file.json')
    } catch (error) {
      expect(error.toString()).toContain('no such file or directory')
      done()
    }
  })
})
