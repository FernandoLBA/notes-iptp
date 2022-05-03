import { Notes } from "./Notes.js";

const notes = new Notes();

const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");

btn.addEventListener("click", (e) => {
  const note = prompt("Please, type your note here");
  note && notes.setNote(note);
  window.location.reload();
});

if (notes._loggedIn == "1") greeting.innerText = notes.getGreeting();

const notesHTML = notes.getNotes() ? JSON.parse(notes.getNotes()) : [];

notesHTML.forEach((note) => {
  tbody.innerHTML += `<tr>
    <td>${note.date}</td>
    <td>${note.note}</td>
  </tr>`;
});
