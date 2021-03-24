// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This is where I do the code, nowhere else


// Is going to need multiple window prompts or a series of alerts for each criteria
// 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Don't touch this bottom part - do everything else
generateBtn.addEventListener("click", writePassword);
