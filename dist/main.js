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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsla(0, 74%, 39%, 0);\n\n  --nav-bg-color: hsla(0, 0%, 0%, 0);\n  --nav-tab-bg-color: hsla(0, 0%, 0%, 0.4);\n\n  --content-bg-color: hsla(0, 0%, 0%, 0.4);\n  --content-scroll-fade-color: hsla(0, 0%, 0%, 0.637);\n\n  --form-bg-color: hsl(46, 22%, 78%);\n\n  --content-card-bg-color: hsla(95, 80%, 50%, 0);\n\n  --footer-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 77vh 5vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n  filter: drop-shadow(2px 2px 4px rgb(56, 56, 56));\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px grey;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: var(--nav-tab-bg-color);\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 10px 10px 0px 0px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n.nav .tab:hover {\n  box-shadow: 0px -1px 1px 1px black;\n}\n\n.nav .tab p {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-scroll-fade-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / span all;\n  grid-row: 1 / span all;\n  z-index: 0;\n}\n\n.content .home img {\n  filter: drop-shadow(2px 2px 4px grey);\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .home .sub-text {\n  grid-area: sub-text;\n  text-align: center;\n  align-self: start;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n}\n\n.content .home .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n  display: grid;\n  grid-template: 1fr 2fr 1fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\"\n    \"sub-text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .locations {\n  grid-area: locations;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n/* #endregion */\n\n/* Menu */\n/* #region */\n.content .menu {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, min-content min-content) / 1fr;\n  grid-template-areas:\n    \"appetizers-title\"\n    \"appetizers-wrapper\"\n    \"entrees-title\"\n    \"entrees-wrapper\"\n    \"beverages-title\"\n    \"beverages-wrapper\"\n    \"desserts-title\"\n    \"desserts-wrapper\";\n  gap: 15px 0px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.content .menu .section {\n  display: grid;\n  height: 7vh;\n  width: 90%;\n  border-bottom: 1px dotted white;\n}\n\n.content .menu .section .title {\n  align-self: end;\n  justify-self: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  text-shadow: 2px 2px 4px grey;\n}\n\n.content .menu .wrapper {\n  position: relative;\n  display: grid;\n  justify-items: center;\n\n  height: min-content;\n  width: 90vw;\n}\n\n.content .menu .wrapper .background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: drop-shadow(2px 2px 4px grey);\n}\n\n.content .menu .wrapper .entry {\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 3fr 1fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title price .\"\n    \". description description .\"\n    \". . . .\";\n  gap: 15px 0px;\n  background-color: var(--content-card-bg-color);\n  width: 100%;\n  height: 12vh;\n}\n\n.content .menu .wrapper .entry.spacer {\n  height: 5vh;\n}\n\n.content .menu .wrapper .entry .title {\n  grid-area: title;\n  font-weight: bold;\n}\n\n.content .menu .wrapper .entry .price {\n  grid-area: price;\n  justify-self: end;\n  font-style: italic;\n}\n\n.content .menu .wrapper .entry .description {\n  grid-area: description;\n  font-size: 0.9rem;\n}\n\n.content .menu .section.title.appetizers {\n  grid-area: appetizers-title;\n}\n\n.content .menu .wrapper.appetizers {\n  grid-area: appetizers-wrapper;\n}\n\n.content .menu .section.title.entrees {\n  grid-area: entrees-title;\n}\n\n.content .menu .wrapper.entrees {\n  grid-area: entrees-wrapper;\n}\n\n.content .menu .section.title.beverages {\n  grid-area: beverages-title;\n}\n\n.content .menu .wrapper.beverages {\n  grid-area: beverages-wrapper;\n}\n\n.content .menu .section.title.desserts {\n  grid-area: desserts-title;\n}\n\n.content .menu .wrapper.desserts {\n  grid-area: desserts-wrapper;\n}\n\n/* #endregion */\n\n/* Contact */\n/* #region */\n.content .contact {\n  height: 100%;\n  display: grid;\n  grid-template: 50% 90% / 1fr;\n  grid-template-areas:\n    \"leylines\"\n    \"message\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .contact div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .contact div p {\n  width: 70%;\n}\n\n.content .contact .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  z-index: 0;\n}\n\n.content .contact .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n  grid-auto-rows: 8vh;\n}\n\n.content .contact .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n.content .contact .text {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .contact img {\n  filter: drop-shadow(2px 2px 4px grey);\n}\n\n.content .contact .leylines {\n  grid-area: leylines;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .contact .message {\n  grid-area: message;\n  display: grid;\n  grid-template: 0.5fr 1fr 5fr 0.7fr 0.5fr/ 1fr 2fr 2fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title title .\"\n    \". form form .\"\n    \". . submit .\"\n    \". . . .\";\n  row-gap: 15px;\n}\n\n.content .contact .message form {\n  grid-area: form;\n  display: grid;\n  grid-template: 0.5fr 1fr 0.5fr 4fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"subject-label subject-label\"\n    \"subject subject\"\n    \"message-content-label message-content-label\"\n    \"message-content message-content\";\n}\n\n.content .contact label {\n  align-self: center;\n  font-style: italic;\n}\n\n.content .contact label.subject {\n  grid-area: subject-label;\n}\n\n.content .contact input.subject {\n  grid-area: subject;\n  height: 1.5rem;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n}\n\n.content .contact label.message-content {\n  grid-area: message-content-label;\n}\n\n.content .contact textarea.message-content {\n  grid-area: message-content;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n  resize: none;\n}\n\n.content .contact .submit {\n  grid-area: submit;\n  background-color: var(--form-bg-color);\n  font-size: 1.1rem;\n  font-weight: bold;\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.content .contact .submit:hover {\n  background-color: hsl(45, 33%, 61%);\n  border: 2px solid grey;\n}\n\n.content .contact .submit:active {\n  background-color: hsl(43, 18%, 51%);\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n  display: grid;\n  grid-template: 1fr 1fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"author .\"\n    \"author .\"\n    \"author .\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--footer-bg-color);\n  color: white;\n}\n\n.footer .author {\n  grid-area: author;\n  font-size: 0.8rem;\n}\n\n.footer .attribution {\n  font-size: 0.7rem;\n}\n\n/* #endregion */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsla(0, 74%, 39%, 0);\n\n  --nav-bg-color: hsla(0, 0%, 0%, 0);\n  --nav-tab-bg-color: hsla(0, 0%, 0%, 0.4);\n\n  --content-bg-color: hsla(0, 0%, 0%, 0.4);\n  --content-scroll-fade-color: hsla(0, 0%, 0%, 0.637);\n\n  --form-bg-color: hsl(46, 22%, 78%);\n\n  --content-card-bg-color: hsla(95, 80%, 50%, 0);\n\n  --footer-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 77vh 5vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n  filter: drop-shadow(2px 2px 4px rgb(56, 56, 56));\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px grey;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: var(--nav-tab-bg-color);\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 10px 10px 0px 0px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n.nav .tab:hover {\n  box-shadow: 0px -1px 1px 1px black;\n}\n\n.nav .tab p {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-scroll-fade-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / span all;\n  grid-row: 1 / span all;\n  z-index: 0;\n}\n\n.content .home img {\n  filter: drop-shadow(2px 2px 4px grey);\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .home .sub-text {\n  grid-area: sub-text;\n  text-align: center;\n  align-self: start;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n}\n\n.content .home .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n  display: grid;\n  grid-template: 1fr 2fr 1fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\"\n    \"sub-text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .locations {\n  grid-area: locations;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n/* #endregion */\n\n/* Menu */\n/* #region */\n.content .menu {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, min-content min-content) / 1fr;\n  grid-template-areas:\n    \"appetizers-title\"\n    \"appetizers-wrapper\"\n    \"entrees-title\"\n    \"entrees-wrapper\"\n    \"beverages-title\"\n    \"beverages-wrapper\"\n    \"desserts-title\"\n    \"desserts-wrapper\";\n  gap: 15px 0px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.content .menu .section {\n  display: grid;\n  height: 7vh;\n  width: 90%;\n  border-bottom: 1px dotted white;\n}\n\n.content .menu .section .title {\n  align-self: end;\n  justify-self: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  text-shadow: 2px 2px 4px grey;\n}\n\n.content .menu .wrapper {\n  position: relative;\n  display: grid;\n  justify-items: center;\n\n  height: min-content;\n  width: 90vw;\n}\n\n.content .menu .wrapper .background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: drop-shadow(2px 2px 4px grey);\n}\n\n.content .menu .wrapper .entry {\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 3fr 1fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title price .\"\n    \". description description .\"\n    \". . . .\";\n  gap: 15px 0px;\n  background-color: var(--content-card-bg-color);\n  width: 100%;\n  height: 12vh;\n}\n\n.content .menu .wrapper .entry.spacer {\n  height: 5vh;\n}\n\n.content .menu .wrapper .entry .title {\n  grid-area: title;\n  font-weight: bold;\n}\n\n.content .menu .wrapper .entry .price {\n  grid-area: price;\n  justify-self: end;\n  font-style: italic;\n}\n\n.content .menu .wrapper .entry .description {\n  grid-area: description;\n  font-size: 0.9rem;\n}\n\n.content .menu .section.title.appetizers {\n  grid-area: appetizers-title;\n}\n\n.content .menu .wrapper.appetizers {\n  grid-area: appetizers-wrapper;\n}\n\n.content .menu .section.title.entrees {\n  grid-area: entrees-title;\n}\n\n.content .menu .wrapper.entrees {\n  grid-area: entrees-wrapper;\n}\n\n.content .menu .section.title.beverages {\n  grid-area: beverages-title;\n}\n\n.content .menu .wrapper.beverages {\n  grid-area: beverages-wrapper;\n}\n\n.content .menu .section.title.desserts {\n  grid-area: desserts-title;\n}\n\n.content .menu .wrapper.desserts {\n  grid-area: desserts-wrapper;\n}\n\n/* #endregion */\n\n/* Contact */\n/* #region */\n.content .contact {\n  height: 100%;\n  display: grid;\n  grid-template: 50% 90% / 1fr;\n  grid-template-areas:\n    \"leylines\"\n    \"message\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .contact div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .contact div p {\n  width: 70%;\n}\n\n.content .contact .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  z-index: 0;\n}\n\n.content .contact .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n  grid-auto-rows: 8vh;\n}\n\n.content .contact .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n.content .contact .text {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .contact img {\n  filter: drop-shadow(2px 2px 4px grey);\n}\n\n.content .contact .leylines {\n  grid-area: leylines;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .contact .message {\n  grid-area: message;\n  display: grid;\n  grid-template: 0.5fr 1fr 5fr 0.7fr 0.5fr/ 1fr 2fr 2fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title title .\"\n    \". form form .\"\n    \". . submit .\"\n    \". . . .\";\n  row-gap: 15px;\n}\n\n.content .contact .message form {\n  grid-area: form;\n  display: grid;\n  grid-template: 0.5fr 1fr 0.5fr 4fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"subject-label subject-label\"\n    \"subject subject\"\n    \"message-content-label message-content-label\"\n    \"message-content message-content\";\n}\n\n.content .contact label {\n  align-self: center;\n  font-style: italic;\n}\n\n.content .contact label.subject {\n  grid-area: subject-label;\n}\n\n.content .contact input.subject {\n  grid-area: subject;\n  height: 1.5rem;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n}\n\n.content .contact label.message-content {\n  grid-area: message-content-label;\n}\n\n.content .contact textarea.message-content {\n  grid-area: message-content;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n  resize: none;\n}\n\n.content .contact .submit {\n  grid-area: submit;\n  background-color: var(--form-bg-color);\n  font-size: 1.1rem;\n  font-weight: bold;\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.content .contact .submit:hover {\n  background-color: hsl(45, 33%, 61%);\n  border: 2px solid grey;\n}\n\n.content .contact .submit:active {\n  background-color: hsl(43, 18%, 51%);\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n  display: grid;\n  grid-template: 1fr 1fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"author .\"\n    \"author .\"\n    \"author .\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--footer-bg-color);\n  color: white;\n}\n\n.footer .author {\n  grid-area: author;\n  font-size: 0.8rem;\n}\n\n.footer .attribution {\n  font-size: 0.7rem;\n}\n\n/* #endregion */\n"],"sourceRoot":""}]);
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
/* harmony import */ var _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/squareParchment.svg */ "./src/content/squareParchment.svg");
/* harmony import */ var _textContent_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textContent.json */ "./src/contactTab/textContent.json");




function createContactDiv() {
  const element = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["contact"]);

  const leylinesDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["leylines"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], leylinesDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_2__.leylines.title);
  const leylinesWrapper = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["wrapper"], leylinesDiv);
  _textContent_json__WEBPACK_IMPORTED_MODULE_2__.leylines.text.forEach((line) => {
    (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text"], leylinesWrapper, line);
  });
  const leylinesBgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], leylinesDiv);
  leylinesBgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_1__;

  const messageDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["message"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], messageDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_2__.message.title);
  const messageForm = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", [], messageDiv);
  messageForm.setAttribute("id", "message-form");
  const subjectLabel = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "label",
    ["subject"],
    messageForm,
    "Subject:"
  );
  subjectLabel.setAttribute("for", "subject-input");
  const subjectInput = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", ["subject"], messageForm);
  subjectInput.setAttribute("type", "text");
  subjectInput.setAttribute("id", "subject-input");
  const messageContentLabel = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "label",
    ["message-content"],
    messageForm,
    "Message:"
  );
  messageContentLabel.setAttribute("for", "message-content-textarea");
  const messageContentTextarea = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "textarea",
    ["message-content"],
    messageForm
  );
  messageContentTextarea.setAttribute("id", "message-content-textarea");
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["submit"], messageDiv, "Send");
  const messageBgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], messageDiv);
  messageBgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_1__;

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
  const hoursBgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], hoursDiv);
  hoursBgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__;

  const locationsDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["locations"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], locationsDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.locations.title);
  const locationsWrapper = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["wrapper"], locationsDiv);
  _textContent_json__WEBPACK_IMPORTED_MODULE_1__.locations.text.forEach((line) => {
    (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text-entry"], locationsWrapper, line);
  });
  const locationsBgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], locationsDiv);
  locationsBgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__;

  const reviewsDiv = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["reviews"], element);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title"], reviewsDiv, _textContent_json__WEBPACK_IMPORTED_MODULE_1__.reviews.title);
  const reviewsWrapper = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["wrapper"], reviewsDiv);
  _textContent_json__WEBPACK_IMPORTED_MODULE_1__.reviews.text.forEach((line) => {
    (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["text-entry"], reviewsWrapper, line);
  });
  const reviewsBgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], reviewsDiv);
  reviewsBgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__;

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
/* harmony import */ var _textContent_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textContent.json */ "./src/menuTab/textContent.json");
/* harmony import */ var _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/squareParchment.svg */ "./src/content/squareParchment.svg");




function createMenu(category, parent) {
  const section = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["section", category], parent);
  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["title", category], section, _textContent_json__WEBPACK_IMPORTED_MODULE_1__[category].title);
  const wrapper = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["wrapper", category], parent);

  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["entry", "spacer"], wrapper);

  Object.keys(_textContent_json__WEBPACK_IMPORTED_MODULE_1__[category]).forEach((key) => {
    if (key !== "title") {
      const entry = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["entry", category], wrapper);
      (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        ["title", category],
        entry,
        _textContent_json__WEBPACK_IMPORTED_MODULE_1__[category][key].name
      );
      (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        ["description", category],
        entry,
        _textContent_json__WEBPACK_IMPORTED_MODULE_1__[category][key].description
      );
      (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "p",
        ["price", category],
        entry,
        _textContent_json__WEBPACK_IMPORTED_MODULE_1__[category][key].price
      );
    }
  });

  (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["entry", "spacer"], wrapper);

  const bgImg = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["background"], wrapper);
  bgImg.src = _content_squareParchment_svg__WEBPACK_IMPORTED_MODULE_2__;
}

function createMenuDiv() {
  const element = (0,_scripts_initializeElements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["menu"]);

  createMenu("appetizers", element);
  createMenu("entrees", element);
  createMenu("beverages", element);
  createMenu("desserts", element);

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
/* harmony import */ var _footer_attribution_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/attribution.json */ "./src/footer/attribution.json");
/* harmony import */ var _images_purpleLattice_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/purpleLattice.jpg */ "./src/images/purpleLattice.jpg");




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
  containerDiv.style.backgroundImage = `url(${_images_purpleLattice_jpg__WEBPACK_IMPORTED_MODULE_2__})`;

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
  _footer_attribution_json__WEBPACK_IMPORTED_MODULE_1__.entries.forEach((entry) => {
    const entryElement = createElement("p", ["attribution"], footerDiv);
    entryElement.innerHTML = entry;
  });
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

/***/ "./src/images/purpleLattice.jpg":
/*!**************************************!*\
  !*** ./src/images/purpleLattice.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f45c6986bbf46fabf63.jpg";

/***/ }),

/***/ "./src/contactTab/textContent.json":
/*!*****************************************!*\
  !*** ./src/contactTab/textContent.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"leylines":{"title":"Leyline Coordinates","text":["Arathi Highlands:   555-555-1234","Crystalsong Forest: 555-555-4321","Broken Isles:       555-555-1423"]},"message":{"title":"Send Us a Message"}}');

/***/ }),

/***/ "./src/footer/attribution.json":
/*!*************************************!*\
  !*** ./src/footer/attribution.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"entries":["Landscape Parchment - <a href=\'https://freesvg.org/revans2-landscape-parchment-background\'>OpenClipart</a>","Parchment - <a href=\'https://freesvg.org/parchment\'>OpenClipart</a>","Background Image by <a href=\'https://pixabay.com/users/chenspec-7784448/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6474806\'>Chen</a> from <a href=\'https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6474806\'>Pixabay</a>"]}');

/***/ }),

/***/ "./src/homeTab/textContent.json":
/*!**************************************!*\
  !*** ./src/homeTab/textContent.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"about":{"title":"About Us...","text":["Originally built during the age of the Arathorian Empire and known as \'The Hocus Pocus Inn\',","The Legerdemain Lounge is now a well-known destination for adventurers all throughout Azeroth."]},"hours":{"title":"Hours of Operation","text":"We are happy to serve you every hour of every day of the year! ","subText":" Excluding regularly scheduled maintenance."},"locations":{"title":"Locations","text":["Arathi Highlands, Pre-619 K.C.","Above Crystalsong Forest, 619 - 626 K.C.","Above The Broken Isles, 626 K.C. - Present"],"subText":"Temporal locations included for the chromatically enabled."},"reviews":{"title":"Customer Reviews","text":["The accommodations are lovely and the coffee pot is always full. I come here every day! -Trevor Page","De grub be good, but stay away from de gnoll stew. -Ol\'Toomba"]}}');

/***/ }),

/***/ "./src/menuTab/textContent.json":
/*!**************************************!*\
  !*** ./src/menuTab/textContent.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"appetizers":{"title":"Appetizers","entry 1":{"name":"Sweet Potato Bread","description":"Fresh baked semi-sweet bread served with melted butter.","price":"1 G 60 S"},"entry 2":{"name":"Azsunian Olives","description":"Locally sourced and soaked in magically-aged arcwine.","price":"85 S"},"entry 3":{"name":"Dalaran Rice Pudding","description":"Savory and fluffy, made from exotic Pandarian imports.","price":"5 G"},"entry 4":{"name":"Briny Hardcheese","description":"Salty and sharp. Served with crusty flatbread.","price":"2 G 45 S"}},"entrees":{"title":"Entrees","entry 1":{"name":"Mead Basted Caribou","description":"Borean caribou flank marinated and slow roasted to perfection.","price":"1 G 60 S"},"entry 2":{"name":"Smoked Elderhorn","description":"Smoked for fourteen hours over Valsharahn oak logs.","price":"2 G 50 S"},"entry 3":{"name":"Thundertotem Rice Cake","description":"Made with Highmountain salmon. Vegetarian option available.","price":"2 G 50 S"},"entry 4":{"name":"Scallion Kimchi","description":"Fresh scallions, cabbage and radishes make this zesty dish a local favorite.","price":"2 G 50 S"}},"beverages":{"title":"Beverages","entry 1":{"name":"Ley-Enriched Water","description":"Cool and crisp. Quadruple-filtered and infused with arcane energy.","price":"2 G 50 S"},"entry 2":{"name":"Pungent Seal Whey","description":"It\'s better than it sounds.","price":"85 S"},"entry 3":{"name":"Legendermainy Light Roast","description":"A smooth and silky coffee blend with hints of hazelnut.","price":"2 G 50 S"},"entry 4":{"name":"Northrend Honey Mead","description":"Originally brewed by the Vrykul, now a popular staple for Inns everywhere.","price":"50 C"}},"desserts":{"title":"Desserts","entry 1":{"name":"Honey Croissant","description":"Fresh baked daily with warm nuts and organic honey.","price":"5 G"},"entry 2":{"name":"Val\'sharah Berry Pie","description":"Candied arcberries fill this flakey, buttery crust.","price":"5 G"}}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLFVBQVUsVUFBVSxL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LGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lDO0FBQ3hCOztBQUV0Qyx1RUFBa0I7QUFDbEIsb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbnRhY3RUYWIvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZVRhYi9ob21lVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9tZW51VGFiL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL25hdi9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvaW5pdGlhbGl6ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSZXNldCBDU1MgKi9cXG4vKiAjcmVnaW9uICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogaHNsYSgwLCA3NCUsIDM5JSwgMCk7XFxuXFxuICAtLW5hdi1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDApO1xcbiAgLS1uYXYtdGFiLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40KTtcXG5cXG4gIC0tY29udGVudC1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNCk7XFxuICAtLWNvbnRlbnQtc2Nyb2xsLWZhZGUtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjYzNyk7XFxuXFxuICAtLWZvcm0tYmctY29sb3I6IGhzbCg0NiwgMjIlLCA3OCUpO1xcblxcbiAgLS1jb250ZW50LWNhcmQtYmctY29sb3I6IGhzbGEoOTUsIDgwJSwgNTAlLCAwKTtcXG5cXG4gIC0tZm9vdGVyLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC43NSk7XFxufVxcblxcbi8qIENvbnRhaW50ZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDh2aCAxMHZoIDc3dmggNXZoLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyRGl2XFxcIlxcbiAgICBcXFwibmF2RGl2XFxcIlxcbiAgICBcXFwiY29udGVudERpdlxcXCJcXG4gICAgXFxcImZvb3RlckRpdlxcXCI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBIZWFkZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXJEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHotaW5kZXg6IDA7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggZ3JleTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE5hdiBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLm5hdiAudGFiLXRyYXkge1xcbiAgZ3JpZC1hcmVhOiBuYXZEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbn1cXG5cXG4ubmF2IC50YWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LXRhYi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYgLnRhYjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggLTFweCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4ubmF2IC50YWIgcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGVudCBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50RGl2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250ZW50IGRpdiAqIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250ZW50OjpiZWZvcmUsXFxuLmNvbnRlbnQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgIGhzbGEoMCwgMCUsIDEwMCUsIDApLFxcbiAgICB2YXIoLS1jb250ZW50LXNjcm9sbC1mYWRlLWNvbG9yKVxcbiAgKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBIb21lICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IC5ob21lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgNDAlKSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhYm91dFxcXCJcXG4gICAgXFxcImhvdXJzXFxcIlxcbiAgICBcXFwibG9jYXRpb25zXFxcIlxcbiAgICBcXFwicmV2aWV3c1xcXCI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jYXJkLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gYWxsO1xcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIGFsbDtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGltZyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IGdyZXkpO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC50ZXh0IHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuc3ViLXRleHQge1xcbiAgZ3JpZC1hcmVhOiBzdWItdGV4dDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLndyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmFib3V0IHtcXG4gIGdyaWQtYXJlYTogYWJvdXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmhvdXJzIHtcXG4gIGdyaWQtYXJlYTogaG91cnM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDJmciAxZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIlxcbiAgICBcXFwic3ViLXRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmxvY2F0aW9ucyB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9ucztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAucmV2aWV3cyB7XFxuICBncmlkLWFyZWE6IHJldmlld3M7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE1lbnUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLm1lbnUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBtaW4tY29udGVudCBtaW4tY29udGVudCkgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYXBwZXRpemVycy10aXRsZVxcXCJcXG4gICAgXFxcImFwcGV0aXplcnMtd3JhcHBlclxcXCJcXG4gICAgXFxcImVudHJlZXMtdGl0bGVcXFwiXFxuICAgIFxcXCJlbnRyZWVzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJiZXZlcmFnZXMtdGl0bGVcXFwiXFxuICAgIFxcXCJiZXZlcmFnZXMtd3JhcHBlclxcXCJcXG4gICAgXFxcImRlc3NlcnRzLXRpdGxlXFxcIlxcbiAgICBcXFwiZGVzc2VydHMtd3JhcHBlclxcXCI7XFxuICBnYXA6IDE1cHggMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24gLnRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggZ3JleSk7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyIDNmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gLiAuIC5cXFwiXFxuICAgIFxcXCIuIHRpdGxlIHByaWNlIC5cXFwiXFxuICAgIFxcXCIuIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC5cXFwiXFxuICAgIFxcXCIuIC4gLiAuXFxcIjtcXG4gIGdhcDogMTVweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEydmg7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeS5zcGFjZXIge1xcbiAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLnByaWNlIHtcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC5kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmFwcGV0aXplcnMge1xcbiAgZ3JpZC1hcmVhOiBhcHBldGl6ZXJzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5hcHBldGl6ZXJzIHtcXG4gIGdyaWQtYXJlYTogYXBwZXRpemVycy13cmFwcGVyO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5lbnRyZWVzIHtcXG4gIGdyaWQtYXJlYTogZW50cmVlcy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuZW50cmVlcyB7XFxuICBncmlkLWFyZWE6IGVudHJlZXMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuYmV2ZXJhZ2VzIHtcXG4gIGdyaWQtYXJlYTogYmV2ZXJhZ2VzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5iZXZlcmFnZXMge1xcbiAgZ3JpZC1hcmVhOiBiZXZlcmFnZXMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cy13cmFwcGVyO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGFjdCAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCAuY29udGFjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTAlIDkwJSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJsZXlsaW5lc1xcXCJcXG4gICAgXFxcIm1lc3NhZ2VcXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGRpdiBwIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAud3JhcHBlciB7XFxuICBncmlkLWFyZWE6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDh2aDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC50ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbWcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCBncmV5KTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLmxleWxpbmVzIHtcXG4gIGdyaWQtYXJlYTogbGV5bGluZXM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2Uge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDFmciA1ZnIgMC43ZnIgMC41ZnIvIDFmciAyZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLiAuXFxcIlxcbiAgICBcXFwiLiB0aXRsZSB0aXRsZSAuXFxcIlxcbiAgICBcXFwiLiBmb3JtIGZvcm0gLlxcXCJcXG4gICAgXFxcIi4gLiBzdWJtaXQgLlxcXCJcXG4gICAgXFxcIi4gLiAuIC5cXFwiO1xcbiAgcm93LWdhcDogMTVweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2UgZm9ybSB7XFxuICBncmlkLWFyZWE6IGZvcm07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgMWZyIDAuNWZyIDRmciAxZnIvIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic3ViamVjdC1sYWJlbCBzdWJqZWN0LWxhYmVsXFxcIlxcbiAgICBcXFwic3ViamVjdCBzdWJqZWN0XFxcIlxcbiAgICBcXFwibWVzc2FnZS1jb250ZW50LWxhYmVsIG1lc3NhZ2UtY29udGVudC1sYWJlbFxcXCJcXG4gICAgXFxcIm1lc3NhZ2UtY29udGVudCBtZXNzYWdlLWNvbnRlbnRcXFwiO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGxhYmVsLnN1YmplY3Qge1xcbiAgZ3JpZC1hcmVhOiBzdWJqZWN0LWxhYmVsO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbnB1dC5zdWJqZWN0IHtcXG4gIGdyaWQtYXJlYTogc3ViamVjdDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlLWNvbnRlbnQtbGFiZWw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IHRleHRhcmVhLm1lc3NhZ2UtY29udGVudCB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2UtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NSwgMzMlLCA2MSUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQzLCAxOCUsIDUxJSk7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogRm9vdGVyIERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyRGl2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyLyAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImF1dGhvciAuXFxcIlxcbiAgICBcXFwiYXV0aG9yIC5cXFwiXFxuICAgIFxcXCJhdXRob3IgLlxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb3RlciAuYXV0aG9yIHtcXG4gIGdyaWQtYXJlYTogYXV0aG9yO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mb290ZXIgLmF0dHJpYnV0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2QsWUFBWTtBQUNaOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztFQVdFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUEs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O0VBQ2xCLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBLGVBQWU7O0FBRWYsZUFBZTs7QUFFZixlQUFlO0FBQ2YsWUFBWTtBQUNaO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkM7OztjQUdZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjs7RUFFckIsd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBDU1MgKi9cXG4vKiAjcmVnaW9uICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogaHNsYSgwLCA3NCUsIDM5JSwgMCk7XFxuXFxuICAtLW5hdi1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDApO1xcbiAgLS1uYXYtdGFiLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40KTtcXG5cXG4gIC0tY29udGVudC1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNCk7XFxuICAtLWNvbnRlbnQtc2Nyb2xsLWZhZGUtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjYzNyk7XFxuXFxuICAtLWZvcm0tYmctY29sb3I6IGhzbCg0NiwgMjIlLCA3OCUpO1xcblxcbiAgLS1jb250ZW50LWNhcmQtYmctY29sb3I6IGhzbGEoOTUsIDgwJSwgNTAlLCAwKTtcXG5cXG4gIC0tZm9vdGVyLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC43NSk7XFxufVxcblxcbi8qIENvbnRhaW50ZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDh2aCAxMHZoIDc3dmggNXZoLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyRGl2XFxcIlxcbiAgICBcXFwibmF2RGl2XFxcIlxcbiAgICBcXFwiY29udGVudERpdlxcXCJcXG4gICAgXFxcImZvb3RlckRpdlxcXCI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBIZWFkZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXJEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHotaW5kZXg6IDA7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggZ3JleTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE5hdiBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLm5hdiAudGFiLXRyYXkge1xcbiAgZ3JpZC1hcmVhOiBuYXZEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbn1cXG5cXG4ubmF2IC50YWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LXRhYi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYgLnRhYjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggLTFweCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4ubmF2IC50YWIgcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGVudCBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50RGl2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250ZW50IGRpdiAqIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250ZW50OjpiZWZvcmUsXFxuLmNvbnRlbnQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgIGhzbGEoMCwgMCUsIDEwMCUsIDApLFxcbiAgICB2YXIoLS1jb250ZW50LXNjcm9sbC1mYWRlLWNvbG9yKVxcbiAgKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBIb21lICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IC5ob21lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgNDAlKSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhYm91dFxcXCJcXG4gICAgXFxcImhvdXJzXFxcIlxcbiAgICBcXFwibG9jYXRpb25zXFxcIlxcbiAgICBcXFwicmV2aWV3c1xcXCI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jYXJkLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gYWxsO1xcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIGFsbDtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGltZyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IGdyZXkpO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC50ZXh0IHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuc3ViLXRleHQge1xcbiAgZ3JpZC1hcmVhOiBzdWItdGV4dDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLndyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmFib3V0IHtcXG4gIGdyaWQtYXJlYTogYWJvdXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmhvdXJzIHtcXG4gIGdyaWQtYXJlYTogaG91cnM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDJmciAxZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIlxcbiAgICBcXFwic3ViLXRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmxvY2F0aW9ucyB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9ucztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAucmV2aWV3cyB7XFxuICBncmlkLWFyZWE6IHJldmlld3M7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE1lbnUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLm1lbnUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBtaW4tY29udGVudCBtaW4tY29udGVudCkgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYXBwZXRpemVycy10aXRsZVxcXCJcXG4gICAgXFxcImFwcGV0aXplcnMtd3JhcHBlclxcXCJcXG4gICAgXFxcImVudHJlZXMtdGl0bGVcXFwiXFxuICAgIFxcXCJlbnRyZWVzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJiZXZlcmFnZXMtdGl0bGVcXFwiXFxuICAgIFxcXCJiZXZlcmFnZXMtd3JhcHBlclxcXCJcXG4gICAgXFxcImRlc3NlcnRzLXRpdGxlXFxcIlxcbiAgICBcXFwiZGVzc2VydHMtd3JhcHBlclxcXCI7XFxuICBnYXA6IDE1cHggMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24gLnRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggZ3JleSk7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyIDNmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gLiAuIC5cXFwiXFxuICAgIFxcXCIuIHRpdGxlIHByaWNlIC5cXFwiXFxuICAgIFxcXCIuIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC5cXFwiXFxuICAgIFxcXCIuIC4gLiAuXFxcIjtcXG4gIGdhcDogMTVweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEydmg7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeS5zcGFjZXIge1xcbiAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLnByaWNlIHtcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC5kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmFwcGV0aXplcnMge1xcbiAgZ3JpZC1hcmVhOiBhcHBldGl6ZXJzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5hcHBldGl6ZXJzIHtcXG4gIGdyaWQtYXJlYTogYXBwZXRpemVycy13cmFwcGVyO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5lbnRyZWVzIHtcXG4gIGdyaWQtYXJlYTogZW50cmVlcy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuZW50cmVlcyB7XFxuICBncmlkLWFyZWE6IGVudHJlZXMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuYmV2ZXJhZ2VzIHtcXG4gIGdyaWQtYXJlYTogYmV2ZXJhZ2VzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5iZXZlcmFnZXMge1xcbiAgZ3JpZC1hcmVhOiBiZXZlcmFnZXMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cy13cmFwcGVyO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGFjdCAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCAuY29udGFjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTAlIDkwJSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJsZXlsaW5lc1xcXCJcXG4gICAgXFxcIm1lc3NhZ2VcXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGRpdiBwIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAud3JhcHBlciB7XFxuICBncmlkLWFyZWE6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDh2aDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC50ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbWcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCBncmV5KTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLmxleWxpbmVzIHtcXG4gIGdyaWQtYXJlYTogbGV5bGluZXM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2Uge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDFmciA1ZnIgMC43ZnIgMC41ZnIvIDFmciAyZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLiAuXFxcIlxcbiAgICBcXFwiLiB0aXRsZSB0aXRsZSAuXFxcIlxcbiAgICBcXFwiLiBmb3JtIGZvcm0gLlxcXCJcXG4gICAgXFxcIi4gLiBzdWJtaXQgLlxcXCJcXG4gICAgXFxcIi4gLiAuIC5cXFwiO1xcbiAgcm93LWdhcDogMTVweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2UgZm9ybSB7XFxuICBncmlkLWFyZWE6IGZvcm07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgMWZyIDAuNWZyIDRmciAxZnIvIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic3ViamVjdC1sYWJlbCBzdWJqZWN0LWxhYmVsXFxcIlxcbiAgICBcXFwic3ViamVjdCBzdWJqZWN0XFxcIlxcbiAgICBcXFwibWVzc2FnZS1jb250ZW50LWxhYmVsIG1lc3NhZ2UtY29udGVudC1sYWJlbFxcXCJcXG4gICAgXFxcIm1lc3NhZ2UtY29udGVudCBtZXNzYWdlLWNvbnRlbnRcXFwiO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGxhYmVsLnN1YmplY3Qge1xcbiAgZ3JpZC1hcmVhOiBzdWJqZWN0LWxhYmVsO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbnB1dC5zdWJqZWN0IHtcXG4gIGdyaWQtYXJlYTogc3ViamVjdDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlLWNvbnRlbnQtbGFiZWw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IHRleHRhcmVhLm1lc3NhZ2UtY29udGVudCB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2UtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NSwgMzMlLCA2MSUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQzLCAxOCUsIDUxJSk7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogRm9vdGVyIERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyRGl2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyLyAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImF1dGhvciAuXFxcIlxcbiAgICBcXFwiYXV0aG9yIC5cXFwiXFxuICAgIFxcXCJhdXRob3IgLlxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb3RlciAuYXV0aG9yIHtcXG4gIGdyaWQtYXJlYTogYXV0aG9yO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mb290ZXIgLmF0dHJpYnV0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2NyaXB0cy9pbml0aWFsaXplRWxlbWVudHNcIjtcbmltcG9ydCBCYWNrZ3JvdW5kSW1hZ2UgZnJvbSBcIi4uL2NvbnRlbnQvc3F1YXJlUGFyY2htZW50LnN2Z1wiO1xuaW1wb3J0IFRleHRDb250ZW50IGZyb20gXCIuL3RleHRDb250ZW50Lmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdERpdigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFjdFwiXSk7XG5cbiAgY29uc3QgbGV5bGluZXNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImxleWxpbmVzXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGxleWxpbmVzRGl2LCBUZXh0Q29udGVudC5sZXlsaW5lcy50aXRsZSk7XG4gIGNvbnN0IGxleWxpbmVzV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid3JhcHBlclwiXSwgbGV5bGluZXNEaXYpO1xuICBUZXh0Q29udGVudC5sZXlsaW5lcy50ZXh0LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0ZXh0XCJdLCBsZXlsaW5lc1dyYXBwZXIsIGxpbmUpO1xuICB9KTtcbiAgY29uc3QgbGV5bGluZXNCZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgbGV5bGluZXNEaXYpO1xuICBsZXlsaW5lc0JnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcblxuICBjb25zdCBtZXNzYWdlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJtZXNzYWdlXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIG1lc3NhZ2VEaXYsIFRleHRDb250ZW50Lm1lc3NhZ2UudGl0bGUpO1xuICBjb25zdCBtZXNzYWdlRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIFtdLCBtZXNzYWdlRGl2KTtcbiAgbWVzc2FnZUZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlLWZvcm1cIik7XG4gIGNvbnN0IHN1YmplY3RMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJsYWJlbFwiLFxuICAgIFtcInN1YmplY3RcIl0sXG4gICAgbWVzc2FnZUZvcm0sXG4gICAgXCJTdWJqZWN0OlwiXG4gICk7XG4gIHN1YmplY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzdWJqZWN0LWlucHV0XCIpO1xuICBjb25zdCBzdWJqZWN0SW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW1wic3ViamVjdFwiXSwgbWVzc2FnZUZvcm0pO1xuICBzdWJqZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHN1YmplY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1YmplY3QtaW5wdXRcIik7XG4gIGNvbnN0IG1lc3NhZ2VDb250ZW50TGFiZWwgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwibGFiZWxcIixcbiAgICBbXCJtZXNzYWdlLWNvbnRlbnRcIl0sXG4gICAgbWVzc2FnZUZvcm0sXG4gICAgXCJNZXNzYWdlOlwiXG4gICk7XG4gIG1lc3NhZ2VDb250ZW50TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVzc2FnZS1jb250ZW50LXRleHRhcmVhXCIpO1xuICBjb25zdCBtZXNzYWdlQ29udGVudFRleHRhcmVhID0gY3JlYXRlRWxlbWVudChcbiAgICBcInRleHRhcmVhXCIsXG4gICAgW1wibWVzc2FnZS1jb250ZW50XCJdLFxuICAgIG1lc3NhZ2VGb3JtXG4gICk7XG4gIG1lc3NhZ2VDb250ZW50VGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlLWNvbnRlbnQtdGV4dGFyZWFcIik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wic3VibWl0XCJdLCBtZXNzYWdlRGl2LCBcIlNlbmRcIik7XG4gIGNvbnN0IG1lc3NhZ2VCZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgbWVzc2FnZURpdik7XG4gIG1lc3NhZ2VCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL3NjcmlwdHMvaW5pdGlhbGl6ZUVsZW1lbnRzXCI7XG5pbXBvcnQgVGV4dENvbnRlbnQgZnJvbSBcIi4vdGV4dENvbnRlbnQuanNvblwiO1xuaW1wb3J0IEJhY2tncm91bmRJbWFnZSBmcm9tIFwiLi4vY29udGVudC9zcXVhcmVQYXJjaG1lbnQuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVEaXYoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImhvbWVcIl0pO1xuXG4gIGNvbnN0IGFib3V0RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJhYm91dFwiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBhYm91dERpdiwgVGV4dENvbnRlbnQuYWJvdXQudGl0bGUpOyAvLyBEb24ndCB0cnkgdG8gam9pbiBzaW5nbGUgbGluZWQgdGV4dFxuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0ZXh0XCJdLCBhYm91dERpdiwgVGV4dENvbnRlbnQuYWJvdXQudGV4dC5qb2luKFwiIFwiKSk7IC8vIE11bHRpbGluZSB0ZXh0IG5lZWRzIGpvaW5lZFxuICBjb25zdCBhYm91dEJnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCBhYm91dERpdik7XG4gIGFib3V0QmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xuXG4gIGNvbnN0IGhvdXJzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJob3Vyc1wiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBob3Vyc0RpdiwgVGV4dENvbnRlbnQuaG91cnMudGl0bGUpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0ZXh0XCJdLCBob3Vyc0RpdiwgVGV4dENvbnRlbnQuaG91cnMudGV4dCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInN1Yi10ZXh0XCJdLCBob3Vyc0RpdiwgVGV4dENvbnRlbnQuaG91cnMuc3ViVGV4dCk7XG4gIGNvbnN0IGhvdXJzQmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGhvdXJzRGl2KTtcbiAgaG91cnNCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgY29uc3QgbG9jYXRpb25zRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJsb2NhdGlvbnNcIl0sIGVsZW1lbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgbG9jYXRpb25zRGl2LCBUZXh0Q29udGVudC5sb2NhdGlvbnMudGl0bGUpO1xuICBjb25zdCBsb2NhdGlvbnNXcmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3cmFwcGVyXCJdLCBsb2NhdGlvbnNEaXYpO1xuICBUZXh0Q29udGVudC5sb2NhdGlvbnMudGV4dC5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGV4dC1lbnRyeVwiXSwgbG9jYXRpb25zV3JhcHBlciwgbGluZSk7XG4gIH0pO1xuICBjb25zdCBsb2NhdGlvbnNCZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgbG9jYXRpb25zRGl2KTtcbiAgbG9jYXRpb25zQmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xuXG4gIGNvbnN0IHJldmlld3NEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInJldmlld3NcIl0sIGVsZW1lbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgcmV2aWV3c0RpdiwgVGV4dENvbnRlbnQucmV2aWV3cy50aXRsZSk7XG4gIGNvbnN0IHJldmlld3NXcmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3cmFwcGVyXCJdLCByZXZpZXdzRGl2KTtcbiAgVGV4dENvbnRlbnQucmV2aWV3cy50ZXh0LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0ZXh0LWVudHJ5XCJdLCByZXZpZXdzV3JhcHBlciwgbGluZSk7XG4gIH0pO1xuICBjb25zdCByZXZpZXdzQmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIHJldmlld3NEaXYpO1xuICByZXZpZXdzQmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuaW1wb3J0IFRleHRDb250ZW50IGZyb20gXCIuL3RleHRDb250ZW50Lmpzb25cIjtcbmltcG9ydCBCYWNrZ3JvdW5kSW1hZ2UgZnJvbSBcIi4uL2NvbnRlbnQvc3F1YXJlUGFyY2htZW50LnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KGNhdGVnb3J5LCBwYXJlbnQpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wic2VjdGlvblwiLCBjYXRlZ29yeV0sIHBhcmVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCIsIGNhdGVnb3J5XSwgc2VjdGlvbiwgVGV4dENvbnRlbnRbY2F0ZWdvcnldLnRpdGxlKTtcbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid3JhcHBlclwiLCBjYXRlZ29yeV0sIHBhcmVudCk7XG5cbiAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJlbnRyeVwiLCBcInNwYWNlclwiXSwgd3JhcHBlcik7XG5cbiAgT2JqZWN0LmtleXMoVGV4dENvbnRlbnRbY2F0ZWdvcnldKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcInRpdGxlXCIpIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJlbnRyeVwiLCBjYXRlZ29yeV0sIHdyYXBwZXIpO1xuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFtcInRpdGxlXCIsIGNhdGVnb3J5XSxcbiAgICAgICAgZW50cnksXG4gICAgICAgIFRleHRDb250ZW50W2NhdGVnb3J5XVtrZXldLm5hbWVcbiAgICAgICk7XG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1wiZGVzY3JpcHRpb25cIiwgY2F0ZWdvcnldLFxuICAgICAgICBlbnRyeSxcbiAgICAgICAgVGV4dENvbnRlbnRbY2F0ZWdvcnldW2tleV0uZGVzY3JpcHRpb25cbiAgICAgICk7XG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1wicHJpY2VcIiwgY2F0ZWdvcnldLFxuICAgICAgICBlbnRyeSxcbiAgICAgICAgVGV4dENvbnRlbnRbY2F0ZWdvcnldW2tleV0ucHJpY2VcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImVudHJ5XCIsIFwic3BhY2VyXCJdLCB3cmFwcGVyKTtcblxuICBjb25zdCBiZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgd3JhcHBlcik7XG4gIGJnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudURpdigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibWVudVwiXSk7XG5cbiAgY3JlYXRlTWVudShcImFwcGV0aXplcnNcIiwgZWxlbWVudCk7XG4gIGNyZWF0ZU1lbnUoXCJlbnRyZWVzXCIsIGVsZW1lbnQpO1xuICBjcmVhdGVNZW51KFwiYmV2ZXJhZ2VzXCIsIGVsZW1lbnQpO1xuICBjcmVhdGVNZW51KFwiZGVzc2VydHNcIiwgZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgSG9tZVRhYiBmcm9tIFwiLi4vaG9tZVRhYi9ob21lVGFiXCI7XG5pbXBvcnQgTWVudVRhYiBmcm9tIFwiLi4vbWVudVRhYi9tZW51VGFiXCI7XG5pbXBvcnQgQ29udGFjdFRhYiBmcm9tIFwiLi4vY29udGFjdFRhYi9jb250YWN0VGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdkNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IG5hdlRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdiAudGFiXCIpO1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBsZXQgZ2VuZXJhdGVkRGl2O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRhYih0YWIpIHtcbiAgICBpZiAodGFiID09PSBcImhvbWVcIikge1xuICAgICAgZ2VuZXJhdGVkRGl2ID0gSG9tZVRhYigpO1xuICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZWREaXYpO1xuICAgIH1cbiAgICBpZiAodGFiID09PSBcIm1lbnVcIikge1xuICAgICAgZ2VuZXJhdGVkRGl2ID0gTWVudVRhYigpO1xuICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZWREaXYpO1xuICAgIH1cbiAgICBpZiAodGFiID09PSBcImNvbnRhY3RcIikge1xuICAgICAgZ2VuZXJhdGVkRGl2ID0gQ29udGFjdFRhYigpO1xuICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChnZW5lcmF0ZWREaXYpO1xuICAgIH1cbiAgfVxuXG4gIG5hdlRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IEFycmF5LmZyb20odGFiLmNsYXNzTGlzdCk7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBjbGFzc2VzLmZpbmQoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lICE9PSBcInRhYlwiKTtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN3aXRjaFRhYihhY3RpdmVDbGFzcykpO1xuICB9KTtcbn1cbiIsImltcG9ydCBIZWFkZXJJbWFnZSBmcm9tIFwiLi4vaGVhZGVyL2xhbmRzY2FwZVBhcmNobWVudC5zdmdcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbiBmcm9tIFwiLi4vZm9vdGVyL2F0dHJpYnV0aW9uLmpzb25cIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvcHVycGxlTGF0dGljZS5qcGdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUsIGNsYXNzZXMsIHBhcmVudCwgdGV4dENvbnRlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsRWxlbWVudHMoKSB7XG4gIC8vIENyZWF0ZSBDb250YWluZXIgRWxlbWVudHNcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWluZXJcIl0sIGRvY3VtZW50LmJvZHkpO1xuICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0JhY2tncm91bmR9KWA7XG5cbiAgLy8gQ3JlYXRlIEhlYWRlciBFbGVtZW50cyB3LyBDbGFzc2VzXG4gIGNvbnN0IGhlYWRlckRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaGVhZGVyXCJdLCBjb250YWluZXJEaXYpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgaGVhZGVyRGl2LCBcIlRoZSBMZWdlcmRlbWFpbiBMb3VuZ2VcIik7XG4gIGNvbnN0IGhlYWRlckJnSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGhlYWRlckRpdik7XG4gIGhlYWRlckJnSW1hZ2Uuc3JjID0gSGVhZGVySW1hZ2U7XG5cbiAgLy8gQ3JlYXRlIE5hdiBFbGVtZW50cyB3LyBDbGFzc2VzXG4gIGNvbnN0IG5hdkRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibmF2XCJdLCBjb250YWluZXJEaXYpO1xuICBjb25zdCBuYXZUYWJUcmF5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YWItdHJheVwiXSwgbmF2RGl2KTtcbiAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFiXCIsIFwiaG9tZVwiXSwgbmF2VGFiVHJheSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdLCBob21lVGFiLCBcIkhvbWVcIik7XG4gIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhYlwiLCBcIm1lbnVcIl0sIG5hdlRhYlRyYXkpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXSwgbWVudVRhYiwgXCJNZW51XCIpO1xuICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YWJcIiwgXCJjb250YWN0XCJdLCBuYXZUYWJUcmF5KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW10sIGNvbnRhY3RUYWIsIFwiQ29udGFjdFwiKTtcblxuICAvLyBDcmVhdGUgQ29udGVudCBFbGVtZW50c1xuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNvbnRlbnRcIl0sIGNvbnRhaW5lckRpdik7XG5cbiAgLy8gQ3JlYXRlIEZvb3RlciBFbGVtZW50c1xuICBjb25zdCBmb290ZXJEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImZvb3RlclwiXSwgY29udGFpbmVyRGl2KTtcbiAgY29uc3QgYXV0aG9yUCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcImF1dGhvclwiXSwgZm9vdGVyRGl2KTtcbiAgYXV0aG9yUC5pbm5lckhUTUwgPVxuICAgIFwiQ3JlYXRlZCBieSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20veGluY3J5cHRlZHgnPnhJbmNyeXB0ZWR4PC9hPlwiO1xuICBBdHRyaWJ1dGlvbi5lbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgY29uc3QgZW50cnlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1wiYXR0cmlidXRpb25cIl0sIGZvb3RlckRpdik7XG4gICAgZW50cnlFbGVtZW50LmlubmVySFRNTCA9IGVudHJ5O1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEluaXRpYWxpemVFbGVtZW50cyBmcm9tIFwiLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuaW1wb3J0IEluaXRpYWxpemVOYXYgZnJvbSBcIi4vbmF2L25hdlwiO1xuXG5Jbml0aWFsaXplRWxlbWVudHMoKTtcbkluaXRpYWxpemVOYXYoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==