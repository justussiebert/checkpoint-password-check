const inputPasswordField1 = document.querySelector("#input-password-1");
const inputPasswordField2 = document.querySelector("#input-password-2");
const inputPasswordFields = document.querySelector(".input-password");
const buttonTogglePassword = document.querySelector("#button-toggle-password");
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
  "#check-passwords-characters-min-length"
);
const listItemPasswordsAll = document.querySelector("#check-passwords-all");

const state = {
  checkPasswordsEqual: false,
  checkPasswordsLowerCase: false,
  checkPasswordsUpperCase: false,
  checkPasswordsNumbers: false,
  checkPasswordsminLength: false,
  PasswordsminLength: 10,
  textCheckAll: "Mal schauen...",
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
    checkPasswordsIfEqual();
    renderCheckList();
  });
});

function checkPasswordsIfEqual() {
  //console.log(inputPasswordField1.value.length);
  if (
    inputPasswordField1.value === inputPasswordField2.value &&
    inputPasswordField1.value.length > 0 &&
    inputPasswordField2.value.length > 0
  ) {
    //console.log("beide gleich und min 1 zeichen");
    state.checkPasswordsEqual = true;
    checkPasswordsIfLowerCase();
    checkPasswordsIfUpperCase();
    checkPasswordsIfNumbers();
    checkPasswordsLength();
    checkPasswordsAll();
  } else {
    state.checkPasswordsEqual = false;
    state.checkPasswordsLowerCase = false;
    state.checkPasswordsUpperCase = false;
    state.checkPasswordsNumbers = false;
    state.checkPasswordsminLength = false;
  }
  //console.log(state.checkPasswordsEqual);
}

function checkPasswordsIfLowerCase() {
  if (/[a-z]/.test(inputPasswordField1.value)) {
    //alert("Ja, kleinbuchstaben");
    state.checkPasswordsLowerCase = true;
  } else {
    //alert("nein, keine kleinbuchstaben");
    state.checkPasswordsLowerCase = false;
  }
}

function checkPasswordsIfUpperCase() {
  if (/[A-Z]/.test(inputPasswordField1.value)) {
    state.checkPasswordsUpperCase = true;
  } else {
    state.checkPasswordsUpperCase = false;
  }
}

function checkPasswordsIfNumbers() {
  if (/\d/.test(inputPasswordField1.value)) {
    //alert("Ja, Zahlen");
    state.checkPasswordsNumbers = true;
  } else {
    //alert("nein, keine zahlen");
    state.checkPasswordsNumbers = false;
  }
}

function checkPasswordsLength() {
  if (inputPasswordField1.value.length < state.PasswordsminLength) {
    //alert("nicht lang genug");
    state.checkPasswordsminLength = false;
  } else {
    //alert("lang genug");
    state.checkPasswordsminLength = true;
  }
}

function renderCheckList() {
  if (state.checkPasswordsEqual === true) {
    listItemPasswordsEqual.classList.add("valid");
  } else {
    listItemPasswordsEqual.classList.remove("valid");
  }

  if (state.checkPasswordsLowerCase === true) {
    listItemPasswordsLowerCase.classList.add("valid");
  } else {
    listItemPasswordsLowerCase.classList.remove("valid");
  }

  if (state.checkPasswordsUpperCase === true) {
    listItemPasswordsUpperCase.classList.add("valid");
  } else {
    listItemPasswordsUpperCase.classList.remove("valid");
  }

  if (state.checkPasswordsNumbers === true) {
    listItemPasswordsNumbers.classList.add("valid");
  } else {
    listItemPasswordsNumbers.classList.remove("valid");
  }

  if (state.checkPasswordsminLength === true) {
    listItemPasswordsMinLength.classList.add("valid");
  } else {
    listItemPasswordsMinLength.classList.remove("valid");
  }
  listItemPasswordsAll.innerText = state.textCheckAll;
}

function checkPasswordsAll() {
  if (
    state.checkPasswordsEqual === true &&
    state.checkPasswordsLowerCase === true &&
    state.checkPasswordsUpperCase === true &&
    state.checkPasswordsNumbers === true &&
    state.checkPasswordsminLength === true
  ) {
    state.textCheckAll = "Glückwunsch! Super Passwort!";
    listItemPasswordsAll.classList.add("valid");
  } else {
    state.textCheckAll = "Das ist es noch nicht...";
    listItemPasswordsAll.classList.remove("valid");
  }
}

window.onload = function () {
  renderCheckList();
};
