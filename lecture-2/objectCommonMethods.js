const dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    bark: function() {
        console.log("Woof! Woof!");
    }
};

const keys = Object.keys(dog);
console.log(keys); // Output: ["name", "breed", "bark"]

const values = Object.values(dog);
console.log(values); // Output: ["Buddy", "Golden Retriever", function]

const entries = Object.entries(dog);
console.log(entries); 
// Output: [["name", "Buddy"], ["breed", "Golden Retriever"], ["bark", function]]
