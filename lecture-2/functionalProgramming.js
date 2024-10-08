// Pure function
function add(x, y) {
    return x + y;
}

// Immutability
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Creates a new array
console.log(newNumbers); // Output: [1, 2, 3, 4]

// First-class citizens - higher-order functions
const numbersArray = [1, 2, 3, 4, 5];

// Using `map` to create a new array where each element is doubled
const doubled = numbersArray.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

