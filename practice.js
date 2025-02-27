// Program array=[1,2,3,4] O/P  "1":2,"2":3

let arr = [1, 2, 3, 4];
for (let i = 1; i < arr.length; i++) {
  let sum = i + 1;
  console.log(`${i}` + ":" + sum);
}

// let arr=[0, 1, 2, 3] expected output should be {0:0, 1:1, 2:2, 3:3}

let arr1 = [0, 1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
  console.log(i + ":" + i);
}

// let a="somewhere" how will push this string into an object explain it orally.

let a = "somewhere";
// let b = { value: [] };
// b.value.push(a);
// console.log(b);

let b = {};
let key = "value";
b[key] = a;
console.log(b);

// [1,2,5,[3,4],[5,[9,5]]] remove the duplicates from the given nested array

let arr2 = [1, 2, 5, [3, 4], [5, [9, 5]]];
let res = arr2.flat(2);
let sort = res.sort(); //[1,2,3,4,5,5,5,9]

//using set method....set method only creates an object containing unique values
// let newArr = new Set(res);
// console.log([...newArr]);

//filter method filter creates new array of elements that passed the cndition through the callback function
a1 = sort.filter((item, index) => sort.indexOf(item) === index); //to check the repeated elemenys we use array.indexOf....if it returns same index then push the elemnts else skip the element and return the updated array
console.log(a1);

//input:[{id:1,value:20},{id:2,value:25},{id:3,value:2},{id:1,value:4},{id:2,value:6}]
//output:[{id:1,value:24},{id:2,value:31},{id:3,value:2}]

let abj = [
  { id: 1, value: 20 },
  { id: 2, value: 25 },
  { id: 3, value: 2 },
  { id: 1, value: 4 },
  { id: 2, value: 6 },
];
let result = [];
abj.forEach((item) => {
  let index = result.findIndex((obj) => obj.id === item.id); //if no id is matched it return -1
  if (index === -1) {
    //if index is -1 it means that it is a unique id..
    result.push(item); //push that to result
  } else {
    result[index].value += item.value; //if index is other than -1 it checks with else ..then the id is repeated it gets add to the value
  }
});
console.log(result);

//Get the second most frequently occuring element,including the frequency count,if two numbers share the same frequency,the smallest one will be selected.
//const sorted array=[1,2,4,4,6,6,4,6,6,7,7,9,7,10];

let array = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];
let resArr = array.sort((a, b) => a - b);
let count = {};
console.log(resArr); //[1, 2, 4, 4, 4, 6, 6, 6, 6, 7, 7, 7, 9, 10]
for (let i = 0; i < resArr.length; i++) {
  let ele = resArr[i];
  if (count[ele]) {
    count[ele]++;
  } else {
    count[ele] = 1;
  }
}
console.log(count);

//factorial

function fact() {
  let num = 5;
  let fact = 1;
  for (let i = 1; i < num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
fact();

/////////

let ab = [1, 2, 3];
let cd = [1, 2, 3];

console.log(ab == cd); //Both ab and cd are arrays. Even though they contain the same values ([1, 2, 3]), arrays are reference types in JavaScript. This means two separate arrays, even if they have the same contents, are considered different objects in memory.
console.log(ab === cd); //Output: false for both, because ab and cd are different objects in memory, not the same reference.

let bc = ab;
console.log(ab == bc); //Since ab and bc refer to the same array in memory, they are equal by reference.
