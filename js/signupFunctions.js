import { Signup } from "./Signup.js";

const signup = new Signup();

const inputName = document.getElementById("inputName");
const inputLogin = document.getElementById("inputLogin");
const inputPassword = document.getElementById("inputPassword");
const signUpForm = document.getElementById("signUpForm");

inputName.addEventListener("input", (e) => {
  signup.setName(e.target.value);
});

inputLogin.addEventListener("input", (e) => {
  signup.setLogin(e.target.value);
});

inputPassword.addEventListener("input", (e) => {
  signup.setPassword(e.target.value);
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signup.submit() ? signup.redirect() : alert("Please fill the form");
});