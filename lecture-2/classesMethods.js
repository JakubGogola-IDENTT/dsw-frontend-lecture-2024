class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log("Meow!");
    }
}

const myCat = new Cat("Whiskers");
myCat.meow(); // Output: "Meow!"

class MathUtil {
    static add(x, y) {
        return x + y;
    }
}

console.log(MathUtil.add(5, 3)); // Output: 8
