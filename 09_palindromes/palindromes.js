const palindromes = function (string) {
  string = string.toLowerCase();

  let punctRE =
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  let spaceRE = /\s+/g;
  string = string.toLowerCase();
  string = string.replace(punctRE, "").replace(spaceRE, "");
  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

module.exports = palindromes;
