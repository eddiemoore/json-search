const searchJSON = require('../lib/searchJSON')

describe('search json', () => {
  it('should fail when json is not an array or object', done => {
    try {
      searchJSON({ search: 'rage' }, 42)
    } catch (error) {
      expect(error.toString()).toContain('JSON is not valid')
      done()
    }
  })

  it('should find shallow strings', () => {
    const data = [
      { name: 'john' },
      { name: 'paul' },
      { name: 'george' },
      { name: 'ringo' },
    ]
    const actual = searchJSON({ search: 'paul' }, data)
    const expected = [{ name: 'paul' }]
    expect(actual).toEqual(expected)
  })

  it('should find deep strings', () => {
    const data = [
      { name: 'john' },
      { name: 'paul', arr: ['george'] },
      { name: 'george' },
      { name: 'ringo' },
    ]
    const actual = searchJSON({ search: 'george' }, data)
    const expected = [{ name: 'paul', arr: ['george'] }, { name: 'george' }]
    expect(actual).toEqual(expected)
  })

  it('should find deep strings', () => {
    const deep = {
      name: 'ringo',
      attributes: [
        { age: 42, singles: [{ id: 24, name: 'Yellow Submarine' }] },
      ],
    }
    const data = [
      { name: 'john' },
      { name: 'paul', attributes: [{ age: 77 }] },
      { name: 'george' },
      deep,
    ]
    const actual = searchJSON({ search: 'yellow submarine' }, data)
    const expected = [deep]
    expect(actual).toEqual(expected)
  })

  it('should find deep numbers', () => {
    const deep = {
      name: 'ringo',
      attributes: [
        { age: 73, singles: [{ id: 24, name: "Octopus's Garden", track: 42 }] },
      ],
    }
    const data = [
      { name: 'john' },
      { name: 'paul', attributes: [{ age: 77 }] },
      { name: 'george' },
      deep,
    ]
    const actual = searchJSON({ search: '42' }, data)
    const expected = [deep]
    expect(actual).toEqual(expected)
  })

  it('should find part of word', () => {
    const data = [
      { name: 'leonardo' },
      { name: 'donatello' },
      { name: 'michelangelo' },
      { name: 'raphael' },
    ]
    const actual = searchJSON({ search: 'don' }, data)
    const expected = [{ name: 'donatello' }]
    expect(actual).toEqual(expected)
  })

  it('should search an empty string', () => {
    const data = [
      { id: 1, title: 'Something', description: 'A massive project' },
      { id: 2, title: 'Unknown project', description: '' },
    ]
    const actual = searchJSON({ search: '' }, data)
    const expected = [{ id: 2, title: 'Unknown project', description: '' }]
    expect(actual).toEqual(expected)
  })

  it('should search non array', () => {
    const data = {
      title: 'Mr. Magoo',
      attributes: [{ age: 42 }],
    }
    const actual = searchJSON({ search: '42' }, data)
    const expected = [
      {
        attributes: [{ age: 42 }],
      },
    ]
    expect(actual).toEqual(expected)
  })

  it('should return empty array with non array', () => {
    const data = {
      blah: 'blah blah',
      clean: true,
      scripts: {
        test: 'jest',
      },
    }
    const actual = searchJSON({ search: '99' }, data)
    const expected = []
    expect(actual).toEqual(expected)
  })
})
