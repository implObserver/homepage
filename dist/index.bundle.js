"use strict";
(self["webpackChunkhomepage"] = self["webpackChunkhomepage"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/css/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/css/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/white.png */ "./src/views/images/white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/WaveLineBackgroundFree.webp */ "./src/views/images/WaveLineBackgroundFree.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/WaveLineBackgroundFree2.webp */ "./src/views/images/WaveLineBackgroundFree2.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: min-content;
    box-sizing: border-box;
}

html {
    font-family: Roboto;
    font-size: min(1.8vw, 1.8vh);
    color: #2f3640;
    line-height: 1.5em;
    padding: min(1vh, 1vw);
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

html::-webkit-scrollbar {
    visibility: hidden;
    width: 0;
}

a {
    outline: none;
    text-decoration: none;
}

h3 {
    margin: 0 0 2em 0.75em;
}

p {
    margin: 0 0 0.75em 1em;
}

ul {
    padding-left: 4em;
}

span {
    padding-left: min(1vh, 1vw);
    padding-right: min(1vh, 1vw);
}

body {}

.section {
    display: grid;
    padding: min(3vh, 7.5vw);
}

header {
    display: grid;
    grid-template-areas:
        'logo navbar';
    align-items: center;
    justify-content: space-between;
    opacity: 0;
}

.logo,
.nav__links {
    display: grid;
    margin: min(3vh, 3vw);
    width: max-content;
}

.logo {
    grid-area: logo;
    font-size: min(6vw, 6vh);
    grid-template-columns: min-content min-content;
}

.logo>span {
    width: min-content;
    padding-left: 0vh;
    padding-right: 0vh;
}

.first__letter {
    position: relative;
    transform-style: preserve-3d;
    animation: letterRotate 10s linear infinite;
}

.nav__links>a {
    color: #2f3640;
}

@keyframes letterRotate {

    0%,
    40% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }

    60%,
    100% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
}

.nav__links {
    grid-area: navbar;
    grid-template-columns: repeat(4, max-content);
    font-size: 1rem;
}

main {
    display: grid;
    grid-template-areas:
        'hero'
        'about'
        'projects'
        'contacts';
}

.hero {
    padding: min(6em) !important;
    display: grid;
    grid-template-areas:
        'firstname'
        'secondname'
        'profession';
    gap: min(10vh, 10vw);
    overflow: hidden;
}

.firstname,
.secondname,
.profession {
    display: grid;
    width: max-content;
    transform: translate(100vw);
    opacity: 0;
    padding-right: min(1vh, 1vw);
}

.firstname,
.secondname {
    font-size: min(6em);
    font-weight: 300;
}

.secondname {
    text-indent: min(11.3vh, 11.3vw);
}

.profession {
    font-size: min(4em);
    text-indent: min(24vh, 24vw);
}

.section__name {
    display: grid;
    width: max-content;
    padding-bottom: 1em;
    font-size: min(4.8vh, 4.8vw);
}

.about {
    display: grid;
    border: min(1vh, 1vw) #2f3640 solid;
    background-color: white;
    opacity: 0;
}

.skills-panel {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    align-items: center;
    justify-self: center;
    margin-top: 2rem;
}

.arrow {
    background-color: white;
}

.arrow:hover {
    fill: aqua;
}

.carousel {
    display: grid;
    position: relative;
    width: min(59vh, 59vw);
    padding: min(4vh, 4vw);
    border-radius: min(1vh, 1vw);
    justify-self: center;
    overflow: hidden;
}

.gallery {
    display: grid;
    position: relative;
    width: 100vw;
    right: min(17.5vh, 17.5vw);
}

.gallery ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, min(15vh, 15vw));
    align-content: center;
    list-style: none;
    width: inherit;
    border: 1px #2f3640 solid;
}

.gallery li {
    display: grid;
    padding: min(2vh, 1vw);
    align-content: center;
    width: min(12vh, 12vw);
    grid-template-rows: min-content min-content;
    justify-content: center;
    justify-items: center;
    gap: min(1vh, 1vw);
    font-size: min(2.5vh, 2.5vw);
}

.projects {
    display: grid;
    row-gap: 3em;
    align-content: center;
    opacity: 0;
}

.project {
    display: grid;
    padding: min(3vh, 3vw);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

.preview {
    display: grid;
    width: min-content;
    border: min(0.5vw, 0.5vw) #2f3640 solid;
}

img {
    display: grid;
}

.description {
    display: grid;
    grid-template-areas:
        'title'
        'panel';
    padding: min(1vw, 1vh);
    justify-self: start;
    width: 100%;
}

.description>h3 {
    grid-area: 'title';
    margin: 0 0 0 min(1vh, 1vw);
    transition: transform 0.5s ease-in-out;
}

.front__panel,
.back__panel {
    grid-area: panel;
}

.front__panel {
    transition: transform 0.5s ease-in-out;
}

.back__panel {
    display: grid;
    grid-template-areas: only-area;
    background-color: #2f3640a6;
    color: rgba(0, 0, 0, 0);
    z-index: -100;
}

.live__app,
.repository {
    display: grid;
    grid-area: only-area;
    justify-self: end;
}

.live__app>div {
    display: grid;
    padding: 0.5rem;
}

.repository {
    align-content: center;
    align-self: flex-end;
}

.repository>div {
    display: grid;
    align-content: center;
    padding: 0.5rem;
}

.info,
.ghost__info {
    display: grid;
    padding: min(1vh, 1vw);
    min-height: min(100px);
    border: min(0.5vw, 0.5vw) #2f3640 solid;
}

.info {
    background-color: white;
    transition: transform 1s ease-in-out;
}

.ghost__info {
    grid-area: only-area;
    border: min(0.5vw, 0.5vw) rgba(0, 0, 0, 0) solid;
}

.name {
    display: grid;
    width: max-content;
    padding: min(1vh, 1vw);
    background-color: #f9f366;
}

.contacts {
    opacity: 0;
}

.contacts__panel {
    padding: 3rem;
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: center;
    gap: 3rem;
}

footer {
    display: grid;
    opacity: 0;
    justify-items: center;
}

.verticalLine {
    display: grid;
}

.visible__section {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.show__hero {
    transform: translate(0vw);
    opacity: 1;
    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;
}

@media screen and (min-aspect-ratio: 0.9/1) {
    .project {
        justify-content: space-between;
        align-items: center;
        grid-template-columns: max-content min-content 1fr;
    }

    .verticalLine {
        width: 1vh;
        height: 75%;
        border-right: 1px solid #2f3640;
    }

    .visible__main {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        transition: background-image 1s ease-in-out;
    }
}

@media screen and (max-aspect-ratio: 0.9/1) {
    .project {
        justify-items: center;
        grid-template-rows: repeat(3, min-content);
    }

    .preview {
        display: grid;
        width: min-content;
    }

    .verticalLine {
        width: 75%;
        height: 0;
        padding-top: 1vw;
        border-bottom: 1px solid #2f3640;
        justify-self: center;
    }

    .visible__main {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
        transition: background-image 1s ease-in-out;
    }

}`, "",{"version":3,"sources":["webpack://./src/views/css/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: min-content;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: Roboto;\n    font-size: min(1.8vw, 1.8vh);\n    color: #2f3640;\n    line-height: 1.5em;\n    padding: min(1vh, 1vw);\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n\n    background-image: url(../images/white.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\nhtml::-webkit-scrollbar {\n    visibility: hidden;\n    width: 0;\n}\n\na {\n    outline: none;\n    text-decoration: none;\n}\n\nh3 {\n    margin: 0 0 2em 0.75em;\n}\n\np {\n    margin: 0 0 0.75em 1em;\n}\n\nul {\n    padding-left: 4em;\n}\n\nspan {\n    padding-left: min(1vh, 1vw);\n    padding-right: min(1vh, 1vw);\n}\n\nbody {}\n\n.section {\n    display: grid;\n    padding: min(3vh, 7.5vw);\n}\n\nheader {\n    display: grid;\n    grid-template-areas:\n        'logo navbar';\n    align-items: center;\n    justify-content: space-between;\n    opacity: 0;\n}\n\n.logo,\n.nav__links {\n    display: grid;\n    margin: min(3vh, 3vw);\n    width: max-content;\n}\n\n.logo {\n    grid-area: logo;\n    font-size: min(6vw, 6vh);\n    grid-template-columns: min-content min-content;\n}\n\n.logo>span {\n    width: min-content;\n    padding-left: 0vh;\n    padding-right: 0vh;\n}\n\n.first__letter {\n    position: relative;\n    transform-style: preserve-3d;\n    animation: letterRotate 10s linear infinite;\n}\n\n.nav__links>a {\n    color: #2f3640;\n}\n\n@keyframes letterRotate {\n\n    0%,\n    40% {\n        -webkit-transform: rotateY(360deg);\n        transform: rotateY(360deg);\n    }\n\n    60%,\n    100% {\n        -webkit-transform: rotateY(0deg);\n        transform: rotateY(0deg);\n    }\n}\n\n.nav__links {\n    grid-area: navbar;\n    grid-template-columns: repeat(4, max-content);\n    font-size: 1rem;\n}\n\nmain {\n    display: grid;\n    grid-template-areas:\n        'hero'\n        'about'\n        'projects'\n        'contacts';\n}\n\n.hero {\n    padding: min(6em) !important;\n    display: grid;\n    grid-template-areas:\n        'firstname'\n        'secondname'\n        'profession';\n    gap: min(10vh, 10vw);\n    overflow: hidden;\n}\n\n.firstname,\n.secondname,\n.profession {\n    display: grid;\n    width: max-content;\n    transform: translate(100vw);\n    opacity: 0;\n    padding-right: min(1vh, 1vw);\n}\n\n.firstname,\n.secondname {\n    font-size: min(6em);\n    font-weight: 300;\n}\n\n.secondname {\n    text-indent: min(11.3vh, 11.3vw);\n}\n\n.profession {\n    font-size: min(4em);\n    text-indent: min(24vh, 24vw);\n}\n\n.section__name {\n    display: grid;\n    width: max-content;\n    padding-bottom: 1em;\n    font-size: min(4.8vh, 4.8vw);\n}\n\n.about {\n    display: grid;\n    border: min(1vh, 1vw) #2f3640 solid;\n    background-color: white;\n    opacity: 0;\n}\n\n.skills-panel {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    align-items: center;\n    justify-self: center;\n    margin-top: 2rem;\n}\n\n.arrow {\n    background-color: white;\n}\n\n.arrow:hover {\n    fill: aqua;\n}\n\n.carousel {\n    display: grid;\n    position: relative;\n    width: min(59vh, 59vw);\n    padding: min(4vh, 4vw);\n    border-radius: min(1vh, 1vw);\n    justify-self: center;\n    overflow: hidden;\n}\n\n.gallery {\n    display: grid;\n    position: relative;\n    width: 100vw;\n    right: min(17.5vh, 17.5vw);\n}\n\n.gallery ul {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, min(15vh, 15vw));\n    align-content: center;\n    list-style: none;\n    width: inherit;\n    border: 1px #2f3640 solid;\n}\n\n.gallery li {\n    display: grid;\n    padding: min(2vh, 1vw);\n    align-content: center;\n    width: min(12vh, 12vw);\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    justify-items: center;\n    gap: min(1vh, 1vw);\n    font-size: min(2.5vh, 2.5vw);\n}\n\n.projects {\n    display: grid;\n    row-gap: 3em;\n    align-content: center;\n    opacity: 0;\n}\n\n.project {\n    display: grid;\n    padding: min(3vh, 3vw);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\n.preview {\n    display: grid;\n    width: min-content;\n    border: min(0.5vw, 0.5vw) #2f3640 solid;\n}\n\nimg {\n    display: grid;\n}\n\n.description {\n    display: grid;\n    grid-template-areas:\n        'title'\n        'panel';\n    padding: min(1vw, 1vh);\n    justify-self: start;\n    width: 100%;\n}\n\n.description>h3 {\n    grid-area: 'title';\n    margin: 0 0 0 min(1vh, 1vw);\n    transition: transform 0.5s ease-in-out;\n}\n\n.front__panel,\n.back__panel {\n    grid-area: panel;\n}\n\n.front__panel {\n    transition: transform 0.5s ease-in-out;\n}\n\n.back__panel {\n    display: grid;\n    grid-template-areas: only-area;\n    background-color: #2f3640a6;\n    color: rgba(0, 0, 0, 0);\n    z-index: -100;\n}\n\n.live__app,\n.repository {\n    display: grid;\n    grid-area: only-area;\n    justify-self: end;\n}\n\n.live__app>div {\n    display: grid;\n    padding: 0.5rem;\n}\n\n.repository {\n    align-content: center;\n    align-self: flex-end;\n}\n\n.repository>div {\n    display: grid;\n    align-content: center;\n    padding: 0.5rem;\n}\n\n.info,\n.ghost__info {\n    display: grid;\n    padding: min(1vh, 1vw);\n    min-height: min(100px);\n    border: min(0.5vw, 0.5vw) #2f3640 solid;\n}\n\n.info {\n    background-color: white;\n    transition: transform 1s ease-in-out;\n}\n\n.ghost__info {\n    grid-area: only-area;\n    border: min(0.5vw, 0.5vw) rgba(0, 0, 0, 0) solid;\n}\n\n.name {\n    display: grid;\n    width: max-content;\n    padding: min(1vh, 1vw);\n    background-color: #f9f366;\n}\n\n.contacts {\n    opacity: 0;\n}\n\n.contacts__panel {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: min-content min-content;\n    justify-content: center;\n    gap: 3rem;\n}\n\nfooter {\n    display: grid;\n    opacity: 0;\n    justify-items: center;\n}\n\n.verticalLine {\n    display: grid;\n}\n\n.visible__section {\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n}\n\n.show__hero {\n    transform: translate(0vw);\n    opacity: 1;\n    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;\n}\n\n@media screen and (min-aspect-ratio: 0.9/1) {\n    .project {\n        justify-content: space-between;\n        align-items: center;\n        grid-template-columns: max-content min-content 1fr;\n    }\n\n    .verticalLine {\n        width: 1vh;\n        height: 75%;\n        border-right: 1px solid #2f3640;\n    }\n\n    .visible__main {\n        background-image: url(../images/WaveLineBackgroundFree.webp);\n        transition: background-image 1s ease-in-out;\n    }\n}\n\n@media screen and (max-aspect-ratio: 0.9/1) {\n    .project {\n        justify-items: center;\n        grid-template-rows: repeat(3, min-content);\n    }\n\n    .preview {\n        display: grid;\n        width: min-content;\n    }\n\n    .verticalLine {\n        width: 75%;\n        height: 0;\n        padding-top: 1vw;\n        border-bottom: 1px solid #2f3640;\n        justify-self: center;\n    }\n\n    .visible__main {\n        background-image: url(../images/WaveLineBackgroundFree2.webp);\n        transition: background-image 1s ease-in-out;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/css/style.css":
/*!*********************************!*\
  !*** ./src/views/css/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/listeners/carousel.js":
/*!***********************************************!*\
  !*** ./src/controllers/listeners/carousel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setEventListenersForCarousel: () => (/* binding */ setEventListenersForCarousel)
/* harmony export */ });
/* harmony import */ var _models_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/carousel */ "./src/models/carousel.js");
/* harmony import */ var _views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/stylePresets/carousel */ "./src/views/nodes/stylePresets/carousel.js");



const setEventListenersForCarousel = async () => {
    const carousel = await (0,_models_carousel__WEBPACK_IMPORTED_MODULE_0__.Carousel)();
    const getInterval = () => {
        return setInterval(() => {
            (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.changeArrowsAvailability)();
            carousel.right();
        }, 3000);
    }

    let interval = getInterval();

    _views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.leftButton.addEventListener('click', async () => {
        clearInterval(interval);
        (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.changeArrowsAvailability)();
        carousel.left()
        interval = getInterval();
    })

    _views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.rightButton.addEventListener('click', async () => {
        clearInterval(interval);
        (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.changeArrowsAvailability)();
        carousel.right();
        interval = getInterval();
    })
}


/***/ }),

/***/ "./src/helper/helper.js":
/*!******************************!*\
  !*** ./src/helper/helper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/css/style.css */ "./src/views/css/style.css");
/* harmony import */ var _controllers_listeners_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/listeners/carousel */ "./src/controllers/listeners/carousel.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/scroller */ "./src/models/scroller.js");
/* harmony import */ var _models_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/observer */ "./src/models/observer.js");
/* harmony import */ var _models_DOMHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/DOMHandler */ "./src/models/DOMHandler.js");







(0,_controllers_listeners_carousel__WEBPACK_IMPORTED_MODULE_1__.setEventListenersForCarousel)();

const header = document.querySelector('header');
const firstName = document.querySelector('.firstname');
const secondName = document.querySelector('.secondname');
const profession = document.querySelector('.profession');
const main = document.querySelector('html');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('footer');
const frontPanels = document.querySelectorAll('.front__panel');
const titles = document.querySelectorAll('.description>h3');

document.querySelector('html').style.overflowY = 'hidden';
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(200);
header.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(100);
main.classList.add('visible__main');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(200);
firstName.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(100);
secondName.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(100);
profession.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(1000);
document.querySelector('html').style.overflowY = 'auto';
about.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(100);
projects.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(100);
contacts.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__.timeout)(100);
footer.classList.add('visible__section');

for (let i = 0; i < frontPanels.length; i++) {
    let descriptionElements = { title: titles[i], panel: frontPanels[i], scrollValues: (0,_models_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollValues)(-3, 3) };
    (0,_models_observer__WEBPACK_IMPORTED_MODULE_4__.setIntersectionObserver)((0,_models_scroller__WEBPACK_IMPORTED_MODULE_3__.Scroller)(descriptionElements));
    
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/models/DOMHandler.js":
/*!**********************************!*\
  !*** ./src/models/DOMHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section: () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/models/observer.js");
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller */ "./src/models/scroller.js");



const Section = (node) => {
    const observer = (0,_observer__WEBPACK_IMPORTED_MODULE_0__.setIntersectionObserver)(node);

    const getObserver = () => {
        return observer.observe(node);
    }

    const getNode = () => {
        return node;
    }

    return { getObserver, getNode }
}


/***/ }),

/***/ "./src/models/carousel.js":
/*!********************************!*\
  !*** ./src/models/carousel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/stylePresets/carousel */ "./src/views/nodes/stylePresets/carousel.js");



const Carousel = async () => {
    let wrapper = document.querySelector('.gallery');
    let carousel = document.querySelector('.gallery ul');
    let skills = Array.from(carousel.querySelectorAll('li'));

    const left = async () => {
        (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.leftTransition)();
        leftMarkup();
        fill();
    }

    const right = async () => {
        await (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.rightTransition)();
        rightMarkUp();
        fill();
    }

    const fill = async () => {
        while (carousel.lastElementChild) {
            carousel.removeChild(carousel.lastElementChild);
        }
        skills.forEach(skill => {
            carousel.appendChild(skill);
        })
    }

    const leftMarkup = async () => {
        skills.unshift(skills[skills.length - 1]);
        skills.pop();
    }

    const rightMarkUp = async () => {
        skills[skills.length] = skills[0];
        skills.shift();
    }

    const getNode = () => {
        return wrapper;
    }

    return { left, right, fill, getNode };
}

/***/ }),

/***/ "./src/models/observer.js":
/*!********************************!*\
  !*** ./src/models/observer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setIntersectionObserver: () => (/* binding */ setIntersectionObserver)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");


const setIntersectionObserver = (scroller) => {
    let observer = new IntersectionObserver(async entries => {
        entries.forEach(async entry => {
            if (entry.isIntersecting) {
                await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(100);
                scroller.start();
            } else {
                scroller.stop();
            }
        })
    })

    observer.observe(scroller.getNode())
}

/***/ }),

/***/ "./src/models/scroller.js":
/*!********************************!*\
  !*** ./src/models/scroller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollValues: () => (/* binding */ ScrollValues),
/* harmony export */   Scroller: () => (/* binding */ Scroller)
/* harmony export */ });
const ScrollValues = (top = 0, bottom = 0, left = 0, right = 0) => {
    return { top, bottom, left, right };
}

const Scroller = (e) => {
    let pixels = 0;
    let oldScrollTopPosition = 0;
    let node = e.title;

    const start = () => {
        window.addEventListener('scroll', scroll);
        e.panel.addEventListener('click', click);
    }

    const stop = () => {
        window.removeEventListener('scroll', scroll);
    }

    const scroll = () => {
        console.log('www')
        const scrollTopPosition = document.documentElement.scrollTop;
        if (oldScrollTopPosition > scrollTopPosition) {
            if (pixels < e.scrollValues.bottom) {
                pixels = 3;
            }
        } else {
            if (pixels > e.scrollValues.top) {
                pixels = -3;
            }
        }
        console.log(node)
        e.title.style.transform = `translateY(${pixels}rem)`;
        e.panel.style.transform = `translateY(${pixels}rem)`;
        oldScrollTopPosition = scrollTopPosition;
    }

    const click = () => {
        if (pixels < e.scrollValues.bottom) {
            pixels = 3;
        } else {
            pixels = -3;
        }
        e.title.style.transform = `translateY(${pixels}rem)`;
        e.panel.style.transform = `translateY(${pixels}rem)`;
    }

    const getNode = () => {
        return node;
    }

    return { start, stop, getNode }
}

/***/ }),

/***/ "./src/views/nodes/stylePresets/carousel.js":
/*!**************************************************!*\
  !*** ./src/views/nodes/stylePresets/carousel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationSpeed: () => (/* binding */ animationSpeed),
/* harmony export */   changeArrowsAvailability: () => (/* binding */ changeArrowsAvailability),
/* harmony export */   leftButton: () => (/* binding */ leftButton),
/* harmony export */   leftTransition: () => (/* binding */ leftTransition),
/* harmony export */   removeArrowsPointerEvents: () => (/* binding */ removeArrowsPointerEvents),
/* harmony export */   removeTransitionLeftButton: () => (/* binding */ removeTransitionLeftButton),
/* harmony export */   removeTransitionRightButton: () => (/* binding */ removeTransitionRightButton),
/* harmony export */   rightButton: () => (/* binding */ rightButton),
/* harmony export */   rightTransition: () => (/* binding */ rightTransition),
/* harmony export */   setArrowsPointerEvents: () => (/* binding */ setArrowsPointerEvents),
/* harmony export */   setTransitionLeftButton: () => (/* binding */ setTransitionLeftButton),
/* harmony export */   setTransitionRightButton: () => (/* binding */ setTransitionRightButton)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helper/helper */ "./src/helper/helper.js");


const animationSpeed = 500;
const leftButton = document.querySelector('.prev');
const rightButton = document.querySelector('.next');

const wrapper = document.querySelector('.gallery');
const carousel = document.querySelector('.gallery ul');

const rightTransition = async () => {
    setTransitionRightButton();
    await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(animationSpeed);
    removeTransitionRightButton();
}

const leftTransition = async () => {
    removeTransitionLeftButton();
    await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(1);
    setTransitionLeftButton();
}

const removeTransitionLeftButton = async () => {
    wrapper.style.transition = '';
    carousel.style.transition = '';
    wrapper.style.right = 'min(32.5vh,32.5vw)';
}

const setTransitionLeftButton = async () => {
    wrapper.style.transition = `all ${animationSpeed}ms ease-out`;
    carousel.style.transition = `all ${animationSpeed}ms ease-out`;
    wrapper.style.right = '';
}

const removeTransitionRightButton = async () => {
    wrapper.style.transition = '';
    carousel.style.transition = '';
    wrapper.style.right = 'min(17.5vh,17.5vw)';
}

const setTransitionRightButton = async () => {
    wrapper.style.transition = `all ${animationSpeed}ms ease-out`;
    carousel.style.transition = `all ${animationSpeed}ms ease-out`;
    wrapper.style.right = 'min(32.5vh,32.5vw)';
}

const removeArrowsPointerEvents = async () => {
    leftButton.style.pointerEvents = 'none';
    rightButton.style.pointerEvents = 'none';
}

const setArrowsPointerEvents = async () => {
    leftButton.style.pointerEvents = 'auto';
    rightButton.style.pointerEvents = 'auto';
}

const changeArrowsAvailability = async () => {
    removeArrowsPointerEvents();
    await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.timeout)(animationSpeed);
    setArrowsPointerEvents();
}

/***/ }),

/***/ "./src/views/images/WaveLineBackgroundFree.webp":
/*!******************************************************!*\
  !*** ./src/views/images/WaveLineBackgroundFree.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74b3da6d592ebbe06644.webp";

/***/ }),

/***/ "./src/views/images/WaveLineBackgroundFree2.webp":
/*!*******************************************************!*\
  !*** ./src/views/images/WaveLineBackgroundFree2.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db8e5c2763aadf35af72.webp";

/***/ }),

/***/ "./src/views/images/white.png":
/*!************************************!*\
  !*** ./src/views/images/white.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4010cd28866de1ea206.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx3SEFBc0M7QUFDbEYsNENBQTRDLDRKQUF3RDtBQUNwRyw0Q0FBNEMsOEpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTs7QUFFQSxDQUFDLE9BQU8sNEZBQTRGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FB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QUFDUDtBQUNBLFVBQVUsdURBQU87QUFDakI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asc0NBQXNDLGVBQWU7QUFDckQsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asc0NBQXNDLGVBQWU7QUFDckQsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsVUFBVSx1REFBTztBQUNqQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvdmlld3MvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvdmlld3MvY3NzL3N0eWxlLmNzcz84YzNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbW9kZWxzL0RPTUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbW9kZWxzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL21vZGVscy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9tb2RlbHMvc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvdmlld3Mvbm9kZXMvc3R5bGVQcmVzZXRzL2Nhcm91c2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hpdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1dhdmVMaW5lQmFja2dyb3VuZEZyZWUud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9XYXZlTGluZUJhY2tncm91bmRGcmVlMi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IG1pbigxLjh2dywgMS44dmgpO1xuICAgIGNvbG9yOiAjMmYzNjQwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKiBGaXJlZm94ICovXG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMDtcbn1cblxuYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMC43NWVtO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDAgMCAwLjc1ZW0gMWVtO1xufVxuXG51bCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogbWluKDF2aCwgMXZ3KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xufVxuXG5ib2R5IHt9XG5cbi5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigzdmgsIDcuNXZ3KTtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdsb2dvIG5hdmJhcic7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmxvZ28sXG4ubmF2X19saW5rcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IG1pbigzdmgsIDN2dyk7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4ubG9nbyB7XG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xuICAgIGZvbnQtc2l6ZTogbWluKDZ2dywgNnZoKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xufVxuXG4ubG9nbz5zcGFuIHtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwdmg7XG4gICAgcGFkZGluZy1yaWdodDogMHZoO1xufVxuXG4uZmlyc3RfX2xldHRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgYW5pbWF0aW9uOiBsZXR0ZXJSb3RhdGUgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLm5hdl9fbGlua3M+YSB7XG4gICAgY29sb3I6ICMyZjM2NDA7XG59XG5cbkBrZXlmcmFtZXMgbGV0dGVyUm90YXRlIHtcblxuICAgIDAlLFxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIH1cblxuICAgIDYwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICB9XG59XG5cbi5uYXZfX2xpbmtzIHtcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtYXgtY29udGVudCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdoZXJvJ1xuICAgICAgICAnYWJvdXQnXG4gICAgICAgICdwcm9qZWN0cydcbiAgICAgICAgJ2NvbnRhY3RzJztcbn1cblxuLmhlcm8ge1xuICAgIHBhZGRpbmc6IG1pbig2ZW0pICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnZmlyc3RuYW1lJ1xuICAgICAgICAnc2Vjb25kbmFtZSdcbiAgICAgICAgJ3Byb2Zlc3Npb24nO1xuICAgIGdhcDogbWluKDEwdmgsIDEwdncpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5maXJzdG5hbWUsXG4uc2Vjb25kbmFtZSxcbi5wcm9mZXNzaW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDB2dyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xufVxuXG4uZmlyc3RuYW1lLFxuLnNlY29uZG5hbWUge1xuICAgIGZvbnQtc2l6ZTogbWluKDZlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnNlY29uZG5hbWUge1xuICAgIHRleHQtaW5kZW50OiBtaW4oMTEuM3ZoLCAxMS4zdncpO1xufVxuXG4ucHJvZmVzc2lvbiB7XG4gICAgZm9udC1zaXplOiBtaW4oNGVtKTtcbiAgICB0ZXh0LWluZGVudDogbWluKDI0dmgsIDI0dncpO1xufVxuXG4uc2VjdGlvbl9fbmFtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IG1pbig0Ljh2aCwgNC44dncpO1xufVxuXG4uYWJvdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpICMyZjM2NDAgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnNraWxscy1wYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYXJyb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICAgIGZpbGw6IGFxdWE7XG59XG5cbi5jYXJvdXNlbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IG1pbig1OXZoLCA1OXZ3KTtcbiAgICBwYWRkaW5nOiBtaW4oNHZoLCA0dncpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDF2dyk7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICByaWdodDogbWluKDE3LjV2aCwgMTcuNXZ3KTtcbn1cblxuLmdhbGxlcnkgdWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbigxNXZoLCAxNXZ3KSk7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggIzJmMzY0MCBzb2xpZDtcbn1cblxuLmdhbGxlcnkgbGkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDJ2aCwgMXZ3KTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMnZoLCAxMnZ3KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IG1pbigxdmgsIDF2dyk7XG4gICAgZm9udC1zaXplOiBtaW4oMi41dmgsIDIuNXZ3KTtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDNlbTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDN2aCwgM3Z3KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ucHJldmlldyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBtaW4oMC41dncsIDAuNXZ3KSAjMmYzNjQwIHNvbGlkO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAndGl0bGUnXG4gICAgICAgICdwYW5lbCc7XG4gICAgcGFkZGluZzogbWluKDF2dywgMXZoKTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVzY3JpcHRpb24+aDMge1xuICAgIGdyaWQtYXJlYTogJ3RpdGxlJztcbiAgICBtYXJnaW46IDAgMCAwIG1pbigxdmgsIDF2dyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mcm9udF9fcGFuZWwsXG4uYmFja19fcGFuZWwge1xuICAgIGdyaWQtYXJlYTogcGFuZWw7XG59XG5cbi5mcm9udF9fcGFuZWwge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYmFja19fcGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogb25seS1hcmVhO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM2NDBhNjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB6LWluZGV4OiAtMTAwO1xufVxuXG4ubGl2ZV9fYXBwLFxuLnJlcG9zaXRvcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBvbmx5LWFyZWE7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5saXZlX19hcHA+ZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnJlcG9zaXRvcnkge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnJlcG9zaXRvcnk+ZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pbmZvLFxuLmdob3N0X19pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgbWluLWhlaWdodDogbWluKDEwMHB4KTtcbiAgICBib3JkZXI6IG1pbigwLjV2dywgMC41dncpICMyZjM2NDAgc29saWQ7XG59XG5cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5naG9zdF9faW5mbyB7XG4gICAgZ3JpZC1hcmVhOiBvbmx5LWFyZWE7XG4gICAgYm9yZGVyOiBtaW4oMC41dncsIDAuNXZ3KSByZ2JhKDAsIDAsIDAsIDApIHNvbGlkO1xufVxuXG4ubmFtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMzY2O1xufVxuXG4uY29udGFjdHMge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jb250YWN0c19fcGFuZWwge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG9wYWNpdHk6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udmlzaWJsZV9fc2VjdGlvbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaG93X19oZXJvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDEuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAwLjkvMSkge1xuICAgIC5wcm9qZWN0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1pbi1jb250ZW50IDFmcjtcbiAgICB9XG5cbiAgICAudmVydGljYWxMaW5lIHtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyZjM2NDA7XG4gICAgfVxuXG4gICAgLnZpc2libGVfX21haW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMC45LzEpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIH1cblxuICAgIC5wcmV2aWV3IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIH1cblxuICAgIC52ZXJ0aWNhbExpbmUge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxdnc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmYzNjQwO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudmlzaWJsZV9fbWFpbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZOztJQUVaLHlEQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUEsTUFBTTs7QUFFTjtJQUNJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7cUJBQ2lCO0lBQ2pCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVB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Q0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDhEQUE4RDtBQUNsRTs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixrREFBa0Q7SUFDdEQ7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLHlEQUE0RDtRQUM1RCwyQ0FBMkM7SUFDL0M7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLDBDQUEwQztJQUM5Qzs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsU0FBUztRQUNULGdCQUFnQjtRQUNoQixnQ0FBZ0M7UUFDaEMsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0kseURBQTZEO1FBQzdELDJDQUEyQztJQUMvQzs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgZm9udC1zaXplOiBtaW4oMS44dncsIDEuOHZoKTtcXG4gICAgY29sb3I6ICMyZjM2NDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIC8qIEZpcmVmb3ggKi9cXG5cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy93aGl0ZS5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbmEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwIDAgMmVtIDAuNzVlbTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMCAwIDAuNzVlbSAxZW07XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigxdmgsIDF2dyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDF2dyk7XFxufVxcblxcbmJvZHkge31cXG5cXG4uc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IG1pbigzdmgsIDcuNXZ3KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdsb2dvIG5hdmJhcic7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxvZ28sXFxuLm5hdl9fbGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IG1pbigzdmgsIDN2dyk7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGZvbnQtc2l6ZTogbWluKDZ2dywgNnZoKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuXFxuLmxvZ28+c3BhbiB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDB2aDtcXG59XFxuXFxuLmZpcnN0X19sZXR0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgIGFuaW1hdGlvbjogbGV0dGVyUm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5uYXZfX2xpbmtzPmEge1xcbiAgICBjb2xvcjogIzJmMzY0MDtcXG59XFxuXFxuQGtleWZyYW1lcyBsZXR0ZXJSb3RhdGUge1xcblxcbiAgICAwJSxcXG4gICAgNDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXG4gICAgfVxcblxcbiAgICA2MCUsXFxuICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAgIH1cXG59XFxuXFxuLm5hdl9fbGlua3Mge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2hlcm8nXFxuICAgICAgICAnYWJvdXQnXFxuICAgICAgICAncHJvamVjdHMnXFxuICAgICAgICAnY29udGFjdHMnO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIHBhZGRpbmc6IG1pbig2ZW0pICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnZmlyc3RuYW1lJ1xcbiAgICAgICAgJ3NlY29uZG5hbWUnXFxuICAgICAgICAncHJvZmVzc2lvbic7XFxuICAgIGdhcDogbWluKDEwdmgsIDEwdncpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlyc3RuYW1lLFxcbi5zZWNvbmRuYW1lLFxcbi5wcm9mZXNzaW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDB2dyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDF2dyk7XFxufVxcblxcbi5maXJzdG5hbWUsXFxuLnNlY29uZG5hbWUge1xcbiAgICBmb250LXNpemU6IG1pbig2ZW0pO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uc2Vjb25kbmFtZSB7XFxuICAgIHRleHQtaW5kZW50OiBtaW4oMTEuM3ZoLCAxMS4zdncpO1xcbn1cXG5cXG4ucHJvZmVzc2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDRlbSk7XFxuICAgIHRleHQtaW5kZW50OiBtaW4oMjR2aCwgMjR2dyk7XFxufVxcblxcbi5zZWN0aW9uX19uYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IG1pbig0Ljh2aCwgNC44dncpO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgIzJmMzY0MCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5za2lsbHMtcGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgZmlsbDogYXF1YTtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogbWluKDU5dmgsIDU5dncpO1xcbiAgICBwYWRkaW5nOiBtaW4oNHZoLCA0dncpO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMXZoLCAxdncpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbGxlcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcmlnaHQ6IG1pbigxNy41dmgsIDE3LjV2dyk7XFxufVxcblxcbi5nYWxsZXJ5IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbigxNXZoLCAxNXZ3KSk7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMXB4ICMyZjM2NDAgc29saWQ7XFxufVxcblxcbi5nYWxsZXJ5IGxpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDJ2aCwgMXZ3KTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogbWluKDEydmgsIDEydncpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IG1pbigxdmgsIDF2dyk7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZoLCAyLjV2dyk7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDNlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IG1pbigzdmgsIDN2dyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBib3JkZXI6IG1pbigwLjV2dywgMC41dncpICMyZjM2NDAgc29saWQ7XFxufVxcblxcbmltZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAndGl0bGUnXFxuICAgICAgICAncGFuZWwnO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZ3LCAxdmgpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uPmgzIHtcXG4gICAgZ3JpZC1hcmVhOiAndGl0bGUnO1xcbiAgICBtYXJnaW46IDAgMCAwIG1pbigxdmgsIDF2dyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZnJvbnRfX3BhbmVsLFxcbi5iYWNrX19wYW5lbCB7XFxuICAgIGdyaWQtYXJlYTogcGFuZWw7XFxufVxcblxcbi5mcm9udF9fcGFuZWwge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJhY2tfX3BhbmVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogb25seS1hcmVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNjQwYTY7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICB6LWluZGV4OiAtMTAwO1xcbn1cXG5cXG4ubGl2ZV9fYXBwLFxcbi5yZXBvc2l0b3J5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBvbmx5LWFyZWE7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubGl2ZV9fYXBwPmRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnJlcG9zaXRvcnkge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmVwb3NpdG9yeT5kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmluZm8sXFxuLmdob3N0X19pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgbWluLWhlaWdodDogbWluKDEwMHB4KTtcXG4gICAgYm9yZGVyOiBtaW4oMC41dncsIDAuNXZ3KSAjMmYzNjQwIHNvbGlkO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5naG9zdF9faW5mbyB7XFxuICAgIGdyaWQtYXJlYTogb25seS1hcmVhO1xcbiAgICBib3JkZXI6IG1pbigwLjV2dywgMC41dncpIHJnYmEoMCwgMCwgMCwgMCkgc29saWQ7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMzY2O1xcbn1cXG5cXG4uY29udGFjdHMge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY29udGFjdHNfX3BhbmVsIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udmVydGljYWxMaW5lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnZpc2libGVfX3NlY3Rpb24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zaG93X19oZXJvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDEuNnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAwLjkvMSkge1xcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtaW4tY29udGVudCAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnZlcnRpY2FsTGluZSB7XFxuICAgICAgICB3aWR0aDogMXZoO1xcbiAgICAgICAgaGVpZ2h0OiA3NSU7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmYzNjQwO1xcbiAgICB9XFxuXFxuICAgIC52aXNpYmxlX19tYWluIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvV2F2ZUxpbmVCYWNrZ3JvdW5kRnJlZS53ZWJwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDAuOS8xKSB7XFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgfVxcblxcbiAgICAucHJldmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbExpbmUge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxdnc7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMzY0MDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC52aXNpYmxlX19tYWluIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvV2F2ZUxpbmVCYWNrZ3JvdW5kRnJlZTIud2VicCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHksIGxlZnRCdXR0b24sIHJpZ2h0QnV0dG9uIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL3N0eWxlUHJlc2V0cy9jYXJvdXNlbFwiO1xuXG5leHBvcnQgY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnNGb3JDYXJvdXNlbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbCA9IGF3YWl0IENhcm91c2VsKCk7XG4gICAgY29uc3QgZ2V0SW50ZXJ2YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgICAgIGNhcm91c2VsLnJpZ2h0KCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG5cbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIGNhcm91c2VsLmxlZnQoKVxuICAgICAgICBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgfSlcblxuICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIGNhcm91c2VsLnJpZ2h0KCk7XG4gICAgICAgIGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICB9KVxufVxuIiwiZXhwb3J0IGNvbnN0IHRpbWVvdXQgPSAobXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59IiwiaW1wb3J0ICcuL3ZpZXdzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2V0RXZlbnRMaXN0ZW5lcnNGb3JDYXJvdXNlbCB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2Nhcm91c2VsJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICcuL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgU2Nyb2xsVmFsdWVzLCBTY3JvbGxlciB9IGZyb20gJy4vbW9kZWxzL3Njcm9sbGVyJztcbmltcG9ydCB7IGlzVmlzaWJsZSwgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tICcuL21vZGVscy9vYnNlcnZlcic7XG5pbXBvcnQgeyBQcm9qZWN0c1NlY3Rpb24sIFNlY3Rpb24sIHNjcm9sbE5vZGUgfSBmcm9tICcuL21vZGVscy9ET01IYW5kbGVyJztcblxuc2V0RXZlbnRMaXN0ZW5lcnNGb3JDYXJvdXNlbCgpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IGZpcnN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdG5hbWUnKTtcbmNvbnN0IHNlY29uZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kbmFtZScpO1xuY29uc3QgcHJvZmVzc2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9mZXNzaW9uJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCBjb250YWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cycpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5jb25zdCBmcm9udFBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcm9udF9fcGFuZWwnKTtcbmNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbj5oMycpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5hd2FpdCB0aW1lb3V0KDIwMCk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xubWFpbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19tYWluJyk7XG5hd2FpdCB0aW1lb3V0KDIwMCk7XG5maXJzdE5hbWUuY2xhc3NMaXN0LmFkZCgnc2hvd19faGVybycpXG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5zZWNvbmROYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3dfX2hlcm8nKVxuYXdhaXQgdGltZW91dCgxMDApO1xucHJvZmVzc2lvbi5jbGFzc0xpc3QuYWRkKCdzaG93X19oZXJvJylcbmF3YWl0IHRpbWVvdXQoMTAwMCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuYWJvdXQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xucHJvamVjdHMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xuY29udGFjdHMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9udFBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnRzID0geyB0aXRsZTogdGl0bGVzW2ldLCBwYW5lbDogZnJvbnRQYW5lbHNbaV0sIHNjcm9sbFZhbHVlczogU2Nyb2xsVmFsdWVzKC0zLCAzKSB9O1xuICAgIHNldEludGVyc2VjdGlvbk9ic2VydmVyKFNjcm9sbGVyKGRlc2NyaXB0aW9uRWxlbWVudHMpKTtcbiAgICBcbn0iLCJpbXBvcnQgeyBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gXCIuL29ic2VydmVyXCI7XG5pbXBvcnQgeyBTY3JvbGxWYWx1ZXMsIFNjcm9sbGVyIH0gZnJvbSBcIi4vc2Nyb2xsZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSAobm9kZSkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIobm9kZSk7XG5cbiAgICBjb25zdCBnZXRPYnNlcnZlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0T2JzZXJ2ZXIsIGdldE5vZGUgfVxufVxuIiwiaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBsZWZ0VHJhbnNpdGlvbiwgcmVtb3ZlVHJhbnNpdGlvbkxlZnRCdXR0b24sIHJlbW92ZVRyYW5zaXRpb25SaWdodEJ1dHRvbiwgcmlnaHRUcmFuc2l0aW9uLCBzZXRUcmFuc2l0aW9uTGVmdEJ1dHRvbiwgc2V0VHJhbnNpdGlvblJpZ2h0QnV0dG9uIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3N0eWxlUHJlc2V0cy9jYXJvdXNlbFwiO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuICAgIGxldCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5IHVsJyk7XG4gICAgbGV0IHNraWxscyA9IEFycmF5LmZyb20oY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG5cbiAgICBjb25zdCBsZWZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZWZ0VHJhbnNpdGlvbigpO1xuICAgICAgICBsZWZ0TWFya3VwKCk7XG4gICAgICAgIGZpbGwoKTtcbiAgICB9XG5cbiAgICBjb25zdCByaWdodCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgcmlnaHRUcmFuc2l0aW9uKCk7XG4gICAgICAgIHJpZ2h0TWFya1VwKCk7XG4gICAgICAgIGZpbGwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoY2Fyb3VzZWwubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgY2Fyb3VzZWwucmVtb3ZlQ2hpbGQoY2Fyb3VzZWwubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2tpbGxzLmZvckVhY2goc2tpbGwgPT4ge1xuICAgICAgICAgICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoc2tpbGwpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGxlZnRNYXJrdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNraWxscy51bnNoaWZ0KHNraWxsc1tza2lsbHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICBza2lsbHMucG9wKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRNYXJrVXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNraWxsc1tza2lsbHMubGVuZ3RoXSA9IHNraWxsc1swXTtcbiAgICAgICAgc2tpbGxzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIGZpbGwsIGdldE5vZGUgfTtcbn0iLCJpbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIlxuXG5leHBvcnQgY29uc3Qgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSAoc2Nyb2xsZXIpID0+IHtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXN5bmMgZW50cmllcyA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChhc3luYyBlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aW1lb3V0KDEwMCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKHNjcm9sbGVyLmdldE5vZGUoKSlcbn0iLCJleHBvcnQgY29uc3QgU2Nyb2xsVmFsdWVzID0gKHRvcCA9IDAsIGJvdHRvbSA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDApID0+IHtcbiAgICByZXR1cm4geyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNjcm9sbGVyID0gKGUpID0+IHtcbiAgICBsZXQgcGl4ZWxzID0gMDtcbiAgICBsZXQgb2xkU2Nyb2xsVG9wUG9zaXRpb24gPSAwO1xuICAgIGxldCBub2RlID0gZS50aXRsZTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgZS5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3d3cnKVxuICAgICAgICBjb25zdCBzY3JvbGxUb3BQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGlmIChvbGRTY3JvbGxUb3BQb3NpdGlvbiA+IHNjcm9sbFRvcFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBpZiAocGl4ZWxzIDwgZS5zY3JvbGxWYWx1ZXMuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzID0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwaXhlbHMgPiBlLnNjcm9sbFZhbHVlcy50b3ApIHtcbiAgICAgICAgICAgICAgICBwaXhlbHMgPSAtMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxuICAgICAgICBlLnRpdGxlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGl4ZWxzfXJlbSlgO1xuICAgICAgICBlLnBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGl4ZWxzfXJlbSlgO1xuICAgICAgICBvbGRTY3JvbGxUb3BQb3NpdGlvbiA9IHNjcm9sbFRvcFBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAocGl4ZWxzIDwgZS5zY3JvbGxWYWx1ZXMuYm90dG9tKSB7XG4gICAgICAgICAgICBwaXhlbHMgPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGl4ZWxzID0gLTM7XG4gICAgICAgIH1cbiAgICAgICAgZS50aXRsZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3BpeGVsc31yZW0pYDtcbiAgICAgICAgZS5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3BpeGVsc31yZW0pYDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydCwgc3RvcCwgZ2V0Tm9kZSB9XG59IiwiaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXIvaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25TcGVlZCA9IDUwMDtcbmV4cG9ydCBjb25zdCBsZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYnKTtcbmV4cG9ydCBjb25zdCByaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0Jyk7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeSB1bCcpO1xuXG5leHBvcnQgY29uc3QgcmlnaHRUcmFuc2l0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFRyYW5zaXRpb25SaWdodEJ1dHRvbigpO1xuICAgIGF3YWl0IHRpbWVvdXQoYW5pbWF0aW9uU3BlZWQpO1xuICAgIHJlbW92ZVRyYW5zaXRpb25SaWdodEJ1dHRvbigpO1xufVxuXG5leHBvcnQgY29uc3QgbGVmdFRyYW5zaXRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgcmVtb3ZlVHJhbnNpdGlvbkxlZnRCdXR0b24oKTtcbiAgICBhd2FpdCB0aW1lb3V0KDEpO1xuICAgIHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uKCk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUcmFuc2l0aW9uTGVmdEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICdtaW4oMzIuNXZoLDMyLjV2dyknO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0VHJhbnNpdGlvbkxlZnRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUcmFuc2l0aW9uUmlnaHRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnbWluKDE3LjV2aCwxNy41dncpJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldFRyYW5zaXRpb25SaWdodEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7YW5pbWF0aW9uU3BlZWR9bXMgZWFzZS1vdXRgO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7YW5pbWF0aW9uU3BlZWR9bXMgZWFzZS1vdXRgO1xuICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnbWluKDMyLjV2aCwzMi41dncpJztcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUFycm93c1BvaW50ZXJFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGVmdEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIHJpZ2h0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRBcnJvd3NQb2ludGVyRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxlZnRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICByaWdodEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJlbW92ZUFycm93c1BvaW50ZXJFdmVudHMoKTtcbiAgICBhd2FpdCB0aW1lb3V0KGFuaW1hdGlvblNwZWVkKTtcbiAgICBzZXRBcnJvd3NQb2ludGVyRXZlbnRzKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9