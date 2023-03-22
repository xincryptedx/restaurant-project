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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsla(0, 74%, 39%, 0);\n\n  --nav-bg-color: hsla(0, 0%, 0%, 0);\n  --nav-tab-bg-color: hsla(0, 0%, 0%, 0.4);\n\n  --content-bg-color: hsla(0, 0%, 0%, 0.4);\n  --content-scroll-fade-color: hsla(0, 0%, 0%, 0.637);\n\n  --form-bg-color: hsl(46, 22%, 78%);\n\n  --content-card-bg-color: hsla(95, 80%, 50%, 0);\n\n  --footer-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 75vh 7vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px grey;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: var(--nav-tab-bg-color);\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 10px 10px 0px 0px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n.nav .tab:hover {\n  box-shadow: 0px -1px 1px 1px black;\n}\n\n.nav .tab p {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-scroll-fade-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / span all;\n  grid-row: 1 / span all;\n  z-index: 0;\n}\n\n.content .home img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .home .sub-text {\n  grid-area: sub-text;\n  text-align: center;\n  align-self: start;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n}\n\n.content .home .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n  display: grid;\n  grid-template: 1fr 2fr 1fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\"\n    \"sub-text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .locations {\n  grid-area: locations;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n/* #endregion */\n\n/* Menu */\n/* #region */\n.content .menu {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, min-content min-content) / 1fr;\n  grid-template-areas:\n    \"appetizers-title\"\n    \"appetizers-wrapper\"\n    \"entrees-title\"\n    \"entrees-wrapper\"\n    \"beverages-title\"\n    \"beverages-wrapper\"\n    \"desserts-title\"\n    \"desserts-wrapper\";\n  gap: 15px 0px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.content .menu .section {\n  display: grid;\n  height: 7vh;\n  width: 90%;\n  border-bottom: 1px dotted white;\n}\n\n.content .menu .section .title {\n  align-self: end;\n  justify-self: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  text-shadow: 2px 2px 4px rgb(0, 0, 0);\n}\n\n.content .menu .wrapper {\n  position: relative;\n  display: grid;\n  justify-items: center;\n\n  height: min-content;\n  width: 90vw;\n}\n\n.content .menu .wrapper .background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .menu .wrapper .entry {\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 3fr 1fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title price .\"\n    \". description description .\"\n    \". . . .\";\n  gap: 15px 0px;\n  background-color: var(--content-card-bg-color);\n  width: 100%;\n  height: 12vh;\n}\n\n.content .menu .wrapper .entry.spacer {\n  height: 5vh;\n}\n\n.content .menu .wrapper .entry .title {\n  grid-area: title;\n  font-weight: bold;\n}\n\n.content .menu .wrapper .entry .price {\n  grid-area: price;\n  justify-self: end;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n.content .menu .wrapper .entry .description {\n  grid-area: description;\n  font-size: 0.9rem;\n}\n\n.content .menu .section.title.appetizers {\n  grid-area: appetizers-title;\n}\n\n.content .menu .wrapper.appetizers {\n  grid-area: appetizers-wrapper;\n}\n\n.content .menu .section.title.entrees {\n  grid-area: entrees-title;\n}\n\n.content .menu .wrapper.entrees {\n  grid-area: entrees-wrapper;\n}\n\n.content .menu .section.title.beverages {\n  grid-area: beverages-title;\n}\n\n.content .menu .wrapper.beverages {\n  grid-area: beverages-wrapper;\n}\n\n.content .menu .section.title.desserts {\n  grid-area: desserts-title;\n}\n\n.content .menu .wrapper.desserts {\n  grid-area: desserts-wrapper;\n}\n\n/* #endregion */\n\n/* Contact */\n/* #region */\n.content .contact {\n  height: 100%;\n  display: grid;\n  grid-template: 50% 90% / 1fr;\n  grid-template-areas:\n    \"leylines\"\n    \"message\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .contact div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .contact div p {\n  width: 70%;\n}\n\n.content .contact .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  z-index: 0;\n}\n\n.content .contact .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n  grid-auto-rows: 8vh;\n}\n\n.content .contact .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n.content .contact .text {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .contact img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .contact .leylines {\n  grid-area: leylines;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .contact .message {\n  grid-area: message;\n  display: grid;\n  grid-template: 0.5fr 1fr 5fr 0.7fr 0.5fr/ 1fr 2fr 2fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title title .\"\n    \". form form .\"\n    \". . submit .\"\n    \". . . .\";\n  row-gap: 15px;\n}\n\n.content .contact .message form {\n  grid-area: form;\n  display: grid;\n  grid-template: 0.5fr 1fr 0.5fr 4fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"subject-label subject-label\"\n    \"subject subject\"\n    \"message-content-label message-content-label\"\n    \"message-content message-content\";\n}\n\n.content .contact label {\n  align-self: center;\n  font-style: italic;\n}\n\n.content .contact label.subject {\n  grid-area: subject-label;\n}\n\n.content .contact input.subject {\n  grid-area: subject;\n  height: 1.5rem;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n}\n\n.content .contact label.message-content {\n  grid-area: message-content-label;\n}\n\n.content .contact textarea.message-content {\n  grid-area: message-content;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n  resize: none;\n}\n\n.content .contact .submit {\n  grid-area: submit;\n  background-color: var(--form-bg-color);\n  font-size: 1.1rem;\n  font-weight: bold;\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.content .contact .submit:hover {\n  background-color: hsl(45, 33%, 61%);\n  border: 2px solid grey;\n}\n\n.content .contact .submit:active {\n  background-color: hsl(43, 18%, 51%);\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n  display: grid;\n  grid-template: 1fr 1fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"author .\"\n    \"author .\"\n    \"author .\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--footer-bg-color);\n  color: white;\n}\n\n.footer .author {\n  grid-area: author;\n  font-size: 0.7rem;\n}\n\n.footer .attribution {\n  font-size: 0.6rem;\n}\n\n/* #endregion */\n\n/* Screens at least 950px wide */\n/* #region */\n@media only screen and (min-width: 750px) {\n  .header .title {\n    font-size: 2rem;\n  }\n\n  .nav .tab p {\n    font-size: 1.5rem;\n  }\n\n  .content .home .title {\n    font-size: 1.75rem;\n  }\n\n  .content .home .text,\n  .content .home .text-entry {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .section .title {\n    font-size: 1.75rem;\n  }\n\n  .content .menu .entry .title {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .wrapper .entry .price {\n    font-size: 1.2rem;\n  }\n\n  .content .menu .wrapper .entry .description {\n    font-size: 1.2rem;\n  }\n\n  .content .contact .title {\n    font-size: 1.75rem;\n  }\n\n  .content .contact .text {\n    font-size: 1.4rem;\n  }\n\n  .content .contact label {\n    font-size: 1.2rem;\n  }\n\n  .content .contact input.subject {\n    height: 2rem;\n    font-size: 1.2rem;\n  }\n\n  .content .contact textarea {\n    font-size: 1.2rem;\n  }\n\n  .footer .author {\n    font-size: 0.9rem;\n  }\n\n  .footer .attribution {\n    font-size: 0.9rem;\n  }\n}\n/* #endregion */\n\n/* Screens at least 1200px wide */\n/* #region */\n@media only screen and (min-width: 1200px) {\n  .header .background {\n    max-width: 1200px;\n  }\n\n  .content .home div {\n    max-width: 1200px;\n  }\n\n  .content .menu .wrapper {\n    max-width: 1200px;\n  }\n\n  .content .contact div {\n    max-width: 1200px;\n  }\n}\n/* #endregion */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS */\n/* #region */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* #endregion */\n\n/* Global Variables */\n:root {\n  --header-bg-color: hsla(0, 74%, 39%, 0);\n\n  --nav-bg-color: hsla(0, 0%, 0%, 0);\n  --nav-tab-bg-color: hsla(0, 0%, 0%, 0.4);\n\n  --content-bg-color: hsla(0, 0%, 0%, 0.4);\n  --content-scroll-fade-color: hsla(0, 0%, 0%, 0.637);\n\n  --form-bg-color: hsl(46, 22%, 78%);\n\n  --content-card-bg-color: hsla(95, 80%, 50%, 0);\n\n  --footer-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Containter Div */\n/* #region */\n.container {\n  display: grid;\n  grid-template: 8vh 10vh 75vh 7vh/ 1fr;\n  grid-template-areas:\n    \"headerDiv\"\n    \"navDiv\"\n    \"contentDiv\"\n    \"footerDiv\";\n}\n\n/* #endregion */\n\n/* Header Div */\n/* #region */\n.header {\n  grid-area: headerDiv;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  grid-template-areas: \"header\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--header-bg-color);\n}\n\n.header .background {\n  grid-area: header;\n  height: 7vh;\n  width: 90%;\n  z-index: 0;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.header .title {\n  grid-area: header;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px grey;\n}\n\n/* #endregion */\n\n/* Nav Div */\n/* #region */\n.nav .tab-tray {\n  grid-area: navDiv;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n\n  height: 100%;\n  background-color: var(--nav-bg-color);\n}\n\n.nav .tab {\n  background-color: var(--nav-tab-bg-color);\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n\n  height: 80%;\n  width: 80%;\n  align-self: end;\n  justify-self: center;\n  border-radius: 10px 10px 0px 0px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n.nav .tab:hover {\n  box-shadow: 0px -1px 1px 1px black;\n}\n\n.nav .tab p {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* #endregion */\n\n/* Content Div */\n/* #region */\n.content {\n  height: 100%;\n  grid-area: contentDiv;\n  background-color: var(--content-bg-color);\n  position: relative;\n}\n\n.content div * {\n  z-index: 1;\n}\n\n.content::before,\n.content::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  background-image: linear-gradient(\n    to bottom,\n    hsla(0, 0%, 100%, 0),\n    var(--content-scroll-fade-color)\n  );\n  pointer-events: none;\n  z-index: 2;\n}\n\n.content::before {\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.content::after {\n  bottom: 0;\n}\n\n/* Home */\n/* #region */\n.content .home {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, 40%) / 1fr;\n  grid-template-areas:\n    \"about\"\n    \"hours\"\n    \"locations\"\n    \"reviews\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .home div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .home .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / span all;\n  grid-row: 1 / span all;\n  z-index: 0;\n}\n\n.content .home img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .home div p {\n  width: 70%;\n}\n\n.content .home .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.content .home .text {\n  grid-area: text;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .home .sub-text {\n  grid-area: sub-text;\n  text-align: center;\n  align-self: start;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n}\n\n.content .home .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .about {\n  grid-area: about;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .hours {\n  grid-area: hours;\n  display: grid;\n  grid-template: 1fr 2fr 1fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\"\n    \"sub-text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .locations {\n  grid-area: locations;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .home .reviews {\n  grid-area: reviews;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n/* #endregion */\n\n/* Menu */\n/* #region */\n.content .menu {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(4, min-content min-content) / 1fr;\n  grid-template-areas:\n    \"appetizers-title\"\n    \"appetizers-wrapper\"\n    \"entrees-title\"\n    \"entrees-wrapper\"\n    \"beverages-title\"\n    \"beverages-wrapper\"\n    \"desserts-title\"\n    \"desserts-wrapper\";\n  gap: 15px 0px;\n  justify-items: center;\n  overflow-y: scroll;\n}\n\n.content .menu .section {\n  display: grid;\n  height: 7vh;\n  width: 90%;\n  border-bottom: 1px dotted white;\n}\n\n.content .menu .section .title {\n  align-self: end;\n  justify-self: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: white;\n  text-shadow: 2px 2px 4px rgb(0, 0, 0);\n}\n\n.content .menu .wrapper {\n  position: relative;\n  display: grid;\n  justify-items: center;\n\n  height: min-content;\n  width: 90vw;\n}\n\n.content .menu .wrapper .background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .menu .wrapper .entry {\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr 3fr 1fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title price .\"\n    \". description description .\"\n    \". . . .\";\n  gap: 15px 0px;\n  background-color: var(--content-card-bg-color);\n  width: 100%;\n  height: 12vh;\n}\n\n.content .menu .wrapper .entry.spacer {\n  height: 5vh;\n}\n\n.content .menu .wrapper .entry .title {\n  grid-area: title;\n  font-weight: bold;\n}\n\n.content .menu .wrapper .entry .price {\n  grid-area: price;\n  justify-self: end;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n.content .menu .wrapper .entry .description {\n  grid-area: description;\n  font-size: 0.9rem;\n}\n\n.content .menu .section.title.appetizers {\n  grid-area: appetizers-title;\n}\n\n.content .menu .wrapper.appetizers {\n  grid-area: appetizers-wrapper;\n}\n\n.content .menu .section.title.entrees {\n  grid-area: entrees-title;\n}\n\n.content .menu .wrapper.entrees {\n  grid-area: entrees-wrapper;\n}\n\n.content .menu .section.title.beverages {\n  grid-area: beverages-title;\n}\n\n.content .menu .wrapper.beverages {\n  grid-area: beverages-wrapper;\n}\n\n.content .menu .section.title.desserts {\n  grid-area: desserts-title;\n}\n\n.content .menu .wrapper.desserts {\n  grid-area: desserts-wrapper;\n}\n\n/* #endregion */\n\n/* Contact */\n/* #region */\n.content .contact {\n  height: 100%;\n  display: grid;\n  grid-template: 50% 90% / 1fr;\n  grid-template-areas:\n    \"leylines\"\n    \"message\";\n  justify-items: center;\n  align-items: center;\n  overflow-y: scroll;\n}\n\n.content .contact div {\n  background-color: var(--content-card-bg-color);\n  height: 90%;\n  width: 90%;\n}\n\n.content .contact div p {\n  width: 70%;\n}\n\n.content .contact .background {\n  height: 100%;\n  width: 100%;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n  z-index: 0;\n}\n\n.content .contact .wrapper {\n  grid-area: text;\n  background: transparent;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  justify-items: center;\n  grid-auto-rows: 8vh;\n}\n\n.content .contact .title {\n  grid-area: title;\n  text-align: center;\n  align-self: end;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n.content .contact .text {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.content .contact img {\n  filter: drop-shadow(2px 2px 4px rgb(0, 0, 0));\n}\n\n.content .contact .leylines {\n  grid-area: leylines;\n  display: grid;\n  grid-template: 1fr 4fr / 1fr;\n  grid-template-areas:\n    \"title\"\n    \"text\";\n  align-items: center;\n  justify-items: center;\n}\n\n.content .contact .message {\n  grid-area: message;\n  display: grid;\n  grid-template: 0.5fr 1fr 5fr 0.7fr 0.5fr/ 1fr 2fr 2fr 1fr;\n  grid-template-areas:\n    \". . . .\"\n    \". title title .\"\n    \". form form .\"\n    \". . submit .\"\n    \". . . .\";\n  row-gap: 15px;\n}\n\n.content .contact .message form {\n  grid-area: form;\n  display: grid;\n  grid-template: 0.5fr 1fr 0.5fr 4fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"subject-label subject-label\"\n    \"subject subject\"\n    \"message-content-label message-content-label\"\n    \"message-content message-content\";\n}\n\n.content .contact label {\n  align-self: center;\n  font-style: italic;\n}\n\n.content .contact label.subject {\n  grid-area: subject-label;\n}\n\n.content .contact input.subject {\n  grid-area: subject;\n  height: 1.5rem;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n}\n\n.content .contact label.message-content {\n  grid-area: message-content-label;\n}\n\n.content .contact textarea.message-content {\n  grid-area: message-content;\n  background-color: var(--form-bg-color);\n  border: 1px solid grey;\n  resize: none;\n}\n\n.content .contact .submit {\n  grid-area: submit;\n  background-color: var(--form-bg-color);\n  font-size: 1.1rem;\n  font-weight: bold;\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.content .contact .submit:hover {\n  background-color: hsl(45, 33%, 61%);\n  border: 2px solid grey;\n}\n\n.content .contact .submit:active {\n  background-color: hsl(43, 18%, 51%);\n}\n\n/* #endregion */\n\n/* #endregion */\n\n/* Footer Div */\n/* #region */\n.footer {\n  grid-area: footerDiv;\n  display: grid;\n  grid-template: 1fr 1fr 1fr/ 1fr 1fr;\n  grid-template-areas:\n    \"author .\"\n    \"author .\"\n    \"author .\";\n  align-items: center;\n  justify-items: center;\n\n  background-color: var(--footer-bg-color);\n  color: white;\n}\n\n.footer .author {\n  grid-area: author;\n  font-size: 0.7rem;\n}\n\n.footer .attribution {\n  font-size: 0.6rem;\n}\n\n/* #endregion */\n\n/* Screens at least 950px wide */\n/* #region */\n@media only screen and (min-width: 750px) {\n  .header .title {\n    font-size: 2rem;\n  }\n\n  .nav .tab p {\n    font-size: 1.5rem;\n  }\n\n  .content .home .title {\n    font-size: 1.75rem;\n  }\n\n  .content .home .text,\n  .content .home .text-entry {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .section .title {\n    font-size: 1.75rem;\n  }\n\n  .content .menu .entry .title {\n    font-size: 1.4rem;\n  }\n\n  .content .menu .wrapper .entry .price {\n    font-size: 1.2rem;\n  }\n\n  .content .menu .wrapper .entry .description {\n    font-size: 1.2rem;\n  }\n\n  .content .contact .title {\n    font-size: 1.75rem;\n  }\n\n  .content .contact .text {\n    font-size: 1.4rem;\n  }\n\n  .content .contact label {\n    font-size: 1.2rem;\n  }\n\n  .content .contact input.subject {\n    height: 2rem;\n    font-size: 1.2rem;\n  }\n\n  .content .contact textarea {\n    font-size: 1.2rem;\n  }\n\n  .footer .author {\n    font-size: 0.9rem;\n  }\n\n  .footer .attribution {\n    font-size: 0.9rem;\n  }\n}\n/* #endregion */\n\n/* Screens at least 1200px wide */\n/* #region */\n@media only screen and (min-width: 1200px) {\n  .header .background {\n    max-width: 1200px;\n  }\n\n  .content .home div {\n    max-width: 1200px;\n  }\n\n  .content .menu .wrapper {\n    max-width: 1200px;\n  }\n\n  .content .contact div {\n    max-width: 1200px;\n  }\n}\n/* #endregion */\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsVUFBVSxVQUFVLEtBQUssWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxZQUFZLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FB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QUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUEyQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUM7QUFDbEM7O0FBRTVCLHVFQUFrQjtBQUNsQixvREFBRztBQUNILG9EQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb250YWN0VGFiL2NvbnRhY3RUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2hvbWVUYWIvaG9tZVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvbWVudVRhYi9tZW51VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9uYXYvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmVzZXQgQ1NTICovXFxuLyogI3JlZ2lvbiAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBHbG9iYWwgVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY29sb3I6IGhzbGEoMCwgNzQlLCAzOSUsIDApO1xcblxcbiAgLS1uYXYtYmctY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwKTtcXG4gIC0tbmF2LXRhYi1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNCk7XFxuXFxuICAtLWNvbnRlbnQtYmctY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjQpO1xcbiAgLS1jb250ZW50LXNjcm9sbC1mYWRlLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC42MzcpO1xcblxcbiAgLS1mb3JtLWJnLWNvbG9yOiBoc2woNDYsIDIyJSwgNzglKTtcXG5cXG4gIC0tY29udGVudC1jYXJkLWJnLWNvbG9yOiBoc2xhKDk1LCA4MCUsIDUwJSwgMCk7XFxuXFxuICAtLWZvb3Rlci1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNzUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIENvbnRhaW50ZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDh2aCAxMHZoIDc1dmggN3ZoLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyRGl2XFxcIlxcbiAgICBcXFwibmF2RGl2XFxcIlxcbiAgICBcXFwiY29udGVudERpdlxcXCJcXG4gICAgXFxcImZvb3RlckRpdlxcXCI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBIZWFkZXIgRGl2ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXJEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHotaW5kZXg6IDA7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYigwLCAwLCAwKSk7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggZ3JleTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIE5hdiBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLm5hdiAudGFiLXRyYXkge1xcbiAgZ3JpZC1hcmVhOiBuYXZEaXY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbn1cXG5cXG4ubmF2IC50YWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LXRhYi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXYgLnRhYjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggLTFweCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4ubmF2IC50YWIgcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogQ29udGVudCBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50RGl2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250ZW50IGRpdiAqIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250ZW50OjpiZWZvcmUsXFxuLmNvbnRlbnQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgIGhzbGEoMCwgMCUsIDEwMCUsIDApLFxcbiAgICB2YXIoLS1jb250ZW50LXNjcm9sbC1mYWRlLWNvbG9yKVxcbiAgKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSB7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBIb21lICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IC5ob21lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgNDAlKSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhYm91dFxcXCJcXG4gICAgXFxcImhvdXJzXFxcIlxcbiAgICBcXFwibG9jYXRpb25zXFxcIlxcbiAgICBcXFwicmV2aWV3c1xcXCI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jYXJkLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gYWxsO1xcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIGFsbDtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGltZyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYigwLCAwLCAwKSk7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGRpdiBwIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnRleHQge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5zdWItdGV4dCB7XFxuICBncmlkLWFyZWE6IHN1Yi10ZXh0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAud3JhcHBlciB7XFxuICBncmlkLWFyZWE6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuYWJvdXQge1xcbiAgZ3JpZC1hcmVhOiBhYm91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuaG91cnMge1xcbiAgZ3JpZC1hcmVhOiBob3VycztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMmZyIDFmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiXFxuICAgIFxcXCJzdWItdGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAubG9jYXRpb25zIHtcXG4gIGdyaWQtYXJlYTogbG9jYXRpb25zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA0ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5yZXZpZXdzIHtcXG4gIGdyaWQtYXJlYTogcmV2aWV3cztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgNGZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogTWVudSAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCAubWVudSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIG1pbi1jb250ZW50IG1pbi1jb250ZW50KSAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhcHBldGl6ZXJzLXRpdGxlXFxcIlxcbiAgICBcXFwiYXBwZXRpemVycy13cmFwcGVyXFxcIlxcbiAgICBcXFwiZW50cmVlcy10aXRsZVxcXCJcXG4gICAgXFxcImVudHJlZXMtd3JhcHBlclxcXCJcXG4gICAgXFxcImJldmVyYWdlcy10aXRsZVxcXCJcXG4gICAgXFxcImJldmVyYWdlcy13cmFwcGVyXFxcIlxcbiAgICBcXFwiZGVzc2VydHMtdGl0bGVcXFwiXFxuICAgIFxcXCJkZXNzZXJ0cy13cmFwcGVyXFxcIjtcXG4gIGdhcDogMTVweCAwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHdoaXRlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbiAudGl0bGUge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogOTB2dztcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogLTE7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYigwLCAwLCAwKSk7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyIDNmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIi4gLiAuIC5cXFwiXFxuICAgIFxcXCIuIHRpdGxlIHByaWNlIC5cXFwiXFxuICAgIFxcXCIuIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC5cXFwiXFxuICAgIFxcXCIuIC4gLiAuXFxcIjtcXG4gIGdhcDogMTVweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEydmg7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeS5zcGFjZXIge1xcbiAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLnByaWNlIHtcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuYXBwZXRpemVycyB7XFxuICBncmlkLWFyZWE6IGFwcGV0aXplcnMtdGl0bGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyLmFwcGV0aXplcnMge1xcbiAgZ3JpZC1hcmVhOiBhcHBldGl6ZXJzLXdyYXBwZXI7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmVudHJlZXMge1xcbiAgZ3JpZC1hcmVhOiBlbnRyZWVzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5lbnRyZWVzIHtcXG4gIGdyaWQtYXJlYTogZW50cmVlcy13cmFwcGVyO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5iZXZlcmFnZXMge1xcbiAgZ3JpZC1hcmVhOiBiZXZlcmFnZXMtdGl0bGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyLmJldmVyYWdlcyB7XFxuICBncmlkLWFyZWE6IGJldmVyYWdlcy13cmFwcGVyO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5kZXNzZXJ0cyB7XFxuICBncmlkLWFyZWE6IGRlc3NlcnRzLXRpdGxlO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlci5kZXNzZXJ0cyB7XFxuICBncmlkLWFyZWE6IGRlc3NlcnRzLXdyYXBwZXI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBDb250YWN0ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IC5jb250YWN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA1MCUgOTAlIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImxleWxpbmVzXFxcIlxcbiAgICBcXFwibWVzc2FnZVxcXCI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jYXJkLWJnLWNvbG9yKTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgZGl2IHAge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC53cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWF1dG8tcm93czogOHZoO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGltZyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYigwLCAwLCAwKSk7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5sZXlsaW5lcyB7XFxuICBncmlkLWFyZWE6IGxleWxpbmVzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA0ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5tZXNzYWdlIHtcXG4gIGdyaWQtYXJlYTogbWVzc2FnZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciAxZnIgNWZyIDAuN2ZyIDAuNWZyLyAxZnIgMmZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLiAuIC4gLlxcXCJcXG4gICAgXFxcIi4gdGl0bGUgdGl0bGUgLlxcXCJcXG4gICAgXFxcIi4gZm9ybSBmb3JtIC5cXFwiXFxuICAgIFxcXCIuIC4gc3VibWl0IC5cXFwiXFxuICAgIFxcXCIuIC4gLiAuXFxcIjtcXG4gIHJvdy1nYXA6IDE1cHg7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5tZXNzYWdlIGZvcm0ge1xcbiAgZ3JpZC1hcmVhOiBmb3JtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDFmciAwLjVmciA0ZnIgMWZyLyAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInN1YmplY3QtbGFiZWwgc3ViamVjdC1sYWJlbFxcXCJcXG4gICAgXFxcInN1YmplY3Qgc3ViamVjdFxcXCJcXG4gICAgXFxcIm1lc3NhZ2UtY29udGVudC1sYWJlbCBtZXNzYWdlLWNvbnRlbnQtbGFiZWxcXFwiXFxuICAgIFxcXCJtZXNzYWdlLWNvbnRlbnQgbWVzc2FnZS1jb250ZW50XFxcIjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgbGFiZWwge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbC5zdWJqZWN0IHtcXG4gIGdyaWQtYXJlYTogc3ViamVjdC1sYWJlbDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgaW5wdXQuc3ViamVjdCB7XFxuICBncmlkLWFyZWE6IHN1YmplY3Q7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgbGFiZWwubWVzc2FnZS1jb250ZW50IHtcXG4gIGdyaWQtYXJlYTogbWVzc2FnZS1jb250ZW50LWxhYmVsO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCB0ZXh0YXJlYS5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlLWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5zdWJtaXQge1xcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWJnLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDUsIDMzJSwgNjElKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC5zdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0MywgMTglLCA1MSUpO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEZvb3RlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlckRpdjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmci8gMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJhdXRob3IgLlxcXCJcXG4gICAgXFxcImF1dGhvciAuXFxcIlxcbiAgICBcXFwiYXV0aG9yIC5cXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb290ZXIgLmF1dGhvciB7XFxuICBncmlkLWFyZWE6IGF1dGhvcjtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4uZm9vdGVyIC5hdHRyaWJ1dGlvbiB7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIFNjcmVlbnMgYXQgbGVhc3QgOTUwcHggd2lkZSAqL1xcbi8qICNyZWdpb24gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuICAuaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5uYXYgLnRhYiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuaG9tZSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuaG9tZSAudGV4dCxcXG4gIC5jb250ZW50IC5ob21lIC50ZXh0LWVudHJ5IHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAubWVudSAuc2VjdGlvbiAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAubWVudSAuZW50cnkgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLnByaWNlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAubWVudSAud3JhcHBlciAuZW50cnkgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IGlucHV0LnN1YmplY3Qge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5mb290ZXIgLmF1dGhvciB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcblxcbiAgLmZvb3RlciAuYXR0cmlidXRpb24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIFNjcmVlbnMgYXQgbGVhc3QgMTIwMHB4IHdpZGUgKi9cXG4vKiAjcmVnaW9uICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5oZWFkZXIgLmJhY2tncm91bmQge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5ob21lIGRpdiB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IGRpdiB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2QsWUFBWTtBQUNaOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQSxlQUFlOztBQUVmLGlDQUFpQztBQUNqQyxZQUFZO0FBQ1o7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0EsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBDU1MgKi9cXG4vKiAjcmVnaW9uICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogaHNsYSgwLCA3NCUsIDM5JSwgMCk7XFxuXFxuICAtLW5hdi1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDApO1xcbiAgLS1uYXYtdGFiLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC40KTtcXG5cXG4gIC0tY29udGVudC1iZy1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNCk7XFxuICAtLWNvbnRlbnQtc2Nyb2xsLWZhZGUtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjYzNyk7XFxuXFxuICAtLWZvcm0tYmctY29sb3I6IGhzbCg0NiwgMjIlLCA3OCUpO1xcblxcbiAgLS1jb250ZW50LWNhcmQtYmctY29sb3I6IGhzbGEoOTUsIDgwJSwgNTAlLCAwKTtcXG5cXG4gIC0tZm9vdGVyLWJnLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC43NSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogQ29udGFpbnRlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogOHZoIDEwdmggNzV2aCA3dmgvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXJEaXZcXFwiXFxuICAgIFxcXCJuYXZEaXZcXFwiXFxuICAgIFxcXCJjb250ZW50RGl2XFxcIlxcbiAgICBcXFwiZm9vdGVyRGl2XFxcIjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIEhlYWRlciBEaXYgKi9cXG4vKiAjcmVnaW9uICovXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlckRpdjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyIC5iYWNrZ3JvdW5kIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogOTAlO1xcbiAgei1pbmRleDogMDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBncmV5O1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogTmF2IERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4ubmF2IC50YWItdHJheSB7XFxuICBncmlkLWFyZWE6IG5hdkRpdjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyByZXBlYXQoMywgMWZyKTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxufVxcblxcbi5uYXYgLnRhYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtdGFiLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLm5hdiAudGFiOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5uYXYgLnRhYiBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBDb250ZW50IERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGNvbnRlbnREaXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNvbnRlbnQgZGl2ICoge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbnRlbnQ6OmJlZm9yZSxcXG4uY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgaHNsYSgwLCAwJSwgMTAwJSwgMCksXFxuICAgIHZhcigtLWNvbnRlbnQtc2Nyb2xsLWZhZGUtY29sb3IpXFxuICApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY29udGVudDo6YmVmb3JlIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5jb250ZW50OjphZnRlciB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi8qIEhvbWUgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLmhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCA0MCUpIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImFib3V0XFxcIlxcbiAgICBcXFwiaG91cnNcXFwiXFxuICAgIFxcXCJsb2NhdGlvbnNcXFwiXFxuICAgIFxcXCJyZXZpZXdzXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5ob21lIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAuYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiBhbGw7XFxuICBncmlkLXJvdzogMSAvIHNwYW4gYWxsO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgaW1nIHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgZGl2IHAge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCAuaG9tZSAudGV4dCB7XFxuICBncmlkLWFyZWE6IHRleHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnN1Yi10ZXh0IHtcXG4gIGdyaWQtYXJlYTogc3ViLXRleHQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5jb250ZW50IC5ob21lIC53cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogdGV4dDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5hYm91dCB7XFxuICBncmlkLWFyZWE6IGFib3V0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA0ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5ob3VycyB7XFxuICBncmlkLWFyZWE6IGhvdXJzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAyZnIgMWZyIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlXFxcIlxcbiAgICBcXFwidGV4dFxcXCJcXG4gICAgXFxcInN1Yi10ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5ob21lIC5sb2NhdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbnM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmhvbWUgLnJldmlld3Mge1xcbiAgZ3JpZC1hcmVhOiByZXZpZXdzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA0ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVcXFwiXFxuICAgIFxcXCJ0ZXh0XFxcIjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiBNZW51ICovXFxuLyogI3JlZ2lvbiAqL1xcbi5jb250ZW50IC5tZW51IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQpIC8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImFwcGV0aXplcnMtdGl0bGVcXFwiXFxuICAgIFxcXCJhcHBldGl6ZXJzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJlbnRyZWVzLXRpdGxlXFxcIlxcbiAgICBcXFwiZW50cmVlcy13cmFwcGVyXFxcIlxcbiAgICBcXFwiYmV2ZXJhZ2VzLXRpdGxlXFxcIlxcbiAgICBcXFwiYmV2ZXJhZ2VzLXdyYXBwZXJcXFwiXFxuICAgIFxcXCJkZXNzZXJ0cy10aXRsZVxcXCJcXG4gICAgXFxcImRlc3NlcnRzLXdyYXBwZXJcXFwiO1xcbiAgZ2FwOiAxNXB4IDBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgd2hpdGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uIC50aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4uY29udGVudCAubWVudSAud3JhcHBlciAuYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgLyAxZnIgM2ZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiLiAuIC4gLlxcXCJcXG4gICAgXFxcIi4gdGl0bGUgcHJpY2UgLlxcXCJcXG4gICAgXFxcIi4gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLlxcXCJcXG4gICAgXFxcIi4gLiAuIC5cXFwiO1xcbiAgZ2FwOiAxNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY2FyZC1iZy1jb2xvcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTJ2aDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5LnNwYWNlciB7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIgLmVudHJ5IC50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAucHJpY2Uge1xcbiAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAuZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY29udGVudCAubWVudSAuc2VjdGlvbi50aXRsZS5hcHBldGl6ZXJzIHtcXG4gIGdyaWQtYXJlYTogYXBwZXRpemVycy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuYXBwZXRpemVycyB7XFxuICBncmlkLWFyZWE6IGFwcGV0aXplcnMtd3JhcHBlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLnNlY3Rpb24udGl0bGUuZW50cmVlcyB7XFxuICBncmlkLWFyZWE6IGVudHJlZXMtdGl0bGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyLmVudHJlZXMge1xcbiAgZ3JpZC1hcmVhOiBlbnRyZWVzLXdyYXBwZXI7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmJldmVyYWdlcyB7XFxuICBncmlkLWFyZWE6IGJldmVyYWdlcy10aXRsZTtcXG59XFxuXFxuLmNvbnRlbnQgLm1lbnUgLndyYXBwZXIuYmV2ZXJhZ2VzIHtcXG4gIGdyaWQtYXJlYTogYmV2ZXJhZ2VzLXdyYXBwZXI7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC5zZWN0aW9uLnRpdGxlLmRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogZGVzc2VydHMtdGl0bGU7XFxufVxcblxcbi5jb250ZW50IC5tZW51IC53cmFwcGVyLmRlc3NlcnRzIHtcXG4gIGdyaWQtYXJlYTogZGVzc2VydHMtd3JhcHBlcjtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qIENvbnRhY3QgKi9cXG4vKiAjcmVnaW9uICovXFxuLmNvbnRlbnQgLmNvbnRhY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDUwJSA5MCUgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwibGV5bGluZXNcXFwiXFxuICAgIFxcXCJtZXNzYWdlXFxcIjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNhcmQtYmctY29sb3IpO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBkaXYgcCB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLndyYXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXV0by1yb3dzOiA4dmg7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IC50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAudGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgaW1nIHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiKDAsIDAsIDApKTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLmxleWxpbmVzIHtcXG4gIGdyaWQtYXJlYTogbGV5bGluZXM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDRmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgXFxcInRleHRcXFwiO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2Uge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDFmciA1ZnIgMC43ZnIgMC41ZnIvIDFmciAyZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCIuIC4gLiAuXFxcIlxcbiAgICBcXFwiLiB0aXRsZSB0aXRsZSAuXFxcIlxcbiAgICBcXFwiLiBmb3JtIGZvcm0gLlxcXCJcXG4gICAgXFxcIi4gLiBzdWJtaXQgLlxcXCJcXG4gICAgXFxcIi4gLiAuIC5cXFwiO1xcbiAgcm93LWdhcDogMTVweDtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLm1lc3NhZ2UgZm9ybSB7XFxuICBncmlkLWFyZWE6IGZvcm07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgMWZyIDAuNWZyIDRmciAxZnIvIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic3ViamVjdC1sYWJlbCBzdWJqZWN0LWxhYmVsXFxcIlxcbiAgICBcXFwic3ViamVjdCBzdWJqZWN0XFxcIlxcbiAgICBcXFwibWVzc2FnZS1jb250ZW50LWxhYmVsIG1lc3NhZ2UtY29udGVudC1sYWJlbFxcXCJcXG4gICAgXFxcIm1lc3NhZ2UtY29udGVudCBtZXNzYWdlLWNvbnRlbnRcXFwiO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IGxhYmVsLnN1YmplY3Qge1xcbiAgZ3JpZC1hcmVhOiBzdWJqZWN0LWxhYmVsO1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBpbnB1dC5zdWJqZWN0IHtcXG4gIGdyaWQtYXJlYTogc3ViamVjdDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCBsYWJlbC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlLWNvbnRlbnQtbGFiZWw7XFxufVxcblxcbi5jb250ZW50IC5jb250YWN0IHRleHRhcmVhLm1lc3NhZ2UtY29udGVudCB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2UtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCAuY29udGFjdCAuc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NSwgMzMlLCA2MSUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRhY3QgLnN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQzLCAxOCUsIDUxJSk7XFxufVxcblxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogRm9vdGVyIERpdiAqL1xcbi8qICNyZWdpb24gKi9cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyRGl2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyLyAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImF1dGhvciAuXFxcIlxcbiAgICBcXFwiYXV0aG9yIC5cXFwiXFxuICAgIFxcXCJhdXRob3IgLlxcXCI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb3RlciAuYXV0aG9yIHtcXG4gIGdyaWQtYXJlYTogYXV0aG9yO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5mb290ZXIgLmF0dHJpYnV0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogU2NyZWVucyBhdCBsZWFzdCA5NTBweCB3aWRlICovXFxuLyogI3JlZ2lvbiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gIC5oZWFkZXIgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLm5hdiAudGFiIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5ob21lIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5ob21lIC50ZXh0LFxcbiAgLmNvbnRlbnQgLmhvbWUgLnRleHQtZW50cnkge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC5zZWN0aW9uIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC5lbnRyeSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAucHJpY2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5tZW51IC53cmFwcGVyIC5lbnRyeSAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC5jb250YWN0IC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgaW5wdXQuc3ViamVjdCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuY29udGVudCAuY29udGFjdCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmZvb3RlciAuYXV0aG9yIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuXFxuICAuZm9vdGVyIC5hdHRyaWJ1dGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogU2NyZWVucyBhdCBsZWFzdCAxMjAwcHggd2lkZSAqL1xcbi8qICNyZWdpb24gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmhlYWRlciAuYmFja2dyb3VuZCB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmhvbWUgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAubWVudSAud3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgLmNvbnRhY3QgZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB9XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuaW1wb3J0IEJhY2tncm91bmRJbWFnZSBmcm9tIFwiLi4vY29udGVudC9zcXVhcmVQYXJjaG1lbnQuc3ZnXCI7XG5pbXBvcnQgVGV4dENvbnRlbnQgZnJvbSBcIi4vdGV4dENvbnRlbnQuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0RGl2KCkge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWN0XCJdKTtcblxuICBjb25zdCBsZXlsaW5lc0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibGV5bGluZXNcIl0sIGVsZW1lbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgbGV5bGluZXNEaXYsIFRleHRDb250ZW50LmxleWxpbmVzLnRpdGxlKTtcbiAgY29uc3QgbGV5bGluZXNXcmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3cmFwcGVyXCJdLCBsZXlsaW5lc0Rpdik7XG4gIFRleHRDb250ZW50LmxleWxpbmVzLnRleHQuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHRcIl0sIGxleWxpbmVzV3JhcHBlciwgbGluZSk7XG4gIH0pO1xuICBjb25zdCBsZXlsaW5lc0JnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCBsZXlsaW5lc0Rpdik7XG4gIGxleWxpbmVzQmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xuXG4gIGNvbnN0IG1lc3NhZ2VEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIm1lc3NhZ2VcIl0sIGVsZW1lbnQpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgbWVzc2FnZURpdiwgVGV4dENvbnRlbnQubWVzc2FnZS50aXRsZSk7XG4gIGNvbnN0IG1lc3NhZ2VGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW10sIG1lc3NhZ2VEaXYpO1xuICBtZXNzYWdlRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lc3NhZ2UtZm9ybVwiKTtcbiAgY29uc3Qgc3ViamVjdExhYmVsID0gY3JlYXRlRWxlbWVudChcbiAgICBcImxhYmVsXCIsXG4gICAgW1wic3ViamVjdFwiXSxcbiAgICBtZXNzYWdlRm9ybSxcbiAgICBcIlN1YmplY3Q6XCJcbiAgKTtcbiAgc3ViamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInN1YmplY3QtaW5wdXRcIik7XG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJzdWJqZWN0XCJdLCBtZXNzYWdlRm9ybSk7XG4gIHN1YmplY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgc3ViamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViamVjdC1pbnB1dFwiKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRlbnRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJsYWJlbFwiLFxuICAgIFtcIm1lc3NhZ2UtY29udGVudFwiXSxcbiAgICBtZXNzYWdlRm9ybSxcbiAgICBcIk1lc3NhZ2U6XCJcbiAgKTtcbiAgbWVzc2FnZUNvbnRlbnRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZXNzYWdlLWNvbnRlbnQtdGV4dGFyZWFcIik7XG4gIGNvbnN0IG1lc3NhZ2VDb250ZW50VGV4dGFyZWEgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwidGV4dGFyZWFcIixcbiAgICBbXCJtZXNzYWdlLWNvbnRlbnRcIl0sXG4gICAgbWVzc2FnZUZvcm1cbiAgKTtcbiAgbWVzc2FnZUNvbnRlbnRUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lc3NhZ2UtY29udGVudC10ZXh0YXJlYVwiKTtcbiAgY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJzdWJtaXRcIl0sIG1lc3NhZ2VEaXYsIFwiU2VuZFwiKTtcbiAgY29uc3QgbWVzc2FnZUJnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCBtZXNzYWdlRGl2KTtcbiAgbWVzc2FnZUJnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2NyaXB0cy9pbml0aWFsaXplRWxlbWVudHNcIjtcbmltcG9ydCBUZXh0Q29udGVudCBmcm9tIFwiLi90ZXh0Q29udGVudC5qc29uXCI7XG5pbXBvcnQgQmFja2dyb3VuZEltYWdlIGZyb20gXCIuLi9jb250ZW50L3NxdWFyZVBhcmNobWVudC5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZURpdigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaG9tZVwiXSk7XG5cbiAgY29uc3QgYWJvdXREaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImFib3V0XCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGFib3V0RGl2LCBUZXh0Q29udGVudC5hYm91dC50aXRsZSk7IC8vIERvbid0IHRyeSB0byBqb2luIHNpbmdsZSBsaW5lZCB0ZXh0XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHRcIl0sIGFib3V0RGl2LCBUZXh0Q29udGVudC5hYm91dC50ZXh0LmpvaW4oXCIgXCIpKTsgLy8gTXVsdGlsaW5lIHRleHQgbmVlZHMgam9pbmVkXG4gIGNvbnN0IGFib3V0QmdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGFib3V0RGl2KTtcbiAgYWJvdXRCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgY29uc3QgaG91cnNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImhvdXJzXCJdLCBlbGVtZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIl0sIGhvdXJzRGl2LCBUZXh0Q29udGVudC5ob3Vycy50aXRsZSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHRcIl0sIGhvdXJzRGl2LCBUZXh0Q29udGVudC5ob3Vycy50ZXh0KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1wic3ViLXRleHRcIl0sIGhvdXJzRGl2LCBUZXh0Q29udGVudC5ob3Vycy5zdWJUZXh0KTtcbiAgY29uc3QgaG91cnNCZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgaG91cnNEaXYpO1xuICBob3Vyc0JnSW1nLnNyYyA9IEJhY2tncm91bmRJbWFnZTtcblxuICBjb25zdCBsb2NhdGlvbnNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImxvY2F0aW9uc1wiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCBsb2NhdGlvbnNEaXYsIFRleHRDb250ZW50LmxvY2F0aW9ucy50aXRsZSk7XG4gIGNvbnN0IGxvY2F0aW9uc1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndyYXBwZXJcIl0sIGxvY2F0aW9uc0Rpdik7XG4gIFRleHRDb250ZW50LmxvY2F0aW9ucy50ZXh0LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0ZXh0LWVudHJ5XCJdLCBsb2NhdGlvbnNXcmFwcGVyLCBsaW5lKTtcbiAgfSk7XG4gIGNvbnN0IGxvY2F0aW9uc0JnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCBsb2NhdGlvbnNEaXYpO1xuICBsb2NhdGlvbnNCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgY29uc3QgcmV2aWV3c0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicmV2aWV3c1wiXSwgZWxlbWVudCk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpdGxlXCJdLCByZXZpZXdzRGl2LCBUZXh0Q29udGVudC5yZXZpZXdzLnRpdGxlKTtcbiAgY29uc3QgcmV2aWV3c1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndyYXBwZXJcIl0sIHJldmlld3NEaXYpO1xuICBUZXh0Q29udGVudC5yZXZpZXdzLnRleHQuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRleHQtZW50cnlcIl0sIHJldmlld3NXcmFwcGVyLCBsaW5lKTtcbiAgfSk7XG4gIGNvbnN0IHJldmlld3NCZ0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wiYmFja2dyb3VuZFwiXSwgcmV2aWV3c0Rpdik7XG4gIHJldmlld3NCZ0ltZy5zcmMgPSBCYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL3NjcmlwdHMvaW5pdGlhbGl6ZUVsZW1lbnRzXCI7XG5pbXBvcnQgVGV4dENvbnRlbnQgZnJvbSBcIi4vdGV4dENvbnRlbnQuanNvblwiO1xuaW1wb3J0IEJhY2tncm91bmRJbWFnZSBmcm9tIFwiLi4vY29udGVudC9zcXVhcmVQYXJjaG1lbnQuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoY2F0ZWdvcnksIHBhcmVudCkge1xuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJzZWN0aW9uXCIsIGNhdGVnb3J5XSwgcGFyZW50KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW1widGl0bGVcIiwgY2F0ZWdvcnldLCBzZWN0aW9uLCBUZXh0Q29udGVudFtjYXRlZ29yeV0udGl0bGUpO1xuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3cmFwcGVyXCIsIGNhdGVnb3J5XSwgcGFyZW50KTtcblxuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImVudHJ5XCIsIFwic3BhY2VyXCJdLCB3cmFwcGVyKTtcblxuICBPYmplY3Qua2V5cyhUZXh0Q29udGVudFtjYXRlZ29yeV0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwidGl0bGVcIikge1xuICAgICAgY29uc3QgZW50cnkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImVudHJ5XCIsIGNhdGVnb3J5XSwgd3JhcHBlcik7XG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1widGl0bGVcIiwgY2F0ZWdvcnldLFxuICAgICAgICBlbnRyeSxcbiAgICAgICAgVGV4dENvbnRlbnRbY2F0ZWdvcnldW2tleV0ubmFtZVxuICAgICAgKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBbXCJkZXNjcmlwdGlvblwiLCBjYXRlZ29yeV0sXG4gICAgICAgIGVudHJ5LFxuICAgICAgICBUZXh0Q29udGVudFtjYXRlZ29yeV1ba2V5XS5kZXNjcmlwdGlvblxuICAgICAgKTtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBbXCJwcmljZVwiLCBjYXRlZ29yeV0sXG4gICAgICAgIGVudHJ5LFxuICAgICAgICBUZXh0Q29udGVudFtjYXRlZ29yeV1ba2V5XS5wcmljZVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZW50cnlcIiwgXCJzcGFjZXJcIl0sIHdyYXBwZXIpO1xuXG4gIGNvbnN0IGJnSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJiYWNrZ3JvdW5kXCJdLCB3cmFwcGVyKTtcbiAgYmdJbWcuc3JjID0gQmFja2dyb3VuZEltYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51RGl2KCkge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJtZW51XCJdKTtcblxuICBjcmVhdGVNZW51KFwiYXBwZXRpemVyc1wiLCBlbGVtZW50KTtcbiAgY3JlYXRlTWVudShcImVudHJlZXNcIiwgZWxlbWVudCk7XG4gIGNyZWF0ZU1lbnUoXCJiZXZlcmFnZXNcIiwgZWxlbWVudCk7XG4gIGNyZWF0ZU1lbnUoXCJkZXNzZXJ0c1wiLCBlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCBIb21lVGFiIGZyb20gXCIuLi9ob21lVGFiL2hvbWVUYWJcIjtcbmltcG9ydCBNZW51VGFiIGZyb20gXCIuLi9tZW51VGFiL21lbnVUYWJcIjtcbmltcG9ydCBDb250YWN0VGFiIGZyb20gXCIuLi9jb250YWN0VGFiL2NvbnRhY3RUYWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2Q29udHJvbGxlcigpIHtcbiAgY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2IC50YWJcIik7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGxldCBnZW5lcmF0ZWREaXY7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ29udGVudCgpIHtcbiAgICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoVGFiKHRhYikge1xuICAgIGlmICh0YWIgPT09IFwiaG9tZVwiKSB7XG4gICAgICBnZW5lcmF0ZWREaXYgPSBIb21lVGFiKCk7XG4gICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlZERpdik7XG4gICAgfVxuICAgIGlmICh0YWIgPT09IFwibWVudVwiKSB7XG4gICAgICBnZW5lcmF0ZWREaXYgPSBNZW51VGFiKCk7XG4gICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlZERpdik7XG4gICAgfVxuICAgIGlmICh0YWIgPT09IFwiY29udGFjdFwiKSB7XG4gICAgICBnZW5lcmF0ZWREaXYgPSBDb250YWN0VGFiKCk7XG4gICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGdlbmVyYXRlZERpdik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzd2l0Y2hUYWIoXCJob21lXCIpO1xuICB9XG5cbiAgbmF2VGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gQXJyYXkuZnJvbSh0YWIuY2xhc3NMaXN0KTtcbiAgICBjb25zdCBhY3RpdmVDbGFzcyA9IGNsYXNzZXMuZmluZCgoY2xhc3NOYW1lKSA9PiBjbGFzc05hbWUgIT09IFwidGFiXCIpO1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3dpdGNoVGFiKGFjdGl2ZUNsYXNzKSk7XG4gIH0pO1xuXG4gIHJldHVybiB7IGluaXQgfTtcbn1cbiIsImltcG9ydCBIZWFkZXJJbWFnZSBmcm9tIFwiLi4vaGVhZGVyL2xhbmRzY2FwZVBhcmNobWVudC5zdmdcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbiBmcm9tIFwiLi4vZm9vdGVyL2F0dHJpYnV0aW9uLmpzb25cIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvcHVycGxlTGF0dGljZS5qcGdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUsIGNsYXNzZXMsIHBhcmVudCwgdGV4dENvbnRlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsRWxlbWVudHMoKSB7XG4gIC8vIENyZWF0ZSBDb250YWluZXIgRWxlbWVudHNcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWluZXJcIl0sIGRvY3VtZW50LmJvZHkpO1xuICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0JhY2tncm91bmR9KWA7XG5cbiAgLy8gQ3JlYXRlIEhlYWRlciBFbGVtZW50cyB3LyBDbGFzc2VzXG4gIGNvbnN0IGhlYWRlckRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaGVhZGVyXCJdLCBjb250YWluZXJEaXYpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0aXRsZVwiXSwgaGVhZGVyRGl2LCBcIlRoZSBMZWdlcmRlbWFpbiBMb3VuZ2VcIik7XG4gIGNvbnN0IGhlYWRlckJnSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFtcImJhY2tncm91bmRcIl0sIGhlYWRlckRpdik7XG4gIGhlYWRlckJnSW1hZ2Uuc3JjID0gSGVhZGVySW1hZ2U7XG5cbiAgLy8gQ3JlYXRlIE5hdiBFbGVtZW50cyB3LyBDbGFzc2VzXG4gIGNvbnN0IG5hdkRpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibmF2XCJdLCBjb250YWluZXJEaXYpO1xuICBjb25zdCBuYXZUYWJUcmF5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YWItdHJheVwiXSwgbmF2RGl2KTtcbiAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFiXCIsIFwiaG9tZVwiXSwgbmF2VGFiVHJheSk7XG4gIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdLCBob21lVGFiLCBcIkhvbWVcIik7XG4gIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhYlwiLCBcIm1lbnVcIl0sIG5hdlRhYlRyYXkpO1xuICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXSwgbWVudVRhYiwgXCJNZW51XCIpO1xuICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YWJcIiwgXCJjb250YWN0XCJdLCBuYXZUYWJUcmF5KTtcbiAgY3JlYXRlRWxlbWVudChcInBcIiwgW10sIGNvbnRhY3RUYWIsIFwiQ29udGFjdFwiKTtcblxuICAvLyBDcmVhdGUgQ29udGVudCBFbGVtZW50c1xuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNvbnRlbnRcIl0sIGNvbnRhaW5lckRpdik7XG5cbiAgLy8gQ3JlYXRlIEZvb3RlciBFbGVtZW50c1xuICBjb25zdCBmb290ZXJEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImZvb3RlclwiXSwgY29udGFpbmVyRGl2KTtcbiAgY29uc3QgYXV0aG9yUCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcImF1dGhvclwiXSwgZm9vdGVyRGl2KTtcbiAgYXV0aG9yUC5pbm5lckhUTUwgPVxuICAgIFwiQ3JlYXRlZCBieSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20veGluY3J5cHRlZHgnPnhJbmNyeXB0ZWR4PC9hPlwiO1xuICBBdHRyaWJ1dGlvbi5lbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgY29uc3QgZW50cnlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1wiYXR0cmlidXRpb25cIl0sIGZvb3RlckRpdik7XG4gICAgZW50cnlFbGVtZW50LmlubmVySFRNTCA9IGVudHJ5O1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEluaXRpYWxpemVFbGVtZW50cyBmcm9tIFwiLi9zY3JpcHRzL2luaXRpYWxpemVFbGVtZW50c1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvbmF2XCI7XG5cbkluaXRpYWxpemVFbGVtZW50cygpO1xuTmF2KCk7XG5OYXYoKS5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=