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
    border-radius: 0.35rem;
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
    border-radius: 0.35rem;
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
    margin: 0 0 0 0.5rem;
    border-radius: 0.35rem 0.35rem 0 0;
    transition: transform 0.5s ease-in-out;
}

.front__panel,
.back__panel {
    grid-area: panel;
    border-radius: 0.35rem;
}

.front__panel {
    transition: transform 0.5s ease-in-out;
    z-index: 200;
}

.back__panel {
    display: grid;
    grid-template-areas: only-area;
    background-color: #2f3640a6;
    color: rgba(0, 0, 0, 0);
}

.live__app,
.repository {
    display: grid;
    grid-area: only-area;
    justify-self: end;
    cursor: pointer;
    z-index: 199;
    background-color: rgb(250, 61, 61);
    box-shadow: 0 0 min(1vh, 1vw) red;
    height: 50%;
}

.live__app {
    border-radius: 0.35rem 0.35rem 0 0;
    transform: translateX(-0.35rem) translateY(0.35rem);
}

.live__app:hover,
.repository:hover {
   
}

.live__app:focus {
    animation: clck 0.25s ease-in-out;
}

.live__app>div:hover {
    
}

@keyframes clck {
    50% {
        transform: translateX(-0.35rem) translateY(1rem)
    }

    100% {
        transform: translateX(-0.35rem) translateY(0.35rem)
    }
}


.live__app>div {
    display: grid;
    padding: 0.5rem;
}

.repository {
    align-self: flex-end;
    border-radius: 0 0 0.35rem 0.35rem;
    transform: translateX(-0.35rem) translateY(-0.35rem);
}

.repository>div {
    display: grid;
    align-self: end;
    padding: 0.5rem;
}

.info,
.ghost__info {
    display: grid;
    padding: min(1vh, 1vw);
    min-height: min(100px);
    border-radius: 0.35rem;
}

.info {
    background-color: white;
    transition: transform 1s ease-in-out;
    border: min(0.5vh, 0.5vw) #2f3640 solid;
}

.ghost__info {
    grid-area: only-area;
    border: min(0.5vh, 0.5vw) rgba(0, 0, 0, 0) solid;
}

.name {
    display: grid;
    width: max-content;
    padding: min(1vh, 1vw);
    background-color: #f9f366;
    box-shadow: 0 0 0.35rem #f9f366;
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

}`, "",{"version":3,"sources":["webpack://./src/views/css/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: min-content;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: Roboto;\n    font-size: min(1.8vw, 1.8vh);\n    color: #2f3640;\n    line-height: 1.5em;\n    padding: min(1vh, 1vw);\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n\n    background-image: url(../images/white.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\nhtml::-webkit-scrollbar {\n    visibility: hidden;\n    width: 0;\n}\n\na {\n    outline: none;\n    text-decoration: none;\n}\n\nh3 {\n    margin: 0 0 2em 0.75em;\n}\n\np {\n    margin: 0 0 0.75em 1em;\n}\n\nul {\n    padding-left: 4em;\n}\n\nspan {\n    padding-left: min(1vh, 1vw);\n    padding-right: min(1vh, 1vw);\n}\n\nbody {}\n\n.section {\n    display: grid;\n    padding: min(3vh, 7.5vw);\n}\n\nheader {\n    display: grid;\n    grid-template-areas:\n        'logo navbar';\n    align-items: center;\n    justify-content: space-between;\n    opacity: 0;\n}\n\n.logo,\n.nav__links {\n    display: grid;\n    margin: min(3vh, 3vw);\n    width: max-content;\n}\n\n.logo {\n    grid-area: logo;\n    font-size: min(6vw, 6vh);\n    grid-template-columns: min-content min-content;\n}\n\n.logo>span {\n    width: min-content;\n    padding-left: 0vh;\n    padding-right: 0vh;\n}\n\n.first__letter {\n    position: relative;\n    transform-style: preserve-3d;\n    animation: letterRotate 10s linear infinite;\n}\n\n.nav__links>a {\n    color: #2f3640;\n}\n\n@keyframes letterRotate {\n\n    0%,\n    40% {\n        -webkit-transform: rotateY(360deg);\n        transform: rotateY(360deg);\n    }\n\n    60%,\n    100% {\n        -webkit-transform: rotateY(0deg);\n        transform: rotateY(0deg);\n    }\n}\n\n.nav__links {\n    grid-area: navbar;\n    grid-template-columns: repeat(4, max-content);\n    font-size: 1rem;\n}\n\nmain {\n    display: grid;\n    grid-template-areas:\n        'hero'\n        'about'\n        'projects'\n        'contacts';\n}\n\n.hero {\n    padding: min(6em) !important;\n    display: grid;\n    grid-template-areas:\n        'firstname'\n        'secondname'\n        'profession';\n    gap: min(10vh, 10vw);\n    overflow: hidden;\n}\n\n.firstname,\n.secondname,\n.profession {\n    display: grid;\n    width: max-content;\n    transform: translate(100vw);\n    opacity: 0;\n    padding-right: min(1vh, 1vw);\n}\n\n.firstname,\n.secondname {\n    font-size: min(6em);\n    font-weight: 300;\n}\n\n.secondname {\n    text-indent: min(11.3vh, 11.3vw);\n}\n\n.profession {\n    font-size: min(4em);\n    text-indent: min(24vh, 24vw);\n}\n\n.section__name {\n    display: grid;\n    width: max-content;\n    padding-bottom: 1em;\n    font-size: min(4.8vh, 4.8vw);\n}\n\n.about {\n    display: grid;\n    border: min(1vh, 1vw) #2f3640 solid;\n    background-color: white;\n    opacity: 0;\n    border-radius: 0.35rem;\n}\n\n.skills-panel {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    align-items: center;\n    justify-self: center;\n    margin-top: 2rem;\n}\n\n.arrow {\n    background-color: white;\n}\n\n.arrow:hover {\n    fill: aqua;\n}\n\n.carousel {\n    display: grid;\n    position: relative;\n    width: min(59vh, 59vw);\n    padding: min(4vh, 4vw);\n    border-radius: min(1vh, 1vw);\n    justify-self: center;\n    overflow: hidden;\n}\n\n.gallery {\n    display: grid;\n    position: relative;\n    width: 100vw;\n    right: min(17.5vh, 17.5vw);\n}\n\n.gallery ul {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, min(15vh, 15vw));\n    align-content: center;\n    list-style: none;\n    width: inherit;\n    border: 1px #2f3640 solid;\n}\n\n.gallery li {\n    display: grid;\n    padding: min(2vh, 1vw);\n    align-content: center;\n    width: min(12vh, 12vw);\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    justify-items: center;\n    gap: min(1vh, 1vw);\n    font-size: min(2.5vh, 2.5vw);\n}\n\n.projects {\n    display: grid;\n    row-gap: 3em;\n    align-content: center;\n    opacity: 0;\n}\n\n.project {\n    display: grid;\n    padding: min(3vh, 3vw);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\n.preview {\n    display: grid;\n    width: min-content;\n    border: min(0.5vw, 0.5vw) #2f3640 solid;\n    border-radius: 0.35rem;\n}\n\nimg {\n    display: grid;\n}\n\n.description {\n    display: grid;\n    grid-template-areas:\n        'title'\n        'panel';\n    padding: min(1vw, 1vh);\n    justify-self: start;\n    width: 100%;\n}\n\n.description>h3 {\n    grid-area: 'title';\n    margin: 0 0 0 0.5rem;\n    border-radius: 0.35rem 0.35rem 0 0;\n    transition: transform 0.5s ease-in-out;\n}\n\n.front__panel,\n.back__panel {\n    grid-area: panel;\n    border-radius: 0.35rem;\n}\n\n.front__panel {\n    transition: transform 0.5s ease-in-out;\n    z-index: 200;\n}\n\n.back__panel {\n    display: grid;\n    grid-template-areas: only-area;\n    background-color: #2f3640a6;\n    color: rgba(0, 0, 0, 0);\n}\n\n.live__app,\n.repository {\n    display: grid;\n    grid-area: only-area;\n    justify-self: end;\n    cursor: pointer;\n    z-index: 199;\n    background-color: rgb(250, 61, 61);\n    box-shadow: 0 0 min(1vh, 1vw) red;\n    height: 50%;\n}\n\n.live__app {\n    border-radius: 0.35rem 0.35rem 0 0;\n    transform: translateX(-0.35rem) translateY(0.35rem);\n}\n\n.live__app:hover,\n.repository:hover {\n   \n}\n\n.live__app:focus {\n    animation: clck 0.25s ease-in-out;\n}\n\n.live__app>div:hover {\n    \n}\n\n@keyframes clck {\n    50% {\n        transform: translateX(-0.35rem) translateY(1rem)\n    }\n\n    100% {\n        transform: translateX(-0.35rem) translateY(0.35rem)\n    }\n}\n\n\n.live__app>div {\n    display: grid;\n    padding: 0.5rem;\n}\n\n.repository {\n    align-self: flex-end;\n    border-radius: 0 0 0.35rem 0.35rem;\n    transform: translateX(-0.35rem) translateY(-0.35rem);\n}\n\n.repository>div {\n    display: grid;\n    align-self: end;\n    padding: 0.5rem;\n}\n\n.info,\n.ghost__info {\n    display: grid;\n    padding: min(1vh, 1vw);\n    min-height: min(100px);\n    border-radius: 0.35rem;\n}\n\n.info {\n    background-color: white;\n    transition: transform 1s ease-in-out;\n    border: min(0.5vh, 0.5vw) #2f3640 solid;\n}\n\n.ghost__info {\n    grid-area: only-area;\n    border: min(0.5vh, 0.5vw) rgba(0, 0, 0, 0) solid;\n}\n\n.name {\n    display: grid;\n    width: max-content;\n    padding: min(1vh, 1vw);\n    background-color: #f9f366;\n    box-shadow: 0 0 0.35rem #f9f366;\n}\n\n.contacts {\n    opacity: 0;\n}\n\n.contacts__panel {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: min-content min-content;\n    justify-content: center;\n    gap: 3rem;\n}\n\nfooter {\n    display: grid;\n    opacity: 0;\n    justify-items: center;\n}\n\n.verticalLine {\n    display: grid;\n}\n\n.visible__section {\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n}\n\n.show__hero {\n    transform: translate(0vw);\n    opacity: 1;\n    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;\n}\n\n@media screen and (min-aspect-ratio: 0.9/1) {\n    .project {\n        justify-content: space-between;\n        align-items: center;\n        grid-template-columns: max-content min-content 1fr;\n    }\n\n    .verticalLine {\n        width: 1vh;\n        height: 75%;\n        border-right: 1px solid #2f3640;\n    }\n\n    .visible__main {\n        background-image: url(../images/WaveLineBackgroundFree.webp);\n        transition: background-image 1s ease-in-out;\n    }\n}\n\n@media screen and (max-aspect-ratio: 0.9/1) {\n    .project {\n        justify-items: center;\n        grid-template-rows: repeat(3, min-content);\n    }\n\n    .preview {\n        display: grid;\n        width: min-content;\n    }\n\n    .verticalLine {\n        width: 75%;\n        height: 0;\n        padding-top: 1vw;\n        border-bottom: 1px solid #2f3640;\n        justify-self: center;\n    }\n\n    .visible__main {\n        background-image: url(../images/WaveLineBackgroundFree2.webp);\n        transition: background-image 1s ease-in-out;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx3SEFBc0M7QUFDbEYsNENBQTRDLDRKQUF3RDtBQUNwRyw0Q0FBNEMsOEpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTs7QUFFQSxDQUFDLE9BQU8sNEZBQTRGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxL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Qzs7QUFFbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQU87QUFDN0I7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1AsYUFBYTtBQUNiOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZELGdEQUFnRCxPQUFPO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRpRDs7QUFFMUM7QUFDQTtBQUNBOztBQUVQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFVBQVUsdURBQU87QUFDakI7QUFDQTs7QUFFTztBQUNQO0FBQ0EsVUFBVSx1REFBTztBQUNqQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQ0FBc0MsZUFBZTtBQUNyRCx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQ0FBc0MsZUFBZTtBQUNyRCx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxVQUFVLHVEQUFPO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9jc3Mvc3R5bGUuY3NzPzhjM2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9tb2RlbHMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9tb2RlbHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbW9kZWxzL29ic2VydmVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL21vZGVscy9zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9ub2Rlcy9zdHlsZVByZXNldHMvY2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvV2F2ZUxpbmVCYWNrZ3JvdW5kRnJlZS53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1dhdmVMaW5lQmFja2dyb3VuZEZyZWUyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogbWluKDEuOHZ3LCAxLjh2aCk7XG4gICAgY29sb3I6ICMyZjM2NDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qIEZpcmVmb3ggKi9cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAwO1xufVxuXG5hIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDMge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwLjc1ZW07XG59XG5cbnAge1xuICAgIG1hcmdpbjogMCAwIDAuNzVlbSAxZW07XG59XG5cbnVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRlbTtcbn1cblxuc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMXZoLCAxdncpO1xuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDF2dyk7XG59XG5cbmJvZHkge31cblxuLnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDN2aCwgNy41dncpO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2xvZ28gbmF2YmFyJztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ubG9nbyxcbi5uYXZfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogbWluKDN2aCwgM3Z3KTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5sb2dvIHtcbiAgICBncmlkLWFyZWE6IGxvZ287XG4gICAgZm9udC1zaXplOiBtaW4oNnZ3LCA2dmgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG59XG5cbi5sb2dvPnNwYW4ge1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDB2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwdmg7XG59XG5cbi5maXJzdF9fbGV0dGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBhbmltYXRpb246IGxldHRlclJvdGF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubmF2X19saW5rcz5hIHtcbiAgICBjb2xvcjogIzJmMzY0MDtcbn1cblxuQGtleWZyYW1lcyBsZXR0ZXJSb3RhdGUge1xuXG4gICAgMCUsXG4gICAgNDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgfVxuXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIH1cbn1cblxuLm5hdl9fbGlua3Mge1xuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2hlcm8nXG4gICAgICAgICdhYm91dCdcbiAgICAgICAgJ3Byb2plY3RzJ1xuICAgICAgICAnY29udGFjdHMnO1xufVxuXG4uaGVybyB7XG4gICAgcGFkZGluZzogbWluKDZlbSkgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdmaXJzdG5hbWUnXG4gICAgICAgICdzZWNvbmRuYW1lJ1xuICAgICAgICAncHJvZmVzc2lvbic7XG4gICAgZ2FwOiBtaW4oMTB2aCwgMTB2dyk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpcnN0bmFtZSxcbi5zZWNvbmRuYW1lLFxuLnByb2Zlc3Npb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHZ3KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDF2dyk7XG59XG5cbi5maXJzdG5hbWUsXG4uc2Vjb25kbmFtZSB7XG4gICAgZm9udC1zaXplOiBtaW4oNmVtKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc2Vjb25kbmFtZSB7XG4gICAgdGV4dC1pbmRlbnQ6IG1pbigxMS4zdmgsIDExLjN2dyk7XG59XG5cbi5wcm9mZXNzaW9uIHtcbiAgICBmb250LXNpemU6IG1pbig0ZW0pO1xuICAgIHRleHQtaW5kZW50OiBtaW4oMjR2aCwgMjR2dyk7XG59XG5cbi5zZWN0aW9uX19uYW1lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIGZvbnQtc2l6ZTogbWluKDQuOHZoLCA0Ljh2dyk7XG59XG5cbi5hYm91dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgIzJmMzY0MCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG5cbi5za2lsbHMtcGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmFycm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFycm93OmhvdmVyIHtcbiAgICBmaWxsOiBhcXVhO1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBtaW4oNTl2aCwgNTl2dyk7XG4gICAgcGFkZGluZzogbWluKDR2aCwgNHZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMXZoLCAxdncpO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYWxsZXJ5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcmlnaHQ6IG1pbigxNy41dmgsIDE3LjV2dyk7XG59XG5cbi5nYWxsZXJ5IHVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW4oMTV2aCwgMTV2dykpO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGJvcmRlcjogMXB4ICMyZjM2NDAgc29saWQ7XG59XG5cbi5nYWxsZXJ5IGxpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDF2dyk7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4oMTJ2aCwgMTJ2dyk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiBtaW4oMXZoLCAxdncpO1xuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZoLCAyLjV2dyk7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICByb3ctZ2FwOiAzZW07XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigzdmgsIDN2dyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnByZXZpZXcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGJvcmRlcjogbWluKDAuNXZ3LCAwLjV2dykgIzJmMzY0MCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAndGl0bGUnXG4gICAgICAgICdwYW5lbCc7XG4gICAgcGFkZGluZzogbWluKDF2dywgMXZoKTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVzY3JpcHRpb24+aDMge1xuICAgIGdyaWQtYXJlYTogJ3RpdGxlJztcbiAgICBtYXJnaW46IDAgMCAwIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtIDAuMzVyZW0gMCAwO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uZnJvbnRfX3BhbmVsLFxuLmJhY2tfX3BhbmVsIHtcbiAgICBncmlkLWFyZWE6IHBhbmVsO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG5cbi5mcm9udF9fcGFuZWwge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDIwMDtcbn1cblxuLmJhY2tfX3BhbmVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IG9ubHktYXJlYTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNjQwYTY7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5saXZlX19hcHAsXG4ucmVwb3NpdG9yeSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IG9ubHktYXJlYTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDYxLCA2MSk7XG4gICAgYm94LXNoYWRvdzogMCAwIG1pbigxdmgsIDF2dykgcmVkO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4ubGl2ZV9fYXBwIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtIDAuMzVyZW0gMCAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgwLjM1cmVtKTtcbn1cblxuLmxpdmVfX2FwcDpob3Zlcixcbi5yZXBvc2l0b3J5OmhvdmVyIHtcbiAgIFxufVxuXG4ubGl2ZV9fYXBwOmZvY3VzIHtcbiAgICBhbmltYXRpb246IGNsY2sgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5saXZlX19hcHA+ZGl2OmhvdmVyIHtcbiAgICBcbn1cblxuQGtleWZyYW1lcyBjbGNrIHtcbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMzVyZW0pIHRyYW5zbGF0ZVkoMXJlbSlcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKDAuMzVyZW0pXG4gICAgfVxufVxuXG5cbi5saXZlX19hcHA+ZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnJlcG9zaXRvcnkge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjM1cmVtIDAuMzVyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKC0wLjM1cmVtKTtcbn1cblxuLnJlcG9zaXRvcnk+ZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pbmZvLFxuLmdob3N0X19pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgbWluLWhlaWdodDogbWluKDEwMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuXG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjV2dykgIzJmMzY0MCBzb2xpZDtcbn1cblxuLmdob3N0X19pbmZvIHtcbiAgICBncmlkLWFyZWE6IG9ubHktYXJlYTtcbiAgICBib3JkZXI6IG1pbigwLjV2aCwgMC41dncpIHJnYmEoMCwgMCwgMCwgMCkgc29saWQ7XG59XG5cbi5uYW1lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWYzNjY7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuMzVyZW0gI2Y5ZjM2Njtcbn1cblxuLmNvbnRhY3RzIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY29udGFjdHNfX3BhbmVsIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDNyZW07XG59XG5cbmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnZpc2libGVfX3NlY3Rpb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvd19faGVybyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dCwgb3BhY2l0eSAxLjZzIGVhc2UtaW4tb3V0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMC45LzEpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtaW4tY29udGVudCAxZnI7XG4gICAgfVxuXG4gICAgLnZlcnRpY2FsTGluZSB7XG4gICAgICAgIHdpZHRoOiAxdmg7XG4gICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmYzNjQwO1xuICAgIH1cblxuICAgIC52aXNpYmxlX19tYWluIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDAuOS8xKSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcbiAgICB9XG5cbiAgICAucHJldmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICB9XG5cbiAgICAudmVydGljYWxMaW5lIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMXZ3O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMzY0MDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnZpc2libGVfX21haW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJ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QUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDViw4REFBOEQ7QUFDbEU7O0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsa0RBQWtEO0lBQ3REOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSx5REFBNEQ7UUFDNUQsMkNBQTJDO0lBQy9DO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQiwwQ0FBMEM7SUFDOUM7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLHlEQUE2RDtRQUM3RCwyQ0FBMkM7SUFDL0M7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuOHZ3LCAxLjh2aCk7XFxuICAgIGNvbG9yOiAjMmYzNjQwO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gICAgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICAvKiBGaXJlZm94ICovXFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvd2hpdGUucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG5hIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMCAwIDJlbSAwLjc1ZW07XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDAgMCAwLjc1ZW0gMWVtO1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMXZoLCAxdncpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xcbn1cXG5cXG5ib2R5IHt9XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCA3LjV2dyk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbG9nbyBuYXZiYXInO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5sb2dvLFxcbi5uYXZfX2xpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiBtaW4oM3ZoLCAzdncpO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgICBmb250LXNpemU6IG1pbig2dncsIDZ2aCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxufVxcblxcbi5sb2dvPnNwYW4ge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMHZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwdmg7XFxufVxcblxcbi5maXJzdF9fbGV0dGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICBhbmltYXRpb246IGxldHRlclJvdGF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubmF2X19saW5rcz5hIHtcXG4gICAgY29sb3I6ICMyZjM2NDA7XFxufVxcblxcbkBrZXlmcmFtZXMgbGV0dGVyUm90YXRlIHtcXG5cXG4gICAgMCUsXFxuICAgIDQwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgNjAlLFxcbiAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi5uYXZfX2xpbmtzIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdoZXJvJ1xcbiAgICAgICAgJ2Fib3V0J1xcbiAgICAgICAgJ3Byb2plY3RzJ1xcbiAgICAgICAgJ2NvbnRhY3RzJztcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBwYWRkaW5nOiBtaW4oNmVtKSAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2ZpcnN0bmFtZSdcXG4gICAgICAgICdzZWNvbmRuYW1lJ1xcbiAgICAgICAgJ3Byb2Zlc3Npb24nO1xcbiAgICBnYXA6IG1pbigxMHZoLCAxMHZ3KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0bmFtZSxcXG4uc2Vjb25kbmFtZSxcXG4ucHJvZmVzc2lvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwdncpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xcbn1cXG5cXG4uZmlyc3RuYW1lLFxcbi5zZWNvbmRuYW1lIHtcXG4gICAgZm9udC1zaXplOiBtaW4oNmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnNlY29uZG5hbWUge1xcbiAgICB0ZXh0LWluZGVudDogbWluKDExLjN2aCwgMTEuM3Z3KTtcXG59XFxuXFxuLnByb2Zlc3Npb24ge1xcbiAgICBmb250LXNpemU6IG1pbig0ZW0pO1xcbiAgICB0ZXh0LWluZGVudDogbWluKDI0dmgsIDI0dncpO1xcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiBtaW4oNC44dmgsIDQuOHZ3KTtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpICMyZjM2NDAgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG5cXG4uc2tpbGxzLXBhbmVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hcnJvdzpob3ZlciB7XFxuICAgIGZpbGw6IGFxdWE7XFxufVxcblxcbi5jYXJvdXNlbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IG1pbig1OXZoLCA1OXZ3KTtcXG4gICAgcGFkZGluZzogbWluKDR2aCwgNHZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDF2aCwgMXZ3KTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5nYWxsZXJ5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHJpZ2h0OiBtaW4oMTcuNXZoLCAxNy41dncpO1xcbn1cXG5cXG4uZ2FsbGVyeSB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW4oMTV2aCwgMTV2dykpO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDFweCAjMmYzNjQwIHNvbGlkO1xcbn1cXG5cXG4uZ2FsbGVyeSBsaSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IG1pbigydmgsIDF2dyk7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbigxMnZoLCAxMnZ3KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oMXZoLCAxdncpO1xcbiAgICBmb250LXNpemU6IG1pbigyLjV2aCwgMi41dncpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICByb3ctZ2FwOiAzZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCAzdncpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgYm9yZGVyOiBtaW4oMC41dncsIDAuNXZ3KSAjMmYzNjQwIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG5cXG5pbWcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ3RpdGxlJ1xcbiAgICAgICAgJ3BhbmVsJztcXG4gICAgcGFkZGluZzogbWluKDF2dywgMXZoKTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXNjcmlwdGlvbj5oMyB7XFxuICAgIGdyaWQtYXJlYTogJ3RpdGxlJztcXG4gICAgbWFyZ2luOiAwIDAgMCAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gMC4zNXJlbSAwIDA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZnJvbnRfX3BhbmVsLFxcbi5iYWNrX19wYW5lbCB7XFxuICAgIGdyaWQtYXJlYTogcGFuZWw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxufVxcblxcbi5mcm9udF9fcGFuZWwge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4uYmFja19fcGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBvbmx5LWFyZWE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM2NDBhNjtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5saXZlX19hcHAsXFxuLnJlcG9zaXRvcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IG9ubHktYXJlYTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMTk5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA2MSwgNjEpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgbWluKDF2aCwgMXZ3KSByZWQ7XFxuICAgIGhlaWdodDogNTAlO1xcbn1cXG5cXG4ubGl2ZV9fYXBwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbSAwLjM1cmVtIDAgMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKDAuMzVyZW0pO1xcbn1cXG5cXG4ubGl2ZV9fYXBwOmhvdmVyLFxcbi5yZXBvc2l0b3J5OmhvdmVyIHtcXG4gICBcXG59XFxuXFxuLmxpdmVfX2FwcDpmb2N1cyB7XFxuICAgIGFuaW1hdGlvbjogY2xjayAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpdmVfX2FwcD5kaXY6aG92ZXIge1xcbiAgICBcXG59XFxuXFxuQGtleWZyYW1lcyBjbGNrIHtcXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgxcmVtKVxcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKDAuMzVyZW0pXFxuICAgIH1cXG59XFxuXFxuXFxuLmxpdmVfX2FwcD5kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5yZXBvc2l0b3J5IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjM1cmVtIDAuMzVyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgtMC4zNXJlbSk7XFxufVxcblxcbi5yZXBvc2l0b3J5PmRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uaW5mbyxcXG4uZ2hvc3RfX2luZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICBtaW4taGVpZ2h0OiBtaW4oMTAwcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjV2dykgIzJmMzY0MCBzb2xpZDtcXG59XFxuXFxuLmdob3N0X19pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBvbmx5LWFyZWE7XFxuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjV2dykgcmdiYSgwLCAwLCAwLCAwKSBzb2xpZDtcXG59XFxuXFxuLm5hbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWYzNjY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjM1cmVtICNmOWYzNjY7XFxufVxcblxcbi5jb250YWN0cyB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jb250YWN0c19fcGFuZWwge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi52ZXJ0aWNhbExpbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udmlzaWJsZV9fc2VjdGlvbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNob3dfX2hlcm8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMS42cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDAuOS8xKSB7XFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1pbi1jb250ZW50IDFmcjtcXG4gICAgfVxcblxcbiAgICAudmVydGljYWxMaW5lIHtcXG4gICAgICAgIHdpZHRoOiAxdmg7XFxuICAgICAgICBoZWlnaHQ6IDc1JTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyZjM2NDA7XFxuICAgIH1cXG5cXG4gICAgLnZpc2libGVfX21haW4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9XYXZlTGluZUJhY2tncm91bmRGcmVlLndlYnApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMC45LzEpIHtcXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICB9XFxuXFxuICAgIC5wcmV2aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIH1cXG5cXG4gICAgLnZlcnRpY2FsTGluZSB7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDF2dztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmYzNjQwO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnZpc2libGVfX21haW4ge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9XYXZlTGluZUJhY2tncm91bmRGcmVlMi53ZWJwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY2Fyb3VzZWxcIjtcbmltcG9ydCB7IGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSwgbGVmdEJ1dHRvbiwgcmlnaHRCdXR0b24gfSBmcm9tIFwiLi4vLi4vdmlld3Mvbm9kZXMvc3R5bGVQcmVzZXRzL2Nhcm91c2VsXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRFdmVudExpc3RlbmVyc0ZvckNhcm91c2VsID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhcm91c2VsID0gYXdhaXQgQ2Fyb3VzZWwoKTtcbiAgICBjb25zdCBnZXRJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSgpO1xuICAgICAgICAgICAgY2Fyb3VzZWwucmlnaHQoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgbGV0IGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgY2Fyb3VzZWwubGVmdCgpXG4gICAgICAgIGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICB9KVxuXG4gICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgY2Fyb3VzZWwucmlnaHQoKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgIH0pXG59XG4iLCJleHBvcnQgY29uc3QgdGltZW91dCA9IChtcykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn0iLCJpbXBvcnQgJy4vdmlld3MvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzZXRFdmVudExpc3RlbmVyc0ZvckNhcm91c2VsIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJy4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBTY3JvbGxWYWx1ZXMsIFNjcm9sbGVyIH0gZnJvbSAnLi9tb2RlbHMvc2Nyb2xsZXInO1xuaW1wb3J0IHsgaXNWaXNpYmxlLCBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gJy4vbW9kZWxzL29ic2VydmVyJztcbmltcG9ydCB7IFByb2plY3RzU2VjdGlvbiwgU2VjdGlvbiwgc2Nyb2xsTm9kZSB9IGZyb20gJy4vbW9kZWxzL0RPTUhhbmRsZXInO1xuXG5zZXRFdmVudExpc3RlbmVyc0ZvckNhcm91c2VsKCk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0bmFtZScpO1xuY29uc3Qgc2Vjb25kTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRuYW1lJyk7XG5jb25zdCBwcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2Zlc3Npb24nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbmNvbnN0IGZyb250UGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyb250X19wYW5lbCcpO1xuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlc2NyaXB0aW9uPmgzJyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbmF3YWl0IHRpbWVvdXQoMjAwKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5tYWluLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX21haW4nKTtcbmF3YWl0IHRpbWVvdXQoMjAwKTtcbmZpcnN0TmFtZS5jbGFzc0xpc3QuYWRkKCdzaG93X19oZXJvJylcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbnNlY29uZE5hbWUuY2xhc3NMaXN0LmFkZCgnc2hvd19faGVybycpXG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5wcm9mZXNzaW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3dfX2hlcm8nKVxuYXdhaXQgdGltZW91dCgxMDAwKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG5hYm91dC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5wcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5jb250YWN0cy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5mb290ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGZyb250UGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudHMgPSB7IHRpdGxlOiB0aXRsZXNbaV0sIHBhbmVsOiBmcm9udFBhbmVsc1tpXSwgc2Nyb2xsVmFsdWVzOiBTY3JvbGxWYWx1ZXMoLTMsIDMpIH07XG4gICAgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoU2Nyb2xsZXIoZGVzY3JpcHRpb25FbGVtZW50cykpO1xuICAgIFxufSIsImltcG9ydCB7IHNldEludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcIi4vb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IFNjcm9sbFZhbHVlcywgU2Nyb2xsZXIgfSBmcm9tIFwiLi9zY3JvbGxlclwiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IChub2RlKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlcihub2RlKTtcblxuICAgIGNvbnN0IGdldE9ic2VydmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRPYnNlcnZlciwgZ2V0Tm9kZSB9XG59XG4iLCJpbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IGxlZnRUcmFuc2l0aW9uLCByZW1vdmVUcmFuc2l0aW9uTGVmdEJ1dHRvbiwgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uLCByaWdodFRyYW5zaXRpb24sIHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uLCBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24gfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvc3R5bGVQcmVzZXRzL2Nhcm91c2VsXCI7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XG4gICAgbGV0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnkgdWwnKTtcbiAgICBsZXQgc2tpbGxzID0gQXJyYXkuZnJvbShjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKTtcblxuICAgIGNvbnN0IGxlZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxlZnRUcmFuc2l0aW9uKCk7XG4gICAgICAgIGxlZnRNYXJrdXAoKTtcbiAgICAgICAgZmlsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCByaWdodFRyYW5zaXRpb24oKTtcbiAgICAgICAgcmlnaHRNYXJrVXAoKTtcbiAgICAgICAgZmlsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBjYXJvdXNlbC5yZW1vdmVDaGlsZChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBza2lsbHMuZm9yRWFjaChza2lsbCA9PiB7XG4gICAgICAgICAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChza2lsbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbGVmdE1hcmt1cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2tpbGxzLnVuc2hpZnQoc2tpbGxzW3NraWxscy5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNraWxscy5wb3AoKTtcbiAgICB9XG5cbiAgICBjb25zdCByaWdodE1hcmtVcCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2tpbGxzW3NraWxscy5sZW5ndGhdID0gc2tpbGxzWzBdO1xuICAgICAgICBza2lsbHMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgZmlsbCwgZ2V0Tm9kZSB9O1xufSIsImltcG9ydCB7IHRpbWVvdXQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlclwiXG5cbmV4cG9ydCBjb25zdCBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlciA9IChzY3JvbGxlcikgPT4ge1xuICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihhc3luYyBlbnRyaWVzID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGFzeW5jIGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRpbWVvdXQoMTAwKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxlci5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxlci5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIG9ic2VydmVyLm9ic2VydmUoc2Nyb2xsZXIuZ2V0Tm9kZSgpKVxufSIsImV4cG9ydCBjb25zdCBTY3JvbGxWYWx1ZXMgPSAodG9wID0gMCwgYm90dG9tID0gMCwgbGVmdCA9IDAsIHJpZ2h0ID0gMCkgPT4ge1xuICAgIHJldHVybiB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9O1xufVxuXG5leHBvcnQgY29uc3QgU2Nyb2xsZXIgPSAoZSkgPT4ge1xuICAgIGxldCBwaXhlbHMgPSAwO1xuICAgIGxldCBvbGRTY3JvbGxUb3BQb3NpdGlvbiA9IDA7XG4gICAgbGV0IG5vZGUgPSBlLnRpdGxlO1xuXG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgICAgICBlLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2spO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3d3dycpXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKG9sZFNjcm9sbFRvcFBvc2l0aW9uID4gc2Nyb2xsVG9wUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChwaXhlbHMgPCBlLnNjcm9sbFZhbHVlcy5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBwaXhlbHMgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBpeGVscyA+IGUuc2Nyb2xsVmFsdWVzLnRvcCkge1xuICAgICAgICAgICAgICAgIHBpeGVscyA9IC0zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgIGUudGl0bGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwaXhlbHN9cmVtKWA7XG4gICAgICAgIGUucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwaXhlbHN9cmVtKWA7XG4gICAgICAgIG9sZFNjcm9sbFRvcFBvc2l0aW9uID0gc2Nyb2xsVG9wUG9zaXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwaXhlbHMgPCBlLnNjcm9sbFZhbHVlcy5ib3R0b20pIHtcbiAgICAgICAgICAgIHBpeGVscyA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaXhlbHMgPSAtMztcbiAgICAgICAgfVxuICAgICAgICBlLnRpdGxlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGl4ZWxzfXJlbSlgO1xuICAgICAgICBlLnBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGl4ZWxzfXJlbSlgO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0LCBzdG9wLCBnZXROb2RlIH1cbn0iLCJpbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlci9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGlvblNwZWVkID0gNTAwO1xuZXhwb3J0IGNvbnN0IGxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldicpO1xuZXhwb3J0IGNvbnN0IHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQnKTtcblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XG5jb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5IHVsJyk7XG5cbmV4cG9ydCBjb25zdCByaWdodFRyYW5zaXRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VHJhbnNpdGlvblJpZ2h0QnV0dG9uKCk7XG4gICAgYXdhaXQgdGltZW91dChhbmltYXRpb25TcGVlZCk7XG4gICAgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uKCk7XG59XG5cbmV4cG9ydCBjb25zdCBsZWZ0VHJhbnNpdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICByZW1vdmVUcmFuc2l0aW9uTGVmdEJ1dHRvbigpO1xuICAgIGF3YWl0IHRpbWVvdXQoMSk7XG4gICAgc2V0VHJhbnNpdGlvbkxlZnRCdXR0b24oKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYW5zaXRpb25MZWZ0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ21pbigzMi41dmgsMzIuNXZ3KSc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRUcmFuc2l0aW9uTGVmdEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7YW5pbWF0aW9uU3BlZWR9bXMgZWFzZS1vdXRgO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7YW5pbWF0aW9uU3BlZWR9bXMgZWFzZS1vdXRgO1xuICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnJztcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYW5zaXRpb25SaWdodEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICdtaW4oMTcuNXZoLDE3LjV2dyknO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0VHJhbnNpdGlvblJpZ2h0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICdtaW4oMzIuNXZoLDMyLjV2dyknO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlQXJyb3dzUG9pbnRlckV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZWZ0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgcmlnaHRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldEFycm93c1BvaW50ZXJFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGVmdEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgIHJpZ2h0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgcmVtb3ZlQXJyb3dzUG9pbnRlckV2ZW50cygpO1xuICAgIGF3YWl0IHRpbWVvdXQoYW5pbWF0aW9uU3BlZWQpO1xuICAgIHNldEFycm93c1BvaW50ZXJFdmVudHMoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=