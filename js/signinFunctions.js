import { Signin } from "./Signin.js";

const signin = new Signin();

const login = document.getElementById("login");
const password = document.getElementById("password");
const form = document.getElementById("formSignin");

login.addEventListener("input", (e) => {
  signin.setLogin(e.target.value);
})

password.addEventListener("input", (e) => {
  signin.setPassword(e.target.value);
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  signin.signIn() && signin.accessGranted();
})