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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"264a9fe5c51d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzdiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyNjRhOWZlNWM1MWRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Header/NavInput.tsx":
/*!********************************************!*\
  !*** ./app/components/Header/NavInput.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavInput() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hint, setHint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            setInput(\"\");\n            route.push(\"/\".concat(input));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (input) {\n                // Добавьте проверку, чтобы не делать запрос, если input пустой\n                const res = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(input));\n                const data = await res.json();\n                console.log(data);\n                setHint(data);\n            }\n        };\n        fetchData();\n    }, [\n        input\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: input,\n                onChange: handleChange,\n                onKeyDown: handleKeyDown,\n                type: \"text\",\n                placeholder: \"Search\",\n                className: \"input input-bordered w-[250px] md:w-auto\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#414557] w-[215px] h-[auto] rounded-[10px] p-2 \\n        text-center absolute md:w-[300px] top-[65px] \".concat(input === \"\" && \"hidden\"),\n                children: (hint === null || hint === void 0 ? void 0 : hint.Response) !== \"False\" ? \"\".concat(hint === null || hint === void 0 ? void 0 : hint.Title, \", \").concat(hint === null || hint === void 0 ? void 0 : hint.Year) : \"Film not found\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(NavInput, \"Bai/SqTQQRQbY5g+rmM0ATf6pEA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavInput);\nvar _c;\n$RefreshReg$(_c, \"NavInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9OYXZJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNPO0FBRW5ELFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sUUFBUVQsMERBQVNBO0lBRXZCLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJMLFNBQVNLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLE1BQU1DLGdCQUFnQixDQUFDSDtRQUNyQixJQUFJQSxFQUFFSSxHQUFHLEtBQUssU0FBUztZQUNyQlQsU0FBUztZQUNURyxNQUFNTyxJQUFJLENBQUMsSUFBVSxPQUFOWDtRQUNqQjtJQUNGO0lBRUFGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsWUFBWTtZQUNoQixJQUFJWixPQUFPO2dCQUNULCtEQUErRDtnQkFDL0QsTUFBTWEsTUFBTSxNQUFNQyxNQUNoQiw4Q0FBb0QsT0FBTmQ7Z0JBRWhELE1BQU1lLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtnQkFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7Z0JBQ1paLFFBQVFZO1lBQ1Y7UUFDRjtRQUNBSDtJQUNGLEdBQUc7UUFBQ1o7S0FBTTtJQUVWLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNwQjtnQkFDQ1EsT0FBT1I7Z0JBQ1BxQixVQUFVaEI7Z0JBQ1ZpQixXQUFXYjtnQkFDWGMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRDtnQkFDQ0MsV0FBVyw2R0FHVixPQURDcEIsVUFBVSxNQUFNOzBCQUdqQkUsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNdUIsUUFBUSxNQUFLLFVBQ2hCLFVBQUd2QixpQkFBQUEsMkJBQUFBLEtBQU13QixLQUFLLEVBQUMsTUFBZSxPQUFYeEIsaUJBQUFBLDJCQUFBQSxLQUFNeUIsSUFBSSxJQUM3Qjs7Ozs7Ozs7Ozs7O0FBSVo7R0FwRFM1Qjs7UUFHT0osc0RBQVNBOzs7S0FIaEJJO0FBc0RULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9OYXZJbnB1dC50c3g/MmQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE5hdklucHV0KCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtoaW50LCBzZXRIaW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHNldElucHV0KFwiXCIpO1xuICAgICAgcm91dGUucHVzaChgLyR7aW5wdXR9YCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIC8vINCU0L7QsdCw0LLRjNGC0LUg0L/RgNC+0LLQtdGA0LrRgywg0YfRgtC+0LHRiyDQvdC1INC00LXQu9Cw0YLRjCDQt9Cw0L/RgNC+0YEsINC10YHQu9C4IGlucHV0INC/0YPRgdGC0L7QuVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01N2E4YzVjNyZ0PSR7aW5wdXR9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldEhpbnQoZGF0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW2lucHV0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTFcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctWzI1MHB4XSBtZDp3LWF1dG9cIlxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgYmctWyM0MTQ1NTddIHctWzIxNXB4XSBoLVthdXRvXSByb3VuZGVkLVsxMHB4XSBwLTIgXG4gICAgICAgIHRleHQtY2VudGVyIGFic29sdXRlIG1kOnctWzMwMHB4XSB0b3AtWzY1cHhdICR7XG4gICAgICAgICAgaW5wdXQgPT09IFwiXCIgJiYgXCJoaWRkZW5cIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAge2hpbnQ/LlJlc3BvbnNlICE9PSBcIkZhbHNlXCJcbiAgICAgICAgICA/IGAke2hpbnQ/LlRpdGxlfSwgJHtoaW50Py5ZZWFyfWBcbiAgICAgICAgICA6IFwiRmlsbSBub3QgZm91bmRcIn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZJbnB1dDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2SW5wdXQiLCJpbnB1dCIsInNldElucHV0IiwiaGludCIsInNldEhpbnQiLCJyb3V0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJwdXNoIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlJlc3BvbnNlIiwiVGl0bGUiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header/NavInput.tsx\n"));

/***/ })

});