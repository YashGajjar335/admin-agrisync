'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c1d93dd164cf0c7df461dbebdad453b1",
"assets/AssetManifest.bin.json": "bb5f3236ea8a62ab32ecc6173a3de5c2",
"assets/AssetManifest.json": "9308c57c599eba0ffec2d3c28065e26b",
"assets/assets/Animation%2520-%25201723701867292.json": "5627777b64b777d7fc4020a46128a5f6",
"assets/assets/app_logo.jpg": "4643ed57b5e4224bd23e4ca0b002e1f0",
"assets/assets/app_logo.png": "b36f9830908628dd8b1011d2182d22c8",
"assets/assets/app_logo_half.JPG": "1ad84dde033e8b3a010cf5883c0b00f7",
"assets/assets/cal1.jpg": "b989a9c3b6995034667003f4eceb485e",
"assets/assets/clear.png": "d8480f19997a989ca34032d0c4138c7a",
"assets/assets/cloud.png": "b131815636c3c96e3d15a72ae6c3950b",
"assets/assets/cloudy.png": "d1b3b4ea2043e4c81f0aac2699b8f6b6",
"assets/assets/com11.jpg": "03c0493b31c5a4b07cec9f151d531e59",
"assets/assets/comm1.jpg": "87be5bc1dab5c650820abde3ef860be9",
"assets/assets/farm.png": "832d4b125b713017e8fc4af8aac5ef72",
"assets/assets/fog.png": "0ac446084e7ae903b3ac39b0e5db6c7f",
"assets/assets/heavycloudy.png": "989aa2174078ba4644d7b5b674fdb2f0",
"assets/assets/heavyrain.png": "b2a615a7867288a6803f049784fd188b",
"assets/assets/humidity.png": "5c3786fd7561fdf879333352c430a754",
"assets/assets/icons/CHR.png": "337657cbe88360d85d9597be4248a3ba",
"assets/assets/icons/close_eye.png": "69267eeba61b2099533b8ba78b1ed351",
"assets/assets/icons/comment.png": "de508fc55415f885096bdc05805df3b0",
"assets/assets/icons/email.png": "f225abc2397502d6c182b77a8c77a9f8",
"assets/assets/icons/feedback.png": "23bf107c154d13c470e6ccab41273a83",
"assets/assets/icons/help.png": "1550809abab7168a1ca75dc1d658b2d9",
"assets/assets/icons/home.png": "574f41a325f42e96398d86a69d061477",
"assets/assets/icons/language.png": "01f05d76d46ec64fa6b8259668c29ec8",
"assets/assets/icons/logout.png": "6d6f865b9392808068c48252030d0503",
"assets/assets/icons/menu.png": "43fc26aaf6e7fab2c044be28d242898d",
"assets/assets/icons/more.png": "e7aadd78885ae2fc0e6ebb7e1f12b60a",
"assets/assets/icons/onbording.png": "415dd073f5a10b7c29d2c1560c2d4473",
"assets/assets/icons/open_eye.png": "8cd26e813176ae9d2fc2ad9f56d3fdf7",
"assets/assets/icons/profile.png": "476607ed944e275befee7b3847f10f6a",
"assets/assets/icons/refresh.png": "70cdb0b40b79612a594570cd7d7e54fc",
"assets/assets/icons/reset-password.png": "45ccab085da18c5429692cdcf4ea49d5",
"assets/assets/icons/setting.png": "3e037899106d8954ce31fc109dfe42ea",
"assets/assets/icons/shopping-cart.png": "f6587f4d13e71a13bbdef3360a41ca97",
"assets/assets/icons/social_page.png": "5c05d326618da0672963d3f5e9e9a331",
"assets/assets/icons/tech.png": "a0c7bc9711d0d4b470c77aa8d7481e20",
"assets/assets/lastpage2.jpg": "13fc47a6469e2a147026cda8e1331c89",
"assets/assets/lastpage3.jpg": "5bfa2fa3ba4042557da9235f1e12653c",
"assets/assets/lightdrizzle.png": "1728c7463f3ea8e81a20364c435d8051",
"assets/assets/lightrain.png": "5ca1735e2c81e7943c36f7ad5238950a",
"assets/assets/lightrainshower.png": "1728c7463f3ea8e81a20364c435d8051",
"assets/assets/login_screen_background.jpg": "be11b878363c98e0ccf47d0b2c68981b",
"assets/assets/menu.png": "5bb453a21860bf26d285b314468b5b91",
"assets/assets/mist.png": "31712ba35636e98ad909050c8465fb9f",
"assets/assets/moderateorheavyrainshower.png": "4c807e98dc5052f6e182540a8f0ed812",
"assets/assets/moderateorheavyrainwiththunder.png": "b2a615a7867288a6803f049784fd188b",
"assets/assets/moderaterain.png": "c273003a7fa4b6fe442a66fbeaa081c0",
"assets/assets/moderaterainattimes.png": "c273003a7fa4b6fe442a66fbeaa081c0",
"assets/assets/overcast.png": "18190bc362247e5c2c1677b2a6127e62",
"assets/assets/page11.png": "cd868596e617096491678ed08b6685f2",
"assets/assets/partlycloudy.png": "bd87ba1c4b2d8b8dc8fa46868898c80e",
"assets/assets/patchylightdrizzle.png": "1728c7463f3ea8e81a20364c435d8051",
"assets/assets/patchylightrain.png": "62a0dc8856d60825b9bf0917266dfab8",
"assets/assets/patchylightrainwiththunder.png": "522d29476a7f57a627814f0c5b222053",
"assets/assets/patchyrainpossible.png": "62a0dc8856d60825b9bf0917266dfab8",
"assets/assets/pin.png": "6cd065420f70d4a3c38eff1d2ad46ff1",
"assets/assets/profile.png": "b3d1658a7882560c446c03fd0bff5998",
"assets/assets/shop1.jpg": "abbea6aca5ed013c165309d0f47dec64",
"assets/assets/smart_farm.jpg": "aea7ebcfef7c3f1869b78119147b6d7b",
"assets/assets/spash_screen.PNG": "3d91dccf22fa943a7717fc7e3ba3f90c",
"assets/assets/sunny.png": "177c255d37b5338838a36f93d886783b",
"assets/assets/technology.jpg": "88e8c5a40d06ae96f0e6cd7d4542ec89",
"assets/assets/technology.png": "98e5d32b89e266c6d8aa57ff1f8d0e83",
"assets/assets/thunderyoutbreakspossible.png": "b2a615a7867288a6803f049784fd188b",
"assets/assets/windspeed.png": "705a4d508ccc7069f2cc432584c4f7ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3fdde7e009e0c83692d82359954d5bb0",
"assets/NOTICES": "d44a742b76db446be8d227457e19e939",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0c47c95c2d51f3961a2266d9e1f4c1da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15cbb6e4dd7c761c3b081cb77710b09e",
"/": "15cbb6e4dd7c761c3b081cb77710b09e",
"main.dart.js": "323dc4251114ca1779402e4ec4a5e5df",
"manifest.json": "c562c88aaa88e9b5c62c409fb452cd77",
"version.json": "077e41786cf7d03e09494baccb947559"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
