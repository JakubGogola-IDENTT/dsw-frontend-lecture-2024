let counter = 0;

const step = 10;

function incrementOne() {
    counter++;
}

function incrementTen() {
    counter += 10;
}

function displayCounter() {
    console.log(`Counter: ${counter}`);
}

incrementOne();
incrementOne();
incrementOne();
displayCounter();
incrementTen();
displayCounter();
