const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/it202-pwa-tutorial",
  "/it202-pwa-tutorial/index.html",
  "/it202-pwa-tutorial/css/style.css",
  "/it202-pwa-tutorial/js/app.js",
  "/images/coffee1.jpg",
  "/it202-pwa-tutorial/images/coffee2.jpg",
  "/it202-pwa-tutorial/images/coffee3.jpg",
  "/it202-pwa-tutorial/images/coffee4.jpg",
  "/it202-pwa-tutorial/images/coffee5.jpg",
  "/it202-pwa-tutorial/images/coffee6.jpg",
  "/it202-pwa-tutorial/images/coffee7.jpg",
  "/it202-pwa-tutorial/images/coffee8.jpg",
  "/it202-pwa-tutorial/images/coffee9.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  )
});
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});