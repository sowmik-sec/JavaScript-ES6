// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const total = numbers.reduce((previous, current) => {
//   console.log(previous, current);
//   return previous + current;
// }, 0);
// console.log(total);

// const sowmik = {
//   firstName: "Ahsan",
//   lastName: "Habib",
//   degree: [{ ssc: 2013 }, { hsc: 2015 }, { bsc: { subject: "cse" } }],
// };

// console.log(sowmik.degree[2].bsc.subject);

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const sum = people.reduce((previousAge, cur) => {
  console.log(previousAge, cur["age"]);
  return previousAge + cur["age"];
}, 0);
console.log(sum);

// [person1, person2] = people;
// console.log(person2);
// console.log(person2["age"]);
