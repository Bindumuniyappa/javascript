// function flattenArray(arr) {
//   let res = [];
//   function flattenHelper(subArr) {
//     for (let item of subArr) {
//       if (Array.isArray(item)) {
//         flattenHelper(item);
//       } else {
//         res.push(item);
//       }
//     }
//   }
//   flattenHelper(arr);
//   return res;
// }
// let arr = [1, [2, [3, [4, 5], 6], 7, 8]];
// console.log(flattenArray(arr));

//12345
for (let i = 5; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= 4; j++) {
    str += "#";
  }
  console.log(str);
}

// 54321
// 5432
// 543
// 54
// 5

// for (let i = 5; i >= 1; i--) {
//   let str = "";
//   for (let j = 5; j <= i; j--) {
//     str += j;
//   }
//   console.log(str);
// }

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 5; j >= i; j--) {
    str += j;
  }
  console.log(str);
}

function flattenArray(arr) {
  let res = [];

  function flattenNestedArray(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        flattenNestedArray(item);
      } else {
        res.push(item);
      }
    }
  }
  flattenNestedArray(arr);
  return res;
}
let arr = [1, [2, [3, [4, 5], 6], 7, 8]];
console.log(flattenArray(arr));
