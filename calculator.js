const Calculator = {

  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw 'cannot divide a ZERO';
    else return a/b;
  }   

}

module.exports = Calculator;
