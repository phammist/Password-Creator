
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '?', '@', '_', '~'];


//Questionare Prompt

function getPasswordChoices() {

  //Prompt for password length

  var length = parseInt(
    window.prompt ("How long would you like your password?")
  );

  if (Number.isNaN(length)) {
    window.alert("Please use a number as your answer!");
    return null;
  }

  if (length < 8) {
    window.alert("Please use the minimum of 8!");
    return null;
  }
  if (length > 128) {
    window.alert("Please choose no greater than 128!");
    return null;
  }

  //Questionaire Prompts

  var hasLowerCase = confirm(
    "Click OK if you would like lowercased characters included!"
  );

  var hasUpperCase = confirm(
    "Click OK if you would like uppercased characters included!"
  );

  var hasSpecialCharacters = confirm(
    "Click OK to include special characters, please!"
  );

  var hasNumericCharacters = confirm(
    "Click OK include numbers, please!"
  );

  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecialCharacters === false &&
    hasNumericCharacters === false
  ) { 
    window.alert("Please accept one of their conditions!");
    return null;
  }

  //To store the password options into the generator box display or else it will not pop up onto the generator
  
  var passwordIndex = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters
  };

  return passwordIndex;
}


//Random element from Var Arrays (all arrays)

function getRandom(array) {
  //learn from mini project (Javascript)
  //note to self: randomIndex don't run; use randIndex
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];

  return randElement;
}

//Password Maker

function generatePassword() {
  var choices = getPasswordChoices();
  var result = [];
  var characterMaker = [];
  var theDefinite = [];

  //If index decision not made, it won't run
  if (!choices) return null;

  //For the Index's conditional decision

  if (choices.hasLowerCase) {
    characterMaker = characterMaker.concat (lowerCase);
    theDefinite.push(getRandom(lowerCase));
  }

  if (choices.hasUpperCase) {
    characterMaker = characterMaker.concat (upperCase);
  theDefinite.push(getRandom(upperCase));
  }

  if (choices.hasSpecialCharacters) {
    characterMaker = characterMaker.concat (specialCharacters);
    theDefinite.push(getRandom(specialCharacters));
  }

  if (choices.hasNumericCharacters) {
    characterMaker = characterMaker.concat (numericCharacters);
    theDefinite.push(getRandom(numericCharacters));
  }

  //To make sure that it not keeps to the critia length but also include characterMarker's output.

  for (var i = 0; i < choices.length; i++) {
    var characterMaker = getRandom(characterMaker);
    result.push(characterMaker);
  }

  //This is to make sure that every agreed password options from prompt is included in the result.

  for (var i = 0; i < theDefinite.length; i++) {
    result[i] = theDefinite[i];
  }

  //Display the result into the display box
  return result.join('');

}



















//The Starter Code

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
