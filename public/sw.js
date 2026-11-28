/* Offline support. Change VERSION whenever you upload a new index.html so phones pick it up. */
var VERSION='v23';
var CACHE='app-'+VERSION;
var SHELL=['./','index.html','manifest.json','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE&&k!=='fonts'}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var r=e.request; if(r.method!=='GET')return;
  var u=new URL(r.url);
  if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open('fonts').then(function(c){return c.match(r).then(function(m){return m||fetch(r).then(function(res){c.put(r,res.clone());return res}).catch(function(){return m})})}));
    return;
  }
  if(u.origin!==location.origin||u.pathname==='/google-config.json')return;
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(CACHE).then(function(c){c.put('index.html',cp)});return res}).catch(function(){return caches.match('index.html')}));
    return;
  }
  e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp)});return res})}));
});
