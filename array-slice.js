const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part = arr.slice(3, 5);
console.log(part);

const removed = arr.splice(2, 5);
console.log(removed);

const together = arr.join(" ");
console.log(together);

console.log(arr);
