// backup funciton
function add(num1, num2 = 4) {
  return num1 + num2;
}

console.log(add(1));

// careat naki ki zeno bole!

const firstName = "Ahsan";
const lastName = "Habib";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// arrow funciton

const sum = (num1, num2) => num1 + num2;

console.log(sum(4, 5));

// three dots

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const array = [...arr1, ...arr2];
console.log(array);

console.log(Math.max(...array));

// destructure

const person = {
  fName: "Ahsan",
  lName: "Habib",
  address: "Bhurungamari",
  country: "Bangladesh",
};

const { fName, lName } = person;

console.log(fName);

const arr = [2, 5, 1, 3];
const { firstNumber, ...rest } = arr;
console.log(rest);
