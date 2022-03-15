self.addEventListener('install', event => {
    event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method != "GET") {
        return;
    }
    // buscar cache
    event.respondWith(cachedResponse(request));

    //Actualizar cache
    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open('VERSION');
    return cache.addAll([
        /* '/',
        '/index.html',
        '/index.js',
        '/MediaPlayer.js',
        '/plugins/AutoPlay.js',
        '/plugins/AutoPause.ts',
        '/assets/style.css',
        '/assets/rain.mp4', */
    ]);
}

async function cachedResponse (request) {
    const cache = await caches.open('VERSION')
    const response = await cache.match(request)
    return response || fetch(request);
}

// It updates the cache given a request
async function updateCache(request) {
    const cache = await caches.open('VERSION');
    const response = await fetch(request);
    // Cache.put when status code is 200 
    // Otherwise return a simple promise 
    return response.status === 200 
        ? cache.put(request, response) 
        : new Promise((resolve, reject) => resolve(':D'));    
}