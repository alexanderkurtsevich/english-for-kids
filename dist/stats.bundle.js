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

eval("class Stats {\r\n    constructor() {\r\n        this.tHeads = [];\r\n        this.statsObj = {};\r\n        this.statsArray = [];\r\n\r\n        this.rows = []\r\n    }\r\n    createTable() {\r\n        this.statsObj = JSON.parse(localStorage.stats);\r\n        this.sortEvent = this.sortEvent.bind(this)\r\n\r\n        for (let key in this.statsObj) {\r\n            this.statsArray.push(this.statsObj[key])\r\n        }\r\n        \r\n        this.table = document.createElement('table');\r\n        this.table.classList.add('stats__table', 'table');\r\n        document.body.append(this.table);\r\n\r\n        let headRow = document.createElement('tr');\r\n        headRow.classList.add('table__head-row');\r\n        this.table.append(headRow);\r\n\r\n        let tHeads = ['Word', 'Translation', 'Categorie', 'Train-Clicks', 'Correct', 'Errors'];\r\n        tHeads.forEach((headWord) => {\r\n            let tHead = document.createElement('th');\r\n            tHead.classList.add('table__t-head');\r\n            tHead.setAttribute('data-head', headWord.toLowerCase())\r\n            tHead.innerHTML = headWord;\r\n            this.tHeads.push(tHead);\r\n            headRow.append(tHead);\r\n        });\r\n        this.tHeads[0].classList.add('sort-forward');\r\n        this.sortFunction('word');\r\n        this.createWordsRows();\r\n\r\n        \r\n\r\n\r\n        this.tHeads.forEach(tHead => {\r\n            tHead.addEventListener('click', this.sortEvent)\r\n        })\r\n\r\n        \r\n    }\r\n\r\n    createWordsRows() {\r\n        this.statsArray.forEach((card) => {\r\n            let row = document.createElement('tr');\r\n            this.table.append(row);\r\n            this.rows.push(row)\r\n\r\n            row.innerHTML =\r\n                `<tr>\r\n                    <td>${card['word']}</td>\r\n                    <td>${card['translation']}</td>\r\n                    <td>${card['categorie']}</td>\r\n                    <td>${card['train-clicks']}</td>\r\n                    <td>${card['correct']}</td>\r\n                    <td>${card['errors']}</td>\r\n                </tr>`;\r\n        })\r\n    }\r\n\r\n    sortEvent(event){\r\n        this.sortFunction(event.target.getAttribute('data-head'));\r\n        if (event.target.matches('.sort-forward')) {\r\n            event.target.classList.remove('sort-forward');\r\n            event.target.classList.add('sort-reverse');\r\n            this.statsArray.reverse()\r\n            console.log('yes')\r\n        }\r\n        else if (event.target.matches('.sort-reverse')) {\r\n            event.target.classList.add('sort-forward');\r\n            event.target.classList.remove('sort-reverse');\r\n        }\r\n        else {\r\n            this.tHeads.forEach(thead => thead.classList.remove('sort-forward', 'sort-reverse'));\r\n            event.target.classList.add('sort-forward');\r\n        }\r\n        \r\n\r\n        this.rows.forEach(row => row.remove());\r\n        this.createWordsRows();\r\n    }\r\n\r\n    sortFunction(parameter) {\r\n        this.statsArray.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1);\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\nlet stats = new Stats();\r\nstats.createTable()\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/stats.js?");

/***/ })

/******/ });