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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"fb419a9f50e3\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzdiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmYjQxOWE5ZjUwZTNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Header/NavInput.tsx":
/*!********************************************!*\
  !*** ./app/components/Header/NavInput.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavInput() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hint, setHint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            setInput(\"\");\n            route.push(\"/\".concat(input));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (input) {\n                // Добавьте проверку, чтобы не делать запрос, если input пустой\n                const res = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(input));\n                const data = await res.json();\n                console.log(data);\n                setHint(data);\n            }\n        };\n        fetchData();\n    }, [\n        input\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: input,\n                onChange: handleChange,\n                onKeyDown: handleKeyDown,\n                type: \"text\",\n                placeholder: \"Search\",\n                className: \"input input-bordered w-[250px] md:w-auto\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:bg-[#414557] bg-[#F8F8F2] md:w-[215px] w-[250px] md:text-white text-[#414557] h-[auto] rounded-[10px] p-2 \\n        text-center absolute  top-[65px] \".concat(input === \"\" && \"hidden\"),\n                children: (hint === null || hint === void 0 ? void 0 : hint.Response) !== \"False\" ? \"\".concat(hint === null || hint === void 0 ? void 0 : hint.Title, \", \").concat(hint === null || hint === void 0 ? void 0 : hint.Year) : \"Film not found\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(NavInput, \"Bai/SqTQQRQbY5g+rmM0ATf6pEA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavInput);\nvar _c;\n$RefreshReg$(_c, \"NavInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9OYXZJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM0QztBQUNPO0FBeUJuRCxTQUFTSTs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1PLFFBQVFULDBEQUFTQTtJQUV2QixNQUFNVSxlQUFlLENBQUNDO1FBQ3BCTCxTQUFTSyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDekI7SUFDQSxNQUFNQyxnQkFBZ0IsQ0FBQ0g7UUFDckIsSUFBSUEsRUFBRUksR0FBRyxLQUFLLFNBQVM7WUFDckJULFNBQVM7WUFDVEcsTUFBTU8sSUFBSSxDQUFDLElBQVUsT0FBTlg7UUFDakI7SUFDRjtJQUVBRixnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFlBQVk7WUFDaEIsSUFBSVosT0FBTztnQkFDVCwrREFBK0Q7Z0JBQy9ELE1BQU1hLE1BQU0sTUFBTUMsTUFDaEIsOENBQW9ELE9BQU5kO2dCQUVoRCxNQUFNZSxPQUFjLE1BQU1GLElBQUlHLElBQUk7Z0JBQ2xDQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaWixRQUFRWTtZQUNWO1FBQ0Y7UUFDQUg7SUFDRixHQUFHO1FBQUNaO0tBQU07SUFFVixxQkFDRSw4REFBQ21CO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEI7Z0JBQ0NRLE9BQU9SO2dCQUNQcUIsVUFBVWhCO2dCQUNWaUIsV0FBV2I7Z0JBQ1hjLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0Q7Z0JBQ0NDLFdBQVcsMkpBQ2lELE9BQXpCcEIsVUFBVSxNQUFNOzBCQUVsREUsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNdUIsUUFBUSxNQUFLLFVBQ2hCLFVBQUd2QixpQkFBQUEsMkJBQUFBLEtBQU13QixLQUFLLEVBQUMsTUFBZSxPQUFYeEIsaUJBQUFBLDJCQUFBQSxLQUFNeUIsSUFBSSxJQUM3Qjs7Ozs7Ozs7Ozs7O0FBSVo7R0FsRFM1Qjs7UUFHT0osc0RBQVNBOzs7S0FIaEJJO0FBb0RULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9OYXZJbnB1dC50c3g/MmQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBSYXRpbmcge1xuICBTb3VyY2U6IHN0cmluZztcbiAgVmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcHM6IHtcbiAgICBUaXRsZTogc3RyaW5nO1xuICAgIFBsb3Q6IHN0cmluZztcbiAgICBQb3N0ZXI6IHN0cmluZztcbiAgICBZZWFyOiBzdHJpbmc7XG4gICAgUmF0ZWQ6IHN0cmluZztcbiAgICBHZW5yZTogc3RyaW5nO1xuICAgIFJ1bnRpbWU6IHN0cmluZztcbiAgICBEaXJlY3Rvcjogc3RyaW5nO1xuICAgIEFjdG9yczogc3RyaW5nO1xuICAgIENvdW50cnk6IHN0cmluZztcbiAgICBSYXRpbmdzOiBSYXRpbmdbXTtcbiAgICBCb3hPZmZpY2U6IHN0cmluZztcbiAgICBSZXNwb25zZTogc3RyaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBOYXZJbnB1dCgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaGludCwgc2V0SGludF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgIHJvdXRlLnB1c2goYC8ke2lucHV0fWApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAvLyDQlNC+0LHQsNCy0YzRgtC1INC/0YDQvtCy0LXRgNC60YMsINGH0YLQvtCx0Ysg0L3QtSDQtNC10LvQsNGC0Ywg0LfQsNC/0YDQvtGBLCDQtdGB0LvQuCBpbnB1dCDQv9GD0YHRgtC+0LlcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTdhOGM1YzcmdD0ke2lucHV0fWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGF0YTogUHJvcHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0SGludChkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbaW5wdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1bMjUwcHhdIG1kOnctYXV0b1wiXG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtZDpiZy1bIzQxNDU1N10gYmctWyNGOEY4RjJdIG1kOnctWzIxNXB4XSB3LVsyNTBweF0gbWQ6dGV4dC13aGl0ZSB0ZXh0LVsjNDE0NTU3XSBoLVthdXRvXSByb3VuZGVkLVsxMHB4XSBwLTIgXG4gICAgICAgIHRleHQtY2VudGVyIGFic29sdXRlICB0b3AtWzY1cHhdICR7aW5wdXQgPT09IFwiXCIgJiYgXCJoaWRkZW5cIn1gfVxuICAgICAgPlxuICAgICAgICB7aGludD8uUmVzcG9uc2UgIT09IFwiRmFsc2VcIlxuICAgICAgICAgID8gYCR7aGludD8uVGl0bGV9LCAke2hpbnQ/LlllYXJ9YFxuICAgICAgICAgIDogXCJGaWxtIG5vdCBmb3VuZFwifVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdklucHV0O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZJbnB1dCIsImlucHV0Iiwic2V0SW5wdXQiLCJoaW50Iiwic2V0SGludCIsInJvdXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInB1c2giLCJmZXRjaERhdGEiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiUmVzcG9uc2UiLCJUaXRsZSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header/NavInput.tsx\n"));

/***/ })

});