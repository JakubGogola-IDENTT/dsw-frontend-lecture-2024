function describeDog(breed) {
    console.log(`${breed}s are wonderful dogs!`);
}

describeDog("Labrador"); // Output: "Labradors are wonderful dogs!"

const describeDog = (breed) => {
    console.log(`${breed}s are wonderful dogs!`);
};

describeDog("Beagle"); // Output: "Beagles are wonderful dogs!"

function bark() {
    console.log("Woof! Woof!");
}

bark(); // Output: "Woof! Woof!"

const bark = () => {
    console.log("Woof! Woof!");
};

bark(); // Output: "Woof! Woof!"

function getDogDescription(breed) {
    return `${breed}s are very friendly and loyal.`;
}

let description = getDogDescription("Golden Retriever");
console.log(description); // Output: "Golden Retrievers are very friendly and loyal."

const getDogDescription = (breed) => {
    return `${breed}s are very friendly and loyal.`;
};

let description = getDogDescription("Bulldog");
console.log(description); // Output: "Bulldogs are very friendly and loyal."

const getDogName = (name) => `This dog's name is ${name}.`;

console.log(getDogName("Buddy")); // Output: "This dog's name is Buddy."

