
let attempt = 10;
let luckyNumber;
let arr = [];
let isWon = false;

function generateRandomArray() {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(randomArray);
    return randomArray.sort((a, b) => a - b);
}

function play() {
    if (attempt === 0) {
        document.getElementById("playBtn").disabled = true;
    }
    else {
        luckyNumber = parseInt(document.getElementById("inputNum").value);

        arr = generateRandomArray(luckyNumber);

        if (arr.includes(luckyNumber)) {
            if (isWon === false) {
                document.getElementById("result").textContent = "You Won!";
                isWon = true;
                } else {
                    document.getElementById("result").textContent = "You Loose!";
                }
                attempt--;
        }
        else{
            document.getElementById("result").textContent = "You Loose!";
            console.log(arr);
            attempt--;
            console.log(attempt);
            }
    }
}

function reset() {
    attempt = 10;
    isWon = false;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("result").textContent = "Start Game";
    document.getElementById("inputNum").value = "";
}




// // Function to shuffle an array using Fisher-Yates algorithm
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function playGame(inputNumber) {
// let InputNum = parseInt(prompt("Enter a fixed input number between 1 to 100:"));


// const minRange = 1;
// const maxRange = 100;

// if ( InputNum < minRange || InputNum > maxRange) {
//   console.log("Invalid input.");
// } 

// else {
//   const numbersToShuffle = Array.from({ length: maxRange - minRange + 1 }, (_, index) => minRange + index);
//   shuffleArray(numbersToShuffle);

//   const maxAttempts = 10; 
//   let attempts = 0;
//   let matchfound = false;


//   while (attempts < maxAttempts ) {
//     attempts++;

//     const shuffledNumber = numbersToShuffle[attempts - 1];

//     console.log(`Attempt ${attempts}: Shuffled number: ${shuffledNumber}`);

//     if (shuffledNumber === InputNum) {
//       console.log(`Match found! YOU WON.`);
//       matchFound = true;
//     }
//   }
// }

// }




























































// The code uses the Fisher-Yates shuffle algorithm to shuffle an array of numbers within the specified range (1 to 100).


// The array numbersToShuffle is created, containing numbers from the specified range (1 to 100).
// The shuffleArray function shuffles this array using the Fisher-Yates algorithm, ensuring a random order of the numbers.
// Matching Attempts:

// The while loop runs for a maximum of 10 attempts (maxAttempts).
// In each iteration of the loop:
// It retrieves the shuffled number at the current attempt (numbersToShuffle[attempts - 1]).
// It compares this shuffled number with the fixed input number (InputNum).
// If a match is found, it prints a success message and breaks out of the loop.
// Probability of Matching:

// Due to the shuffling, each number from the range has an equal chance of being in any position of the shuffled array.
// Since the loop runs for a maximum of 10 attempts, it ensures that the code doesn't search indefinitely.
// If the fixed input number is present in the array, there is a high probability that it will be found within the specified attempts.
// In summary, the shuffling ensures randomness, and the loop attempts to find the fixed input number within the shuffled array, providing a reasonable chance of finding a match within the specified attempts. However, it's important to note that the number may not be found in every run of the program, as the shuffling introduces an element of randomness.







// Certainly! Let's break down the code and explain each part:

// shuffleArray function: This function implements the Fisher-Yates algorithm to shuffle the elements of an array randomly.

// getRandomNumber function: This function generates a random integer between the specified minimum and maximum values.

// InputNum: It takes user input using the prompt function and converts it to an integer using parseInt. This represents the fixed input number the user wants to find in the shuffled array.

// Constants minRange and maxRange: Define the minimum and maximum values for the range of numbers that will be shuffled.

// Input validation: Checks if InputNum is a valid number within the specified range (1 to 100). If not, it prints an error message and exits.

// If the input is valid, it creates an array numbersToShuffle containing numbers from the specified range and shuffles them using the shuffleArray function.

// maxAttempts and attempts: Define the maximum number of attempts to find the shuffled number and initialize the attempts counter.

// The while loop runs until either the maximum number of attempts is reached or the shuffled number is found.

// In each iteration, it prints the attempt number and the shuffled number.

// If the shuffled number matches the user's input, it prints a success message and breaks out of the loop.




























// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var InputNumber = parseInt(prompt("Enter an input between 1 to 100:"));


// const minRange = 1;
// const maxRange = 100; 

// let flag = 0;
// let attemptCount = 0 ;
// while (!attemptCount < 10) {
//   const randomNumber = getRandom(minRange, maxRange);

//   console.log(`Random no:- ${randomNumber}`);

//   if (randomNumber === InputNumber) {
//     console.log(`Match found! (${randomNumber}) matches input number.`);
//     flag = 1;

//   }
// }
