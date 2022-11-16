"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/posts */ \"./pages/actions/posts.js\");\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../components/Form.js */ \"./components/Form.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Posts_posts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Posts/posts.js */ \"./pages/Posts/posts.js\");\n/* harmony import */ var _images_backflip_banner_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/backflip_banner.png */ \"./images/backflip_banner.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction AboutText(param) {\n    var desc = param.desc;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().smallDesc),\n        children: desc ? desc : \"Default description\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n}\n_c1 = AboutText;\nfunction HomePage() {\n    var likeClick = function likeClick() {\n        setLikes(likes + 1);\n    };\n    var dislikeClick = function dislikeClick() {\n        setdisLikes(dislikes + 1);\n    };\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dislikes = ref1[0], setdisLikes = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_actions_posts__WEBPACK_IMPORTED_MODULE_3__.getPosts)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Backflip Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                            title: \"The Backflip Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n                            src: _images_backflip_banner_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                            alt: \"/\",\n                            width: \"1600px\",\n                            height: \"320px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AboutText, {\n                            desc: \"Welcome to the Backflip Blog where imagination goes wild.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AboutText, {\n                            desc: \"The rules are... you are not allowed to post anything you want, unless you are able to do a backflip ;)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posts_posts_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().button1),\n                    onClick: likeClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: [\n                            \"Like (\",\n                            likes,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 64\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().button2),\n                    onClick: dislikeClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: [\n                            \"Dislike (\",\n                            dislikes,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 67\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20011155\\\\Documents\\\\Year 3 (Semester 2)\\\\Application Tiber\\\\pages\\\\index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"G3XkGEv9GYQO9ZdDFyrZR5D1010=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c2 = HomePage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"AboutText\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ2pCLEtBQUs7NEJBQUMsR0FBQzs7Ozs7OzRCQUFJOzs7Ozt3QkFBUzs4QkFDckYsOERBQUNjLFFBQU07b0JBQUNuQixTQUFTLEVBQUVWLDBFQUFjO29CQUFFK0IsT0FBTyxFQUFFZixZQUFZOzhCQUFFLDRFQUFDZ0IsR0FBQzs7NEJBQUMsV0FBUzs0QkFBQ2QsUUFBUTs0QkFBQyxHQUFDOzs7Ozs7NEJBQUk7Ozs7O3dCQUFTOzs7Ozs7Z0JBQzFGOzs7OztZQUNDLENBQ1Q7QUFDSixDQUFDO0dBN0N1Qk4sUUFBUTs7UUFDYmpCLG9EQUFXOzs7QUFETmlCLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuL2FjdGlvbnMvcG9zdHMnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcvY29tcG9uZW50cy9Gb3JtLmpzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi9Qb3N0cy9wb3N0cy5qcyc7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSAnLi4vaW1hZ2VzL2JhY2tmbGlwX2Jhbm5lci5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFib3V0VGV4dCh7IGRlc2MgfSkge1xyXG4gIHJldHVybiA8cCBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbERlc2N9PntkZXNjID8gZGVzYyA6ICdEZWZhdWx0IGRlc2NyaXB0aW9uJ308L3A+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZGlzbGlrZXMsIHNldGRpc0xpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UG9zdHMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxpa2VDbGljaygpIHtcclxuICAgIHNldExpa2VzKGxpa2VzICsgMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkaXNsaWtlQ2xpY2soKSB7XHJcbiAgICBzZXRkaXNMaWtlcyhkaXNsaWtlcyArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QmFja2ZsaXAgQmxvZzwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiVGhlIEJhY2tmbGlwIEJsb2dcIiAvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2Jhbm5lcn0gYWx0PScvJyB3aWR0aD1cIjE2MDBweFwiIGhlaWdodD1cIjMyMHB4XCIgLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPEFib3V0VGV4dCBkZXNjPVwiV2VsY29tZSB0byB0aGUgQmFja2ZsaXAgQmxvZyB3aGVyZSBpbWFnaW5hdGlvbiBnb2VzIHdpbGQuXCIgLz5cclxuICAgICAgICAgIDxBYm91dFRleHQgZGVzYz1cIlRoZSBydWxlcyBhcmUuLi4geW91IGFyZSBub3QgYWxsb3dlZCB0byBwb3N0IGFueXRoaW5nIHlvdSB3YW50LCB1bmxlc3MgeW91IGFyZSBhYmxlIHRvIGRvIGEgYmFja2ZsaXAgOylcIiAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8UG9zdHMvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgXHJcbiAgICAgICAgPEZvcm0vPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uMX0gb25DbGljaz17bGlrZUNsaWNrfT48Yj5MaWtlICh7bGlrZXN9KTwvYj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbjJ9IG9uQ2xpY2s9e2Rpc2xpa2VDbGlja30+PGI+RGlzbGlrZSAoe2Rpc2xpa2VzfSk8L2I+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiZ2V0UG9zdHMiLCJGb3JtIiwiSGVhZCIsIkxheW91dCIsInN0eWxlcyIsIlBvc3RzIiwiYmFubmVyIiwiSW1hZ2UiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiQWJvdXRUZXh0IiwiZGVzYyIsInAiLCJjbGFzc05hbWUiLCJzbWFsbERlc2MiLCJIb21lUGFnZSIsImxpa2VDbGljayIsInNldExpa2VzIiwibGlrZXMiLCJkaXNsaWtlQ2xpY2siLCJzZXRkaXNMaWtlcyIsImRpc2xpa2VzIiwiZGlzcGF0Y2giLCJkaXYiLCJtYWluIiwiaGVhZGVyIiwiYnIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNlY3Rpb24iLCJidXR0b24iLCJidXR0b24xIiwib25DbGljayIsImIiLCJidXR0b24yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});