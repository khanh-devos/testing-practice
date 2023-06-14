const funcs = require('./main');

describe('task2', () => {
  it('reverse a string', () => {
    expect(funcs.reverseString('123')).toBe('321')
  })
})