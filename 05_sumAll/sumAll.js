const sumAll = function (small, big) {
  if (typeof small !== "number" || typeof big !== "number" || small * big < 0) {
    return "ERROR";
  }
  if (small > big) {
    const temp = small;
    small = big;
    big = temp;
  }
  let sumation = 0;
  for (let i = small; i <= big; i++) {
    sumation += i;
  }
  return sumation;
};

// Do not edit below this line
module.exports = sumAll;
