webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\nvar _jsxFileName = \"/Users/macpro/Desktop/nextjs-simple-portafolio/pages/blog.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PostCard = function PostCard(_ref) {\n  var post = _ref.post;\n  return __jsx(\"div\", {\n    className: \"col-md-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card bg-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"overflow\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: post.imageUrl,\n    alt: \"\",\n    className: \"card-img-top\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, post.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, post.content), __jsx(\"button\", {\n    className: \"btn btn-dark text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"Read More!!\"))));\n};\n\n_c = PostCard;\n\nvar Blog = function Blog() {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    footer: false,\n    title: \"My Blog\",\n    dark: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, _profile__WEBPACK_IMPORTED_MODULE_2__[\"posts\"].map(function (post, i) {\n    return __jsx(PostCard, {\n      post: post,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    });\n  })));\n};\n\n_c2 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c2, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz82MWI4Il0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImltYWdlVXJsIiwidGl0bGUiLCJjb250ZW50IiwiQmxvZyIsInBvc3RzIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxTQUNiO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFQSxJQUFJLENBQUNDLFFBQWY7QUFBeUIsT0FBRyxFQUFDLEVBQTdCO0FBQWdDLGFBQVMsRUFBQyxjQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0QsSUFBSSxDQUFDRSxLQUFWLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlGLElBQUksQ0FBQ0csT0FBVCxDQUZKLEVBR0k7QUFBUSxhQUFTLEVBQUMsMEJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosQ0FKSixDQURKLENBRGE7QUFBQSxDQUFqQjs7S0FBTUosUTs7QUFlTixJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBRVQsTUFBQywwREFBRDtBQUFRLFVBQU0sRUFBRSxLQUFoQjtBQUF1QixTQUFLLEVBQUMsU0FBN0I7QUFBdUMsUUFBSSxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFDLDhDQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDTixJQUFELEVBQU9PLENBQVA7QUFBQSxXQUNOLE1BQUMsUUFBRDtBQUFVLFVBQUksRUFBRVAsSUFBaEI7QUFBc0IsU0FBRyxFQUFFTyxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRE07QUFBQSxHQUFWLENBRlIsQ0FESixDQUZTO0FBQUEsQ0FBYjs7TUFBTUgsSTtBQWNTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHtwb3N0c30gZnJvbSAnLi4vcHJvZmlsZSdcblxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgYmctbGlnaHQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93Jz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFyayB0ZXh0LWNlbnRlcic+UmVhZCBNb3JlISE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuY29uc3QgQmxvZyA9ICgpID0+IChcblxuICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9XCJNeSBCbG9nXCIgZGFyaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdHMubWFwKChwb3N0LCBpKSA9PiAoICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17aX0gIC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})