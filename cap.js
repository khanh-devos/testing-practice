const capitalize = (s) => {
  if (typeof s === "string"){
    return s.charAt(0).toUpperCase() + s.substring(1); 
  }
  else throw "input should be a text"


};

module.exports = capitalize;