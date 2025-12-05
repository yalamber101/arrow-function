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
