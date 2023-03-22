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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsla(0, 74%, 39%, 0);\n\n  --nav-bg-color: hsla(0, 0%, 0%, 0);\n  --nav-tab-bg-color: hsla(0, 0%, 0%, 0.4);\n\n  --content-bg-color: hsla(0, 0%, 0%, 0.4);\n  --content-scroll-fade-color: hsla(0, 0%, 0%, 0.637);\n\n  --form-bg-color: hsl(46, 22%, 78%);\n\n  --content-card-bg-color: hsla(95, 80%, 50%, 0);\n\n  --footer-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 75vh 7vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px grey;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: var(--nav-tab-bg-color);\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 10px 10px 0px 0px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n.nav .tab:hover {\n  box-shadow: 0px -1px 1px 1px black;\n}\n\n.nav .tab p {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-scroll-fade-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / span all;\n  grid-row: 1 / span all;\n  z-index: 0;\n}\n\n.content .home img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .home .sub-text {\n  grid-area: sub-text;\n  text-align: center;\n  align-self: start;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n}\n\n.content .home .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n  display: grid;\n  grid-template: 1fr 2fr 1fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\"\n    \"sub-text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .locations {\n  grid-area: locations;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n/* #endregion */\n\n/* Menu */\n/* #region */\n.content .menu {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, min-content min-content) / 1fr;\n  grid-template-areas:\n    \"appetizers-title\"\n    \"appetizers-wrapper\"\n    \"entrees-title\"\n    \"entrees-wrapper\"\n    \"beverages-title\"\n    \"beverages-wrapper\"\n    \"desserts-title\"\n    \"desserts-wrapper\";\n  gap: 15px 0px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.content .menu .section {\n  display: grid;\n  height: 7vh;\n  width: 90%;\n  border-bottom: 1px dotted white;\n}\n\n.content .menu .section .title {\n  align-self: end;\n  justify-self: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  text-shadow: 2px 2px 4px rgb(0, 0, 0);\n}\n\n.content .menu .wrapper {\n  position: relative;\n  display: grid;\n  justify-items: center;\n\n  height: min-content;\n  width: 90vw;\n}\n\n.content .menu .wrapper .background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .menu .wrapper .entry {\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 3fr 1fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title price .\"\n    \". description description .\"\n    \". . . .\";\n  gap: 15px 0px;\n  background-color: var(--content-card-bg-color);\n  width: 100%;\n  height: 12vh;\n}\n\n.content .menu .wrapper .entry.spacer {\n  height: 5vh;\n}\n\n.content .menu .wrapper .entry .title {\n  grid-area: title;\n  font-weight: bold;\n}\n\n.content .menu .wrapper .entry .price {\n  grid-area: price;\n  justify-self: end;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n.content .menu .wrapper .entry .description {\n  grid-area: description;\n  font-size: 0.9rem;\n}\n\n.content .menu .section.title.appetizers {\n  grid-area: appetizers-title;\n}\n\n.content .menu .wrapper.appetizers {\n  grid-area: appetizers-wrapper;\n}\n\n.content .menu .section.title.entrees {\n  grid-area: entrees-title;\n}\n\n.content .menu .wrapper.entrees {\n  grid-area: entrees-wrapper;\n}\n\n.content .menu .section.title.beverages {\n  grid-area: beverages-title;\n}\n\n.content .menu .wrapper.beverages {\n  grid-area: beverages-wrapper;\n}\n\n.content .menu .section.title.desserts {\n  grid-area: desserts-title;\n}\n\n.content .menu .wrapper.desserts {\n  grid-area: desserts-wrapper;\n}\n\n/* #endregion */\n\n/* Contact */\n/* #region */\n.content .contact {\n  height: 100%;\n  display: grid;\n  grid-template: 50% 90% / 1fr;\n  grid-template-areas:\n    \"leylines\"\n    \"message\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .contact div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .contact div p {\n  width: 70%;\n}\n\n.content .contact .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  z-index: 0;\n}\n\n.content .contact .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n  grid-auto-rows: 8vh;\n}\n\n.content .contact .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n.content .contact .text {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .contact img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .contact .leylines {\n  grid-area: leylines;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .contact .message {\n  grid-area: message;\n  display: grid;\n  grid-template: 0.5fr 1fr 5fr 0.7fr 0.5fr/ 1fr 2fr 2fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title title .\"\n    \". form form .\"\n    \". . submit .\"\n    \". . . .\";\n  row-gap: 15px;\n}\n\n.content .contact .message form {\n  grid-area: form;\n  display: grid;\n  grid-template: 0.5fr 1fr 0.5fr 4fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"subject-label subject-label\"\n    \"subject subject\"\n    \"message-content-label message-content-label\"\n    \"message-content message-content\";\n}\n\n.content .contact label {\n  align-self: center;\n  font-style: italic;\n}\n\n.content .contact label.subject {\n  grid-area: subject-label;\n}\n\n.content .contact input.subject {\n  grid-area: subject;\n  height: 1.5rem;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n}\n\n.content .contact label.message-content {\n  grid-area: message-content-label;\n}\n\n.content .contact textarea.message-content {\n  grid-area: message-content;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n  resize: none;\n}\n\n.content .contact .submit {\n  grid-area: submit;\n  background-color: var(--form-bg-color);\n  font-size: 1.1rem;\n  font-weight: bold;\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.content .contact .submit:hover {\n  background-color: hsl(45, 33%, 61%);\n  border: 2px solid grey;\n}\n\n.content .contact .submit:active {\n  background-color: hsl(43, 18%, 51%);\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n  display: grid;\n  grid-template: 1fr 1fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"author .\"\n    \"author .\"\n    \"author .\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--footer-bg-color);\n  color: white;\n}\n\n.footer .author {\n  grid-area: author;\n  font-size: 0.7rem;\n}\n\n.footer .attribution {\n  font-size: 0.6rem;\n}\n\n/* #endregion */\n\n/* Screens at least 950px wide */\n/* #region */\n@media only screen and (min-width: 750px) {\n  .header .title {\n    font-size: 2rem;\n  }\n\n  .nav .tab p {\n    font-size: 1.5rem;\n  }\n\n  .content .home .title {\n    font-size: 1.75rem;\n  }\n\n  .content .home .text,\n  .content .home .text-entry {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .section .title {\n    font-size: 1.75rem;\n  }\n\n  .content .menu .entry .title {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .wrapper .entry .price {\n    font-size: 1.2rem;\n  }\n\n  .content .menu .wrapper .entry .description {\n    font-size: 1.2rem;\n  }\n\n  .content .contact .title {\n    font-size: 1.75rem;\n  }\n\n  .content .contact .text {\n    font-size: 1.4rem;\n  }\n\n  .content .contact label {\n    font-size: 1.2rem;\n  }\n\n  .content .contact input.subject {\n    height: 2rem;\n    font-size: 1.2rem;\n  }\n\n  .content .contact textarea {\n    font-size: 1.2rem;\n  }\n\n  .footer .author {\n    font-size: 0.9rem;\n  }\n\n  .footer .attribution {\n    font-size: 0.9rem;\n  }\n}\n/* #endregion */\n\n/* Screens at least 1200px wide */\n/* #region */\n@media only screen and (min-width: 1200px) {\n  .header .background {\n    max-width: 1200px;\n  }\n\n  .content .home div {\n    max-width: 1200px;\n  }\n\n  .content .menu .wrapper {\n    max-width: 1200px;\n  }\n\n  .content .contact div {\n    max-width: 1200px;\n  }\n}\n/* #endregion */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsla(0, 74%, 39%, 0);\n\n  --nav-bg-color: hsla(0, 0%, 0%, 0);\n  --nav-tab-bg-color: hsla(0, 0%, 0%, 0.4);\n\n  --content-bg-color: hsla(0, 0%, 0%, 0.4);\n  --content-scroll-fade-color: hsla(0, 0%, 0%, 0.637);\n\n  --form-bg-color: hsl(46, 22%, 78%);\n\n  --content-card-bg-color: hsla(95, 80%, 50%, 0);\n\n  --footer-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 75vh 7vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px grey;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: var(--nav-tab-bg-color);\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 10px 10px 0px 0px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n.nav .tab:hover {\n  box-shadow: 0px -1px 1px 1px black;\n}\n\n.nav .tab p {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-scroll-fade-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / span all;\n  grid-row: 1 / span all;\n  z-index: 0;\n}\n\n.content .home img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .home .sub-text {\n  grid-area: sub-text;\n  text-align: center;\n  align-self: start;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n}\n\n.content .home .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n  display: grid;\n  grid-template: 1fr 2fr 1fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\"\n    \"sub-text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .locations {\n  grid-area: locations;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n/* #endregion */\n\n/* Menu */\n/* #region */\n.content .menu {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, min-content min-content) / 1fr;\n  grid-template-areas:\n    \"appetizers-title\"\n    \"appetizers-wrapper\"\n    \"entrees-title\"\n    \"entrees-wrapper\"\n    \"beverages-title\"\n    \"beverages-wrapper\"\n    \"desserts-title\"\n    \"desserts-wrapper\";\n  gap: 15px 0px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.content .menu .section {\n  display: grid;\n  height: 7vh;\n  width: 90%;\n  border-bottom: 1px dotted white;\n}\n\n.content .menu .section .title {\n  align-self: end;\n  justify-self: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  text-shadow: 2px 2px 4px rgb(0, 0, 0);\n}\n\n.content .menu .wrapper {\n  position: relative;\n  display: grid;\n  justify-items: center;\n\n  height: min-content;\n  width: 90vw;\n}\n\n.content .menu .wrapper .background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .menu .wrapper .entry {\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 3fr 1fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title price .\"\n    \". description description .\"\n    \". . . .\";\n  gap: 15px 0px;\n  background-color: var(--content-card-bg-color);\n  width: 100%;\n  height: 12vh;\n}\n\n.content .menu .wrapper .entry.spacer {\n  height: 5vh;\n}\n\n.content .menu .wrapper .entry .title {\n  grid-area: title;\n  font-weight: bold;\n}\n\n.content .menu .wrapper .entry .price {\n  grid-area: price;\n  justify-self: end;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n.content .menu .wrapper .entry .description {\n  grid-area: description;\n  font-size: 0.9rem;\n}\n\n.content .menu .section.title.appetizers {\n  grid-area: appetizers-title;\n}\n\n.content .menu .wrapper.appetizers {\n  grid-area: appetizers-wrapper;\n}\n\n.content .menu .section.title.entrees {\n  grid-area: entrees-title;\n}\n\n.content .menu .wrapper.entrees {\n  grid-area: entrees-wrapper;\n}\n\n.content .menu .section.title.beverages {\n  grid-area: beverages-title;\n}\n\n.content .menu .wrapper.beverages {\n  grid-area: beverages-wrapper;\n}\n\n.content .menu .section.title.desserts {\n  grid-area: desserts-title;\n}\n\n.content .menu .wrapper.desserts {\n  grid-area: desserts-wrapper;\n}\n\n/* #endregion */\n\n/* Contact */\n/* #region */\n.content .contact {\n  height: 100%;\n  display: grid;\n  grid-template: 50% 90% / 1fr;\n  grid-template-areas:\n    \"leylines\"\n    \"message\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .contact div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .contact div p {\n  width: 70%;\n}\n\n.content .contact .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  z-index: 0;\n}\n\n.content .contact .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n  grid-auto-rows: 8vh;\n}\n\n.content .contact .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n.content .contact .text {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .contact img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .contact .leylines {\n  grid-area: leylines;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .contact .message {\n  grid-area: message;\n  display: grid;\n  grid-template: 0.5fr 1fr 5fr 0.7fr 0.5fr/ 1fr 2fr 2fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title title .\"\n    \". form form .\"\n    \". . submit .\"\n    \". . . .\";\n  row-gap: 15px;\n}\n\n.content .contact .message form {\n  grid-area: form;\n  display: grid;\n  grid-template: 0.5fr 1fr 0.5fr 4fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"subject-label subject-label\"\n    \"subject subject\"\n    \"message-content-label message-content-label\"\n    \"message-content message-content\";\n}\n\n.content .contact label {\n  align-self: center;\n  font-style: italic;\n}\n\n.content .contact label.subject {\n  grid-area: subject-label;\n}\n\n.content .contact input.subject {\n  grid-area: subject;\n  height: 1.5rem;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n}\n\n.content .contact label.message-content {\n  grid-area: message-content-label;\n}\n\n.content .contact textarea.message-content {\n  grid-area: message-content;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n  resize: none;\n}\n\n.content .contact .submit {\n  grid-area: submit;\n  background-color: var(--form-bg-color);\n  font-size: 1.1rem;\n  font-weight: bold;\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.content .contact .submit:hover {\n  background-color: hsl(45, 33%, 61%);\n  border: 2px solid grey;\n}\n\n.content .contact .submit:active {\n  background-color: hsl(43, 18%, 51%);\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n  display: grid;\n  grid-template: 1fr 1fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"author .\"\n    \"author .\"\n    \"author .\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--footer-bg-color);\n  color: white;\n}\n\n.footer .author {\n  grid-area: author;\n  font-size: 0.7rem;\n}\n\n.footer .attribution {\n  font-size: 0.6rem;\n}\n\n/* #endregion */\n\n/* Screens at least 950px wide */\n/* #region */\n@media only screen and (min-width: 750px) {\n  .header .title {\n    font-size: 2rem;\n  }\n\n  .nav .tab p {\n    font-size: 1.5rem;\n  }\n\n  .content .home .title {\n    font-size: 1.75rem;\n  }\n\n  .content .home .text,\n  .content .home .text-entry {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .section .title {\n    font-size: 1.75rem;\n  }\n\n  .content .menu .entry .title {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .wrapper .entry .price {\n    font-size: 1.2rem;\n  }\n\n  .content .menu .wrapper .entry .description {\n    font-size: 1.2rem;\n  }\n\n  .content .contact .title {\n    font-size: 1.75rem;\n  }\n\n  .content .contact .text {\n    font-size: 1.4rem;\n  }\n\n  .content .contact label {\n    font-size: 1.2rem;\n  }\n\n  .content .contact input.subject {\n    height: 2rem;\n    font-size: 1.2rem;\n  }\n\n  .content .contact textarea {\n    font-size: 1.2rem;\n  }\n\n  .footer .author {\n    font-size: 0.9rem;\n  }\n\n  .footer .attribution {\n    font-size: 0.9rem;\n  }\n}\n/* #endregion */\n\n/* Screens at least 1200px wide */\n/* #region */\n@media only screen and (min-width: 1200px) {\n  .header .background {\n    max-width: 1200px;\n  }\n\n  .content .home div {\n    max-width: 1200px;\n  }\n\n  .content .menu .wrapper {\n    max-width: 1200px;\n  }\n\n  .content .contact div {\n    max-width: 1200px;\n  }\n}\n/* #endregion */\n"],"sourceRoot":""}]);
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

  function init() {
    switchTab("home");
  }

  navTabs.forEach((tab) => {
    const classes = Array.from(tab.classList);
    const activeClass = classes.find((className) => className !== "tab");
    tab.addEventListener("click", () => switchTab(activeClass));
  });

  return { init };
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
(0,_nav_nav__WEBPACK_IMPORTED_MODULE_2__["default"])().init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLFVBQVUsVUFBVSxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsWUFBWSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQTJCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QztBQUNsQzs7QUFFNUIsdUVBQWtCO0FBQ2xCLG9EQUFHO0FBQ0gsb0RBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbnRhY3RUYWIvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZVRhYi9ob21lVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9tZW51VGFiL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL25hdi9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvaW5pdGlhbGl6ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSZXNldCBDU1MgKi9cXG4vKiAjcmVnaW9uICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogaHNsYSgwLCA3NCUsIDM5JSwgMCk7XFxuXFxuICAtLW5hdi1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDApO1xcbiAgLS1uYXYtdGFiLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40KTtcXG5cXG4gIC0tY29udGVudC1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNCk7XFxuICAtLWNvbnRlbnQtc2Nyb2xsLWZhZGUtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjYzNyk7XFxuXFxuICAtLWZvcm0tYmctY29sb3I6IGhzbCg0NiwgMjIlLCA3OCUpO1xcblxcbiAgLS1jb250ZW50LWNhcmQtYmctY29sb3I6IGhzbGEoOTUsIDgwJSwgNTAlLCAwKTtcXG5cXG4gIC0tZm9vdGVyLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC43NSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogQ29udGFpbnRlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogOHZoIDEwdmggNzV2aCA3dmgvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXJEaXZcXFwiXFxuICAgIFxcXCJuYXZEaXZcXFwiXFxuICAgIFxcXCJjb250ZW50RGl2XFxcIlxcbiAgICBcXFwiZm9vdGVyRGl2XFxcIjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEhlYWRlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlckRpdjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyIC5iYWNrZ3JvdW5kIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogOTAlO1xcbiAgei1pbmRleDogMDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBncmV5O1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogTmF2IERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4ubmF2IC50YWItdHJheSB7XFxuICBncmlkLWFyZWE6IG5hdkRpdjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyByZXBlYXQoMywgMWZyKTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxufVxcblxcbi5uYXYgLnRhYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtdGFiLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLm5hdiAudGFiOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5uYXYgLnRhYiBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBDb250ZW50IERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGNvbnRlbnREaXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRlbnQgZGl2ICoge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSxcXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgaHNsYSgwLCAwJSwgMTAwJSwgMCksXFxuICAgIHZhcigtLWNvbnRlbnQtc2Nyb2xsLWZhZGUtY29sb3IpXFxuICApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY29udGVudDo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5jb250ZW50OjphZnRlciB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi8qIEhvbWUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLmhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCA0MCUpIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImFib3V0XFxcIlxcbiAgICBcXFwiaG91cnNcXFwiXFxuICAgIFxcXCJsb2NhdGlvbnNcXFwiXFxuICAgIFxcXCJyZXZpZXdzXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiBhbGw7XFxuICBncmlkLXJvdzogMSAvIHNwYW4gYWxsO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgaW1nIHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgZGl2IHAge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGV4dCB7XFxuICBncmlkLWFyZWE6IHRleHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnN1Yi10ZXh0IHtcXG4gIGdyaWQtYXJlYTogc3ViLXRleHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5jb250ZW50IC5ob21lIC53cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5hYm91dCB7XFxuICBncmlkLWFyZWE6IGFib3V0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA0ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5ob3VycyB7XFxuICBncmlkLWFyZWE6IGhvdXJzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCJcXG4gICAgXFxcInN1Yi10ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5sb2NhdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbnM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnJldmlld3Mge1xcbiAgZ3JpZC1hcmVhOiByZXZpZXdzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA0ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBNZW51ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IC5tZW51IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQpIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImFwcGV0aXplcnMtdGl0bGVcXFwiXFxuICAgIFxcXCJhcHBldGl6ZXJzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJlbnRyZWVzLXRpdGxlXFxcIlxcbiAgICBcXFwiZW50cmVlcy13cmFwcGVyXFxcIlxcbiAgICBcXFwiYmV2ZXJhZ2VzLXRpdGxlXFxcIlxcbiAgICBcXFwiYmV2ZXJhZ2VzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJkZXNzZXJ0cy10aXRsZVxcXCJcXG4gICAgXFxcImRlc3NlcnRzLXdyYXBwZXJcXFwiO1xcbiAgZ2FwOiAxNXB4IDBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgd2hpdGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uIC50aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgLyAxZnIgM2ZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLiAuIC4gLlxcXCJcXG4gICAgXFxcIi4gdGl0bGUgcHJpY2UgLlxcXCJcXG4gICAgXFxcIi4gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLlxcXCJcXG4gICAgXFxcIi4gLiAuIC5cXFwiO1xcbiAgZ2FwOiAxNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTJ2aDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5LnNwYWNlciB7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAucHJpY2Uge1xcbiAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAuZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5hcHBldGl6ZXJzIHtcXG4gIGdyaWQtYXJlYTogYXBwZXRpemVycy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuYXBwZXRpemVycyB7XFxuICBncmlkLWFyZWE6IGFwcGV0aXplcnMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuZW50cmVlcyB7XFxuICBncmlkLWFyZWE6IGVudHJlZXMtdGl0bGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyLmVudHJlZXMge1xcbiAgZ3JpZC1hcmVhOiBlbnRyZWVzLXdyYXBwZXI7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmJldmVyYWdlcyB7XFxuICBncmlkLWFyZWE6IGJldmVyYWdlcy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuYmV2ZXJhZ2VzIHtcXG4gIGdyaWQtYXJlYTogYmV2ZXJhZ2VzLXdyYXBwZXI7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogZGVzc2VydHMtdGl0bGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyLmRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogZGVzc2VydHMtd3JhcHBlcjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIENvbnRhY3QgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLmNvbnRhY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDUwJSA5MCUgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibGV5bGluZXNcXFwiXFxuICAgIFxcXCJtZXNzYWdlXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLndyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXV0by1yb3dzOiA4dmg7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAudGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgaW1nIHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLmxleWxpbmVzIHtcXG4gIGdyaWQtYXJlYTogbGV5bGluZXM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2Uge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDFmciA1ZnIgMC43ZnIgMC41ZnIvIDFmciAyZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLiAuXFxcIlxcbiAgICBcXFwiLiB0aXRsZSB0aXRsZSAuXFxcIlxcbiAgICBcXFwiLiBmb3JtIGZvcm0gLlxcXCJcXG4gICAgXFxcIi4gLiBzdWJtaXQgLlxcXCJcXG4gICAgXFxcIi4gLiAuIC5cXFwiO1xcbiAgcm93LWdhcDogMTVweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2UgZm9ybSB7XFxuICBncmlkLWFyZWE6IGZvcm07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgMWZyIDAuNWZyIDRmciAxZnIvIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic3ViamVjdC1sYWJlbCBzdWJqZWN0LWxhYmVsXFxcIlxcbiAgICBcXFwic3ViamVjdCBzdWJqZWN0XFxcIlxcbiAgICBcXFwibWVzc2FnZS1jb250ZW50LWxhYmVsIG1lc3NhZ2UtY29udGVudC1sYWJlbFxcXCJcXG4gICAgXFxcIm1lc3NhZ2UtY29udGVudCBtZXNzYWdlLWNvbnRlbnRcXFwiO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGxhYmVsLnN1YmplY3Qge1xcbiAgZ3JpZC1hcmVhOiBzdWJqZWN0LWxhYmVsO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbnB1dC5zdWJqZWN0IHtcXG4gIGdyaWQtYXJlYTogc3ViamVjdDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlLWNvbnRlbnQtbGFiZWw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IHRleHRhcmVhLm1lc3NhZ2UtY29udGVudCB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2UtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NSwgMzMlLCA2MSUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQzLCAxOCUsIDUxJSk7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogRm9vdGVyIERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyRGl2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyLyAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImF1dGhvciAuXFxcIlxcbiAgICBcXFwiYXV0aG9yIC5cXFwiXFxuICAgIFxcXCJhdXRob3IgLlxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb3RlciAuYXV0aG9yIHtcXG4gIGdyaWQtYXJlYTogYXV0aG9yO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5mb290ZXIgLmF0dHJpYnV0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogU2NyZWVucyBhdCBsZWFzdCA5NTBweCB3aWRlICovXFxuLyogI3JlZ2lvbiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gIC5oZWFkZXIgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLm5hdiAudGFiIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5ob21lIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5ob21lIC50ZXh0LFxcbiAgLmNvbnRlbnQgLmhvbWUgLnRleHQtZW50cnkge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC5zZWN0aW9uIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC5lbnRyeSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAucHJpY2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgaW5wdXQuc3ViamVjdCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmZvb3RlciAuYXV0aG9yIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuXFxuICAuZm9vdGVyIC5hdHRyaWJ1dGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogU2NyZWVucyBhdCBsZWFzdCAxMjAwcHggd2lkZSAqL1xcbi8qICNyZWdpb24gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmhvbWUgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAubWVudSAud3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZCxZQUFZO0FBQ1o7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztB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Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBLGVBQWU7O0FBRWYsaUNBQWlDO0FBQ2pDLFlBQVk7QUFDWjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQSxlQUFlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0IENTUyAqL1xcbi8qICNyZWdpb24gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogR2xvYmFsIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0taGVhZGVyLWJnLWNvbG9yOiBoc2xhKDAsIDc0JSwgMzklLCAwKTtcXG5cXG4gIC0tbmF2LWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMCk7XFxuICAtLW5hdi10YWItYmctY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQpO1xcblxcbiAgLS1jb250ZW50LWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40KTtcXG4gIC0tY29udGVudC1zY3JvbGwtZmFkZS1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNjM3KTtcXG5cXG4gIC0tZm9ybS1iZy1jb2xvcjogaHNsKDQ2LCAyMiUsIDc4JSk7XFxuXFxuICAtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcjogaHNsYSg5NSwgODAlLCA1MCUsIDApO1xcblxcbiAgLS1mb290ZXItYmctY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjc1KTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBDb250YWludGVyIERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA4dmggMTB2aCA3NXZoIDd2aC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlckRpdlxcXCJcXG4gICAgXFxcIm5hdkRpdlxcXCJcXG4gICAgXFxcImNvbnRlbnREaXZcXFwiXFxuICAgIFxcXCJmb290ZXJEaXZcXFwiO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogSGVhZGVyIERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyRGl2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxufVxcblxcbi5oZWFkZXIgLmJhY2tncm91bmQge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIHdpZHRoOiA5MCU7XFxuICB6LWluZGV4OiAwO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2IoMCwgMCwgMCkpO1xcbn1cXG5cXG4uaGVhZGVyIC50aXRsZSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGdyZXk7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBOYXYgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5uYXYgLnRhYi10cmF5IHtcXG4gIGdyaWQtYXJlYTogbmF2RGl2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIHJlcGVhdCgzLCAxZnIpO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG59XFxuXFxuLm5hdiAudGFiIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi10YWItYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ubmF2IC50YWI6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuLm5hdiAudGFiIHAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIENvbnRlbnQgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtYXJlYTogY29udGVudERpdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmctY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGVudCBkaXYgKiB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29udGVudDo6YmVmb3JlLFxcbi5jb250ZW50OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tLFxcbiAgICBoc2xhKDAsIDAlLCAxMDAlLCAwKSxcXG4gICAgdmFyKC0tY29udGVudC1zY3JvbGwtZmFkZS1jb2xvcilcXG4gICk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jb250ZW50OjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmNvbnRlbnQ6OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLyogSG9tZSAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCAuaG9tZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDQwJSkgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYWJvdXRcXFwiXFxuICAgIFxcXCJob3Vyc1xcXCJcXG4gICAgXFxcImxvY2F0aW9uc1xcXCJcXG4gICAgXFxcInJldmlld3NcXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIGFsbDtcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiBhbGw7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBpbWcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2IoMCwgMCwgMCkpO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC50ZXh0IHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuc3ViLXRleHQge1xcbiAgZ3JpZC1hcmVhOiBzdWItdGV4dDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLndyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmFib3V0IHtcXG4gIGdyaWQtYXJlYTogYWJvdXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmhvdXJzIHtcXG4gIGdyaWQtYXJlYTogaG91cnM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDJmciAxZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIlxcbiAgICBcXFwic3ViLXRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmxvY2F0aW9ucyB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9ucztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAucmV2aWV3cyB7XFxuICBncmlkLWFyZWE6IHJldmlld3M7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE1lbnUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLm1lbnUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCBtaW4tY29udGVudCBtaW4tY29udGVudCkgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYXBwZXRpemVycy10aXRsZVxcXCJcXG4gICAgXFxcImFwcGV0aXplcnMtd3JhcHBlclxcXCJcXG4gICAgXFxcImVudHJlZXMtdGl0bGVcXFwiXFxuICAgIFxcXCJlbnRyZWVzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJiZXZlcmFnZXMtdGl0bGVcXFwiXFxuICAgIFxcXCJiZXZlcmFnZXMtd3JhcHBlclxcXCJcXG4gICAgXFxcImRlc3NlcnRzLXRpdGxlXFxcIlxcbiAgICBcXFwiZGVzc2VydHMtd3JhcHBlclxcXCI7XFxuICBnYXA6IDE1cHggMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24gLnRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2IoMCwgMCwgMCkpO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAvIDFmciAzZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLiAuXFxcIlxcbiAgICBcXFwiLiB0aXRsZSBwcmljZSAuXFxcIlxcbiAgICBcXFwiLiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuXFxcIlxcbiAgICBcXFwiLiAuIC4gLlxcXCI7XFxuICBnYXA6IDE1cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jYXJkLWJnLWNvbG9yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMnZoO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkuc3BhY2VyIHtcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC5wcmljZSB7XFxuICBncmlkLWFyZWE6IHByaWNlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC5kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmFwcGV0aXplcnMge1xcbiAgZ3JpZC1hcmVhOiBhcHBldGl6ZXJzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5hcHBldGl6ZXJzIHtcXG4gIGdyaWQtYXJlYTogYXBwZXRpemVycy13cmFwcGVyO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5lbnRyZWVzIHtcXG4gIGdyaWQtYXJlYTogZW50cmVlcy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuZW50cmVlcyB7XFxuICBncmlkLWFyZWE6IGVudHJlZXMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuYmV2ZXJhZ2VzIHtcXG4gIGdyaWQtYXJlYTogYmV2ZXJhZ2VzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5iZXZlcmFnZXMge1xcbiAgZ3JpZC1hcmVhOiBiZXZlcmFnZXMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuZGVzc2VydHMge1xcbiAgZ3JpZC1hcmVhOiBkZXNzZXJ0cy13cmFwcGVyO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGFjdCAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCAuY29udGFjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTAlIDkwJSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJsZXlsaW5lc1xcXCJcXG4gICAgXFxcIm1lc3NhZ2VcXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGRpdiBwIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAud3JhcHBlciB7XFxuICBncmlkLWFyZWE6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDh2aDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC50ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbWcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2IoMCwgMCwgMCkpO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAubGV5bGluZXMge1xcbiAgZ3JpZC1hcmVhOiBsZXlsaW5lcztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAubWVzc2FnZSB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgMWZyIDVmciAwLjdmciAwLjVmci8gMWZyIDJmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gLiAuIC5cXFwiXFxuICAgIFxcXCIuIHRpdGxlIHRpdGxlIC5cXFwiXFxuICAgIFxcXCIuIGZvcm0gZm9ybSAuXFxcIlxcbiAgICBcXFwiLiAuIHN1Ym1pdCAuXFxcIlxcbiAgICBcXFwiLiAuIC4gLlxcXCI7XFxuICByb3ctZ2FwOiAxNXB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAubWVzc2FnZSBmb3JtIHtcXG4gIGdyaWQtYXJlYTogZm9ybTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciAxZnIgMC41ZnIgNGZyIDFmci8gMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzdWJqZWN0LWxhYmVsIHN1YmplY3QtbGFiZWxcXFwiXFxuICAgIFxcXCJzdWJqZWN0IHN1YmplY3RcXFwiXFxuICAgIFxcXCJtZXNzYWdlLWNvbnRlbnQtbGFiZWwgbWVzc2FnZS1jb250ZW50LWxhYmVsXFxcIlxcbiAgICBcXFwibWVzc2FnZS1jb250ZW50IG1lc3NhZ2UtY29udGVudFxcXCI7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGxhYmVsIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgbGFiZWwuc3ViamVjdCB7XFxuICBncmlkLWFyZWE6IHN1YmplY3QtbGFiZWw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGlucHV0LnN1YmplY3Qge1xcbiAgZ3JpZC1hcmVhOiBzdWJqZWN0O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGxhYmVsLm1lc3NhZ2UtY29udGVudCB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2UtY29udGVudC1sYWJlbDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgdGV4dGFyZWEubWVzc2FnZS1jb250ZW50IHtcXG4gIGdyaWQtYXJlYTogbWVzc2FnZS1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuc3VibWl0IHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZy1jb2xvcik7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ1LCAzMyUsIDYxJSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuc3VibWl0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDMsIDE4JSwgNTElKTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBGb290ZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXJEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIvIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYXV0aG9yIC5cXFwiXFxuICAgIFxcXCJhdXRob3IgLlxcXCJcXG4gICAgXFxcImF1dGhvciAuXFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9vdGVyIC5hdXRob3Ige1xcbiAgZ3JpZC1hcmVhOiBhdXRob3I7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmZvb3RlciAuYXR0cmlidXRpb24ge1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBTY3JlZW5zIGF0IGxlYXN0IDk1MHB4IHdpZGUgKi9cXG4vKiAjcmVnaW9uICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgLmhlYWRlciAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAubmF2IC50YWIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmhvbWUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmhvbWUgLnRleHQsXFxuICAuY29udGVudCAuaG9tZSAudGV4dC1lbnRyeSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLm1lbnUgLmVudHJ5IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC5wcmljZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgLnRleHQge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCBpbnB1dC5zdWJqZWN0IHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuZm9vdGVyIC5hdXRob3Ige1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG5cXG4gIC5mb290ZXIgLmF0dHJpYnV0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBTY3JlZW5zIGF0IGxlYXN0IDEyMDBweCB3aWRlICovXFxuLyogI3JlZ2lvbiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuaGVhZGVyIC5iYWNrZ3JvdW5kIHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAuaG9tZSBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC53cmFwcGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL3NjcmlwdHMvaW5pdGlhbGl6ZUVsZW1lbnRzXCI7XG5pbXBvcnQgQmFja2dyb3VuZEltYWdlIGZyb20gXCIuLi9jb250ZW50L3NxdWFyZVBhcmNobWVudC5zdmdcIjtcbmltcG9ydCBUZXh0Q29udGVudCBmcm9tIFwiLi90ZXh0Q29udGVudC5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3REaXYoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNvbnRhY3RcIl0pO1xuXG4gIGNvbnN0IGxleWxpbmVzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJsZXlsaW5lc1wiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBsZXlsaW5lc0RpdiwgVGV4dENvbnRlbnQubGV5bGluZXMudGl0bGUpO1xuICBjb25zdCBsZXlsaW5lc1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndyYXBwZXJcIl0sIGxleWxpbmVzRGl2KTtcbiAgVGV4dENvbnRlbnQubGV5bGluZXMudGV4dC5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGV4dFwiXSwgbGV5bGluZXNXcmFwcGVyLCBsaW5lKTtcbiAgfSk7XG4gIGNvbnN0IGxleWxpbmVzQmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGxleWxpbmVzRGl2KTtcbiAgbGV5bGluZXNCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgY29uc3QgbWVzc2FnZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibWVzc2FnZVwiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBtZXNzYWdlRGl2LCBUZXh0Q29udGVudC5tZXNzYWdlLnRpdGxlKTtcbiAgY29uc3QgbWVzc2FnZUZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbXSwgbWVzc2FnZURpdik7XG4gIG1lc3NhZ2VGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZS1mb3JtXCIpO1xuICBjb25zdCBzdWJqZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwibGFiZWxcIixcbiAgICBbXCJzdWJqZWN0XCJdLFxuICAgIG1lc3NhZ2VGb3JtLFxuICAgIFwiU3ViamVjdDpcIlxuICApO1xuICBzdWJqZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic3ViamVjdC1pbnB1dFwiKTtcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtcInN1YmplY3RcIl0sIG1lc3NhZ2VGb3JtKTtcbiAgc3ViamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBzdWJqZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJqZWN0LWlucHV0XCIpO1xuICBjb25zdCBtZXNzYWdlQ29udGVudExhYmVsID0gY3JlYXRlRWxlbWVudChcbiAgICBcImxhYmVsXCIsXG4gICAgW1wibWVzc2FnZS1jb250ZW50XCJdLFxuICAgIG1lc3NhZ2VGb3JtLFxuICAgIFwiTWVzc2FnZTpcIlxuICApO1xuICBtZXNzYWdlQ29udGVudExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lc3NhZ2UtY29udGVudC10ZXh0YXJlYVwiKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRlbnRUZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJ0ZXh0YXJlYVwiLFxuICAgIFtcIm1lc3NhZ2UtY29udGVudFwiXSxcbiAgICBtZXNzYWdlRm9ybVxuICApO1xuICBtZXNzYWdlQ29udGVudFRleHRhcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZS1jb250ZW50LXRleHRhcmVhXCIpO1xuICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcInN1Ym1pdFwiXSwgbWVzc2FnZURpdiwgXCJTZW5kXCIpO1xuICBjb25zdCBtZXNzYWdlQmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIG1lc3NhZ2VEaXYpO1xuICBtZXNzYWdlQmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuaW1wb3J0IFRleHRDb250ZW50IGZyb20gXCIuL3RleHRDb250ZW50Lmpzb25cIjtcbmltcG9ydCBCYWNrZ3JvdW5kSW1hZ2UgZnJvbSBcIi4uL2NvbnRlbnQvc3F1YXJlUGFyY2htZW50LnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lRGl2KCkge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJob21lXCJdKTtcblxuICBjb25zdCBhYm91dERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYWJvdXRcIl0sIGVsZW1lbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgYWJvdXREaXYsIFRleHRDb250ZW50LmFib3V0LnRpdGxlKTsgLy8gRG9uJ3QgdHJ5IHRvIGpvaW4gc2luZ2xlIGxpbmVkIHRleHRcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGV4dFwiXSwgYWJvdXREaXYsIFRleHRDb250ZW50LmFib3V0LnRleHQuam9pbihcIiBcIikpOyAvLyBNdWx0aWxpbmUgdGV4dCBuZWVkcyBqb2luZWRcbiAgY29uc3QgYWJvdXRCZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgYWJvdXREaXYpO1xuICBhYm91dEJnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcblxuICBjb25zdCBob3Vyc0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaG91cnNcIl0sIGVsZW1lbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgaG91cnNEaXYsIFRleHRDb250ZW50LmhvdXJzLnRpdGxlKTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGV4dFwiXSwgaG91cnNEaXYsIFRleHRDb250ZW50LmhvdXJzLnRleHQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJzdWItdGV4dFwiXSwgaG91cnNEaXYsIFRleHRDb250ZW50LmhvdXJzLnN1YlRleHQpO1xuICBjb25zdCBob3Vyc0JnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCBob3Vyc0Rpdik7XG4gIGhvdXJzQmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xuXG4gIGNvbnN0IGxvY2F0aW9uc0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibG9jYXRpb25zXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGxvY2F0aW9uc0RpdiwgVGV4dENvbnRlbnQubG9jYXRpb25zLnRpdGxlKTtcbiAgY29uc3QgbG9jYXRpb25zV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid3JhcHBlclwiXSwgbG9jYXRpb25zRGl2KTtcbiAgVGV4dENvbnRlbnQubG9jYXRpb25zLnRleHQuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHQtZW50cnlcIl0sIGxvY2F0aW9uc1dyYXBwZXIsIGxpbmUpO1xuICB9KTtcbiAgY29uc3QgbG9jYXRpb25zQmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGxvY2F0aW9uc0Rpdik7XG4gIGxvY2F0aW9uc0JnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcblxuICBjb25zdCByZXZpZXdzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJyZXZpZXdzXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIHJldmlld3NEaXYsIFRleHRDb250ZW50LnJldmlld3MudGl0bGUpO1xuICBjb25zdCByZXZpZXdzV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid3JhcHBlclwiXSwgcmV2aWV3c0Rpdik7XG4gIFRleHRDb250ZW50LnJldmlld3MudGV4dC5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGV4dC1lbnRyeVwiXSwgcmV2aWV3c1dyYXBwZXIsIGxpbmUpO1xuICB9KTtcbiAgY29uc3QgcmV2aWV3c0JnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCByZXZpZXdzRGl2KTtcbiAgcmV2aWV3c0JnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2NyaXB0cy9pbml0aWFsaXplRWxlbWVudHNcIjtcbmltcG9ydCBUZXh0Q29udGVudCBmcm9tIFwiLi90ZXh0Q29udGVudC5qc29uXCI7XG5pbXBvcnQgQmFja2dyb3VuZEltYWdlIGZyb20gXCIuLi9jb250ZW50L3NxdWFyZVBhcmNobWVudC5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWVudShjYXRlZ29yeSwgcGFyZW50KSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInNlY3Rpb25cIiwgY2F0ZWdvcnldLCBwYXJlbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiLCBjYXRlZ29yeV0sIHNlY3Rpb24sIFRleHRDb250ZW50W2NhdGVnb3J5XS50aXRsZSk7XG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndyYXBwZXJcIiwgY2F0ZWdvcnldLCBwYXJlbnQpO1xuXG4gIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZW50cnlcIiwgXCJzcGFjZXJcIl0sIHdyYXBwZXIpO1xuXG4gIE9iamVjdC5rZXlzKFRleHRDb250ZW50W2NhdGVnb3J5XSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleSAhPT0gXCJ0aXRsZVwiKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZW50cnlcIiwgY2F0ZWdvcnldLCB3cmFwcGVyKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBbXCJ0aXRsZVwiLCBjYXRlZ29yeV0sXG4gICAgICAgIGVudHJ5LFxuICAgICAgICBUZXh0Q29udGVudFtjYXRlZ29yeV1ba2V5XS5uYW1lXG4gICAgICApO1xuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFtcImRlc2NyaXB0aW9uXCIsIGNhdGVnb3J5XSxcbiAgICAgICAgZW50cnksXG4gICAgICAgIFRleHRDb250ZW50W2NhdGVnb3J5XVtrZXldLmRlc2NyaXB0aW9uXG4gICAgICApO1xuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFtcInByaWNlXCIsIGNhdGVnb3J5XSxcbiAgICAgICAgZW50cnksXG4gICAgICAgIFRleHRDb250ZW50W2NhdGVnb3J5XVtrZXldLnByaWNlXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJlbnRyeVwiLCBcInNwYWNlclwiXSwgd3JhcHBlcik7XG5cbiAgY29uc3QgYmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIHdyYXBwZXIpO1xuICBiZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVEaXYoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIm1lbnVcIl0pO1xuXG4gIGNyZWF0ZU1lbnUoXCJhcHBldGl6ZXJzXCIsIGVsZW1lbnQpO1xuICBjcmVhdGVNZW51KFwiZW50cmVlc1wiLCBlbGVtZW50KTtcbiAgY3JlYXRlTWVudShcImJldmVyYWdlc1wiLCBlbGVtZW50KTtcbiAgY3JlYXRlTWVudShcImRlc3NlcnRzXCIsIGVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IEhvbWVUYWIgZnJvbSBcIi4uL2hvbWVUYWIvaG9tZVRhYlwiO1xuaW1wb3J0IE1lbnVUYWIgZnJvbSBcIi4uL21lbnVUYWIvbWVudVRhYlwiO1xuaW1wb3J0IENvbnRhY3RUYWIgZnJvbSBcIi4uL2NvbnRhY3RUYWIvY29udGFjdFRhYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZDb250cm9sbGVyKCkge1xuICBjb25zdCBuYXZUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYgLnRhYlwiKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgbGV0IGdlbmVyYXRlZERpdjtcblxuICBmdW5jdGlvbiByZW1vdmVDb250ZW50KCkge1xuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hUYWIodGFiKSB7XG4gICAgaWYgKHRhYiA9PT0gXCJob21lXCIpIHtcbiAgICAgIGdlbmVyYXRlZERpdiA9IEhvbWVUYWIoKTtcbiAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkRGl2KTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PT0gXCJtZW51XCIpIHtcbiAgICAgIGdlbmVyYXRlZERpdiA9IE1lbnVUYWIoKTtcbiAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkRGl2KTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgIGdlbmVyYXRlZERpdiA9IENvbnRhY3RUYWIoKTtcbiAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkRGl2KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHN3aXRjaFRhYihcImhvbWVcIik7XG4gIH1cblxuICBuYXZUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBBcnJheS5mcm9tKHRhYi5jbGFzc0xpc3QpO1xuICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gY2xhc3Nlcy5maW5kKChjbGFzc05hbWUpID0+IGNsYXNzTmFtZSAhPT0gXCJ0YWJcIik7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzd2l0Y2hUYWIoYWN0aXZlQ2xhc3MpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufVxuIiwiaW1wb3J0IEhlYWRlckltYWdlIGZyb20gXCIuLi9oZWFkZXIvbGFuZHNjYXBlUGFyY2htZW50LnN2Z1wiO1xuaW1wb3J0IEF0dHJpYnV0aW9uIGZyb20gXCIuLi9mb290ZXIvYXR0cmlidXRpb24uanNvblwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9wdXJwbGVMYXR0aWNlLmpwZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSwgY2xhc3NlcywgcGFyZW50LCB0ZXh0Q29udGVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG5cbiAgaWYgKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxFbGVtZW50cygpIHtcbiAgLy8gQ3JlYXRlIENvbnRhaW5lciBFbGVtZW50c1xuICBjb25zdCBjb250YWluZXJEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNvbnRhaW5lclwiXSwgZG9jdW1lbnQuYm9keSk7XG4gIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7QmFja2dyb3VuZH0pYDtcblxuICAvLyBDcmVhdGUgSGVhZGVyIEVsZW1lbnRzIHcvIENsYXNzZXNcbiAgY29uc3QgaGVhZGVyRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJoZWFkZXJcIl0sIGNvbnRhaW5lckRpdik7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBoZWFkZXJEaXYsIFwiVGhlIExlZ2VyZGVtYWluIExvdW5nZVwiKTtcbiAgY29uc3QgaGVhZGVyQmdJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgaGVhZGVyRGl2KTtcbiAgaGVhZGVyQmdJbWFnZS5zcmMgPSBIZWFkZXJJbWFnZTtcblxuICAvLyBDcmVhdGUgTmF2IEVsZW1lbnRzIHcvIENsYXNzZXNcbiAgY29uc3QgbmF2RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJuYXZcIl0sIGNvbnRhaW5lckRpdik7XG4gIGNvbnN0IG5hdlRhYlRyYXkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhYi10cmF5XCJdLCBuYXZEaXYpO1xuICBjb25zdCBob21lVGFiID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YWJcIiwgXCJob21lXCJdLCBuYXZUYWJUcmF5KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW10sIGhvbWVUYWIsIFwiSG9tZVwiKTtcbiAgY29uc3QgbWVudVRhYiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFiXCIsIFwibWVudVwiXSwgbmF2VGFiVHJheSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdLCBtZW51VGFiLCBcIk1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhYlwiLCBcImNvbnRhY3RcIl0sIG5hdlRhYlRyYXkpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXSwgY29udGFjdFRhYiwgXCJDb250YWN0XCIpO1xuXG4gIC8vIENyZWF0ZSBDb250ZW50IEVsZW1lbnRzXG4gIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGVudFwiXSwgY29udGFpbmVyRGl2KTtcblxuICAvLyBDcmVhdGUgRm9vdGVyIEVsZW1lbnRzXG4gIGNvbnN0IGZvb3RlckRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZm9vdGVyXCJdLCBjb250YWluZXJEaXYpO1xuICBjb25zdCBhdXRob3JQID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1wiYXV0aG9yXCJdLCBmb290ZXJEaXYpO1xuICBhdXRob3JQLmlubmVySFRNTCA9XG4gICAgXCJDcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS94aW5jcnlwdGVkeCc+eEluY3J5cHRlZHg8L2E+XCI7XG4gIEF0dHJpYnV0aW9uLmVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBjb25zdCBlbnRyeUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJhdHRyaWJ1dGlvblwiXSwgZm9vdGVyRGl2KTtcbiAgICBlbnRyeUVsZW1lbnQuaW5uZXJIVE1MID0gZW50cnk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgSW5pdGlhbGl6ZUVsZW1lbnRzIGZyb20gXCIuL3NjcmlwdHMvaW5pdGlhbGl6ZUVsZW1lbnRzXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL25hdi9uYXZcIjtcblxuSW5pdGlhbGl6ZUVsZW1lbnRzKCk7XG5OYXYoKTtcbk5hdigpLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==