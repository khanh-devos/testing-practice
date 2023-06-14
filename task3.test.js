const Calculator = require("./calculator");

describe('task3', () => {

  it('add', () => {
    expect(Calculator.add(1,2)).toBe(3);
    expect(Calculator.add(0,200)).toBe(200);
    expect(Calculator.add(10,1)).toBe(11);
  });

  it('subtract', () => {
    expect(Calculator.subtract(1,2)).toBe(-1);
    expect(Calculator.subtract(0,200)).toBe(-200);
    expect(Calculator.subtract(10,1)).toBe(9);
  });

  it('multiply', () => {
    expect(Calculator.multiply(1,2)).toBe(2);
    expect(Calculator.multiply(0,200)).toBe(0);
    expect(Calculator.multiply(10,1)).toBe(10);
  });

  it('divide', () => {
    expect(Calculator.divide(1,2)).toBe(0.5);
    expect(Calculator.divide(0,200)).toBe(0);
    expect(() => Calculator.divide(10,0)).toThrow(/cannot divide a ZERO/);
  })

})