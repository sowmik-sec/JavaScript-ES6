numbers = [1, 2, 3, 4, 5, 6, 7];

const result = numbers.map((element) => element * element);

console.log(result);

const bigger = numbers.filter((x) => x > 3);
console.log(bigger);

const isThere = numbers.find((x) => x > 5);

console.log(isThere);
