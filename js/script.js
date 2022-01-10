//const myForm = document.querySelector(".formX");
const inputPasswordField1 = document.querySelector("#input-password-1");
const inputPasswordField2 = document.querySelector("#input-password-2");
const buttonTogglePassword = document.querySelector("#button-toggle-password");

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
