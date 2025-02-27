// Reverse a string without using the .reverse() method.
// function reverseAString(str) {
//   let rev = "";
//   let arr = str.split("");
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rev = rev + arr[i];
//   }
//   return rev;
// }
// console.log(reverseAString("hello"));

// Find the largest number in an array.

// function LargestInArray(arr) {
//   let resVal = arr.reduce((a, b) => (a > b ? a : b), arr[0]);
//   return resVal;
// }
// console.log(LargestInArray([1, 2, 3, 6, 5]));

// Find the largest number in an array.

// function LargestNumber(arr) {
//   let temp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > temp) {
//       temp = arr[i];
//     }
//   }
//   return temp;
// }
// console.log(LargestNumber([1, 5, 2, 63, 4]));

// Check if a string is a palindrome.

// function palindrome(str) {
//   let rev = "";
//   let newArr = str.split("");
//   for (let i = newArr.length - 1; i >= 0; i--) {
//     rev = rev + newArr[i];
//   }
//   return rev;
// }
// let str = "hello";
// let res = palindrome(str);
// if (res === str) {
//   console.log("palindrome");
// } else {
//   console.log("not a plaindrome");
// }

// Write a function that removes duplicates from an array.

// function removeDuplicates(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let bool = true;
//     for (let j = 0; j < i; j++) {
//       if (arr[i] === arr[j]) {
//         bool = false;
//         break;
//       }
//     }
//     if (bool) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(removeDuplicates([1, 2, 5, 3, 6, 2, 3]));

//     OR
// let arr = [1, 2, 2, 3, 5, 6, 4, 8, 9, 5, 4];
// let res = [];
// let seen = {};
// for (let num of arr) {
//   if (!seen[num]) {
//     seen[num] = true;
//     res.push(num);
//   }
// }
// console.log(res);

// Swap two variables without using a third variable.

// let a = 10;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// Write a function to count the number of vowels in a string.

// function vowelsCount(str) {
//   let strArr = str.split("");
//   let vowels = "aeiou";
//   let count = 0;
//   for (let i = 0; i < strArr.length; i++) {
//     if (vowels.includes(strArr[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowelsCount("bindu"));

// Check if a number is prime.

// function primeOrNot(num) {
//   if (num < 2) {
//     console.log("Not a prime number");
//   }
//   for (let i = 3; i < num; i++) {
//     if (num % i === 0) {
//       console.log("Not a prime number");
//       break;
//     } else {
//       console.log("prime number");
//     }
//   }
// }
// primeOrNot(25);

// Convert a given string to title case (first letter capitalized for each word).

// function firstLetterCapitalize(str) {
//   let slicedStr = str.slice(1);
//   let firstLetter = str.split("");
//   let upperCaseLetter = firstLetter[0].toUpperCase();
//   let res = upperCaseLetter + slicedStr;
//   console.log(res);
// }
// firstLetterCapitalize("bindu");

// Write a function to merge two sorted arrays into a single sorted array.

// let arr1 = [1, 5, 6, 9, 2, 8];
// let arr2 = [5, 2, 36, 9, 54, 1, 52];
// let arrRes = arr1.sort((a, b) => a - b);
// let arrRes1 = arr2.sort((a, b) => a - b);
// console.log(arrRes);
// console.log(arrRes1);
// let res = arrRes.concat(arrRes1);
// console.log(res);

// Implement a function to find the factorial of a number.

// function fact(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(fact(5));

// Implement the Fibonacci sequence using recursion.

function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fibonacci(10));

//Write a function to flatten a nested array.

// function flattenArray(arr) {
//   let res = [];
//   function flattenNestedArray(subArr) {
//     for (let item of subArr) {
//       if (Array.isArray(item)) {
//         flattenNestedArray(item);
//       } else {
//         res.push(item);
//       }
//     }
//   }
//   flattenNestedArray(arr);
//   return res;
// }
// console.log(flattenArray([1, [2, [3, [4, 5], 6], 7], 8]));

//or

// let arr = [1, [2, [3, [4, 5], 6], 7], 8];
// let res = arr.flat(3);
// console.log(res);

//Find the missing number in an array of numbers from 1 to n.

//Implement a function to check if two strings are anagrams.

// function anagram(str1, str2) {
//   if (str1.split("").sort().toString() === str2.split("").sort().toString()) {
//     console.log("anagram");
//   } else {
//     console.log("not a anagram");
//   }
// }
// anagram("listen", "silent");

//Remove falsy values (false, 0, "", null, undefined, NaN) from an array.

// function removeFalsyValue(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(removeFalsyValue([1, false, 2, 3, 5]));

//Write a function to count the occurrences of each character in a string.

// function countOccOfString(str) {
//   let strArr = str.split("");
//   let count = 0;
//   for (let i = 0; i < strArr.length; i++) {
//     count++;
//   }
//   return count;
// }
// console.log(countOccOfString("bindushree"));

//Write a function that converts a given number into Roman numerals

// function numberToRoman(num) {
//   const romanNumerals = [
//     { value: 1000, symbol: "M" },
//     { value: 900, symbol: "CM" },
//     { value: 500, symbol: "D" },
//     { value: 400, symbol: "CD" },
//     { value: 100, symbol: "C" },
//     { value: 90, symbol: "XC" },
//     { value: 50, symbol: "L" },
//     { value: 40, symbol: "XL" },
//     { value: 10, symbol: "X" },
//     { value: 9, symbol: "IX" },
//     { value: 5, symbol: "V" },
//     { value: 4, symbol: "IV" },
//     { value: 1, symbol: "I" },
//   ];
//   let res = "";
//   for (let i = 0; i < romanNumerals.length; i++) {
//     while (num >= romanNumerals[i].value) {
//       res = res + romanNumerals[i].symbol;
//       num -= romanNumerals[i].value;
//     }
//   }
//   return res;
// }
// console.log(numberToRoman(34));
