/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  font-size: inherit;\n  font-family: inherit;\n  border: none;\n  border-radius: 400px;\n  height: 2rem;\n  padding: 0 1rem;\n  background: #14213d;\n}\n\n::-webkit-scrollbar-thumb {\n  font-size: inherit;\n  font-family: inherit;\n  border: none;\n  border-radius: 400px;\n  height: 2rem;\n  padding: 0 1rem;\n  background-color: #fca311;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #fdb643;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n*:focus {\n  outline: 3px dotted #fca311;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 100vh;\n  justify-content: space-between;\n  background-color: black;\n  color: white;\n  overflow: hidden;\n  font-size: 1rem;\n}\n\nheader,\nmain,\nfooter {\n  display: flex;\n  flex-direction: row;\n  padding: 0 1rem;\n}\n\nheader {\n  align-items: center;\n  background-color: #14213d;\n  color: #e5e5e5;\n  height: 10vh;\n}\n\nmain {\n  flex-direction: column;\n}\nmain section {\n  display: flex;\n  flex-direction: row;\n}\nmain section.list-container {\n  border-radius: 0.5rem;\n  border: 3px solid #fca311;\n  padding: 0 1rem;\n  margin-bottom: 0.5rem;\n  height: 10vh;\n  align-items: center;\n  overflow-x: auto;\n  overflow-y: hidden;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n}\nmain section.list-container::-webkit-scrollbar {\n  height: 4px;\n}\nmain section.list-container h2 {\n  font-size: 2rem;\n}\nmain section.inputs {\n  display: flex;\n  flex-direction: row;\n  max-height: 70vh;\n  flex-wrap: wrap;\n  height: 70vh;\n  width: calc(100vw - 2rem);\n  overflow-x: hidden;\n  overflow-y: auto;\n  gap: 0.5rem;\n}\nmain section form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 10vh;\n  min-width: 200px;\n}\nmain section form fieldset {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  border: 3px solid #fca311;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #14213d;\n  gap: 0.5rem;\n}\nmain section form fieldset label,\nmain section form fieldset .label {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\nmain section form fieldset input {\n  font-size: inherit;\n  font-family: inherit;\n  border: none;\n  border-radius: 400px;\n  height: 2rem;\n  padding: 0 1rem;\n  max-width: 200px;\n  background-color: #e5e5e5;\n  outline: none;\n}\nmain section form fieldset input[type=submit] {\n  background-color: black;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n}\nmain section form fieldset p {\n  height: 2rem;\n  line-height: 2rem;\n  font-size: inherit;\n  font-family: inherit;\n  border: none;\n  border-radius: 400px;\n  height: 2rem;\n  padding: 0 1rem;\n  color: black;\n  background-color: #e5e5e5;\n  border: 1px solid #fca311;\n}\nmain section form fieldset p:empty {\n  background-color: #14213d;\n  border: none;\n}\n\nfooter {\n  align-items: center;\n  justify-content: space-between;\n  height: 10vh;\n}\nfooter button {\n  font-size: inherit;\n  font-family: inherit;\n  border: none;\n  border-radius: 400px;\n  height: 2rem;\n  padding: 0 1rem;\n  cursor: pointer;\n  background-color: #14213d;\n  color: #e5e5e5;\n  padding: 0 2rem;\n  text-align: center;\n  font-weight: 600;\n}\n\ndialog[open] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #14213d;\n  color: #e5e5e5;\n  height: 90%;\n  width: 90%;\n}\ndialog[open] a {\n  color: inherit;\n}\ndialog[open] form {\n  width: 100%;\n}\ndialog[open] form input {\n  font-size: inherit;\n  font-family: inherit;\n  border: none;\n  border-radius: 400px;\n  height: 2rem;\n  padding: 0 1rem;\n  background-color: #fca311;\n  margin: 1rem auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://linked-list/./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://linked-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://linked-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://linked-list/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://linked-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://linked-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://linked-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://linked-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://linked-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://linked-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/LinkedList.ts":
/*!***************************!*\
  !*** ./src/LinkedList.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ListNode_1 = __importDefault(__webpack_require__(/*! ./ListNode */ \"./src/ListNode.ts\"));\nclass LinkedList {\n    constructor() {\n        this.headNode = null;\n    }\n    append(value) {\n        // method creates a new ListNode and adds it to the end of the list\n        const newNode = new ListNode_1.default(value);\n        this.headNode === null\n            ? (this.headNode = newNode)\n            : (this.tail().nextNode = newNode);\n    }\n    prepend(value) {\n        // method creates a new ListNode and adds it to the front of the list, making it the new HeadNode\n        const newNode = new ListNode_1.default(value);\n        newNode.nextNode = this.headNode;\n        this.headNode = newNode;\n    }\n    size() {\n        // method counts the number of elements in the list and returns it as a number\n        let currentNode = this.headNode;\n        let count = 0;\n        while (currentNode !== null) {\n            count++;\n            currentNode = currentNode.nextNode;\n        }\n        return count;\n    }\n    head() {\n        // method returns the headNode (which may be null)\n        return this.headNode;\n    }\n    tail() {\n        // method returns the last ListNode (which may be the headNode, which may be null)\n        let currentNode = this.headNode;\n        let tailNode = this.headNode;\n        while (currentNode !== null) {\n            tailNode = currentNode;\n            currentNode = currentNode.nextNode;\n        }\n        return tailNode;\n    }\n    at(index) {\n        // method returns the node at the supplied index\n        let nodeIndex = 0;\n        let currentNode = this.headNode;\n        while (nodeIndex !== index && currentNode !== null) {\n            nodeIndex++;\n            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode;\n        }\n        return currentNode;\n    }\n    pop() {\n        // method removes the last ListNode from the list\n        this.size() === 0 ? null : this.removeAt(this.size() - 1);\n    }\n    contains(value) {\n        // method returns true if the supplied value matches the value property of a ListNode object in the list, otherwise it returns false\n        let currentNode = this.headNode;\n        while (currentNode !== null) {\n            if (currentNode.value === value)\n                return true;\n            currentNode = currentNode.nextNode;\n        }\n        return false;\n    }\n    find(value) {\n        // method returns the index of the ListNode that's value property matches the supplied value, if the supplied value is not in the list it returns null\n        let currentNode = this.headNode;\n        let index = 0;\n        while (currentNode !== null) {\n            if (currentNode.value === value)\n                return index;\n            index++;\n            currentNode = currentNode.nextNode;\n        }\n        return null;\n    }\n    toString() {\n        // methof returns a string which contains the values of each ListNode object in order in parentheses with an arrow --> between them\n        let currentNode = this.headNode;\n        let result = \"\";\n        while (currentNode !== null) {\n            result += `(${currentNode === null || currentNode === void 0 ? void 0 : currentNode.value.toString()}) --> `;\n            currentNode = currentNode.nextNode;\n        }\n        return result.substring(0, result.length - 5);\n    }\n    insertAt(value, index) {\n        // method inserts a new ListNode with the supplied value at the supplied index\n        if (index >= this.size()) {\n            this.append(value);\n            return;\n        }\n        const newNode = new ListNode_1.default(value);\n        let lastNode = null;\n        let currentNode = this.headNode;\n        for (let i = 0; i <= index; i++) {\n            if (i === index) {\n                newNode.nextNode = currentNode;\n                i === 0 ? (this.headNode = newNode) : (lastNode.nextNode = newNode);\n                return;\n            }\n            lastNode = currentNode;\n            currentNode = currentNode.nextNode;\n        }\n    }\n    removeAt(index) {\n        // method removes the LisNode at the supplied index\n        if (index >= this.size()) {\n            return;\n        }\n        let currentNode = this.headNode;\n        let lastNode = null;\n        for (let i = 0; i < this.size(); i++) {\n            if (index === i) {\n                if (lastNode === null) {\n                    this.headNode = this.headNode.nextNode;\n                }\n                else {\n                    lastNode.nextNode = currentNode.nextNode;\n                }\n            }\n            lastNode = currentNode;\n            currentNode = currentNode.nextNode;\n        }\n    }\n}\nexports[\"default\"] = LinkedList;\n\n\n//# sourceURL=webpack://linked-list/./src/LinkedList.ts?");

/***/ }),

/***/ "./src/ListNode.ts":
/*!*************************!*\
  !*** ./src/ListNode.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass ListNode {\n    constructor(value) {\n        this.value = null;\n        this.nextNode = null;\n        this.value = value;\n        this.nextNode;\n    }\n    toString() {\n        // method returns the value of the listNode as a string\n        return this.value.toString();\n    }\n}\nexports[\"default\"] = ListNode;\n\n\n//# sourceURL=webpack://linked-list/./src/ListNode.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\nconst LinkedList_1 = __importDefault(__webpack_require__(/*! ./LinkedList */ \"./src/LinkedList.ts\"));\n// create instance of LinkedList to display\nconst list = new LinkedList_1.default();\n// get dom elements\nconst listDisplay = document.getElementById(\"list-display\");\nconst appendForm = document.getElementById(\"append-form\");\nconst prependForm = document.getElementById(\"prepend-form\");\nconst sizeForm = document.getElementById(\"size-form\");\nconst sizeDisplay = document.getElementById(\"size-display\");\nconst headForm = document.getElementById(\"head-form\");\nconst headDisplay = document.getElementById(\"head-display\");\nconst tailForm = document.getElementById(\"tail-form\");\nconst tailDisplay = document.getElementById(\"tail-display\");\nconst atForm = document.getElementById(\"at-form\");\nconst atDisplay = document.getElementById(\"at-display\");\nconst popForm = document.getElementById(\"pop-form\");\nconst containsForm = document.getElementById(\"contains-form\");\nconst containsDisplay = document.getElementById(\"contains-display\");\nconst findForm = document.getElementById(\"find-form\");\nconst findDisplay = document.getElementById(\"find-display\");\nconst insertForm = document.getElementById(\"insert-form\");\nconst removeForm = document.getElementById(\"remove-form\");\nconst aboutButton = document.getElementsByTagName(\"button\")[0];\nconst aboutDialog = document.getElementsByTagName(\"dialog\")[0];\n// apply form event listeners\nappendForm === null || appendForm === void 0 ? void 0 : appendForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const appendInput = appendForm[\"append\"];\n    list.append(appendInput.value);\n    listDisplay.innerText = list.toString();\n    appendInput.value = \"\";\n});\nprependForm === null || prependForm === void 0 ? void 0 : prependForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const prependInput = prependForm[\"prepend\"];\n    list.prepend(prependInput.value);\n    listDisplay.innerText = list.toString();\n    prependInput.value = \"\";\n});\nsizeForm === null || sizeForm === void 0 ? void 0 : sizeForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    sizeDisplay.textContent = list.size().toString();\n});\nheadForm === null || headForm === void 0 ? void 0 : headForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    headDisplay.textContent =\n        list.head() !== null ? list.head().toString() : \"null\";\n});\ntailForm === null || tailForm === void 0 ? void 0 : tailForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    tailDisplay.textContent =\n        list.tail() !== null ? list.tail().toString() : \"null\";\n});\natForm === null || atForm === void 0 ? void 0 : atForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const atInput = atForm[\"at\"];\n    atDisplay.textContent =\n        list.at(parseInt(atInput.value)) !== null\n            ? list.at(parseInt(atInput.value)).toString()\n            : \"null\";\n    atInput.value = \"\";\n});\npopForm === null || popForm === void 0 ? void 0 : popForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    list.pop();\n    listDisplay.innerText = list.toString();\n});\ncontainsForm === null || containsForm === void 0 ? void 0 : containsForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const containsInput = containsForm[\"contains\"];\n    containsDisplay.textContent = list.contains(containsInput.value).toString();\n    containsInput.value = \"\";\n});\nfindForm === null || findForm === void 0 ? void 0 : findForm.addEventListener(\"submit\", (event) => {\n    var _a;\n    event.preventDefault();\n    const findInput = findForm[\"find\"];\n    findDisplay.textContent =\n        list.find(findInput.value) !== null\n            ? (_a = list.find(findInput.value)) === null || _a === void 0 ? void 0 : _a.toString()\n            : \"null\";\n    findInput.value = \"\";\n});\ninsertForm === null || insertForm === void 0 ? void 0 : insertForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const insertInput = insertForm[\"insert\"];\n    const atInput = insertForm[\"insert-at\"];\n    list.insertAt(insertInput.value, parseInt(atInput.value));\n    listDisplay.innerText = list.toString();\n    insertInput.value = \"\";\n    atInput.value = \"\";\n});\nremoveForm === null || removeForm === void 0 ? void 0 : removeForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const removeInput = removeForm[\"remove\"];\n    list.removeAt(parseInt(removeInput.value));\n    listDisplay.textContent = list.toString();\n    removeInput.value = \"\";\n});\naboutButton.addEventListener(\"click\", () => aboutDialog.showModal());\n\n\n//# sourceURL=webpack://linked-list/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;