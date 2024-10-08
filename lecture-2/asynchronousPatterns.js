// Callbacks
function fetchDogBreed(callback) {
    setTimeout(() => {
        callback("Labrador Retriever");
    }, 2000);
}

fetchDogBreed(breed => {
    console.log(`Fetched breed: ${breed}`);
});
// Output after 2 seconds: "Fetched breed: Labrador Retriever"

// Promises
function fetchDogBreed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Golden Retriever");
        }, 2000);
    });
}

fetchDogBreed()
    .then(breed => {
        console.log(`Fetched breed: ${breed}`);
    })
    .catch(error => {
        console.error(`Error fetching breed: ${error}`);
    });
// Output after 2 seconds: "Fetched breed: Golden Retriever"

// Async/Await
async function fetchDogBreed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Beagle");
        }, 2000);
    });
}

async function displayBreed() {
    try {
        const breed = await fetchDogBreed();
        console.log(`Fetched breed: ${breed}`);
    } catch (error) {
        console.error(`Error fetching breed: ${error}`);
    }
}

displayBreed();
// Output after 2 seconds: "Fetched breed: Beagle"

