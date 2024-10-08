const dogBreeds = ["Labrador Retriever", "Beagle", "Bulldog", "Poodle", "Golden Retriever"];

const smallBreeds = ["Chihuahua", "Pug", "Dachshund"];
const allBreeds = dogBreeds.concat(smallBreeds);

// Concats two arrays
console.log(allBreeds); 
// Output: ["Boxer", "German Shepherd", "Bulldog", "Poodle", "Golden Retriever", "Chihuahua", "Pug", "Dachshund"]

// Allows to create sub-array without modifying the original array
const popularBreeds = dogBreeds.slice(1, 4);
console.log(popularBreeds); 
// Output: ["German Shepherd", "Bulldog", "Poodle"]

// Modifies the original array in place, allowing to add or remove elements
// Adding "Cocker Spaniel" and "Shih Tzu" at index 2
dogBreeds.splice(2, 0, "Cocker Spaniel", "Shih Tzu");
console.log(dogBreeds); 
// Output: ["Boxer", "German Shepherd", "Cocker Spaniel", "Shih Tzu", "Bulldog", "Poodle", "Golden Retriever"]

console.log(dogBreeds.indexOf("Bulldog")); // Output: 4
console.log(dogBreeds.includes("Poodle")); // Output: true
console.log(dogBreeds.includes("Husky")); // Output: false

// Sorts the array in place
dogBreeds.sort();
console.log(dogBreeds); 
// Output: ["Boxer", "Bulldog", "Cocker Spaniel", "German Shepherd", "Golden Retriever", "Poodle", "Shih Tzu"]
