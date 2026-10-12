const CACHE='finelybd-static-v3';
const ASSETS=['/','/index.html','/contact.html','/login.html','/privacy.html','/terms.html','/offline.html','/manifest.webmanifest','/icons/finelybd.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('finelybd-static-')&&key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim();});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match(req).then(found=>found||caches.match('/offline.html'))));return;}event.respondWith(fetch(req).catch(()=>caches.match(req)));});
