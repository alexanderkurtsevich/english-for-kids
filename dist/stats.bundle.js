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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/stats.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/stats.js":
/*!**********************!*\
  !*** ./src/stats.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function stats() {\r\n    let table = document.createElement('table');\r\n    table.classList.add('stats__table', 'table');\r\n    document.body.append(table);\r\n\r\n    let headRow = document.createElement('tr');\r\n    headRow.classList.add('table__head-row');\r\n    table.append(headRow);\r\n\r\n    let tHeads = ['Word', 'Translation', 'Categorie', 'Train-Clicks', 'Correct', 'Errors'];\r\n    tHeads.forEach((headWord) => {\r\n        let tHead = document.createElement('th');\r\n        tHead.classList.add(`table__${headWord.toLowerCase()}`, 'table__t-head');\r\n        tHead.innerHTML = headWord;\r\n        headRow.append(tHead);\r\n    });\r\n\r\n    let statsObj = JSON.parse(localStorage.stats);\r\n\r\n\r\n    for (let key in statsObj) {\r\n        let row = document.createElement('tr');\r\n        table.append(row);\r\n    \r\n        row.innerHTML =\r\n            `<tr>\r\n                <td>${statsObj[key]['word']}</td>\r\n                <td>${statsObj[key]['translation']}</td>\r\n                <td>${statsObj[key]['categorie']}</td>\r\n                <td>${statsObj[key]['trainClicks']}</td>\r\n                <td>${statsObj[key]['correct']}</td>\r\n                <td>${statsObj[key]['errors']}</td>\r\n            </tr>`;\r\n    }\r\n}\r\n\r\nstats();\r\n\r\n\n\n//# sourceURL=webpack:///./src/stats.js?");

/***/ })

/******/ });