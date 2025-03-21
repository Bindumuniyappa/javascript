// Array.prototype.myMap = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       res.push(callback(this[i], i, this));
//     }
//   }
//   return res;
// };
// let arr = [1, 2, 3, 4];
// let mappedArry = arr.myMap((num) => num * 2);
// console.log(mappedArry);

// Array.prototype.myFilter = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };
// let arr = [1, 2, 3, 4];
// let filteredArry = arr.myFilter((num) => num % 2 == 0);
// console.log(filteredArry);

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue == undefined ? initialValue : this[0];
//   let startIndex = initialValue == undefined ? 0 : 1;

//   for (let i = startIndex; i < this.length; i++) {
//     if (this.hasOwnProperty(i)) {
//       accumulator = callback(accumulator, this[i], i, this);
//     }
//   }
//   return accumulator;
// };
// let arr = [1, 2, 3, 4];
// let accu = arr.myReduce((acc, ini) => acc + ini, 0);
// console.log(accu);

//==================================================================================>>>>>>>>>>>>>>>>

//promise.all polyfill

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = 0;
    let completedPromises = 0;
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;
          if (completedPromises === promises.length) {
            return resolve[results];
          }
        })
        .catch((error) => console.log(error));
    });
  });
}
let p1 = Promise.reject("p1");
let p2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
let p3 = Promise.resolve("p3");

promiseAll([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

///---------------------------------------------------------------------->>>>>>>>>>>>>

// console.log(a); //undefined
// console.log(b); //reference error ---b is not defined
// var a = (b = 5);

//------------------------------------------------------------------------->>>>>>>>>>>>

console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false

//------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>
const foo1 = () => {
  console.log(this.name); //undefined
};
foo1.call({ name: "bindu" });
const foo = function () {
  console.log(this.name); //bindu
  const bar = () => {
    console.log(this.name); //bindu
  };
  bar();
};
foo.call({ name: "bindu" });
