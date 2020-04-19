/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style/burger-menu.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/burger-menu.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".burger-icon {\\r\\n    width: 40px;\\r\\n    height: 32px;\\r\\n    box-sizing: border-box;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n    position: relative;\\r\\n    z-index: 5;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.burger-icon__line {\\r\\n    width: 33px;\\r\\n    height: 4px;\\r\\n    background-color: white;\\r\\n    border-radius: 3px;\\r\\n    transition: .5s;\\r\\n}\\r\\n\\r\\n.burger-icon-rotate .burger-icon__line:nth-of-type(1) {\\r\\n    transform: rotate(45deg) translate(4px, 10px);\\r\\n}\\r\\n\\r\\n.burger-icon-rotate .burger-icon__line:nth-of-type(2) {\\r\\n    transition: .4s;\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n.burger-icon-rotate .burger-icon__line:nth-of-type(3) {\\r\\n    transform: rotate(-45deg) translate(6px, -11px);\\r\\n}\\r\\n\\r\\n.burger-menu__window {\\r\\n    position: fixed;\\r\\n    width: 320px;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(270deg, rgb(0, 157, 255) 0%, rgb(93, 159, 255) 50%, rgb(48, 223, 255) 100%);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: start;\\r\\n    z-index: 3;\\r\\n    top: 0;\\r\\n    left: -320px;\\r\\n    transition: .5s;\\r\\n    padding-top: 75px;\\r\\n}\\r\\n\\r\\n.burger-menu__window-active {\\r\\n    left: 0px;\\r\\n    box-shadow: 0 5px 75px 0 rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n.burger-menu__link {\\r\\n    text-decoration: none;\\r\\n    font-size: 22px;\\r\\n    color: white;\\r\\n    padding: 7px 26px;\\r\\n    border-radius: 50px;\\r\\n    background-color: cornflowerblue;\\r\\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .4);\\r\\n    margin: 9px 0 9px 25px;\\r\\n}\\r\\n\\r\\n.burger-menu__stats {\\r\\n    background-color: mediumpurple;\\r\\n}\\r\\n\\r\\n.burger-menu__link:hover {\\r\\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .6);\\r\\n}\\r\\n\\r\\n.burger-menu__link-active {\\r\\n    color: #00ffbd;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n    .burger-menu__window {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        grid-template-rows: min-content min-content min-content min-content min-content;\\r\\n        row-gap: 33px;\\r\\n    }\\r\\n\\r\\n    .burger-menu__link {\\r\\n        margin: 0 9px;\\r\\n        padding: 0;\\r\\n        font-size: 18px;\\r\\n        text-align: center;\\r\\n        height: 35px;\\r\\n    }\\r\\n\\r\\n    .burger-icon {\\r\\n        left: 20px;\\r\\n        position: fixed;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/burger-menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/header.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/header.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".header {\\r\\n    height: 75px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding: 0 20px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n    .header {\\r\\n        justify-content: flex-end;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/main.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/main.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    font-family: cursive, Helvetica, Arial, sans-serif;\\r\\n    overflow-x: hidden;\\r\\n    position: relative;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    background: rgb(64, 164, 242);\\r\\n    background: linear-gradient(90deg, rgba(64, 164, 242, 1) 0%, rgba(56, 206, 233, 1) 25%, rgba(0, 255, 195, 1) 100%);\\r\\n}\\r\\n\\r\\n.body-playmode {\\r\\n    background: rgb(34, 193, 195);\\r\\n    background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);\\r\\n}\\r\\n\\r\\n\\r\\n.english__categories-container {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n    gap: 20px;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.categorie {\\r\\n    width: auto;\\r\\n    height: auto;\\r\\n    text-align: center;\\r\\n    position: relative;\\r\\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .4);\\r\\n    transition: .3s;\\r\\n}\\r\\n\\r\\n.categorie:hover {\\r\\n    box-shadow: 0 10px 20px rgba(0, 0, 0, .6);\\r\\n}\\r\\n\\r\\n.categorie__image {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.categorie__link {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.categorie__text {\\r\\n    background-color: white;\\r\\n    margin: 0;\\r\\n    padding: 16px 0;\\r\\n    font-size: 27px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    font-size: 40px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1330px) {\\r\\n    .english__categories-container {\\r\\n        grid-template-columns: 1fr 1fr 1fr;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1023px) {\\r\\n    .english__categories-container {\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n    .english__categories-container {\\r\\n        grid-template-columns: 1fr;\\r\\n    }\\r\\n    .logo {\\r\\n        font-size: 25px;\\r\\n        width: 109px;\\r\\n    }\\r\\n    \\r\\n\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/train-play-toggle.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/train-play-toggle.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".toggle {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    width: 120px;\\r\\n    min-width: 120px;\\r\\n    height: 47px;\\r\\n    background-color: #40a5f2;\\r\\n    border-radius: 5px;\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 50px;\\r\\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .4);\\r\\n    transition: .3s;\\r\\n}\\r\\n\\r\\n.toggle:hover {\\r\\n    box-shadow: 0 5px 5px rgba(0,0,0,.6);\\r\\n}\\r\\n\\r\\n.toggle-active {\\r\\n    background-color: orange;\\r\\n}\\r\\n\\r\\n.toggle__button {\\r\\n    width: 38px;\\r\\n    height: 38px;\\r\\n    background: rgb(255, 255, 255);\\r\\n    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(223, 223, 223, 1) 100%);\\r\\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .4);\\r\\n    border-radius: 5px;\\r\\n    margin: auto 3px;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    left: 2px;\\r\\n    transition: .3s;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.toggle__text {\\r\\n    font-size: 18px;\\r\\n    margin: 0 11px;\\r\\n    position: absolute;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.toggle__text-train {\\r\\n    right: 3px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n    display: block;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/train-play-toggle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/burgerMenu.js":
/*!***************************!*\
  !*** ./src/burgerMenu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BurgerMenu; });\n/* harmony import */ var _style_burger_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/burger-menu.css */ \"./style/burger-menu.css\");\n/* harmony import */ var _style_burger_menu_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_burger_menu_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BurgerMenu = /*#__PURE__*/function () {\n  function BurgerMenu(categoriesArray) {\n    _classCallCheck(this, BurgerMenu);\n\n    this.categories = categoriesArray;\n    this.burgerIcon = null;\n    this.burgerWindow = null;\n    this.links = [];\n  }\n\n  _createClass(BurgerMenu, [{\n    key: \"createBurgerIcon\",\n    value: function createBurgerIcon() {\n      var _this = this;\n\n      this.burgerIcon = document.createElement('div');\n      this.burgerIcon.classList.add('burger-menu__icon', 'burger-icon', 'burger-menu-element');\n      var line = document.createElement('div');\n      line.classList.add('burger-icon__line', 'burger-menu-element');\n      this.burgerIcon.append(line);\n      var cloneLine1 = line.cloneNode();\n      this.burgerIcon.append(cloneLine1);\n      var cloneLine2 = line.cloneNode();\n      this.burgerIcon.append(cloneLine2);\n      this.burgerIcon.addEventListener('click', function (event) {\n        event.currentTarget.classList.toggle('burger-icon-rotate');\n\n        _this.burgerWindow.classList.toggle('burger-menu__window-active');\n      });\n      return this.burgerIcon;\n    }\n  }, {\n    key: \"createBurgerWindow\",\n    value: function createBurgerWindow() {\n      var _this2 = this;\n\n      this.burgerWindow = document.createElement('div');\n      this.burgerWindow.classList.add('burger-menu__window', 'burger-menu-element');\n      var mainPageLink = document.createElement('a');\n      mainPageLink.classList.add('burger-menu__link');\n      mainPageLink.setAttribute('href', './index.html');\n      mainPageLink.setAttribute('data-link', 'Main Page');\n      mainPageLink.innerHTML = 'Main Page';\n      this.links.push(mainPageLink);\n      this.burgerWindow.append(mainPageLink);\n      this.categories.forEach(function (element) {\n        var pageLink = document.createElement('a');\n        pageLink.classList.add('burger-menu__link', 'link-categorie');\n        pageLink.setAttribute('href', './cards.html');\n        pageLink.setAttribute('data-link', element);\n        pageLink.innerHTML = element;\n\n        _this2.links.push(pageLink);\n\n        _this2.burgerWindow.append(pageLink);\n      });\n      var stats = document.createElement('a');\n      stats.classList.add('burger-menu__link', 'burger-menu__stats');\n      stats.setAttribute('href', './stats.html');\n      stats.setAttribute('data-link', 'Statistics');\n      stats.innerHTML = 'Statistics';\n      this.links.push(stats);\n      this.burgerWindow.append(stats);\n      this.burgerWindow.addEventListener('click', function (event) {\n        if (event.target.classList.contains('link-categorie')) {\n          localStorage.lastClick = event.target.getAttribute('data-link');\n        }\n      });\n      this.links.forEach(function (element) {\n        if (element.matches(\"[data-link = \\\"\".concat(localStorage.lastClick, \"\\\"]\"))) {\n          element.classList.add('burger-menu__link-active');\n        }\n      });\n      document.body.addEventListener('click', function (event) {\n        if (!event.target.matches('.burger-menu-element')) {\n          _this2.burgerIcon.classList.remove('burger-icon-rotate');\n\n          _this2.burgerWindow.classList.remove('burger-menu__window-active');\n        }\n      });\n      return this.burgerWindow;\n    }\n  }]);\n\n  return BurgerMenu;\n}();\n\n\n\n//# sourceURL=webpack:///./src/burgerMenu.js?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Professions', 'Fruits'], [[{\n  word: 'cry',\n  translation: 'плакать',\n  image: 'img/cry.jpg',\n  audioSrc: 'audio/cry.mp3'\n}, {\n  word: 'dance',\n  translation: 'танцевать',\n  image: 'img/dance.jpg',\n  audioSrc: 'audio/dance.mp3'\n}, {\n  word: 'dive',\n  translation: 'нырять',\n  image: 'img/dive.jpg',\n  audioSrc: 'audio/dive.mp3'\n}, {\n  word: 'draw',\n  translation: 'рисовать',\n  image: 'img/draw.jpg',\n  audioSrc: 'audio/draw.mp3'\n}, {\n  word: 'fish',\n  translation: 'ловить рыбу',\n  image: 'img/fish.jpg',\n  audioSrc: 'audio/fish.mp3'\n}, {\n  word: 'fly',\n  translation: 'летать',\n  image: 'img/fly.jpg',\n  audioSrc: 'audio/fly.mp3'\n}, {\n  word: 'hug',\n  translation: 'обнимать',\n  image: 'img/hug.jpg',\n  audioSrc: 'audio/hug.mp3'\n}, {\n  word: 'jump',\n  translation: 'прыгать',\n  image: 'img/jump.jpg',\n  audioSrc: 'audio/jump.mp3'\n}], [{\n  word: 'open',\n  translation: 'открывать',\n  image: 'img/open.jpg',\n  audioSrc: 'audio/open.mp3'\n}, {\n  word: 'play',\n  translation: 'играть',\n  image: 'img/play.jpg',\n  audioSrc: 'audio/play.mp3'\n}, {\n  word: 'point',\n  translation: 'указывать',\n  image: 'img/point.jpg',\n  audioSrc: 'audio/point.mp3'\n}, {\n  word: 'ride',\n  translation: 'ездить',\n  image: 'img/ride.jpg',\n  audioSrc: 'audio/ride.mp3'\n}, {\n  word: 'run',\n  translation: 'бегать',\n  image: 'img/run.jpg',\n  audioSrc: 'audio/run.mp3'\n}, {\n  word: 'sing',\n  translation: 'петь',\n  image: 'img/sing.jpg',\n  audioSrc: 'audio/sing.mp3'\n}, {\n  word: 'jump',\n  translation: 'прыгать',\n  image: 'img/skip.jpg',\n  audioSrc: 'audio/skip.mp3'\n}, {\n  word: 'swim',\n  translation: 'плавать',\n  image: 'img/swim.jpg',\n  audioSrc: 'audio/swim.mp3'\n}], [{\n  word: 'cat',\n  translation: 'кот',\n  image: 'img/cat.jpg',\n  audioSrc: 'audio/cat.mp3'\n}, {\n  word: 'chick',\n  translation: 'цыплёнок',\n  image: 'img/chick.jpg',\n  audioSrc: 'audio/chick.mp3'\n}, {\n  word: 'chicken',\n  translation: 'курица',\n  image: 'img/chicken.jpg',\n  audioSrc: 'audio/chicken.mp3'\n}, {\n  word: 'dog',\n  translation: 'собака',\n  image: 'img/dog.jpg',\n  audioSrc: 'audio/dog.mp3'\n}, {\n  word: 'horse',\n  translation: 'лошадь',\n  image: 'img/horse.jpg',\n  audioSrc: 'audio/horse.mp3'\n}, {\n  word: 'pig',\n  translation: 'свинья',\n  image: 'img/pig.jpg',\n  audioSrc: 'audio/pig.mp3'\n}, {\n  word: 'rabbit',\n  translation: 'кролик',\n  image: 'img/rabbit.jpg',\n  audioSrc: 'audio/rabbit.mp3'\n}, {\n  word: 'sheep',\n  translation: 'овца',\n  image: 'img/sheep.jpg',\n  audioSrc: 'audio/sheep.mp3'\n}], [{\n  word: 'bird',\n  translation: 'птица',\n  image: 'img/bird.jpg',\n  audioSrc: 'audio/bird.mp3'\n}, {\n  word: 'fish',\n  translation: 'рыба',\n  image: 'img/fish1.jpg',\n  audioSrc: 'audio/fish.mp3'\n}, {\n  word: 'frog',\n  translation: 'жаба',\n  image: 'img/frog.jpg',\n  audioSrc: 'audio/frog.mp3'\n}, {\n  word: 'giraffe',\n  translation: 'жирафа',\n  image: 'img/giraffe.jpg',\n  audioSrc: 'audio/giraffe.mp3'\n}, {\n  word: 'lion',\n  translation: 'лев',\n  image: 'img/lion.jpg',\n  audioSrc: 'audio/lion.mp3'\n}, {\n  word: 'mouse',\n  translation: 'мышь',\n  image: 'img/mouse.jpg',\n  audioSrc: 'audio/mouse.mp3'\n}, {\n  word: 'turtle',\n  translation: 'черепаха',\n  image: 'img/turtle.jpg',\n  audioSrc: 'audio/turtle.mp3'\n}, {\n  word: 'dolphin',\n  translation: 'дельфин',\n  image: 'img/dolphin.jpg',\n  audioSrc: 'audio/dolphin.mp3'\n}], [{\n  word: 'skirt',\n  translation: 'юбка',\n  image: 'img/skirt.jpg',\n  audioSrc: 'audio/skirt.mp3'\n}, {\n  word: 'pants',\n  translation: 'брюки',\n  image: 'img/pants.jpg',\n  audioSrc: 'audio/pants.mp3'\n}, {\n  word: 'blouse',\n  translation: 'блузка',\n  image: 'img/blouse.jpg',\n  audioSrc: 'audio/blouse.mp3'\n}, {\n  word: 'dress',\n  translation: 'платье',\n  image: 'img/dress.jpg',\n  audioSrc: 'audio/dress.mp3'\n}, {\n  word: 'boot',\n  translation: 'ботинок',\n  image: 'img/boot.jpg',\n  audioSrc: 'audio/boot.mp3'\n}, {\n  word: 'shirt',\n  translation: 'рубашка',\n  image: 'img/shirt.jpg',\n  audioSrc: 'audio/shirt.mp3'\n}, {\n  word: 'coat',\n  translation: 'пальто',\n  image: 'img/coat.jpg',\n  audioSrc: 'audio/coat.mp3'\n}, {\n  word: 'shoe',\n  translation: 'туфли',\n  image: 'img/shoe.jpg',\n  audioSrc: 'audio/shoe.mp3'\n}], [{\n  word: 'sad',\n  translation: 'грустный',\n  image: 'img/sad.jpg',\n  audioSrc: 'audio/sad.mp3'\n}, {\n  word: 'angry',\n  translation: 'сердитый',\n  image: 'img/angry.jpg',\n  audioSrc: 'audio/angry.mp3'\n}, {\n  word: 'happy',\n  translation: 'счастливый',\n  image: 'img/happy.jpg',\n  audioSrc: 'audio/happy.mp3'\n}, {\n  word: 'tired',\n  translation: 'уставший',\n  image: 'img/tired.jpg',\n  audioSrc: 'audio/tired.mp3'\n}, {\n  word: 'surprised',\n  translation: 'удивлённый',\n  image: 'img/surprised.jpg',\n  audioSrc: 'audio/surprised.mp3'\n}, {\n  word: 'scared',\n  translation: 'испуганный',\n  image: 'img/scared.jpg',\n  audioSrc: 'audio/scared.mp3'\n}, {\n  word: 'smile',\n  translation: 'улыбка',\n  image: 'img/smile.jpg',\n  audioSrc: 'audio/smile.mp3'\n}, {\n  word: 'laugh',\n  translation: 'смех',\n  image: 'img/laugh.jpg',\n  audioSrc: 'audio/laugh.mp3'\n}], [{\n  word: 'bodyguard',\n  translation: 'телохранитель',\n  image: 'img/bodyguard.jpg',\n  audioSrc: 'audio/bodyguard.mp3'\n}, {\n  word: 'cook',\n  translation: 'повар',\n  image: 'img/cook.jpg',\n  audioSrc: 'audio/cook.mp3'\n}, {\n  word: 'doctor',\n  translation: 'врач',\n  image: 'img/doctor.jpg',\n  audioSrc: 'audio/doctor.mp3'\n}, {\n  word: 'lawyer',\n  translation: 'адвокат',\n  image: 'img/lawyer.jpg',\n  audioSrc: 'audio/lawyer.mp3'\n}, {\n  word: 'taxi driver',\n  translation: 'водитель такси',\n  image: 'img/taxi driver.jpg',\n  audioSrc: 'audio/taxi driver.mp3'\n}, {\n  word: 'teacher',\n  translation: 'учитель',\n  image: 'img/teacher.jpg',\n  audioSrc: 'audio/teacher.mp3'\n}, {\n  word: 'vet',\n  translation: 'ветеринар',\n  image: 'img/vet.jpg',\n  audioSrc: 'audio/vet.mp3'\n}, {\n  word: 'waiter',\n  translation: 'официант',\n  image: 'img/waiter.jpg',\n  audioSrc: 'audio/waiter.mp3'\n}], [{\n  word: 'apple',\n  translation: 'яблоко',\n  image: 'img/apple.jpg',\n  audioSrc: 'audio/apple.mp3'\n}, {\n  word: 'banana',\n  translation: 'банан',\n  image: 'img/banana.jpg',\n  audioSrc: 'audio/banana.mp3'\n}, {\n  word: 'grape',\n  translation: 'виноград',\n  image: 'img/grape.jpg',\n  audioSrc: 'audio/grape.mp3'\n}, {\n  word: 'kiwi',\n  translation: 'киви',\n  image: 'img/kiwi.jpg',\n  audioSrc: 'audio/kiwi.mp3'\n}, {\n  word: 'peach',\n  translation: 'персик',\n  image: 'img/peach.jpg',\n  audioSrc: 'audio/peach.mp3'\n}, {\n  word: 'pear',\n  translation: 'груша',\n  image: 'img/pear.jpg',\n  audioSrc: 'audio/pear.mp3'\n}, {\n  word: 'pineapple',\n  translation: 'ананас',\n  image: 'img/pineapple.jpg',\n  audioSrc: 'audio/pineapple.mp3'\n}, {\n  word: 'plum',\n  translation: 'слива',\n  image: 'img/plum.jpg',\n  audioSrc: 'audio/plum.mp3'\n}]]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n//# sourceURL=webpack:///./src/cards.js?");

/***/ }),

/***/ "./src/categorie.js":
/*!**************************!*\
  !*** ./src/categorie.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createCategorie; });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n\nfunction createCategorie() {\n  var fragment = document.createDocumentFragment();\n  _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].forEach(function (categorieName, index) {\n    var categorie = document.createElement('div');\n    categorie.classList.add('english__categorie', 'categorie');\n    var categorieImage = document.createElement('img');\n    categorieImage.classList.add('categorie__image');\n    categorieImage.setAttribute('src', \"./img/\".concat(_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][1][index][0].word, \".jpg\"));\n    categorie.append(categorieImage);\n    var categorieText = document.createElement('p');\n    categorieText.classList.add('categorie__text');\n    categorieText.innerHTML = categorieName;\n    categorie.append(categorieText);\n    var categorieLink = document.createElement('a');\n    categorieLink.classList.add('categorie__link');\n    categorieLink.setAttribute('href', './cards.html');\n    categorieLink.id = categorieName;\n    categorie.append(categorieLink);\n    fragment.append(categorie);\n  });\n  return fragment;\n}\n\n//# sourceURL=webpack:///./src/categorie.js?");

/***/ }),

/***/ "./src/createStats.js":
/*!****************************!*\
  !*** ./src/createStats.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createStats; });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n\nfunction createStats() {\n  if (localStorage.stats === undefined) {\n    localStorage.setItem('stats', '{}');\n    _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][1].forEach(function (subArray, index) {\n      subArray.forEach(function (card) {\n        var obj = {\n          word: card.word,\n          translation: card.translation,\n          image: card.image,\n          audioSrc: card.audioSrc,\n          categorie: _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0][index],\n          'train-clicks': 0,\n          correct: 0,\n          errors: 0\n        };\n        var stats = JSON.parse(localStorage.stats);\n        stats[card.word] = obj;\n        localStorage.setItem('stats', JSON.stringify(stats));\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/createStats.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createHeader; });\n/* harmony import */ var _style_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/header.css */ \"./style/header.css\");\n/* harmony import */ var _style_header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_header_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createHeader() {\n  var header = document.createElement('header');\n  header.classList.add('header');\n  return header;\n}\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.css */ \"./style/main.css\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n/* harmony import */ var _categorie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorie */ \"./src/categorie.js\");\n/* harmony import */ var _trainPlayToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trainPlayToggle */ \"./src/trainPlayToggle.js\");\n/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burgerMenu */ \"./src/burgerMenu.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _createStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createStats */ \"./src/createStats.js\");\n\n\n\n\n\n\n\n\nif (localStorage.mode === undefined || localStorage.mode === 'train') {\n  localStorage.mode = 'train';\n} else {\n  document.body.classList.add('body-playmode');\n}\n\nvar header = Object(_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\ndocument.body.append(header);\nvar burgerMenu = new _burgerMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0]);\nvar burgerIcon = burgerMenu.createBurgerIcon();\nheader.append(burgerIcon);\nvar burgerWindow = burgerMenu.createBurgerWindow();\ndocument.body.append(burgerWindow);\nvar logo = document.createElement('p');\nlogo.classList.add('logo');\nlogo.innerHTML = 'English For Kids';\nheader.append(logo);\nvar toggle = Object(_trainPlayToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Для тоггла\n\nheader.append(toggle);\ntoggle.addEventListener('click', function () {\n  document.body.classList.toggle('body-playmode');\n});\nvar categoriesContainer = document.createElement('div');\ncategoriesContainer.classList.add('english__categories-container');\ndocument.body.append(categoriesContainer);\ncategoriesContainer.append(Object(_categorie__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\ncategoriesContainer.addEventListener('click', function (event) {\n  if (event.target.classList.contains('categorie__link')) {\n    localStorage.lastClick = event.target.id;\n  }\n});\nvar links = document.querySelectorAll('.burger-menu__link');\nlinks.forEach(function (elem) {\n  return elem.classList.remove('burger-menu__link-active');\n});\nlinks[0].classList.add('burger-menu__link-active');\nObject(_createStats__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/trainPlayToggle.js":
/*!********************************!*\
  !*** ./src/trainPlayToggle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createTrainPlayToggle; });\n/* harmony import */ var _style_train_play_toggle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/train-play-toggle.css */ \"./style/train-play-toggle.css\");\n/* harmony import */ var _style_train_play_toggle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_train_play_toggle_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createTrainPlayToggle() {\n  var toggle = document.createElement('div');\n  toggle.classList.add('toggle');\n  var toggleButton = document.createElement('div');\n  toggleButton.classList.add('toggle__button');\n  toggle.append(toggleButton);\n  var toggleTextPlay = document.createElement('p');\n  toggleTextPlay.classList.add('toggle__text', 'toggle__text-play');\n  toggleTextPlay.innerHTML = 'PLAY';\n  toggle.append(toggleTextPlay);\n  var toggleTextTrain = document.createElement('p');\n  toggleTextTrain.classList.add('toggle__text', 'toggle__text-train', 'active');\n  toggleTextTrain.innerHTML = 'TRAIN';\n  toggle.append(toggleTextTrain);\n\n  if (localStorage.mode === 'play') {\n    toggle.classList.add('toggle-active');\n    toggleTextTrain.classList.remove('active');\n    toggleTextPlay.classList.add('active');\n    toggleButton.style.left = '74px';\n  }\n\n  toggle.addEventListener('click', function () {\n    setTimeout(function () {\n      localStorage.mode = localStorage.mode === 'train' ? 'play' : 'train';\n    }, 0);\n    toggle.classList.toggle('toggle-active');\n    toggleTextTrain.classList.toggle('active');\n    toggleTextPlay.classList.toggle('active');\n    toggleButton.style.left = toggleButton.style.left === '' ? '74px' : '';\n  });\n  return toggle;\n}\n\n//# sourceURL=webpack:///./src/trainPlayToggle.js?");

/***/ }),

/***/ "./style/burger-menu.css":
/*!*******************************!*\
  !*** ./style/burger-menu.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./burger-menu.css */ \"./node_modules/css-loader/dist/cjs.js!./style/burger-menu.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style/burger-menu.css?");

/***/ }),

/***/ "./style/header.css":
/*!**************************!*\
  !*** ./style/header.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./style/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style/header.css?");

/***/ }),

/***/ "./style/main.css":
/*!************************!*\
  !*** ./style/main.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./style/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style/main.css?");

/***/ }),

/***/ "./style/train-play-toggle.css":
/*!*************************************!*\
  !*** ./style/train-play-toggle.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./train-play-toggle.css */ \"./node_modules/css-loader/dist/cjs.js!./style/train-play-toggle.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style/train-play-toggle.css?");

/***/ })

/******/ });