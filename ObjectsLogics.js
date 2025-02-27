function highestValueKey(obj) {
  let temp = 0;
  let res = "";
  for (let ind in obj) {
    if (obj[ind] > temp) {
      temp = obj[ind];
      res = ind;
    }
  }
  return res;
}
console.log(highestValueKey({ a: 5, b: 12, c: 8 })); //output:b

function countWords(arr) {
  let seen = {};
  for (let item of arr) {
    seen[item] = (seen[item] || 0) + 1;
  }
  return seen;
}
console.log(
  countWords(["apple", "banana", "apple", "orange", "banana", "apple"]) //{ apple: 3, banana: 2, orange: 1 }
);

function mergeObjects(obj1, obj2) {
  let merged = {};
  for (let item in obj1) {
    merged[item] = obj1[item];
  }
  for (let item in obj2) {
    merged[item] = (merged[item] || 0) + obj2[item];
  }
  return merged;
}
console.log(mergeObjects({ a: 10, b: 20 }, { b: 15, c: 30 }));
// Output: { a: 10, b: 35, c: 30 }

function sortByKey(arr, key) {
  //  let sort=arr.sort((a,b)=>a[key]-b[key]);
  //  return sort;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j][key] > arr[j + 1][key]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(
  sortByKey(
    [
      { name: "A", age: 25 },
      { name: "B", age: 20 },
    ],
    "age"
  )
);
// Output: [{ name: "B", age: 20 }, { name: "A", age: 25 }]

function objectToArray(obj) {
  let entriesArr = [];
  let index = 0;
  for (let key in obj) {
    entriesArr[index] = [key, obj[key]];
    index++;
  }
  return entriesArr;
}
console.log(objectToArray({ a: 1, b: 2, c: 3 }));
// Output: [['a', 1], ['b', 2], ['c', 3]]
