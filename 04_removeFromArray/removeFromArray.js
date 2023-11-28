const removeFromArray = function (array, ...removedArray) {
  return array.filter((a) => {
    return !removedArray.includes(a);
  });
};
[1, 2, 3, 4, 5, 6, 7, 8].forEach((a, b, c) => {
  console.log(a + " " + b + " " + c);
});

// Do not edit below this line
// module.exports = removeFromArray;
