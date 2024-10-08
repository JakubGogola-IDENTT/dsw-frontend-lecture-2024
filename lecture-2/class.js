class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    bark() {
        console.log("Woof! Woof!");
    }
}

// Creating an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever", 3);
console.log(myDog.name); // Output: "Buddy"
myDog.bark(); // Output: "Woof! Woof!"
