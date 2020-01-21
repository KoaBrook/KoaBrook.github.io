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
    "revision": "e9154739bdf80979891dba7da7717437"
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
    "revision": "b7b078bb5e476f04a61e2ae889ef3a6a"
  },
  {
    "url": "manifest.json",
    "revision": "c987a64ba6bc06f112736fc222f97b26"
  },
  {
    "url": "posts/elevasion/index.html",
    "revision": "1fea57227c653fb306f72908324f1bf7"
  },
  {
    "url": "posts/future-of-web-text-centric/index.html",
    "revision": "c522cc798ee8c8b82aabdfd65c03ec7c"
  },
  {
    "url": "posts/index.html",
    "revision": "52fca6b2edb536bb1d424099181d07b6"
  },
  {
    "url": "posts/just-breathe/index.html",
    "revision": "01be4706343a2713a189da408997286e"
  },
  {
    "url": "posts/mvp-to-v1/index.html",
    "revision": "c48933b7bf7654b2a00e675a7d817d5a"
  },
  {
    "url": "posts/quick-tips-kai-os/index.html",
    "revision": "ad65d97c936a66da74ee649c7d997ff0"
  },
  {
    "url": "posts/taking-salary-bitcoin/index.html",
    "revision": "88ff5120422e43ffa26873537608c00b"
  },
  {
    "url": "posts/test/index.html",
    "revision": "18b4dedd5402f16da2d8ecc18b5eeb4e"
  },
  {
    "url": "posts/three-inspirational-websites/index.html",
    "revision": "f0ac7d005bc741c83966713ef8e5c037"
  },
  {
    "url": "projects/Airtable-Portfolio/index.html",
    "revision": "027e4a73efcf50934f1b765e2283aaa4"
  },
  {
    "url": "projects/Future-Rally/index.html",
    "revision": "006fba9fc707fad3be4a34a66bf6c405"
  },
  {
    "url": "projects/index.html",
    "revision": "5dde74dd720c49537f35008aec43870f"
  },
  {
    "url": "projects/Noverantale.com/index.html",
    "revision": "cf060dd2be950ee09cf5673e3bada353"
  },
  {
    "url": "projects/Sagasu/index.html",
    "revision": "23ce95416aaeb8300418ed2ba139a1db"
  },
  {
    "url": "projects/Smashesque/index.html",
    "revision": "026d7917b5963e80fd8ead4b4046820f"
  },
  {
    "url": "tags/Airtable/index.html",
    "revision": "6dd49a140c717f44a01ea488c0b16223"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "336f6783661dd39f8e023e5abcf12f3a"
  },
  {
    "url": "tags/boodle/index.html",
    "revision": "f00b45add7b86608fbabe054c8a6ea4f"
  },
  {
    "url": "tags/careers/index.html",
    "revision": "921728d4a8c14cc95f1f0230824bd144"
  },
  {
    "url": "tags/crypto/index.html",
    "revision": "a8f2f92509e0d8f5d451b4f20f59c52e"
  },
  {
    "url": "tags/design/index.html",
    "revision": "5363a934fd0a8d59213d533f2024b1b7"
  },
  {
    "url": "tags/doodle/index.html",
    "revision": "93bb81dfa8f77624718d2c0b7f30d0be"
  },
  {
    "url": "tags/floodle/index.html",
    "revision": "b70271faaacf059b8b2d0163581ea6f4"
  },
  {
    "url": "tags/game maker/index.html",
    "revision": "1fd3138ef45834b09454e9fb2de37cca"
  },
  {
    "url": "tags/gamedev/index.html",
    "revision": "0a7f2d4e64f2b43ef04a3f1e3a492e29"
  },
  {
    "url": "tags/hroodle/index.html",
    "revision": "5d5a430a44eb81cdf88702634a5695d8"
  },
  {
    "url": "tags/index.html",
    "revision": "7f8761451766fc2fc88ba20cde5ea1cf"
  },
  {
    "url": "tags/KaiOS/index.html",
    "revision": "dbd433b7e27d7f43dc616514e3ab5dd3"
  },
  {
    "url": "tags/koodle/index.html",
    "revision": "4ac8cd2561f06ffffcfa17bda845560a"
  },
  {
    "url": "tags/Lucid Dreaming/index.html",
    "revision": "a38db6d79cf27a4b63f5ff4ed9e2d35c"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "fdfb3d7f9393e238bc0e11164045b960"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "7d2345ed0366ab2de674dcc8c5c3a9de"
  },
  {
    "url": "tags/noodle/index.html",
    "revision": "5659ea4a06dfc10f65dcbf73c6874251"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "38f485928f6964aa3359dd632bce6f5f"
  },
  {
    "url": "tags/react/index.html",
    "revision": "c61c6fe39be4a2f091ce00bda88cc943"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "c38dcf2852cf5394be4d8080e03086fa"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "1e3d036cb203b8647f8974047ba710bb"
  },
  {
    "url": "tags/test/index.html",
    "revision": "f66016a1d1b3bd7cc3636e731de8f832"
  },
  {
    "url": "tags/webapp/index.html",
    "revision": "8ae236c02bb6663e0e24801395b030db"
  },
  {
    "url": "tags/webdev/index.html",
    "revision": "7f6e4b57fa5809bb47afd42c742008d8"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "c407b4e08cc18b7b974d9acfbf373310"
  },
  {
    "url": "writing/index.html",
    "revision": "31dcce9e03f4b092b5a60200f2351f19"
  },
  {
    "url": "writing/lucid-dreaming-life-hacks/index.html",
    "revision": "8269019f8a0a015a3895252e08e9ebbd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
