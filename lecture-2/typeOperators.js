let name = "Alice";
let num = 42;
let isTrue = true;
let person = { name: "Alice", age: 25 };

// typeof operator
console.log(typeof name); // "string"
console.log(typeof num); // "number"
console.log(typeof isTrue); // "boolean"
console.log(typeof person); // "object"

// instanceof operator
console.log(person instanceof Object); // true

function Person() {}
let john = new Person();
console.log(john instanceof Person); // true
