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
    scroll-behavior: smooth;
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

.marker {
    display: grid;
    height: 5rem;
}

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
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 500;
    border-radius: 0.35rem;
}

.scrolled__header {
    animation: backgroundColorSet 1s ease-in-out forwards;
}

.unscrolled__header {
    animation: backgroundColorRemove 1s ease-in-out forwards;
}

.scrolled__header>.logo {
    color: white;
    transition: color 0.5s;
}

.scrolled__header>.nav__links>a {
    color: white;
    transition: color 0.5s;
}

@keyframes backgroundColorSet {
    100% {
        background-color: #6cccdbf3;
    }
}

@keyframes backgroundColorRemove {
    0% {
        background-color: #6cccdbf3;
    }
    100% {
        background-color: white;
    }
}

.logo,
.nav__links {
    display: grid;
    margin: min(3vh, 3vw);
    width: max-content;
    transition: color 0.5s;
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

.live__app:focus {
    animation: topTranslate 0.25s ease-in-out;
}

.repository:focus {
    animation: bottomTranslate 0.25s ease-in-out;
}

@keyframes topTranslate {
    50% {
        transform: translateX(-0.35rem) translateY(1rem)
    }

    100% {
        transform: translateX(-0.35rem) translateY(0.35rem)
    }
}

@keyframes bottomTranslate {
    50% {
        transform: translateX(-0.35rem) translateY(-1rem)
    }

    100% {
        transform: translateX(-0.35rem) translateY(-0.35rem)
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

}`, "",{"version":3,"sources":["webpack://./src/views/css/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: min-content;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: Roboto;\n    font-size: min(1.8vw, 1.8vh);\n    color: #2f3640;\n    line-height: 1.5em;\n    padding: min(1vh, 1vw);\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n\n    background-image: url(../images/white.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n    scroll-behavior: smooth;\n}\n\nhtml::-webkit-scrollbar {\n    visibility: hidden;\n    width: 0;\n}\n\na {\n    outline: none;\n    text-decoration: none;\n}\n\nh3 {\n    margin: 0 0 2em 0.75em;\n}\n\np {\n    margin: 0 0 0.75em 1em;\n}\n\nul {\n    padding-left: 4em;\n}\n\nspan {\n    padding-left: min(1vh, 1vw);\n    padding-right: min(1vh, 1vw);\n}\n\n.marker {\n    display: grid;\n    height: 5rem;\n}\n\n.section {\n    display: grid;\n    padding: min(3vh, 7.5vw);\n}\n\nheader {\n    display: grid;\n    grid-template-areas:\n        'logo navbar';\n    align-items: center;\n    justify-content: space-between;\n    opacity: 0;\n    position: sticky;\n    top: 0;\n    background-color: white;\n    z-index: 500;\n    border-radius: 0.35rem;\n}\n\n.scrolled__header {\n    animation: backgroundColorSet 1s ease-in-out forwards;\n}\n\n.unscrolled__header {\n    animation: backgroundColorRemove 1s ease-in-out forwards;\n}\n\n.scrolled__header>.logo {\n    color: white;\n    transition: color 0.5s;\n}\n\n.scrolled__header>.nav__links>a {\n    color: white;\n    transition: color 0.5s;\n}\n\n@keyframes backgroundColorSet {\n    100% {\n        background-color: #6cccdbf3;\n    }\n}\n\n@keyframes backgroundColorRemove {\n    0% {\n        background-color: #6cccdbf3;\n    }\n    100% {\n        background-color: white;\n    }\n}\n\n.logo,\n.nav__links {\n    display: grid;\n    margin: min(3vh, 3vw);\n    width: max-content;\n    transition: color 0.5s;\n}\n\n.logo {\n    grid-area: logo;\n    font-size: min(6vw, 6vh);\n    grid-template-columns: min-content min-content;\n}\n\n.logo>span {\n    width: min-content;\n    padding-left: 0vh;\n    padding-right: 0vh;\n}\n\n.first__letter {\n    position: relative;\n    transform-style: preserve-3d;\n    animation: letterRotate 10s linear infinite;\n}\n\n.nav__links>a {\n    color: #2f3640;\n}\n\n@keyframes letterRotate {\n\n    0%,\n    40% {\n        -webkit-transform: rotateY(360deg);\n        transform: rotateY(360deg);\n    }\n\n    60%,\n    100% {\n        -webkit-transform: rotateY(0deg);\n        transform: rotateY(0deg);\n    }\n}\n\n.nav__links {\n    grid-area: navbar;\n    grid-template-columns: repeat(4, max-content);\n    font-size: 1rem;\n}\n\nmain {\n    display: grid;\n    grid-template-areas:\n        'hero'\n        'about'\n        'projects'\n        'contacts';\n}\n\n.hero {\n    padding: min(6em) !important;\n    display: grid;\n    grid-template-areas:\n        'firstname'\n        'secondname'\n        'profession';\n    gap: min(10vh, 10vw);\n    overflow: hidden;\n}\n\n.firstname,\n.secondname,\n.profession {\n    display: grid;\n    width: max-content;\n    transform: translate(100vw);\n    opacity: 0;\n    padding-right: min(1vh, 1vw);\n}\n\n.firstname,\n.secondname {\n    font-size: min(6em);\n    font-weight: 300;\n}\n\n.secondname {\n    text-indent: min(11.3vh, 11.3vw);\n}\n\n.profession {\n    font-size: min(4em);\n    text-indent: min(24vh, 24vw);\n}\n\n.section__name {\n    display: grid;\n    width: max-content;\n    padding-bottom: 1em;\n    font-size: min(4.8vh, 4.8vw);\n}\n\n.about {\n    display: grid;\n    border: min(1vh, 1vw) #2f3640 solid;\n    background-color: white;\n    opacity: 0;\n    border-radius: 0.35rem;\n}\n\n.skills-panel {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    align-items: center;\n    justify-self: center;\n    margin-top: 2rem;\n}\n\n.arrow {\n    background-color: white;\n}\n\n.arrow:hover {\n    fill: aqua;\n}\n\n.carousel {\n    display: grid;\n    position: relative;\n    width: min(59vh, 59vw);\n    padding: min(4vh, 4vw);\n    border-radius: min(1vh, 1vw);\n    justify-self: center;\n    overflow: hidden;\n}\n\n.gallery {\n    display: grid;\n    position: relative;\n    width: 100vw;\n    right: min(17.5vh, 17.5vw);\n}\n\n.gallery ul {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, min(15vh, 15vw));\n    align-content: center;\n    list-style: none;\n    width: inherit;\n    border: 1px #2f3640 solid;\n}\n\n.gallery li {\n    display: grid;\n    padding: min(2vh, 1vw);\n    align-content: center;\n    width: min(12vh, 12vw);\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    justify-items: center;\n    gap: min(1vh, 1vw);\n    font-size: min(2.5vh, 2.5vw);\n}\n\n.projects {\n    display: grid;\n    row-gap: 3em;\n    align-content: center;\n    opacity: 0;\n}\n\n.project {\n    display: grid;\n    padding: min(3vh, 3vw);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\n.preview {\n    display: grid;\n    width: min-content;\n    border: min(0.5vw, 0.5vw) #2f3640 solid;\n    border-radius: 0.35rem;\n}\n\nimg {\n    display: grid;\n}\n\n.description {\n    display: grid;\n    grid-template-areas:\n        'title'\n        'panel';\n    padding: min(1vw, 1vh);\n    justify-self: start;\n    width: 100%;\n}\n\n.description>h3 {\n    grid-area: 'title';\n    margin: 0 0 0 0.5rem;\n    border-radius: 0.35rem 0.35rem 0 0;\n    transition: transform 0.5s ease-in-out;\n}\n\n.front__panel,\n.back__panel {\n    grid-area: panel;\n    border-radius: 0.35rem;\n}\n\n.front__panel {\n    transition: transform 0.5s ease-in-out;\n    z-index: 200;\n}\n\n.back__panel {\n    display: grid;\n    grid-template-areas: only-area;\n    background-color: #2f3640a6;\n    color: rgba(0, 0, 0, 0);\n}\n\n.live__app,\n.repository {\n    display: grid;\n    grid-area: only-area;\n    justify-self: end;\n    cursor: pointer;\n    z-index: 199;\n    background-color: rgb(250, 61, 61);\n    box-shadow: 0 0 min(1vh, 1vw) red;\n    height: 50%;\n}\n\n.live__app {\n    border-radius: 0.35rem 0.35rem 0 0;\n    transform: translateX(-0.35rem) translateY(0.35rem);\n}\n\n.live__app:focus {\n    animation: topTranslate 0.25s ease-in-out;\n}\n\n.repository:focus {\n    animation: bottomTranslate 0.25s ease-in-out;\n}\n\n@keyframes topTranslate {\n    50% {\n        transform: translateX(-0.35rem) translateY(1rem)\n    }\n\n    100% {\n        transform: translateX(-0.35rem) translateY(0.35rem)\n    }\n}\n\n@keyframes bottomTranslate {\n    50% {\n        transform: translateX(-0.35rem) translateY(-1rem)\n    }\n\n    100% {\n        transform: translateX(-0.35rem) translateY(-0.35rem)\n    }\n}\n\n.live__app>div {\n    display: grid;\n    padding: 0.5rem;\n}\n\n.repository {\n    align-self: flex-end;\n    border-radius: 0 0 0.35rem 0.35rem;\n    transform: translateX(-0.35rem) translateY(-0.35rem);\n}\n\n.repository>div {\n    display: grid;\n    align-self: end;\n    padding: 0.5rem;\n}\n\n.info,\n.ghost__info {\n    display: grid;\n    padding: min(1vh, 1vw);\n    min-height: min(100px);\n    border-radius: 0.35rem;\n}\n\n.info {\n    background-color: white;\n    transition: transform 1s ease-in-out;\n    border: min(0.5vh, 0.5vw) #2f3640 solid;\n}\n\n.ghost__info {\n    grid-area: only-area;\n    border: min(0.5vh, 0.5vw) rgba(0, 0, 0, 0) solid;\n}\n\n.name {\n    display: grid;\n    width: max-content;\n    padding: min(1vh, 1vw);\n    background-color: #f9f366;\n    box-shadow: 0 0 0.35rem #f9f366;\n}\n\n.contacts {\n    opacity: 0;\n}\n\n.contacts__panel {\n    padding: 3rem;\n    display: grid;\n    grid-template-columns: min-content min-content;\n    justify-content: center;\n    gap: 3rem;\n}\n\nfooter {\n    display: grid;\n    opacity: 0;\n    justify-items: center;\n}\n\n.verticalLine {\n    display: grid;\n}\n\n.visible__section {\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n}\n\n.show__hero {\n    transform: translate(0vw);\n    opacity: 1;\n    transition: transform 1s ease-in-out, opacity 1.6s ease-in-out;\n}\n\n@media screen and (min-aspect-ratio: 0.9/1) {\n    .project {\n        justify-content: space-between;\n        align-items: center;\n        grid-template-columns: max-content min-content 1fr;\n    }\n\n    .verticalLine {\n        width: 1vh;\n        height: 75%;\n        border-right: 1px solid #2f3640;\n    }\n\n    .visible__main {\n        background-image: url(../images/WaveLineBackgroundFree.webp);\n        transition: background-image 1s ease-in-out;\n    }\n}\n\n@media screen and (max-aspect-ratio: 0.9/1) {\n    .project {\n        justify-items: center;\n        grid-template-rows: repeat(3, min-content);\n    }\n\n    .preview {\n        display: grid;\n        width: min-content;\n    }\n\n    .verticalLine {\n        width: 75%;\n        height: 0;\n        padding-top: 1vw;\n        border-bottom: 1px solid #2f3640;\n        justify-self: center;\n    }\n\n    .visible__main {\n        background-image: url(../images/WaveLineBackgroundFree2.webp);\n        transition: background-image 1s ease-in-out;\n    }\n\n}"],"sourceRoot":""}]);
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

let headerScroller = (0,_models_scroller__WEBPACK_IMPORTED_MODULE_3__.HeaderScroller)();
headerScroller.start();
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
/* harmony export */   HeaderScroller: () => (/* binding */ HeaderScroller),
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

const HeaderScroller = () => {
    const node = document.querySelector('header');
    let oldScrollTopPosition = 0;

    const start = () => {
        window.addEventListener('scroll', scroll);
    }

    const scroll = () => {
        const scrollTopPosition = document.documentElement.scrollTop;
        if (oldScrollTopPosition !== scrollTopPosition) {
            node.classList.remove('unscrolled__header');
            node.classList.add('scrolled__header');
        } else {
            node.classList.remove('scrolled__header');
            node.classList.add('unscrolled__header');
        }
    }

    return { start };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx3SEFBc0M7QUFDbEYsNENBQTRDLDRKQUF3RDtBQUNwRyw0Q0FBNEMsOEpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUs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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZELGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RCxnREFBZ0QsT0FBTztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVpRDs7QUFFMUM7QUFDQTtBQUNBOztBQUVQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFVBQVUsdURBQU87QUFDakI7QUFDQTs7QUFFTztBQUNQO0FBQ0EsVUFBVSx1REFBTztBQUNqQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQ0FBc0MsZUFBZTtBQUNyRCx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQ0FBc0MsZUFBZTtBQUNyRCx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxVQUFVLHVEQUFPO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9jc3Mvc3R5bGUuY3NzPzhjM2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9tb2RlbHMvRE9NSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9tb2RlbHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbW9kZWxzL29ic2VydmVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL21vZGVscy9zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy92aWV3cy9ub2Rlcy9zdHlsZVByZXNldHMvY2Fyb3VzZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvV2F2ZUxpbmVCYWNrZ3JvdW5kRnJlZS53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1dhdmVMaW5lQmFja2dyb3VuZEZyZWUyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogbWluKDEuOHZ3LCAxLjh2aCk7XG4gICAgY29sb3I6ICMyZjM2NDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qIEZpcmVmb3ggKi9cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAwO1xufVxuXG5hIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDMge1xuICAgIG1hcmdpbjogMCAwIDJlbSAwLjc1ZW07XG59XG5cbnAge1xuICAgIG1hcmdpbjogMCAwIDAuNzVlbSAxZW07XG59XG5cbnVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRlbTtcbn1cblxuc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMXZoLCAxdncpO1xuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDF2dyk7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiBtaW4oM3ZoLCA3LjV2dyk7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnbG9nbyBuYXZiYXInO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG5cbi5zY3JvbGxlZF9faGVhZGVyIHtcbiAgICBhbmltYXRpb246IGJhY2tncm91bmRDb2xvclNldCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cblxuLnVuc2Nyb2xsZWRfX2hlYWRlciB7XG4gICAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kQ29sb3JSZW1vdmUgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5cbi5zY3JvbGxlZF9faGVhZGVyPi5sb2dvIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbn1cblxuLnNjcm9sbGVkX19oZWFkZXI+Lm5hdl9fbGlua3M+YSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG59XG5cbkBrZXlmcmFtZXMgYmFja2dyb3VuZENvbG9yU2V0IHtcbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjY2NkYmYzO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiYWNrZ3JvdW5kQ29sb3JSZW1vdmUge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjY2NkYmYzO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ubG9nbyxcbi5uYXZfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogbWluKDN2aCwgM3Z3KTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbn1cblxuLmxvZ28ge1xuICAgIGdyaWQtYXJlYTogbG9nbztcbiAgICBmb250LXNpemU6IG1pbig2dncsIDZ2aCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbn1cblxuLmxvZ28+c3BhbiB7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIHBhZGRpbmctbGVmdDogMHZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDB2aDtcbn1cblxuLmZpcnN0X19sZXR0ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGFuaW1hdGlvbjogbGV0dGVyUm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5uYXZfX2xpbmtzPmEge1xuICAgIGNvbG9yOiAjMmYzNjQwO1xufVxuXG5Aa2V5ZnJhbWVzIGxldHRlclJvdGF0ZSB7XG5cbiAgICAwJSxcbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICB9XG5cbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgfVxufVxuXG4ubmF2X19saW5rcyB7XG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWF4LWNvbnRlbnQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnaGVybydcbiAgICAgICAgJ2Fib3V0J1xuICAgICAgICAncHJvamVjdHMnXG4gICAgICAgICdjb250YWN0cyc7XG59XG5cbi5oZXJvIHtcbiAgICBwYWRkaW5nOiBtaW4oNmVtKSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2ZpcnN0bmFtZSdcbiAgICAgICAgJ3NlY29uZG5hbWUnXG4gICAgICAgICdwcm9mZXNzaW9uJztcbiAgICBnYXA6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmlyc3RuYW1lLFxuLnNlY29uZG5hbWUsXG4ucHJvZmVzc2lvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwdncpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZy1yaWdodDogbWluKDF2aCwgMXZ3KTtcbn1cblxuLmZpcnN0bmFtZSxcbi5zZWNvbmRuYW1lIHtcbiAgICBmb250LXNpemU6IG1pbig2ZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zZWNvbmRuYW1lIHtcbiAgICB0ZXh0LWluZGVudDogbWluKDExLjN2aCwgMTEuM3Z3KTtcbn1cblxuLnByb2Zlc3Npb24ge1xuICAgIGZvbnQtc2l6ZTogbWluKDRlbSk7XG4gICAgdGV4dC1pbmRlbnQ6IG1pbigyNHZoLCAyNHZ3KTtcbn1cblxuLnNlY3Rpb25fX25hbWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiBtaW4oNC44dmgsIDQuOHZ3KTtcbn1cblxuLmFib3V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSAjMmYzNjQwIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cblxuLnNraWxscy1wYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYXJyb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICAgIGZpbGw6IGFxdWE7XG59XG5cbi5jYXJvdXNlbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IG1pbig1OXZoLCA1OXZ3KTtcbiAgICBwYWRkaW5nOiBtaW4oNHZoLCA0dncpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDF2dyk7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICByaWdodDogbWluKDE3LjV2aCwgMTcuNXZ3KTtcbn1cblxuLmdhbGxlcnkgdWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbigxNXZoLCAxNXZ3KSk7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggIzJmMzY0MCBzb2xpZDtcbn1cblxuLmdhbGxlcnkgbGkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDJ2aCwgMXZ3KTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMnZoLCAxMnZ3KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IG1pbigxdmgsIDF2dyk7XG4gICAgZm9udC1zaXplOiBtaW4oMi41dmgsIDIuNXZ3KTtcbn1cblxuLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDNlbTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDN2aCwgM3Z3KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ucHJldmlldyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBtaW4oMC41dncsIDAuNXZ3KSAjMmYzNjQwIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG5cbmltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICd0aXRsZSdcbiAgICAgICAgJ3BhbmVsJztcbiAgICBwYWRkaW5nOiBtaW4oMXZ3LCAxdmgpO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXNjcmlwdGlvbj5oMyB7XG4gICAgZ3JpZC1hcmVhOiAndGl0bGUnO1xuICAgIG1hcmdpbjogMCAwIDAgMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gMC4zNXJlbSAwIDA7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mcm9udF9fcGFuZWwsXG4uYmFja19fcGFuZWwge1xuICAgIGdyaWQtYXJlYTogcGFuZWw7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cblxuLmZyb250X19wYW5lbCB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgei1pbmRleDogMjAwO1xufVxuXG4uYmFja19fcGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogb25seS1hcmVhO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM2NDBhNjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmxpdmVfX2FwcCxcbi5yZXBvc2l0b3J5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogb25seS1hcmVhO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxOTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgNjEsIDYxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgbWluKDF2aCwgMXZ3KSByZWQ7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5saXZlX19hcHAge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gMC4zNXJlbSAwIDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKDAuMzVyZW0pO1xufVxuXG4ubGl2ZV9fYXBwOmZvY3VzIHtcbiAgICBhbmltYXRpb246IHRvcFRyYW5zbGF0ZSAwLjI1cyBlYXNlLWluLW91dDtcbn1cblxuLnJlcG9zaXRvcnk6Zm9jdXMge1xuICAgIGFuaW1hdGlvbjogYm90dG9tVHJhbnNsYXRlIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHRvcFRyYW5zbGF0ZSB7XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKDFyZW0pXG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgwLjM1cmVtKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBib3R0b21UcmFuc2xhdGUge1xuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgtMXJlbSlcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKC0wLjM1cmVtKVxuICAgIH1cbn1cblxuLmxpdmVfX2FwcD5kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucmVwb3NpdG9yeSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMzVyZW0gMC4zNXJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMzVyZW0pIHRyYW5zbGF0ZVkoLTAuMzVyZW0pO1xufVxuXG4ucmVwb3NpdG9yeT5kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmluZm8sXG4uZ2hvc3RfX2luZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICBtaW4taGVpZ2h0OiBtaW4oMTAwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG59XG5cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyOiBtaW4oMC41dmgsIDAuNXZ3KSAjMmYzNjQwIHNvbGlkO1xufVxuXG4uZ2hvc3RfX2luZm8ge1xuICAgIGdyaWQtYXJlYTogb25seS1hcmVhO1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjV2dykgcmdiYSgwLCAwLCAwLCAwKSBzb2xpZDtcbn1cblxuLm5hbWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjM2NjtcbiAgICBib3gtc2hhZG93OiAwIDAgMC4zNXJlbSAjZjlmMzY2O1xufVxuXG4uY29udGFjdHMge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jb250YWN0c19fcGFuZWwge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG9wYWNpdHk6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udmlzaWJsZV9fc2VjdGlvbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaG93X19oZXJvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDEuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAwLjkvMSkge1xuICAgIC5wcm9qZWN0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1pbi1jb250ZW50IDFmcjtcbiAgICB9XG5cbiAgICAudmVydGljYWxMaW5lIHtcbiAgICAgICAgd2lkdGg6IDF2aDtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyZjM2NDA7XG4gICAgfVxuXG4gICAgLnZpc2libGVfX21haW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMC45LzEpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIH1cblxuICAgIC5wcmV2aWV3IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIH1cblxuICAgIC52ZXJ0aWNhbExpbmUge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxdnc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmYzNjQwO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudmlzaWJsZV9fbWFpbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ks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UUFDVixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSx5REFBNkQ7UUFDN0QsMkNBQTJDO0lBQy9DOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBmb250LXNpemU6IG1pbigxLjh2dywgMS44dmgpO1xcbiAgICBjb2xvcjogIzJmMzY0MDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAgIC8qIElFIGFuZCBFZGdlICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgLyogRmlyZWZveCAqL1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3doaXRlLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbmEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwIDAgMmVtIDAuNzVlbTtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMCAwIDAuNzVlbSAxZW07XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigxdmgsIDF2dyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDF2dyk7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDN2aCwgNy41dncpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2xvZ28gbmF2YmFyJztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiA1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxufVxcblxcbi5zY3JvbGxlZF9faGVhZGVyIHtcXG4gICAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kQ29sb3JTZXQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi51bnNjcm9sbGVkX19oZWFkZXIge1xcbiAgICBhbmltYXRpb246IGJhY2tncm91bmRDb2xvclJlbW92ZSAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLnNjcm9sbGVkX19oZWFkZXI+LmxvZ28ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XFxufVxcblxcbi5zY3JvbGxlZF9faGVhZGVyPi5uYXZfX2xpbmtzPmEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgYmFja2dyb3VuZENvbG9yU2V0IHtcXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNjY2RiZjM7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBiYWNrZ3JvdW5kQ29sb3JSZW1vdmUge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNjY2RiZjM7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG4ubG9nbyxcXG4ubmF2X19saW5rcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogbWluKDN2aCwgM3Z3KTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGdyaWQtYXJlYTogbG9nbztcXG4gICAgZm9udC1zaXplOiBtaW4oNnZ3LCA2dmgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ubG9nbz5zcGFuIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDB2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMHZoO1xcbn1cXG5cXG4uZmlyc3RfX2xldHRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgYW5pbWF0aW9uOiBsZXR0ZXJSb3RhdGUgMTBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm5hdl9fbGlua3M+YSB7XFxuICAgIGNvbG9yOiAjMmYzNjQwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxldHRlclJvdGF0ZSB7XFxuXFxuICAgIDAlLFxcbiAgICA0MCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xcbiAgICB9XFxuXFxuICAgIDYwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG4ubmF2X19saW5rcyB7XFxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtYXgtY29udGVudCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnaGVybydcXG4gICAgICAgICdhYm91dCdcXG4gICAgICAgICdwcm9qZWN0cydcXG4gICAgICAgICdjb250YWN0cyc7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgcGFkZGluZzogbWluKDZlbSkgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdmaXJzdG5hbWUnXFxuICAgICAgICAnc2Vjb25kbmFtZSdcXG4gICAgICAgICdwcm9mZXNzaW9uJztcXG4gICAgZ2FwOiBtaW4oMTB2aCwgMTB2dyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5maXJzdG5hbWUsXFxuLnNlY29uZG5hbWUsXFxuLnByb2Zlc3Npb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHZ3KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZy1yaWdodDogbWluKDF2aCwgMXZ3KTtcXG59XFxuXFxuLmZpcnN0bmFtZSxcXG4uc2Vjb25kbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDZlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5zZWNvbmRuYW1lIHtcXG4gICAgdGV4dC1pbmRlbnQ6IG1pbigxMS4zdmgsIDExLjN2dyk7XFxufVxcblxcbi5wcm9mZXNzaW9uIHtcXG4gICAgZm9udC1zaXplOiBtaW4oNGVtKTtcXG4gICAgdGV4dC1pbmRlbnQ6IG1pbigyNHZoLCAyNHZ3KTtcXG59XFxuXFxuLnNlY3Rpb25fX25hbWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogbWluKDQuOHZoLCA0Ljh2dyk7XFxufVxcblxcbi5hYm91dCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSAjMmYzNjQwIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG59XFxuXFxuLnNraWxscy1wYW5lbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgICBmaWxsOiBhcXVhO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBtaW4oNTl2aCwgNTl2dyk7XFxuICAgIHBhZGRpbmc6IG1pbig0dmgsIDR2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDF2dyk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZ2FsbGVyeSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICByaWdodDogbWluKDE3LjV2aCwgMTcuNXZ3KTtcXG59XFxuXFxuLmdhbGxlcnkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWluKDE1dmgsIDE1dncpKTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAxcHggIzJmMzY0MCBzb2xpZDtcXG59XFxuXFxuLmdhbGxlcnkgbGkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAxdncpO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTJ2aCwgMTJ2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDF2aCwgMXZ3KTtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41dmgsIDIuNXZ3KTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcm93LWdhcDogM2VtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDN2aCwgM3Z3KTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLnByZXZpZXcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogbWluKDAuNXZ3LCAwLjV2dykgIzJmMzY0MCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG59XFxuXFxuaW1nIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICd0aXRsZSdcXG4gICAgICAgICdwYW5lbCc7XFxuICAgIHBhZGRpbmc6IG1pbigxdncsIDF2aCk7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24+aDMge1xcbiAgICBncmlkLWFyZWE6ICd0aXRsZSc7XFxuICAgIG1hcmdpbjogMCAwIDAgMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtIDAuMzVyZW0gMCAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZyb250X19wYW5lbCxcXG4uYmFja19fcGFuZWwge1xcbiAgICBncmlkLWFyZWE6IHBhbmVsO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG5cXG4uZnJvbnRfX3BhbmVsIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLmJhY2tfX3BhbmVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogb25seS1hcmVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNjQwYTY7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ubGl2ZV9fYXBwLFxcbi5yZXBvc2l0b3J5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBvbmx5LWFyZWE7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDE5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgNjEsIDYxKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIG1pbigxdmgsIDF2dykgcmVkO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmxpdmVfX2FwcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW0gMC4zNXJlbSAwIDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgwLjM1cmVtKTtcXG59XFxuXFxuLmxpdmVfX2FwcDpmb2N1cyB7XFxuICAgIGFuaW1hdGlvbjogdG9wVHJhbnNsYXRlIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucmVwb3NpdG9yeTpmb2N1cyB7XFxuICAgIGFuaW1hdGlvbjogYm90dG9tVHJhbnNsYXRlIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRvcFRyYW5zbGF0ZSB7XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMzVyZW0pIHRyYW5zbGF0ZVkoMXJlbSlcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgwLjM1cmVtKVxcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm90dG9tVHJhbnNsYXRlIHtcXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgtMXJlbSlcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4zNXJlbSkgdHJhbnNsYXRlWSgtMC4zNXJlbSlcXG4gICAgfVxcbn1cXG5cXG4ubGl2ZV9fYXBwPmRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnJlcG9zaXRvcnkge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMzVyZW0gMC4zNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjM1cmVtKSB0cmFuc2xhdGVZKC0wLjM1cmVtKTtcXG59XFxuXFxuLnJlcG9zaXRvcnk+ZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5pbmZvLFxcbi5naG9zdF9faW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIG1pbi1oZWlnaHQ6IG1pbigxMDBweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyOiBtaW4oMC41dmgsIDAuNXZ3KSAjMmYzNjQwIHNvbGlkO1xcbn1cXG5cXG4uZ2hvc3RfX2luZm8ge1xcbiAgICBncmlkLWFyZWE6IG9ubHktYXJlYTtcXG4gICAgYm9yZGVyOiBtaW4oMC41dmgsIDAuNXZ3KSByZ2JhKDAsIDAsIDAsIDApIHNvbGlkO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjM2NjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuMzVyZW0gI2Y5ZjM2NjtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNvbnRhY3RzX19wYW5lbCB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnZlcnRpY2FsTGluZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi52aXNpYmxlX19zZWN0aW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2hvd19faGVybyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dCwgb3BhY2l0eSAxLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMC45LzEpIHtcXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWluLWNvbnRlbnQgMWZyO1xcbiAgICB9XFxuXFxuICAgIC52ZXJ0aWNhbExpbmUge1xcbiAgICAgICAgd2lkdGg6IDF2aDtcXG4gICAgICAgIGhlaWdodDogNzUlO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJmMzY0MDtcXG4gICAgfVxcblxcbiAgICAudmlzaWJsZV9fbWFpbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL1dhdmVMaW5lQmFja2dyb3VuZEZyZWUud2VicCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAwLjkvMSkge1xcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIH1cXG5cXG4gICAgLnByZXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgfVxcblxcbiAgICAudmVydGljYWxMaW5lIHtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMXZ3O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjM2NDA7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudmlzaWJsZV9fbWFpbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL1dhdmVMaW5lQmFja2dyb3VuZEZyZWUyLndlYnApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5LCBsZWZ0QnV0dG9uLCByaWdodEJ1dHRvbiB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9zdHlsZVByZXNldHMvY2Fyb3VzZWxcIjtcblxuZXhwb3J0IGNvbnN0IHNldEV2ZW50TGlzdGVuZXJzRm9yQ2Fyb3VzZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBhd2FpdCBDYXJvdXNlbCgpO1xuICAgIGNvbnN0IGdldEludGVydmFsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQXJyb3dzQXZhaWxhYmlsaXR5KCk7XG4gICAgICAgICAgICBjYXJvdXNlbC5yaWdodCgpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuXG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSgpO1xuICAgICAgICBjYXJvdXNlbC5sZWZ0KClcbiAgICAgICAgaW50ZXJ2YWwgPSBnZXRJbnRlcnZhbCgpO1xuICAgIH0pXG5cbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSgpO1xuICAgICAgICBjYXJvdXNlbC5yaWdodCgpO1xuICAgICAgICBpbnRlcnZhbCA9IGdldEludGVydmFsKCk7XG4gICAgfSlcbn1cbiIsImV4cG9ydCBjb25zdCB0aW1lb3V0ID0gKG1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufSIsImltcG9ydCAnLi92aWV3cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldEV2ZW50TGlzdGVuZXJzRm9yQ2Fyb3VzZWwgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9jYXJvdXNlbCc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IEhlYWRlclNjcm9sbGVyLCBTY3JvbGxWYWx1ZXMsIFNjcm9sbGVyIH0gZnJvbSAnLi9tb2RlbHMvc2Nyb2xsZXInO1xuaW1wb3J0IHsgaXNWaXNpYmxlLCBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gJy4vbW9kZWxzL29ic2VydmVyJztcbmltcG9ydCB7IFByb2plY3RzU2VjdGlvbiwgU2VjdGlvbiwgc2Nyb2xsTm9kZSB9IGZyb20gJy4vbW9kZWxzL0RPTUhhbmRsZXInO1xuXG5zZXRFdmVudExpc3RlbmVyc0ZvckNhcm91c2VsKCk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0bmFtZScpO1xuY29uc3Qgc2Vjb25kTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRuYW1lJyk7XG5jb25zdCBwcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2Zlc3Npb24nKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbmNvbnN0IGZyb250UGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyb250X19wYW5lbCcpO1xuY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlc2NyaXB0aW9uPmgzJyk7XG5cblxuYXdhaXQgdGltZW91dCgyMDApO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVfX3NlY3Rpb24nKTtcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fbWFpbicpO1xuYXdhaXQgdGltZW91dCgyMDApO1xuZmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3dfX2hlcm8nKVxuYXdhaXQgdGltZW91dCgxMDApO1xuc2Vjb25kTmFtZS5jbGFzc0xpc3QuYWRkKCdzaG93X19oZXJvJylcbmF3YWl0IHRpbWVvdXQoMTAwKTtcbnByb2Zlc3Npb24uY2xhc3NMaXN0LmFkZCgnc2hvd19faGVybycpXG5hd2FpdCB0aW1lb3V0KDEwMDApO1xuXG5hYm91dC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5wcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5jb250YWN0cy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlX19zZWN0aW9uJyk7XG5hd2FpdCB0aW1lb3V0KDEwMCk7XG5mb290ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZV9fc2VjdGlvbicpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGZyb250UGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudHMgPSB7IHRpdGxlOiB0aXRsZXNbaV0sIHBhbmVsOiBmcm9udFBhbmVsc1tpXSwgc2Nyb2xsVmFsdWVzOiBTY3JvbGxWYWx1ZXMoLTMsIDMpIH07XG4gICAgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoU2Nyb2xsZXIoZGVzY3JpcHRpb25FbGVtZW50cykpO1xufVxuXG5sZXQgaGVhZGVyU2Nyb2xsZXIgPSBIZWFkZXJTY3JvbGxlcigpO1xuaGVhZGVyU2Nyb2xsZXIuc3RhcnQoKTsiLCJpbXBvcnQgeyBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gXCIuL29ic2VydmVyXCI7XG5pbXBvcnQgeyBTY3JvbGxWYWx1ZXMsIFNjcm9sbGVyIH0gZnJvbSBcIi4vc2Nyb2xsZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSAobm9kZSkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIobm9kZSk7XG5cbiAgICBjb25zdCBnZXRPYnNlcnZlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0T2JzZXJ2ZXIsIGdldE5vZGUgfVxufVxuIiwiaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBsZWZ0VHJhbnNpdGlvbiwgcmVtb3ZlVHJhbnNpdGlvbkxlZnRCdXR0b24sIHJlbW92ZVRyYW5zaXRpb25SaWdodEJ1dHRvbiwgcmlnaHRUcmFuc2l0aW9uLCBzZXRUcmFuc2l0aW9uTGVmdEJ1dHRvbiwgc2V0VHJhbnNpdGlvblJpZ2h0QnV0dG9uIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3N0eWxlUHJlc2V0cy9jYXJvdXNlbFwiO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuICAgIGxldCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5IHVsJyk7XG4gICAgbGV0IHNraWxscyA9IEFycmF5LmZyb20oY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG5cbiAgICBjb25zdCBsZWZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZWZ0VHJhbnNpdGlvbigpO1xuICAgICAgICBsZWZ0TWFya3VwKCk7XG4gICAgICAgIGZpbGwoKTtcbiAgICB9XG5cbiAgICBjb25zdCByaWdodCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgcmlnaHRUcmFuc2l0aW9uKCk7XG4gICAgICAgIHJpZ2h0TWFya1VwKCk7XG4gICAgICAgIGZpbGwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoY2Fyb3VzZWwubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgY2Fyb3VzZWwucmVtb3ZlQ2hpbGQoY2Fyb3VzZWwubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2tpbGxzLmZvckVhY2goc2tpbGwgPT4ge1xuICAgICAgICAgICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoc2tpbGwpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGxlZnRNYXJrdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNraWxscy51bnNoaWZ0KHNraWxsc1tza2lsbHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICBza2lsbHMucG9wKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRNYXJrVXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNraWxsc1tza2lsbHMubGVuZ3RoXSA9IHNraWxsc1swXTtcbiAgICAgICAgc2tpbGxzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIGZpbGwsIGdldE5vZGUgfTtcbn0iLCJpbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIlxuXG5leHBvcnQgY29uc3Qgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSAoc2Nyb2xsZXIpID0+IHtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoYXN5bmMgZW50cmllcyA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChhc3luYyBlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aW1lb3V0KDEwMCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKHNjcm9sbGVyLmdldE5vZGUoKSlcbn0iLCJleHBvcnQgY29uc3QgU2Nyb2xsVmFsdWVzID0gKHRvcCA9IDAsIGJvdHRvbSA9IDAsIGxlZnQgPSAwLCByaWdodCA9IDApID0+IHtcbiAgICByZXR1cm4geyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFNjcm9sbGVyID0gKGUpID0+IHtcbiAgICBsZXQgcGl4ZWxzID0gMDtcbiAgICBsZXQgb2xkU2Nyb2xsVG9wUG9zaXRpb24gPSAwO1xuICAgIGxldCBub2RlID0gZS50aXRsZTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICAgICAgZS5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsKTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKG9sZFNjcm9sbFRvcFBvc2l0aW9uID4gc2Nyb2xsVG9wUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChwaXhlbHMgPCBlLnNjcm9sbFZhbHVlcy5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBwaXhlbHMgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBpeGVscyA+IGUuc2Nyb2xsVmFsdWVzLnRvcCkge1xuICAgICAgICAgICAgICAgIHBpeGVscyA9IC0zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGUudGl0bGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwaXhlbHN9cmVtKWA7XG4gICAgICAgIGUucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwaXhlbHN9cmVtKWA7XG4gICAgICAgIG9sZFNjcm9sbFRvcFBvc2l0aW9uID0gc2Nyb2xsVG9wUG9zaXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwaXhlbHMgPCBlLnNjcm9sbFZhbHVlcy5ib3R0b20pIHtcbiAgICAgICAgICAgIHBpeGVscyA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaXhlbHMgPSAtMztcbiAgICAgICAgfVxuICAgICAgICBlLnRpdGxlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGl4ZWxzfXJlbSlgO1xuICAgICAgICBlLnBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGl4ZWxzfXJlbSlgO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0LCBzdG9wLCBnZXROb2RlIH1cbn1cblxuZXhwb3J0IGNvbnN0IEhlYWRlclNjcm9sbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBsZXQgb2xkU2Nyb2xsVG9wUG9zaXRpb24gPSAwO1xuXG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wUG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAob2xkU2Nyb2xsVG9wUG9zaXRpb24gIT09IHNjcm9sbFRvcFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Vuc2Nyb2xsZWRfX2hlYWRlcicpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZF9faGVhZGVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkX19oZWFkZXInKTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgndW5zY3JvbGxlZF9faGVhZGVyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydCB9O1xufSIsImltcG9ydCB7IHRpbWVvdXQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uU3BlZWQgPSA1MDA7XG5leHBvcnQgY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2Jyk7XG5leHBvcnQgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnkgdWwnKTtcblxuZXhwb3J0IGNvbnN0IHJpZ2h0VHJhbnNpdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24oKTtcbiAgICBhd2FpdCB0aW1lb3V0KGFuaW1hdGlvblNwZWVkKTtcbiAgICByZW1vdmVUcmFuc2l0aW9uUmlnaHRCdXR0b24oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxlZnRUcmFuc2l0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHJlbW92ZVRyYW5zaXRpb25MZWZ0QnV0dG9uKCk7XG4gICAgYXdhaXQgdGltZW91dCgxKTtcbiAgICBzZXRUcmFuc2l0aW9uTGVmdEJ1dHRvbigpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhbnNpdGlvbkxlZnRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnbWluKDMyLjV2aCwzMi41dncpJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldFRyYW5zaXRpb25MZWZ0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25TcGVlZH1tcyBlYXNlLW91dGA7XG4gICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICcnO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVHJhbnNpdGlvblJpZ2h0QnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ21pbigxNy41dmgsMTcuNXZ3KSc7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRUcmFuc2l0aW9uUmlnaHRCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaW1hdGlvblNwZWVkfW1zIGVhc2Utb3V0YDtcbiAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ21pbigzMi41dmgsMzIuNXZ3KSc7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBcnJvd3NQb2ludGVyRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxlZnRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICByaWdodEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QXJyb3dzUG9pbnRlckV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZWZ0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgcmlnaHRCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUFycm93c0F2YWlsYWJpbGl0eSA9IGFzeW5jICgpID0+IHtcbiAgICByZW1vdmVBcnJvd3NQb2ludGVyRXZlbnRzKCk7XG4gICAgYXdhaXQgdGltZW91dChhbmltYXRpb25TcGVlZCk7XG4gICAgc2V0QXJyb3dzUG9pbnRlckV2ZW50cygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==