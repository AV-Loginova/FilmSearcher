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

/***/ "(app-pages-browser)/./app/[movies]/page.tsx":
/*!*******************************!*\
  !*** ./app/[movies]/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dynamic() {\n    var _movieData_Ratings;\n    _s();\n    const movie = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const [movieData, setMovieData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchMovieData = async ()=>{\n            try {\n                if (!movie) return;\n                const response = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(movie));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch movie data\");\n                }\n                const data = await response.json();\n                setMovieData(data);\n            } catch (error) {\n                console.error(\"Error fetching movie data:\", error);\n            }\n        };\n        fetchMovieData();\n    }, [\n        movie\n    ]);\n    if (!movieData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n            lineNumber: 57,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"max-w-[80%] md:max-w-[40%] p-5 flex flex-col items-center gap-2 bg-[#414557] rounded-xl mb-5 m-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-2xl\",\n                        children: movieData.Title\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"italic\",\n                        children: movieData.Year\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-7 flex-col md:flex-row text-center md:text-start items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"border-[1px] text-center\",\n                                children: [\n                                    \" \",\n                                    movieData.Rated\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: movieData.Poster,\n                                width: 600,\n                                height: 600,\n                                alt: \"\".concat(movieData.Title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center italic text-sm\",\n                                children: movieData.Genre\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Country: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.Country\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Box Office:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.BoxOffice\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Director:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: [\n                                            \" \",\n                                            movieData.Director\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Actors: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.Actors\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic\",\n                                children: movieData.Plot\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-pin-rows\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Source:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Rating:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: movieData === null || movieData === void 0 ? void 0 : (_movieData_Ratings = movieData.Ratings) === null || _movieData_Ratings === void 0 ? void 0 : _movieData_Ratings.map((rating, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: rating.Source\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: rating.Value\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Dynamic, \"YcOZ8WJ6bPhuRxrH0vUY1o7o0iQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Dynamic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dynamic);\nvar _c;\n$RefreshReg$(_c, \"Dynamic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbW92aWVzXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUVvQjtBQUNMO0FBeUI5QyxTQUFTSztRQXlFRUM7O0lBeEVULE1BQU1DLFFBQVFILDREQUFXQTtJQUN6QixNQUFNLENBQUNFLFdBQVdFLGFBQWEsR0FBR0wsK0NBQVFBLENBQU07SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8saUJBQWlCO1lBQ3JCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDRixPQUFPO2dCQUNaLE1BQU1HLFdBQVcsTUFBTUMsTUFDckIsOENBQW9ELE9BQU5KO2dCQUVoRCxJQUFJLENBQUNHLFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBRWhDUCxhQUFhTTtZQUNmLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7UUFDRjtRQUVBUDtJQUNGLEdBQUc7UUFBQ0Y7S0FBTTtJQUVWLElBQUksQ0FBQ0QsV0FBVztRQUNkLHFCQUFPLDhEQUFDWTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFzQmQsVUFBVWdCLEtBQUs7Ozs7OztrQ0FDbkQsOERBQUNDO3dCQUFFSCxXQUFVO2tDQUFVZCxVQUFVa0IsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQ047Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBMkI7b0NBQUVkLFVBQVVtQixLQUFLOzs7Ozs7OzBDQUN6RCw4REFBQ3pCLGtEQUFLQTtnQ0FDSjBCLEtBQUtwQixVQUFVcUIsTUFBTTtnQ0FDckJDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUssR0FBbUIsT0FBaEJ4QixVQUFVZ0IsS0FBSyxFQUFDOzs7Ozs7MENBRTFCLDhEQUFDQztnQ0FBRUgsV0FBVTswQ0FBOEJkLFVBQVV5QixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRTVELDhEQUFDYjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBWTtrREFDZCw4REFBQ1k7d0NBQUtaLFdBQVU7a0RBQWdCZCxVQUFVMkIsT0FBTzs7Ozs7Ozs7Ozs7OzBDQUU1RCw4REFBQ1Y7Z0NBQUVILFdBQVU7O29DQUFZO29DQUNYO2tEQUNaLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBZ0JkLFVBQVU0QixTQUFTOzs7Ozs7Ozs7Ozs7MENBR3JELDhEQUFDWDtnQ0FBRUgsV0FBVTs7b0NBQVk7b0NBQ2I7a0RBQ1YsOERBQUNZO3dDQUFLWixXQUFVOzs0Q0FBZTs0Q0FBRWQsVUFBVTZCLFFBQVE7Ozs7Ozs7Ozs7Ozs7MENBRXJELDhEQUFDWjtnQ0FBRUgsV0FBVTs7b0NBQVk7a0RBQ2YsOERBQUNZO3dDQUFLWixXQUFVO2tEQUFnQmQsVUFBVThCLE1BQU07Ozs7Ozs7Ozs7OzswQ0FFMUQsOERBQUNiO2dDQUFFSCxXQUFVOzBDQUFVZCxVQUFVK0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ0M7Z0JBQU1sQixXQUFVOztrQ0FDZiw4REFBQ21CO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0M7a0NBQ0VwQyxzQkFBQUEsaUNBQUFBLHFCQUFBQSxVQUFXcUMsT0FBTyxjQUFsQnJDLHlDQUFBQSxtQkFBb0JzQyxHQUFHLENBQUMsQ0FBQ0MsUUFBYUMsc0JBQ3JDLDhEQUFDTjs7a0RBQ0MsOERBQUNDO2tEQUFJSSxPQUFPRSxNQUFNOzs7Ozs7a0RBQ2xCLDhEQUFDTjtrREFBSUksT0FBT0csS0FBSzs7Ozs7OzsrQkFGVkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckI7R0FuRlN6Qzs7UUFDT0Qsd0RBQVdBOzs7S0FEbEJDO0FBcUZULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbW92aWVzXS9wYWdlLnRzeD83MmE2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIFJhdGluZyB7XG4gIFNvdXJjZTogc3RyaW5nO1xuICBWYWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wczoge1xuICAgIFRpdGxlOiBzdHJpbmc7XG4gICAgUGxvdDogc3RyaW5nO1xuICAgIFBvc3Rlcjogc3RyaW5nO1xuICAgIFllYXI6IHN0cmluZztcbiAgICBSYXRlZDogc3RyaW5nO1xuICAgIEdlbnJlOiBzdHJpbmc7XG4gICAgUnVudGltZTogc3RyaW5nO1xuICAgIERpcmVjdG9yOiBzdHJpbmc7XG4gICAgQWN0b3JzOiBzdHJpbmc7XG4gICAgQ291bnRyeTogc3RyaW5nO1xuICAgIFJhdGluZ3M6IFJhdGluZ1tdO1xuICAgIEJveE9mZmljZTogc3RyaW5nO1xuICAgIFJlc3BvbnNlOiBzdHJpbmc7XG4gIH07XG59XG5cbmZ1bmN0aW9uIER5bmFtaWMoKSB7XG4gIGNvbnN0IG1vdmllID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW21vdmllRGF0YSwgc2V0TW92aWVEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1vdmllRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghbW92aWUpIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01N2E4YzVjNyZ0PSR7bW92aWV9YFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG1vdmllIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBzZXRNb3ZpZURhdGEoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW92aWUgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaE1vdmllRGF0YSgpO1xuICB9LCBbbW92aWVdKTtcblxuICBpZiAoIW1vdmllRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LVs4MCVdIG1kOm1heC13LVs0MCVdIHAtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1bIzQxNDU1N10gcm91bmRlZC14bCBtYi01IG0tYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e21vdmllRGF0YS5UaXRsZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGFsaWNcIj57bW92aWVEYXRhLlllYXJ9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTcgZmxleC1jb2wgbWQ6ZmxleC1yb3cgdGV4dC1jZW50ZXIgbWQ6dGV4dC1zdGFydCBpdGVtcy1zdGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gdGV4dC1jZW50ZXJcIj4ge21vdmllRGF0YS5SYXRlZH08L3A+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e21vdmllRGF0YS5Qb3N0ZXJ9XG4gICAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs2MDB9XG4gICAgICAgICAgICBhbHQ9e2Ake21vdmllRGF0YS5UaXRsZX0gcG9zdGVyYH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGl0YWxpYyB0ZXh0LXNtXCI+e21vdmllRGF0YS5HZW5yZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgIENvdW50cnk6IDxzcGFuIGNsYXNzTmFtZT1cIiBmb250LW5vcm1hbFwiPnttb3ZpZURhdGEuQ291bnRyeX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgQm94IE9mZmljZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWxcIj57bW92aWVEYXRhLkJveE9mZmljZX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBEaXJlY3Rvcjp7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWxcIj4ge21vdmllRGF0YS5EaXJlY3Rvcn08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgQWN0b3JzOiA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWxcIj57bW92aWVEYXRhLkFjdG9yc308L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0YWxpY1wiPnttb3ZpZURhdGEuUGxvdH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtcGluLXJvd3NcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Tb3VyY2U6PC90aD5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc6PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge21vdmllRGF0YT8uUmF0aW5ncz8ubWFwKChyYXRpbmc6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8dGg+e3JhdGluZy5Tb3VyY2V9PC90aD5cbiAgICAgICAgICAgICAgPHRoPntyYXRpbmcuVmFsdWV9PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pYztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXRobmFtZSIsIkR5bmFtaWMiLCJtb3ZpZURhdGEiLCJtb3ZpZSIsInNldE1vdmllRGF0YSIsImZldGNoTW92aWVEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsIlRpdGxlIiwicCIsIlllYXIiLCJSYXRlZCIsInNyYyIsIlBvc3RlciIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiR2VucmUiLCJzcGFuIiwiQ291bnRyeSIsIkJveE9mZmljZSIsIkRpcmVjdG9yIiwiQWN0b3JzIiwiUGxvdCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJSYXRpbmdzIiwibWFwIiwicmF0aW5nIiwiaW5kZXgiLCJTb3VyY2UiLCJWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[movies]/page.tsx\n"));

/***/ })

});