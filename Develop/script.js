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

function generatePassword() {
  var randomPassword;

  var confirms = promptMe();

  console.log(confirms);

  return randomPassword;
}

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
  // alert(newPass);

  // write a function or something that selects between 8 to 128 characters
  var passLength = prompt(
    "Between 8 and 128 characters, How long should the Password to be?"
  );

  if (passLength >= 8 && passLength <= 128) {
    var arrayLower = confirm("Would you like Lowercase letters?");
    var arrayUpper = confirm("Would you like Uppercase letters?");
    var numQues = confirm("Would you also like numbers?");
    var specQues = confirm("Would you like special characters?");
  } else {
    return alert("Invalid Length");
  }

  const values = [
    "passLength",
    "arrayLower",
    "arrayUpper",
    "numQues",
    "specQues",
  ];

  // convert array to th object
  const whichOne = Object.assign({}, values);

  // print object
  console.log(whichOne);

  return [whichOne];

  // take in account of someone answering no to any of the questions, so add more things to the "else" tags
}
