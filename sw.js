self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('smitshetye-store').then((cache) => cache.addAll([
      '/smitshetye.github.io',
      '/smitshetye.github.io/index.html',
      '/smitshetye.github.io/index.js',
      '/smitshetye.github.io/css/style.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
