numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const square = (num) => num * num;

const num2 = numbers.map(square);
console.log(num2);

const products = [
  { id: 1, name: "laptop", price: 90000 },
  { id: 1, name: "mobile", price: 190000 },
  { id: 1, name: "watch", price: 5000 },
  { id: 1, name: "macbook", price: 225000 },
];

const item = products.map((x) => x.name);

console.log(item);
