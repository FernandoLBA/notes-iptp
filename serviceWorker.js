const iptpCache = "notes-site";
const assets = [
  "/",
  "/index.html",
  "/signup.html",
  "/signin.html",
  "/js/app.js",
  "/js/Notes.js",
  "/js/notesFunctions.js",
  "/js/Signin.js",
  "/js/signinFunction.js",
  "/js/Signup.js",
  "/js/signupFunctions.js",
];

self.addEventListener("install", (installEvent) => {
  console.log("Installing service worker...");
  installEvent.waitUntil(
    caches.open(iptpCache).then((cache) => {
      console.log("adding assets to cache...");
      cache.addAll(assets);
    })
  );
});

// Activate the service worker
self.addEventListener("activate", (activateEvent) => {
  console.log("Service worker activated");

  activateEvent.waitUntil(
    caches.keys().then((keys) => {
      console.log(keys);
      return Promise.all(
        keys.filter((key) => key !== iptpCache).map((key) => caches.delete(key)) //Borra las versiones anteriores del caché
      );
    })
  );
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', fetchEvent => {
  console.log('Fetch...', fetchEvent);
});