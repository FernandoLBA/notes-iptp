// detectar el soporte de service workers e instalarlo en el navegador
export const app = (function () {
  if ("serviceWorker" in navigator) {
    // Se crea el archivo sw.js en la raíz del proyecto, ese archivo será el service worker y se registrará aquí:
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((registered) => console.log("Service worker installed", registered))
      .catch((error) => console.log("Service worker not installed", error));
  } else {
    console.log("Not support for service worker");
  }
})();
