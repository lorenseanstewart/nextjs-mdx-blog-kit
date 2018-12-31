export function checkForSW() {
    if ("serviceWorker" in navigator && "caches" in window) {
        setTimeout(async () => {
            navigator.serviceWorker
                .register("../my-worker.js")
                .then(registration => {
                    console.log(
                        "[ServiceWorker] _app.js service worker registration successful",
                        registration
                    );
                    return true;
                })
                .catch(err => {
                    console.warn(
                        "[ServiceWorker] _app.js service worker registration failed",
                        err.message
                    );
                    return false;
                });
        }, 0);
    }
    return false;
}
