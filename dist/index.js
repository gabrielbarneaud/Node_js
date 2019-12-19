(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.js\");\n\r\n\r\nObject(_src__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/db/comment.js":
/*!***************************!*\
  !*** ./src/db/comment.js ***!
  \***************************/
/*! exports provided: commentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"commentModel\", function() { return commentModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst commentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n    date: Date,\r\n    title: String,\r\n    text: String,\r\n    food_code: Number,\r\n})\r\n\r\nconst commentModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('comment', commentSchema, 'comments')\n\n//# sourceURL=webpack:///./src/db/comment.js?");

/***/ }),

/***/ "./src/db/food.js":
/*!************************!*\
  !*** ./src/db/food.js ***!
  \************************/
/*! exports provided: foodModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foodModel\", function() { return foodModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst foodSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\r\n    name: String,\r\n    brand: String,\r\n    bar_code: Number,\r\n    grade: Number,\r\n    pictures: [String],\r\n    ingredients: [Object]\r\n})\r\n\r\nconst foodModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', foodSchema, 'products')\n\n//# sourceURL=webpack:///./src/db/food.js?");

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: db, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst connect = () => {\r\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost:27017/yuka-miw',\r\n        {autoReconnect: true, useNewUrlParser: true })\r\n}\r\n\r\nlet db\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() =>{\r\n    return new Promise((resolve,reject) => {\r\n        db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection\r\n\r\n        db.on('connecting', () =>{\r\n            console.log('Connexion à Mongo... ')\r\n        })\r\n\r\n        db.on('error', (err) => {\r\n            mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.disconnect()\r\n            reject(err)\r\n            throw new Error('database error')\r\n        })\r\n\r\n        db.once('open', () => {\r\n            console.log('Connecté à Mongo !')\r\n            resolve()\r\n        })\r\n\r\n        db.on('disconnected', () => {\r\n            setTimeout(() => {\r\n            try {\r\n                connect()\r\n            } catch (err) {\r\n                throw new Error('Cannot reconnect')\r\n            }\r\n            }, 5000)\r\n        })\r\n        connect()\r\n})\r\n});\n\n//# sourceURL=webpack:///./src/db/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/db/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => {\r\n    try {\r\n        const app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\n        await Object(_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({extended: true}))\r\n        Object(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(app)\r\n\r\n        app.listen(3000, () => {\r\n            console.log(\"development\")\r\n        })\r\n    } catch(e) {\r\n        console.error(e)\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/food */ \"./src/db/food.js\");\n/* harmony import */ var _db_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/comment */ \"./src/db/comment.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((app) => {\r\n    app.get('/', async (req, res) => {\r\n        try {\r\n            const products = await _db_food__WEBPACK_IMPORTED_MODULE_0__[\"foodModel\"].find();\r\n            res.status(200).json(products);\r\n        } catch (err){\r\n            console.log(err.message);\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error resquesting products !'\r\n            })\r\n        }\r\n    });\r\n\r\n    app.get('/product/:bar_code', async (req,res) => {\r\n        const barCode = req.params.bar_code\r\n        try {\r\n            const product = await _db_food__WEBPACK_IMPORTED_MODULE_0__[\"foodModel\"].findOne({bar_code: barCode});\r\n            if (product)\r\n                res.status(200).json(product);\r\n            else {\r\n                res.status(404).json({\r\n                    'error': true,\r\n                    'message': `No product with barcode ${barCode} found ..`\r\n                })\r\n            }\r\n        } catch (err){\r\n            console.log(err.message);\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': `Error resquesting product ${barCode} !`\r\n            })\r\n        }\r\n    })\r\n\r\n    app.post('/comment/:food_code', async (req,res) => {\r\n        const food_code = req.params.food_code\r\n        const product = await _db_food__WEBPACK_IMPORTED_MODULE_0__[\"foodModel\"].findOne({bar_code: food_code});\r\n        if (product)\r\n            res.status(200).json(product);\r\n        else {\r\n            return(res.status(404).json({\r\n                'error': true,\r\n                'message': `No product with barcode ${food_code} found ..`\r\n            }))\r\n        }\r\n        try{\r\n            const{date,title,text} = req.body\r\n            const request = new _db_comment__WEBPACK_IMPORTED_MODULE_1__[\"commentModel\"]({date,title,text,food_code})\r\n            const inserted = await request.save()\r\n\r\n            if (inserted && inserted._id) {\r\n                //insertion OK\r\n                return res.json(inserted)\r\n            }\r\n            else {\r\n                //insertion pas OK\r\n                return res.status(500).json({\r\n                    status: 'fail',\r\n                    message: 'Le commentaire n a pas pu être inséré'\r\n                })\r\n            }\r\n        }catch(err) {\r\n            console.log(err.message)\r\n\r\n            return res.status(500).json({\r\n                error: 'true',\r\n                message: 'Error inserting new comment'\r\n            })\r\n        }\r\n    })\r\n\r\n    app.post('/product', async (req,res) => {\r\n        try{\r\n            const {name,brand,bar_code,grade,quantity,pictures,ingredients} = req.body\r\n\r\n            //préparation de la requête d'enregistrement\r\n            const request = new _db_food__WEBPACK_IMPORTED_MODULE_0__[\"foodModel\"]({name,brand,bar_code,grade, quantity,pictures,ingredients})\r\n\r\n            const inserted = await request.save()\r\n\r\n            if (inserted && inserted._id) {\r\n                //insertion OK\r\n                return res.json(inserted)\r\n            }\r\n            else {\r\n                //insertion pas OK\r\n                return res.status(500).json({\r\n                    status: 'fail',\r\n                    message: 'Le produit n a pas pu être insérée'\r\n                })\r\n            }\r\n        } catch(err) {\r\n            console.log(err.message)\r\n\r\n            return res.status(500).json({\r\n                error: 'true',\r\n                message: 'Error inserting new product'\r\n            })\r\n        }\r\n    })\r\n\r\n    app.get('/comments/:food_code', async (req,res) => {\r\n        const food_code = req.params.food_code\r\n        try {\r\n            const comments = await _db_comment__WEBPACK_IMPORTED_MODULE_1__[\"commentModel\"].find({food_code: food_code});\r\n            res.status(200).json(comments);\r\n        } catch (err){\r\n            console.log(err.message);\r\n            return res.status(500).json({\r\n                'error': true,\r\n                'message': 'Error resquesting comments !'\r\n            })\r\n        }\r\n    })\r\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ })));