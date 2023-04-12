addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mein-cache').then(function(cache) {
            return cache.addAll([
                '/assets/logo.svg',
                '/assets/icons/add.svg',
                '/assets/icons/close.svg',
                '/assets/icons/coffee.svg',
                '/assets/icons/github.svg',
                '/assets/icons/heart.svg',
                'assets/icons/setting.svg',
                '/assets/products/RedBull.svg',
                '/assets/products/IceTea.svg',
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