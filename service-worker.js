"use strict";var precacheConfig=[["/FormEditorPage/index.html","c1cb14c1b27ee35b6639923539e646fa"],["/FormEditorPage/static/css/main.4b506ec1.css","4b506ec1e01591660f5e3cb846f266d7"],["/FormEditorPage/static/js/main.6e5eab10.js","8f359e09801a4a7d83bf41425b4554a2"],["/FormEditorPage/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/FormEditorPage/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/FormEditorPage/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/FormEditorPage/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/FormEditorPage/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/FormEditorPage/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/FormEditorPage/static/media/tinymce-small.12d26c28.eot","12d26c285b71d790f4b0c94423ef1f99"],["/FormEditorPage/static/media/tinymce-small.28806940.ttf","28806940c647cf671bebf4ae0630e570"],["/FormEditorPage/static/media/tinymce-small.7e0c88f0.woff","7e0c88f02dcaf2f78c90b4dc7827b709"],["/FormEditorPage/static/media/tinymce-small.a2a1f732.svg","a2a1f732cc34764c684ed521c6f3327c"],["/FormEditorPage/static/media/tinymce.64012277.eot","6401227790b9e544ef6b8d749cd0a358"],["/FormEditorPage/static/media/tinymce.9267f79b.woff","9267f79bc730290c6e2c90f9353d3ccf"],["/FormEditorPage/static/media/tinymce.b84225c5.svg","b84225c5a236c3f6cc1aded9afcf48dd"],["/FormEditorPage/static/media/tinymce.f8d29256.ttf","f8d2925604a55d7b8604a9875b8e70d3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/FormEditorPage/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});