function Animal() {
    this.isLiving = true;
}

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // Dog inherits from Animal
Dog.prototype.bark = function() {
    console.log("Woof! Woof!");
};

const myDog = new Dog("Buddy");

myDog.isLiving = false; // Shadows the `isLiving` property on the prototype
console.log(myDog.isLiving); // Output: false
