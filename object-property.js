const students = [
  { id: 21, name: "Omar Sunny" },
  { id: 31, name: "Ziarul Islam" },
  { id: 41, name: "Alomgir Hossain" },
  { id: 11, name: "Sada Babu" },
  { id: 51, name: "Kala Dulal" },
];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

const names = students.map((s) => s.name);
const ids = students.map((s) => s.id);
console.log(ids);

const bigger = students.filter((s) => s.id > 30);
console.log(bigger);
