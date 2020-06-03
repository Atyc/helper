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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const dummyData = [{
    state: 'processing',
    errorCode: ''
}, {
    state: 'error',
    errorCode: ''
}];

const errorPage = errorCode => {
    let errorPageContent;
    switch (errorCode) {
        case 'NO_STOCK':
            errorPageContent = {
                title: 'Error page',
                message: 'No stock has been found'
            };
            break;
        case 'INCORRECT_DETAILS':
            errorPageContent = {
                title: 'Error page',
                message: 'Incorrect details have been entered'
            };
            break;
        default:
            errorPageContent = {
                title: 'Error page',
                message: null
            };
    };
    return errorPageContent;
};

const delay = ms => new Promise(res => setTimeout(res, ms));

const getProcessingPage = async inputData => {
    let outputData;
    for (const el of inputData) {
        switch (el.state) {
            case 'processing':
                console.log('waiting...');
                await delay(2000);
                break;
            case 'error':
                outputData = errorPage(el.errorCode);
                break;
            case 'success':
                outputData = {
                    title: 'Order complete',
                    message: null
                };
                break;
        };
    };
    return outputData;
};
const result = getProcessingPage(dummyData);
result.then(value => {
    console.log(value);
});

/***/ })
/******/ ]);