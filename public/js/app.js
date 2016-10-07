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

eval("//console.log('hello friday');\n\n//\"use strict\";\n\n//console.log(this); // this = Window\n\n//this is a script: objecte\n\nvar showFullName = function() {\n    console.log(this.firstname + \" \" + this.sn1 + \" \" + arguments[0])\n}\n\nvar name = \"Pedro\";\n\n\nvar person =  {\n\n    firstname: name,\n    sn1 :\"Martinez\",\n    fullname: showFullName\n\n\n    // showFullName:function () {\n    //\n    //     console.log (this.firstname + \" \" + this.sn1);\n    // }\n};\n\nperson.showFullName(); //Pedro Martinez\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vY29uc29sZS5sb2coJ2hlbGxvIGZyaWRheScpO1xuXG4vL1widXNlIHN0cmljdFwiO1xuXG4vL2NvbnNvbGUubG9nKHRoaXMpOyAvLyB0aGlzID0gV2luZG93XG5cbi8vdGhpcyBpcyBhIHNjcmlwdDogb2JqZWN0ZVxuXG52YXIgc2hvd0Z1bGxOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5maXJzdG5hbWUgKyBcIiBcIiArIHRoaXMuc24xICsgXCIgXCIgKyBhcmd1bWVudHNbMF0pXG59XG5cbnZhciBuYW1lID0gXCJQZWRyb1wiO1xuXG5cbnZhciBwZXJzb24gPSAge1xuXG4gICAgZmlyc3RuYW1lOiBuYW1lLFxuICAgIHNuMSA6XCJNYXJ0aW5lelwiLFxuICAgIGZ1bGxuYW1lOiBzaG93RnVsbE5hbWVcblxuXG4gICAgLy8gc2hvd0Z1bGxOYW1lOmZ1bmN0aW9uICgpIHtcbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZyAodGhpcy5maXJzdG5hbWUgKyBcIiBcIiArIHRoaXMuc24xKTtcbiAgICAvLyB9XG59O1xuXG5wZXJzb24uc2hvd0Z1bGxOYW1lKCk7IC8vUGVkcm8gTWFydGluZXpcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);