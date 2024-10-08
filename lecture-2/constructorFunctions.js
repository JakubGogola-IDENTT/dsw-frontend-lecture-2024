function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bark = function() {
        console.log("Woof! Woof!");
    };
}

const myDog = new Dog("Max", "Labrador", 5);
console.log(myDog.breed); // Output: "Labrador"
myDog.bark(); // Output: "Woof! Woof!"
