"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"aae65230beaa\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzdiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhYWU2NTIzMGJlYWFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navBar.tsx":
/*!***********************************!*\
  !*** ./app/components/navBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavBar() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\") {\n            // Обработка нажатия клавиши Enter\n            console.log(\"Нажата клавиша Enter\");\n        }\n    };\n    function searchMovie(e) {\n        e.preventDefault();\n        setInput(e.target.value);\n        console.log(input);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \" w-[100%] navbar navbar-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"input input-bordered flex items-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: searchMovie,\n                        type: \"text\",\n                        className: \"grow\",\n                        placeholder: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/navBar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 16 16\",\n                        fill: \"currentColor\",\n                        className: \"w-4 h-4 opacity-70\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/navBar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/navBar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/navBar.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/navBar.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/navBar.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"Qv+gEQQmXNRQWqxNkQ9WceweLrw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNKO0FBRXhDLFNBQVNHOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNSSxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8saUJBQWlCLENBQUNDO1FBQ3RCLElBQUlBLE1BQU1DLEdBQUcsS0FBSyxTQUFTO1lBQ3pCLGtDQUFrQztZQUNsQ0MsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLFNBQVNDLFlBQVlDLENBQU07UUFDekJBLEVBQUVDLGNBQWM7UUFDaEJULFNBQVNRLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUN2Qk4sUUFBUUMsR0FBRyxDQUFDUDtJQUNkO0lBQ0EscUJBQ0UsOERBQUNhO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDZDt3QkFDQ2dCLFVBQVVSO3dCQUNWUyxNQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDQyxPQUFNO3dCQUNOQyxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMUixXQUFVO2tDQUVWLDRFQUFDUzs0QkFDQ0MsVUFBUzs0QkFDVEMsR0FBRTs0QkFDRkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWYsOERBQUNDOzs7Ozs7Ozs7OztBQUdQO0dBekNTNUI7O1FBRVFILHNEQUFTQTs7O0tBRmpCRztBQTJDVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9uYXZCYXIudHN4PzcyYzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudDogZSkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC90LDQttCw0YLQuNGPINC60LvQsNCy0LjRiNC4IEVudGVyXG4gICAgICBjb25zb2xlLmxvZyhcItCd0LDQttCw0YLQsCDQutC70LDQstC40YjQsCBFbnRlclwiKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2VhcmNoTW92aWUoZTogYW55KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgdy1bMTAwJV0gbmF2YmFyIG5hdmJhci1lbmRcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17c2VhcmNoTW92aWV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3dcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgb3BhY2l0eS03MFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNOS45NjUgMTEuMDI2YTUgNSAwIDEgMSAxLjA2LTEuMDZsMi43NTUgMi43NTRhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNmwtMi43NTUtMi43NTRaTTEwLjUgN2EzLjUgMy41IDAgMSAxLTcgMCAzLjUgMy41IDAgMCAxIDcgMFpcIlxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZCYXIiLCJpbnB1dCIsInNldElucHV0Iiwicm91dGVyIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hNb3ZpZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImxhYmVsIiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navBar.tsx\n"));

/***/ })

});