// This script asks the user to guess a predefined favorite number (16)

// Initialize the favorite number
let favoriteNumber = 16;
let guess;

do {
    // Prompt the user to guess the favorite number
    guess = parseInt(prompt("Guess my favorite number: "));

    // Check if the guess is lower than the favorite number
    if (guess < favoriteNumber) {
        console.log("Your guess is too low!");
    } 
    // Check if the guess is higher than the favorite number
    else if (guess > favoriteNumber) {
        console.log("Your guess is too high!");
    } 
    // If the guess is correct
    else {
        console.log("Correct! My favorite number is " + favoriteNumber);
    }
} while (guess !== favoriteNumber); // Continue the loop until the correct number is guessed
