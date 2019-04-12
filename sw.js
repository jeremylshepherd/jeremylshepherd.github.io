const staticAssets = [
    './',
    './manifest.json',
    '/css/style.css',
    '/js/index.js',
    '/assets/**/*.png'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('portfolio-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    console.log('fetch heard');
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('portfolio-json');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}
