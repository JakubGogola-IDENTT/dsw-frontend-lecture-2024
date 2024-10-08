const dog = {
  bark() {
    console.log("Woof! Woof!");
  },
};

const myDog = Object.create(dog);
myDog.name = "Buddy";

console.log(myDog.name); // "Buddy" (own property)
myDog.bark(); // "Woof! Woof!" (inherited from dog prototype)
