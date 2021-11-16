var CACHE_NAME = 'react-app';
var urlsToCache = [
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/vendors~main.chunk.js'
];

/* var urlsToCache = [
    '/static/css/main.550b4654.chunk.css',
    '/static/css/main.550b4654.chunk.css.map',
    '/static/js/2.a332e50b.chunk.js',
    '/static/js/2.a332e50b.chunk.js.LICENSE.txt',
    '/static/js/2.a332e50b.chunk.js.map',
    '/static/js/3.d5cb0be7.chunk.js',
    '/static/js/3.d5cb0be7.chunk.js.map',
    '/static/js/main.008a9d78.chunk.js',
    '/static/js/main.008a9d78.chunk.js.map',
    '/static/js/runtime-main.440d6f10.js',
    '/static/js/runtime-main.440d6f10.js.map'
]; */

self.window = self;
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

self.addEventListener('activate', function (event) {

    var cacheAllowlist = ['/', 'home','/*'];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});