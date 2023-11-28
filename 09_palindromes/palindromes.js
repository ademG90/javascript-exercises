const palindromes = function (string) {
  string = string.toLowerCase().split(" ").join("");
  string = [...string].filter((ele) => /\w/).join("");
  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
palindromes("adem kedIR FH");
// Do not edit below this line
module.exports = palindromes;
