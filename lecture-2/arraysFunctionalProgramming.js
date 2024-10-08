// map()
let numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]

// filter()
numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce()
numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

// forEach()
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// orange

// some() and every()
numbers = [1, 2, 3, 4, 5];
console.log(numbers.some(num => num > 3)); // true
console.log(numbers.every(num => num > 0)); // true
