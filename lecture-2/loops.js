for (let i = 0; i < 5; i++) {
    console.log("Iteration number:", i);
}
// Output: Iteration number: 0, Iteration number: 1, ..., Iteration number: 4

let count = 0;

while (count < 5) {
    console.log("Count is:", count);
    count++;
}
// Output: Count is: 0, Count is: 1, ..., Count is: 4

let number = 0;

do {
    console.log("Number is:", number);
    number++;
} while (number < 3);
// Output: Number is: 0, Number is: 1, Number is: 2

const dogs = ["Labrador", "Beagle", "Bulldog", "Poodle"];

for (const breed of dogs) {
    console.log(breed);
}
// Output: Labrador, Beagle, Bulldog, Poodle

const dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3
};

for (const property in dog) {
    console.log(`${property}: ${dog[property]}`);
}
// Output: name: Buddy, breed: Golden Retriever, age: 3

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the iteration when i is 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4 (skips 2)
