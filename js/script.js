//const myForm = document.querySelector(".formX");
const inputPasswordField1 = document.querySelector("#input-password-1");
const inputPasswordField2 = document.querySelector("#input-password-2");
const inputPasswordFields = document.querySelector(".input-password");
const buttonTogglePassword = document.querySelector("#button-toggle-password");

//const listPasswordsChecks = document.querySelector(".list-checks");

const listItemPasswordsEqual = document.querySelector("#check-passwords-equal");
const listItemPasswordsLowerCase = document.querySelector(
  "#check-passwords-lower-case"
);
const listItemPasswordsUpperCase = document.querySelector(
  "#check-passwords-upper-case"
);
const listItemPasswordsNumbers = document.querySelector(
  "#check-passwords-numbers"
);
const listItemPasswordsMinLength = document.querySelector(
  "#check-passwords-min-length"
);

const state = {
  checkPasswordsEqual: false,
  checkPasswordsLowerCase: false,
  checkPasswordsUpperCase: false,
  checkPasswordsNumbers: false,
  checkPasswordsminLength: false,
  PasswordsminLength: 10,
};

buttonTogglePassword.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputPasswordField1.type === "password") {
    inputPasswordField1.type = "text";
  } else {
    inputPasswordField1.type = "password";
  }
  if (inputPasswordField2.type === "password") {
    inputPasswordField2.type = "text";
  } else {
    inputPasswordField2.type = "password";
  }
  //console.log(inputPasswordField1.type);
  if (
    inputPasswordField1.type !== "password" &&
    inputPasswordField2.type !== "password"
  ) {
    buttonTogglePassword.value = "Passwort verstecken";
  } else {
    buttonTogglePassword.value = "Passwort anzeigen";
  }
});

// if input on input-field passw1 or passw2
[inputPasswordField1, inputPasswordField2].forEach(function (passwordField) {
  passwordField.addEventListener("input", function (e) {
    //alert(this.value);
    checkPasswords();
    renderCheckList();
  });
});

function checkPasswords() {
  //console.log(inputPasswordField1.value.length);
  if (
    inputPasswordField1.value === inputPasswordField2.value &&
    inputPasswordField1.value.length > 0 &&
    inputPasswordField2.value.length > 0
  ) {
    //console.log("beide gleich und min 1 zeichen");
    state.checkPasswordsEqual = true;
  } else {
    state.checkPasswordsEqual = false;
    state.checkPasswordsLowerCase = false;
    state.checkPasswordsUpperCase = false;
    state.checkPasswordsNumbers = false;
    state.checkPasswordsminLength = false;
  }
  //console.log(state.checkPasswordsEqual);
}

function renderCheckList() {
  if (state.checkPasswordsEqual === true) {
    listItemPasswordsEqual.classList.add("valid");
  } else {
    listItemPasswordsEqual.classList.remove("valid");
  }
}

window.onload = function () {
  renderCheckList();
};
