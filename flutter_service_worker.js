'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "9b9625dd1bb3e8b83c10334d6c2da89f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d877fdaf261394abd261c18d4733f0e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45d3490897867d933be58b4ee7ba96fa",
".git/logs/refs/heads/main": "b64fe320e909cbeb5fbecad849b46384",
".git/logs/refs/remotes/origin/main": "d0296bf1cb6b5165ff2dcb4a9ef880db",
".git/objects/01/1ef673fe419b32a338a342c030b2adcaeb7eec": "9fc035b3355deaa1f0e792e1954966fa",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/15/e4e97fd975efe7ec64cc6addb92c3683d3fd40": "b50b810200624ac36d1ba8b0f02f1081",
".git/objects/16/a65fc0697d71339bb168b15f58edbaee01dd79": "23d326428102056eae3b635137ec300c",
".git/objects/1b/3fe853ea5dfb1b14910b5bfef68ef10ece3977": "b4b413389e95d73b3e0d4dc7140c7941",
".git/objects/1c/6bff3368521ee9a015413e079a611663220780": "985663ef07ac9611e38008a0b8767dcb",
".git/objects/22/d8560134dbadb7d40abee0fb16da50c2fa5da0": "4055a58a8ebab1bef9ae4fe942fab422",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/7a604dcef81c33e180235e9c042e0d23844563": "698a9ae836399918140f7900cef245a9",
".git/objects/37/de67adfb8067ce27db050c65c4474307bb965f": "807e328f6b309e0ed1aaf2298de4f957",
".git/objects/3a/66d90a35168d0cf654126264bd2fb4bf4c211a": "033c0de878a838f9f1b126f6fd1f7af4",
".git/objects/3f/10e3d7647c0bbf0c2ef14e94324b687380708a": "126f35f2dfe2e865a5af0eda5031f1d1",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/d82a102e5b87cd6751ba32bc32b0ad3bcaa683": "bec45a557aee95739ba6c408a3cd1050",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/92dc7520643f0eba8425999e5707cd24321a92": "e87f5dd8ec34cf2898eb500a0b638aae",
".git/objects/53/732b413da761404ea5b53ce0c8b69723ae132d": "271d94c948ac1f3c35d0ecfa3008b151",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/cb0cf1275a851de11360ff30eaf1760bdcaa03": "d6eb68d38ffbd9f15815b81aaf7782cd",
".git/objects/68/808994508f285b93054e53b36387b554f81102": "c778b098cabf06ecd016f10f10431247",
".git/objects/6b/1454c2586ba55c3bfbd5291e8ebb7bc82e43a7": "a4b69b28d8fbc1fb0363a0499a6ff679",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/b8e050f09100edb9f603249c2b1a3239dbf4f6": "8e1a1dfb7aa3807c13cbe04cee08ad45",
".git/objects/74/4ec3d2f8c0b139d7744cad0ab6198d3ca397b9": "ad33158397d5920a4a446ee355b9a2fd",
".git/objects/7f/ef3bbacee206408043ca01748730358ce45db1": "a29121a04af35681c352d74b09374942",
".git/objects/85/1200274d3c9daadb5733c1f1b53348efc85883": "c6d337bbed289142bb3d93fe07e133fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2a73bc0564710d60abca2a2686866994591595": "22a15d2d0730b68a67464a1421df8bd1",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/7a0f46ad37057f17f226c122eece5e8fbafb64": "51bdbd8ea032aa45900f85f03b283aff",
".git/objects/98/367548c7cf598ead540f36fd797788d1f0b48f": "28f095f98268fdf9c4762877510e8b84",
".git/objects/99/a01a2b7fbf5528716cdbffb3195634b8cdd4a6": "3b991161a910d1e985bad81e2d20ccb6",
".git/objects/a1/34eec65eee6de2960fc65da89ea1d5600cf6ea": "92c49c359f7ebd0f1a8d8e5f8bd9ac7d",
".git/objects/a3/fe184e242371ce4d87b7222488f2aae333920a": "bef4f427ec6244ac5674fd85e2ec916c",
".git/objects/a5/a5819481dc04ca9a2a9d5469f9fcf37402bee0": "f839dd3deba34688cdce71dc55fa0022",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/ee19a1d851f3fee1fb6c17642c2207422fc48d": "a8307e11f5ebee7fe71b847da8b0b9c5",
".git/objects/b6/a76059166004c4d4629933ac21aed443d55b5d": "89ad7d932b800cca8727dbc30f266e5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/9171848c6cae839d06d60f9e6c3284368e9eed": "e6bbf7df59753ca5aa5d8d15faff37cc",
".git/objects/be/ba2a50de367bb4445885dbcdce95104770c2cc": "325114c250bcc86054b0804ae59ad275",
".git/objects/be/be3e9503b65815fd008249112f0098f27ea028": "dccc7b3687c9b4cf6bd39d0859350696",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e5/2e27172510a9e6d80ceed6e84805609f9f4408": "c6f063baac52167ac75b535df159cdd1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3178df471223501cd9c62a138dc3ad6a13cd6a": "e5d8aaddcf12385ed345c72e3398d8b8",
".git/objects/f3/098d7ad87486fe37222ef89f63784f746556fa": "bc31df097a749c1cca6de4363d026fe1",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "67611bea892c38a877a5a64421e857e9",
".git/refs/remotes/origin/main": "67611bea892c38a877a5a64421e857e9",
"assets/AssetManifest.bin": "c2c7402b0cd2868f05145f62a45f3968",
"assets/AssetManifest.bin.json": "071d1dab7103bb187a5781ec21ff664f",
"assets/AssetManifest.json": "a74cf401c69207d136965da145822b5b",
"assets/assets/images/app_icon.png": "8a6bc6688223d2a34efeea83f909498d",
"assets/assets/images/opt1.jpeg": "7c1f8d3e3b1357f94f41d952a9030d18",
"assets/assets/images/opt11.jpeg": "3197a4ed15e19e7fe8fdc99e936bb2ae",
"assets/assets/images/opt12.jpeg": "16ba10741353f0f31a9a719e97241f4a",
"assets/assets/images/opt13.jpeg": "86d17073d17f7b983008237221e246fd",
"assets/assets/images/opt2.jpeg": "ce9eb1535c520ccd351be8a12132b36c",
"assets/assets/images/opt3.jpeg": "94b7e5b960d120feba9d4647f6cf81ac",
"assets/assets/images/opt4.jpeg": "b9c1e923779be1569bd57f04f671d83a",
"assets/assets/images/opt5.jpeg": "d8e0cacc2e5afe5509a9a5226954ce4a",
"assets/assets/images/opt6.jpeg": "fb16b0d5d78d5b3ee216fc04aedd7753",
"assets/assets/images/opt7.jpeg": "d9be73d9d9e7f4bfcefec7c6fade23ba",
"assets/assets/images/opt8.jpeg": "7def9db1a8a3112e369f6e81dc3e943d",
"assets/assets/images/opt9.jpeg": "37a27a3cd160b625e042803980983fdf",
"assets/assets/images/tin1.jpg": "edab3bc854bdb2524cee5ce206b7a461",
"assets/assets/images/tin12.jpg": "9803b3cdcea9384bc8eb0be3efa3d306",
"assets/assets/images/tin4.jpg": "d5f023df3b797c6852fca3de7060710d",
"assets/assets/images/tin8.jpg": "56631445cb535de185b4d0ba812354a9",
"assets/assets/images/tin9.jpg": "f44d4b6bcf641ec6c1c0d2a690d2f521",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1e403744768027fbee2f5ba471432316",
"assets/NOTICES": "9666a405c49a1371072cc0d6184bd853",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bfa1bff5943c1eb87e807fb9383a6a32",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c42dea085d89832b4744fc50bae41eff",
"/": "c42dea085d89832b4744fc50bae41eff",
"main.dart.js": "2d0a5073cb9475c1c4a5b271e11f9177",
"manifest.json": "8f56834fde53150ae6914e4ccdc18687",
"version.json": "72d4067d19a0224d96d06e4d52f6c3e4"};
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
