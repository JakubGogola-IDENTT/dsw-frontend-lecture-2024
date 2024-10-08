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

const myDog = new Dog("Bella", "Beagle", 2);
console.log(myDog.age); // Output: 2
myDog.bark(); // Output: "Woof! Woof!"
