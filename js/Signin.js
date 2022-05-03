import { Signup } from "./Signup.js";

export class Signin extends Signup {
  constructor() {
    super();
    !localStorage.loggedIn && this.setLoggedIn();
    this._loggedIn = this.getLoggedIn();
    this._loginData = {};
    this._name = this.getName();
  }

  // getters y setters
  getLogin() {
    return this._loginData?.login;
  }

  setLogin(login) {
    this._loginData["login"] = login;
  }

  getPassword() {
    return this._password?.password;
  }

  setPassword(password) {
    this._loginData["password"] = password;
  }

  getLoggedIn() {
    return localStorage.getItem("loggedIn");
  }

  setLoggedIn() {
    if (localStorage.loggedIn === undefined) {
      localStorage.setItem("loggedIn", "0");
    } else {
      localStorage.setItem("loggedIn", this._loggedIn == "1" ? "0" : "1");
    }
  }

  validate() {
    if (!this._loginData?.login?.length || !this._loginData?.password?.length) {
      return false;
    }

    return true;
  }

  signIn() {
    if (
      this.validate() &&
      this._loginData?.login === localStorage.getItem("login") &&
      this._loginData?.password === localStorage.getItem("password")
    ) {
      this.setLoggedIn();
      return true;
    }

    alert("Please check your login data");
    return false;
  }

  accessGranted() {
    return window.location.assign("https://pwa-html.netlify.app/pwa-html/index.html");
  }
}
