const dogBreeds = ["Labrador Retriever", "Beagle", "Bulldog", "Poodle", "Golden Retriever"];

// Adding a breed to the end
dogBreeds.push("Chihuahua");
console.log(dogBreeds);
// Output: ["Labrador Retriever", "German Shepherd", "Bulldog", "Poodle", "Golden Retriever", "Chihuahua"]

// Removing the last breed
dogBreeds.pop();
console.log(dogBreeds);
// Output: ["Labrador Retriever", "German Shepherd", "Bulldog", "Poodle", "Golden Retriever"]

// Removing the first breed
dogBreeds.shift();
console.log(dogBreeds);
// Output: ["German Shepherd", "Bulldog", "Poodle", "Golden Retriever"]

// Adding a breed to the beginning
dogBreeds.unshift("Boxer");
console.log(dogBreeds);
// Output: ["Boxer", "German Shepherd", "Bulldog", "Poodle", "Golden Retriever"]
