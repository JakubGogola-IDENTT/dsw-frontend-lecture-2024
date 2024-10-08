function Animal() {
    this.isLiving = true;
}

Animal.prototype.eat = function() {
    console.log("Eating...");
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // Dog inherits from Animal
Dog.prototype.bark = function() {
    console.log("Woof! Woof!");
};

const myDog = new Dog("Buddy");
myDog.eat(); // Output: "Eating..." (inherited from Animal)
myDog.bark(); // Output: "Woof! Woof!" (own method)
