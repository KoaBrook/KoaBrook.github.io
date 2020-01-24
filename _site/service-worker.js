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
    "revision": "279dad33027deb00d54a77bede963dc3"
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
    "revision": "9515772f8345df7d046cebcdf45ab7c4"
  },
  {
    "url": "manifest.json",
    "revision": "c987a64ba6bc06f112736fc222f97b26"
  },
  {
    "url": "posts/elevasion/index.html",
    "revision": "ee782d779b65e7b6a38aca11004832ce"
  },
  {
    "url": "posts/future-of-web-text-centric/index.html",
    "revision": "7f3074dca4a474b76824df1a8d6e49f8"
  },
  {
    "url": "posts/index.html",
    "revision": "dd27fe0d82173037036962293feaa124"
  },
  {
    "url": "posts/just-breathe/index.html",
    "revision": "01be4706343a2713a189da408997286e"
  },
  {
    "url": "posts/mvp-to-v1/index.html",
    "revision": "a7e74fd092ed2e9d5a81b06e5462089d"
  },
  {
    "url": "posts/quick-tips-kai-os/index.html",
    "revision": "e175555437ae81e1d0b8124346c5efe3"
  },
  {
    "url": "posts/taking-salary-bitcoin/index.html",
    "revision": "5f8612f419bcc825ed5056470a1e6e88"
  },
  {
    "url": "posts/test/index.html",
    "revision": "deb00853fc88e5de2206707f3d3a617c"
  },
  {
    "url": "posts/three-inspirational-websites/index.html",
    "revision": "58f564c5b89e5905fcdf9980c60790ea"
  },
  {
    "url": "projects/Airtable-Portfolio/index.html",
    "revision": "3faa9b75c76702719c279ca3121065d5"
  },
  {
    "url": "projects/Future-Rally/index.html",
    "revision": "b6a656e45ae3def1cbef0b04477ce070"
  },
  {
    "url": "projects/index.html",
    "revision": "8e6b3704e4bdec28a20add42d94a7964"
  },
  {
    "url": "projects/Noverantale.com/index.html",
    "revision": "0fb82fc5c2f055d788d473b295b5f463"
  },
  {
    "url": "projects/Sagasu/index.html",
    "revision": "ab4970f35fbafdc958e1ea8140d1032d"
  },
  {
    "url": "projects/Smashesque/index.html",
    "revision": "a2b68f3e2084fe660b39f8c681f8d1d6"
  },
  {
    "url": "tags/Airtable/index.html",
    "revision": "8d3d2726f73806f644c14ce215a1c227"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "ccd59d17908c40455a042a8767fe3df6"
  },
  {
    "url": "tags/boodle/index.html",
    "revision": "5abeffcc066325c96bb56d0723d1d073"
  },
  {
    "url": "tags/careers/index.html",
    "revision": "66246ea90e5e01659bda185f13b0fb39"
  },
  {
    "url": "tags/crypto/index.html",
    "revision": "1bc67dfe835c6172a814b92baaa325ca"
  },
  {
    "url": "tags/design/index.html",
    "revision": "352c463b91a28782feab4ed3561a4bd7"
  },
  {
    "url": "tags/doodle/index.html",
    "revision": "93c0d910a6adff60c3860d8465c02df7"
  },
  {
    "url": "tags/floodle/index.html",
    "revision": "784f258d3cdc76d8f74c68610ee5bbdb"
  },
  {
    "url": "tags/game maker/index.html",
    "revision": "a0c17931216cf61f916bf9e76f6886ec"
  },
  {
    "url": "tags/gamedev/index.html",
    "revision": "0be2a05c86681512f78d2071c56a7372"
  },
  {
    "url": "tags/hroodle/index.html",
    "revision": "c9e16b81c5fa184c99747aac31c0bc5f"
  },
  {
    "url": "tags/index.html",
    "revision": "a9373528c875a48a748c571f2d15e5a7"
  },
  {
    "url": "tags/KaiOS/index.html",
    "revision": "19973a6c4021a46f925deae26bcd45fe"
  },
  {
    "url": "tags/koodle/index.html",
    "revision": "96a7ba9b6b51fcaa2558c128a848aace"
  },
  {
    "url": "tags/Lucid Dreaming/index.html",
    "revision": "57a1903711a885a180984aef7067f485"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "5a17a6ed7232056914d0d9cd4a422ebe"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "9467a3e613ce4f0ea46fdf456fc436d9"
  },
  {
    "url": "tags/noodle/index.html",
    "revision": "403b76b4c2b8cc3ee3a208dd32f0fff9"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "00ec7503b65e59b9611823d633a8ee82"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d8ce18e1a481e225f0fe920db0b894ff"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "db9f1db98370e5cf479d008774b5ee26"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "efab06284b5114735efb406cbc935a10"
  },
  {
    "url": "tags/test/index.html",
    "revision": "b4972b1bd88245c81d6249e9ca552587"
  },
  {
    "url": "tags/webapp/index.html",
    "revision": "c9f0f842e954e10c34bd739946f3492f"
  },
  {
    "url": "tags/webdev/index.html",
    "revision": "5d98db5d268f692a8dea3459c2deac49"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "e5638563c5d0ed1a57b36a9a50bc35f8"
  },
  {
    "url": "writing/index.html",
    "revision": "266edbda73d2777e202b89c3a3c0b50f"
  },
  {
    "url": "writing/lucid-dreaming-life-hacks/index.html",
    "revision": "070d261ddd5c741ecc70a773b1080a9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
