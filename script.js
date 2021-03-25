
// Assignment Code
var generateBtn = document.querySelector("#generate");


  var lCase= ["abcdefghijklmnopqrstuvwxyz"];
  var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers= [1234567890];
  var randomChar= ["!@#$%^&*()_+={[}]';:?><"];
  

  var confirmChar = "";
  var confirmLCase;
  var confirmUCase;
  var confirmNumbers;
  var confirmrandomChar;

function generatePassword() {

  var confirmChar = (prompt("How long would you like your password to be?\n You can choose from 8-128 characters."));
    for ( var i= 128; i < confirmChar;) {
      if (confirmChar = lCase) 
      alert("Sorry! Your password can only have 128 characters.");
      return;
    }
    for ( var i= 8; i > confirmChar;) {
      alert("Sorry! Your password must have a minimum of 8 characters.");
      return;
    }
 
  var passwordChar = "";

  var confirmLCase = confirm("Would you like lowercase letters in your password?");
  if (confirmLCase) {
    passwordChar = passwordChar.concat(lCase)
  }
  var confirmUCase = confirm("Would you like uppercase letters in your password?");
  if (confirmUCase) {
    passwordChar = passwordChar.concat(uCase)
    }

  var confirmrandomChar = confirm("Would you like to also add a secret code to your password?");
  if (confirmrandomChar) {
    passwordChar = passwordChar.concat(randomChar)
    }

   var confirmNumbers = confirm("Would you like to add complex coordinates to your password?"); 
   if (confirmNumbers) {
     passwordChar = passwordChar.concat(numbers)
  }


  var uniquePass = "";


      for ( var i= 0; i < confirmChar; i++) {
      uniquePass = uniquePass + passwordChar[Math.floor(Math.random() * passwordChar.length)];

      }
      return uniquePass;

    }
    

    

    


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}





// Add event listener to generate button
// Don't touch this bottom part - do everything else
generateBtn.addEventListener("click", writePassword);





