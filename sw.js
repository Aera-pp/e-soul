const CACHE_NAME = "e-soul-v1";

const urlsToCache = [

"/",
"/index.html",
"/login.html",
"/signup.html",
"/home.html",
"/record.html",
"/mission.html",
"/compare.html",
"/reward.html",
"/mypage.html",
"/css/style.css"

];

self.addEventListener("install", e => {

e.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {

return cache.addAll(
urlsToCache
);

})

);

});

self.addEventListener("fetch", e => {

e.respondWith(

caches.match(
e.request
)

.then(response => {

return response ||
fetch(
e.request
);

})

);

});