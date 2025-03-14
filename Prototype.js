//Both es6 class and constructor function uses prototype both es6 class give more readable and clean code
//with es6 class

// "use strict";
class person {
  constructor(name, text) {
    this.name = name;
    this.text = text;
  }

  greet() {
    console.log(`hi ${this.name}....${this.text}`);
  }
}

const bindu = new person("bindu", "how r u");
bindu.greet();

//with constructor function

function person1(name, age) {
  this.name = name;
  this.age = age;
}
person1.prototype.greet = function () {
  console.log(`${this.name}....${this.age}`);
};

const bob = new person1("alice", 25);
bob.greet();

//destructuring

const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); //4

//Array.from()

const myArr = new Set([1, 2, 3, 6, 2]);
console.log(Array.from(myArr));

//spread operator

let numArr = [1, 2, 3, 4, 5];
function display(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    console.log(i);
  }
}
display([...numArr]); //spread operator

//rest operator

function display(...numArr) {
  //packing
  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
  }
}
display(1, 2, 3, 4, 5);

let a = 12;
console.log(a * 12); //144
console.log(a ** 12); //12**12

function test() {
  salary = 120;
  console.log(salary);
}
test();

function test1() {
  console.log(test1.abc);
}

test1(); //undefined

test1.abc = 400;
test1.abc = 600;

test1(); //600

// console.log({} == {}); //false
// console.log({} === {}); //false

let a1 = {
  name: "bindu",
};
let b = {
  ...a1,
};

b.name = "shree";

console.log(a1.name);

//---------------------------------------------------------------
let a2 = 10;
let b2 = new Number(10);
let c2 = 10;
console.log(a2 === b2); //false
console.log(b2 === c2); //false

//========================================================================

function test3(record) {
  if (JSON.stringify(record) == JSON.stringify({ age: 28 })) {
    console.log("you are an adult");
  } else if (record === { age: 28 }) {
    console.log("you are still an adult");
  } else {
    console.log("no record");
  }
}
test3({ age: 28 });

//======================================================================

console.log(+true); //1

console.log(!"test"); //false

//=======================================================================

var ab = {};
var bc = { key: "b" };
var ca = { key: "c" };

ab[bc] = 600;
bc[ca] = 700;
bc[bc] = 400;

console.log(ab[ca]); //600
console.log(ab[bc]); //600
// console.log(bc[bc]); //undefined
console.log(bc[bc]);

console.log(bc[ca]); //400

//=====================================================

function check() {
  throw new Error("parameter required");
}
function displayName(name = check()) {
  console.log(name);
}
displayName("bindu"); //i have passed argument thats y i m getting "bindu"...if not i will be getting "parameter required"

//without inbuilt flattening the array

function flatteningArray(arr) {
  let res = [];
  function nestedArray(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        nestedArray(item);
      } else {
        res.push(item);
      }
    }
  }
  nestedArray(arr);
  return res;
}
console.log(flatteningArray([1, 2, [3, [4, 5], 6], 7, 8]));

//=======================================================================
//promise.all=====>waits for all promises to resolve or reject ...if any promise is rejected the whole promise.all fails...
// let p1 = Promise.reject("p1");
// let p2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
// let p3 = Promise.resolve("p3");

// let result = Promise.all([p1, p2, p3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//===========================================================================
//promise.allSettled()===>Waits for all promises to complete, whether they resolve or reject.
// Returns an array of objects { status: "fulfilled"/"rejected", value/reason }.

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("Error occurred");
// const p3 = new Promise((resolve) => setTimeout(() => resolve(30), 1000));

// Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

//=====================================================================================>

//Promise.race(promises)
// Resolves/rejects as soon as the first promise settles (either fulfilled or rejected).

// const p0 = Promise.reject("p0");
// const p1 = new Promise((resolve) => setTimeout(() => resolve("Fast"), 500));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000));

// Promise.race([p0, p1, p2])
//   .then((value) => console.log(value)) // p0
//   .catch((error) => console.log(error));

//=====================================================================================>>>>>>>>>.
//Promise.any(promises)=>Resolves as soon as the first successful promise resolves.
//  If all promises reject, it throws an AggregateError
const p1 = Promise.reject("Error 1");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 1000));
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
  .then((value) => console.log(value)) // ✅ "Success" (first resolved)
  .catch((error) => console.log(error.errors)); // ❌ If all fail, returns an array of errors
