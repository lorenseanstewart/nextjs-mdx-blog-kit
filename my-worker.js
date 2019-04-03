// change precacheVersion whenever you update this file
// (e.g. if you add a new url to the precacheFiles array.)
const precacheVersion = 9;
const precacheName = "precache-v" + precacheVersion;

/*
In the array below, include the urls to all the posts/pages 
that you want cached for offline access. For files that are nested
more than two directories deep, you will need the full url.

E.g. Pages within `/blog/animation/`, will not get cached. You will 
to enter the full url, e.g., `/blog/animation/using-react-sprint` for each page in 
the directory. 
*/

const precacheFiles = [
    "/",
    "/about/",
    "/search/",
    "/blog/",
    "/blog/post-one-code-block-demo/",
    "/blog/post-two-image-demo/",
    "/blog/post-three-smooth-scroll-and-reading-progress-bar/",
    "/blog/post-four-link-on-twitter/"
];

self.addEventListener("install", e => {
    console.log("[ServiceWorker] Installed");

    self.skipWaiting();

    e.waitUntil(
        caches.open(precacheName).then(cache => {
            console.log("[ServiceWorker] Precaching files", cache);
            return cache.addAll(precacheFiles);
        })
    );
});

self.addEventListener("activate", e => {
    console.log("[ServiceWorker] Activated");

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(thisCacheName => {
                    if (
                        thisCacheName.includes("precache") &&
                        thisCacheName !== precacheName
                    ) {
                        console.log(
                            "[ServiceWorker] Removing cached files from old cache - ",
                            thisCacheName
                        );
                        return caches.delete(thisCacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(cachedResponse => {
            if (cachedResponse) {
                console.log("Found in cache!");
                return cachedResponse;
            }

            return fetch(e.request)
                .then(fetchResponse => fetchResponse)
                .catch(err => {
                    const isHTMLPage =
                        e.request.method == "GET" &&
                        e.request.headers.get("accept").includes("text/html");
                    if (isHTMLPage) return caches.match("/");
                });
        })
    );
});
