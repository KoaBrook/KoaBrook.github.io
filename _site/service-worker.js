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
    "revision": "01145422c1343cdcd472b23e31e8eec0"
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
    "revision": "844e775dd21d32754700295ebfd40c76"
  },
  {
    "url": "manifest.json",
    "revision": "c987a64ba6bc06f112736fc222f97b26"
  },
  {
    "url": "posts/elevasion/index.html",
    "revision": "ec18686b985708ea02eba685552cb9f1"
  },
  {
    "url": "posts/future-of-web-text-centric/index.html",
    "revision": "31bf16072cc44871ad9ff79ce3ab38d7"
  },
  {
    "url": "posts/index.html",
    "revision": "627b21bc82678678678a040b1054416e"
  },
  {
    "url": "posts/just-breathe/index.html",
    "revision": "01be4706343a2713a189da408997286e"
  },
  {
    "url": "posts/mvp-to-v1/index.html",
    "revision": "3d83639e6da3036ee78f99a9c97f2273"
  },
  {
    "url": "posts/quick-tips-kai-os/index.html",
    "revision": "b51383b8ce67517bf15e66759da34530"
  },
  {
    "url": "posts/taking-salary-bitcoin/index.html",
    "revision": "1ef60ae89ab697df2403ea74dd4359ac"
  },
  {
    "url": "posts/test/index.html",
    "revision": "265b66be9ffceb7ba1b00f252dfdbdf7"
  },
  {
    "url": "posts/three-inspirational-websites/index.html",
    "revision": "fb6adafcb5404c89594b0ed7e643c73d"
  },
  {
    "url": "projects/Airtable-Portfolio/index.html",
    "revision": "88b9f236189686678b3523957cbacb04"
  },
  {
    "url": "projects/Future-Rally/index.html",
    "revision": "a24271cf61b006ffe0af9684ea1cb87f"
  },
  {
    "url": "projects/index.html",
    "revision": "93d8aeaced2390e29d06d1b621232845"
  },
  {
    "url": "projects/Noverantale.com/index.html",
    "revision": "a2b3fe6e026fd34a383836436b91b791"
  },
  {
    "url": "projects/Sagasu/index.html",
    "revision": "9c4c0d3181d511196e1e7025e40ea562"
  },
  {
    "url": "projects/Smashesque/index.html",
    "revision": "e3cdbd3e20d1c9aeff01390164bb5a03"
  },
  {
    "url": "tags/Airtable/index.html",
    "revision": "97e4377f3aeafd113cf2017c39904089"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "483c5526e95d258a8e5c8bbaa81262f2"
  },
  {
    "url": "tags/boodle/index.html",
    "revision": "eb7c3729de04f59509ff334466f3b466"
  },
  {
    "url": "tags/careers/index.html",
    "revision": "32b49b685d7b596956e362441798bfce"
  },
  {
    "url": "tags/crypto/index.html",
    "revision": "1a6df7cf3a980ee9f01799192ee9b205"
  },
  {
    "url": "tags/design/index.html",
    "revision": "2ccbb28d1254e3d5a6d7e5316fb69014"
  },
  {
    "url": "tags/doodle/index.html",
    "revision": "5c2c5b7a6a747a2c95dc47d1121ec4fa"
  },
  {
    "url": "tags/floodle/index.html",
    "revision": "09b0ccc6461a92d83a36ce44f97ecae4"
  },
  {
    "url": "tags/game maker/index.html",
    "revision": "7b7682ba04f9f2dfdf9bce29d3f34d5d"
  },
  {
    "url": "tags/gamedev/index.html",
    "revision": "3383619eaa27eaf68621fa6adf523ee6"
  },
  {
    "url": "tags/hroodle/index.html",
    "revision": "fe5cfea053c13cbd0e408bb5fcbfef2f"
  },
  {
    "url": "tags/index.html",
    "revision": "2142ab75abdace7200193c84de8b1b0b"
  },
  {
    "url": "tags/KaiOS/index.html",
    "revision": "8e698927b0d6ef810dbbba244ee20611"
  },
  {
    "url": "tags/koodle/index.html",
    "revision": "f8f2844f821c6b6d5d047e66350ca2de"
  },
  {
    "url": "tags/Lucid Dreaming/index.html",
    "revision": "2669fa2b4c12a0ef60b7213e69e38e5f"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "f1b9d3aec884d48ab2f9281869811eb6"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "64ea7f556c598c0422cc863ede3ae1aa"
  },
  {
    "url": "tags/noodle/index.html",
    "revision": "9f6b148aad09bc7809ce5731b490bdd4"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "b02b814c576fbae9f40f0140e48f5147"
  },
  {
    "url": "tags/react/index.html",
    "revision": "e266a197898fbb189838b997e0534204"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "d05280753b2570f5a9fa43e600414def"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "1cbcd1bd9037c73d8d268f6a0309ab79"
  },
  {
    "url": "tags/test/index.html",
    "revision": "181cac4c0e20536483f13b61b25140a1"
  },
  {
    "url": "tags/webapp/index.html",
    "revision": "bb441127f6890734e5d201cf1e543d9f"
  },
  {
    "url": "tags/webdev/index.html",
    "revision": "253564e0923619329c2fbdeb8a834c53"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "cf287a3ad5731a80ada0d6c81e79fa7b"
  },
  {
    "url": "writing/index.html",
    "revision": "42495feb4f67108e3e089350ff619c79"
  },
  {
    "url": "writing/lucid-dreaming-life-hacks/index.html",
    "revision": "d60140f476485843628ecb72fd366d86"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
