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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"726609597226\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzdiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3MjY2MDk1OTcyMjZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Header/NavInput.tsx":
/*!********************************************!*\
  !*** ./app/components/Header/NavInput.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavInput() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hint, setHint] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Указываем тип MovieData | null\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            setInput(\"\");\n            route.push(\"/\".concat(input));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (input) {\n                const res = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(input));\n                const data = await res.json(); // Указываем тип MovieData\n                console.log(data);\n                setHint(data);\n            }\n        };\n        fetchData();\n    }, [\n        input\n    ]);\n    function handleClick() {\n        if ((hint === null || hint === void 0 ? void 0 : hint.Response) === \"True\") {\n            route.push(\"/\".concat(hint.Title));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: input,\n                onChange: handleChange,\n                onKeyDown: handleKeyDown,\n                type: \"text\",\n                placeholder: \"Search\",\n                className: \"input input-bordered w-[250px] md:w-auto\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleClick,\n                className: \"md:bg-[#414557] bg-[#F8F8F2] md:w-[215px] w-[250px] md:text-white text-[#414557] h-[auto] rounded-[10px] p-2 \\n        text-center absolute \".concat((hint === null || hint === void 0 ? void 0 : hint.Response) ? \"cursor-pointer\t\" : \"\", \" top-[65px] \").concat(input === \"\" && \"hidden\"),\n                children: (hint === null || hint === void 0 ? void 0 : hint.Response) !== \"False\" ? \"\".concat(hint === null || hint === void 0 ? void 0 : hint.Title, \", \").concat(hint === null || hint === void 0 ? void 0 : hint.Year) : \"Film not found\"\n            }, void 0, false, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/components/Header/NavInput.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(NavInput, \"Bai/SqTQQRQbY5g+rmM0ATf6pEA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavInput);\nvar _c;\n$RefreshReg$(_c, \"NavInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9OYXZJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNPO0FBdUJuRCxTQUFTSTs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFtQixPQUFPLGlDQUFpQztJQUMzRixNQUFNTyxRQUFRVCwwREFBU0E7SUFFdkIsTUFBTVUsZUFBZSxDQUFDQztRQUNwQkwsU0FBU0ssRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3pCO0lBQ0EsTUFBTUMsZ0JBQWdCLENBQUNIO1FBQ3JCLElBQUlBLEVBQUVJLEdBQUcsS0FBSyxTQUFTO1lBQ3JCVCxTQUFTO1lBQ1RHLE1BQU1PLElBQUksQ0FBQyxJQUFVLE9BQU5YO1FBQ2pCO0lBQ0Y7SUFFQUYsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxZQUFZO1lBQ2hCLElBQUlaLE9BQU87Z0JBQ1QsTUFBTWEsTUFBTSxNQUFNQyxNQUNoQiw4Q0FBb0QsT0FBTmQ7Z0JBRWhELE1BQU1lLE9BQWtCLE1BQU1GLElBQUlHLElBQUksSUFBSSwwQkFBMEI7Z0JBQ3BFQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaWixRQUFRWTtZQUNWO1FBQ0Y7UUFDQUg7SUFDRixHQUFHO1FBQUNaO0tBQU07SUFFVixTQUFTbUI7UUFDUCxJQUFJakIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNa0IsUUFBUSxNQUFLLFFBQVE7WUFDN0JoQixNQUFNTyxJQUFJLENBQUMsSUFBZSxPQUFYVCxLQUFLbUIsS0FBSztRQUMzQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdkI7Z0JBQ0NRLE9BQU9SO2dCQUNQd0IsVUFBVW5CO2dCQUNWb0IsV0FBV2hCO2dCQUNYaUIsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRDtnQkFDQ00sU0FBU1Q7Z0JBQ1RJLFdBQVcsK0lBR0l2QixPQURiRSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1rQixRQUFRLElBQUcsb0JBQW9CLElBQ3RDLGdCQUF1QyxPQUF6QnBCLFVBQVUsTUFBTTswQkFFOUJFLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWtCLFFBQVEsTUFBSyxVQUNoQixVQUFHbEIsaUJBQUFBLDJCQUFBQSxLQUFNbUIsS0FBSyxFQUFDLE1BQWUsT0FBWG5CLGlCQUFBQSwyQkFBQUEsS0FBTTJCLElBQUksSUFDN0I7Ozs7Ozs7Ozs7OztBQUlaO0dBekRTOUI7O1FBR09KLHNEQUFTQTs7O0tBSGhCSTtBQTJEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvTmF2SW5wdXQudHN4PzJkOGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBSYXRpbmcge1xuICBTb3VyY2U6IHN0cmluZztcbiAgVmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1vdmllRGF0YSB7XG4gIFRpdGxlOiBzdHJpbmc7XG4gIFBsb3Q6IHN0cmluZztcbiAgUG9zdGVyOiBzdHJpbmc7XG4gIFllYXI6IHN0cmluZztcbiAgUmF0ZWQ6IHN0cmluZztcbiAgR2VucmU6IHN0cmluZztcbiAgUnVudGltZTogc3RyaW5nO1xuICBEaXJlY3Rvcjogc3RyaW5nO1xuICBBY3RvcnM6IHN0cmluZztcbiAgQ291bnRyeTogc3RyaW5nO1xuICBSYXRpbmdzOiBSYXRpbmdbXTtcbiAgQm94T2ZmaWNlOiBzdHJpbmc7XG4gIFJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIE5hdklucHV0KCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtoaW50LCBzZXRIaW50XSA9IHVzZVN0YXRlPE1vdmllRGF0YSB8IG51bGw+KG51bGwpOyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YLQuNC/IE1vdmllRGF0YSB8IG51bGxcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgIHJvdXRlLnB1c2goYC8ke2lucHV0fWApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01N2E4YzVjNyZ0PSR7aW5wdXR9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhOiBNb3ZpZURhdGEgPSBhd2FpdCByZXMuanNvbigpOyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YLQuNC/IE1vdmllRGF0YVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0SGludChkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbaW5wdXRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAoaGludD8uUmVzcG9uc2UgPT09IFwiVHJ1ZVwiKSB7XG4gICAgICByb3V0ZS5wdXNoKGAvJHtoaW50LlRpdGxlfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1bMjUwcHhdIG1kOnctYXV0b1wiXG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtgbWQ6YmctWyM0MTQ1NTddIGJnLVsjRjhGOEYyXSBtZDp3LVsyMTVweF0gdy1bMjUwcHhdIG1kOnRleHQtd2hpdGUgdGV4dC1bIzQxNDU1N10gaC1bYXV0b10gcm91bmRlZC1bMTBweF0gcC0yIFxuICAgICAgICB0ZXh0LWNlbnRlciBhYnNvbHV0ZSAke1xuICAgICAgICAgIGhpbnQ/LlJlc3BvbnNlID8gXCJjdXJzb3ItcG9pbnRlclx0XCIgOiBcIlwiXG4gICAgICAgIH0gdG9wLVs2NXB4XSAke2lucHV0ID09PSBcIlwiICYmIFwiaGlkZGVuXCJ9YH1cbiAgICAgID5cbiAgICAgICAge2hpbnQ/LlJlc3BvbnNlICE9PSBcIkZhbHNlXCJcbiAgICAgICAgICA/IGAke2hpbnQ/LlRpdGxlfSwgJHtoaW50Py5ZZWFyfWBcbiAgICAgICAgICA6IFwiRmlsbSBub3QgZm91bmRcIn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZJbnB1dDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2SW5wdXQiLCJpbnB1dCIsInNldElucHV0IiwiaGludCIsInNldEhpbnQiLCJyb3V0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJwdXNoIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsIlJlc3BvbnNlIiwiVGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header/NavInput.tsx\n"));

/***/ })

});