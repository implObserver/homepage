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
    font-size: 1.8vh;
    color: #2f3640;
    line-height: 1.5em;
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
    padding-left: 1vh;
    padding-right: 1vh;
    width: max-content;
}

body {
    display: grid;
}

.section {
    display: grid;
    padding: 3em;
}

header {
    display: grid;
    grid-template-areas:
        'logo navbar';
    align-items: center;
}

.logo,
.nav__links {
    display: grid;
    margin: 3vh;
}

.logo {
    grid-area: logo;
    font-size: 6vh;
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
    0%, 40%   {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
    60%, 100% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
}

.nav__links {
    grid-area: navbar;
    grid-template-columns: repeat(4, max-content);
    justify-content: right;
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
}

.hero {
    padding: 6em !important;
    display: grid;
    grid-template-areas:
        'firstname'
        'secondname'
        'profession';
    gap: 5em;
    overflow: hidden;
}

.about {
    margin: 1rem;
    display: grid;
    border: 1vh #2f3640 solid;
    background-color: white;
    opacity: 0;
}

.projects {
    display: grid;
    gap: 3em;
    opacity: 0;
}

.contacts {
    border: 1px grey solid;
    opacity: 0;
}

.firstname,
.secondname,
.profession {
    display: grid;
    width: max-content;
    transform: translate(100vw);
    opacity: 0;
}

.show__hero {
    transform: translate(0vw);
    opacity: 1;
    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;
}

.firstname,
.secondname {
    font-size: 6em;
    font-weight: 300;
}

.secondname {
    text-indent: 11.3vh;
}

.profession {
    font-size: 4em;
    text-indent: 18vh;
}

.section__name {
    padding-bottom: 1em;
    font-size: 4.8vh;
}

.project {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    border: 1vh #2f3640 solid;
    padding: 1vh;
    align-items: center;
    background-color: white;
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
    padding: 1vh;
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
    width: 59vh;
    padding: 1vh 4vh;
    border-radius: 1vh;
    justify-self: center;
    overflow: hidden;
}

.gallery {
    display: grid;
    position: relative;
    width: 500vw;
    right: 17.5vh;
}

.gallery ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 15vh);
    align-content: center;
    list-style: none;
    width: inherit;
    border: 1px #2f3640 solid;
}

.gallery li {
    display: grid;
    padding: 2vh;
    align-content: center;
    width: 12vh;
    grid-template-rows: min-content min-content;
    justify-content: center;
    justify-items: center;
    gap: 1vh;
}

.contacts__panel {
    padding: 3rem;
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: center;
    gap: 3rem;
}

.hero,
.projects {}

.visible__main {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    transition: background-image 0.8s ease-in-out;
}

.visible__section {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

footer {
    opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/views/css/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: min-content;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: Roboto;\n    font-size: 1.8vh;\n    color: #2f3640;\n    line-height: 1.5em;\n}\n\na {\n    outline: none;\n    text-decoration: none;\n}\n\nh3 {\n    margin: 0 0 2em 0.75em;\n}\n\np {\n    margin: 0 0 0.75em 1em;\n}\n\nul {\n    padding-left: 4em;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    width: max-content;\n}\n\nbody {\n    display: grid;\n}\n\n.section {\n    display: grid;\n    padding: 3em;\n}\n\nheader {\n    display: grid;\n    grid-template-areas:\n        'logo navbar';\n    align-items: center;\n}\n\n.logo,\n.nav__links {\n    display: grid;\n    margin: 3vh;\n}\n\n.logo {\n    grid-area: logo;\n    font-size: 6vh;\n    grid-template-columns: min-content min-content;\n}\n\n.logo>span {\n    width: min-content;\n    padding-left: 0vh;\n    padding-right: 0vh;\n}\n\n.first__letter {\n    position: relative;\n    transform-style: preserve-3d;\n    animation: cubeRotate 10s linear infinite;\n}\n\n@keyframes cubeRotate {\n    0%, 40%   {\n        -webkit-transform: rotateY(360deg);\n        transform: rotateY(360deg);\n    }\n    60%, 100% {\n        -webkit-transform: rotateY(0deg);\n        transform: rotateY(0deg);\n    }\n}\n\n.nav__links {\n    grid-area: navbar;\n    grid-template-columns: repeat(4, max-content);\n    justify-content: right;\n}\n\nmain {\n    display: grid;\n    grid-template-areas:\n        'hero'\n        'about'\n        'projects'\n        'contacts';\n    background-image: url(../images/white.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\n.hero {\n    padding: 6em !important;\n    display: grid;\n    grid-template-areas:\n        'firstname'\n        'secondname'\n        'profession';\n    gap: 5em;\n    overflow: hidden;\n}\n\n.about {\n    margin: 1rem;\n    display: grid;\n    border: 1vh #2f3640 solid;\n    background-color: white;\n    opacity: 0;\n}\n\n.projects {\n    display: grid;\n    gap: 3em;\n    opacity: 0;\n}\n\n.contacts {\n    border: 1px grey solid;\n    opacity: 0;\n}\n\n.firstname,\n.secondname,\n.profession {\n    display: grid;\n    width: max-content;\n    transform: translate(100vw);\n    opacity: 0;\n}\n\n.show__hero {\n    transform: translate(0vw);\n    opacity: 1;\n    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;\n}\n\n.firstname,\n.secondname {\n    font-size: 6em;\n    font-weight: 300;\n}\n\n.secondname {\n    text-indent: 11.3vh;\n}\n\n.profession {\n    font-size: 4em;\n    text-indent: 18vh;\n}\n\n.section__name {\n    padding-bottom: 1em;\n    font-size: 4.8vh;\n}\n\n.project {\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 1fr 1fr;\n    align-items: start;\n    border: 1vh #2f3640 solid;\n    padding: 1vh;\n    align-items: center;\n    background-color: white;\n}\n\n.preview {\n    display: grid;\n    width: min-content;\n}\n\nimg {\n    display: grid;\n}\n\n.description {\n    display: grid;\n    padding: 1vh;\n}\n\n.skills-panel {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    align-items: center;\n    justify-self: center;\n    margin-top: 2rem;\n}\n\n.arrow {\n    background-color: white;\n}\n\n.arrow:hover {\n    fill: aqua;\n}\n\n.carousel {\n    display: grid;\n    position: relative;\n    width: 59vh;\n    padding: 1vh 4vh;\n    border-radius: 1vh;\n    justify-self: center;\n    overflow: hidden;\n}\n\n.gallery {\n    display: grid;\n    position: relative;\n    width: 500vw;\n    right: 17.5vh;\n}\n\n.gallery ul {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 15vh);\n    align-content: center;\n    list-style: none;\n    width: inherit;\n    border: 1px #2f3640 solid;\n}\n\n.gallery li {\n    display: grid;\n    padding: 2vh;\n    align-content: center;\n    width: 12vh;\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    justify-items: center;\n    gap: 1vh;\n}\n\n.contacts__panel {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: min-content min-content;\n    justify-content: center;\n    gap: 3rem;\n}\n\n.hero,\n.projects {}\n\n.visible__main {\n    background-image: url(../images/WaveLineBackgroundFree.jpg);\n    transition: background-image 0.8s ease-in-out;\n}\n\n.visible__section {\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n}\n\nfooter {\n    opacity: 0;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _models_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/carousel */ "./src/models/carousel.js");
/* harmony import */ var _controllers_listeners_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/listeners/carousel */ "./src/controllers/listeners/carousel.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/helper */ "./src/helper/helper.js");





(0,_controllers_listeners_carousel__WEBPACK_IMPORTED_MODULE_2__.setEventListenersForCarousel)();

const firstName = document.querySelector('.firstname');
const secondName = document.querySelector('.secondname');
const profession = document.querySelector('.profession');
const main = document.querySelector('main');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contacts = document.querySelector('.contacts');
const footer = document.querySelector('footer');

await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(1);
main.classList.add('visible__main');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(200);
firstName.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
secondName.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
profession.classList.add('show__hero')
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(1000);
about.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
projects.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
contacts.classList.add('visible__section');
await (0,_helper_helper__WEBPACK_IMPORTED_MODULE_3__.timeout)(100);
footer.classList.add('visible__section');
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
    wrapper.style.right = '32.5vh';
}

const setTransitionLeftButton = async () => {
    wrapper.style.transition = `all ${animationSpeed}ms ease-out`;
    carousel.style.transition = `all ${animationSpeed}ms ease-out`;
    wrapper.style.right = '';
}

const removeTransitionRightButton = async () => {
    wrapper.style.transition = '';
    carousel.style.transition = '';
    wrapper.style.right = '17.5vh';
}

const setTransitionRightButton = async () => {
    wrapper.style.transition = `all ${animationSpeed}ms ease-out`;
    carousel.style.transition = `all ${animationSpeed}ms ease-out`;
    wrapper.style.right = '32.5vh';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx3SEFBc0M7QUFDbEYsNENBQTRDLDBKQUF1RDtBQUNuRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLG1EQUFtRCxpQkFBaUIsZ0JBQWdCLGdCQUFnQiwwQkFBMEIsNkJBQTZCLEdBQUcsVUFBVSwwQkFBMEIsdUJBQXVCLHFCQUFxQix5QkFBeUIsR0FBRyxPQUFPLG9CQUFvQiw0QkFBNEIsR0FBRyxRQUFRLDZCQUE2QixHQUFHLE9BQU8sNkJBQTZCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxVQUFVLHdCQUF3Qix5QkFBeUIseUJBQXlCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxjQUFjLG9CQUFvQixtQkFBbUIsR0FBRyxZQUFZLG9CQUFvQixrREFBa0QsMEJBQTBCLEdBQUcseUJBQXlCLG9CQUFvQixrQkFBa0IsR0FBRyxXQUFXLHNCQUFzQixxQkFBcUIscURBQXFELEdBQUcsZ0JBQWdCLHlCQUF5Qix3QkFBd0IseUJBQXlCLEdBQUcsb0JBQW9CLHlCQUF5QixtQ0FBbUMsZ0RBQWdELEdBQUcsMkJBQTJCLGlCQUFpQiw2Q0FBNkMscUNBQXFDLE9BQU8saUJBQWlCLDJDQUEyQyxtQ0FBbUMsT0FBTyxHQUFHLGlCQUFpQix3QkFBd0Isb0RBQW9ELDZCQUE2QixHQUFHLFVBQVUsb0JBQW9CLG9HQUFvRyxpREFBaUQsNkJBQTZCLG1DQUFtQyxtQ0FBbUMseUNBQXlDLEdBQUcsV0FBVyw4QkFBOEIsb0JBQW9CLDRGQUE0RixlQUFlLHVCQUF1QixHQUFHLFlBQVksbUJBQW1CLG9CQUFvQixnQ0FBZ0MsOEJBQThCLGlCQUFpQixHQUFHLGVBQWUsb0JBQW9CLGVBQWUsaUJBQWlCLEdBQUcsZUFBZSw2QkFBNkIsaUJBQWlCLEdBQUcsNENBQTRDLG9CQUFvQix5QkFBeUIsa0NBQWtDLGlCQUFpQixHQUFHLGlCQUFpQixnQ0FBZ0MsaUJBQWlCLHFFQUFxRSxHQUFHLDhCQUE4QixxQkFBcUIsdUJBQXVCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLGlCQUFpQixxQkFBcUIsd0JBQXdCLEdBQUcsb0JBQW9CLDBCQUEwQix1QkFBdUIsR0FBRyxjQUFjLG9CQUFvQixxQ0FBcUMscUNBQXFDLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLDBCQUEwQiw4QkFBOEIsR0FBRyxjQUFjLG9CQUFvQix5QkFBeUIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0IsbUJBQW1CLEdBQUcsbUJBQW1CLG9CQUFvQixvREFBb0QsMEJBQTBCLDJCQUEyQix1QkFBdUIsR0FBRyxZQUFZLDhCQUE4QixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLG9CQUFvQix5QkFBeUIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsMkJBQTJCLHVCQUF1QixHQUFHLGNBQWMsb0JBQW9CLHlCQUF5QixtQkFBbUIsb0JBQW9CLEdBQUcsaUJBQWlCLG9CQUFvQixvREFBb0QsNEJBQTRCLHVCQUF1QixxQkFBcUIsZ0NBQWdDLEdBQUcsaUJBQWlCLG9CQUFvQixtQkFBbUIsNEJBQTRCLGtCQUFrQixrREFBa0QsOEJBQThCLDRCQUE0QixlQUFlLEdBQUcsc0JBQXNCLG9CQUFvQixvQkFBb0IscURBQXFELDhCQUE4QixnQkFBZ0IsR0FBRyx3QkFBd0Isb0JBQW9CLGtFQUFrRSxvREFBb0QsR0FBRyx1QkFBdUIsaUJBQWlCLDJDQUEyQyxHQUFHLFlBQVksaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ2xvTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2pTMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpRDtBQUMyRDs7QUFFckc7QUFDUCwyQkFBMkIsMERBQVE7QUFDbkM7QUFDQTtBQUNBLFlBQVksNEZBQXdCO0FBQ3BDO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLElBQUksMEVBQVU7QUFDZDtBQUNBLFFBQVEsNEZBQXdCO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksMkVBQVc7QUFDZjtBQUNBLFFBQVEsNEZBQXdCO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGK0I7QUFDYztBQUNtQztBQUN0Qzs7QUFFMUMsNkZBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjtBQUNBLE1BQU0sdURBQU87QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0IyQztBQUN3Sjs7QUFFNUw7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtGQUFjO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsbUZBQWU7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDaUQ7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxVQUFVLHVEQUFPO0FBQ2pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFVBQVUsdURBQU87QUFDakI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asc0NBQXNDLGVBQWU7QUFDckQsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asc0NBQXNDLGVBQWU7QUFDckQsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsVUFBVSx1REFBTztBQUNqQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvdmlld3MvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvdmlld3MvY3NzL3N0eWxlLmNzcz84YzNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbW9kZWxzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3ZpZXdzL25vZGVzL3N0eWxlUHJlc2V0cy9jYXJvdXNlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3doaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9XYXZlTGluZUJhY2tncm91bmRGcmVlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDEuOHZoO1xuICAgIGNvbG9yOiAjMmYzNjQwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMC43NWVtO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDAgMCAwLjc1ZW0gMWVtO1xufVxuXG51bCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDNlbTtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdsb2dvIG5hdmJhcic7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28sXG4ubmF2X19saW5rcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDN2aDtcbn1cblxuLmxvZ28ge1xuICAgIGdyaWQtYXJlYTogbG9nbztcbiAgICBmb250LXNpemU6IDZ2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xufVxuXG4ubG9nbz5zcGFuIHtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwdmg7XG4gICAgcGFkZGluZy1yaWdodDogMHZoO1xufVxuXG4uZmlyc3RfX2xldHRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgYW5pbWF0aW9uOiBjdWJlUm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY3ViZVJvdGF0ZSB7XG4gICAgMCUsIDQwJSAgIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgfVxuICAgIDYwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgfVxufVxuXG4ubmF2X19saW5rcyB7XG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2hlcm8nXG4gICAgICAgICdhYm91dCdcbiAgICAgICAgJ3Byb2plY3RzJ1xuICAgICAgICAnY29udGFjdHMnO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uaGVybyB7XG4gICAgcGFkZGluZzogNmVtICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnZmlyc3RuYW1lJ1xuICAgICAgICAnc2Vjb25kbmFtZSdcbiAgICAgICAgJ3Byb2Zlc3Npb24nO1xuICAgIGdhcDogNWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hYm91dCB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiAxdmggIzJmMzY0MCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAzZW07XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNvbnRhY3RzIHtcbiAgICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5maXJzdG5hbWUsXG4uc2Vjb25kbmFtZSxcbi5wcm9mZXNzaW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDB2dyk7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnNob3dfX2hlcm8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMS42cyBlYXNlLWluLW91dDtcbn1cblxuLmZpcnN0bmFtZSxcbi5zZWNvbmRuYW1lIHtcbiAgICBmb250LXNpemU6IDZlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc2Vjb25kbmFtZSB7XG4gICAgdGV4dC1pbmRlbnQ6IDExLjN2aDtcbn1cblxuLnByb2Zlc3Npb24ge1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIHRleHQtaW5kZW50OiAxOHZoO1xufVxuXG4uc2VjdGlvbl9fbmFtZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IDQuOHZoO1xufVxuXG4ucHJvamVjdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBib3JkZXI6IDF2aCAjMmYzNjQwIHNvbGlkO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJldmlldyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbmltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDF2aDtcbn1cblxuLnNraWxscy1wYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYXJyb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICAgIGZpbGw6IGFxdWE7XG59XG5cbi5jYXJvdXNlbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDU5dmg7XG4gICAgcGFkZGluZzogMXZoIDR2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MDB2dztcbiAgICByaWdodDogMTcuNXZoO1xufVxuXG4uZ2FsbGVyeSB1bCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTV2aCk7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggIzJmMzY0MCBzb2xpZDtcbn1cblxuLmdhbGxlcnkgbGkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMnZoO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTJ2aDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDF2aDtcbn1cblxuLmNvbnRhY3RzX19wYW5lbCB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uaGVybyxcbi5wcm9qZWN0cyB7fVxuXG4udmlzaWJsZV9fbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC44cyBlYXNlLWluLW91dDtcbn1cblxuLnZpc2libGVfX3NlY3Rpb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5mb290ZXIge1xuICAgIG9wYWNpdHk6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7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QUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO1dBQ1c7O0FBRVg7SUFDSSx5REFBMkQ7SUFDM0QsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgZm9udC1zaXplOiAxLjh2aDtcXG4gICAgY29sb3I6ICMyZjM2NDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDAgMCAyZW0gMC43NWVtO1xcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwIDAgMC43NWVtIDFlbTtcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRlbTtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogM2VtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2xvZ28gbmF2YmFyJztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28sXFxuLm5hdl9fbGlua3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDN2aDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuICAgIGZvbnQtc2l6ZTogNnZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ubG9nbz5zcGFuIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDB2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMHZoO1xcbn1cXG5cXG4uZmlyc3RfX2xldHRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgYW5pbWF0aW9uOiBjdWJlUm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgY3ViZVJvdGF0ZSB7XFxuICAgIDAlLCA0MCUgICB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxuICAgIH1cXG4gICAgNjAlLCAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi5uYXZfX2xpbmtzIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnaGVybydcXG4gICAgICAgICdhYm91dCdcXG4gICAgICAgICdwcm9qZWN0cydcXG4gICAgICAgICdjb250YWN0cyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvd2hpdGUucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBwYWRkaW5nOiA2ZW0gIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdmaXJzdG5hbWUnXFxuICAgICAgICAnc2Vjb25kbmFtZSdcXG4gICAgICAgICdwcm9mZXNzaW9uJztcXG4gICAgZ2FwOiA1ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5hYm91dCB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyOiAxdmggIzJmMzY0MCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogM2VtO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY29udGFjdHMge1xcbiAgICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZmlyc3RuYW1lLFxcbi5zZWNvbmRuYW1lLFxcbi5wcm9mZXNzaW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDB2dyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaG93X19oZXJvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDEuNnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5maXJzdG5hbWUsXFxuLnNlY29uZG5hbWUge1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnNlY29uZG5hbWUge1xcbiAgICB0ZXh0LWluZGVudDogMTEuM3ZoO1xcbn1cXG5cXG4ucHJvZmVzc2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICB0ZXh0LWluZGVudDogMTh2aDtcXG59XFxuXFxuLnNlY3Rpb25fX25hbWUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDQuOHZoO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGJvcmRlcjogMXZoICMyZjM2NDAgc29saWQ7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcmV2aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG5pbWcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxufVxcblxcbi5za2lsbHMtcGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgZmlsbDogYXF1YTtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTl2aDtcXG4gICAgcGFkZGluZzogMXZoIDR2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbGxlcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA1MDB2dztcXG4gICAgcmlnaHQ6IDE3LjV2aDtcXG59XFxuXFxuLmdhbGxlcnkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTV2aCk7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMXB4ICMyZjM2NDAgc29saWQ7XFxufVxcblxcbi5nYWxsZXJ5IGxpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogMnZoO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMnZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLmNvbnRhY3RzX19wYW5lbCB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5oZXJvLFxcbi5wcm9qZWN0cyB7fVxcblxcbi52aXNpYmxlX19tYWluIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9XYXZlTGluZUJhY2tncm91bmRGcmVlLmpwZyk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC44cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnZpc2libGVfX3NlY3Rpb24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHksIGxlZnRCdXR0b24sIHJpZ2h0QnV0dG9uIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL3N0eWxlUHJlc2V0cy9jYXJvdXNlbFwiO1xuXG5leHBvcnQgY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnNGb3JDYXJvdXNlbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYXJvdXNlbCA9IGF3YWl0IENhcm91c2VsKCk7XG4gICAgY29uc3QgZ2V0SW50ZXJ2YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VBcnJvd3NBdmFpbGFiaWxpdHkoKTtcbiAgICAgICAgICAgIGNhcm91c2VsLnJpZ2h0KCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG5cbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIGNhcm91c2VsLmxlZnQoKVxuICAgICAgICBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgfSlcblxuICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgIGNhcm91c2VsLnJpZ2h0KCk7XG4gICAgICAgIGludGVydmFsID0gZ2V0SW50ZXJ2YWwoKTtcbiAgICB9KVxufVxuIiwiZXhwb3J0IGNvbnN0IHRpbWVvdXQgPSAobXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59IiwiaW1wb3J0ICcuL3ZpZXdzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICcuL21vZGVscy9jYXJvdXNlbCc7XG5pbXBvcnQgeyBzZXRFdmVudExpc3RlbmVyc0ZvckNhcm91c2VsIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJy4vaGVscGVyL2hlbHBlcic7XG5cbnNldEV2ZW50TGlzdGVuZXJzRm9yQ2Fyb3VzZWwoKTtcblxuY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0bmFtZScpO1xuY29uc3Qgc2Vjb25kTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRuYW1lJyk7XG5jb25zdCBwcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2Zlc3Npb24nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblxuYXdhaXQgdGltZW91dCgxKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fbWFpbicpO1xuYXdhaXQgdGltZW91dCgyMDApO1xuZmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3dfX2hlcm8nKVxuYXdhaXQgdGltZW91dCgxMDApO1xuc2Vjb25kTmFtZS5jbGFzc0xpc3QuYWRkKCdzaG93X19oZXJvJylcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbnByb2Zlc3Npb24uY2xhc3NMaXN0LmFkZCgnc2hvd19faGVybycpXG5hd2FpdCB0aW1lb3V0KDEwMDApO1xuYWJvdXQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xucHJvamVjdHMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xuY29udGFjdHMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuYXdhaXQgdGltZW91dCgxMDApO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTsiLCJpbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IGxlZnRUcmFuc2l0aW9uLCByZW1vdmVUcmFuc2l0aW9uTGVmdEJ1dHRvbiwgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uLCByaWdodFRyYW5zaXRpb24sIHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uLCBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24gfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvc3R5bGVQcmVzZXRzL2Nhcm91c2VsXCI7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XG4gICAgbGV0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnkgdWwnKTtcbiAgICBsZXQgc2tpbGxzID0gQXJyYXkuZnJvbShjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKTtcblxuICAgIGNvbnN0IGxlZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxlZnRUcmFuc2l0aW9uKCk7XG4gICAgICAgIGxlZnRNYXJrdXAoKTtcbiAgICAgICAgZmlsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCByaWdodFRyYW5zaXRpb24oKTtcbiAgICAgICAgcmlnaHRNYXJrVXAoKTtcbiAgICAgICAgZmlsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBjYXJvdXNlbC5yZW1vdmVDaGlsZChjYXJvdXNlbC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBza2lsbHMuZm9yRWFjaChza2lsbCA9PiB7XG4gICAgICAgICAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChza2lsbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbGVmdE1hcmt1cCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2tpbGxzLnVuc2hpZnQoc2tpbGxzW3NraWxscy5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNraWxscy5wb3AoKTtcbiAgICB9XG5cbiAgICBjb25zdCByaWdodE1hcmtVcCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2tpbGxzW3NraWxscy5sZW5ndGhdID0gc2tpbGxzWzBdO1xuICAgICAgICBza2lsbHMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgZmlsbCwgZ2V0Tm9kZSB9O1xufSIsImltcG9ydCB7IHRpbWVvdXQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uU3BlZWQgPSA1MDA7XG5leHBvcnQgY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2Jyk7XG5leHBvcnQgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnkgdWwnKTtcblxuZXhwb3J0IGNvbnN0IHJpZ2h0VHJhbnNpdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24oKTtcbiAgICBhd2FpdCB0aW1lb3V0KGFuaW1hdGlvblNwZWVkKTtcbiAgICByZW1vdmVUcmFuc2l0aW9uUmlnaHRCdXR0b24oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxlZnRUcmFuc2l0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHJlbW92ZVRyYW5zaXRpb25MZWZ0QnV0dG9uKCk7XG4gICAgYXdhaXQgdGltZW91dCgxKTtcbiAgICBzZXRUcmFuc2l0aW9uTGVmdEJ1dHRvbigpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhbnNpdGlvbkxlZnRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnMzIuNXZoJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICcnO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzE3LjV2aCc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzMyLjV2aCc7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBcnJvd3NQb2ludGVyRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxlZnRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICByaWdodEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QXJyb3dzUG9pbnRlckV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZWZ0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgcmlnaHRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSA9IGFzeW5jICgpID0+IHtcbiAgICByZW1vdmVBcnJvd3NQb2ludGVyRXZlbnRzKCk7XG4gICAgYXdhaXQgdGltZW91dChhbmltYXRpb25TcGVlZCk7XG4gICAgc2V0QXJyb3dzUG9pbnRlckV2ZW50cygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==