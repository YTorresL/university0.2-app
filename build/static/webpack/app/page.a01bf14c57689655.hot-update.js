"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Calendly/page.js":
/*!*************************************!*\
  !*** ./components/Calendly/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CalOpen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _calcom_embed_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @calcom/embed-react */ \"(app-client)/./node_modules/@calcom/embed-react/dist/Cal.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CalOpen() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        ;\n        (async function() {\n            const cal = await (0,_calcom_embed_react__WEBPACK_IMPORTED_MODULE_2__.getCalApi)();\n            cal(\"ui\", {\n                theme: \"light\",\n                styles: {\n                    branding: {\n                        brandColor: \"#c42626\"\n                    }\n                },\n                hideEventTypeDetails: true\n            });\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[28rem] rounded-lg overflow-hidden bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_calcom_embed_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            calLink: \"ytorres-vvcghs/30min\",\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                overflow: \"scroll\",\n                border: \"8\"\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\Desktop\\\\YTorres\\\\university0.2-app\\\\components\\\\Calendly\\\\page.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\Desktop\\\\YTorres\\\\university0.2-app\\\\components\\\\Calendly\\\\page.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(CalOpen, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CalOpen;\nvar _c;\n$RefreshReg$(_c, \"CalOpen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYWxlbmRseS9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0Q7QUFDbkI7QUFFbEIsU0FBU0csVUFBVTs7SUFDaENELGdEQUFTQSxDQUFDLElBQU07O1FBQ1osa0JBQWtCO1lBQ2xCLE1BQU1FLE1BQU0sTUFBTUgsOERBQVNBO1lBQzNCRyxJQUFJLE1BQU07Z0JBQ1JDLE9BQU87Z0JBQ1BDLFFBQVE7b0JBQUVDLFVBQVU7d0JBQUVDLFlBQVk7b0JBQVU7Z0JBQUU7Z0JBQzlDQyxzQkFBc0IsSUFBSTtZQUM1QjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNYLDJEQUFHQTtZQUNGWSxTQUFRO1lBQ1JDLE9BQU87Z0JBQ0xDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFVBQVU7Z0JBQ1ZDLFFBQVE7WUFDVjs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBeEJ1QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxlbmRseS9wYWdlLmpzPzJmOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbCwgeyBnZXRDYWxBcGkgfSBmcm9tIFwiQGNhbGNvbS9lbWJlZC1yZWFjdFwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxPcGVuKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICA7KGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgY2FsID0gYXdhaXQgZ2V0Q2FsQXBpKClcclxuICAgICAgY2FsKFwidWlcIiwge1xyXG4gICAgICAgIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgICAgICAgc3R5bGVzOiB7IGJyYW5kaW5nOiB7IGJyYW5kQ29sb3I6IFwiI2M0MjYyNlwiIH0gfSxcclxuICAgICAgICBoaWRlRXZlbnRUeXBlRGV0YWlsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgIH0pKClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLVsyOHJlbV0gcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIj5cclxuICAgICAgPENhbFxyXG4gICAgICAgIGNhbExpbms9XCJ5dG9ycmVzLXZ2Y2docy8zMG1pblwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuICAgICAgICAgIGJvcmRlcjogXCI4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FsIiwiZ2V0Q2FsQXBpIiwidXNlRWZmZWN0IiwiQ2FsT3BlbiIsImNhbCIsInRoZW1lIiwic3R5bGVzIiwiYnJhbmRpbmciLCJicmFuZENvbG9yIiwiaGlkZUV2ZW50VHlwZURldGFpbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjYWxMaW5rIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Calendly/page.js\n"));

/***/ })

});