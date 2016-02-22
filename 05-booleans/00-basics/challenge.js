module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return !(one === two);
};

module.exports.inBetween = function(lower, middle, upper) {
  return (middle>lower) && (middle<upper);
};

module.exports.outsideRanges = function(number) {
  if(number>1 && number<6)
    return false;
  if(number>42 && number<=75)
    return false;
  if(number>=10 && number<=20)
    return false;
  return true;
};

module.exports.nameAndPrice = function(name, price) {
  return price>=1 && (name==="NYTimes" || name==="LATimes");
};
