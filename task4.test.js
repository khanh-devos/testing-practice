const capitalize = require('./cap.js');

describe('task4', () => {

  it('test capitalize func', () => {
    expect(capitalize('khanh')).toBe('Khanh');
    expect(capitalize('a23v')).toBe('A23v');
    expect(() => capitalize(123)).toThrow(/should be a text/);
  })
})