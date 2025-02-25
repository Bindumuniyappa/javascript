let name = {
  firstName: "bindu",
  lastName: "muniyappa",
};
function printName(city, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      city +
      " " +
      state +
      " " +
      country
  );
}

let printMyName = printName.bind(name, "bengaluru");
printMyName("Karnataka", "India");

Function.prototype.myBind = function (...args) {
  //myBind function should be accessed everywhere so we have to write it in function.prototype------1st step
  let obj = this; //this points towards the printName
  params = args.slice(1); //removes 1st element lets us to use rest of the parameters
  return function (...args2) {
    //as bind method returns a function ...so as we creating our own method we should return function------2nd step
    // obj.call(args[0],params); //to call printName i am using refernce variable i.e.,obj and to access the name we have use it as parameter...
    obj.apply(args[0], [...params, ...args2]); //using apply because call wont take arrays as arguments
    //to call the function printName here we have to use this keyword----3rd step
  };
};
let printName1 = printName.myBind(name, "bengaluru");
printName1("Karnataka", "India");

//polyfill for call

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis; // Use global object if no context is provided
  const fnSymbol = Symbol(); // Create a unique property
  context[fnSymbol] = this; // Assign the function to the context
  const result = context[fnSymbol](...args); // Call the function with the provided arguments
  delete context[fnSymbol]; // Clean up
  return result; // Return the result of the function call
};

// Example usage
function printName(city, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + city + ", " + state
  );
}

let name1 = { firstName: "Bindu", lastName: "Muniyappa" };

printName.myCall(name1, "Bengaluru", "Karnataka"); //call method

// printName.myApply(name1, ["Bengaluru", "Karnatak"]); //apply method-----same code for both call and apply but passing arguments is different

//custom implementation of Array.prototype.map()

Array.prototype.myMap = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      res.push(callback(this[i], i, this));
    }
  }
  return res;
};

let arr = [1, 2, 3, 4];
let double = arr.myMap((num) => num * 2);
console.log(double);

//custom implementation of Array.prototype.filter()

Array.prototype.myFilter = function (callback) {
  const result = []; // Create a new array to store filtered values

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
      result.push(this[i]); // Add element to result if callback returns true
    }
  }

  return result; // Return the filtered array
};

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.myFilter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]

//custom implementation of Array.prototype.reduce()

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      accumulator = callback(accumulator, this[i], i, this); // Apply reducer function
    }
  }

  return accumulator; // Return final accumulated value
};

// Example usage:
const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 21
