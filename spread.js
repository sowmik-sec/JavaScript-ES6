const numbers = [1, -1, 2, 5, 23, 5, 3, 6];
const max = Math.max(...numbers);
console.log(max);
const number2 = [...numbers];
numbers.push(423);
number2.push(234);
console.log(numbers);
console.log(number2);
