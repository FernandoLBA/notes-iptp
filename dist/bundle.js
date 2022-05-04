/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Notes.js":
/*!*********************!*\
  !*** ./js/Notes.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notes\": () => (/* binding */ Notes)\n/* harmony export */ });\n/* harmony import */ var _Signin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signin.js */ \"./js/Signin.js\");\n\r\n\r\nclass Notes extends _Signin_js__WEBPACK_IMPORTED_MODULE_0__.Signin {\r\n  constructor() {\r\n    super();\r\n    this._notes = {};\r\n    this.redirect();\r\n  }\r\n\r\n  // getter and setters\r\n  getNotes() {\r\n    return localStorage[\"notes\" + this._name];\r\n  }\r\n\r\n  setNote(note) {\r\n    if (this.getNotes()) {\r\n      let notes = JSON.parse(this.getNotes());\r\n      notes.push({ date: new Date().toDateString(), note });\r\n      localStorage.setItem(\"notes\" + this._name, JSON.stringify(notes));\r\n      this._notes[\"notes\" + this._name] = notes;\r\n    } else {\r\n      localStorage.setItem(\r\n        \"notes\" + this._name,\r\n        JSON.stringify([{ date: new Date().toDateString(), note }])\r\n      );\r\n      this._notes = [{ date: new Date().toDateString(), note }];\r\n    }\r\n  }\r\n\r\n  setLoggedIn() {\r\n    return (\r\n      localStorage.loggedIn === \"undefined\" &&\r\n      localStorage.setItem(\"loggedIn\", \"0\")\r\n    );\r\n  }\r\n\r\n  getGreeting() {\r\n    return this._loggedIn == \"1\" && `Good day, ${this._name}`;\r\n  }\r\n\r\n  redirect() {\r\n    if (!this.getLoggedIn() || this.getLoggedIn() == \"0\") {\r\n      window.location.assign(\"https://pwa-html.netlify.app/signup.html\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://pwa-html/./js/Notes.js?");

/***/ }),

/***/ "./js/Signin.js":
/*!**********************!*\
  !*** ./js/Signin.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Signin\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var _Signup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.js */ \"./js/Signup.js\");\n\r\n\r\nclass Signin extends _Signup_js__WEBPACK_IMPORTED_MODULE_0__.Signup {\r\n  constructor() {\r\n    super();\r\n    !localStorage.loggedIn && this.setLoggedIn();\r\n    this._loggedIn = this.getLoggedIn();\r\n    this._loginData = {};\r\n    this._name = this.getName();\r\n  }\r\n\r\n  // getters y setters\r\n  getLogin() {\r\n    return this._loginData?.login;\r\n  }\r\n\r\n  setLogin(login) {\r\n    this._loginData[\"login\"] = login;\r\n  }\r\n\r\n  getPassword() {\r\n    return this._password?.password;\r\n  }\r\n\r\n  setPassword(password) {\r\n    this._loginData[\"password\"] = password;\r\n  }\r\n\r\n  getLoggedIn() {\r\n    return localStorage.getItem(\"loggedIn\");\r\n  }\r\n\r\n  setLoggedIn() {\r\n    if (localStorage.loggedIn === undefined) {\r\n      localStorage.setItem(\"loggedIn\", \"0\");\r\n    } else {\r\n      localStorage.setItem(\"loggedIn\", this._loggedIn == \"1\" ? \"0\" : \"1\");\r\n    }\r\n  }\r\n\r\n  validate() {\r\n    if (!this._loginData?.login?.length || !this._loginData?.password?.length) {\r\n      return false;\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  signIn() {\r\n    if (\r\n      this.validate() &&\r\n      this._loginData?.login === localStorage.getItem(\"login\") &&\r\n      this._loginData?.password === localStorage.getItem(\"password\")\r\n    ) {\r\n      this.setLoggedIn();\r\n      return true;\r\n    }\r\n\r\n    alert(\"Please check your login data\");\r\n    return false;\r\n  }\r\n\r\n  accessGranted() {\r\n    return window.location.assign(\"https://pwa-html.netlify.app/index.html\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://pwa-html/./js/Signin.js?");

/***/ }),

/***/ "./js/Signup.js":
/*!**********************!*\
  !*** ./js/Signup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Signup\": () => (/* binding */ Signup)\n/* harmony export */ });\nclass Signup {\r\n  constructor() {\r\n    this._data = {};\r\n  }\r\n\r\n  // getters and setters\r\n  getName() {\r\n    return localStorage.getItem(\"name\");\r\n  }\r\n\r\n  setName(name) {\r\n    this._data[\"name\"] = name;\r\n  }\r\n\r\n  getLogin() {\r\n    return localStorage.getItem(\"login\");\r\n  }\r\n\r\n  setLogin(login) {\r\n    this._data[\"login\"] = login;\r\n  }\r\n\r\n  getPassword() {\r\n    return localStorage.getItem(\"password\");\r\n  }\r\n\r\n  setPassword(password) {\r\n    this._data[\"password\"] = password;\r\n  }\r\n\r\n  getAllInfo() {\r\n    return this._data;\r\n  }\r\n\r\n  submit() {\r\n    if (\r\n      this._data?.name?.length &&\r\n      this._data?.login?.length &&\r\n      this._data?.password?.length\r\n    ) {\r\n      for (let key in this._data) {\r\n        localStorage.setItem(key, this._data[key]);\r\n      }\r\n      return true;\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  redirect() {\r\n    return window.location.assign(\"https://pwa-html.netlify.app/signin.html\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://pwa-html/./js/Signup.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n// detectar el soporte de service workers e instalarlo en el navegador\r\nconst app = (function () {\r\n  if (\"serviceWorker\" in navigator) {\r\n    // Se crea el archivo sw.js en la raíz del proyecto, ese archivo será el service worker y se registrará aquí:\r\n    navigator.serviceWorker\r\n      .register(\"./serviceWorker.js\")\r\n      .then((registered) => console.log(\"Service worker installed\", registered))\r\n      .catch((error) => console.log(\"Service worker not installed\", error));\r\n  } else {\r\n    console.log(\"Not support for service worker\");\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack://pwa-html/./js/app.js?");

/***/ }),

/***/ "./js/functions.js":
/*!*************************!*\
  !*** ./js/functions.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btn\": () => (/* binding */ btn),\n/* harmony export */   \"fnFillTable\": () => (/* binding */ fnFillTable),\n/* harmony export */   \"fnGreeting\": () => (/* binding */ fnGreeting),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"greeting\": () => (/* binding */ greeting),\n/* harmony export */   \"inputLogin\": () => (/* binding */ inputLogin),\n/* harmony export */   \"inputName\": () => (/* binding */ inputName),\n/* harmony export */   \"inputPassword\": () => (/* binding */ inputPassword),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"notes\": () => (/* binding */ notes),\n/* harmony export */   \"password\": () => (/* binding */ password),\n/* harmony export */   \"signUpForm\": () => (/* binding */ signUpForm),\n/* harmony export */   \"signin\": () => (/* binding */ signin),\n/* harmony export */   \"signup\": () => (/* binding */ signup),\n/* harmony export */   \"tbody\": () => (/* binding */ tbody)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./js/index.js\");\n\r\n\r\n// Instances\r\nconst signup = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Signup();\r\nconst signin = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Signin();\r\nconst notes = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Notes();\r\n\r\n// selectors\r\nconst login = document.getElementById(\"login\");\r\nconst password = document.getElementById(\"password\");\r\nconst form = document.getElementById(\"formSignin\");\r\nconst inputName = document.getElementById(\"inputName\");\r\nconst inputLogin = document.getElementById(\"inputLogin\");\r\nconst inputPassword = document.getElementById(\"inputPassword\");\r\nconst signUpForm = document.getElementById(\"signUpForm\");\r\nconst greeting = document.getElementById(\"greeting\");\r\nconst btn = document.getElementById(\"btn\");\r\nconst tbody = document.getElementById(\"tbody\");\r\n\r\n// event listeners\r\nlogin.addEventListener(\"input\", (e) => {\r\n  signin.setLogin(e.target.value);\r\n});\r\n\r\npassword.addEventListener(\"input\", (e) => {\r\n  signin.setPassword(e.target.value);\r\n});\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  signin.signIn() && signin.accessGranted();\r\n});\r\n\r\ninputName.addEventListener(\"input\", (e) => {\r\n  signup.setName(e.target.value);\r\n});\r\n\r\ninputLogin.addEventListener(\"input\", (e) => {\r\n  signup.setLogin(e.target.value);\r\n});\r\n\r\ninputPassword.addEventListener(\"input\", (e) => {\r\n  signup.setPassword(e.target.value);\r\n});\r\n\r\nsignUpForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  signup.submit() ? signup.redirect() : alert(\"Please fill the form\");\r\n});\r\n\r\nbtn.addEventListener(\"click\", (e) => {\r\n  const note = prompt(\"Please, type your note here\");\r\n  note && notes.setNote(note);\r\n  window.location.reload();\r\n});\r\n\r\n// functions\r\nconst fnGreeting = (function () {\r\n  if (notes._loggedIn == \"1\") greeting.innerText = notes.getGreeting();\r\n})();\r\n\r\nconst fnFillTable = (function () {\r\n  const notesHTML = notes.getNotes() ? JSON.parse(notes.getNotes()) : [];\r\n  notesHTML.forEach((note) => {\r\n    tbody.innerHTML += `<tr>\r\n      <td>${note.date}</td>\r\n      <td>${note.note}</td>\r\n    </tr>`;\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://pwa-html/./js/functions.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notes\": () => (/* reexport safe */ _Notes_js__WEBPACK_IMPORTED_MODULE_3__.Notes),\n/* harmony export */   \"Signin\": () => (/* reexport safe */ _Signin_js__WEBPACK_IMPORTED_MODULE_2__.Signin),\n/* harmony export */   \"Signup\": () => (/* reexport safe */ _Signup_js__WEBPACK_IMPORTED_MODULE_1__.Signup),\n/* harmony export */   \"app\": () => (/* reexport safe */ _app_js__WEBPACK_IMPORTED_MODULE_0__.app),\n/* harmony export */   \"btn\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.btn),\n/* harmony export */   \"fnFillTable\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.fnFillTable),\n/* harmony export */   \"fnGreeting\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.fnGreeting),\n/* harmony export */   \"form\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.form),\n/* harmony export */   \"greeting\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.greeting),\n/* harmony export */   \"inputLogin\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.inputLogin),\n/* harmony export */   \"inputName\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.inputName),\n/* harmony export */   \"inputPassword\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.inputPassword),\n/* harmony export */   \"login\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.login),\n/* harmony export */   \"notes\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.notes),\n/* harmony export */   \"password\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.password),\n/* harmony export */   \"signUpForm\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.signUpForm),\n/* harmony export */   \"signin\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.signin),\n/* harmony export */   \"signup\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.signup),\n/* harmony export */   \"tbody\": () => (/* reexport safe */ _functions_js__WEBPACK_IMPORTED_MODULE_4__.tbody)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./js/app.js\");\n/* harmony import */ var _Signup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.js */ \"./js/Signup.js\");\n/* harmony import */ var _Signin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Signin.js */ \"./js/Signin.js\");\n/* harmony import */ var _Notes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notes.js */ \"./js/Notes.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions.js */ \"./js/functions.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pwa-html/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;