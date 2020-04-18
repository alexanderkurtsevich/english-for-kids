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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cardsPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/StartButton.js":
/*!****************************!*\
  !*** ./src/StartButton.js ***!
  \****************************/
/*! exports provided: StartButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StartButton\", function() { return StartButton; });\nclass StartButton {\r\n    constructor() {\r\n        this.button = null;\r\n        this.buttonText = null;\r\n        this.buttonImage = null;\r\n     }\r\n\r\n    create() {\r\n        this.button = document.createElement('div');\r\n        this.button.classList.add('start-button', 'start-button-hidden');\r\n        this.button.setAttribute('data-button', 'start');\r\n\r\n        this.buttonText = document.createElement('p');\r\n        this.buttonText.classList.add('start-button__text');\r\n        this.buttonText.innerHTML = 'Start game';\r\n        this.buttonText.setAttribute('data-button', 'start');\r\n        this.button.append(this.buttonText)\r\n\r\n        this.buttonImage = document.createElement('img');\r\n        this.buttonImage.classList.add('start-button-image', 'hidden');\r\n        this.buttonImage.setAttribute('src', 'img/repeat.svg');\r\n        this.buttonImage.setAttribute('data-button', 'start');\r\n        this.button.append(this.buttonImage)\r\n\r\n        return this.button;\r\n    }\r\n\r\n    toRepeatButton(){\r\n        this.button.classList.add('start-button-repeat');\r\n        this.buttonText.classList.add('hidden');\r\n        this.buttonImage.classList.remove('hidden')\r\n    }\r\n\r\n    toStartGameButton() {\r\n        this.button.classList.remove('start-button-repeat');\r\n        this.buttonText.classList.remove('hidden');\r\n        this.buttonImage.classList.add('hidden')\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/StartButton.js?");

/***/ }),

/***/ "./src/burgerMenu.js":
/*!***************************!*\
  !*** ./src/burgerMenu.js ***!
  \***************************/
/*! exports provided: BurgerMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BurgerMenu\", function() { return BurgerMenu; });\nclass BurgerMenu {\r\n    constructor(categoriesArray) {\r\n\r\n        this.categories = categoriesArray;\r\n        this.burgerIcon = null;\r\n        this.links = [];\r\n    }\r\n\r\n    createBurgerIcon() {\r\n        this.burgerIcon = document.createElement('div');\r\n        this.burgerIcon.classList.add('burger-menu__icon', 'burger-icon');\r\n\r\n        let line = document.createElement('div');\r\n        line.classList.add('burger-icon__line');\r\n        this.burgerIcon.append(line);\r\n\r\n        let cloneLine1 = line.cloneNode();\r\n        this.burgerIcon.append(cloneLine1);\r\n        let cloneLine2 = line.cloneNode();\r\n        this.burgerIcon.append(cloneLine2);\r\n\r\n        this.burgerIcon.addEventListener('click', (event) => {\r\n            event.currentTarget.classList.toggle('burger-icon-rotate');\r\n            this.burgerWindow.classList.toggle('burger-menu__window-active')\r\n        })\r\n\r\n        return this.burgerIcon\r\n    }\r\n\r\n    createBurgerWindow() {\r\n        this.burgerWindow = document.createElement('div');\r\n        this.burgerWindow.classList.add('burger-menu__window');\r\n\r\n        let mainPageLink = document.createElement('a');\r\n        mainPageLink.classList.add('burger-menu__link');\r\n        mainPageLink.setAttribute('href', './index.html');\r\n        mainPageLink.setAttribute('data-link', 'Main Page');\r\n        mainPageLink.innerHTML = 'Main Page';\r\n        this.links.push(mainPageLink);\r\n        this.burgerWindow.append(mainPageLink);\r\n\r\n        this.categories.forEach(element => {\r\n            let pageLink = document.createElement('a');\r\n            pageLink.classList.add('burger-menu__link');\r\n            pageLink.setAttribute('href', './cards.html');\r\n            pageLink.setAttribute('data-link', element)\r\n            pageLink.innerHTML = element;\r\n            this.links.push(pageLink)\r\n            this.burgerWindow.append(pageLink);\r\n        });\r\n\r\n        let stats = document.createElement('a');\r\n        stats.classList.add('burger-menu__link');\r\n        stats.setAttribute('href', './stats.html');\r\n        stats.setAttribute('data-link', 'Statistics');\r\n        stats.innerHTML = 'Statistics';\r\n        this.links.push(stats);\r\n        this.burgerWindow.append(stats);\r\n\r\n        this.links.forEach(element => {\r\n            if (element.matches(`[data-link = \"${localStorage.lastClick}\"]`)) {\r\n                element.classList.add('burger-menu__link-active');\r\n            }\r\n        })\r\n\r\n        this.burgerWindow.addEventListener('click', (event) => {\r\n            if (event.target.classList.contains('burger-menu__link')) {\r\n                localStorage.lastClick = event.target.getAttribute('data-link')\r\n            }\r\n        })\r\n\r\n        return this.burgerWindow;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/burgerMenu.js?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cards\", function() { return cards; });\nconst cards = [\r\n    ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Professions', 'Fruits'],\r\n    [\r\n        [\r\n            {\r\n                word: 'cry',\r\n                translation: 'плакать',\r\n                image: 'img/cry.jpg',\r\n                audioSrc: 'audio/cry.mp3'\r\n            },\r\n            {\r\n                word: 'dance',\r\n                translation: 'танцевать',\r\n                image: 'img/dance.jpg',\r\n                audioSrc: 'audio/dance.mp3'\r\n            },\r\n            {\r\n                word: 'dive',\r\n                translation: 'нырять',\r\n                image: 'img/dive.jpg',\r\n                audioSrc: 'audio/dive.mp3'\r\n            },\r\n            {\r\n                word: 'draw',\r\n                translation: 'рисовать',\r\n                image: 'img/draw.jpg',\r\n                audioSrc: 'audio/draw.mp3'\r\n            },\r\n            {\r\n                word: 'fish',\r\n                translation: 'ловить рыбу',\r\n                image: 'img/fish.jpg',\r\n                audioSrc: 'audio/fish.mp3'\r\n            },\r\n            {\r\n                word: 'fly',\r\n                translation: 'летать',\r\n                image: 'img/fly.jpg',\r\n                audioSrc: 'audio/fly.mp3'\r\n            },\r\n            {\r\n                word: 'hug',\r\n                translation: 'обнимать',\r\n                image: 'img/hug.jpg',\r\n                audioSrc: 'audio/hug.mp3'\r\n            },\r\n            {\r\n                word: 'jump',\r\n                translation: 'прыгать',\r\n                image: 'img/jump.jpg',\r\n                audioSrc: 'audio/jump.mp3'\r\n            }\r\n        ],\r\n        [\r\n            {\r\n                word: 'open',\r\n                translation: 'открывать',\r\n                image: 'img/open.jpg',\r\n                audioSrc: 'audio/open.mp3'\r\n            },\r\n            {\r\n                word: 'play',\r\n                translation: 'играть',\r\n                image: 'img/play.jpg',\r\n                audioSrc: 'audio/play.mp3'\r\n            },\r\n            {\r\n                word: 'point',\r\n                translation: 'указывать',\r\n                image: 'img/point.jpg',\r\n                audioSrc: 'audio/point.mp3'\r\n            },\r\n            {\r\n                word: 'ride',\r\n                translation: 'ездить',\r\n                image: 'img/ride.jpg',\r\n                audioSrc: 'audio/ride.mp3'\r\n            },\r\n            {\r\n                word: 'run',\r\n                translation: 'бегать',\r\n                image: 'img/run.jpg',\r\n                audioSrc: 'audio/run.mp3'\r\n            },\r\n            {\r\n                word: 'sing',\r\n                translation: 'петь',\r\n                image: 'img/sing.jpg',\r\n                audioSrc: 'audio/sing.mp3'\r\n            },\r\n            {\r\n                word: 'jump',\r\n                translation: 'прыгать',\r\n                image: 'img/skip.jpg',\r\n                audioSrc: 'audio/skip.mp3'\r\n            },\r\n            {\r\n                word: 'swim',\r\n                translation: 'плавать',\r\n                image: 'img/swim.jpg',\r\n                audioSrc: 'audio/swim.mp3'\r\n            }\r\n        ],\r\n        [\r\n            {\r\n                word: 'cat',\r\n                translation: 'кот',\r\n                image: 'img/cat.jpg',\r\n                audioSrc: 'audio/cat.mp3'\r\n            },\r\n            {\r\n                word: 'chick',\r\n                translation: 'цыплёнок',\r\n                image: 'img/chick.jpg',\r\n                audioSrc: 'audio/chick.mp3'\r\n            },\r\n            {\r\n                word: 'chicken',\r\n                translation: 'курица',\r\n                image: 'img/chicken.jpg',\r\n                audioSrc: 'audio/chicken.mp3'\r\n            },\r\n            {\r\n                word: 'dog',\r\n                translation: 'собака',\r\n                image: 'img/dog.jpg',\r\n                audioSrc: 'audio/dog.mp3'\r\n            },\r\n            {\r\n                word: 'horse',\r\n                translation: 'лошадь',\r\n                image: 'img/horse.jpg',\r\n                audioSrc: 'audio/horse.mp3'\r\n            },\r\n            {\r\n                word: 'pig',\r\n                translation: 'свинья',\r\n                image: 'img/pig.jpg',\r\n                audioSrc: 'audio/pig.mp3'\r\n            },\r\n            {\r\n                word: 'rabbit',\r\n                translation: 'кролик',\r\n                image: 'img/rabbit.jpg',\r\n                audioSrc: 'audio/rabbit.mp3'\r\n            },\r\n            {\r\n                word: 'sheep',\r\n                translation: 'овца',\r\n                image: 'img/sheep.jpg',\r\n                audioSrc: 'audio/sheep.mp3'\r\n            }\r\n        ],\r\n        [\r\n            {\r\n                word: 'bird',\r\n                translation: 'птица',\r\n                image: 'img/bird.jpg',\r\n                audioSrc: 'audio/bird.mp3'\r\n            },\r\n            {\r\n                word: 'fish',\r\n                translation: 'рыба',\r\n                image: 'img/fish1.jpg',\r\n                audioSrc: 'audio/fish.mp3'\r\n            },\r\n            {\r\n                word: 'frog',\r\n                translation: 'жаба',\r\n                image: 'img/frog.jpg',\r\n                audioSrc: 'audio/frog.mp3'\r\n            },\r\n            {\r\n                word: 'giraffe',\r\n                translation: 'жирафа',\r\n                image: 'img/giraffe.jpg',\r\n                audioSrc: 'audio/giraffe.mp3'\r\n            },\r\n            {\r\n                word: 'lion',\r\n                translation: 'лев',\r\n                image: 'img/lion.jpg',\r\n                audioSrc: 'audio/lion.mp3'\r\n            },\r\n            {\r\n                word: 'mouse',\r\n                translation: 'мышь',\r\n                image: 'img/mouse.jpg',\r\n                audioSrc: 'audio/mouse.mp3'\r\n            },\r\n            {\r\n                word: 'turtle',\r\n                translation: 'черепаха',\r\n                image: 'img/turtle.jpg',\r\n                audioSrc: 'audio/turtle.mp3'\r\n            },\r\n            {\r\n                word: 'dolphin',\r\n                translation: 'дельфин',\r\n                image: 'img/dolphin.jpg',\r\n                audioSrc: 'audio/dolphin.mp3'\r\n            }\r\n        ],\r\n        [\r\n            {\r\n                word: 'skirt',\r\n                translation: 'юбка',\r\n                image: 'img/skirt.jpg',\r\n                audioSrc: 'audio/skirt.mp3'\r\n            },\r\n            {\r\n                word: 'pants',\r\n                translation: 'брюки',\r\n                image: 'img/pants.jpg',\r\n                audioSrc: 'audio/pants.mp3'\r\n            },\r\n            {\r\n                word: 'blouse',\r\n                translation: 'блузка',\r\n                image: 'img/blouse.jpg',\r\n                audioSrc: 'audio/blouse.mp3'\r\n            },\r\n            {\r\n                word: 'dress',\r\n                translation: 'платье',\r\n                image: 'img/dress.jpg',\r\n                audioSrc: 'audio/dress.mp3'\r\n            },\r\n            {\r\n                word: 'boot',\r\n                translation: 'ботинок',\r\n                image: 'img/boot.jpg',\r\n                audioSrc: 'audio/boot.mp3'\r\n            },\r\n            {\r\n                word: 'shirt',\r\n                translation: 'рубашка',\r\n                image: 'img/shirt.jpg',\r\n                audioSrc: 'audio/shirt.mp3'\r\n            },\r\n            {\r\n                word: 'coat',\r\n                translation: 'пальто',\r\n                image: 'img/coat.jpg',\r\n                audioSrc: 'audio/coat.mp3'\r\n            },\r\n            {\r\n                word: 'shoe',\r\n                translation: 'туфли',\r\n                image: 'img/shoe.jpg',\r\n                audioSrc: 'audio/shoe.mp3'\r\n            }\r\n        ],\r\n        [\r\n            {\r\n                word: 'sad',\r\n                translation: 'грустный',\r\n                image: 'img/sad.jpg',\r\n                audioSrc: 'audio/sad.mp3'\r\n            },\r\n            {\r\n                word: 'angry',\r\n                translation: 'сердитый',\r\n                image: 'img/angry.jpg',\r\n                audioSrc: 'audio/angry.mp3'\r\n            },\r\n            {\r\n                word: 'happy',\r\n                translation: 'счастливый',\r\n                image: 'img/happy.jpg',\r\n                audioSrc: 'audio/happy.mp3'\r\n            },\r\n            {\r\n                word: 'tired',\r\n                translation: 'уставший',\r\n                image: 'img/tired.jpg',\r\n                audioSrc: 'audio/tired.mp3'\r\n            },\r\n            {\r\n                word: 'surprised',\r\n                translation: 'удивлённый',\r\n                image: 'img/surprised.jpg',\r\n                audioSrc: 'audio/surprised.mp3'\r\n            },\r\n            {\r\n                word: 'scared',\r\n                translation: 'испуганный',\r\n                image: 'img/scared.jpg',\r\n                audioSrc: 'audio/scared.mp3'\r\n            },\r\n            {\r\n                word: 'smile',\r\n                translation: 'улыбка',\r\n                image: 'img/smile.jpg',\r\n                audioSrc: 'audio/smile.mp3'\r\n            },\r\n            {\r\n                word: 'laugh',\r\n                translation: 'смех',\r\n                image: 'img/laugh.jpg',\r\n                audioSrc: 'audio/laugh.mp3'\r\n            }\r\n        ],\r\n        [\r\n            {\r\n                word: 'bodyguard',\r\n                translation: 'телохранитель',\r\n                image: 'img/bodyguard.jpg',\r\n                audioSrc: 'audio/bodyguard.mp3'\r\n            }, \r\n            {\r\n                word: 'cook',\r\n                translation: 'повар',\r\n                image: 'img/cook.jpg',\r\n                audioSrc: 'audio/cook.mp3'\r\n            }, \r\n            {\r\n                word: 'doctor',\r\n                translation: 'врач',\r\n                image: 'img/doctor.jpg',\r\n                audioSrc: 'audio/doctor.mp3'\r\n            }, \r\n            {\r\n                word: 'lawyer',\r\n                translation: 'адвокат',\r\n                image: 'img/lawyer.jpg',\r\n                audioSrc: 'audio/lawyer.mp3'\r\n            }, \r\n            {\r\n                word: 'taxi driver',\r\n                translation: 'водитель такси',\r\n                image: 'img/taxi driver.jpg',\r\n                audioSrc: 'audio/taxi driver.mp3'\r\n            }, \r\n            {\r\n                word: 'teacher',\r\n                translation: 'учитель',\r\n                image: 'img/teacher.jpg',\r\n                audioSrc: 'audio/teacher.mp3'\r\n            }, \r\n            {\r\n                word: 'vet',\r\n                translation: 'ветеринар',\r\n                image: 'img/vet.jpg',\r\n                audioSrc: 'audio/vet.mp3'\r\n            }, \r\n            {\r\n                word: 'waiter',\r\n                translation: 'официант',\r\n                image: 'img/waiter.jpg',\r\n                audioSrc: 'audio/waiter.mp3'\r\n            }, \r\n        ],\r\n        [\r\n            {\r\n                word: 'apple',\r\n                translation: 'яблоко',\r\n                image: 'img/apple.jpg',\r\n                audioSrc: 'audio/apple.mp3'\r\n            },  \r\n            {\r\n                word: 'banana',\r\n                translation: 'банан',\r\n                image: 'img/banana.jpg',\r\n                audioSrc: 'audio/banana.mp3'\r\n            },  \r\n            {\r\n                word: 'grape',\r\n                translation: 'виноград',\r\n                image: 'img/grape.jpg',\r\n                audioSrc: 'audio/grape.mp3'\r\n            },  \r\n            {\r\n                word: 'kiwi',\r\n                translation: 'киви',\r\n                image: 'img/kiwi.jpg',\r\n                audioSrc: 'audio/kiwi.mp3'\r\n            },  \r\n            {\r\n                word: 'peach',\r\n                translation: 'персик',\r\n                image: 'img/peach.jpg',\r\n                audioSrc: 'audio/peach.mp3'\r\n            },  \r\n            {\r\n                word: 'pear',\r\n                translation: 'груша',\r\n                image: 'img/pear.jpg',\r\n                audioSrc: 'audio/pear.mp3'\r\n            },  \r\n            {\r\n                word: 'pineapple',\r\n                translation: 'ананас',\r\n                image: 'img/pineapple.jpg',\r\n                audioSrc: 'audio/pineapple.mp3'\r\n            },  \r\n            {\r\n                word: 'plum',\r\n                translation: 'слива',\r\n                image: 'img/plum.jpg',\r\n                audioSrc: 'audio/plum.mp3'\r\n            },  \r\n        ]\r\n    ]\r\n]\r\n\r\n\n\n//# sourceURL=webpack:///./src/cards.js?");

/***/ }),

/***/ "./src/cardsPage.js":
/*!**************************!*\
  !*** ./src/cardsPage.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n/* harmony import */ var _createCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCards.js */ \"./src/createCards.js\");\n/* harmony import */ var _trainPlayToggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainPlayToggle.js */ \"./src/trainPlayToggle.js\");\n/* harmony import */ var _StartButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StartButton.js */ \"./src/StartButton.js\");\n/* harmony import */ var _burgerMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burgerMenu.js */ \"./src/burgerMenu.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass English {\r\n    constructor() {\r\n        this.cardsClassesObj = {};\r\n\r\n        this.wordsList = [];\r\n        this.randomizedWordList = []\r\n        this.audios = {};\r\n\r\n\r\n        this.englishWords = [];\r\n        this.flipImages = [];\r\n        this.translations = [];\r\n\r\n        this.count = 0;\r\n        this.errorCount = 0;\r\n    }\r\n\r\n    init() {\r\n        this.playAudioEvent = this.playAudioEvent.bind(this);\r\n        this.startGameEvent = this.startGameEvent.bind(this);\r\n        this.rotateCardClickEvent = this.rotateCardClickEvent.bind(this)\r\n        this.rotateCardMouseOverEvent = this.rotateCardMouseOverEvent.bind(this)\r\n        this.toggleEvent = this.toggleEvent.bind(this);\r\n\r\n        let header = Object(_header_js__WEBPACK_IMPORTED_MODULE_5__[\"createHeader\"])();\r\n        document.body.append(header);\r\n\r\n        this.burgerMenu = new _burgerMenu_js__WEBPACK_IMPORTED_MODULE_4__[\"BurgerMenu\"](_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"cards\"][0]);\r\n        this.burgerIcon = this.burgerMenu.createBurgerIcon();\r\n        header.append(this.burgerIcon);\r\n        this.burgerWindow = this.burgerMenu.createBurgerWindow();\r\n        document.body.append(this.burgerWindow);\r\n\r\n\r\n        this.createStarsWrap()\r\n\r\n        this.startButtonInstance = new _StartButton_js__WEBPACK_IMPORTED_MODULE_3__[\"StartButton\"]();\r\n        this.startButton = this.startButtonInstance.create();\r\n        header.append(this.startButton);\r\n\r\n        this.toggle = Object(_trainPlayToggle_js__WEBPACK_IMPORTED_MODULE_2__[\"createTrainPlayToggle\"])(); // Для тоггла\r\n        header.append(this.toggle);\r\n\r\n        this.createCardContainer()\r\n        this.createCards()\r\n        this.randomizeWords()\r\n\r\n        if (localStorage.mode === 'play') {\r\n            this.toPlayMode()\r\n        }\r\n\r\n        this.cardsContainer.addEventListener('click', this.playAudioEvent)\r\n        this.cardsContainer.addEventListener('click', this.rotateCardClickEvent)\r\n        this.cardsContainer.addEventListener('mouseover', this.rotateCardMouseOverEvent)\r\n        this.toggle.addEventListener('click', this.toggleEvent);\r\n\r\n    }\r\n\r\n    toggleEvent(event) {\r\n        if (localStorage.mode === 'train') {\r\n            this.toPlayMode();\r\n        }\r\n        else {\r\n            this.toTrainMode();\r\n        }\r\n\r\n        this.startButtonInstance.toStartGameButton()\r\n        this.game = false\r\n    }\r\n\r\n    toPlayMode() {\r\n        this.englishWords.forEach(eachWord => {\r\n            eachWord.classList.add('card-playmode');\r\n        })\r\n        this.flipImages.forEach(eachImg => {\r\n            eachImg.classList.add('card-playmode')\r\n        })\r\n        this.translations.forEach(eachTranslation => {\r\n            eachTranslation.classList.add('card-playmode')\r\n        })\r\n        this.startButton.classList.remove('start-button-hidden');\r\n\r\n        document.body.classList.add('body-playmode')\r\n\r\n        this.cardsContainer.removeEventListener('click', this.playAudioEvent);\r\n        document.body.addEventListener('click', this.startGameEvent);\r\n    }\r\n\r\n    toTrainMode() {\r\n        this.englishWords.forEach(eachWord => {\r\n            eachWord.classList.remove('card-playmode');\r\n        })\r\n        this.flipImages.forEach(eachImg => {\r\n            eachImg.classList.remove('card-playmode')\r\n        })\r\n        this.translations.forEach(eachTranslation => {\r\n            eachTranslation.classList.remove('card-playmode')\r\n        })\r\n        this.startButton.classList.add('start-button-hidden');\r\n\r\n        document.body.classList.remove('body-playmode');\r\n\r\n        this.cardsContainer.addEventListener('click', this.playAudioEvent);\r\n        document.body.removeEventListener('click', this.startGameEvent);\r\n\r\n        let stars = document.querySelectorAll('.star');\r\n        stars.forEach(star => star.remove())\r\n\r\n        let blockWindows = document.querySelectorAll('.block-window');\r\n        blockWindows.forEach(blockWindow => blockWindow.remove());\r\n\r\n        this.count = 0;\r\n        this.errorCount = 0;\r\n\r\n        this.randomizeWords()\r\n    }\r\n\r\n    rotateCardClickEvent(event) {\r\n        if (event.target.classList.contains('card__flip')) {\r\n            this.rotatedWord = event.target.getAttribute('data-word');\r\n            let elements = document.querySelectorAll(`[data-word = \"${this.rotatedWord}\"]`)\r\n            elements.forEach(elem => elem.classList.add('card-rotate'))\r\n        }\r\n    }\r\n    rotateCardMouseOverEvent(event) {\r\n        let elements = document.querySelectorAll(`[data-word = \"${this.rotatedWord}\"]`)\r\n        if (event.target.getAttribute('data-word') !== this.rotatedWord) {\r\n            elements.forEach(elem => elem.classList.remove('card-rotate'))\r\n        }\r\n    }\r\n\r\n    createStarsWrap() {\r\n        this.starsWrap = document.createElement('div');\r\n        this.starsWrap.classList.add('stars__wrap');\r\n        document.body.append(this.starsWrap);\r\n    }\r\n\r\n    createCardContainer() {\r\n        this.cardsContainer = document.createElement('div'); // контейнер для карт\r\n        this.cardsContainer.classList.add('cards__container');\r\n        document.body.append(this.cardsContainer);\r\n    }\r\n\r\n    randomizeWords() {\r\n        this.randomizedWordList.sort((a, b) => Math.random() - 0.5)\r\n    }\r\n\r\n    createCards() {\r\n        let indexOfCategorie = _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"cards\"][0].indexOf(localStorage.lastClick); // какая тема была выбрана\r\n        let cardsArray = _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"cards\"][1][indexOfCategorie]; // выбранная категория\r\n        cardsArray.forEach(cardElem => {\r\n            let card = new _createCards_js__WEBPACK_IMPORTED_MODULE_1__[\"Card\"](cardElem['word'], cardElem['translation'], cardElem['image'], cardElem['audioSrc']);\r\n            this.cardsContainer.append(card.createCard())\r\n            this.cardsClassesObj[cardElem['word']] = card;\r\n\r\n            this.wordsList.push(cardElem['word']);\r\n            this.randomizedWordList.push(cardElem['word'])\r\n\r\n            this.englishWords.push(card.cardText);\r\n            this.translations.push(card.cardTranslation)\r\n            this.flipImages.push(card.cardFlip);\r\n            this.audios[cardElem['word']] = card.audioSrc\r\n        })\r\n    }\r\n\r\n    playAudioEvent(event) {\r\n        if (localStorage.mode === 'train' && event.target.hasAttribute('data-word') && !event.target.classList.contains('card__flip')) {\r\n            let word = event.target.getAttribute('data-word');\r\n            let audio = new Audio(this.audios[word]);\r\n            audio.play()\r\n\r\n            this.changeStats(word, 'trainClicks')\r\n        }\r\n    }\r\n\r\n    startGameEvent(event) {\r\n\r\n        if (event.target.getAttribute('data-button') === 'start' && !this.game) {\r\n            this.game = true;\r\n            this.startButtonInstance.toRepeatButton()\r\n            this.playSound(this.audios[this.randomizedWordList[this.count]])\r\n        }\r\n\r\n        if (event.target.getAttribute('data-button') === 'start' && this.game) {\r\n            this.playSound(this.audios[this.randomizedWordList[this.count]])\r\n            console.log('hey')\r\n        }\r\n\r\n        if (this.game && event.target.classList.contains('card')) {\r\n            if (event.target.getAttribute('data-word') === this.randomizedWordList[this.count]) {\r\n                let blockWindow = document.createElement('div');\r\n                blockWindow.classList.add('block-window');\r\n                event.target.append(blockWindow);\r\n\r\n                this.count += 1;\r\n                this.playSound('audio/correct.mp3');\r\n\r\n                let star = document.createElement('img');\r\n                star.classList.add('star');\r\n                star.setAttribute('src', 'img/star-win.svg');\r\n                this.starsWrap.append(star)\r\n\r\n                if (this.count === 8) {\r\n                    this.winGame()\r\n                }\r\n\r\n                setTimeout(() => {\r\n                    this.playSound(this.audios[this.randomizedWordList[this.count]])\r\n                }, 700);\r\n\r\n\r\n                let word = event.target.getAttribute('data-word');\r\n                this.changeStats(word, 'correct')\r\n            }\r\n            else {\r\n                this.errorCount += 1;\r\n\r\n                let star = document.createElement('img');\r\n                star.classList.add('star');\r\n                star.setAttribute('src', 'img/star.svg');\r\n                this.starsWrap.append(star)\r\n\r\n                this.playSound('audio/error.mp3')\r\n\r\n                let word = event.target.getAttribute('data-word');\r\n                this.changeStats(word, 'errors');\r\n            }\r\n        }\r\n    }\r\n\r\n    changeStats(word, element) {\r\n        let stats = JSON.parse(localStorage.stats);\r\n        stats[word][`${element}`] += 1;\r\n        localStorage.stats = JSON.stringify(stats)\r\n\r\n    }\r\n\r\n    playSound(src) {\r\n        let audio = new Audio(src);\r\n        audio.play()\r\n    }\r\n\r\n    winGame() {\r\n        let winWindow = document.createElement('div');\r\n        winWindow.classList.add('win-window');\r\n        document.body.append(winWindow);\r\n        if (this.errorCount === 0) {\r\n            let winText = document.createElement('p');\r\n            winText.classList.add('win-window__text');\r\n            winText.innerHTML = \"WIN!\"\r\n            winWindow.append(winText)\r\n\r\n            let winImage = document.createElement('img');\r\n            winImage.classList.add('win-window__image');\r\n            winImage.setAttribute('src', 'img/success.jpg');\r\n            winWindow.append(winImage);\r\n\r\n            this.playSound('audio/success.mp3')\r\n            setTimeout(() => {\r\n                window.location.href = \"./index.html\"\r\n            }, 3500);\r\n        }\r\n\r\n        else {\r\n            let looseText = document.createElement('p');\r\n            looseText.classList.add('win-window__loose-text');\r\n            looseText.innerHTML = `${this.errorCount} errors`\r\n            winWindow.append(looseText)\r\n\r\n            let looseImage = document.createElement('img');\r\n            looseImage.classList.add('win-window__image');\r\n            looseImage.setAttribute('src', 'img/failure.jpg');\r\n            winWindow.append(looseImage);\r\n\r\n            this.playSound('audio/failure.mp3')\r\n            setTimeout(() => {\r\n                window.location.href = \"./index.html\"\r\n            }, 3500);\r\n        }\r\n    }\r\n\r\n\r\n}\r\n\r\nlet english = new English();\r\nenglish.init()\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/cardsPage.js?");

/***/ }),

/***/ "./src/createCards.js":
/*!****************************!*\
  !*** ./src/createCards.js ***!
  \****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n\r\n\r\nclass Card {\r\n    constructor(word, translation, imageSrc, audioSrc) {\r\n        this.word = word;\r\n        this.translation = translation;\r\n        this.imageSrc = imageSrc;\r\n        this.audioSrc = audioSrc;\r\n\r\n        this.card = null;\r\n        this.cardText;\r\n        this.cardTranslation;\r\n        this.cardFlip;\r\n    }\r\n\r\n    createCard() {\r\n        let card = document.createElement('div');\r\n        card.classList.add('cards__card', 'card');\r\n        card.setAttribute('data-word', this.word);\r\n        card.style.backgroundImage = `url(\"${this.imageSrc}\")`\r\n\r\n        this.cardText = document.createElement('p');\r\n        this.cardText.classList.add('card__word');\r\n        this.cardText.innerHTML = this.word;\r\n        this.cardText.setAttribute('data-word', this.word);\r\n        card.append(this.cardText)\r\n\r\n        this.cardTranslation = document.createElement('p');\r\n        this.cardTranslation.classList.add('card__translation');\r\n        this.cardTranslation.innerHTML = this.translation;\r\n        this.cardTranslation.setAttribute('data-word', this.word);\r\n        card.append(this.cardTranslation)\r\n\r\n        this.cardFlip = document.createElement('img');\r\n        this.cardFlip.classList.add('card__flip');\r\n        this.cardFlip.setAttribute('src', './img/rotate.svg');\r\n        this.cardFlip.setAttribute('data-word', this.word);\r\n        card.append(this.cardFlip)\r\n\r\n        this.card = card;\r\n\r\n        return this.card;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/createCards.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeader\", function() { return createHeader; });\nfunction createHeader() {\r\n    let header = document.createElement('header');\r\n    header.classList.add('header');\r\n    return header;\r\n}\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/trainPlayToggle.js":
/*!********************************!*\
  !*** ./src/trainPlayToggle.js ***!
  \********************************/
/*! exports provided: createTrainPlayToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTrainPlayToggle\", function() { return createTrainPlayToggle; });\nfunction createTrainPlayToggle() {\r\n    let toggle = document.createElement('div');\r\n    toggle.classList.add('toggle');\r\n\r\n    let toggleButton = document.createElement('div');\r\n    toggleButton.classList.add('toggle__button');\r\n    toggle.append(toggleButton);\r\n\r\n    let toggleTextPlay = document.createElement('p');\r\n    toggleTextPlay.classList.add('toggle__text', 'toggle__text-play');\r\n    toggleTextPlay.innerHTML = \"PLAY\";\r\n    toggle.append(toggleTextPlay);\r\n\r\n    let toggleTextTrain = document.createElement('p');\r\n    toggleTextTrain.classList.add('toggle__text', 'toggle__text-train', 'active');\r\n    toggleTextTrain.innerHTML = \"TRAIN\";\r\n    toggle.append(toggleTextTrain);\r\n\r\n    if (localStorage.mode === 'play') {\r\n        toggle.classList.add('toggle-active');\r\n        toggleTextTrain.classList.remove('active');\r\n        toggleTextPlay.classList.add('active');\r\n        \r\n        toggleButton.style.left = '74px';\r\n    }\r\n\r\n    toggle.addEventListener('click', (event) => {\r\n        setTimeout(() => {\r\n            localStorage.mode = localStorage.mode === 'train' ? 'play' : 'train';\r\n        }, 0);\r\n        \r\n        toggle.classList.toggle('toggle-active');\r\n        toggleTextTrain.classList.toggle('active');\r\n        toggleTextPlay.classList.toggle('active');\r\n        \r\n        toggleButton.style.left = (toggleButton.style.left === \"\") ? '74px' : \"\"\r\n    })\r\n\r\n    return toggle\r\n}\n\n//# sourceURL=webpack:///./src/trainPlayToggle.js?");

/***/ })

/******/ });