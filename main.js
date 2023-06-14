const stringLength = (string) => {
  const str1 = string.match(/[\w]/gi);
  return str1 ? str1.length : 0;
}

const extStringLength = (string) => {
  const len = stringLength(string);
  if (len > 0 && len < 10) {
    return len;
  }
  else throw 'out of range';
  
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}


// console.log(extStringLength('1234567890'));
console.log(typeof '1');



module.exports = {stringLength, extStringLength, reverseString};