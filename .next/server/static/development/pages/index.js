module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var href = _ref.href,
      text = _ref.text,
      bgColor = _ref.bgColor,
      btnType = _ref.btnType,
      btnIcon = _ref.btnIcon,
      hrefAs = _ref.hrefAs;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      backgroundColor: bgColor
    },
    type: btnType,
    icon: btnIcon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: hrefAs
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: "inherit",
      marginLeft: btnIcon && "10px"
    }
  }, text)));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var centerColumn = _ref.centerColumn,
      rightColumn = _ref.rightColumn,
      leftColumn = _ref.leftColumn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    theme: "dark",
    style: {
      backgroundColor: "#F0F2F5",
      marginBottom: "25px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    style: {
      textAlign: "left"
    }
  }, leftColumn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    style: {
      textAlign: "center",
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, centerColumn), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 6,
    style: {
      textAlign: "right"
    }
  }, rightColumn)));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);






var Content = antd__WEBPACK_IMPORTED_MODULE_5__["Layout"].Content;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Home | Sean Store")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    centerColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Sean Store"),
    rightColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/cart",
      text: "Cart",
      btnIcon: "shopping-cart"
    }),
    leftColumn: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/search",
      text: "Search",
      btnIcon: "search"
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    style: {
      padding: "0 50px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "grid",
      gridGap: "10px",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      width: "100%"
    },
    className: "jsx-2085888330"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/category?name=men",
    hrefAs: "/category/men",
    text: "Men"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/category?name=men",
    hrefAs: "/category/men",
    text: "Women"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/category?name=men",
    hrefAs: "/category/men",
    text: "Shoes"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/category?name=men",
    hrefAs: "/category/men",
    text: "Suits"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/category?name=men",
    hrefAs: "/category/men",
    text: "Dresses"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2085888330",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWJla2FocGFyay9EZXNrdG9wL1Byb2plY3RzMy9lQ29tbWVyY2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQiIsImZpbGUiOiIvVXNlcnMvcmViZWthaHBhcmsvRGVza3RvcC9Qcm9qZWN0czMvZUNvbW1lcmNlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGRhdGEgfSkgPT4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWUgfCBTZWFuIFN0b3JlPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlclxuICAgICAgY2VudGVyQ29sdW1uPXs8aDQ+U2VhbiBTdG9yZTwvaDQ+fVxuICAgICAgcmlnaHRDb2x1bW49e1xuICAgICAgICA8QnV0dG9uIGhyZWY9XCIvY2FydFwiIHRleHQ9XCJDYXJ0XCIgYnRuSWNvbj17XCJzaG9wcGluZy1jYXJ0XCJ9IC8+XG4gICAgICB9XG4gICAgICBsZWZ0Q29sdW1uPXs8QnV0dG9uIGhyZWY9XCIvc2VhcmNoXCIgdGV4dD1cIlNlYXJjaFwiIGJ0bkljb249e1wic2VhcmNoXCJ9IC8+fVxuICAgIC8+XG4gICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogXCIwIDUwcHhcIiB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaHJlZj17YC9jYXRlZ29yeT9uYW1lPW1lbmB9XG4gICAgICAgICAgaHJlZkFzPXtgL2NhdGVnb3J5L21lbmB9XG4gICAgICAgICAgdGV4dD17XCJNZW5cIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnk/bmFtZT1tZW5gfVxuICAgICAgICAgIGhyZWZBcz17YC9jYXRlZ29yeS9tZW5gfVxuICAgICAgICAgIHRleHQ9e1wiV29tZW5cIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnk/bmFtZT1tZW5gfVxuICAgICAgICAgIGhyZWZBcz17YC9jYXRlZ29yeS9tZW5gfVxuICAgICAgICAgIHRleHQ9e1wiU2hvZXNcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnk/bmFtZT1tZW5gfVxuICAgICAgICAgIGhyZWZBcz17YC9jYXRlZ29yeS9tZW5gfVxuICAgICAgICAgIHRleHQ9e1wiU3VpdHNcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnk/bmFtZT1tZW5gfVxuICAgICAgICAgIGhyZWZBcz17YC9jYXRlZ29yeS9tZW5gfVxuICAgICAgICAgIHRleHQ9e1wiRHJlc3Nlc1wifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuICAgIDwvQ29udGVudD5cbiAgPC8+XG4pOyJdfQ== */\n/*@ sourceURL=/Users/rebekahpark/Desktop/Projects3/eCommerce/pages/index.js */"
  })));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map