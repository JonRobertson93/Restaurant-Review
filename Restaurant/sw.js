// name the cache
let CACHE = 'cache-only';

// if cache matches, return that cache. Otherwise fetch the cache
self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request, {ignoreSearch:true}).then(function(response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});

// Used to cache files to load when offline or bad connection
self.addEventListener('install', function(event) {
	event.waitUntil(
	//wait until installation event completes
		caches.open(CACHE).then(function(cache){
			return cache.addAll([
				'/',
				'/index.html',
				'/restaurant.html',
				'/css/styles.css',
				'/css/responsive.css',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/data/restaurants.json',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
			]);
		})
	);
});
