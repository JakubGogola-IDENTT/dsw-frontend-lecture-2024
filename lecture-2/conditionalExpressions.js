const age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

if (age < 0) {
    console.log("Invalid value.");
}

const breed = "Golden Retriever";

switch (breed) {
    case "Labrador Retriever":
        console.log("Labrador Retrievers are friendly and outgoing.");
        break;
    case "German Shepherd":
        console.log("German Shepherds are loyal and highly trainable.");
        break;
    case "Golden Retriever":
        console.log("Golden Retrievers are intelligent and friendly.");
        break;
    case "Bulldog":
        console.log("Bulldogs are calm and courageous.");
        break;
    case "Poodle":
        console.log("Poodles are highly intelligent and hypoallergenic.");
        break;
    default:
        console.log("Unknown breed. Each dog is unique and special!");
        break;
}
