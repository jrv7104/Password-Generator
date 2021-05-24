//variable assignments

var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "=",
    "+",
    "?",
    "/",
    "<",
    ">",
];

function getPasswordOptionsFromUser() {
    var  lengthOfPassword = parseInt(prompt("How long should the password be?"));
    if (lengthOfPassword < 8 && lengthOfPassword > 128) {
        alert("This needs to be between 8 to 128 characters");
    }

    return lengthOfPassword;
}

function someNum() {
   return confirm("Would you like to include numbers in your password?");
}

function someUpperLetter() {
    return confirm("Would you like to include upper case characters in your password?");
}

function someLowerLetter() {
    return confirm("Would you like to include lower case characters in your password?");
}

function someSpecial() {
    return confirm("Would you like to include special characters in your password?");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

//use this function for all sections
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(arr) {
    return arr[getRandomIntInclusive(0, arr.length - 1)];
}

function generatePassword() {
    var options = getPasswordOptionsFromUser();

    var password = [];

    var possibleCharacters = [];

    var guaranteedCharacters = [];

    var numberCheck = someNum();
    if (numberCheck) {
        possibleCharacters = possibleCharacters.concat(number)
    }
    
    var upperCheck = someUpperLetter();
    if (upperCheck) {
        possibleCharacters = possibleCharacters.concat(upperCase)
    }

    var lowerCheck = someLowerLetter();
    if (lowerCheck) {
        possibleCharacters = possibleCharacters.concat(lowerCase)
    }

    var specialCheck = someSpecial();
    if (specialCheck) {
        possibleCharacters = possibleCharacters.concat(special)
    }

    var randomPass = ""

    for(i=0; i<options; i++){
        var randomIndex = Math.floor(Math.random() * possibleCharacters.length)
        var randomChar = possibleCharacters[randomIndex]
        randomPass += randomChar;
    }

    return randomPass;
}

//variable to store length of password from user
var userInput = document.getElementById(getPasswordOptionsFromUser);

//concact
var password = [];

var possibleCharacters = [];

var guaranteedCharacters = [];

var password = [];

function getPasswordOptionsfromUser() {
    var lengthOfPassword = parseInt(prompt("How long will password be?"));

    var hasSpecialChars = confirm(
        "Click OK to confirm including special characters"
    );

    var hasNum = confirm("Click OK to confirm including numbers");

    var hasLower = confirm("Click OK to confirm including lower cased letters");

    var hasUpper = confirm("Click OK to confirm including upper cased letters");

    //conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false.
    if ((!hasSpecialChars, !hasNum, !hasLower, !hasUpper)) {
        console.log(
            "Will not be able to complete request unless at least one option is selected"
        );
    }

    return {
        lengthOfPassword: lengthOfPassword,
        hasSpecialCharacters: hasSpecialChars,
        hasNumbers: hasNum,
        hasLowerCasedLetters: hasLower,
        hasUpperCasedLetters: hasUpper,
    };
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);