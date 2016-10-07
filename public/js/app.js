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

eval("//funcions constructores\n\n// function Persona(){\n//\n//     console.log('Creant un objecte');\n//\n// }\n\n\nvar Persona = function () {\n    this.name = name;\n    console.log('Creant un objecte');\n\n}\n\nPersona.prototype.sayHello = function(){\n\n    console.log('Heeeello ' + this.name);\n} //canviar la extensió...\n\nconsole.log(Persona);\n\nvar personeta1 = new Persona('prova1');\nvar personeta2 = new Persona('prova2');\nvar personeta3 = new Persona('prova3');\n\nconsole.log(personeta1.name);\nconsole.log(personeta1.sayHello());\nconsole.log(personeta2.name);\nconsole.log(personeta2.sayHello());\nconsole.log(personeta3.name);\nconsole.log(personeta3.sayHello());\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vZnVuY2lvbnMgY29uc3RydWN0b3Jlc1xuXG4vLyBmdW5jdGlvbiBQZXJzb25hKCl7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKCdDcmVhbnQgdW4gb2JqZWN0ZScpO1xuLy9cbi8vIH1cblxuXG52YXIgUGVyc29uYSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGNvbnNvbGUubG9nKCdDcmVhbnQgdW4gb2JqZWN0ZScpO1xuXG59XG5cblBlcnNvbmEucHJvdG90eXBlLnNheUhlbGxvID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnNvbGUubG9nKCdIZWVlZWxsbyAnICsgdGhpcy5uYW1lKTtcbn0gLy9jYW52aWFyIGxhIGV4dGVuc2nDsy4uLlxuXG5jb25zb2xlLmxvZyhQZXJzb25hKTtcblxudmFyIHBlcnNvbmV0YTEgPSBuZXcgUGVyc29uYSgncHJvdmExJyk7XG52YXIgcGVyc29uZXRhMiA9IG5ldyBQZXJzb25hKCdwcm92YTInKTtcbnZhciBwZXJzb25ldGEzID0gbmV3IFBlcnNvbmEoJ3Byb3ZhMycpO1xuXG5jb25zb2xlLmxvZyhwZXJzb25ldGExLm5hbWUpO1xuY29uc29sZS5sb2cocGVyc29uZXRhMS5zYXlIZWxsbygpKTtcbmNvbnNvbGUubG9nKHBlcnNvbmV0YTIubmFtZSk7XG5jb25zb2xlLmxvZyhwZXJzb25ldGEyLnNheUhlbGxvKCkpO1xuY29uc29sZS5sb2cocGVyc29uZXRhMy5uYW1lKTtcbmNvbnNvbGUubG9nKHBlcnNvbmV0YTMuc2F5SGVsbG8oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);