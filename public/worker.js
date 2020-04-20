var CACHE_NAME = "shoppify-cache";
var urlToCache = [
  "/",
  "/favicon.io",
  "/index.html",
  "/mainfest.json",
  "/service-worker",
  "/products.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlToCache))
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {})
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("Found in cache");
        console.log(event.request);
        console.log(response);
        return response;
      }
      console.log("Not found in cache");
      console.log(event.request);
      return fetch(event.request);
    })
  );
});
