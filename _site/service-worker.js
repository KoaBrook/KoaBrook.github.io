/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1dfccc4a77bef835ec14e42edac0f5ba"
  },
  {
    "url": "img/192.png",
    "revision": "5165034a188fa32440b2844c61f7a7d3"
  },
  {
    "url": "img/512.png",
    "revision": "341bc51357d41f3f4e7bb3f301ca94cb"
  },
  {
    "url": "img/90s.png",
    "revision": "ecab39f69f1ac5521ea8690a4abe78b5"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "513df11f3daed866d316dd807303a733"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "a94dfba002ab8679fff96a63c5508f91"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "f2da0bb4bd340e0022a0564e9cc8c0b6"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "b9946bd0bffdd6220b24c74f64af2bb8"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "8358415aad07d9fcc9169d0898d81be5"
  },
  {
    "url": "img/favicon.ico",
    "revision": "e90434a53a5cf90c5d34c934347980be"
  },
  {
    "url": "index.html",
    "revision": "546dc6c4b6f49e928d081ff13f2e4359"
  },
  {
    "url": "manifest.json",
    "revision": "c987a64ba6bc06f112736fc222f97b26"
  },
  {
    "url": "posts/elevasion/index.html",
    "revision": "2ca01768da786ab5c936dfcac98e391f"
  },
  {
    "url": "posts/future-of-web-text-centric/index.html",
    "revision": "3851a5f9ba702ab32c5dcaf76ae37ae3"
  },
  {
    "url": "posts/index.html",
    "revision": "903879082b3f3359645342871e0f5447"
  },
  {
    "url": "posts/just-breathe/index.html",
    "revision": "01be4706343a2713a189da408997286e"
  },
  {
    "url": "posts/mvp-to-v1/index.html",
    "revision": "565e5e1b4fe387a98bdae573dcee61c0"
  },
  {
    "url": "posts/quick-tips-kai-os/index.html",
    "revision": "922d6c4a632775bc9b59f7004a8ca273"
  },
  {
    "url": "posts/taking-salary-bitcoin/index.html",
    "revision": "100ac99c199c54dc97f49efcd3e21c3f"
  },
  {
    "url": "posts/test/index.html",
    "revision": "97e0fcdb09e10585a0853b6f6193f157"
  },
  {
    "url": "posts/three-inspirational-websites/index.html",
    "revision": "03d857ff6fbc86a59798c9da3f2d16c2"
  },
  {
    "url": "projects/Airtable-Portfolio/index.html",
    "revision": "dceb1d707c554f0c1a46421344d18130"
  },
  {
    "url": "projects/Future-Rally/index.html",
    "revision": "74ca6e76e375149a5dd6a0073d756fa7"
  },
  {
    "url": "projects/index.html",
    "revision": "0ebcd9cbd38b1dfa1e08785d20e04d23"
  },
  {
    "url": "projects/Noverantale.com/index.html",
    "revision": "715ee079348e4dcfabcba21eb6aff3b0"
  },
  {
    "url": "projects/Sagasu/index.html",
    "revision": "bac7ae9048ddbda3cca6df165ba7f098"
  },
  {
    "url": "projects/Smashesque/index.html",
    "revision": "6bc9c0f15041a068230a887a76682d49"
  },
  {
    "url": "tags/Airtable/index.html",
    "revision": "5d1eaada8cbd1e12f3564518574f56f5"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "4e02df9e430a7d870fa637d391e19644"
  },
  {
    "url": "tags/boodle/index.html",
    "revision": "aa4c37dffa486456e1174775cc545c6e"
  },
  {
    "url": "tags/careers/index.html",
    "revision": "130d0ef3f0d8cdd25c21e2863641db6f"
  },
  {
    "url": "tags/crypto/index.html",
    "revision": "d56469eb779b12a121b0899dfaab1455"
  },
  {
    "url": "tags/design/index.html",
    "revision": "b36138c6688126c85c226e314f406898"
  },
  {
    "url": "tags/doodle/index.html",
    "revision": "a8648df59c1edbe09b65384031065299"
  },
  {
    "url": "tags/floodle/index.html",
    "revision": "5f0043827d66852d07b8a778b0c7f3d7"
  },
  {
    "url": "tags/game maker/index.html",
    "revision": "02075c7dca5319cf1ebcc7a874cf1ff4"
  },
  {
    "url": "tags/gamedev/index.html",
    "revision": "ee9b07172d776fa8105a800e154055d7"
  },
  {
    "url": "tags/hroodle/index.html",
    "revision": "7c07cd0bb6a3a18d489f81f7e198a447"
  },
  {
    "url": "tags/index.html",
    "revision": "8f02f787d7990e0d55274f0fa4dea97d"
  },
  {
    "url": "tags/KaiOS/index.html",
    "revision": "659e1764f44060b9971f53c1c9de0258"
  },
  {
    "url": "tags/koodle/index.html",
    "revision": "4310e2e3f8bc7bbcdb4bc714c75be4a1"
  },
  {
    "url": "tags/Lucid Dreaming/index.html",
    "revision": "8aef60428686840e70f155c4c009ccbb"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "761b4b7ad7e10fef15a06d6e53807b65"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "2e3d95b8fa1d4ea40e8edf96bf620950"
  },
  {
    "url": "tags/noodle/index.html",
    "revision": "01b33343ec007f87d1f0a13bf1d9bcd0"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "d3f6faabc4b89cad6d852f1f56bc8d9a"
  },
  {
    "url": "tags/react/index.html",
    "revision": "16a11c10a9cfd6ad28ac0f177e6b91f5"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "05ccce57b410301fe487adcc0a2a557e"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "992855a5109b19da56b18cd4442b400d"
  },
  {
    "url": "tags/test/index.html",
    "revision": "3e1728af68a1382a36db108e00d6ef01"
  },
  {
    "url": "tags/webapp/index.html",
    "revision": "c7a92a889c5002f48838a18bade833ec"
  },
  {
    "url": "tags/webdev/index.html",
    "revision": "19e45b72c4c02c8fca962ef5f91e598c"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "3a39d454d2fb0bd9d0508b886b17f8cb"
  },
  {
    "url": "writing/index.html",
    "revision": "b3605e64e0dc86433f085e41f6b90195"
  },
  {
    "url": "writing/lucid-dreaming-life-hacks/index.html",
    "revision": "1330384fc1f96e7d3831e67fc797fc36"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
