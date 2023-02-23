// Below is the solution to Question No. 1
//I created an instagramPost() constructor function with five  properties as arguments

function instagramPost(authorHandle, content, imageLinkByAuthor, numberOfViews, numberOfLikes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLinkByAuthor = imageLinkByAuthor;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
};

// Below is the solution to Question No. 2
//The instagramPost constructor function was used to create 2 Instagram post objects

const firstInstagramPost = new instagramPost(
  "chiomakpotha", 
  "Happy new year to all my fans",
  "https://www.instagram.com/stories/chiomakpotha/3046946705715400742/",
  "20 views",
  "79 likes" 
);

const secondInstagramPost = new instagramPost(
  "mercyjohnsonokojie", 
  "Tomorrow is election in Nigeria, make sure you vote!",
  "https://www.instagram.com/mercyjohnsonokojie/",
  "87 views",
  "106 likes" 
);


// Below is the solution to Question No. 3

//3a
//I created a createPerson() function using factory method
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location
  }
};

//I created an object representing Musa from the factory function below
const Musa = createPerson(
  "Musa Dawodu",
  "34 years",
  "Lagos"
);

//3b I created a factory function createJambScores()
function createJambScores(eng, govt, lit, crk) {
  return {
  ENG: eng,
  GOVT: govt,
  LIT: lit,
  CRK: crk
  }
};

// I created an object representing Musa’s JAMB scores below
const MusaJAMBScores = createJambScores(
  70,
  85,
  82,
  94
);

// I added the object as a property to Musa object you created above in (a) above
Musa.JAMBScores = MusaJAMBScores;
console.log(Musa); // Logs out the Musa object containing Musa's details including  the added JAMB scores



// Below is the solution to Question No. 4

// the different ways you can clone an object are as follows:

// 1. Using Object.assign method
// Example:

const firstCar = {
  model: "Toyota",
  year: 2018,
  brand: "Camry"
};

const secondCar = Object.assign({}, firstCar); // Creates a copy of the firstCar object
console.log(secondCar); //Logs a copy of the firstCar object to the console


// 2. Using spread synthax
// Example:

const thirdCar = {...firstCar}; // Creates a copy of the firstCar object
console.log(thirdCar);

// 3. Using JSON.parse() method
// Example:
const fourthCar = JSON.parse(JSON.stringify(firstCar)); // Creates a copy of the firstCar object
console.log(fourthCar);


// Below is the solution to Question No. 5

const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
};

for(let party in presidentialCandidates) {
  console.log(presidentialCandidates[party] + " " + "is the presidential candidate of " + party);
};

// I used the for..in loop to loop through the object and console log a string of the key-value pair