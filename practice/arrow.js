// 1. Arrow function that returns the square of a number
let x = -5;
let square = (n) => n * n;
console.log(square(x)); // Output: 25

// 2. Arrow function that takes two numbers and returns their sum
let a = 2,
  b = 3;
let sum = (a, b) => a + b;
console.log(sum(a, b)); // Output: 5

// 3. Arrow function that returns "Hello World"
let greetings = () => "Hello World";
console.log(greetings()); // Output: Hello World

// 4. Arrow function that checks if a number is even
let n = 121;
let even = (n) => n % 2 === 0;
console.log(even(n)); // Output: false

// 5. Arrow function that takes a name and returns "Hello, <name>"
let nameGreet = (name) => "Hello, " + name;
console.log(nameGreet("Yalamber")); // Output: Hello, Yalamber

// 6. Arrow function that returns the largest of two numbers
let large = (a, b) => (a > b ? a : b);
console.log(large(10, 5)); // Output: 10

// 7. Arrow function that multiplies three numbers
let multiplies = (a, b, c) => a * b * c;
console.log(multiplies(2, 4, 6)); // Output: 48

// 8. Arrow function that converts an array to its doubled values using map()
let ns = [1, 2, 3, 4, 5];
let doubled = ns.map((n) => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 9. Arrow function that returns the length of a string
let len = (str) => str.length;
console.log(len("dikamber")); // Output: 8

// 10. Arrow function that filters out numbers greater than 10 from an array
let num = [1, 23, 3, 40];
let filters = () => num.filter((n) => n > 10);
console.log(filters()); // Output: [23, 40]

// loop
// 1. Write a program to print numbers from 1 to 50 using a loop.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
// 2. Print all even numbers between 1 and 100.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
// 3. Print the multiplication table of any number (example: 5).

let nub = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${nub} * ${i} = ${nub * i}`);
}
// 4. Print the sum of the first 10 natural numbers using a loop.
let sumb = 0;
for (let i = 1; i <= 10; i++) {
  sumb = sumb + i;
}
console.log(`The sum of first 10 neutral number is ${sumb}`);
// 5. Print all numbers from 50 to 1 in reverse order.

for (let i = 50; i >= 1; i--) {
  console.log(i);
}
// 6. Count how many numbers from 1 to 100 are divisible by 3.
let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log(`Total numbers divisible by 3: ${count}`);

// 7. Print the factorial of a given number (example: 5 → 120).
// 7. Print the factorial of a given number
let nb = 5; // You canb chanbge this nbumber
let factorial = 1; // Start with 1 because multiplyinbg by 0 gives 0

for (let i = 1; i <= nb; i++) {
  factorial *= i; // same as factorial = factorial * i
}

console.log(`Factorial of ${nb} is ${factorial}`);

// 8. Print each element of an array using a loop.

let arr = ["apple", "banana", "mango", "grapes"];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  console.log(element);
}

/// 9. Print the square of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  let sq = i * i;
  console.log(`Square of ${i} is ${sq}`);
}

// 10. Print numbers from 1 to 100, but skip numbers divisible by 5
for (let i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    console.log(i);
  }
}
