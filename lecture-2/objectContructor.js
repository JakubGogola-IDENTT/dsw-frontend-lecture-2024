const cat = new Object();
cat.name = "Whiskers";
cat.breed = "Siamese";
cat.meow = function() {
    console.log("Meow!");
};

console.log(cat.name); // Output: "Whiskers"
cat.meow(); // Output: "Meow!"
