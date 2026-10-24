// Emphile portal service worker: enables installing the portal; does not cache any data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* always go to the network */ });
