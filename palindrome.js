//Researched .length, while loop and ++ operator on mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let userInput = prompt("Enter a word");
let letterMatched = 0;
let reversed = '';

let i = userInput.length - 1;
while (i >= 0) {
    reversed += userInput[i];
    i--;
}

let counter = 0;
while (counter < userInput.length) {

    if (userInput === reversed) {
        letterMatched++;
    }

    counter++;
}

if (letterMatched === userInput.length) {
    console.log(`${userInput} is a palindrome`);
} else {
    console.log(`${userInput} is not a palindrome`);
}

/*
    Thinking
        1. This program takes an input from the user, and the computer produces an ouput determining whether it is a palindrome or not.
        2. First, get input from the user.
        3. Use a while loop to reverse the input and store it in a variable named 'reversed'.
        4. Third, use a while loop to compare the user's input, which is stored in a variable called 'userInput', against the reversed word stored in the variable 'reversed'.
        5. If there is a matching letter between the input and the reversed words then 1 point is added to the variable 'letterMatched'.
        6. Lastly, the computer checks if the number of letters, stored in the variable 'letterMatched', matches the length of the user's input. If so then the word is a palindrome is displayed, and if not then the opposite is output. 
*/