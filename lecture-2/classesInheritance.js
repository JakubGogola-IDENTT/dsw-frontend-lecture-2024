class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class's constructor
        this.breed = breed;
    }

    bark() {
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog("Max", "Labrador");
myDog.eat(); // Output: "Max is eating." (inherited from Animal)
myDog.bark(); // Output: "Woof! Woof!"
