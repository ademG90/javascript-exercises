// const findTheOldest = function (person) {
//   const currentYear = 2023;
//   console.log(person);
//   const sortedAge = person.sort((a, b) => {
//     if (!a.yearOfDeath) a.yearOfDeath = currentYear;
//     if (!b.yearOfDeath) b.yearOfDeath = currentYear;
//     const ageA = a.yearOfDeath - a.yearOfBirth;
//     const ageB = b.yearOfDeath - b.yearOfBirth;
//     console.log(ageA, ageB);
//     return ageA < ageB ? 1 : -1;
//   });
//   console.log(sortedAge[0].name);
//   return sortedAge[0];
// };

const findTheOldest = function (person) {
  const currentYear = 2023;

  return person.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = currentYear;
    if (!b.yearOfDeath) b.yearOfDeath = currentYear;
    const ageA = a.yearOfDeath - a.yearOfBirth;
    const ageB = b.yearOfDeath - b.yearOfBirth;
    return ageA < ageB ? 1 : -1;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
findTheOldest(people);
