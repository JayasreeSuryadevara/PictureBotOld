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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picturebot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picturebot */ \"./src/picturebot.js\");\n\n\n// Constant to manipulate canvas width and height (square)\nconst CONSTANTS = {\n  SIZE: 400,\n  INTERVAL: 45\n}\n\nlet canvas = document.getElementById('camera');\ncanvas.width = SIZE;\ncanvas.height = SIZE;\n\n\n// Invoke PictureBot with the canvas\nnew _picturebot__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/picturebot.js":
/*!***************************!*\
  !*** ./src/picturebot.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PictureBot; });\n\nvar SIZE = 300;\nvar CANVAS = null;\nvar INTERVAL = 45;\nvar THRESHOLD = 60;\n\nvar OBJECT_PROP = null;\nvar OBSERVATIONS = [];\nvar OBS_COUNT = 0;\nvar DIMENSIONS = 2;    \n\nclass PictureBot {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    CANVAS = canvas;\n    this.getCameraPermissions();\n    this.startEvents();\n  }\n\n  getCameraPermissions() {\n    var constraints = { video: true };\n    var permission = navigator.mediaDevices.getUserMedia(constraints);\n    permission.then((stream) => {\n      var video = document.createElement('video');\n      console.log('Got stream with constraints:', constraints);\n      console.log('Using video device:', video);\n      video.srcObject = stream;\n      video.play();\n      setInterval(updateImage, INTERVAL, video);\n    }\n    ).catch((err) => {\n        alert(\"Cannot access Camera!\");\n      }\n    );\n  }\n\n  startEvents() {\n    const button = document.getElementById(\"button\");\n    button.addEventListener(\"click\" , this.learn());\n    const inputField = document.getElementById(\"image-name\");\n    inputField.addEventListener(\"keyup\", (e) => this.checkKeyPress(e));\n  }\n\n  learn() {\n    var name = document.getElementById(\"image-name\").value;\n    if (name == \"\") {\n      alert(\"Enter a name for this object.\");\n      return;\n    }\n    OBS_COUNT++;\n    OBSERVATIONS[OBS_COUNT] = {\n      name: name,\n      prop: OBJECT_PROP\n    }\n    document.getElementById(\"image-name\").value = \"\";\n  }\n\n  checkKeyPress(event) {\n    if (event.key == \"Enter\") {\n      learn();\n    }\n  }\n\n  processMatrix(matrix) {\n    isolateObject(matrix);\n    var box = getBoundingBox(matrix);\n    var boxProp = getBoxProperties(box);\n\n    var blackPixels = countBlackPixels(matrix);\n    var boxArea = boxProp.width * boxProp.length;\n    var fullness = blackPixels / boxArea;\n\n    OBJECT_PROP = boxProp.aspectRatio;\n\n    OBJECT_PROP = [];\n    OBJECT_PROP[1] = boxProp.aspectRatio;\n    OBJECT_PROP[2] = fullness;\n\n    recognize(OBJECT_PROP);\n\n    updateCanvas(matrix);\n    drawBox(box);\n  }\n\n  countBlackPixels(matrix) {\n    var count = 0;\n    for (var i = 1; i <= SIZE; i++) {\n      for (var j = 1; j <= SIZE; j++) {\n        if (matrix[i][j] == 0) {\n          count++;\n        }\n      }\n    }\n    return count;\n  }\n\n  updateImage(video) {\n    var context = CANVAS.getContext('2d');\n\n    var minSize = Math.min(video.videoWidth, video.videoHeight);\n    var startX = (video.videoWidth - minSize) / 2;\n    var startY = (video.videoHeight - minSize) / 2;\n\n    context.drawImage(video, startX, startY, minSize, minSize, 0, 0, SIZE, SIZE);\n\n    var image = context.getImageData(0, 0, SIZE, SIZE);\n    var matrix = getPixelMatrix(image.data);\n    processMatrix(matrix);\n  }\n\n  recognize(currentObject) {\n    var name;\n    if (OBS_COUNT == 0) {\n      name = '?';\n    } else {\n      var neighbor = getNearestNeighbor(currentObject);\n      name = neighbor.name;\n    }\n    document.getElementById(\"output\").innerHTML = name;\n  }\n\n  getNearestNeighbor(currentObject) {\n    var neighbor = null;\n    var minDist = null;\n    for (var i = 1; i <= OBS_COUNT; i++) {\n      var dist = Math.abs(currentObject - OBSERVATIONS[i].prop);\n      var dist = distance(currentObject, OBSERVATIONS[i].prop);\n      if (minDist == null || minDist > dist) {\n        minDist = dist;\n        neighbor = OBSERVATIONS[i];\n      }\n    }\n    return neighbor;\n  }\n\n  distance(p1, p2) {\n    var dist = 0;\n    for (var i = 1; i <= DIMENSIONS; i++) {\n      dist += (p1[i] - p2[i]) * (p1[i] - p2[i]);\n    }\n    return Math.sqrt(dist);\n  }\n\n  getBoxProperties(box) {\n    var prop = {\n      length: 0,\n      width: 0,\n      aspectRatio: 0\n    }\n\n    var deltaX = box.xMax - box.xMin + 1;\n    var deltaY = box.yMax - box.yMin + 1;\n\n    prop.length = Math.max(deltaX, deltaY);\n    prop.width = Math.min(deltaX, deltaY);\n    prop.aspectRatio = prop.width / prop.length;\n\n    return prop;\n  }\n\n  getBoundingBox(matrix) {\n    var bbox = {\n      xMin: SIZE + 1,\n      xMax: 0,\n      yMin: SIZE + 1,\n      yMax: 0\n    };\n\n    for (var y = 1; y <= SIZE; y++) {\n      for (var x = 1; x <= SIZE; x++) {\n        if (matrix[y][x] == 0) {\n          bbox.yMin = Math.min(y, bbox.yMin);\n          bbox.yMax = Math.max(y, bbox.yMax);\n          bbox.xMin = Math.min(x, bbox.xMin);\n          bbox.xMax = Math.max(x, bbox.xMax);\n        }\n      }\n    }\n\n    return bbox;\n  }\n\n  drawBox(box) {\n    var context = CANVAS.getContext('2d');\n    context.beginPath();\n    var deltaX = box.xMax - box.xMin;\n    var deltaY = box.yMax - box.yMin;\n    context.rect(box.xMin, box.yMin, deltaX, deltaY);\n    context.stroke();\n  }\n\n  isolateObject(matrix) {\n    for (var i = 1; i <= SIZE; i++) {\n      for (var j = 1; j <= SIZE; j++) {\n        if (matrix[i][j] < THRESHOLD) {\n          matrix[i][j] = 0;\n        } else {\n          matrix[i][j] = 255;\n        }\n      }\n    }\n  }\n\n  getPixelMatrix(dataArray) {\n    var matrix = [];\n    for (var i = 1; i <= SIZE; i++) {\n      matrix[i] = [];\n      for (var j = 1; j <= SIZE; j++) {\n        var groupIndex = (i - 1) * SIZE * 4 + (j - 1) * 4;\n        var red = dataArray[groupIndex + 0];\n        var green = dataArray[groupIndex + 1];\n        var blue = dataArray[groupIndex + 2];\n        matrix[i][j] = (red + green + blue) / 3;\n      }\n    }\n    return matrix;\n  }\n\n  updateCanvas(matrix) {\n    var context = CANVAS.getContext('2d');\n    var image = context.getImageData(0, 0, SIZE, SIZE);\n\n    for (var i = 1; i <= SIZE; i++) {\n      for (var j = 1; j <= SIZE; j++) {\n        var groupIndex = (i - 1) * SIZE * 4 + (j - 1) * 4;\n        image.data[groupIndex + 0] = matrix[i][j];\n        image.data[groupIndex + 1] = matrix[i][j];\n        image.data[groupIndex + 2] = matrix[i][j];\n      }\n    }\n\n    context.putImageData(image, 0, 0);\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/picturebot.js?");

/***/ })

/******/ });