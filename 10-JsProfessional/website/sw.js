const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/meTieneMal.mp4",
  ]);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // get
  if (request.method !== "GET") {
    return;
  }

  // Buscar en caché
  event.respondWith(cachedResponse(request));

  // Actualizar el caché
  event.waitUntil(updateCache(request));
});

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  if (!(request.url.indexOf("http") === 0)) return;
  const cache = await caches.open(VERSION);
  const response = await fetch(request, { cache: "no-store" });
  return cache.put(request, response);
}
