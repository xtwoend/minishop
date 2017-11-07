importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.8b45ff3bdec1f22deda4.js",
    "revision": "a2d481fc5796f14f15009edbf9472f1d"
  },
  {
    "url": "/_nuxt/common.d878a5232c297232f86b.js",
    "revision": "5b9627ae700e62db23f9942b9c6700f0"
  },
  {
    "url": "/_nuxt/layouts/default.9230bc58595ccbf2633d.js",
    "revision": "98d3e5bf46412c8584c94d210dcc58cd"
  },
  {
    "url": "/_nuxt/layouts/mobile.9a39e5faf9e2d18e5572.js",
    "revision": "900a39cc8234854c6bc6ad115cbdf6ff"
  },
  {
    "url": "/_nuxt/layouts/page.a04fac41d95ef25cc922.js",
    "revision": "afd8ca7aaa98f4fb8d01ef4f5d627e4d"
  },
  {
    "url": "/_nuxt/layouts/search.add078b7755c65b51121.js",
    "revision": "ab0246cce535be8aa1b6a432bce45884"
  },
  {
    "url": "/_nuxt/manifest.4dad2a5af1b11f4a0f78.js",
    "revision": "82d16937bcf5d0c67130b47006a2cac9"
  },
  {
    "url": "/_nuxt/pages/auth/login.dea526d3285a30545295.js",
    "revision": "091d5b065f339ef7f401001478346777"
  },
  {
    "url": "/_nuxt/pages/auth/register.ffdcc7f5269eb387d9aa.js",
    "revision": "0b012f7a847fa6fa8d79c7d96680771b"
  },
  {
    "url": "/_nuxt/pages/cart.de3349a33d7609b539ff.js",
    "revision": "ec51e2ae2dcf16d16834d66a99f4e620"
  },
  {
    "url": "/_nuxt/pages/chat.a7812b13a43b5a470e8c.js",
    "revision": "68ede3eb3db7a26725b632a283c68b24"
  },
  {
    "url": "/_nuxt/pages/index.52b3a82c487e6a5715ba.js",
    "revision": "c549ee6dff074397c2a4a4ad1d98faca"
  },
  {
    "url": "/_nuxt/pages/menu.260385ff31f69d7fea78.js",
    "revision": "909b168479c65789519b6d05fe799f30"
  },
  {
    "url": "/_nuxt/pages/notification.01d9b2d2d3fdd42ed8f2.js",
    "revision": "24109e1371b4c66d0f6690b20d8c1831"
  },
  {
    "url": "/_nuxt/pages/products/_slug.4c43768e7a97222e9380.js",
    "revision": "5784332b77864c9bded9347737ffdec9"
  },
  {
    "url": "/_nuxt/pages/products/favourite/index.1725269161d5ad161c15.js",
    "revision": "96cfc032783384e07688b8dbf2610b26"
  },
  {
    "url": "/_nuxt/pages/products/search/_keyword.921e05ccc9ca911edfc4.js",
    "revision": "ce90519b5146ecb8452af75e76574053"
  },
  {
    "url": "/_nuxt/pages/products/search/index.12af1686f7cd99db7030.js",
    "revision": "ae7736b7e623d259423831d916b461fc"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "minishop_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
