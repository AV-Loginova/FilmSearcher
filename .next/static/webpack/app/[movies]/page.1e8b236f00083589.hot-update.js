"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[movies]/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzP2IyNmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/[movies]/page.tsx":
/*!*******************************!*\
  !*** ./app/[movies]/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dynamic(param) {\n    let {} = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { movie } = router.query;\n    const [movieData, setMovieData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchMovieData = async ()=>{\n            try {\n                const response = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(movie));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch movie data\");\n                }\n                const data = await response.json();\n                setMovieData(data);\n            } catch (error) {\n                console.error(\"Error fetching movie data:\", error);\n            }\n        };\n        if (movie) {\n            fetchMovieData();\n        }\n    }, [\n        movie\n    ]);\n    if (!movieData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"max-w-[80%] md:max-w-[40%] p-5 flex flex-col items-center gap-2 bg-[#414557] rounded-xl mb-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-2xl\",\n                        children: movieData.Title\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"italic\",\n                        children: movieData.Year\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-7 flex-col md:flex-row text-center md:text-start items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"border-[1px] text-center\",\n                                children: [\n                                    \" \",\n                                    movieData.Rated\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: movieData.Poster,\n                                width: 600,\n                                height: 600,\n                                alt: \"\".concat(movieData.Title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center italic text-sm\",\n                                children: movieData.Genre\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Country: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.Country\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Box Office:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.BoxOffice\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Director:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: [\n                                            \" \",\n                                            movieData.Director\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Actors: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.Actors\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic\",\n                                children: movieData.Plot\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-pin-rows\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Source:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Rating:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: movieData.Ratings.map((rating)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: rating.Source\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: rating.Value\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Dynamic, \"ZiEfT3yCQudHFGSG1DSz8p4XKx8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Dynamic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dynamic);\nvar _c;\n$RefreshReg$(_c, \"Dynamic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbW92aWVzXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNhO0FBQ087QUF3Qm5ELFNBQVNLLFFBQVEsS0FBTztRQUFQLEVBQU8sR0FBUDs7SUFDZixNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxLQUFLLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM5QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQU07SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsaUJBQWlCO1lBQ3JCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiw4Q0FBb0QsT0FBTk47Z0JBRWhELElBQUksQ0FBQ0ssU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFDaENQLGFBQWFNO1lBQ2YsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM5QztRQUNGO1FBRUEsSUFBSVgsT0FBTztZQUNUSTtRQUNGO0lBQ0YsR0FBRztRQUFDSjtLQUFNO0lBRVYsSUFBSSxDQUFDRSxXQUFXO1FBQ2QscUJBQU8sOERBQUNXO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXNCYixVQUFVZSxLQUFLOzs7Ozs7a0NBQ25ELDhEQUFDQzt3QkFBRUgsV0FBVTtrQ0FBVWIsVUFBVWlCLElBQUk7Ozs7Ozs7Ozs7OzswQkFFdkMsOERBQUNOO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQUlFLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBRUgsV0FBVTs7b0NBQTJCO29DQUFFYixVQUFVa0IsS0FBSzs7Ozs7OzswQ0FDekQsOERBQUMzQixrREFBS0E7Z0NBQ0o0QixLQUFLbkIsVUFBVW9CLE1BQU07Z0NBQ3JCQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLLEdBQW1CLE9BQWhCdkIsVUFBVWUsS0FBSyxFQUFDOzs7Ozs7MENBRTFCLDhEQUFDQztnQ0FBRUgsV0FBVTswQ0FBOEJiLFVBQVV3QixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRTVELDhEQUFDYjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBWTtrREFDZCw4REFBQ1k7d0NBQUtaLFdBQVU7a0RBQWdCYixVQUFVMEIsT0FBTzs7Ozs7Ozs7Ozs7OzBDQUU1RCw4REFBQ1Y7Z0NBQUVILFdBQVU7O29DQUFZO29DQUNYO2tEQUNaLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBZ0JiLFVBQVUyQixTQUFTOzs7Ozs7Ozs7Ozs7MENBR3JELDhEQUFDWDtnQ0FBRUgsV0FBVTs7b0NBQVk7b0NBQ2I7a0RBQ1YsOERBQUNZO3dDQUFLWixXQUFVOzs0Q0FBZTs0Q0FBRWIsVUFBVTRCLFFBQVE7Ozs7Ozs7Ozs7Ozs7MENBRXJELDhEQUFDWjtnQ0FBRUgsV0FBVTs7b0NBQVk7a0RBQ2YsOERBQUNZO3dDQUFLWixXQUFVO2tEQUFnQmIsVUFBVTZCLE1BQU07Ozs7Ozs7Ozs7OzswQ0FFMUQsOERBQUNiO2dDQUFFSCxXQUFVOzBDQUFVYixVQUFVOEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ0M7Z0JBQU1sQixXQUFVOztrQ0FDZiw4REFBQ21CO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0M7a0NBQ0VuQyxVQUFVb0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ3RCLDhEQUFDTDs7a0RBQ0MsOERBQUNDO2tEQUFJSSxPQUFPQyxNQUFNOzs7Ozs7a0RBQ2xCLDhEQUFDTDtrREFBSUksT0FBT0UsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0FwRlM1Qzs7UUFDUUosc0RBQVNBOzs7S0FEakJJO0FBc0ZULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbW92aWVzXS9wYWdlLnRzeD83MmE2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBSYXRpbmcge1xuICBTb3VyY2U6IHN0cmluZztcbiAgVmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcHM6IHtcbiAgICBUaXRsZTogc3RyaW5nO1xuICAgIFBsb3Q6IHN0cmluZztcbiAgICBQb3N0ZXI6IHN0cmluZztcbiAgICBZZWFyOiBzdHJpbmc7XG4gICAgUmF0ZWQ6IHN0cmluZztcbiAgICBHZW5yZTogc3RyaW5nO1xuICAgIFJ1bnRpbWU6IHN0cmluZztcbiAgICBEaXJlY3Rvcjogc3RyaW5nO1xuICAgIEFjdG9yczogc3RyaW5nO1xuICAgIENvdW50cnk6IHN0cmluZztcbiAgICBSYXRpbmdzOiBSYXRpbmdbXTtcbiAgICBCb3hPZmZpY2U6IHN0cmluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gRHluYW1pYyh7fTogYW55KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IG1vdmllIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFttb3ZpZURhdGEsIHNldE1vdmllRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hNb3ZpZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTU3YThjNWM3JnQ9JHttb3ZpZX1gXG4gICAgICAgICk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbW92aWUgZGF0YVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRNb3ZpZURhdGEoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW92aWUgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAobW92aWUpIHtcbiAgICAgIGZldGNoTW92aWVEYXRhKCk7XG4gICAgfVxuICB9LCBbbW92aWVdKTtcblxuICBpZiAoIW1vdmllRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LVs4MCVdIG1kOm1heC13LVs0MCVdIHAtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1bIzQxNDU1N10gcm91bmRlZC14bCBtYi01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57bW92aWVEYXRhLlRpdGxlfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIml0YWxpY1wiPnttb3ZpZURhdGEuWWVhcn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNyBmbGV4LWNvbCBtZDpmbGV4LXJvdyB0ZXh0LWNlbnRlciBtZDp0ZXh0LXN0YXJ0IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSB0ZXh0LWNlbnRlclwiPiB7bW92aWVEYXRhLlJhdGVkfTwvcD5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17bW92aWVEYXRhLlBvc3Rlcn1cbiAgICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgIGFsdD17YCR7bW92aWVEYXRhLlRpdGxlfSBwb3N0ZXJgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaXRhbGljIHRleHQtc21cIj57bW92aWVEYXRhLkdlbnJlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgQ291bnRyeTogPHNwYW4gY2xhc3NOYW1lPVwiIGZvbnQtbm9ybWFsXCI+e21vdmllRGF0YS5Db3VudHJ5fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBCb3ggT2ZmaWNlOntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBmb250LW5vcm1hbFwiPnttb3ZpZURhdGEuQm94T2ZmaWNlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgIERpcmVjdG9yOntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBmb250LW5vcm1hbFwiPiB7bW92aWVEYXRhLkRpcmVjdG9yfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBBY3RvcnM6IDxzcGFuIGNsYXNzTmFtZT1cIiBmb250LW5vcm1hbFwiPnttb3ZpZURhdGEuQWN0b3JzfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRhbGljXCI+e21vdmllRGF0YS5QbG90fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1waW4tcm93c1wiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlNvdXJjZTo8L3RoPlxuICAgICAgICAgICAgPHRoPlJhdGluZzo8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7bW92aWVEYXRhLlJhdGluZ3MubWFwKChyYXRpbmc6IGFueSkgPT4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+e3JhdGluZy5Tb3VyY2V9PC90aD5cbiAgICAgICAgICAgICAgPHRoPntyYXRpbmcuVmFsdWV9PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pYztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEeW5hbWljIiwicm91dGVyIiwibW92aWUiLCJxdWVyeSIsIm1vdmllRGF0YSIsInNldE1vdmllRGF0YSIsImZldGNoTW92aWVEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsIlRpdGxlIiwicCIsIlllYXIiLCJSYXRlZCIsInNyYyIsIlBvc3RlciIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiR2VucmUiLCJzcGFuIiwiQ291bnRyeSIsIkJveE9mZmljZSIsIkRpcmVjdG9yIiwiQWN0b3JzIiwiUGxvdCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJSYXRpbmdzIiwibWFwIiwicmF0aW5nIiwiU291cmNlIiwiVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[movies]/page.tsx\n"));

/***/ })

});