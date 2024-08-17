'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6ec47c7cb0c857a37cab784c9c42af54",
"version.json": "ff5ee6fc93c592519a7015493c283d2f",
"index.html": "b4354b5a7935aa4c51f196df29ac73b7",
"/": "b4354b5a7935aa4c51f196df29ac73b7",
"main.dart.js": "66a5678e8bd964228767eeb03bfadd6e",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "56c263b15a1a5b850d54ad877e47da80",
".git/ORIG_HEAD": "59ea8b91492821b93a3a42fda5ca175b",
".git/config": "d2f23c91f33316617a2df50e5ede392d",
".git/objects/95/7bd0f2045c6f7dde7307e2cf4c050c409beb8a": "0477c2c6a6547bd27711f027b87c8ce0",
".git/objects/68/202bfc40526511125f23f35436a14ad6cbdc57": "1c1a7131cd2174bca97693a07ff4d39b",
".git/objects/57/ecf2580d79a99794216aad800de1bcb2c06b6c": "bd9d64be6847e0caa7d587c077f1ed4b",
".git/objects/3b/d6bcfea937b573427cf763a3a48e4bf1a43cc9": "b546cca4dad5e7f8687438231b14c443",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/6ab083c7f17573358d5f64e8c6e5593430fcad": "5b02cb4831032b847fe9cbf31d8091da",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/3c513f8f1b73f01b21efd76ac7cf1cd7fdc2ab": "0e824578343464f3193163643df3807e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/0b/2320e85b8b2a758b09d576870ab1a50e84b23d": "570cca342a1ef1b68e3c27d00b2ff280",
".git/objects/94/66345bebe92a0c112e8bbda9be1b54d65dfc73": "6871b421dd16c7b61a0e847fdda07635",
".git/objects/0e/c4f48370fcd1102c995915d7893b0427d5a8be": "918c6d8e2139bf73c1a217c3a7da252c",
".git/objects/5a/16ddd0d164856ddb5d4cf75307b7e999bc6179": "d6fc64d84fff802deee5d5c5149c487b",
".git/objects/5f/05d2d2367055bfaf2edcf46dd4d3e90bc4940b": "cd23206829dc436267b34e78a614fd99",
".git/objects/a3/4baabc7cec7e2c457713262d3392b062f35aec": "e4bfaab2ee4428c97449af1026a4d895",
".git/objects/b3/bbac4483e1a117a209d63447c57d3dafcb9851": "f98a55b157da3d0d0eb49f1cb5c9f3c6",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/bdf97bf5d728cea72ea9489cb59a2c85fae927": "7e9100db67d4f717df01c782a2bc09fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f247bdcf63b8730ba0793259694e603650914a": "aef431d5b65066bee6e72cbb0cabc35e",
".git/objects/f2/e9d4da11d545f184cb61af0a3bf9c60a5b9bd8": "a2573f85d57a2c3f1057ba2a490f6b4f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/3b1b8aa1f433faf161aaaff8611629c4a06f57": "88249e364986b542521ab69a3d6ed98c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/4e/3b031b891824d3809c995c021fecd9e168c223": "cc3372ddaeb436ccd8e835a01ee1c4c3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/84af63ba258eeda38096dfd5eef315ea339e8d": "736d78c82bc0c8cb01f131024072a4ee",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/c0b3046c75f854587c32083803e9ca0364f847": "9f6d37f349c82e95a4de04185d821e5e",
".git/objects/26/4c1e609c98d52b60e87b235fc998d27a709503": "d844d17d407174cf6a6386d9f8667acb",
".git/objects/4d/48c030ca969cbc14e567a17e1811eaeaa2f788": "d2a8df3a8cbad5fce750ff439cbf0003",
".git/objects/44/813d07ac99deb5c38fe7a7203cb7f63cca18ba": "c8e31209fc651f071bff1d030e75addc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/47ff3c8f02544472372166bc589c4b93f5ccc5": "d9b98b037ea94a22bcd0658e979b3ec0",
".git/objects/09/8af058b4d57cf7f4e2835144ac05f948153ddc": "be1157b3ed1977e2b1d828330d854abe",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/c0c6fa2bdb4c25f0826f0e403dbbbb2c18d7bb": "9f60891f331a1a053d0c0d65d6fdc499",
".git/objects/65/e1cd03be70a0cb46b37e3e63d4601b674d4bbb": "381f08bdc711b32213e5d87f4234de6d",
".git/objects/3a/c1c3be6fca52661f1d4229e94b9628d637b416": "04f4ae9a4d3770a1ac775f78972ea538",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/01/902e11789641222f4b833df9e78dbf844c3ec3": "6310c6b83e1111f4770114d36f9eda74",
".git/objects/01/cbfc72c50d18dcb7a8fd28c77d1186ac3432cf": "deab9ecd1006f035bc46bf485b4d798b",
".git/objects/6c/8e5cdac2c6de740d678e58408af74dc9082780": "cc2e3187b87018e411907594d7685618",
".git/objects/55/9b0993e1685aa614bb259e31d589fbbefda525": "fdb1aea4ff0af547ee0baf7e448249bc",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/8b589749d4c5acb571807753b2e08b58968fc7": "7cc52f6415a141354630c8b877968f52",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/b37d783dcfb04f96cc506303f164bfdfc9fab5": "a092f755af17c4a8c9adb82ac61f9dd4",
".git/objects/dd/e84412f6049a96287153d5d4a1102b740d571d": "c9c608e1d84f74be2a91735fb8ae3b7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f1/6b09fb990596f7fc8788185a4e05bcb0798b6e": "fd41487838176791b466e99e170c235d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/d6c9e87aad63973e39e06d73e0ebf5b90d1db7": "968789c342c5663ceb879662a3955cad",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/d901fecc1ccdad1280e6e792290d444d043ac7": "461addc671d55583eebee35003b10773",
".git/objects/8d/05447ab10d1e70ad2a1dde5632c2526556b9b9": "cf3ea73fc49b61eb3f7bab554e4357ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/732522e30cee9e91bb91450051f4fcfcc9e746": "be7d96d33b758df6c54ee7815bdbcd11",
".git/objects/49/96c342ea02a6ac75c7032e80e7fe07b6b40117": "568e2d18e1b379e93a67c59b2a18da05",
".git/objects/7a/4600b1da8e7a2fd7a1c8a6ab47a8c4ac165835": "af7ac220ce020875ae451fda01dc0675",
".git/objects/22/2ac37aab3b1fbe387c5f9e5e0ca6afbe23156f": "0a8ab3f8323af7027ca6d337aa896141",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1b8e872ac6b20eddb86fe2e06d91da4",
".git/logs/refs/heads/main": "aea3d79baa38472152c81ed4df73f0c4",
".git/logs/refs/remotes/origin/main": "40206b4036ee8c900476a78f6d1fddf2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6873f5a33f4b5b6413b8cce438024673",
".git/refs/remotes/origin/main": "6873f5a33f4b5b6413b8cce438024673",
".git/index": "9bc5b386d8ee864ab77986bf943e56b5",
".git/COMMIT_EDITMSG": "ce14f5b916bcf01a0cf3e8cb20d66c3f",
".git/FETCH_HEAD": "1ffa343601a15f85bc0c331aba43ae42",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "03c113d3341b7320af8f80d0f603a380",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "b39aaf4a32e30246eb1610e2f0da1ae3",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
