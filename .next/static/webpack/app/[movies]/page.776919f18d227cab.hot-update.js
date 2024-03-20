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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dynamic() {\n    var _movieData_Ratings;\n    _s();\n    const movie = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [movieData, setMovieData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchMovieData = async ()=>{\n            try {\n                if (!movie) return;\n                const response = await fetch(\"https://www.omdbapi.com/?apikey=57a8c5c7&t=\".concat(movie));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch movie data\");\n                }\n                const data = await response.json();\n                if (data.Response === \"False\") {\n                    route.push(\"/error\");\n                }\n                setMovieData(data);\n            } catch (error) {\n                console.error(\"Error fetching movie data:\", error);\n            }\n        };\n        fetchMovieData();\n    }, [\n        movie\n    ]);\n    if (!movieData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"Loader\"\n        }, void 0, false, {\n            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"max-w-[80%] md:max-w-[40%] p-5 flex flex-col items-center gap-2 bg-[#414557] rounded-xl mb-5 m-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-2xl\",\n                        children: movieData.Title\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"italic\",\n                        children: movieData.Year\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-7 flex-col md:flex-row text-center md:text-start items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"border-[1px] text-center\",\n                                children: [\n                                    \" \",\n                                    movieData.Rated\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: movieData.Poster,\n                                width: 600,\n                                height: 600,\n                                alt: \"\".concat(movieData.Title, \" poster\")\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center italic text-sm\",\n                                children: movieData.Genre\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Country: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.Country\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Box Office:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.BoxOffice\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Director:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: [\n                                            \" \",\n                                            movieData.Director\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Actors: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" font-normal\",\n                                        children: movieData.Actors\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic\",\n                                children: movieData.Plot\n                            }, void 0, false, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-pin-rows\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Source:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Rating:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: movieData === null || movieData === void 0 ? void 0 : (_movieData_Ratings = movieData.Ratings) === null || _movieData_Ratings === void 0 ? void 0 : _movieData_Ratings.map((rating, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: rating.Source\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: rating.Value\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alena/Desktop/Education/FilmSearcher/app/[movies]/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Dynamic, \"ZUo8/h1g8r06bYpBFvjx0wgddYo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Dynamic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dynamic);\nvar _c;\n$RefreshReg$(_c, \"Dynamic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbW92aWVzXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNvQjtBQUNNO0FBeUJ6RCxTQUFTTTtRQTZFRUM7O0lBNUVULE1BQU1DLFFBQVFKLDREQUFXQTtJQUN6QixNQUFNSyxRQUFRSiwwREFBU0E7SUFFdkIsTUFBTSxDQUFDRSxXQUFXRyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFNO0lBRWhERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGlCQUFpQjtZQUNyQixJQUFJO2dCQUNGLElBQUksQ0FBQ0gsT0FBTztnQkFDWixNQUFNSSxXQUFXLE1BQU1DLE1BQ3JCLDhDQUFvRCxPQUFOTDtnQkFFaEQsSUFBSSxDQUFDSSxTQUFTRSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO2dCQUNoQyxJQUFJRCxLQUFLRSxRQUFRLEtBQUssU0FBUztvQkFDN0JULE1BQU1VLElBQUksQ0FBQztnQkFDYjtnQkFDQVQsYUFBYU07WUFDZixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQVQ7SUFDRixHQUFHO1FBQUNIO0tBQU07SUFFVixJQUFJLENBQUNELFdBQVc7UUFDZCxxQkFBTyw4REFBQ2U7WUFBSUMsV0FBVTs7Ozs7O0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFELFdBQVU7OzBCQUNqQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBc0JoQixVQUFVbUIsS0FBSzs7Ozs7O2tDQUNuRCw4REFBQ0M7d0JBQUVKLFdBQVU7a0NBQVVoQixVQUFVcUIsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFFSixXQUFVOztvQ0FBMkI7b0NBQUVoQixVQUFVc0IsS0FBSzs7Ozs7OzswQ0FDekQsOERBQUM3QixrREFBS0E7Z0NBQ0o4QixLQUFLdkIsVUFBVXdCLE1BQU07Z0NBQ3JCQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLLEdBQW1CLE9BQWhCM0IsVUFBVW1CLEtBQUssRUFBQzs7Ozs7OzBDQUUxQiw4REFBQ0M7Z0NBQUVKLFdBQVU7MENBQThCaEIsVUFBVTRCLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFNUQsOERBQUNiO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUVKLFdBQVU7O29DQUFZO2tEQUNkLDhEQUFDYTt3Q0FBS2IsV0FBVTtrREFBZ0JoQixVQUFVOEIsT0FBTzs7Ozs7Ozs7Ozs7OzBDQUU1RCw4REFBQ1Y7Z0NBQUVKLFdBQVU7O29DQUFZO29DQUNYO2tEQUNaLDhEQUFDYTt3Q0FBS2IsV0FBVTtrREFBZ0JoQixVQUFVK0IsU0FBUzs7Ozs7Ozs7Ozs7OzBDQUdyRCw4REFBQ1g7Z0NBQUVKLFdBQVU7O29DQUFZO29DQUNiO2tEQUNWLDhEQUFDYTt3Q0FBS2IsV0FBVTs7NENBQWU7NENBQUVoQixVQUFVZ0MsUUFBUTs7Ozs7Ozs7Ozs7OzswQ0FFckQsOERBQUNaO2dDQUFFSixXQUFVOztvQ0FBWTtrREFDZiw4REFBQ2E7d0NBQUtiLFdBQVU7a0RBQWdCaEIsVUFBVWlDLE1BQU07Ozs7Ozs7Ozs7OzswQ0FFMUQsOERBQUNiO2dDQUFFSixXQUFVOzBDQUFVaEIsVUFBVWtDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHekMsOERBQUNDO2dCQUFNbkIsV0FBVTs7a0NBQ2YsOERBQUNvQjtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFdkMsc0JBQUFBLGlDQUFBQSxxQkFBQUEsVUFBV3dDLE9BQU8sY0FBbEJ4Qyx5Q0FBQUEsbUJBQW9CeUMsR0FBRyxDQUFDLENBQUNDLFFBQWFDLHNCQUNyQyw4REFBQ047O2tEQUNDLDhEQUFDQztrREFBSUksT0FBT0UsTUFBTTs7Ozs7O2tEQUNsQiw4REFBQ047a0RBQUlJLE9BQU9HLEtBQUs7Ozs7Ozs7K0JBRlZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JCO0dBdkZTNUM7O1FBQ09GLHdEQUFXQTtRQUNYQyxzREFBU0E7OztLQUZoQkM7QUF5RlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1ttb3ZpZXNdL3BhZ2UudHN4PzcyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmludGVyZmFjZSBSYXRpbmcge1xuICBTb3VyY2U6IHN0cmluZztcbiAgVmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcHM6IHtcbiAgICBUaXRsZTogc3RyaW5nO1xuICAgIFBsb3Q6IHN0cmluZztcbiAgICBQb3N0ZXI6IHN0cmluZztcbiAgICBZZWFyOiBzdHJpbmc7XG4gICAgUmF0ZWQ6IHN0cmluZztcbiAgICBHZW5yZTogc3RyaW5nO1xuICAgIFJ1bnRpbWU6IHN0cmluZztcbiAgICBEaXJlY3Rvcjogc3RyaW5nO1xuICAgIEFjdG9yczogc3RyaW5nO1xuICAgIENvdW50cnk6IHN0cmluZztcbiAgICBSYXRpbmdzOiBSYXRpbmdbXTtcbiAgICBCb3hPZmZpY2U6IHN0cmluZztcbiAgICBSZXNwb25zZTogc3RyaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBEeW5hbWljKCkge1xuICBjb25zdCBtb3ZpZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW21vdmllRGF0YSwgc2V0TW92aWVEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1vdmllRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghbW92aWUpIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01N2E4YzVjNyZ0PSR7bW92aWV9YFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG1vdmllIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2UgPT09IFwiRmFsc2VcIikge1xuICAgICAgICAgIHJvdXRlLnB1c2goXCIvZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TW92aWVEYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vdmllIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hNb3ZpZURhdGEoKTtcbiAgfSwgW21vdmllXSk7XG5cbiAgaWYgKCFtb3ZpZURhdGEpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJMb2FkZXJcIj48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LVs4MCVdIG1kOm1heC13LVs0MCVdIHAtNSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1bIzQxNDU1N10gcm91bmRlZC14bCBtYi01IG0tYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e21vdmllRGF0YS5UaXRsZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGFsaWNcIj57bW92aWVEYXRhLlllYXJ9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTcgZmxleC1jb2wgbWQ6ZmxleC1yb3cgdGV4dC1jZW50ZXIgbWQ6dGV4dC1zdGFydCBpdGVtcy1zdGFydFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gdGV4dC1jZW50ZXJcIj4ge21vdmllRGF0YS5SYXRlZH08L3A+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e21vdmllRGF0YS5Qb3N0ZXJ9XG4gICAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs2MDB9XG4gICAgICAgICAgICBhbHQ9e2Ake21vdmllRGF0YS5UaXRsZX0gcG9zdGVyYH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGl0YWxpYyB0ZXh0LXNtXCI+e21vdmllRGF0YS5HZW5yZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgIENvdW50cnk6IDxzcGFuIGNsYXNzTmFtZT1cIiBmb250LW5vcm1hbFwiPnttb3ZpZURhdGEuQ291bnRyeX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgQm94IE9mZmljZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWxcIj57bW92aWVEYXRhLkJveE9mZmljZX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBEaXJlY3Rvcjp7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWxcIj4ge21vdmllRGF0YS5EaXJlY3Rvcn08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgQWN0b3JzOiA8c3BhbiBjbGFzc05hbWU9XCIgZm9udC1ub3JtYWxcIj57bW92aWVEYXRhLkFjdG9yc308L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0YWxpY1wiPnttb3ZpZURhdGEuUGxvdH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtcGluLXJvd3NcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Tb3VyY2U6PC90aD5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc6PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge21vdmllRGF0YT8uUmF0aW5ncz8ubWFwKChyYXRpbmc6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8dGg+e3JhdGluZy5Tb3VyY2V9PC90aD5cbiAgICAgICAgICAgICAgPHRoPntyYXRpbmcuVmFsdWV9PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pYztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsIkR5bmFtaWMiLCJtb3ZpZURhdGEiLCJtb3ZpZSIsInJvdXRlIiwic2V0TW92aWVEYXRhIiwiZmV0Y2hNb3ZpZURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiUmVzcG9uc2UiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwiVGl0bGUiLCJwIiwiWWVhciIsIlJhdGVkIiwic3JjIiwiUG9zdGVyIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJHZW5yZSIsInNwYW4iLCJDb3VudHJ5IiwiQm94T2ZmaWNlIiwiRGlyZWN0b3IiLCJBY3RvcnMiLCJQbG90IiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIlJhdGluZ3MiLCJtYXAiLCJyYXRpbmciLCJpbmRleCIsIlNvdXJjZSIsIlZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[movies]/page.tsx\n"));

/***/ })

});