/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("//console.log('hello friday');\n\n//\"use strict\";\n\n//console.log(this); // this = Window\n\n//this is a script: objecte\n\nvar person =  {\n\n    firstname :\"Pedro\",\n    lastname :\"Martinez\",\n\n\n    showFullName:function () {\n\n        console.log (this.firstname + \" \" + this.lastname);\n    }\n};\n\nperson.showFullName(); //Pedro Martinez//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vY29uc29sZS5sb2coJ2hlbGxvIGZyaWRheScpO1xuXG4vL1widXNlIHN0cmljdFwiO1xuXG4vL2NvbnNvbGUubG9nKHRoaXMpOyAvLyB0aGlzID0gV2luZG93XG5cbi8vdGhpcyBpcyBhIHNjcmlwdDogb2JqZWN0ZVxuXG52YXIgcGVyc29uID0gIHtcblxuICAgIGZpcnN0bmFtZSA6XCJQZWRyb1wiLFxuICAgIGxhc3RuYW1lIDpcIk1hcnRpbmV6XCIsXG5cblxuICAgIHNob3dGdWxsTmFtZTpmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2cgKHRoaXMuZmlyc3RuYW1lICsgXCIgXCIgKyB0aGlzLmxhc3RuYW1lKTtcbiAgICB9XG59O1xuXG5wZXJzb24uc2hvd0Z1bGxOYW1lKCk7IC8vUGVkcm8gTWFydGluZXpcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);