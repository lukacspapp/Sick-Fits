/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var intitial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(intitial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value); // when we update the price in the form it will save it as a string so we need to convert it back to number because the backend expects a number\n    }\n\n    if (type === 'file') {\n      value[0] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));\n  }\n\n  function resetForm() {\n    setInputs(intitial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = (0,_Users_lukacspapp_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  }\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  }; // function setValue(key, value) {\n  //   setValues({\n  //     ...values,\n  //     [key]: value,\n  //   });\n  // }\n  // function handleChange(event) {\n  //   setValue(event.target.getAttribute('name'), event.target.value);\n  // }\n  // function handleSubmit(event) {\n  //   event.preventDefault();\n  //   console.log(values);\n  // }\n  // return {\n  //   handleChange,\n  //   handleSubmit,\n  //   values,\n  // };\n}\n\n_s(useForm, \"XEOQpPTiseE8w8TOTjNdWl5mdSs=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW50aXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFnQztBQUFBOztBQUFBLE1BQWZDLFFBQWUsdUVBQUosRUFBSTs7QUFBQSxrQkFDakJDLCtDQUFRLENBQUNELFFBQUQsQ0FEUztBQUFBLE1BQ3RDRSxNQURzQztBQUFBLE1BQzlCQyxTQUQ4Qjs7QUFHN0MsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDS0EsQ0FBQyxDQUFDQyxNQURQO0FBQUEsUUFDakJDLEtBRGlCLGFBQ2pCQSxLQURpQjtBQUFBLFFBQ1ZDLElBRFUsYUFDVkEsSUFEVTtBQUFBLFFBQ0pDLElBREksYUFDSkEsSUFESTs7QUFFdkIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCLENBRHFCLENBQ0k7QUFDMUI7O0FBQ0QsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJGLFdBQUssQ0FBQyxDQUFELENBQUwsR0FBV0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBQXBCO0FBQ0Q7O0FBQ0RSLGFBQVMsaUNBQ0pELE1BREkseUtBRU5NLElBRk0sRUFFQ0QsS0FGRCxHQUFUO0FBSUQ7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNuQlQsYUFBUyxDQUFDSCxRQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTYSxTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQ2pCRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWYsTUFBZixFQUF1QmdCLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1osS0FBUDs7QUFBQSxhQUFrQixDQUFDWSxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBRGlCLENBQW5CO0FBR0FoQixhQUFTLENBQUNXLFVBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU87QUFDTFosVUFBTSxFQUFOQSxNQURLO0FBRUxFLGdCQUFZLEVBQVpBLFlBRks7QUFHTFEsYUFBUyxFQUFUQSxTQUhLO0FBSUxDLGFBQVMsRUFBVEE7QUFKSyxHQUFQLENBNUI2QyxDQW1DN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0dBeER1QmQsTyIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW50aXRpYWwgPSB7fSkge1xuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW50aXRpYWwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7IC8vIHdoZW4gd2UgdXBkYXRlIHRoZSBwcmljZSBpbiB0aGUgZm9ybSBpdCB3aWxsIHNhdmUgaXQgYXMgYSBzdHJpbmcgc28gd2UgbmVlZCB0byBjb252ZXJ0IGl0IGJhY2sgdG8gbnVtYmVyIGJlY2F1c2UgdGhlIGJhY2tlbmQgZXhwZWN0cyBhIG51bWJlclxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICB2YWx1ZVswXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLi4uaW5wdXRzLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW50aXRpYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgKTtcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlucHV0cyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgcmVzZXRGb3JtLFxuICAgIGNsZWFyRm9ybSxcbiAgfTtcblxuICAvLyBmdW5jdGlvbiBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gIC8vICAgc2V0VmFsdWVzKHtcbiAgLy8gICAgIC4uLnZhbHVlcyxcbiAgLy8gICAgIFtrZXldOiB2YWx1ZSxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAvLyAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgLy8gfVxuXG4gIC8vIHJldHVybiB7XG4gIC8vICAgaGFuZGxlQ2hhbmdlLFxuICAvLyAgIGhhbmRsZVN1Ym1pdCxcbiAgLy8gICB2YWx1ZXMsXG4gIC8vIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

});