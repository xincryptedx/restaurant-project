/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsl(0, 64%, 36%);\n\n  --nav-bg-color: hsl(56, 56%, 45%);\n\n  --content-bg-color: hsl(187, 51%, 75%);\n\n  --content-card-bg-color: hsl(95, 80%, 50%);\n\n  --footer-bg-color: hsl(106, 60%, 39%);\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 77vh 5vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: white;\n\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 5px 5px 0px 0px;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1/-1;\n  z-index: 0;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-bg-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n}\n\n.content .home .locations {\n  grid-area: locations;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n\n  background-color: var(--footer-bg-color);\n}\n\n/* #endregion */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd,YAAY;AACZ;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,eAAe;;AAEf,qBAAqB;AACrB;EACE,mCAAmC;;EAEnC,iCAAiC;;EAEjC,sCAAsC;;EAEtC,0CAA0C;;EAE1C,qCAAqC;AACvC;;AAEA,mBAAmB;AACnB,YAAY;AACZ;EACE,aAAa;EACb,qCAAqC;EACrC;;;;eAIa;AACf;;AAEA,eAAe;;AAEf,eAAe;AACf,YAAY;AACZ;EACE,oBAAoB;EACpB,aAAa;EACb,wBAAwB;EACxB,6BAA6B;EAC7B,mBAAmB;EACnB,qBAAqB;;EAErB,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA,eAAe;;AAEf,YAAY;AACZ,YAAY;AACZ;EACE,iBAAiB;EACjB,aAAa;EACb,mCAAmC;;EAEnC,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;;EAEnB,WAAW;EACX,UAAU;EACV,eAAe;EACf,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA,eAAe;;AAEf,gBAAgB;AAChB,YAAY;AACZ;EACE,YAAY;EACZ,qBAAqB;EACrB,yCAAyC;EACzC,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,cAAc;EACd,UAAU;AACZ;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ;;;;GAIC;EACD,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,MAAM;EACN,yBAAyB;AAC3B;;AAEA;EACE,SAAS;AACX;;AAEA,SAAS;AACT,YAAY;AACZ;EACE,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC;;;;aAIW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B;;UAEQ;EACR,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,eAAe;;AAEf,eAAe;;AAEf,eAAe;AACf,YAAY;AACZ;EACE,oBAAoB;;EAEpB,wCAAwC;AAC1C;;AAEA,eAAe","sourcesContent":["/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsl(0, 64%, 36%);\n\n  --nav-bg-color: hsl(56, 56%, 45%);\n\n  --content-bg-color: hsl(187, 51%, 75%);\n\n  --content-card-bg-color: hsl(95, 80%, 50%);\n\n  --footer-bg-color: hsl(106, 60%, 39%);\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 77vh 5vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: white;\n\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 5px 5px 0px 0px;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1/-1;\n  z-index: 0;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-bg-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n}\n\n.content .home .locations {\n  grid-area: locations;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n\n  background-color: var(--footer-bg-color);\n}\n\n/* #endregion */\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/contactTab/contactTab.js":
/*!**************************************!*\
  !*** ./src/contactTab/contactTab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactDiv)
/* harmony export */ });
/* harmony import */ var _scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/initializeElements */ "./src/scripts/initializeElements.js");


function createContactDiv() {
  const element = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["contact"]);

  return element;
}


/***/ }),

/***/ "./src/homeTab/homeTab.js":
/*!********************************!*\
  !*** ./src/homeTab/homeTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomeDiv)
/* harmony export */ });
/* harmony import */ var _scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/initializeElements */ "./src/scripts/initializeElements.js");
/* harmony import */ var _textContent_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textContent.json */ "./src/homeTab/textContent.json");
/* harmony import */ var _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/squareParchment.svg */ "./src/content/squareParchment.svg");




function createHomeDiv() {
  const element = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["home"]);

  const aboutDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["about"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], aboutDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.about.title); // Don't try to join single lined text
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text"], aboutDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.about.text.join(" ")); // Multiline text needs joined
  const aboutBgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], aboutDiv);
  aboutBgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__;

  const hoursDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["hours"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], hoursDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.hours.title);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text"], hoursDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.hours.text);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["sub-text"], hoursDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.hours.subText);

  const locationsDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["locations"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], locationsDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.locations.title);
  _textContent_json__WEBPACK_IMPORTED_MODULE_1__.locations.text.forEach((line) => {
    (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text"], locationsDiv, line);
  });

  const reviewsDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["reviews"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], reviewsDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.reviews.title);
  _textContent_json__WEBPACK_IMPORTED_MODULE_1__.reviews.text.forEach((line) => {
    (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text"], reviewsDiv, line);
  });

  return element;
}


/***/ }),

/***/ "./src/menuTab/menuTab.js":
/*!********************************!*\
  !*** ./src/menuTab/menuTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuDiv)
/* harmony export */ });
/* harmony import */ var _scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/initializeElements */ "./src/scripts/initializeElements.js");


function createMenuDiv() {
  const element = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["menu"]);

  return element;
}


/***/ }),

/***/ "./src/nav/nav.js":
/*!************************!*\
  !*** ./src/nav/nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navController)
/* harmony export */ });
/* harmony import */ var _homeTab_homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homeTab/homeTab */ "./src/homeTab/homeTab.js");
/* harmony import */ var _menuTab_menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuTab/menuTab */ "./src/menuTab/menuTab.js");
/* harmony import */ var _contactTab_contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactTab/contactTab */ "./src/contactTab/contactTab.js");




function navController() {
  const navTabs = document.querySelectorAll(".nav .tab");
  const contentDiv = document.querySelector(".content");
  let generatedDiv;

  function removeContent() {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  }

  function switchTab(tab) {
    if (tab === "home") {
      generatedDiv = (0,_homeTab_homeTab__WEBPACK_IMPORTED_MODULE_0__["default"])();
      removeContent();
      contentDiv.appendChild(generatedDiv);
    }
    if (tab === "menu") {
      generatedDiv = (0,_menuTab_menuTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
      removeContent();
      contentDiv.appendChild(generatedDiv);
    }
    if (tab === "contact") {
      generatedDiv = (0,_contactTab_contactTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
      removeContent();
      contentDiv.appendChild(generatedDiv);
    }
  }

  navTabs.forEach((tab) => {
    const classes = Array.from(tab.classList);
    const activeClass = classes.find((className) => className !== "tab");
    tab.addEventListener("click", () => switchTab(activeClass));
  });
}


/***/ }),

/***/ "./src/scripts/initializeElements.js":
/*!*******************************************!*\
  !*** ./src/scripts/initializeElements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "default": () => (/* binding */ createInitialElements)
/* harmony export */ });
/* harmony import */ var _header_landscapeParchment_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/landscapeParchment.svg */ "./src/header/landscapeParchment.svg");


function createElement(elementType, classes, parent, textContent) {
  const element = document.createElement(elementType);

  if (classes) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function createInitialElements() {
  // Create Container Elements
  const containerDiv = createElement("div", ["container"], document.body);

  // Create Header Elements w/ Classes
  const headerDiv = createElement("div", ["header"], containerDiv);
  createElement("p", ["title"], headerDiv, "The Legerdemain Lounge");
  const headerBgImage = createElement("img", ["background"], headerDiv);
  headerBgImage.src = _header_landscapeParchment_svg__WEBPACK_IMPORTED_MODULE_0__;

  // Create Nav Elements w/ Classes
  const navDiv = createElement("div", ["nav"], containerDiv);
  const navTabTray = createElement("div", ["tab-tray"], navDiv);
  const homeTab = createElement("div", ["tab", "home"], navTabTray);
  createElement("p", [], homeTab, "Home");
  const menuTab = createElement("div", ["tab", "menu"], navTabTray);
  createElement("p", [], menuTab, "Menu");
  const contactTab = createElement("div", ["tab", "contact"], navTabTray);
  createElement("p", [], contactTab, "Contact");

  // Create Content Elements
  createElement("div", ["content"], containerDiv);

  // Create Footer Elements
  const footerDiv = createElement("div", ["footer"], containerDiv);
  const authorP = createElement("p", ["author"], footerDiv);
  authorP.innerHTML =
    "Created by <a href='https://github.com/xincryptedx'>xIncryptedx</a>";
}


/***/ }),

/***/ "./src/content/squareParchment.svg":
/*!*****************************************!*\
  !*** ./src/content/squareParchment.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b81896bc48e574c1e108.svg";

/***/ }),

/***/ "./src/header/landscapeParchment.svg":
/*!*******************************************!*\
  !*** ./src/header/landscapeParchment.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16c080870b12166b8ec0.svg";

/***/ }),

/***/ "./src/homeTab/textContent.json":
/*!**************************************!*\
  !*** ./src/homeTab/textContent.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"about":{"title":"About Us...","text":["Originally built during the age of the Arathorian Empire and known as \'The Hocus Pocus Inn\',","The Legerdemain Lounge is now a well know destination for adventures all throughout Azeroth.","Whether it is a cold drink or a warm bed, the Legerdemain Lounge can accomidate your needs."]},"hours":{"title":"Hours of Operation","text":"We are happy to serve you every hour of every day of the year! *","subText":"* Excluding regularly scheduled maintainance."},"locations":{"title":"Locations","text":["Arathi Highlands, Pre-619 K.C.","Above Crystalsong Forest, 619 - 626 K.C.","Above The Broken Isles, 626 K.C. - Present"],"subText":"Temporal locations included for the chromatically abled."},"reviews":{"title":"Customer Reviews","text":["The accomidations are lovely and the coffee pot is always full. I come here every day! -Trevor Page","De grub be good, but stay away from de gnoll stew. -Ol\'Toomba"]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scripts_initializeElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/initializeElements */ "./src/scripts/initializeElements.js");
/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav */ "./src/nav/nav.js");




(0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_nav_nav__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyREFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QztBQUN4Qjs7QUFFdEMsdUVBQWtCO0FBQ2xCLG9EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb250YWN0VGFiL2NvbnRhY3RUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2hvbWVUYWIvaG9tZVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvbWVudVRhYi9tZW51VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9uYXYvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmVzZXQgQ1NTICovXFxuLyogI3JlZ2lvbiAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBHbG9iYWwgVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY29sb3I6IGhzbCgwLCA2NCUsIDM2JSk7XFxuXFxuICAtLW5hdi1iZy1jb2xvcjogaHNsKDU2LCA1NiUsIDQ1JSk7XFxuXFxuICAtLWNvbnRlbnQtYmctY29sb3I6IGhzbCgxODcsIDUxJSwgNzUlKTtcXG5cXG4gIC0tY29udGVudC1jYXJkLWJnLWNvbG9yOiBoc2woOTUsIDgwJSwgNTAlKTtcXG5cXG4gIC0tZm9vdGVyLWJnLWNvbG9yOiBoc2woMTA2LCA2MCUsIDM5JSk7XFxufVxcblxcbi8qIENvbnRhaW50ZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDh2aCAxMHZoIDc3dmggNXZoLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyRGl2XFxcIlxcbiAgICBcXFwibmF2RGl2XFxcIlxcbiAgICBcXFwiY29udGVudERpdlxcXCJcXG4gICAgXFxcImZvb3RlckRpdlxcXCI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBIZWFkZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXJEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE5hdiBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLm5hdiAudGFiLXRyYXkge1xcbiAgZ3JpZC1hcmVhOiBuYXZEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbn1cXG5cXG4ubmF2IC50YWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGVudCBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50RGl2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250ZW50IGRpdiAqIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250ZW50IC5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxLy0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSxcXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgaHNsYSgwLCAwJSwgMTAwJSwgMCksXFxuICAgIHZhcigtLWNvbnRlbnQtYmctY29sb3IpXFxuICApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY29udGVudDo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5jb250ZW50OjphZnRlciB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi8qIEhvbWUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLmhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCA0MCUpIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImFib3V0XFxcIlxcbiAgICBcXFwiaG91cnNcXFwiXFxuICAgIFxcXCJsb2NhdGlvbnNcXFwiXFxuICAgIFxcXCJyZXZpZXdzXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnRleHQge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiBhYm91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuaG91cnMge1xcbiAgZ3JpZC1hcmVhOiBob3VycztcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmxvY2F0aW9ucyB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9ucztcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnJldmlld3Mge1xcbiAgZ3JpZC1hcmVhOiByZXZpZXdzO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEZvb3RlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlckRpdjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jb2xvcik7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZCxZQUFZO0FBQ1o7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQSxlQUFlOztBQUVmLHFCQUFxQjtBQUNyQjtFQUNFLG1DQUFtQzs7RUFFbkMsaUNBQWlDOztFQUVqQyxzQ0FBc0M7O0VBRXRDLDBDQUEwQzs7RUFFMUMscUNBQXFDO0FBQ3ZDOztBQUVBLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDOzs7O2VBSWE7QUFDZjs7QUFFQSxlQUFlOztBQUVmLGVBQWU7QUFDZixZQUFZO0FBQ1o7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjs7RUFFckIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQSxlQUFlOztBQUVmLFlBQVk7QUFDWixZQUFZO0FBQ1o7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1DQUFtQzs7RUFFbkMsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUEsZUFBZTs7QUFFZixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5Q0FBeUM7RUFDekMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaOzs7O0dBSUM7RUFDRCxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsTUFBTTtFQUNOLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxTQUFTO0FBQ1QsWUFBWTtBQUNaO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7Ozs7YUFJVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCOztVQUVRO0VBQ1IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxlQUFlOztBQUVmLGVBQWU7O0FBRWYsZUFBZTtBQUNmLFlBQVk7QUFDWjtFQUNFLG9CQUFvQjs7RUFFcEIsd0NBQXdDO0FBQzFDOztBQUVBLGVBQWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgQ1NTICovXFxuLyogI3JlZ2lvbiAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBHbG9iYWwgVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY29sb3I6IGhzbCgwLCA2NCUsIDM2JSk7XFxuXFxuICAtLW5hdi1iZy1jb2xvcjogaHNsKDU2LCA1NiUsIDQ1JSk7XFxuXFxuICAtLWNvbnRlbnQtYmctY29sb3I6IGhzbCgxODcsIDUxJSwgNzUlKTtcXG5cXG4gIC0tY29udGVudC1jYXJkLWJnLWNvbG9yOiBoc2woOTUsIDgwJSwgNTAlKTtcXG5cXG4gIC0tZm9vdGVyLWJnLWNvbG9yOiBoc2woMTA2LCA2MCUsIDM5JSk7XFxufVxcblxcbi8qIENvbnRhaW50ZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDh2aCAxMHZoIDc3dmggNXZoLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyRGl2XFxcIlxcbiAgICBcXFwibmF2RGl2XFxcIlxcbiAgICBcXFwiY29udGVudERpdlxcXCJcXG4gICAgXFxcImZvb3RlckRpdlxcXCI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBIZWFkZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXJEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE5hdiBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLm5hdiAudGFiLXRyYXkge1xcbiAgZ3JpZC1hcmVhOiBuYXZEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbn1cXG5cXG4ubmF2IC50YWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGVudCBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50RGl2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250ZW50IGRpdiAqIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250ZW50IC5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxLy0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSxcXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgaHNsYSgwLCAwJSwgMTAwJSwgMCksXFxuICAgIHZhcigtLWNvbnRlbnQtYmctY29sb3IpXFxuICApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY29udGVudDo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5jb250ZW50OjphZnRlciB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi8qIEhvbWUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLmhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCA0MCUpIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImFib3V0XFxcIlxcbiAgICBcXFwiaG91cnNcXFwiXFxuICAgIFxcXCJsb2NhdGlvbnNcXFwiXFxuICAgIFxcXCJyZXZpZXdzXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnRleHQge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiBhYm91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuaG91cnMge1xcbiAgZ3JpZC1hcmVhOiBob3VycztcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmxvY2F0aW9ucyB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9ucztcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnJldmlld3Mge1xcbiAgZ3JpZC1hcmVhOiByZXZpZXdzO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEZvb3RlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlckRpdjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jb2xvcik7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0RGl2KCkge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWN0XCJdKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2NyaXB0cy9pbml0aWFsaXplRWxlbWVudHNcIjtcbmltcG9ydCBUZXh0Q29udGVudCBmcm9tIFwiLi90ZXh0Q29udGVudC5qc29uXCI7XG5pbXBvcnQgQmFja2dyb3VuZEltYWdlIGZyb20gXCIuLi9jb250ZW50L3NxdWFyZVBhcmNobWVudC5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZURpdigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaG9tZVwiXSk7XG5cbiAgY29uc3QgYWJvdXREaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImFib3V0XCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGFib3V0RGl2LCBUZXh0Q29udGVudC5hYm91dC50aXRsZSk7IC8vIERvbid0IHRyeSB0byBqb2luIHNpbmdsZSBsaW5lZCB0ZXh0XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHRcIl0sIGFib3V0RGl2LCBUZXh0Q29udGVudC5hYm91dC50ZXh0LmpvaW4oXCIgXCIpKTsgLy8gTXVsdGlsaW5lIHRleHQgbmVlZHMgam9pbmVkXG4gIGNvbnN0IGFib3V0QmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGFib3V0RGl2KTtcbiAgYWJvdXRCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgY29uc3QgaG91cnNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImhvdXJzXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGhvdXJzRGl2LCBUZXh0Q29udGVudC5ob3Vycy50aXRsZSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHRcIl0sIGhvdXJzRGl2LCBUZXh0Q29udGVudC5ob3Vycy50ZXh0KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1wic3ViLXRleHRcIl0sIGhvdXJzRGl2LCBUZXh0Q29udGVudC5ob3Vycy5zdWJUZXh0KTtcblxuICBjb25zdCBsb2NhdGlvbnNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImxvY2F0aW9uc1wiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBsb2NhdGlvbnNEaXYsIFRleHRDb250ZW50LmxvY2F0aW9ucy50aXRsZSk7XG4gIFRleHRDb250ZW50LmxvY2F0aW9ucy50ZXh0LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0ZXh0XCJdLCBsb2NhdGlvbnNEaXYsIGxpbmUpO1xuICB9KTtcblxuICBjb25zdCByZXZpZXdzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJyZXZpZXdzXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIHJldmlld3NEaXYsIFRleHRDb250ZW50LnJldmlld3MudGl0bGUpO1xuICBUZXh0Q29udGVudC5yZXZpZXdzLnRleHQuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHRcIl0sIHJldmlld3NEaXYsIGxpbmUpO1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2NyaXB0cy9pbml0aWFsaXplRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudURpdigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibWVudVwiXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgSG9tZVRhYiBmcm9tIFwiLi4vaG9tZVRhYi9ob21lVGFiXCI7XG5pbXBvcnQgTWVudVRhYiBmcm9tIFwiLi4vbWVudVRhYi9tZW51VGFiXCI7XG5pbXBvcnQgQ29udGFjdFRhYiBmcm9tIFwiLi4vY29udGFjdFRhYi9jb250YWN0VGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IG5hdlRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdiAudGFiXCIpO1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBsZXQgZ2VuZXJhdGVkRGl2O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRhYih0YWIpIHtcbiAgICBpZiAodGFiID09PSBcImhvbWVcIikge1xuICAgICAgZ2VuZXJhdGVkRGl2ID0gSG9tZVRhYigpO1xuICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZWREaXYpO1xuICAgIH1cbiAgICBpZiAodGFiID09PSBcIm1lbnVcIikge1xuICAgICAgZ2VuZXJhdGVkRGl2ID0gTWVudVRhYigpO1xuICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZWREaXYpO1xuICAgIH1cbiAgICBpZiAodGFiID09PSBcImNvbnRhY3RcIikge1xuICAgICAgZ2VuZXJhdGVkRGl2ID0gQ29udGFjdFRhYigpO1xuICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZWREaXYpO1xuICAgIH1cbiAgfVxuXG4gIG5hdlRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IEFycmF5LmZyb20odGFiLmNsYXNzTGlzdCk7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBjbGFzc2VzLmZpbmQoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSBcInRhYlwiKTtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN3aXRjaFRhYihhY3RpdmVDbGFzcykpO1xuICB9KTtcbn1cbiIsImltcG9ydCBIZWFkZXJJbWFnZSBmcm9tIFwiLi4vaGVhZGVyL2xhbmRzY2FwZVBhcmNobWVudC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUsIGNsYXNzZXMsIHBhcmVudCwgdGV4dENvbnRlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsRWxlbWVudHMoKSB7XG4gIC8vIENyZWF0ZSBDb250YWluZXIgRWxlbWVudHNcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWluZXJcIl0sIGRvY3VtZW50LmJvZHkpO1xuXG4gIC8vIENyZWF0ZSBIZWFkZXIgRWxlbWVudHMgdy8gQ2xhc3Nlc1xuICBjb25zdCBoZWFkZXJEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImhlYWRlclwiXSwgY29udGFpbmVyRGl2KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGhlYWRlckRpdiwgXCJUaGUgTGVnZXJkZW1haW4gTG91bmdlXCIpO1xuICBjb25zdCBoZWFkZXJCZ0ltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCBoZWFkZXJEaXYpO1xuICBoZWFkZXJCZ0ltYWdlLnNyYyA9IEhlYWRlckltYWdlO1xuXG4gIC8vIENyZWF0ZSBOYXYgRWxlbWVudHMgdy8gQ2xhc3Nlc1xuICBjb25zdCBuYXZEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIm5hdlwiXSwgY29udGFpbmVyRGl2KTtcbiAgY29uc3QgbmF2VGFiVHJheSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFiLXRyYXlcIl0sIG5hdkRpdik7XG4gIGNvbnN0IGhvbWVUYWIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhYlwiLCBcImhvbWVcIl0sIG5hdlRhYlRyYXkpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXSwgaG9tZVRhYiwgXCJIb21lXCIpO1xuICBjb25zdCBtZW51VGFiID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YWJcIiwgXCJtZW51XCJdLCBuYXZUYWJUcmF5KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW10sIG1lbnVUYWIsIFwiTWVudVwiKTtcbiAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFiXCIsIFwiY29udGFjdFwiXSwgbmF2VGFiVHJheSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdLCBjb250YWN0VGFiLCBcIkNvbnRhY3RcIik7XG5cbiAgLy8gQ3JlYXRlIENvbnRlbnQgRWxlbWVudHNcbiAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250ZW50XCJdLCBjb250YWluZXJEaXYpO1xuXG4gIC8vIENyZWF0ZSBGb290ZXIgRWxlbWVudHNcbiAgY29uc3QgZm9vdGVyRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJmb290ZXJcIl0sIGNvbnRhaW5lckRpdik7XG4gIGNvbnN0IGF1dGhvclAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJhdXRob3JcIl0sIGZvb3RlckRpdik7XG4gIGF1dGhvclAuaW5uZXJIVE1MID1cbiAgICBcIkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3hpbmNyeXB0ZWR4Jz54SW5jcnlwdGVkeDwvYT5cIjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEluaXRpYWxpemVFbGVtZW50cyBmcm9tIFwiLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuaW1wb3J0IEluaXRpYWxpemVOYXYgZnJvbSBcIi4vbmF2L25hdlwiO1xuXG5Jbml0aWFsaXplRWxlbWVudHMoKTtcbkluaXRpYWxpemVOYXYoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==