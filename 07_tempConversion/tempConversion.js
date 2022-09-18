const ftoc = function(inTemp) {
  let outTemp = Math.round(((inTemp - 32) * 5 / 9) * 10) / 10;
  return outTemp;
};

const ctof = function(inTemp) {
  let outTemp = Math.round(((inTemp * 9 / 5) + 32) * 10) / 10;
  return outTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
