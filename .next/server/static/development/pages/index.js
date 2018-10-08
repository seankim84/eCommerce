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

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexContainer */ "./pages/index/indexContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_indexContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/index/indexContainer.js":
/*!***************************************!*\
  !*** ./pages/index/indexContainer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _indexPresenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexPresenter */ "./pages/index/indexPresenter.js");
/* harmony import */ var _indexQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexQueries */ "./pages/index/indexQueries.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _indexQueries__WEBPACK_IMPORTED_MODULE_3__["INDEX_QUERY"]
  }, function (_ref) {
    var data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_indexPresenter__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data
    });
  });
});

/***/ }),

/***/ "./pages/index/indexPresenter.js":
/*!***************************************!*\
  !*** ./pages/index/indexPresenter.js ***!
  \***************************************/
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
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
  }, data && data.categories && data.categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: category.id,
      href: "/category?name=".concat(category.name.toLowerCase()),
      hrefAs: "/category/".concat(category.name.toLowerCase()),
      text: category.name
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2085888330",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWJla2FocGFyay9EZXNrdG9wL1Byb2plY3RzMy9lQ29tbWVyY2UvcGFnZXMvaW5kZXgvaW5kZXhQcmVzZW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQiIsImZpbGUiOiIvVXNlcnMvcmViZWthaHBhcmsvRGVza3RvcC9Qcm9qZWN0czMvZUNvbW1lcmNlL3BhZ2VzL2luZGV4L2luZGV4UHJlc2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0ICh7ZGF0YX0pID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lIHwgU2VhbiBTdG9yZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXJcbiAgICAgIGNlbnRlckNvbHVtbj17PGg0PlNlYW4gU3RvcmU8L2g0Pn1cbiAgICAgIHJpZ2h0Q29sdW1uPXtcbiAgICAgICAgPEJ1dHRvbiBocmVmPVwiL2NhcnRcIiB0ZXh0PVwiQ2FydFwiIGJ0bkljb249e1wic2hvcHBpbmctY2FydFwifSAvPlxuICAgICAgfVxuICAgICAgbGVmdENvbHVtbj17PEJ1dHRvbiBocmVmPVwiL3NlYXJjaFwiIHRleHQ9XCJTZWFyY2hcIiBidG5JY29uPXtcInNlYXJjaFwifSAvPn1cbiAgICAvPlxuICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6IFwiMCA1MHB4XCIgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSlcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgIGRhdGEuY2F0ZWdvcmllcyAmJiBcbiAgICAgICAgICAgIGRhdGEuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yeT9uYW1lPSR7Y2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICAgICAgICAgIGhyZWZBcz17YC9jYXRlZ29yeS8ke2NhdGVnb3J5Lm5hbWUudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX0gXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG4gICAgPC9Db250ZW50PlxuICA8Lz5cbik7Il19 */\n/*@ sourceURL=/Users/rebekahpark/Desktop/Projects3/eCommerce/pages/index/indexPresenter.js */"
  })));
});

/***/ }),

/***/ "./pages/index/indexQueries.js":
/*!*************************************!*\
  !*** ./pages/index/indexQueries.js ***!
  \*************************************/
/*! exports provided: INDEX_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEX_QUERY", function() { return INDEX_QUERY; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n{\n    categories {\n        id\n        createdAt \n        name\n    }    \n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var INDEX_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/index/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index/index.js */"./pages/index/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

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

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

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