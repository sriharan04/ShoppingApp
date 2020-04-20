/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

importScripts("/precache-manifest.a54f28ba1ad5db7be5b9c9d378539bd2.js");

var CACHE_NAME = "shoppify-cache";
var urlToCache = [
  "/",
  "/favicon.io",
  "/asset-manifest.json",
  "/index.html",
  "/mainfest.json",
  "/service-worker",
  "/static/js/2.1e9d5e79.js",
  "/static/js/main.ec088f1e.chunck.js",
  "/static/js/runtime-main.82555fca.js",
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

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
  }
);
