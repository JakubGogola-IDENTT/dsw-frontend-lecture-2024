// Chaining promises
function getDogBreed() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Poodle"), 1000);
    });
}

function getBreedSize(breed) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${breed} - medium size`), 1000);
    });
}

getDogBreed()
    .then(breed => getBreedSize(breed))
    .then(sizeDescription => console.log(sizeDescription));
// Output after 2 seconds: "Poodle - medium size"

// try...catch
async function getDogBreed() {
    throw new Error("Failed to fetch breed.");
}

async function showBreed() {
    try {
        const breed = await getDogBreed();
        console.log(`Breed: ${breed}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

showBreed();
// Output: "Error: Failed to fetch breed."

// Promise.all()
const breedFetch1 = new Promise(resolve => setTimeout(() => resolve("Bulldog"), 1000));
const breedFetch2 = new Promise(resolve => setTimeout(() => resolve("Dachshund"), 2000));

Promise.all([breedFetch1, breedFetch2])
    .then(breeds => {
        console.log(`Fetched breeds: ${breeds.join(", ")}`);
    });
// Output after 2 seconds: "Fetched breeds: Bulldog, Dachshund"

// Promise.race()
Promise.race([breedFetch1, breedFetch2])
    .then(breed => {
        console.log(`Fastest fetched breed: ${breed}`);
    });
// Output after 1 second: "Fastest fetched breed: Pug"

// Promise.allSettled()
const breedFetch3 = new Promise((resolve) => setTimeout(() => resolve("Bulldog"), 1000));
const breedFetch4 = new Promise((resolve, reject) => setTimeout(() => reject("Beagle fetch failed"), 1500));
const breedFetch5 = new Promise((resolve) => setTimeout(() => resolve("Poodle"), 500));

Promise.allSettled([breedFetch3, breedFetch4, breedFetch5])
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
            }
        });
    });

// Output after 1.5 seconds:
// "Promise 1 fulfilled with value: Bulldog"
// "Promise 2 rejected with reason: Beagle fetch failed"
// "Promise 3 fulfilled with value: Poodle"

