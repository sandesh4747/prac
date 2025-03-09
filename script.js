/*
// Check if a number is even or odd

const num = 99;
if (num % 2 === 0) {
  console.log(`Even`);
} else {
  console.log(`Odd`);
}

// Check if a number is positive, negative or Zero

const num1 = 10;
if (num1 > 0) {
  console.log(`Positive`);
} else if (num1 < 0) {
  console.log(`Negative`);
} else {
  console.log(`Zero`);
}

// Check if a person is eligible to vote

const age = 18;
if (age >= 18) {
  console.log(`Eligible to vote`);
} else {
  console.log(`Not eligible to vote`);
}

// Find the greatest of two numbers
const a = 120;
const b = 120;
if (a > b) {
  console.log(`a:${a} is greater than b:${b}`);
} else if (a < b) {
  console.log(`b:${b} is greater than a:${a} `);
} else {
  console.log(`Both are equal`);
}
const c = 1;
const d = 1;
const e = 1;

if (c > d && c > e) {
  console.log(`c:${c} is greatest number`);
} else if (d > c && d > e) {
  console.log(`d:${d} is greatest number`);
} else if (e > c && e > d) {
  console.log(`e:${e} is greatest number`);
} else {
  console.log(`All are equal`);
}

// Check if a character is a vowel or consonant

const char1 = "A";
if (
  char1.toLowerCase() === "a" ||
  char1.toLowerCase() === "e" ||
  char1.toLowerCase() === "i" ||
  char1.toLowerCase() === "o" ||
  char1.toLowerCase() === "u"
) {
  console.log(`Vowel`);
} else {
  console.log(`Consonant`);
}
const char2 = "a";
if ("aeiou".includes(char2.toLocaleLowerCase())) {
  console.log(`Vowel`);
} else {
  console.log(`Consonant`);
}

// Check if a number is a multiple of 5
const num2 = 100;
if (num2 % 5 === 0) {
  console.log(`Multiple of 5`);
} else {
  console.log(`Not a multiple of 5`);
}

// Determine the grade based on marks
const mark = 89;
if (mark >= 80 && mark <= 89) {
  console.log(`B`);
} else if (mark >= 70 && mark <= 79) {
  console.log(`C`);
} else if (mark >= 60 && mark <= 69) {
  console.log(`D`);
} else if (mark < 60) {
  console.log(`Fail`);
} else {
  console.log(`A`);
}

// Check if a year is a leap year
const year = 2004;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`leap year`);
} else {
  console.log(`Not a leap year`);
}

// Check if a person is an adult. teenager, or child
const age1 = 2;
if (age1 >= 18) {
  console.log(`Adult`);
} else if (age1 >= 13 && age1 <= 17) {
  console.log(`Teenager`);
} else {
  console.log(`Child`);
}

const netSalary = 10000;
const expenses = 10000;
if (netSalary > expenses) {
  console.log(`YOu have saved ${netSalary - expenses} this month`);
} else if (expenses > netSalary) {
  console.log(`You have lost ${expenses - netSalary} this month`);
} else {
  console.log(`Your balance hasn't changed`);
}

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(`${i}`);
  }
}

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//---map-------------
// 💪 Question 1: Convert temperatures from Celsius to Fahrenheit
//👉 Formula: (C * 9/5) + 32 = F
const celsius = [273, 44, 55, 77];

const fahrenheit = celsius.map((temp) => (temp * 9) / 5 + 32);
console.log(fahrenheit);

// 💪 Question 2: Extract first names from an array of objects

const nameObject = [
  { name: "Alice Johnson", age: 25 },
  { name: "Bob Smith", age: 30 },
  { name: "Charlie Brown", age: 35 },
];

const firstName = nameObject.map((first) => first.name.split(" ")[0]);

console.log(firstName);

// Question 3: Square each number in the array
const num = [2, 3, 4, 5, 6, 7];
const sqNum = num.map((sqNum) => sqNum ** 2);
console.log(sqNum);

//------filter---------
// Question 4: Get only positive numbers from the array

const numbers = [-12, -14, -66, 55, 6, 7, 8, 9, 7, -8];

const positive = numbers.filter((positive) => positive > 0);

console.log(positive);

// 💪 Question 5: Get users older than 30
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
];
const olderThan30 = users.filter((older) => older.age > 30);
console.log(olderThan30);

// 💪 Question 6: Filter out even numbers

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = num1.filter((even) => even % 2 === 0);
console.log(even);

//-------reduce---------
// 💪 Question 7: Find the sum of all numbers in an array

const num2 = [10, 20, 30, 40, 50, 60];
const sum = num2.reduce((acc, curr) => acc + curr);
console.log(sum);

// 💪 Question 8: Find the highest number in an array
const num3 = [5, 12, 8, 130, 44];

const highest = num3.reduce((acc, curr) => (acc > curr ? acc : curr), num3[0]);
console.log(highest);

// 💪 Question 9: Count how many times each letter appears in a word
const word = "javascript";

const letterCount = word.split("").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1; // If letter exists, increment count; otherwise, set to 1
  return acc;
}, {});

console.log(letterCount);
