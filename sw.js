// Service Worker installieren
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('offline-cache')
        .then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/assets/image.jpg'
            ]);
        })
    );
});

// Service Worker aktivieren
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== 'offline-cache')
                .map(key => caches.delete(key))
            );
        })
    );
});

// Service Worker Anfragen abfangen
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            } else {
                return fetch(event.request)
                    .then(response => {
                        return caches.open('offline-cache')
                            .then(cache => {
                                cache.put(event.request, response.clone());
                                return response;
                            });
                    });
            }
        })
    );
});