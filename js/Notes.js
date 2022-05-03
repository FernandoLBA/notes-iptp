import { Signin } from "./Signin.js";

export class Notes extends Signin {
  constructor() {
    super();
    this._notes = {};
    this.redirect();
  }

  // getter and setters
  getNotes() {
    return localStorage["notes" + this._name];
  }

  setNote(note) {
    if (this.getNotes()) {
      let notes = JSON.parse(this.getNotes());
      notes.push({ date: new Date().toDateString(), note });
      localStorage.setItem("notes" + this._name, JSON.stringify(notes));
      this._notes["notes" + this._name] = notes;
    } else {
      localStorage.setItem(
        "notes" + this._name,
        JSON.stringify([{ date: new Date().toDateString(), note }])
      );
      this._notes = [{ date: new Date().toDateString(), note }];
    }
  }

  setLoggedIn() {
    return (
      localStorage.loggedIn === "undefined" &&
      localStorage.setItem("loggedIn", "0")
    );
  }

  getGreeting() {
    return this._loggedIn == "1" && `Good day, ${this._name}`;
  }

  redirect() {
    if (!this.getLoggedIn() || this.getLoggedIn() == "0") {
      window.location.assign("https://pwa-html.netlify.app/signup.html");
    }
  }
}
