
let passInput = document.getElementById("password");
let usernameInput = document.getElementById("username");
let eightCharacter = document.getElementById("character");
let specialCharacter = document.getElementById("special");
let containNumber = document.getElementById("digit");
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("signupForm");

function validatePassword() {
  let userPassword = passInput.value;
  let isValid = true;

  // Length check
  if (userPassword.length >= 8) {
    eightCharacter.classList.add("valid");
    eightCharacter.classList.remove("invalid");
  } else {
    eightCharacter.classList.remove("valid");
    eightCharacter.classList.add("invalid");
  }

  // Special character check
  let specialPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (userPassword.match(specialPattern)) {
    specialCharacter.classList.add("valid");
    specialCharacter.classList.remove("invalid");
  } else {
    specialCharacter.classList.remove("valid");
    specialCharacter.classList.add("invalid");
    isValid = false;
  }

  // Number check
  let numberPattern = /[0-9]/;
  if (userPassword.match(numberPattern)) {
    containNumber.classList.add("valid");
    containNumber.classList.remove("invalid");
  } else {
    containNumber.classList.remove("valid");
    containNumber.classList.add("invalid");
    isValid = false;
  }

  // Submit button
  if (isValid && usernameInput.value.trim() !== "") {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

passInput.addEventListener("keyup", validatePassword);
usernameInput.addEventListener("keyup", validatePassword);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    username: usernameInput.value,
    password: passInput.value,
  };

  console.log("Form submitted with details:", formData);
  alert("Form submitted successfully!");
});

validatePassword();
