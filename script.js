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
