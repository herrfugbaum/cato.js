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
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/webpack/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/webpack/index.js":
/*!***********************************!*\
  !*** ./examples/webpack/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_cato__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/cato */ \"./src/cato.js\");\n\n\nconst optionsFirstSlider = {\n  // are optional\n  tooltips: true, // boolean\n  direction: 'vertical', // string horizontal & vertical\n  width: 700, // integer default = 700px\n  height: 450, // integer default = 450px\n  initial: 30, // integer default = 30px (initial position for slider in px)\n  filter: {\n    active: true, // boolean\n    effect:\n      'grayscale(200%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */,\n  },\n}\n\nconst optionsSecondSlider = {\n  // are optional\n  tooltips: true, // boolean\n  direction: 'horizontal', // string horizontal & vertical\n  width: 700, // integer default = 700px\n  height: 450, // integer default = 450px\n  initial: 30, // integer default = 30px (initial position for slider in px)\n  filter: {\n    active: true, // boolean\n    effect:\n      'sepia(50%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */,\n  },\n}\n\nconst firstSlider = new _src_cato__WEBPACK_IMPORTED_MODULE_0__[\"default\"](optionsFirstSlider)\n\nfirstSlider.createSlider(document.getElementById('first-slider'))\n\nconst secondSlider = new _src_cato__WEBPACK_IMPORTED_MODULE_0__[\"default\"](optionsSecondSlider)\n\nsecondSlider.createSlider(document.getElementById('second-slider'))\n\n\n//# sourceURL=webpack:///./examples/webpack/index.js?");

/***/ }),

/***/ "./src/cato.js":
/*!*********************!*\
  !*** ./src/cato.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cato; });\n/* harmony import */ var _util_setInsetDirection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/setInsetDirection.js */ \"./src/util/setInsetDirection.js\");\n\n// Compare Apples To Oranges\n\n\n\nclass Cato {\n  constructor(options) {\n    this.options = {\n      tooltips: options.tooltips || false,\n      direction: options.direction || 'horizontal',\n      width: options.width || 700,\n      height: options.height || 450,\n      initial: options.initial || 30,\n      filter: {\n        active: options.filter.active || false,\n        effect: options.filter.effect || null,\n      },\n    }\n  }\n\n  createSlider(el) {\n    const container = el\n    const containerInner = container.children\n    const imgToSlide = containerInner[0]\n    const imgBase = containerInner[1]\n    const range = containerInner[2]\n    const output = containerInner[3]\n    const outputTriangle = containerInner[4]\n    const self = this\n\n    // INITIAL STYLINGS\n    addClass(container, 'comparison')\n    addClass(range, 'cato_inner')\n    addClass(range, 'rangeindicator')\n    addClass(output, 'indicator_bubble')\n    addClass(outputTriangle, 'indicator_triangle')\n    container.style.height = self.options.height + 50 + 'px'\n    imgBase.style.width = self.options.width + 'px'\n    imgBase.style.height = self.options.height + 'px'\n    imgToSlide.style.width = self.options.width + 'px'\n    imgToSlide.style.height = self.options.height + 'px'\n    range.style.top = imgBase.getBoundingClientRect().height + 'px'\n    range.style.width = imgBase.width + 'px'\n    output.style.top = imgBase.getBoundingClientRect().height - 40 + 'px'\n    outputTriangle.style.top =\n      imgBase.getBoundingClientRect().height - 15 + 'px'\n    range.value = self.options.initial\n\n    // initial overlap\n\n    const initialClip =\n      self.options.direction === 'horizontal'\n        ? (imgBase.width * self.options.initial) / 100\n        : (imgBase.height * self.options.initial) / 100\n    imgBase.style.clipPath = Object(_util_setInsetDirection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      self.options.direction,\n      initialClip,\n    )\n\n    // flip input range and adjust to the side if vertical\n    if (self.options.direction === 'vertical') {\n      range.style.transform = 'rotate(90deg)'\n      range.style.width = imgBase.getBoundingClientRect().height + 'px'\n      range.style.left =\n        imgBase.getBoundingClientRect().right -\n        range.getBoundingClientRect().left +\n        7 +\n        'px'\n      range.style.top = imgBase.getBoundingClientRect().height / 2 + 'px'\n      range.style.margin = '-1px 3px 1px'\n    }\n\n    // Applying Filters if any\n    if (self.options.filter.active) {\n      imgToSlide.style.filter = self.options.filter.effect\n    }\n\n    // EVENT REGISTRATIONS\n\n    range.addEventListener('input', function() {\n      handleSlides(self)\n    })\n\n    if (self.options.tooltips) {\n      range.addEventListener('focus', function() {\n        handleFocus()\n      })\n\n      range.addEventListener('blur', function() {\n        handleBlur()\n      })\n    }\n\n    // EVENT HANDLERS\n\n    const handleSlides = function(self) {\n      const width = imgBase.width\n      const height = imgBase.getBoundingClientRect().height\n      const slidedWith =\n        self.options.direction === 'horizontal'\n          ? (width * range.value) / 100\n          : (height * range.value) / 100\n\n      imgBase.style.clipPath = Object(_util_setInsetDirection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        self.options.direction,\n        slidedWith,\n      )\n      output.style.left = slidedWith + 'px'\n      outputTriangle.style.left = slidedWith + 'px'\n\n      if (self.options.direction === 'vertical') {\n        output.style.left =\n          imgBase.getBoundingClientRect().right -\n          range.getBoundingClientRect().left -\n          45 +\n          'px'\n        outputTriangle.style.left =\n          imgBase.getBoundingClientRect().right -\n          range.getBoundingClientRect().left -\n          22 +\n          'px'\n        output.style.top = slidedWith - 10 + 'px'\n        outputTriangle.style.top = slidedWith + 'px'\n        outputTriangle.style.transform = 'rotate(-90deg)'\n      }\n\n      output.setAttribute('data-range', range.value.toString(10))\n    }\n\n    const handleFocus = function() {\n      addClass(output, 'active')\n      addClass(outputTriangle, 'active')\n    }\n\n    const handleBlur = function() {\n      removeClass(output, 'active')\n      removeClass(outputTriangle, 'active')\n    }\n  }\n}\n\n// HELPERS\n\nconst addClass = function(el, className) {\n  // see youmightnotneedjquery.com\n  if (el.classList) {\n    el.classList.add(className)\n  } else {\n    el.className += ' ' + className\n  }\n}\n\nconst removeClass = function(el, className) {\n  // see youmightnotneedjquery.com\n  if (el.classList) {\n    el.classList.remove(className)\n  } else {\n    el.className = el.className.replace(\n      new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'),\n      ' ',\n    )\n  }\n}\n\n\n//# sourceURL=webpack:///./src/cato.js?");

/***/ }),

/***/ "./src/util/setInsetDirection.js":
/*!***************************************!*\
  !*** ./src/util/setInsetDirection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setInsetDirection = function(direction, val) {\n  if (direction === 'horizontal') {\n    return 'inset(0px 0px 0px ' + val + 'px)'\n  } else if (direction === 'vertical') {\n    return 'inset(' + val + 'px 0px 0px 0px)'\n  } else {\n    throw new Error('Direction must be either horizontal or vertical')\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setInsetDirection);\n\n\n//# sourceURL=webpack:///./src/util/setInsetDirection.js?");

/***/ })

/******/ });