addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mein-cache').then(function(cache) {
            return cache.addAll([
                '/assets/logo.png',
                '/assets/icons/add.png',
                '/assets/icons/close.png',
                '/assets/icons/coffee.png',
                '/assets/icons/github.png',
                '/assets/icons/heart.png',
                'assets/icons/setting.png',
                '/assets/products/redbull.webp',
                '/assets/products/icetea.webp',
                '/style.css',
                '/js/popout.js',
                '/js/pulltorefresh.js',
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