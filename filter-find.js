const numbers = [2, 5, 2, 5123, 55, 25, 23, 4, 5, 7, 42, 6, 2];

const num2 = numbers.filter((x) => x % 2 == 0);
console.log(num2);

const num3 = numbers.filter((x) => x > 5);
console.log(num3);

const num4 = numbers.find((x) => x > 10);
console.log(num4);
