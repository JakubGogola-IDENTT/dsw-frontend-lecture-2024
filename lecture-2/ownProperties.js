const dog = {
  breed: "Labrador",
};

const myDog = Object.create(dog);
myDog.breed = "Beagle"; // Shadows the prototype's breed property
myDog.age = 2;

console.log(myDog.breed); // "Beagle" (own property)
console.log(dog.breed); // "Labrador" (prototype property remains unchanged)

console.log(myDog.hasOwnProperty("breed")); // true, shadowed property 
console.log(myDog.hasOwnProperty("age")); // true, defined on the object, doesn't belong to the prototype
console.log(myDog.hasOwnProperty("bark")); // false (inherited from the prototype)
