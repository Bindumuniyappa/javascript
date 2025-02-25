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
