//primitive types String number boolean undifined null

const number1 = -900;
const m = 900;

// console.log(Number(number) + 100);
// console.log(Number(m) + 1);
// console.log(Number.parseInt(number));
// console.log(Number.parseFloat(m));
// console.log(Number.isInteger(number));
// console.log(Number.isFinite(m));
console.log(Number.isNaN(Number(m)));
const number = "100";

const personName = "john";
const age = 30;
const address = "new road";
const isMarried = true;

const wholeSentence = `${personName}, you are ${age} years old. Your address is ${address.toUpperCase()}, married status:${isMarried}.");`;

console.log(wholeSentence);
// console.log(typeof number);

console.log(Number.isNaN(Number(personName)));

const person = {
  name: "john",
  age: 30,
  address: "new road",
  isMarried: true,
};

const tv = {
  brand: "sony",
  price: 50000,
  color: "black",
  size: "42 inch",
};
const car = {
  brand: "BMW",
  price: 150000,
  color: "red",
  year: 2021,
};

const rating = 7.56;
console.log(Math.floor(rating));
console.log(Math.ceil(rating));
console.log(Math.round(rating));
console.log(Math.trunc(rating));
console.log(Math.PI);
console.log(Math.cbrt(27));
console.log(Math.sqrt(4));
console.log(Math.pow(2, 4));
console.log(Math.max(22, 45, 34, 66));
console.log(Math.min(22, 55, 11, 66, 77));
console.log(Math.trunc(Math.random() * 9) + 1);
console.log(Math.abs(-10));
console.log(Math.sin(Math.PI / 4), Math.cos(Math.PI / 4));

const radius = 7;
const circumference = 2 * Math.PI * radius;
console.log(circumference);
