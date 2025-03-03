//Both es6 class and constructor function uses prototype both es6 class give more readable and clean code
//with es6 class
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

const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); //4
