"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./react/index.js":
/*!************************!*\
  !*** ./react/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _jsx_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsx/App */ "./react/jsx/App.js");



console.log("main!");
var container = document.getElementById("root");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jsx_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./react/jsx/App.js":
/*!**************************!*\
  !*** ./react/jsx/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users */ "./react/jsx/Users.js");


var App = function App() {
  console.log("app!");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Users__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./react/jsx/Users.js":
/*!****************************!*\
  !*** ./react/jsx/Users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Users = function Users() {
  console.log('users!');
  var url = "http://localhost:8000/api/users";
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    users = _useState2[0],
    setUsers = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_18__["default"].get(url).then(function (response) {
      setUsers(response.data["hydra:member"]);
    });
  }, []);
  console.log(users);
  return users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("li", {
      key: user.id
    }, user.userId, ": ", user.firstName, " ", user.lastName);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-d9a6b9"], () => (__webpack_exec__("./react/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBRWxCO0FBRTVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDcEIsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDakQsSUFBTUMsSUFBSSxHQUFHUCw0REFBVSxDQUFDSSxTQUFTLENBQUM7QUFFbENHLElBQUksQ0FBQ0MsTUFBTSxlQUNULDJEQUFDLHlEQUFnQixxQkFDZiwyREFBQyxnREFBRyxPQUFHLENBQ1UsQ0FDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnlCO0FBRUM7QUFFM0IsSUFBTVAsR0FBRyxHQUFHLFNBQU5BLEdBQUcsR0FBUztFQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBRW5CLG9CQUNFLDJEQUFDLHlEQUFnQixxQkFDZixvRkFDRSwyREFBQyw4Q0FBSyxPQUFHLENBQ04sQ0FDWTtBQUV2QixDQUFDO0FBRUQsaUVBQWVGLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJRO0FBQ2tCO0FBQ2xCO0FBRTFCLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFLLEdBQVM7RUFDbEJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUVyQixJQUFNVSxHQUFHLEdBQUcsaUNBQWlDO0VBRTdDLGdCQUEwQkYsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEvQkcsS0FBSztJQUFFQyxRQUFRO0VBQ3RCTCxpREFBUyxDQUFDLFlBQU07SUFDZEUsa0RBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7TUFDaENILFFBQVEsQ0FBQ0csUUFBUSxDQUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOakIsT0FBTyxDQUFDQyxHQUFHLENBQUNXLEtBQUssQ0FBQztFQUVsQixPQUNFQSxLQUFLLENBQUNNLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUs7SUFDbEIsb0JBQ0U7TUFBSSxHQUFHLEVBQUVBLElBQUksQ0FBQ0M7SUFBRyxHQUNkRCxJQUFJLENBQUNFLE1BQU0sRUFBQyxJQUFFLEVBQUNGLElBQUksQ0FBQ0csU0FBUyxFQUFDLEdBQUMsRUFBQ0gsSUFBSSxDQUFDSSxRQUFRLENBQzNDO0VBRVQsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUVELGlFQUFlaEIsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1VzZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2pzeC9BcHBcIjtcblxuY29uc29sZS5sb2coXCJtYWluIVwiKVxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCJcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImFwcCFcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDx1bD5cbiAgICAgICAgPFVzZXJzIC8+XG4gICAgICA8L3VsPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygndXNlcnMhJyk7XG5cbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzXCI7XG5cbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0pO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKHVzZXJzKTtcblxuICByZXR1cm4gKFxuICAgIHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XG4gICAgICAgICAge3VzZXIudXNlcklkfToge3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX1cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9KVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQXBwIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiVXNlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXJsIiwidXNlcnMiLCJzZXRVc2VycyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJtYXAiLCJ1c2VyIiwiaWQiLCJ1c2VySWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=