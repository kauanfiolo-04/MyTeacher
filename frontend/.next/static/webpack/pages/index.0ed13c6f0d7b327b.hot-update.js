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

/***/ "./src/services/FormatadorService.ts":
/*!*******************************************!*\
  !*** ./src/services/FormatadorService.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormatadorService\": function() { return /* binding */ FormatadorService; }\n/* harmony export */ });\nvar FormatadorService = {\n    valorMonetario: function valorMonetario(valor) {\n        return valor.toLocaleString(\"pt-BR\", {\n            minimumFractionDigits: 2,\n            style: \"currency\",\n            currency: \"BRL\"\n        });\n    },\n    limitarTexto: function limitarTexto(texto, tamanhoMax) {\n        if (texto.length < 50) {\n            return texto;\n        }\n        return texto.slice(0, tamanhoMax) + \"...\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvRm9ybWF0YWRvclNlcnZpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLGlCQUFpQixHQUFHO0lBQzdCQyxjQUFjLEVBQWRBLFNBQUFBLGNBQWMsQ0FBQ0MsS0FBYSxFQUFVO1FBQ2xDLE9BQU9BLEtBQUssQ0FBQ0MsY0FBYyxDQUN2QixPQUFPLEVBQ1A7WUFDSUMscUJBQXFCLEVBQUUsQ0FBQztZQUN4QkMsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQ0o7SUFDTCxDQUFDO0lBRURDLFlBQVksRUFBWkEsU0FBQUEsWUFBWSxDQUFDQyxLQUFhLEVBQUVDLFVBQWlCLEVBQVM7UUFDbEQsSUFBR0QsS0FBSyxDQUFDRSxNQUFNLEdBQUMsRUFBRSxFQUFDO1lBQ2YsT0FBT0YsS0FBSztRQUNoQixDQUFDO1FBRUQsT0FBT0EsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFRixVQUFVLENBQUMsR0FBQyxLQUFLO0lBQzNDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvRm9ybWF0YWRvclNlcnZpY2UudHM/M2RlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRm9ybWF0YWRvclNlcnZpY2UgPSB7XHJcbiAgICB2YWxvck1vbmV0YXJpbyh2YWxvcjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdmFsb3IudG9Mb2NhbGVTdHJpbmcoXHJcbiAgICAgICAgICAgICdwdC1CUicsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9LFxyXG5cclxuICAgIGxpbWl0YXJUZXh0byh0ZXh0bzogc3RyaW5nLCB0YW1hbmhvTWF4Om51bWJlcik6IHN0cmluZ3tcclxuICAgICAgICBpZih0ZXh0by5sZW5ndGg8NTApe1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dG9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0by5zbGljZSgwLCB0YW1hbmhvTWF4KSsnLi4uJ1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkZvcm1hdGFkb3JTZXJ2aWNlIiwidmFsb3JNb25ldGFyaW8iLCJ2YWxvciIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwic3R5bGUiLCJjdXJyZW5jeSIsImxpbWl0YXJUZXh0byIsInRleHRvIiwidGFtYW5ob01heCIsImxlbmd0aCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/FormatadorService.ts\n"));

/***/ })

});