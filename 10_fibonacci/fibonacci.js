const fibonacci = function (number) {
  if (Number.isNaN(+number) || number < 0) return "OOPS";
  number = Number(number);

  if (number == 2 || number == 1) return 1;
  else return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
