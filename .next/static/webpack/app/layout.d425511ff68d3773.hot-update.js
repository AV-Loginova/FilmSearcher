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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b56f4df13121\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzdiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiNTZmNGRmMTMxMjFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Header/NavInput.tsx":
/*!********************************************!*\
  !*** ./app/components/Header/NavInput.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavInput() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hint, setHint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            setInput(\"\");\n            route.push(\"/\".concat(input));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (input) {\n                // Добавьте проверку, чтобы не делать запрос, если input пустой\n                const res = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(input));\n                const data = await res.json();\n                console.log(data);\n                setHint(data);\n            }\n        };\n        fetchData();\n    }, [\n        input\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: input,\n                onChange: handleChange,\n                onKeyDown: handleKeyDown,\n                type: \"text\",\n                placeholder: \"Search\",\n                className: \"input input-bordered w-[250px] md:w-auto\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:bg-[#414557] bg-[#F8F8F2] md:w-[215px] w-[250px]  h-[auto] rounded-[10px] p-2 \\n        text-center absolute  top-[65px] \".concat(input === \"\" && \"hidden\"),\n                children: (hint === null || hint === void 0 ? void 0 : hint.Response) !== \"False\" ? \"\".concat(hint === null || hint === void 0 ? void 0 : hint.Title, \", \").concat(hint === null || hint === void 0 ? void 0 : hint.Year) : \"Film not found\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(NavInput, \"Bai/SqTQQRQbY5g+rmM0ATf6pEA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavInput);\nvar _c;\n$RefreshReg$(_c, \"NavInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9OYXZJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNPO0FBRW5ELFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sUUFBUVQsMERBQVNBO0lBRXZCLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJMLFNBQVNLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUNBLE1BQU1DLGdCQUFnQixDQUFDSDtRQUNyQixJQUFJQSxFQUFFSSxHQUFHLEtBQUssU0FBUztZQUNyQlQsU0FBUztZQUNURyxNQUFNTyxJQUFJLENBQUMsSUFBVSxPQUFOWDtRQUNqQjtJQUNGO0lBRUFGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsWUFBWTtZQUNoQixJQUFJWixPQUFPO2dCQUNULCtEQUErRDtnQkFDL0QsTUFBTWEsTUFBTSxNQUFNQyxNQUNoQiw4Q0FBb0QsT0FBTmQ7Z0JBRWhELE1BQU1lLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtnQkFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7Z0JBQ1paLFFBQVFZO1lBQ1Y7UUFDRjtRQUNBSDtJQUNGLEdBQUc7UUFBQ1o7S0FBTTtJQUVWLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNwQjtnQkFDQ1EsT0FBT1I7Z0JBQ1BxQixVQUFVaEI7Z0JBQ1ZpQixXQUFXYjtnQkFDWGMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRDtnQkFDQ0MsV0FBVywrSEFDaUQsT0FBekJwQixVQUFVLE1BQU07MEJBRWxERSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU11QixRQUFRLE1BQUssVUFDaEIsVUFBR3ZCLGlCQUFBQSwyQkFBQUEsS0FBTXdCLEtBQUssRUFBQyxNQUFlLE9BQVh4QixpQkFBQUEsMkJBQUFBLEtBQU15QixJQUFJLElBQzdCOzs7Ozs7Ozs7Ozs7QUFJWjtHQWxEUzVCOztRQUdPSixzREFBU0E7OztLQUhoQkk7QUFvRFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL05hdklucHV0LnRzeD8yZDhkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTmF2SW5wdXQoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2hpbnQsIHNldEhpbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0SW5wdXQoXCJcIik7XG4gICAgICByb3V0ZS5wdXNoKGAvJHtpbnB1dH1gKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgLy8g0JTQvtCx0LDQstGM0YLQtSDQv9GA0L7QstC10YDQutGDLCDRh9GC0L7QsdGLINC90LUg0LTQtdC70LDRgtGMINC30LDQv9GA0L7RgSwg0LXRgdC70LggaW5wdXQg0L/Rg9GB0YLQvtC5XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTU3YThjNWM3JnQ9JHtpbnB1dH1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0SGludChkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbaW5wdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1bMjUwcHhdIG1kOnctYXV0b1wiXG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtZDpiZy1bIzQxNDU1N10gYmctWyNGOEY4RjJdIG1kOnctWzIxNXB4XSB3LVsyNTBweF0gIGgtW2F1dG9dIHJvdW5kZWQtWzEwcHhdIHAtMiBcbiAgICAgICAgdGV4dC1jZW50ZXIgYWJzb2x1dGUgIHRvcC1bNjVweF0gJHtpbnB1dCA9PT0gXCJcIiAmJiBcImhpZGRlblwifWB9XG4gICAgICA+XG4gICAgICAgIHtoaW50Py5SZXNwb25zZSAhPT0gXCJGYWxzZVwiXG4gICAgICAgICAgPyBgJHtoaW50Py5UaXRsZX0sICR7aGludD8uWWVhcn1gXG4gICAgICAgICAgOiBcIkZpbG0gbm90IGZvdW5kXCJ9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2SW5wdXQ7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdklucHV0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImhpbnQiLCJzZXRIaW50Iiwicm91dGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHVzaCIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJSZXNwb25zZSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header/NavInput.tsx\n"));

/***/ })

});