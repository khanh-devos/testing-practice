const funcs = require('./main');

describe('task1', () => {
  it('count length, condition OK', () => {
    expect(funcs.extStringLength('123')).not.toBe(6);
    expect(funcs.extStringLength('abc123ABC')).toBe(9);
    expect(funcs.extStringLength('  a123C  ')).toBe(5);
    expect(() => funcs.extStringLength('a  123567890  D')).toThrow(/out of range/);

  });

  it('ccount length, condition failed, throw errors', () => {
    expect(() => funcs.extStringLength('a  123567890  D')).toThrow(/out of range/);

    expect(() => funcs.extStringLength('    ')).toThrow(/out of range/);
    expect(() => funcs.extStringLength('')).toThrow(/out of range/);


  });

})