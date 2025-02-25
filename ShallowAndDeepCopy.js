// const person = {
//   name: "bindu",
//   age: 25,
//   address: {
//     place: "bengaluru",
//     pincode: 560112,
//   },
// };

// const shallowCopy = Object.assign({}, person);
// console.log(person);

// console.log(shallowCopy);

// shallowCopy.color = "blue";

// console.log(person);

// console.log(shallowCopy);

// console.log("start");

// const timer = setTimeout(() => {
//   console.log("after 3 secs....");
// }, 3000);
// let count = 0;
// const timer = setInterval(() => {
//   console.log(count++);
//   if (count > 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// console.log("end");

// let arr = [1, [2, [3, 4]], 5];
// let resArr = arr.flat(2);
// console.log(resArr);

// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// function sayHello() {
//   console.log("hello from bindu");
// }

// let callFunc = debounce(sayHello, 4000);

// callFunc();
// callFunc();
// callFunc();
// callFunc();

// let str = "abcabcbb";
// let spltStr = str.split("");
// console.log(spltStr);
// let resArr = [];
// for (let i = 0; i < spltStr.length; i++) {
//   if (!spltStr[i] === spltStr[i + 1]) {
//     resArr.push(spltStr[i]);
//   }
// }
// console.log(resArr);

// 4. Write a function to *merge two sorted arrays* into a single sorted array without using built-in methods.

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [2, 4, 6, 8, 10];
// for (let i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1.sort((a, b) => a - b));

//binary search

let arr = [1, 5, 3, 69, 2, 56, 15];
let searchEle = 69;
let bool = false;
function binarySearch(arr, searchEle) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchEle) {
      //   console.log("have");
      bool = true;
      return bool;
      //   console.log(bool);
    }
  }
}

let res = binarySearch(arr, searchEle);
console.log(res);
