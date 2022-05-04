import { Signup, Signin, Notes } from "./index.js";

// Instances
export const signup = new Signup();
export const signin = new Signin();
export const notes = new Notes();

// selectors
export const login = document.getElementById("login");
export const password = document.getElementById("password");
export const form = document.getElementById("formSignin");
export const inputName = document.getElementById("inputName");
export const inputLogin = document.getElementById("inputLogin");
export const inputPassword = document.getElementById("inputPassword");
export const signUpForm = document.getElementById("signUpForm");
export const greeting = document.getElementById("greeting");
export const btn = document.getElementById("btn");
export const tbody = document.getElementById("tbody");

// event listeners
login.addEventListener("input", (e) => {
  signin.setLogin(e.target.value);
});

password.addEventListener("input", (e) => {
  signin.setPassword(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  signin.signIn() && signin.accessGranted();
});

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

btn.addEventListener("click", (e) => {
  const note = prompt("Please, type your note here");
  note && notes.setNote(note);
  window.location.reload();
});

// functions
export const fnGreeting = (function () {
  if (notes._loggedIn == "1") greeting.innerText = notes.getGreeting();
})();

export const fnFillTable = (function () {
  const notesHTML = notes.getNotes() ? JSON.parse(notes.getNotes()) : [];
  notesHTML.forEach((note) => {
    tbody.innerHTML += `<tr>
      <td>${note.date}</td>
      <td>${note.note}</td>
    </tr>`;
  });
})();
