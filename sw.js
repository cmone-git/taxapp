const CACHE_NAME = 'cmtaxapp-v1.0';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './assets/logo.png',
  './assets/logo-app.png',
  './assets/logo-fav.png',
  './assets/logo-splash.png',
  './assets/header-name.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});