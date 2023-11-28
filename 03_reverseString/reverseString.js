const reverseString = function (words) {
  let reversedString = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedString += words[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
