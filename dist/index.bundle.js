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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/WaveLineBackgroundFree.jpg */ "./src/views/images/WaveLineBackgroundFree.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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
    font-size: min(1.8vh, 1.8vw);
    color: #2f3640;
    line-height: 1.5em;

    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
    min-height: 240px;
    min-width: 80px;
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
    font-size: min(6vh, 6vw);
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
    animation: cubeRotate 10s linear infinite;
}

@keyframes cubeRotate {

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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    padding: min(1vh, 1vw);
}

.hero {
    padding: min(6em) !important;
    display: grid;
    grid-template-areas:
        'firstname'
        'secondname'
        'profession';
    gap: min(12.5vh, 12.5vw);
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
    text-indent: min(18vh, 18vw);
}

.section__name {
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
    width: 500vw;
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
    border: min(1vh, 1vw) #2f3640 solid;
    background-color: white;
    padding: min(1vh, 1vw);
}

.preview {
    display: grid;
    width: min-content;
}

img {
    display: grid;
}

.description {
    display: grid;
    padding: min(1vh, 1vw);
}

.contacts {
    border: 1px grey solid;
    opacity: 0;
}

.contacts__panel {
    padding: 3rem;
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: center;
    gap: 3rem;
}

.mail {}

.github {}

footer {
    display: grid;
    opacity: 0;
}

.verticalLine {
    display: grid;
}

@media screen and (min-aspect-ratio: 0.9/1) {
    .project {
        justify-content: space-between;
        align-items: center;
        grid-template-columns: 1fr min-content 1fr;
    }

    .verticalLine {
        width: 1vh;
        height: 75%;
        border-right: 1px solid #2f3640;
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

    .description {
        display: grid;
        padding: 1vw;
    }

}

.visible__main {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    transition: background-image 4s ease-in-out;
}

.visible__section {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.show__hero {
    transform: translate(0vw);
    opacity: 1;
    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;
}`, "",{"version":3,"sources":["webpack://./src/views/css/style.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;;IAElB,wBAAwB;IACxB,gBAAgB;IAChB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA,MAAM;;AAEN;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb;qBACiB;IACjB,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,yCAAyC;AAC7C;;AAEA;;IAEI;;QAEI,kCAAkC;QAClC,0BAA0B;IAC9B;;IAEA;;QAEI,gCAAgC;QAChC,wBAAwB;IAC5B;AACJ;;AAEA;IACI,iBAAiB;IACjB,6CAA6C;IAC7C,eAAe;AACnB;;AAEA;IACI,aAAa;IACb;;;;kBAIc;IACd,yDAA0C;IAC1C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb;;;oBAGgB;IAChB,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;;;IAGI,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,UAAU;IACV,4BAA4B;AAChC;;AAEA;;IAEI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,4BAA4B;IAC5B,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,wDAAwD;IACxD,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,sBAAsB;IACtB,2CAA2C;IAC3C,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,SAAS;AACb;;AAEA,OAAO;;AAEP,SAAS;;AAET;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,8BAA8B;QAC9B,mBAAmB;QACnB,0CAA0C;IAC9C;;IAEA;QACI,UAAU;QACV,WAAW;QACX,+BAA+B;IACnC;AACJ;;AAEA;IACI;QACI,qBAAqB;QACrB,0CAA0C;IAC9C;;IAEA;QACI,aAAa;QACb,kBAAkB;IACtB;;IAEA;QACI,UAAU;QACV,SAAS;QACT,gBAAgB;QAChB,gCAAgC;QAChC,oBAAoB;IACxB;;IAEA;QACI,aAAa;QACb,YAAY;IAChB;;AAEJ;;AAEA;IACI,yDAA2D;IAC3D,2CAA2C;AAC/C;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,UAAU;IACV,8DAA8D;AAClE","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: min-content;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: Roboto;\n    font-size: min(1.8vh, 1.8vw);\n    color: #2f3640;\n    line-height: 1.5em;\n\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n    min-height: 240px;\n    min-width: 80px;\n}\n\nhtml::-webkit-scrollbar {\n    visibility: hidden;\n    width: 0;\n}\n\na {\n    outline: none;\n    text-decoration: none;\n}\n\nh3 {\n    margin: 0 0 2em 0.75em;\n}\n\np {\n    margin: 0 0 0.75em 1em;\n}\n\nul {\n    padding-left: 4em;\n}\n\nspan {\n    padding-left: min(1vh, 1vw);\n    padding-right: min(1vh, 1vw);\n}\n\nbody {}\n\n.section {\n    display: grid;\n    padding: min(3vh, 7.5vw);\n}\n\nheader {\n    display: grid;\n    grid-template-areas:\n        'logo navbar';\n    align-items: center;\n    justify-content: space-between;\n    opacity: 0;\n}\n\n.logo,\n.nav__links {\n    display: grid;\n    margin: min(3vh, 3vw);\n    width: max-content;\n}\n\n.logo {\n    grid-area: logo;\n    font-size: min(6vh, 6vw);\n    grid-template-columns: min-content min-content;\n}\n\n.logo>span {\n    width: min-content;\n    padding-left: 0vh;\n    padding-right: 0vh;\n}\n\n.first__letter {\n    position: relative;\n    transform-style: preserve-3d;\n    animation: cubeRotate 10s linear infinite;\n}\n\n@keyframes cubeRotate {\n\n    0%,\n    40% {\n        -webkit-transform: rotateY(360deg);\n        transform: rotateY(360deg);\n    }\n\n    60%,\n    100% {\n        -webkit-transform: rotateY(0deg);\n        transform: rotateY(0deg);\n    }\n}\n\n.nav__links {\n    grid-area: navbar;\n    grid-template-columns: repeat(4, max-content);\n    font-size: 1rem;\n}\n\nmain {\n    display: grid;\n    grid-template-areas:\n        'hero'\n        'about'\n        'projects'\n        'contacts';\n    background-image: url(../images/white.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n    padding: min(1vh, 1vw);\n}\n\n.hero {\n    padding: min(6em) !important;\n    display: grid;\n    grid-template-areas:\n        'firstname'\n        'secondname'\n        'profession';\n    gap: min(12.5vh, 12.5vw);\n    overflow: hidden;\n}\n\n.firstname,\n.secondname,\n.profession {\n    display: grid;\n    width: max-content;\n    transform: translate(100vw);\n    opacity: 0;\n    padding-right: min(1vh, 1vw);\n}\n\n.firstname,\n.secondname {\n    font-size: min(6em);\n    font-weight: 300;\n}\n\n.secondname {\n    text-indent: min(11.3vh, 11.3vw);\n}\n\n.profession {\n    font-size: min(4em);\n    text-indent: min(18vh, 18vw);\n}\n\n.section__name {\n    padding-bottom: 1em;\n    font-size: min(4.8vh, 4.8vw);\n}\n\n.about {\n    display: grid;\n    border: min(1vh, 1vw) #2f3640 solid;\n    background-color: white;\n    opacity: 0;\n}\n\n.skills-panel {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    align-items: center;\n    justify-self: center;\n    margin-top: 2rem;\n}\n\n.arrow {\n    background-color: white;\n}\n\n.arrow:hover {\n    fill: aqua;\n}\n\n.carousel {\n    display: grid;\n    position: relative;\n    width: min(59vh, 59vw);\n    padding: min(4vh, 4vw);\n    border-radius: min(1vh, 1vw);\n    justify-self: center;\n    overflow: hidden;\n}\n\n.gallery {\n    display: grid;\n    position: relative;\n    width: 500vw;\n    right: min(17.5vh, 17.5vw);\n}\n\n.gallery ul {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, min(15vh, 15vw));\n    align-content: center;\n    list-style: none;\n    width: inherit;\n    border: 1px #2f3640 solid;\n}\n\n.gallery li {\n    display: grid;\n    padding: min(2vh, 1vw);\n    align-content: center;\n    width: min(12vh, 12vw);\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    justify-items: center;\n    gap: min(1vh, 1vw);\n    font-size: min(2.5vh, 2.5vw);\n}\n\n.projects {\n    display: grid;\n    row-gap: 3em;\n    align-content: center;\n    opacity: 0;\n}\n\n.project {\n    display: grid;\n    border: min(1vh, 1vw) #2f3640 solid;\n    background-color: white;\n    padding: min(1vh, 1vw);\n}\n\n.preview {\n    display: grid;\n    width: min-content;\n}\n\nimg {\n    display: grid;\n}\n\n.description {\n    display: grid;\n    padding: min(1vh, 1vw);\n}\n\n.contacts {\n    border: 1px grey solid;\n    opacity: 0;\n}\n\n.contacts__panel {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: min-content min-content;\n    justify-content: center;\n    gap: 3rem;\n}\n\n.mail {}\n\n.github {}\n\nfooter {\n    display: grid;\n    opacity: 0;\n}\n\n.verticalLine {\n    display: grid;\n}\n\n@media screen and (min-aspect-ratio: 0.9/1) {\n    .project {\n        justify-content: space-between;\n        align-items: center;\n        grid-template-columns: 1fr min-content 1fr;\n    }\n\n    .verticalLine {\n        width: 1vh;\n        height: 75%;\n        border-right: 1px solid #2f3640;\n    }\n}\n\n@media screen and (max-aspect-ratio: 0.9/1) {\n    .project {\n        justify-items: center;\n        grid-template-rows: repeat(3, min-content);\n    }\n\n    .preview {\n        display: grid;\n        width: min-content;\n    }\n\n    .verticalLine {\n        width: 75%;\n        height: 0;\n        padding-top: 1vw;\n        border-bottom: 1px solid #2f3640;\n        justify-self: center;\n    }\n\n    .description {\n        display: grid;\n        padding: 1vw;\n    }\n\n}\n\n.visible__main {\n    background-image: url(../images/WaveLineBackgroundFree.jpg);\n    transition: background-image 4s ease-in-out;\n}\n\n.visible__section {\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n}\n\n.show__hero {\n    transform: translate(0vw);\n    opacity: 1;\n    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;\n}"],"sourceRoot":""}]);
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
            //carousel.right();
        }, 3000);
    }

    let interval = getInterval();

    _views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.leftButton.addEventListener('click', async () => {
        clearInterval(interval);
        (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.changeArrowsAvailability)();
        //carousel.left()
        interval = getInterval();
    })

    _views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.rightButton.addEventListener('click', async () => {
        clearInterval(interval);
        (0,_views_nodes_stylePresets_carousel__WEBPACK_IMPORTED_MODULE_1__.changeArrowsAvailability)();
        //carousel.right();
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
/* harmony import */ var _models_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/carousel */ "./src/models/carousel.js");
/* harmony import */ var _controllers_listeners_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/listeners/carousel */ "./src/controllers/listeners/carousel.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/helper */ "./src/helper/helper.js");





(0,_controllers_listeners_carousel__WEBPACK_IMPORTED_MODULE_2__.setEventListenersForCarousel)();

const header = document.querySelector('header');
const firstName = document.querySelector('.firstname');
const secondName = document.querySelector('.secondname');
const profession = document.querySelector('.profession');
const main = document.querySelector('main');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('footer');

await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(200);
header.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
main.classList.add('visible__main');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(200);
firstName.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
secondName.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
profession.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(4000);
document.querySelector('html').style.overflowY = 'auto';
about.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
projects.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
contacts.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
footer.classList.add('visible__section');

document.querySelectorAll('section').forEach(section => {
    //section.style.border = 'min(1px) red solid'
})
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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

/***/ "./src/views/images/WaveLineBackgroundFree.jpg":
/*!*****************************************************!*\
  !*** ./src/views/images/WaveLineBackgroundFree.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8bf42aa7ef506f10b1b.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx3SEFBc0M7QUFDbEYsNENBQTRDLDBKQUF1RDtBQUNuRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFL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VUFBVSx1REFBTztBQUNqQjtBQUNBOztBQUVPO0FBQ1A7QUFDQSxVQUFVLHVEQUFPO0FBQ2pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHNDQUFzQyxlQUFlO0FBQ3JELHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHNDQUFzQyxlQUFlO0FBQ3JELHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFVBQVUsdURBQU87QUFDakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3ZpZXdzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3ZpZXdzL2Nzcy9zdHlsZS5jc3M/OGMzZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9oZWxwZXIvaGVscGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL21vZGVscy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9ub2Rlcy9zdHlsZVByZXNldHMvY2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvV2F2ZUxpbmVCYWNrZ3JvdW5kRnJlZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zaXplOiBtaW4oMS44dmgsIDEuOHZ3KTtcbiAgICBjb2xvcjogIzJmMzY0MDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG5cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLyogRmlyZWZveCAqL1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMDtcbn1cblxuYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMC43NWVtO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDAgMCAwLjc1ZW0gMWVtO1xufVxuXG51bCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogbWluKDF2aCwgMXZ3KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xufVxuXG5ib2R5IHt9XG5cbi5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigzdmgsIDcuNXZ3KTtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdsb2dvIG5hdmJhcic7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmxvZ28sXG4ubmF2X19saW5rcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IG1pbigzdmgsIDN2dyk7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4ubG9nbyB7XG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xuICAgIGZvbnQtc2l6ZTogbWluKDZ2aCwgNnZ3KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xufVxuXG4ubG9nbz5zcGFuIHtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwdmg7XG4gICAgcGFkZGluZy1yaWdodDogMHZoO1xufVxuXG4uZmlyc3RfX2xldHRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgYW5pbWF0aW9uOiBjdWJlUm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY3ViZVJvdGF0ZSB7XG5cbiAgICAwJSxcbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICB9XG5cbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgfVxufVxuXG4ubmF2X19saW5rcyB7XG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnaGVybydcbiAgICAgICAgJ2Fib3V0J1xuICAgICAgICAncHJvamVjdHMnXG4gICAgICAgICdjb250YWN0cyc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbn1cblxuLmhlcm8ge1xuICAgIHBhZGRpbmc6IG1pbig2ZW0pICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnZmlyc3RuYW1lJ1xuICAgICAgICAnc2Vjb25kbmFtZSdcbiAgICAgICAgJ3Byb2Zlc3Npb24nO1xuICAgIGdhcDogbWluKDEyLjV2aCwgMTIuNXZ3KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmlyc3RuYW1lLFxuLnNlY29uZG5hbWUsXG4ucHJvZmVzc2lvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZy1yaWdodDogbWluKDF2aCwgMXZ3KTtcbn1cblxuLmZpcnN0bmFtZSxcbi5zZWNvbmRuYW1lIHtcbiAgICBmb250LXNpemU6IG1pbig2ZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zZWNvbmRuYW1lIHtcbiAgICB0ZXh0LWluZGVudDogbWluKDExLjN2aCwgMTEuM3Z3KTtcbn1cblxuLnByb2Zlc3Npb24ge1xuICAgIGZvbnQtc2l6ZTogbWluKDRlbSk7XG4gICAgdGV4dC1pbmRlbnQ6IG1pbigxOHZoLCAxOHZ3KTtcbn1cblxuLnNlY3Rpb25fX25hbWUge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiBtaW4oNC44dmgsIDQuOHZ3KTtcbn1cblxuLmFib3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSAjMmYzNjQwIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5za2lsbHMtcGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmFycm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFycm93OmhvdmVyIHtcbiAgICBmaWxsOiBhcXVhO1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBtaW4oNTl2aCwgNTl2dyk7XG4gICAgcGFkZGluZzogbWluKDR2aCwgNHZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMXZoLCAxdncpO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYWxsZXJ5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTAwdnc7XG4gICAgcmlnaHQ6IG1pbigxNy41dmgsIDE3LjV2dyk7XG59XG5cbi5nYWxsZXJ5IHVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW4oMTV2aCwgMTV2dykpO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGJvcmRlcjogMXB4ICMyZjM2NDAgc29saWQ7XG59XG5cbi5nYWxsZXJ5IGxpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDF2dyk7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4oMTJ2aCwgMTJ2dyk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiBtaW4oMXZoLCAxdncpO1xuICAgIGZvbnQtc2l6ZTogbWluKDIuNXZoLCAyLjV2dyk7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICByb3ctZ2FwOiAzZW07XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSAjMmYzNjQwIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG59XG5cbi5wcmV2aWV3IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuaW1nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbn1cblxuLmNvbnRhY3RzIHtcbiAgICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jb250YWN0c19fcGFuZWwge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbn1cblxuLm1haWwge31cblxuLmdpdGh1YiB7fVxuXG5mb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnZlcnRpY2FsTGluZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDAuOS8xKSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50IDFmcjtcbiAgICB9XG5cbiAgICAudmVydGljYWxMaW5lIHtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyZjM2NDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMC45LzEpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIH1cblxuICAgIC5wcmV2aWV3IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIH1cblxuICAgIC52ZXJ0aWNhbExpbmUge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxdnc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmYzNjQwO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwYWRkaW5nOiAxdnc7XG4gICAgfVxuXG59XG5cbi52aXNpYmxlX19tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSA0cyBlYXNlLWluLW91dDtcbn1cblxuLnZpc2libGVfX3NlY3Rpb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvd19faGVybyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dCwgb3BhY2l0eSAxLjZzIGVhc2UtaW4tb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7O0lBRWxCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQSxNQUFNOztBQUVOO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtxQkFDaUI7SUFDakIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FB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Q0kseURBQTJEO0lBQzNELDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDhEQUE4RDtBQUNsRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgZm9udC1zaXplOiBtaW4oMS44dmgsIDEuOHZ3KTtcXG4gICAgY29sb3I6ICMyZjM2NDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG5cXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIC8qIEZpcmVmb3ggKi9cXG4gICAgbWluLWhlaWdodDogMjQwcHg7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG59XFxuXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG5hIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMCAwIDJlbSAwLjc1ZW07XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDAgMCAwLjc1ZW0gMWVtO1xcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmctbGVmdDogNGVtO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMXZoLCAxdncpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xcbn1cXG5cXG5ib2R5IHt9XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCA3LjV2dyk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnbG9nbyBuYXZiYXInO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5sb2dvLFxcbi5uYXZfX2xpbmtzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiBtaW4oM3ZoLCAzdncpO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xcbiAgICBmb250LXNpemU6IG1pbig2dmgsIDZ2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxufVxcblxcbi5sb2dvPnNwYW4ge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMHZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwdmg7XFxufVxcblxcbi5maXJzdF9fbGV0dGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICBhbmltYXRpb246IGN1YmVSb3RhdGUgMTBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBjdWJlUm90YXRlIHtcXG5cXG4gICAgMCUsXFxuICAgIDQwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgNjAlLFxcbiAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi5uYXZfX2xpbmtzIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdoZXJvJ1xcbiAgICAgICAgJ2Fib3V0J1xcbiAgICAgICAgJ3Byb2plY3RzJ1xcbiAgICAgICAgJ2NvbnRhY3RzJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy93aGl0ZS5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIHBhZGRpbmc6IG1pbig2ZW0pICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnZmlyc3RuYW1lJ1xcbiAgICAgICAgJ3NlY29uZG5hbWUnXFxuICAgICAgICAncHJvZmVzc2lvbic7XFxuICAgIGdhcDogbWluKDEyLjV2aCwgMTIuNXZ3KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0bmFtZSxcXG4uc2Vjb25kbmFtZSxcXG4ucHJvZmVzc2lvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwdncpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMXZoLCAxdncpO1xcbn1cXG5cXG4uZmlyc3RuYW1lLFxcbi5zZWNvbmRuYW1lIHtcXG4gICAgZm9udC1zaXplOiBtaW4oNmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnNlY29uZG5hbWUge1xcbiAgICB0ZXh0LWluZGVudDogbWluKDExLjN2aCwgMTEuM3Z3KTtcXG59XFxuXFxuLnByb2Zlc3Npb24ge1xcbiAgICBmb250LXNpemU6IG1pbig0ZW0pO1xcbiAgICB0ZXh0LWluZGVudDogbWluKDE4dmgsIDE4dncpO1xcbn1cXG5cXG4uc2VjdGlvbl9fbmFtZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogbWluKDQuOHZoLCA0Ljh2dyk7XFxufVxcblxcbi5hYm91dCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSAjMmYzNjQwIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNraWxscy1wYW5lbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgICBmaWxsOiBhcXVhO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBtaW4oNTl2aCwgNTl2dyk7XFxuICAgIHBhZGRpbmc6IG1pbig0dmgsIDR2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDF2dyk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwMHZ3O1xcbiAgICByaWdodDogbWluKDE3LjV2aCwgMTcuNXZ3KTtcXG59XFxuXFxuLmdhbGxlcnkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWluKDE1dmgsIDE1dncpKTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAxcHggIzJmMzY0MCBzb2xpZDtcXG59XFxuXFxuLmdhbGxlcnkgbGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAxdncpO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTJ2aCwgMTJ2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDF2aCwgMXZ3KTtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41dmgsIDIuNXZ3KTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcm93LWdhcDogM2VtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpICMyZjM2NDAgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuaW1nIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gICAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNvbnRhY3RzX19wYW5lbCB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5tYWlsIHt9XFxuXFxuLmdpdGh1YiB7fVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi52ZXJ0aWNhbExpbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMC45LzEpIHtcXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50IDFmcjtcXG4gICAgfVxcblxcbiAgICAudmVydGljYWxMaW5lIHtcXG4gICAgICAgIHdpZHRoOiAxdmg7XFxuICAgICAgICBoZWlnaHQ6IDc1JTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyZjM2NDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDAuOS8xKSB7XFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgfVxcblxcbiAgICAucHJldmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbExpbmUge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxdnc7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMzY0MDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGFkZGluZzogMXZ3O1xcbiAgICB9XFxuXFxufVxcblxcbi52aXNpYmxlX19tYWluIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9XYXZlTGluZUJhY2tncm91bmRGcmVlLmpwZyk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi52aXNpYmxlX19zZWN0aW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2hvd19faGVybyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dCwgb3BhY2l0eSAxLjZzIGVhc2UtaW4tb3V0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5LCBsZWZ0QnV0dG9uLCByaWdodEJ1dHRvbiB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9zdHlsZVByZXNldHMvY2Fyb3VzZWxcIjtcblxuZXhwb3J0IGNvbnN0IHNldEV2ZW50TGlzdGVuZXJzRm9yQ2Fyb3VzZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBhd2FpdCBDYXJvdXNlbCgpO1xuICAgIGNvbnN0IGdldEludGVydmFsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgICAgICAvL2Nhcm91c2VsLnJpZ2h0KCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG5cbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIC8vY2Fyb3VzZWwubGVmdCgpXG4gICAgICAgIGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICB9KVxuXG4gICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgLy9jYXJvdXNlbC5yaWdodCgpO1xuICAgICAgICBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgfSlcbn1cbiIsImV4cG9ydCBjb25zdCB0aW1lb3V0ID0gKG1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufSIsImltcG9ydCAnLi92aWV3cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi9tb2RlbHMvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgc2V0RXZlbnRMaXN0ZW5lcnNGb3JDYXJvdXNlbCB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2Nhcm91c2VsJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICcuL2hlbHBlci9oZWxwZXInO1xuXG5zZXRFdmVudExpc3RlbmVyc0ZvckNhcm91c2VsKCk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0bmFtZScpO1xuY29uc3Qgc2Vjb25kTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRuYW1lJyk7XG5jb25zdCBwcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2Zlc3Npb24nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblxuYXdhaXQgdGltZW91dCgyMDApO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTtcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fbWFpbicpO1xuYXdhaXQgdGltZW91dCgyMDApO1xuZmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3dfX2hlcm8nKVxuYXdhaXQgdGltZW91dCgxMDApO1xuc2Vjb25kTmFtZS5jbGFzc0xpc3QuYWRkKCdzaG93X19oZXJvJylcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbnByb2Zlc3Npb24uY2xhc3NMaXN0LmFkZCgnc2hvd19faGVybycpXG5hd2FpdCB0aW1lb3V0KDQwMDApO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbmFib3V0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTtcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbnByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTtcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbmNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTtcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbmZvb3Rlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIC8vc2VjdGlvbi5zdHlsZS5ib3JkZXIgPSAnbWluKDFweCkgcmVkIHNvbGlkJ1xufSkiLCJpbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IGxlZnRUcmFuc2l0aW9uLCByZW1vdmVUcmFuc2l0aW9uTGVmdEJ1dHRvbiwgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uLCByaWdodFRyYW5zaXRpb24sIHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uLCBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24gfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvc3R5bGVQcmVzZXRzL2Nhcm91c2VsXCI7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XG4gICAgbGV0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnkgdWwnKTtcbiAgICBsZXQgc2tpbGxzID0gQXJyYXkuZnJvbShjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKTtcblxuICAgIGNvbnN0IGxlZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxlZnRUcmFuc2l0aW9uKCk7XG4gICAgICAgIGxlZnRNYXJrdXAoKTtcbiAgICAgICAgZmlsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCByaWdodFRyYW5zaXRpb24oKTtcbiAgICAgICAgcmlnaHRNYXJrVXAoKTtcbiAgICAgICAgZmlsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBjYXJvdXNlbC5yZW1vdmVDaGlsZChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBza2lsbHMuZm9yRWFjaChza2lsbCA9PiB7XG4gICAgICAgICAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChza2lsbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbGVmdE1hcmt1cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2tpbGxzLnVuc2hpZnQoc2tpbGxzW3NraWxscy5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNraWxscy5wb3AoKTtcbiAgICB9XG5cbiAgICBjb25zdCByaWdodE1hcmtVcCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2tpbGxzW3NraWxscy5sZW5ndGhdID0gc2tpbGxzWzBdO1xuICAgICAgICBza2lsbHMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgZmlsbCwgZ2V0Tm9kZSB9O1xufSIsImltcG9ydCB7IHRpbWVvdXQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uU3BlZWQgPSA1MDA7XG5leHBvcnQgY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2Jyk7XG5leHBvcnQgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnkgdWwnKTtcblxuZXhwb3J0IGNvbnN0IHJpZ2h0VHJhbnNpdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24oKTtcbiAgICBhd2FpdCB0aW1lb3V0KGFuaW1hdGlvblNwZWVkKTtcbiAgICByZW1vdmVUcmFuc2l0aW9uUmlnaHRCdXR0b24oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxlZnRUcmFuc2l0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHJlbW92ZVRyYW5zaXRpb25MZWZ0QnV0dG9uKCk7XG4gICAgYXdhaXQgdGltZW91dCgxKTtcbiAgICBzZXRUcmFuc2l0aW9uTGVmdEJ1dHRvbigpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhbnNpdGlvbkxlZnRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnbWluKDMyLjV2aCwzMi41dncpJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICcnO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ21pbigxNy41dmgsMTcuNXZ3KSc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ21pbigzMi41dmgsMzIuNXZ3KSc7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBcnJvd3NQb2ludGVyRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxlZnRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICByaWdodEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QXJyb3dzUG9pbnRlckV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZWZ0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgcmlnaHRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSA9IGFzeW5jICgpID0+IHtcbiAgICByZW1vdmVBcnJvd3NQb2ludGVyRXZlbnRzKCk7XG4gICAgYXdhaXQgdGltZW91dChhbmltYXRpb25TcGVlZCk7XG4gICAgc2V0QXJyb3dzUG9pbnRlckV2ZW50cygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==