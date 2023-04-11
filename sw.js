addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mein-cache').then(function(cache) {
            return cache.addAll([
                '/assets/logo.webp',
                '/assets/icons/add.webp',
                '/assets/icons/close.webp',
                '/assets/icons/coffee.webp',
                '/assets/icons/github.webp',
                '/assets/icons/heart.webp',
                'assets/icons/setting.webp',
                '/assets/products/RedBull.webp',
                '/assets/products/IceTea.webp',
                '/public/style.css',
                '/public/scripts/popout.js',
                '/public/scripts/pulltorefresh.js',
                '/manifest.json'


            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});