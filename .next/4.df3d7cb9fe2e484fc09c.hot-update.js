webpackHotUpdate(4,{

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
var _jsxFileName = 'C:\\Users\\hadas\\Documents\\Workspace\\HADAS-hello-nextjs\\pages\\about.js';


(function () {
   var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

   enterModule && enterModule(module);
})();



var _default = function _default() {
   return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__["a" /* default */],
      {
         __source: {
            fileName: _jsxFileName,
            lineNumber: 4
         }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
         'p',
         {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 5
            }
         },
         'This is the about page'
      )
   );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
   var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

   var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

   if (!reactHotLoader) {
      return;
   }

   reactHotLoader.register(_default, 'default', 'C:/Users/hadas/Documents/Workspace/HADAS-hello-nextjs/pages/about.js');
   leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.df3d7cb9fe2e484fc09c.hot-update.js.map