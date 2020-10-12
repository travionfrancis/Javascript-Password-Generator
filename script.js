// Assignment Code

var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var array2 = "abcdefghijklmnopqrstuvwxyz".split("");
var num = "0123456789".split("");
var spec = "&%*@#$!".split("");

var options = "0123456789abcdefghijklmnopqrstuvwxyz".split("");

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

function generatePassword() {
  var randomPassword;
  var options = [];
  var characterArray = [];

  var prompts = promptMe();
  console.log(prompts);

  if (prompts.hasLower) {
    options = options.concat(array2);
  }

  if (prompts.hasUpper) {
    options = options.concat(array);
  }

  if (prompts.hasNum) {
    options = options.concat(num);
  }

  if (prompts.hasSpec) {
    options = options.concat(spec);
  }

  for (var i = 0; i < prompts.passLength; i++) {
    var randIndex = Math.floor(Math.random() * options.length);
    var result = options[randIndex];

    characterArray.push(result);
  }

  randomPassword = characterArray.join("");

  console.log(options);
  return randomPassword;
}

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
    var hasLower = confirm("Would you like Lowercase letters?");
    var hasUpper = confirm("Would you like Uppercase letters?");
    var hasNum = confirm("Would you also like numbers?");
    var hasSpec = confirm("Would you like special characters?");
  } else {
    return alert("Invalid Length");
  }

  var values = {
    passLength,
    hasLower,
    hasUpper,
    hasNum,
    hasSpec,
  };

  return values;
}
