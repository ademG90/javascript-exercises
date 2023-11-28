const convertToCelsius = function (fahrenheit) {
  const celsius = (5 / 9) * (fahrenheit - 32);
  if (Number.isInteger(celsius)) {
    return celsius;
  } else {
    return +celsius.toFixed(1);
  }
};

const convertToFahrenheit = function (celsius) {
  const fahrenheit = 1.8 * celsius + 32;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  } else {
    return +fahrenheit.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
