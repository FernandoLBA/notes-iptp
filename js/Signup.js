export class Signup {
  constructor() {
    this._data = {};
  }

  // getters and setters
  getName() {
    return localStorage.getItem("name");
  }

  setName(name) {
    this._data["name"] = name;
  }

  getLogin() {
    return localStorage.getItem("login");
  }

  setLogin(login) {
    this._data["login"] = login;
  }

  getPassword() {
    return localStorage.getItem("password");
  }

  setPassword(password) {
    this._data["password"] = password;
  }

  getAllInfo() {
    return this._data;
  }

  submit() {
    if (
      this._data?.name?.length &&
      this._data?.login?.length &&
      this._data?.password?.length
    ) {
      for (let key in this._data) {
        localStorage.setItem(key, this._data[key]);
      }
      return true;
    }

    return false;
  }

  redirect() {
    return window.location.assign("https://pwa-html.netlify.app/pwa-html/signin.html");
  }
}
