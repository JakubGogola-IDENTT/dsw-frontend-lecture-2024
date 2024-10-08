const dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    bark: function() {
        console.log("Woof! Woof!");
    }
};

console.log(dog.name); // Output: "Buddy"
dog.bark(); // Output: "Woof! Woof!"

const prop = "breed";
console.log(dog[prop]); // Output: "Golden Retriever"

dog.color = "Golden";
dog.age = 4; // Modifying an existing property
console.log(dog.color); // Output: "Golden"
console.log(dog.age); // Output: 4

delete dog.age;
console.log(dog.age); // Output: undefined

