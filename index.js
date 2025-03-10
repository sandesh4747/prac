//primitive types String number boolean undifined null
/*
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
console.log(circumference); */

// const isLogin = null;
// const some = false;
// console.log(some);
// let b = 190;

// if (b % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// const cal = b % 2 == 0 ? `even` : `odd`;
// console.log(cal);

// let a = 100;
// const age = 30;
// const calc = age < 20 ? `junior` : age > 50 ? `senior` : `regular`;
// console.log(calc);
/*
const list = [1, 2, 3, 4, 5, 6, 87];
let max = list[3];
for (let i of list) {
  if (i > max) {
    max = i;
  }
}
console.log(`Max number:${max}`);
*/

/*
const medal = 1;

switch (medal) {
  case 1:
    console.log("you got gold medal");
    break;
  case 2:
    console.log("you got silver medal");
    break;
  case 3:
    console.log(" you got bronze medal");
    break;
  default:
    console.log("please try again");
}
    */

// let i = 0;
// while (i < 20) {
//   i++;
//   if (i % 2 !== 0) {
//     console.log(`${i}`);
//   }
// }
// i = 0;
// do {
//   i++;
//   console.log(`Hello world ${i}`);
// } while (1 < i);

/*
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else if (i % 2 !== 0) {
    sumOdd += i;
  }
}
console.log(sumOdd);
console.log(sumEven);



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
} */

/*
for (let i = 1; i <= 20; i++) {
  if (i >= 5 && i <= 10) {
    continue;
  }
  console.log(i);
}*/

// const numbers = [11, 22, 33, 44, 55, 66, 77];
// for (let i in numbers) {
//   console.log(`${i}`);
// }

/*
const numbers = [11, 100, 33, 44, 55, 88, 77];
let max = numbers[2];
for (let i of numbers) {
  if (i > max) {
    max = i;
  }
}
console.log(max);
*/
/*
const numbers = [11, 100, 33, 44, 99, 88, 0];
const person = ["Ram", "Shyam", "Hari", "Sita"];
// numbers.push(12, 12, 12, 21);
// numbers.pop();
// numbers.shift();
// numbers.unshift(12);
const isThere = numbers.includes(11);*/
// console.log(isThere);
// console.log(numbers);

// const join = numbers.concat(6, 7, 8, 11);
// console.log(join);

// const c = numbers.slice(3, 5);
// numbers.splice(3, 3);

// console.log(person.join("     "));

//forEach, map, find, filter, reduce
/*
person.forEach(function (el, index, arr) {
  console.log(` Hello ${el.toUpperCase()}`);
});

let sum = 0;
numbers.forEach(function (el, index, arr) {
  // console.log(index);
  // console.log(arr);
  sum += el;
});
console.log(`Total:${sum}`);

const capital = person.map(function (a, b) {
  return a;
});
console.log(capital[2].toUpperCase());

const num = numbers.find(function (a) {
  return a > 80;
});
console.log(num);

const even = numbers.filter(function (a) {
  if (a % 2 === 0) {
    return a;
  }
});
console.log(even);
const odd = numbers.filter(function (a) {
  if (a % 2 !== 0) {
    return a;
  }
});
console.log(odd);
*/

// person.reduce(function () {});

/*
const sum = function (a, b) {
  const sum1 = a + b;
  return sum1;
};
const sum1 = sum(2, 4);
console.log(sum1);

const multiply = function (a, b) {
  const mul = a * b;
  return mul;
};
const mul = multiply(2, 4);
console.log(mul);

const divide = function (a, b) {
  const d = a / b;
  return d;
};
const d = divide(2, 4);
console.log(d);*/

// call back function
// const parentFunc = function (event, callback) {
//   if (event === "click") {
//     callback();
//   }
// };

// const greet = function () {
//   console.log("hello gooddd morning");
// };

// parentFunc("click", function () {
//   console.log("hello good morning");
// });

/*
const pers = "Shyam";
const numbers = [11, 22, 33, 44, 55];
numbers[0] = 99;
console.log(numbers);

const person = {
  name: "Ram",
  age: 33,
};

person.name = "Hari";
console.log(person);

*/
// const person = {
//   first: "ram",
//   last: "sharma",
//   addres: "new road",
//   age: 90,
//   getFullName: function () {
//     console.log(this.first + this.last);
//   },
// };
// person.getFullName();
/*
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}
const car1 = new Car("BMW", 200);
const car2 = new Car("LAMBO", 300);
console.log(car1);
console.log(car2);

function Bank(name, establish) {
  this.name = name;
  this.establish = establish;
}
const bank1 = new Bank("xyz bank", 2002);
const bank2 = new Bank("abc bank", 1990);
console.log(bank1);
console.log(bank2);

function User(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new User("ram", 90);
const user2 = new User("shyam", 100);

console.log(user1);
console.log(user2);*/
// const add = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Enter a number";
//   } else {
//     return a + b;
//   }
// };
// const sum = add(2, "2");
// console.log(sum);

const addTwoNumber = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return " please provide valid number";
  }
};
const some = addTwoNumber(2);
console.log(some);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const user11 = new User("Ram", 90);
// const user12 = new User("Shyam", 90);
// console.log(user11);
// console.log(user12);

// function Userr(name, age) {
//   this.name = name;
//   this.age;
// }

// const ueser1 = new Userr("ram", 90);
// const ueser2 = new Userr("Sita", 60);
// console.log(ueser1);

// const user1 = {
//   name: "Ram",
//   age: 22,
// };
// const user2 = {
//   name: "Hari",
//   age: 40,
// };
// const user3 = {
//   name: "John",
//   age: 11,
// };
// const user4 = {
//   name: "Sita",
//   age: 33,
// };

//make a function that takes array of numbers as argument and  it gives  sum of  that numbers;

const num2 = [10, 20, 30, 40, 50, 60];
const sum = num2.reduce((acc, curr) => acc + curr);
console.log(sum);

/*



//primitive types String number boolean undefined null
// reference types Array , Object, Function

//primitive types String number boolean undefined null
// reference types Array , Object, Function

/*
class User {
  constructor(personName, age) {
    this.personName = personName;
    this.age = age;
  }
  //methods
  reading() {
    console.log(`${this.personName} is reading a book`);
  }
  sleeping() {
    console.log(`${this.personName} is sleeping`);
  }

  get someName() {
    return "hello jee";
  }

  set setVal(val) {
    this.personName = val;
  }
}

class A extends User {
  constructor(personName, age) {
    super(personName, age);
  }
}
const userA = new A("rita", 90);

userA.sleeping();

const user1 = new User("shyam", 190);
user1.setVal = "rita";
console.log(user1.personName);
*/

const numbers = [11, 22, 33];
const [a, b, c, d] = numbers;
console.log(a, b, c, d);

const persons = {
  name: "ram",
  age: 90,
  address: "new road",
  habits: ["sing", "dance", "code"],
  some: {
    add: {
      gio: [
        {
          fi: [99],
        },
      ],
    },
  },
};
// const { name, age, address } = persons;
// console.log(name, age, address);

const {
  name,
  age,
  address,
  habits: [x, y],
  some: {
    add: {
      gio: [
        {
          fi: [w],
        },
      ],
    },
  },
} = persons;
console.log(name, age, address, x, y, w);

const posts = [
  { id: 1, name: "ram", age: 90 },
  { id: 2, name: "shyam", age: 70 },
  { id: 3, name: "rita", age: 60 },
  { id: 4, name: "hari", age: 50 },
];

const p = posts.map(({ name, id, age }) => {
  return name;
});
console.log(p);
