// Assignment Code

var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var array2 = "abcdefghijklmnopqrstuvwxyz".split("");
var num = "0123456789".split("");
var spec = "&%*@#$!".split("");

// var arrayLower = confirm("Would you like Lowercase letters?");
//var arrayUpper = confirm("Would you like Uppercase letters?");
//var numQues = confirm("Would you like numbers?");
// var specQues = confirm("Would you like special characters?");
//var passLength = prompt(
// "What's the length of the Password that you want? It has to be between 8 and 128 characters."
// );
// var newPass = confirm("Do You Need a New Password?");
// var newPass = (arrayLower = arrayUpper = numQues = specQues = true);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptMe() {
  var newPass = confirm("Do You Need a New Password?");
  alert(newPass);

  if (newPass) {
    alert("Good! We'll get you started with a series of Questions");
  } else {
    alert("Ohhh that's too bad, maybe we'll get you next time!");
  }

  var arrayLower = confirm("Would you like Lowercase letters?");

  if (arrayLower) {
    alert("Marvelous!");
  } else {
    alert("That's fine.");
  }

  var arrayUpper = confirm("Would you like Uppercase letters?");

  if (arrayUpper) {
    alert("Wonderful!");
  } else {
    alert("That's alright. ");
  }

  var numQues = confirm("Would you also like numbers?");

  if (numQues) {
    alert("Fantastic!");
  } else {
    alert("That's okay, too.");
  }

  var specQues = confirm("Would you like special characters?");

  if (specQues) {
    alert("Exceptional!");
  } else {
    alert("That's fine");
  }
}
