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


// import "./css/index.css";


var container = document.getElementById("root");
if (container) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jsx_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
}

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
/* harmony import */ var _InterventionForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterventionForm */ "./react/jsx/InterventionForm.js");
/* harmony import */ var _InterventionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterventionList */ "./react/jsx/InterventionList.js");



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, window.location.pathname === '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InterventionList__WEBPACK_IMPORTED_MODULE_2__["default"], null), window.location.pathname !== '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Fiche d'intervention"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InterventionForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./react/jsx/Axios.js":
/*!****************************!*\
  !*** ./react/jsx/Axios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


// Create an axios object with default headers
var ax = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

// Catch unauthorized request and redirect if error
ax.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location = '/login';
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ax);

/***/ }),

/***/ "./react/jsx/Containers.js":
/*!*********************************!*\
  !*** ./react/jsx/Containers.js ***!
  \*********************************/
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
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Containers = function Containers(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    containers = _useState2[0],
    setContainers = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_18__["default"].get('/containersByFluid/' + props.data.id).then(function (response) {
      setContainers(response.data);
    });
  }, [props.data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    onChange: function onChange(e) {
      props.onChange(containers[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "containerLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "------"), containers.map(function (container, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
      value: i,
      key: container.id
    }, container.serialNumber);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "containerLabel",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-bottle-droplet"
  }), " Contenant"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Containers);

/***/ }),

/***/ "./react/jsx/DetectorControlDate.js":
/*!******************************************!*\
  !*** ./react/jsx/DetectorControlDate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var DetectorControlDate = function DetectorControlDate(props) {
  var controlDate = new Date(props.data.controlDate).toLocaleDateString("fr-fr");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    disabled: true,
    className: "border border-0 form-control form-control-sm",
    id: "detectorControlDate",
    value: controlDate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "detectorControlDate",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-clipboard-check"
  }), " Date du dernier contr\xF4le (", props.data.name, ")"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetectorControlDate);

/***/ }),

/***/ "./react/jsx/Detectors.js":
/*!********************************!*\
  !*** ./react/jsx/Detectors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
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
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Detectors = function Detectors(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    detectors = _useState2[0],
    setDetectors = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("/detectors").then(function (response) {
      setDetectors(response.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    key: props.data,
    onChange: function onChange(e) {
      props.onChange(detectors[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "detectorLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "------"), detectors.map(function (detector, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
      value: i,
      key: detector.id
    }, detector.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "detectorLabel",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-compass"
  }), " D\xE9tecteur de fuites"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detectors);

/***/ }),

/***/ "./react/jsx/Equipment.js":
/*!********************************!*\
  !*** ./react/jsx/Equipment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
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
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Equipment = function Equipment(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    equipment = _useState2[0],
    setEquipment = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("/equipment").then(function (response) {
      setEquipment(response.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    onChange: function onChange(e) {
      props.onChange(equipment[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "equipmentLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "------"), equipment.map(function (gear, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
      value: i,
      key: gear.id
    }, gear.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "equipmentLabel",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-gears"
  }), " Equipement concern\xE9"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equipment);

/***/ }),

/***/ "./react/jsx/EquipmentDetails.js":
/*!***************************************!*\
  !*** ./react/jsx/EquipmentDetails.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var EquipmentDetails = function EquipmentDetails(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container mt-1 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "d-md-flex flex-md-row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-floating flex-xl-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    disabled: true,
    className: "border border-0 form-control form-control-sm rounded-0",
    id: "equipmentName",
    value: props.data.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "equipmentName",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-tag"
  }), " Identification")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-floating flex-xl-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    disabled: true,
    className: "border border-0 form-control form-control-sm rounded-0",
    id: "fluidName",
    value: props.data.fluid.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "fluidName",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-droplet"
  }), " D\xE9nomination du fluide")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-floating flex-xl-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    disabled: true,
    className: "border border-0 form-control form-control-sm rounded-0",
    id: "fluidQuantity",
    value: props.data.weight.toFixed(2)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "fluidQuantity",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-weight-hanging"
  }), " Charge totale (kg)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-floating flex-xl-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    disabled: true,
    className: "border border-0 form-control form-control-sm rounded-0",
    id: "fluidCO2",
    value: props.data.co2EqTonnage.toFixed(2)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "fluidCO2",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-cloud"
  }), " Tonnage \xE9quivalent C0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("sub", null, "2")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-check form-switch mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "checkbox",
    disabled: true,
    className: "form-check-input",
    role: "switch",
    id: "leakDetectionSystem",
    checked: props.data.leakDetectionSystem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "leakDetectionSystem",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-wind"
  }), " Pr\xE9sence d'un syst\xE8me permanent de d\xE9tection de fuites")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentDetails);

/***/ }),

/***/ "./react/jsx/FluidDestination.js":
/*!***************************************!*\
  !*** ./react/jsx/FluidDestination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FluidDestination = function FluidDestination(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-outline m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label small",
    htmlFor: "collectedFluidDestination"
  }, "Installation pr\xE9vue de destination du fluide r\xE9cup\xE9r\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    rows: "4",
    id: "collectedFluidDestination",
    className: "form-control form-control-sm",
    placeholder: "Nom, SIRET, adresse",
    onChange: function onChange(e) {
      props.onChange(e);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FluidDestination);

/***/ }),

/***/ "./react/jsx/FluidHandling.js":
/*!************************************!*\
  !*** ./react/jsx/FluidHandling.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/react-tooltip.esm.min.js");
/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-tooltip/dist/react-tooltip.css */ "./node_modules/react-tooltip/dist/react-tooltip.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FluidHandling = function FluidHandling(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)({
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'BSFF': ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    fluidQuantities = _useState2[0],
    setFluidQuantities = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    sumABC = _useState4[0],
    setSumABC = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    sumDE = _useState6[0],
    setSumDE = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    fluidLoading = _useState8[0],
    setFluidLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    fluidCollecting = _useState10[0],
    setFluidCollecting = _useState10[1];
  var onFluidAChange = function onFluidAChange(e) {
    var A = Number(e.target.value);
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      A: A
    });
    setFluidQuantities(fq);
    var sum = fluidQuantities.A + fluidQuantities.B + fluidQuantities.C;
    if (!isNaN(sum)) {
      setSumABC(A + fluidQuantities.B + fluidQuantities.C);
      props.onChange(fq);
    }
  };
  var onFluidBChange = function onFluidBChange(e) {
    var B = Number(e.target.value);
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      B: B
    });
    setFluidQuantities(fq);
    setSumABC(fluidQuantities['A'] + B + fluidQuantities['C']);
    props.onChange(fq);
  };
  var onFluidCChange = function onFluidCChange(e) {
    var C = Number(e.target.value);
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      C: C
    });
    setFluidQuantities(fq);
    setSumABC(fluidQuantities['A'] + fluidQuantities['B'] + C);
    props.onChange(fq);
  };
  var onFluidDChange = function onFluidDChange(e) {
    var D = Number(e.target.value);
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      D: D
    });
    setFluidQuantities(fq);
    setSumDE(D + fluidQuantities['E']);
    props.onChange(fq);
  };
  var onFluidEChange = function onFluidEChange(e) {
    var E = Number(e.target.value);
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      E: E
    });
    setFluidQuantities(fq);
    setSumDE(fluidQuantities['D'] + E);
    props.onChange(fq);
  };
  var onBsffChange = function onBsffChange(e) {
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      BSFF: e.target.value
    });
    setFluidQuantities(fq);
    props.onChange(fq);
  };
  var onLoadingClick = function onLoadingClick(e) {
    setFluidLoading(e.target.checked);
    if (!e.target.checked) {
      var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
        A: 0,
        B: 0,
        C: 0
      });
      setFluidQuantities(fq);
      props.onChange(fq);
    }
  };
  var onCollectingClick = function onCollectingClick(e) {
    setFluidCollecting(e.target.checked);
    if (!e.target.checked) {
      var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
        D: 0,
        BSFF: '',
        E: 0
      });
      setFluidQuantities(fq);
      props.onChange(fq);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "d-flex bg-secondary text-light rounded mx-auto p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "me-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-droplet"
  }), " Manipulation du fluide frigorig\xE8ne"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    className: "btn-check",
    type: "checkbox",
    role: "switch",
    id: "loadingFluid",
    onClick: function onClick(e) {
      onLoadingClick(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    className: "btn border-0 btn-outline-dark btn-sm text-white",
    htmlFor: "loadingFluid",
    id: "tt-load"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-turn-down"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_28__.Tooltip, {
    anchorId: "tt-load",
    content: "Chargement"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    className: "btn-check",
    type: "checkbox",
    role: "switch",
    id: "collectingFluid",
    onClick: function onClick(e) {
      onCollectingClick(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    className: "btn border-0 btn-outline-dark btn-sm text-white",
    htmlFor: "collectingFluid",
    id: "tt-collect"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-turn-up"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_28__.Tooltip, {
    anchorId: "tt-collect",
    content: "R\xE9cup\xE9ration"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "d-md-flex flex-md-row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-md-6",
    hidden: !fluidLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "border border-0 form-control form-control-sm",
    id: "totalLoadedFluidQuantity",
    disabled: true,
    value: sumABC
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "totalLoadedFluidQuantity",
    className: "fw-bold text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-turn-down"
  }), " Quantit\xE9 totale charg\xE9e ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(A+B+C)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "virginFluidQuantity",
    defaultValue: "0",
    onChange: onFluidAChange,
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "virginFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(A)"), " Dont fluide vierge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "recycledFluidQuantity",
    defaultValue: "0",
    onChange: onFluidBChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "recycledFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(B)"), " Dont fluide recycl\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "regeneratedFluidQuantity",
    defaultValue: "0",
    onChange: onFluidCChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "regeneratedFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(C)"), " Dont fluide r\xE9g\xE9n\xE9r\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-md-6",
    hidden: !fluidCollecting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "border border-0 form-control form-control-sm",
    id: "totalRetrievedFluidQuantity",
    disabled: true,
    value: sumDE
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "totalRetrievedFluidQuantity",
    className: "fw-bold text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-turn-up"
  }), " Quantit\xE9 totale r\xE9cup\xE9r\xE9e ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(D+E)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "forProcessingFluidQuantity",
    defaultValue: "0",
    autoFocus: true,
    onChange: onFluidDChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "forProcessingFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(D)"), " Dont fluide destin\xE9 au traitement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "bsffNumber",
    onChange: onBsffChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "bsffNumber",
    className: "fw-bold"
  }, "Num\xE9ro du BSFF (si connu)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "reusableFluidQuantity",
    defaultValue: "0",
    onChange: onFluidEChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "reusableFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(E)"), " Dont fluide conserv\xE9 pour r\xE9utilisation")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FluidHandling);

/***/ }),

/***/ "./react/jsx/InterventionForm.js":
/*!***************************************!*\
  !*** ./react/jsx/InterventionForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./User */ "./react/jsx/User.js");
/* harmony import */ var _Detectors__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Detectors */ "./react/jsx/Detectors.js");
/* harmony import */ var _DetectorControlDate__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./DetectorControlDate */ "./react/jsx/DetectorControlDate.js");
/* harmony import */ var _Equipment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Equipment */ "./react/jsx/Equipment.js");
/* harmony import */ var _InterventionTypes__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./InterventionTypes */ "./react/jsx/InterventionTypes.js");
/* harmony import */ var _OtherType__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./OtherType */ "./react/jsx/OtherType.js");
/* harmony import */ var _Leakage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Leakage */ "./react/jsx/Leakage.js");
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Containers */ "./react/jsx/Containers.js");
/* harmony import */ var _EquipmentDetails__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./EquipmentDetails */ "./react/jsx/EquipmentDetails.js");
/* harmony import */ var _FluidHandling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./FluidHandling */ "./react/jsx/FluidHandling.js");
/* harmony import */ var _Wastes__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Wastes */ "./react/jsx/Wastes.js");
/* harmony import */ var _FluidDestination__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./FluidDestination */ "./react/jsx/FluidDestination.js");
/* harmony import */ var _Remarks__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Remarks */ "./react/jsx/Remarks.js");
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













































var InterventionForm = function InterventionForm() {
  // Current date
  var date = new Date();
  date.setDate(date.getDate());
  var now = date.toLocaleDateString("fr-CA");

  // States

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(now),
    _useState2 = _slicedToArray(_useState, 2),
    interventionDate = _useState2[0],
    setInterventionDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    equipment = _useState4[0],
    setEquipment = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    otherType = _useState8[0],
    setOtherType = _useState8[1];

  // Intervention type is 5 or 6
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    leakControl = _useState10[0],
    setLeakControl = _useState10[1];

  // Intervention type is not 5 and not 6
  // Leak control is mandatory after an intervention
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    mandatoryLeakControl = _useState12[0],
    setMandatoryLeakControl = _useState12[1];

  // Detector used for leakage control
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    detector = _useState14[0],
    setDetector = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    leakLocations = _useState16[0],
    setLeakLocations = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    leakFixed = _useState18[0],
    setLeakFixed = _useState18[1];

  // Fluid quantities
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)({
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'BSFF': ''
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    fluidQuantities = _useState20[0],
    setFluidQuantities = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    container = _useState22[0],
    setContainer = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    fluidDestination = _useState24[0],
    setFluidDestination = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    remarks = _useState26[0],
    setRemarks = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    pdfPath = _useState28[0],
    setPdfPath = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    leaksPosted = _useState30[0],
    setLeaksPosted = _useState30[1];

  // In case of input error → used to disable submit button
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    formError = _useState32[0],
    setFormError = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (leaksPosted) {
      window.open(pdfPath, '_blank');
      window.location.reload();
    } else {
      // check for form errors here
      if (!equipment) setFormError(true);else if (!type) setFormError(true);else if (type.id != 5 && type.id != 6 && checkFluidHandling()) setFormError(true);else if (!equipment.leakDetectionSystem && !detector) setFormError(true);else if (checkLeaks()) setFormError(true);else setFormError(false);
    }
  });
  var checkFluidHandling = function checkFluidHandling() {
    var q = fluidQuantities;
    return q.A + q.B + q.C === 0 && q.D + q.E === 0;
  };
  var checkLeaks = function checkLeaks() {
    var l = leakLocations;
    if (l.length === 0) return false;
    for (var i = 0; i < l.length; i++) {
      if (!l[i]) return true;
    }
    return false;
  };

  // Events

  var onInterventionDateChange = function onInterventionDateChange(e) {
    setInterventionDate(e.target.value);
  };
  var onEquipmentChange = function onEquipmentChange(e) {
    handleReset();
    setEquipment(e);
  };
  var onTypeChange = function onTypeChange(e) {
    if (!e) {
      setLeakControl(false);
      setMandatoryLeakControl(false);
    } else {
      setLeakControl(e.id === 5 || e.id === 6);
      setMandatoryLeakControl(e.id !== 5 && e.id !== 6);
    }
    setType(e);
    setDetector(null);
  };
  var onOtherTypeChange = function onOtherTypeChange(e) {
    setOtherType(e.target.value);
  };
  var onDetectorChange = function onDetectorChange(e) {
    setDetector(e);
  };
  var onLeakLocationChange = function onLeakLocationChange(e) {
    setLeakLocations(e);
  };
  var onLeakFixedChange = function onLeakFixedChange(e) {
    setLeakFixed(e);
  };
  var onFluidQuantitiesChange = function onFluidQuantitiesChange(e) {
    var sumABC = e.A + e.B + e.C;
    var sumDE = e.D + e.B;
    setFormError(isNaN(sumABC) || isNaN(sumDE));
    setFluidQuantities(e);
  };
  var onContainerChange = function onContainerChange(e) {
    setContainer(e);
  };
  var onFluidDestinationChange = function onFluidDestinationChange(e) {
    setFluidDestination(e.target.value);
  };
  var onRemarksChange = function onRemarksChange(e) {
    setRemarks(e.target.value);
  };
  var onError = function onError(errorState) {
    setFormError(errorState);
  };
  var postLeaks = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(interventionID) {
      var count, i, leak;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // POST leaks one by one
            count = leakLocations.length;
            i = 0;
          case 2:
            if (!(i < leakLocations.length)) {
              _context.next = 9;
              break;
            }
            leak = {
              "num": i + 1,
              "count": count,
              "location": leakLocations[i],
              "fixed": leakFixed[i],
              "intervention": "/api/interventions/" + interventionID
            };
            _context.next = 6;
            return _Axios__WEBPACK_IMPORTED_MODULE_43__["default"].post('/leakages', leak)["catch"](function (error) {
              console.log('ERROR leakage POST', error);
              return;
            });
          case 6:
            i++;
            _context.next = 2;
            break;
          case 9:
            setLeaksPosted(true);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function postLeaks(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var intervention = {
      "date": interventionDate,
      "virginFluidQuantity": fluidQuantities.A,
      "recycledFluidQuantity": fluidQuantities.B,
      "regeneratedFluidQuantity": fluidQuantities.C,
      "forProcessingFluidQuantity": fluidQuantities.D,
      "bsffNumber": fluidQuantities.BSFF,
      "reusableFluidQuantity": fluidQuantities.E,
      "collectedFluidDestination": fluidDestination,
      "remarks": remarks,
      "interventionType": "/api/intervention_types/" + type.id,
      "otherInterventionType": otherType,
      "equipment": "/api/equipment/" + equipment.id,
      "container": container ? "/api/containers/" + container.id : null,
      "accessory": detector ? "/api/accessories/" + detector.id : null,
      "leaks": leakLocations.length > 0,
      "user": "/api/users/" + window.user,
      "pdfPath": ""
    };

    // POST intervention
    _Axios__WEBPACK_IMPORTED_MODULE_43__["default"].post('/interventions', intervention).then(function (response) {
      // POST leaks
      postLeaks(response.data.id);
      setPdfPath(response.data.pdfPath);
    })["catch"](function (error) {
      console.log('ERROR', error);
    });
  };
  var handleReset = function handleReset() {
    setEquipment(null);
    setType(null);
    setOtherType("");
    setLeakControl(false);
    setMandatoryLeakControl(false);
    setDetector(null);
    setLeakLocations([]);
    setLeakFixed([]);
    setFluidQuantities({
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'BSFF': ''
    });
    setContainer(null);
    setFluidDestination("");
    setRemarks("");
    setPdfPath("");
    setLeaksPosted(false);
    setFormError(false);
  };

  // Collected fluid will be installed in another equipment
  var mustInstall = function mustInstall() {
    return fluidQuantities.E > 0;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "section-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_User__WEBPACK_IMPORTED_MODULE_30__["default"], {
    data: window.user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("input", {
    type: "date",
    id: "interventionDate",
    className: "form-control form-control-sm",
    defaultValue: now,
    onChange: onInterventionDateChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("label", {
    htmlFor: "interventionDate",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("i", {
    className: "fas fa-calendar-days"
  }), " Date de l'intervention")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Equipment__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onChange: onEquipmentChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_EquipmentDetails__WEBPACK_IMPORTED_MODULE_38__["default"], {
    data: equipment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_InterventionTypes__WEBPACK_IMPORTED_MODULE_34__["default"], {
    onChange: onTypeChange,
    data: equipment.id
  })), (type === null || type === void 0 ? void 0 : type.id) === 8 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_OtherType__WEBPACK_IMPORTED_MODULE_35__["default"], {
    onChange: onOtherTypeChange
  }), equipment && type && !leakControl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_FluidHandling__WEBPACK_IMPORTED_MODULE_39__["default"], {
    onChange: onFluidQuantitiesChange,
    onError: onError
  }), (mustInstall() || fluidQuantities.D > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Containers__WEBPACK_IMPORTED_MODULE_37__["default"], {
    data: equipment.fluid,
    onChange: onContainerChange
  }), fluidQuantities.D > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Wastes__WEBPACK_IMPORTED_MODULE_40__["default"], {
    data: equipment.fluid.fluidType
  })), mustInstall() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_FluidDestination__WEBPACK_IMPORTED_MODULE_41__["default"], {
    onChange: onFluidDestinationChange
  }), type && !(equipment !== null && equipment !== void 0 && equipment.leakDetectionSystem) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Detectors__WEBPACK_IMPORTED_MODULE_31__["default"], {
    data: type.id,
    onChange: onDetectorChange
  }), detector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_DetectorControlDate__WEBPACK_IMPORTED_MODULE_32__["default"], {
    data: detector
  })), (leakControl || mandatoryLeakControl) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Leakage__WEBPACK_IMPORTED_MODULE_36__["default"], {
    data: type === null || type === void 0 ? void 0 : type.id,
    onLocationChange: onLeakLocationChange,
    onFixedChange: onLeakFixedChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Remarks__WEBPACK_IMPORTED_MODULE_42__["default"], {
    onChange: onRemarksChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex d-flex-row align-items-center justify-content-between m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    className: "btn btn-sm btn-warning",
    type: "reset",
    onClick: handleReset
  }, "Annuler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    className: "btn btn-sm btn-danger",
    type: "submit",
    disabled: formError,
    onClick: handleSubmit
  }, "Enregistrer")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionForm);

/***/ }),

/***/ "./react/jsx/InterventionList.js":
/*!***************************************!*\
  !*** ./react/jsx/InterventionList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./react/jsx/User.js");
/* harmony import */ var _Interventions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interventions */ "./react/jsx/Interventions.js");



var InterventionList = function InterventionList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: window.user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Interventions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: window.user
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionList);

/***/ }),

/***/ "./react/jsx/InterventionTypes.js":
/*!****************************************!*\
  !*** ./react/jsx/InterventionTypes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
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
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var InterventionTypes = function InterventionTypes(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    types = _useState2[0],
    setTypes = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_18__["default"].get('/intervention_types').then(function (response) {
      setTypes(response.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    key: props.data // reset if equipment changed
    ,
    onChange: function onChange(e) {
      props.onChange(types[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "typeLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "------"), types.map(function (type, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
      value: i,
      key: type.id
    }, type.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "typeLabel",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-screwdriver-wrench"
  }), " Nature de l'intervention"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionTypes);

/***/ }),

/***/ "./react/jsx/Interventions.js":
/*!************************************!*\
  !*** ./react/jsx/Interventions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Interventions = function Interventions(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    interventions = _useState4[0],
    setInterventions = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("/interventionsByUser/" + props.data).then(function (response) {
      setInterventions(response.data);
      setLoading(false);
    })["catch"](function (error) {
      console.log(error);
      setInterventions([]);
    });
  }, [props.data]);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "spinner-border spinner-border-sm text-secondary m-2",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
    className: "visually-hidden"
  }, "Chargement...")));
  if (interventions.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("i", {
      className: "fas fa-circle-xmark"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
      className: "small"
    }, " Pas d'intervention trouv\xE9e"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, interventions.map(function (intervention, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("li", {
      className: "list-group-item small",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", null, new Date(intervention.date).toLocaleDateString('fr-CA')), " ", intervention.interventionType.name, " ", intervention.equipment.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
      href: intervention.pdfPath,
      target: "_blank"
    }, "PDF"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interventions);

/***/ }),

/***/ "./react/jsx/Leakage.js":
/*!******************************!*\
  !*** ./react/jsx/Leakage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/react-tooltip.esm.min.js");
/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-tooltip/dist/react-tooltip.css */ "./node_modules/react-tooltip/dist/react-tooltip.css");



















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Leak = function Leak(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
    className: "input-group-text border border-0 bg-secondary text-light rounded me-2"
  }, props.id + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("input", {
    key: props.data,
    type: "text",
    id: props.id,
    className: "form-control form-control-sm border border-0 ml-2 me-2",
    onChange: function onChange(e) {
      props.onChange(e);
    },
    placeholder: "Localisation de la fuite",
    autoFocus: true
  }));
};
var Leakage = function Leakage(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    leakComponents = _useState2[0],
    setLeakComponents = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    locations = _useState4[0],
    setLocations = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    fixed = _useState6[0],
    setFixed = _useState6[1];
  var addLeak = function addLeak() {
    var index = leakComponents.length;
    setLeakComponents([].concat(_toConsumableArray(leakComponents), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(Leak, {
      data: props.data,
      id: index,
      onChange: onLeakChange
    })]));
    var locationsCopy = [].concat(_toConsumableArray(locations), [""]);
    var fixedCopy = _toConsumableArray(fixed);
    fixedCopy.push(false);
    setLocations(locationsCopy);
    setFixed(fixedCopy);
    props.onLocationChange(locationsCopy);
    props.onFixedChange(fixedCopy);
  };
  var removeLeak = function removeLeak(e) {
    var index = e.target.id - 20;
    var leakComponentsCopy = _toConsumableArray(leakComponents);
    var locationsCopy = _toConsumableArray(locations);
    var fixedCopy = _toConsumableArray(fixed);
    leakComponentsCopy.splice(index, 1);
    locationsCopy.splice(index, 1);
    fixedCopy.splice(index, 1);
    setLeakComponents(leakComponentsCopy);
    setLocations(locationsCopy);
    setFixed(fixedCopy);
    props.onLocationChange(locationsCopy);
    props.onFixedChange(fixedCopy);
  };
  var onLeakChange = function onLeakChange(e) {
    var index = e.target.id;
    var locationsCopy = _toConsumableArray(locations);
    locationsCopy[index] = e.target.value;
    setLocations(locationsCopy);
    props.onLocationChange(locationsCopy);
  };
  var onLeakFixed = function onLeakFixed(e) {
    var index = e.target.id - 10;
    var fixedCopy = _toConsumableArray(fixed);
    fixedCopy[index] = e.target.checked;
    setFixed(fixedCopy);
    props.onFixedChange(fixedCopy);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "d-flex d-flex-row justify-content-between align-items-center my-2 bg-secondary p-2 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "text-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("i", {
    className: "fas fa-wind"
  }), " Fuites constat\xE9es lors du contr\xF4le d'\xE9tanch\xE9it\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("button", {
    type: "button",
    className: "btn btn-sm btn-outline-light",
    onClick: addLeak,
    disabled: leakComponents.length === 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("i", {
    className: "fas fa-plus"
  }), " Ajouter")), leakComponents.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("fieldset", {
    className: "m-2 border border-1 rounded"
  }, leakComponents.map(function (leak, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
      key: i,
      className: "input-group m-2 d-flex d-flex-row align-items-center justify-content-even"
    }, leak, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("input", {
      type: "checkbox",
      className: "btn-check",
      id: 10 + i,
      autoComplete: "off",
      onClick: onLeakFixed
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("label", {
      id: "tt-wrench",
      htmlFor: 10 + i,
      className: "btn btn-outline-secondary border border-0 rounded"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("i", {
      className: "fas fa-wrench"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_20__.Tooltip, {
      anchorId: "tt-wrench",
      content: "Fuite r\xE9par\xE9e"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("button", {
      type: "button",
      id: 20 + i,
      className: "btn-close me-3 rounded-circle",
      onClick: removeLeak,
      "aria-label": "Close",
      disabled: i + 1 < leakComponents.length
    }));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leakage);

/***/ }),

/***/ "./react/jsx/OtherType.js":
/*!********************************!*\
  !*** ./react/jsx/OtherType.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Input text for "other" intervention type
var OtherType = function OtherType(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "otherInterventionType",
    placeholder: "Veuillez pr\xE9ciser le type d'intervention...",
    onChange: function onChange(e) {
      props.onChange(e);
    },
    autoFocus: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OtherType);

/***/ }),

/***/ "./react/jsx/Remarks.js":
/*!******************************!*\
  !*** ./react/jsx/Remarks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Remarks = function Remarks(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-outline m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label small",
    htmlFor: "remarks"
  }, "Observations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    rows: "4",
    id: "remarks",
    className: "form-control form-control-sm",
    onChange: function onChange(e) {
      props.onChange(e);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Remarks);

/***/ }),

/***/ "./react/jsx/User.js":
/*!***************************!*\
  !*** ./react/jsx/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var User = function User(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_17__["default"].get('/users/' + props.data).then(function (response) {
      setUser(response.data);
    });
  }, [props.data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "mx-2 me-2 bg-secondary p-2 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "text-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fas fa-user"
  }), " ", user.firstName, " ", user.lastName));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./react/jsx/Wastes.js":
/*!*****************************!*\
  !*** ./react/jsx/Wastes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Wastes = function Wastes(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "my-2 bg-secondary p-2 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "fas fa-dumpster"
  }), " D\xE9nomination ADR/RID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, props.data.flammable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "border border-0 rounded-0",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "fas fa-dumpster-fire"
  }), " ", props.data.name), props.data.flammable || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "border border-0 rounded-0",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "fas fa-dumpster"
  }), " ", props.data.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wastes);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ae3089"], () => (__webpack_exec__("./react/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFJckUsS0FBSyxFQUFLO0VBRXhCLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCO0lBQUssU0FBUyxFQUFDO0VBQStCLGdCQUM1QztJQUFLLFNBQVMsRUFBQztFQUFZLGdCQUN6QjtJQUFHLFNBQVMsRUFBQztFQUFpQixFQUFLLDRCQUNyQyxDQUFNLENBQ0YsZUFDTix3RUFDR0EsS0FBSyxDQUFDSSxJQUFJLENBQUNpSyxTQUFTLGlCQUNuQjtJQUFLLFNBQVMsRUFBQywyQkFBMkI7SUFBQyxRQUFRO0VBQUEsZ0JBQ2pEO0lBQUcsU0FBUyxFQUFDO0VBQXNCLEVBQUssS0FBQyxFQUFDckssS0FBSyxDQUFDSSxJQUFJLENBQUNjLElBQUksQ0FDckQsRUFFUGxCLEtBQUssQ0FBQ0ksSUFBSSxDQUFDaUssU0FBUyxpQkFDbkI7SUFBSyxTQUFTLEVBQUMsMkJBQTJCO0lBQUMsUUFBUTtFQUFBLGdCQUNqRDtJQUFHLFNBQVMsRUFBQztFQUFpQixFQUFLLEtBQUMsRUFBQ3JLLEtBQUssQ0FBQ0ksSUFBSSxDQUFDYyxJQUFJLENBQ2hELENBRUosZUFDUixzRUFBTSxDQUNBO0FBRVYsQ0FBQztBQUVELGlFQUFlbUQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0F4aW9zLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9Db250YWluZXJzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvckNvbnRyb2xEYXRlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWREZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWRIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0xlYWthZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L090aGVyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvUmVtYXJrcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvV2FzdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuLy8gaW1wb3J0IFwiLi9jc3MvaW5kZXguY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vanN4L0FwcFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbmlmIChjb250YWluZXIpIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuICByb290LnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0yXCI+XG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgIDwvZGl2PlxuKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEludGVydmVudGlvbkZvcm0gZnJvbSBcIi4vSW50ZXJ2ZW50aW9uRm9ybVwiO1xuaW1wb3J0IEludGVydmVudGlvbkxpc3QgZnJvbSBcIi4vSW50ZXJ2ZW50aW9uTGlzdFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyAmJlxuICAgICAgICA8SW50ZXJ2ZW50aW9uTGlzdCAvPlxuICAgIH1cbiAgICB7IFxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycgJiZcbiAgICAgIDw+XG4gICAgICAgIDxoMj5GaWNoZSBkJ2ludGVydmVudGlvbjwvaDI+XG4gICAgICAgIDxJbnRlcnZlbnRpb25Gb3JtIC8+XG4gICAgICA8Lz5cbiAgICB9XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gQ3JlYXRlIGFuIGF4aW9zIG9iamVjdCB3aXRoIGRlZmF1bHQgaGVhZGVyc1xuY29uc3QgYXggPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcIi9hcGlcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICB9LFxufSk7XG5cbi8vIENhdGNoIHVuYXV0aG9yaXplZCByZXF1ZXN0IGFuZCByZWRpcmVjdCBpZiBlcnJvclxuYXguaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHJlc3BvbnNlLCAoZXJyb3IpID0+IHtcbiAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBheDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBDb250YWluZXJzID0gKHByb3BzKSA9PiB7XG4gIFxuICBjb25zdCBbY29udGFpbmVycywgc2V0Q29udGFpbmVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KCcvY29udGFpbmVyc0J5Rmx1aWQvJyArIHByb3BzLmRhdGEuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRDb250YWluZXJzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtwcm9wcy5kYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoY29udGFpbmVyc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImNvbnRhaW5lckxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgY29udGFpbmVycy5tYXAoKGNvbnRhaW5lciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17Y29udGFpbmVyLmlkfT5cbiAgICAgICAgICAgIHtjb250YWluZXIuc2VyaWFsTnVtYmVyfXsvKiAtLSB7Y29udGFpbmVyLmZsdWlkUXVhbnRpdHkudG9GaXhlZCgyKX0ve2NvbnRhaW5lci5jYXBhY2l0eS50b0ZpeGVkKDIpfSAqL31cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWluZXJMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvdHRsZS1kcm9wbGV0XCI+PC9pPiBDb250ZW5hbnRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGV0ZWN0b3JDb250cm9sRGF0ZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGNvbnRyb2xEYXRlID0gbmV3IERhdGUocHJvcHMuZGF0YS5jb250cm9sRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItZnJcIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCJcbiAgICAgICAgdmFsdWU9e2NvbnRyb2xEYXRlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmQtY2hlY2tcIj48L2k+IERhdGUgZHUgZGVybmllciBjb250csO0bGUgKHtwcm9wcy5kYXRhLm5hbWV9KVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvckNvbnRyb2xEYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IERldGVjdG9ycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtkZXRlY3RvcnMsIHNldERldGVjdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2RldGVjdG9yc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RGV0ZWN0b3JzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBrZXk9e3Byb3BzLmRhdGF9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGRldGVjdG9yc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBkZXRlY3RvcnMubWFwKChkZXRlY3RvciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17ZGV0ZWN0b3IuaWR9PlxuICAgICAgICAgICAge2RldGVjdG9yLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbXBhc3NcIj48L2k+IETDqXRlY3RldXIgZGUgZnVpdGVzXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdG9ycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBFcXVpcG1lbnQgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZXF1aXBtZW50LCBzZXRFcXVpcG1lbnRdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9lcXVpcG1lbnRcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldEVxdWlwbWVudChyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlcXVpcG1lbnRbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJlcXVpcG1lbnRMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGVxdWlwbWVudC5tYXAoKGdlYXIsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2dlYXIuaWR9PlxuICAgICAgICAgICAge2dlYXIubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnRMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdlYXJzXCI+PC9pPiBFcXVpcGVtZW50IGNvbmNlcm7DqVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEVxdWlwbWVudERldGFpbHMgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTEgbWItMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWZsZXggZmxleC1tZC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImVxdWlwbWVudE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TmFtZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPiBJZGVudGlmaWNhdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLmZsdWlkLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkTmFtZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHJvcGxldFwiPjwvaT4gRMOpbm9taW5hdGlvbiBkdSBmbHVpZGVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEud2VpZ2h0LnRvRml4ZWQoMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdlaWdodC1oYW5naW5nXCI+PC9pPiBDaGFyZ2UgdG90YWxlIChrZylcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZENPMlwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5jbzJFcVRvbm5hZ2UudG9GaXhlZCgyKX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkQ08yXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZFwiPjwvaT4gVG9ubmFnZSDDqXF1aXZhbGVudCBDMDxzdWI+Mjwvc3ViPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbXQtMVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgaWQ9XCJsZWFrRGV0ZWN0aW9uU3lzdGVtXCJcbiAgICAgICAgICBjaGVja2VkPXtwcm9wcy5kYXRhLmxlYWtEZXRlY3Rpb25TeXN0ZW19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGVha0RldGVjdGlvblN5c3RlbVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRcIj48L2k+IFByw6lzZW5jZSBkJ3VuIHN5c3TDqG1lIHBlcm1hbmVudCBkZSBkw6l0ZWN0aW9uIGRlIGZ1aXRlc1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50RGV0YWlscztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRmx1aWREZXN0aW5hdGlvbiA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW91dGxpbmUgbS0yXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzbWFsbFwiXG4gICAgICAgIGh0bWxGb3I9XCJjb2xsZWN0ZWRGbHVpZERlc3RpbmF0aW9uXCJcbiAgICAgID5cbiAgICAgICAgSW5zdGFsbGF0aW9uIHByw6l2dWUgZGUgZGVzdGluYXRpb24gZHUgZmx1aWRlIHLDqWN1cMOpcsOpXG4gICAgICA8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgaWQ9XCJjb2xsZWN0ZWRGbHVpZERlc3RpbmF0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tLCBTSVJFVCwgYWRyZXNzZVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgID5cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGbHVpZERlc3RpbmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0ICdyZWFjdC10b29sdGlwL2Rpc3QvcmVhY3QtdG9vbHRpcC5jc3MnO1xuXG5jb25zdCBGbHVpZEhhbmRsaW5nID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHtcbiAgICAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ1xuICB9KTtcbiAgY29uc3QgW3N1bUFCQywgc2V0U3VtQUJDXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3VtREUsIHNldFN1bURFXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmx1aWRMb2FkaW5nLCBzZXRGbHVpZExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmx1aWRDb2xsZWN0aW5nLCBzZXRGbHVpZENvbGxlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRmx1aWRBQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQTogQVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBsZXQgc3VtID0gZmx1aWRRdWFudGl0aWVzLkEgKyBmbHVpZFF1YW50aXRpZXMuQiArIGZsdWlkUXVhbnRpdGllcy5DO1xuICAgIGlmICghaXNOYU4oc3VtKSkge1xuICAgICAgc2V0U3VtQUJDKEErZmx1aWRRdWFudGl0aWVzLkIrZmx1aWRRdWFudGl0aWVzLkMpO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRCQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQjogQlxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1BQkMoZmx1aWRRdWFudGl0aWVzWydBJ10rQitmbHVpZFF1YW50aXRpZXNbJ0MnXSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZENDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBDID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBDOiBDXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bUFCQyhmbHVpZFF1YW50aXRpZXNbJ0EnXStmbHVpZFF1YW50aXRpZXNbJ0InXStDKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEQ6IERcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtREUoRCtmbHVpZFF1YW50aXRpZXNbJ0UnXSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZEVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBFID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBFOiBFXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bURFKGZsdWlkUXVhbnRpdGllc1snRCddK0UpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uQnNmZkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQlNGRjogZS50YXJnZXQudmFsdWVcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25Mb2FkaW5nQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldEZsdWlkTG9hZGluZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGxldCBmcSA9IHtcbiAgICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgICBBOiAwLFxuICAgICAgICBCOiAwLFxuICAgICAgICBDOiAwLFxuICAgICAgfVxuICAgICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkNvbGxlY3RpbmdDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRDb2xsZWN0aW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEQ6IDAsXG4gICAgICAgIEJTRkY6ICcnLFxuICAgICAgICBFOiAwLFxuICAgICAgfVxuICAgICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBiZy1zZWNvbmRhcnkgdGV4dC1saWdodCByb3VuZGVkIG14LWF1dG8gcC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBNYW5pcHVsYXRpb24gZHUgZmx1aWRlIGZyaWdvcmlnw6huZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIGlkPVwibG9hZGluZ0ZsdWlkXCIgb25DbGljaz17KGUpID0+IHtvbkxvYWRpbmdDbGljayhlKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwibG9hZGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtbG9hZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtbG9hZFwiIGNvbnRlbnQ9XCJDaGFyZ2VtZW50XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiBpZD1cImNvbGxlY3RpbmdGbHVpZFwiIG9uQ2xpY2s9eyhlKSA9PiB7b25Db2xsZWN0aW5nQ2xpY2soZSl9fSAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJvcmRlci0wIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RpbmdGbHVpZFwiXG4gICAgICAgICAgICBpZD1cInR0LWNvbGxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLXVwXCI+PC9pPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC1jb2xsZWN0XCIgY29udGVudD1cIlLDqWN1cMOpcmF0aW9uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBoaWRkZW49eyFmbHVpZExvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLWRvd25cIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRBQ2hhbmdlfVxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEEpPC9zdXA+IERvbnQgZmx1aWRlIHZpZXJnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEJDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQ0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQyk8L3N1cD4gRG9udCBmbHVpZGUgcsOpZ8OpbsOpcsOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGhpZGRlbj17IWZsdWlkQ29sbGVjdGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgdmFsdWU9e3N1bURFfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi11cFwiPjwvaT4gUXVhbnRpdMOpIHRvdGFsZSByw6ljdXDDqXLDqWUgPHN1cD4oRCtFKTwvc3VwPjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWREQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEQpPC9zdXA+IERvbnQgZmx1aWRlIGRlc3RpbsOpIGF1IHRyYWl0ZW1lbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwiYnNmZk51bWJlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkJzZmZDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJic2ZmTnVtYmVyXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICBOdW3DqXJvIGR1IEJTRkYgKHNpIGNvbm51KVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgRGV0ZWN0b3JzIGZyb20gXCIuL0RldGVjdG9yc1wiO1xuaW1wb3J0IERldGVjdG9yQ29udHJvbERhdGUgZnJvbSBcIi4vRGV0ZWN0b3JDb250cm9sRGF0ZVwiXG5pbXBvcnQgRXF1aXBtZW50IGZyb20gXCIuL0VxdWlwbWVudFwiO1xuaW1wb3J0IEludGVydmVudGlvblR5cGVzIGZyb20gXCIuL0ludGVydmVudGlvblR5cGVzXCI7XG5pbXBvcnQgT3RoZXJUeXBlIGZyb20gXCIuL090aGVyVHlwZVwiO1xuaW1wb3J0IExlYWthZ2UgZnJvbSBcIi4vTGVha2FnZVwiO1xuaW1wb3J0IENvbnRhaW5lcnMgZnJvbSBcIi4vQ29udGFpbmVyc1wiO1xuaW1wb3J0IEVxdWlwbWVudERldGFpbHMgZnJvbSBcIi4vRXF1aXBtZW50RGV0YWlsc1wiO1xuaW1wb3J0IEZsdWlkSGFuZGxpbmcgZnJvbSBcIi4vRmx1aWRIYW5kbGluZ1wiO1xuaW1wb3J0IFdhc3RlcyBmcm9tIFwiLi9XYXN0ZXNcIjtcbmltcG9ydCBGbHVpZERlc3RpbmF0aW9uIGZyb20gXCIuL0ZsdWlkRGVzdGluYXRpb25cIjtcbmltcG9ydCBSZW1hcmtzIGZyb20gXCIuL1JlbWFya3NcIjtcblxuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEludGVydmVudGlvbkZvcm0gPSAoKSA9PiB7XG5cbiAgLy8gQ3VycmVudCBkYXRlXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkpO1xuICBjb25zdCBub3cgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUNBXCIpO1xuICBcbiAgLy8gU3RhdGVzXG5cbiAgY29uc3QgW2ludGVydmVudGlvbkRhdGUsIHNldEludGVydmVudGlvbkRhdGVdID0gdXNlU3RhdGUobm93KTtcbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW290aGVyVHlwZSwgc2V0T3RoZXJUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIEludGVydmVudGlvbiB0eXBlIGlzIDUgb3IgNlxuICBjb25zdCBbbGVha0NvbnRyb2wsIHNldExlYWtDb250cm9sXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBJbnRlcnZlbnRpb24gdHlwZSBpcyBub3QgNSBhbmQgbm90IDZcbiAgLy8gTGVhayBjb250cm9sIGlzIG1hbmRhdG9yeSBhZnRlciBhbiBpbnRlcnZlbnRpb25cbiAgY29uc3QgW21hbmRhdG9yeUxlYWtDb250cm9sLCBzZXRNYW5kYXRvcnlMZWFrQ29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gRGV0ZWN0b3IgdXNlZCBmb3IgbGVha2FnZSBjb250cm9sXG4gIGNvbnN0IFtkZXRlY3Rvciwgc2V0RGV0ZWN0b3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsZWFrTG9jYXRpb25zLCBzZXRMZWFrTG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xlYWtGaXhlZCwgc2V0TGVha0ZpeGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBGbHVpZCBxdWFudGl0aWVzXG4gIGNvbnN0IFtmbHVpZFF1YW50aXRpZXMsIHNldEZsdWlkUXVhbnRpdGllc10gPSB1c2VTdGF0ZSh7XG4gICAgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJydcbiAgfSk7XG5cbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmx1aWREZXN0aW5hdGlvbiwgc2V0Rmx1aWREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlbWFya3MsIHNldFJlbWFya3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZGZQYXRoLCBzZXRQZGZQYXRoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGVha3NQb3N0ZWQsIHNldExlYWtzUG9zdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBJbiBjYXNlIG9mIGlucHV0IGVycm9yIOKGkiB1c2VkIHRvIGRpc2FibGUgc3VibWl0IGJ1dHRvblxuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxlYWtzUG9zdGVkKSB7XG4gICAgICB3aW5kb3cub3BlbihwZGZQYXRoLCAnX2JsYW5rJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGZvciBmb3JtIGVycm9ycyBoZXJlXG4gICAgICBpZiAoIWVxdWlwbWVudClcbiAgICAgICAgc2V0Rm9ybUVycm9yKHRydWUpO1xuICAgICAgZWxzZSBpZiAoIXR5cGUpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2UgaWYgKHR5cGUuaWQgIT0gNSAmJiB0eXBlLmlkICE9IDYgJiYgY2hlY2tGbHVpZEhhbmRsaW5nKCkpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2UgaWYgKCFlcXVpcG1lbnQubGVha0RldGVjdGlvblN5c3RlbSAmJiAhZGV0ZWN0b3IpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2UgaWYgKGNoZWNrTGVha3MoKSlcbiAgICAgICAgc2V0Rm9ybUVycm9yKHRydWUpO1xuICAgICAgZWxzZVxuICAgICAgICBzZXRGb3JtRXJyb3IoZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cblxuICBjb25zdCBjaGVja0ZsdWlkSGFuZGxpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHEgPSBmbHVpZFF1YW50aXRpZXM7XG4gICAgcmV0dXJuIHEuQSArIHEuQiArIHEuQyA9PT0gMCAmJiBxLkQgKyBxLkUgPT09IDA7XG4gIH1cblxuICBjb25zdCBjaGVja0xlYWtzID0gKCkgPT4ge1xuICAgIGxldCBsID0gbGVha0xvY2F0aW9ucztcbiAgICBpZiAobC5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWxbaV0pXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFdmVudHNcbiAgXG4gIGNvbnN0IG9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW50ZXJ2ZW50aW9uRGF0ZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkVxdWlwbWVudENoYW5nZSA9IChlKSA9PiB7XG4gICAgaGFuZGxlUmVzZXQoKTtcbiAgICBzZXRFcXVpcG1lbnQoZSk7XG4gIH1cblxuICBjb25zdCBvblR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGlmICghZSkge1xuICAgICAgc2V0TGVha0NvbnRyb2woZmFsc2UpO1xuICAgICAgc2V0TWFuZGF0b3J5TGVha0NvbnRyb2woZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgc2V0TGVha0NvbnRyb2woKGUuaWQgPT09IDUgfHwgZS5pZCA9PT0gNikpO1xuICAgICBzZXRNYW5kYXRvcnlMZWFrQ29udHJvbCgoZS5pZCAhPT0gNSAmJiBlLmlkICE9PSA2KSlcbiAgICB9XG5cbiAgICBzZXRUeXBlKGUpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICB9XG5cbiAgY29uc3Qgb25PdGhlclR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE90aGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkRldGVjdG9yQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXREZXRlY3RvcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0xvY2F0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRMZWFrTG9jYXRpb25zKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrRml4ZWRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtGaXhlZChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgc3VtQUJDID0gZS5BICsgZS5CICsgZS5DO1xuICAgIGxldCBzdW1ERSA9IGUuRCArIGUuQjtcbiAgICBzZXRGb3JtRXJyb3IoaXNOYU4oc3VtQUJDKSB8fCBpc05hTihzdW1ERSkpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhlKTtcbiAgfVxuXG4gIGNvbnN0IG9uQ29udGFpbmVyQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRDb250YWluZXIoZSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEZsdWlkRGVzdGluYXRpb24oZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25SZW1hcmtzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRSZW1hcmtzKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3JTdGF0ZSkgPT4ge1xuICAgIHNldEZvcm1FcnJvcihlcnJvclN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IHBvc3RMZWFrcyA9IGFzeW5jIChpbnRlcnZlbnRpb25JRCkgPT4ge1xuICAgIC8vIFBPU1QgbGVha3Mgb25lIGJ5IG9uZVxuICAgIGxldCBjb3VudCA9IGxlYWtMb2NhdGlvbnMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyAgaSA8IGxlYWtMb2NhdGlvbnMubGVuZ3RoOyAgaSsrKSB7XG4gICAgICBsZXQgbGVhayA9IHtcbiAgICAgICAgXCJudW1cIjogaSsxLFxuICAgICAgICBcImNvdW50XCI6IGNvdW50LFxuICAgICAgICBcImxvY2F0aW9uXCI6IGxlYWtMb2NhdGlvbnNbaV0sXG4gICAgICAgIFwiZml4ZWRcIjogbGVha0ZpeGVkW2ldLFxuICAgICAgICBcImludGVydmVudGlvblwiOiBcIi9hcGkvaW50ZXJ2ZW50aW9ucy9cIiArIGludGVydmVudGlvbklELFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBheC5wb3N0KCcvbGVha2FnZXMnLFxuICAgICAgICBsZWFrXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBsZWFrYWdlIFBPU1QnLCBlcnJvcik7XG4gICAgICAgIHJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICAgIHNldExlYWtzUG9zdGVkKHRydWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGludGVydmVudGlvbiA9IHtcbiAgICAgIFwiZGF0ZVwiOiBpbnRlcnZlbnRpb25EYXRlLFxuICAgICAgXCJ2aXJnaW5GbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5BLFxuICAgICAgXCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkIsXG4gICAgICBcInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQyxcbiAgICAgIFwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkQsXG4gICAgICBcImJzZmZOdW1iZXJcIjogZmx1aWRRdWFudGl0aWVzLkJTRkYsXG4gICAgICBcInJldXNhYmxlRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuRSxcbiAgICAgIFwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiOiBmbHVpZERlc3RpbmF0aW9uLFxuICAgICAgXCJyZW1hcmtzXCI6IHJlbWFya3MsXG4gICAgICBcImludGVydmVudGlvblR5cGVcIjogXCIvYXBpL2ludGVydmVudGlvbl90eXBlcy9cIiArIHR5cGUuaWQsXG4gICAgICBcIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiOiBvdGhlclR5cGUsXG4gICAgICBcImVxdWlwbWVudFwiOiBcIi9hcGkvZXF1aXBtZW50L1wiICsgZXF1aXBtZW50LmlkLFxuICAgICAgXCJjb250YWluZXJcIjogY29udGFpbmVyP1wiL2FwaS9jb250YWluZXJzL1wiICsgY29udGFpbmVyLmlkOm51bGwsXG4gICAgICBcImFjY2Vzc29yeVwiOiBkZXRlY3Rvcj9cIi9hcGkvYWNjZXNzb3JpZXMvXCIgKyBkZXRlY3Rvci5pZDpudWxsLFxuICAgICAgXCJsZWFrc1wiOiBsZWFrTG9jYXRpb25zLmxlbmd0aCA+IDAsXG4gICAgICBcInVzZXJcIjogXCIvYXBpL3VzZXJzL1wiICsgd2luZG93LnVzZXIsXG4gICAgICBcInBkZlBhdGhcIjogXCJcIixcbiAgICB9O1xuXG4gICAgLy8gUE9TVCBpbnRlcnZlbnRpb25cbiAgICBheC5wb3N0KCcvaW50ZXJ2ZW50aW9ucycsXG4gICAgICBpbnRlcnZlbnRpb25cbiAgICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBQT1NUIGxlYWtzXG4gICAgICBwb3N0TGVha3MocmVzcG9uc2UuZGF0YS5pZCk7XG4gICAgICBzZXRQZGZQYXRoKHJlc3BvbnNlLmRhdGEucGRmUGF0aCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1InLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRFcXVpcG1lbnQobnVsbCk7XG4gICAgc2V0VHlwZShudWxsKTtcbiAgICBzZXRPdGhlclR5cGUoXCJcIik7XG4gICAgc2V0TGVha0NvbnRyb2woZmFsc2UpO1xuICAgIHNldE1hbmRhdG9yeUxlYWtDb250cm9sKGZhbHNlKTtcbiAgICBzZXREZXRlY3RvcihudWxsKTtcbiAgICBzZXRMZWFrTG9jYXRpb25zKFtdKTtcbiAgICBzZXRMZWFrRml4ZWQoW10pO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyh7ICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnfSk7XG4gICAgc2V0Q29udGFpbmVyKG51bGwpO1xuICAgIHNldEZsdWlkRGVzdGluYXRpb24oXCJcIik7XG4gICAgc2V0UmVtYXJrcyhcIlwiKTtcbiAgICBzZXRQZGZQYXRoKFwiXCIpO1xuICAgIHNldExlYWtzUG9zdGVkKGZhbHNlKTtcbiAgICBzZXRGb3JtRXJyb3IoZmFsc2UpO1xuICB9XG5cbiAgLy8gQ29sbGVjdGVkIGZsdWlkIHdpbGwgYmUgaW5zdGFsbGVkIGluIGFub3RoZXIgZXF1aXBtZW50XG4gIGNvbnN0IG11c3RJbnN0YWxsID0gKCkgPT4ge1xuICAgIHJldHVybiBmbHVpZFF1YW50aXRpZXMuRSA+IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxVc2VyIGRhdGE9e3dpbmRvdy51c2VyfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICBpZD1cImludGVydmVudGlvbkRhdGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm93fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkludGVydmVudGlvbkRhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYWxlbmRhci1kYXlzXCI+PC9pPiBEYXRlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxFcXVpcG1lbnQgb25DaGFuZ2U9e29uRXF1aXBtZW50Q2hhbmdlfSAvPlxuICAgICAgICAgICAgeyBlcXVpcG1lbnQgJiZcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RXF1aXBtZW50RGV0YWlscyBkYXRhPXtlcXVpcG1lbnR9IC8+XG4gICAgICAgICAgICAgICAgPEludGVydmVudGlvblR5cGVzIG9uQ2hhbmdlPXtvblR5cGVDaGFuZ2V9IGRhdGE9e2VxdWlwbWVudC5pZH0gLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHR5cGU/LmlkID09PSA4ICAmJlxuICAgICAgICAgICAgICAgIDxPdGhlclR5cGUgb25DaGFuZ2U9e29uT3RoZXJUeXBlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyBlcXVpcG1lbnQgJiYgdHlwZSAmJiAhbGVha0NvbnRyb2wgJiZcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Rmx1aWRIYW5kbGluZyBvbkNoYW5nZT17b25GbHVpZFF1YW50aXRpZXNDaGFuZ2V9IG9uRXJyb3I9e29uRXJyb3J9IC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKG11c3RJbnN0YWxsKCkgfHwgZmx1aWRRdWFudGl0aWVzLkQgPiAwKSAmJlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2VxdWlwbWVudC5mbHVpZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db250YWluZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyBmbHVpZFF1YW50aXRpZXMuRCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIDxXYXN0ZXMgZGF0YT17ZXF1aXBtZW50LmZsdWlkLmZsdWlkVHlwZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsgbXVzdEluc3RhbGwoKSAmJlxuICAgICAgICAgICAgICAgIDxGbHVpZERlc3RpbmF0aW9uIG9uQ2hhbmdlPXtvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsgdHlwZSAmJiAhZXF1aXBtZW50Py5sZWFrRGV0ZWN0aW9uU3lzdGVtICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPERldGVjdG9ycyBkYXRhPXt0eXBlLmlkfSBvbkNoYW5nZT17b25EZXRlY3RvckNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICB7ICBkZXRlY3RvciAmJlxuICAgICAgICAgICAgICAgICAgPERldGVjdG9yQ29udHJvbERhdGUgZGF0YT17ZGV0ZWN0b3J9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICB7IChsZWFrQ29udHJvbCB8fCBtYW5kYXRvcnlMZWFrQ29udHJvbCkgJiZcbiAgICAgICAgICAgICAgICA8TGVha2FnZVxuICAgICAgICAgICAgICAgICAgZGF0YT17dHlwZT8uaWR9XG4gICAgICAgICAgICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlPXtvbkxlYWtMb2NhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRml4ZWRDaGFuZ2U9e29uTGVha0ZpeGVkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgeyBlcXVpcG1lbnQgJiZcbiAgICAgICAgICAgICAgPFJlbWFya3Mgb25DaGFuZ2U9e29uUmVtYXJrc0NoYW5nZX0gLz4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG0tMlwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4td2FybmluZ1wiIHR5cGU9XCJyZXNldFwiIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5Bbm51bGVyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW5yZWdpc3RyZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBJbnRlcnZlbnRpb25zIGZyb20gXCIuL0ludGVydmVudGlvbnNcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uTGlzdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8VXNlciBkYXRhPXt3aW5kb3cudXNlcn0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEludGVydmVudGlvbnMgZGF0YT17d2luZG93LnVzZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25UeXBlcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2ludGVydmVudGlvbl90eXBlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRUeXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAga2V5PXtwcm9wcy5kYXRhfSAvLyByZXNldCBpZiBlcXVpcG1lbnQgY2hhbmdlZFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZSh0eXBlc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cInR5cGVMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIHR5cGVzLm1hcCgodHlwZSwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17dHlwZS5pZH0+XG4gICAgICAgICAgICB7dHlwZS5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNjcmV3ZHJpdmVyLXdyZW5jaFwiPjwvaT4gTmF0dXJlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvblR5cGVzO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9ucyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtpbnRlcnZlbnRpb25zLCBzZXRJbnRlcnZlbnRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoXCIvaW50ZXJ2ZW50aW9uc0J5VXNlci9cIiArIHByb3BzLmRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0SW50ZXJ2ZW50aW9ucyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHNldEludGVydmVudGlvbnMoW10pO1xuICAgIH0pXG4gIH0sIFtwcm9wcy5kYXRhXSk7XG5cbiAgaWYgKGxvYWRpbmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1zZWNvbmRhcnkgbS0yXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkNoYXJnZW1lbnQuLi48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICBpZiAoaW50ZXJ2ZW50aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLXhtYXJrXCI+PC9pPjxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+IFBhcyBkJ2ludGVydmVudGlvbiB0cm91dsOpZTwvc3Bhbj4gXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICB7XG4gICAgICBpbnRlcnZlbnRpb25zLm1hcCgoaW50ZXJ2ZW50aW9uLCBpKSA9PiAoXG4gICAgICBcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBzbWFsbFwiIGtleT17aX0+XG4gICAgICAgICAgey8qIFRPRE86IERpc3BsYXkgaW50ZXJ2ZW50aW9uIHR5cGUgYW5kIGVxdWlwbWVudCBuYW1lICovfVxuICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShpbnRlcnZlbnRpb24uZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1DQScpfTwvc3Bhbj4ge2ludGVydmVudGlvbi5pbnRlcnZlbnRpb25UeXBlLm5hbWV9IHtpbnRlcnZlbnRpb24uZXF1aXBtZW50Lm5hbWV9PGEgaHJlZj17aW50ZXJ2ZW50aW9uLnBkZlBhdGh9IHRhcmdldD1cIl9ibGFua1wiPlBERjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpXG4gICAgfVxuICAgIDwvdWw+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0ICdyZWFjdC10b29sdGlwL2Rpc3QvcmVhY3QtdG9vbHRpcC5jc3MnO1xuXG5jb25zdCBMZWFrID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXIgYm9yZGVyLTAgYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQgcm91bmRlZCBtZS0yXCI+e3Byb3BzLmlkKzF9PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gYm9yZGVyIGJvcmRlci0wIG1sLTIgbWUtMlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJMb2NhbGlzYXRpb24gZGUgbGEgZnVpdGVcIlxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgTGVha2FnZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtsZWFrQ29tcG9uZW50cywgc2V0TGVha0NvbXBvbmVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZml4ZWQsIHNldEZpeGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRMZWFrID0gKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGxlYWtDb21wb25lbnRzLmxlbmd0aDtcblxuICAgIHNldExlYWtDb21wb25lbnRzKFtcbiAgICAgIC4uLmxlYWtDb21wb25lbnRzLFxuICAgICAgPExlYWsgZGF0YT17cHJvcHMuZGF0YX0gaWQ9e2luZGV4fSBvbkNoYW5nZT17b25MZWFrQ2hhbmdlfSAvPlxuICAgIF0pO1xuXG4gICAgbGV0IGxvY2F0aW9uc0NvcHkgPSBbLi4ubG9jYXRpb25zLCBcIlwiXTtcbiAgICBsZXQgZml4ZWRDb3B5ID0gWy4uLmZpeGVkXTtcbiAgICBmaXhlZENvcHkucHVzaChmYWxzZSk7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICBjb25zdCByZW1vdmVMZWFrID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZCAtIDIwO1xuICAgIGxldCBsZWFrQ29tcG9uZW50c0NvcHkgPSBbLi4ubGVha0NvbXBvbmVudHNdO1xuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9uc107XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF1cbiAgICBsZWFrQ29tcG9uZW50c0NvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhdGlvbnNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgZml4ZWRDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0TGVha0NvbXBvbmVudHMobGVha0NvbXBvbmVudHNDb3B5KTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgc2V0Rml4ZWQoZml4ZWRDb3B5KTtcbiAgICBwcm9wcy5vbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uc0NvcHkpO1xuICAgIHByb3BzLm9uRml4ZWRDaGFuZ2UoZml4ZWRDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQ7XG4gICAgbGV0IGxvY2F0aW9uc0NvcHkgPSBbLi4ubG9jYXRpb25zXTtcbiAgICBsb2NhdGlvbnNDb3B5W2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uc0NvcHkpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrRml4ZWQgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkIC0gMTA7XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF07XG4gICAgZml4ZWRDb3B5W2luZGV4XSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgc2V0Rml4ZWQoZml4ZWRDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yIGJnLXNlY29uZGFyeSBwLTIgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZFwiPjwvaT4gRnVpdGVzIGNvbnN0YXTDqWVzIGxvcnMgZHUgY29udHLDtGxlIGQnw6l0YW5jaMOpaXTDqVxuICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0XCJcbiAgICAgICAgICBvbkNsaWNrPXthZGRMZWFrfVxuICAgICAgICAgIGRpc2FibGVkPXtsZWFrQ29tcG9uZW50cy5sZW5ndGggPT09IDN9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT4gQWpvdXRlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBsZWFrQ29tcG9uZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJtLTIgYm9yZGVyIGJvcmRlci0xIHJvdW5kZWRcIj5cbiAgICAgICAge1xuICAgICAgICAgIGxlYWtDb21wb25lbnRzLm1hcCgobGVhaywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG0tMiBkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWV2ZW5cIj5cbiAgICAgICAgICAgICAge2xlYWt9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCJcbiAgICAgICAgICAgICAgICBpZD17MTAraX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTGVha0ZpeGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJ0dC13cmVuY2hcIiBodG1sRm9yPXsxMCtpfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJvcmRlciBib3JkZXItMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdyZW5jaFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC13cmVuY2hcIiBjb250ZW50PVwiRnVpdGUgcsOpcGFyw6llXCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGlkPXsyMCtpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbG9zZSBtZS0zIHJvdW5kZWQtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVMZWFrfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2krMSA8IGxlYWtDb21wb25lbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFrYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBJbnB1dCB0ZXh0IGZvciBcIm90aGVyXCIgaW50ZXJ2ZW50aW9uIHR5cGVcbmNvbnN0IE90aGVyVHlwZSA9IChwcm9wcykgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIGlkPVwib3RoZXJJbnRlcnZlbnRpb25UeXBlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJWZXVpbGxleiBwcsOpY2lzZXIgbGUgdHlwZSBkJ2ludGVydmVudGlvbi4uLlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyVHlwZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVtYXJrcyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW91dGxpbmUgbS0yXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzbWFsbFwiXG4gICAgICAgIGh0bWxGb3I9XCJyZW1hcmtzXCJcbiAgICAgID5cbiAgICAgICAgT2JzZXJ2YXRpb25zXG4gICAgICA8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgaWQ9XCJyZW1hcmtzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgID5cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtYXJrcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBVc2VyID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KCcvdXNlcnMvJyArIHByb3BzLmRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtwcm9wcy5kYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMiBtZS0yIGJnLXNlY29uZGFyeSBwLTIgcm91bmRlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCI+PC9pPiB7dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgV2FzdGVzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXNlY29uZGFyeSBwLTIgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXJcIj48L2k+IETDqW5vbWluYXRpb24gQURSL1JJRFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb3BzLmRhdGEuZmxhbW1hYmxlICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgcm91bmRlZC0wXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXItZmlyZVwiPjwvaT4ge3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7cHJvcHMuZGF0YS5mbGFtbWFibGUgfHxcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCByb3VuZGVkLTBcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kdW1wc3RlclwiPjwvaT4ge3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FzdGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiSW50ZXJ2ZW50aW9uRm9ybSIsIkludGVydmVudGlvbkxpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYXhpb3MiLCJheCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVycyIsInByb3BzIiwiY29udGFpbmVycyIsInNldENvbnRhaW5lcnMiLCJnZXQiLCJkYXRhIiwiaWQiLCJ0aGVuIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpIiwic2VyaWFsTnVtYmVyIiwiRGV0ZWN0b3JDb250cm9sRGF0ZSIsImNvbnRyb2xEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm5hbWUiLCJEZXRlY3RvcnMiLCJkZXRlY3RvcnMiLCJzZXREZXRlY3RvcnMiLCJkZXRlY3RvciIsIkVxdWlwbWVudCIsImVxdWlwbWVudCIsInNldEVxdWlwbWVudCIsImdlYXIiLCJFcXVpcG1lbnREZXRhaWxzIiwiZmx1aWQiLCJ3ZWlnaHQiLCJ0b0ZpeGVkIiwiY28yRXFUb25uYWdlIiwibGVha0RldGVjdGlvblN5c3RlbSIsIkZsdWlkRGVzdGluYXRpb24iLCJUb29sdGlwIiwiRmx1aWRIYW5kbGluZyIsImZsdWlkUXVhbnRpdGllcyIsInNldEZsdWlkUXVhbnRpdGllcyIsInN1bUFCQyIsInNldFN1bUFCQyIsInN1bURFIiwic2V0U3VtREUiLCJmbHVpZExvYWRpbmciLCJzZXRGbHVpZExvYWRpbmciLCJmbHVpZENvbGxlY3RpbmciLCJzZXRGbHVpZENvbGxlY3RpbmciLCJvbkZsdWlkQUNoYW5nZSIsIkEiLCJOdW1iZXIiLCJmcSIsInN1bSIsIkIiLCJDIiwiaXNOYU4iLCJvbkZsdWlkQkNoYW5nZSIsIm9uRmx1aWRDQ2hhbmdlIiwib25GbHVpZERDaGFuZ2UiLCJEIiwib25GbHVpZEVDaGFuZ2UiLCJFIiwib25Cc2ZmQ2hhbmdlIiwiQlNGRiIsIm9uTG9hZGluZ0NsaWNrIiwiY2hlY2tlZCIsIm9uQ29sbGVjdGluZ0NsaWNrIiwiVXNlciIsIkludGVydmVudGlvblR5cGVzIiwiT3RoZXJUeXBlIiwiTGVha2FnZSIsIldhc3RlcyIsIlJlbWFya3MiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJub3ciLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwibGVha0NvbnRyb2wiLCJzZXRMZWFrQ29udHJvbCIsIm1hbmRhdG9yeUxlYWtDb250cm9sIiwic2V0TWFuZGF0b3J5TGVha0NvbnRyb2wiLCJzZXREZXRlY3RvciIsImxlYWtMb2NhdGlvbnMiLCJzZXRMZWFrTG9jYXRpb25zIiwibGVha0ZpeGVkIiwic2V0TGVha0ZpeGVkIiwic2V0Q29udGFpbmVyIiwiZmx1aWREZXN0aW5hdGlvbiIsInNldEZsdWlkRGVzdGluYXRpb24iLCJyZW1hcmtzIiwic2V0UmVtYXJrcyIsInBkZlBhdGgiLCJzZXRQZGZQYXRoIiwibGVha3NQb3N0ZWQiLCJzZXRMZWFrc1Bvc3RlZCIsImZvcm1FcnJvciIsInNldEZvcm1FcnJvciIsIm9wZW4iLCJyZWxvYWQiLCJjaGVja0ZsdWlkSGFuZGxpbmciLCJjaGVja0xlYWtzIiwicSIsImwiLCJsZW5ndGgiLCJvbkludGVydmVudGlvbkRhdGVDaGFuZ2UiLCJvbkVxdWlwbWVudENoYW5nZSIsImhhbmRsZVJlc2V0Iiwib25UeXBlQ2hhbmdlIiwib25PdGhlclR5cGVDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25MZWFrTG9jYXRpb25DaGFuZ2UiLCJvbkxlYWtGaXhlZENoYW5nZSIsIm9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlIiwib25Db250YWluZXJDaGFuZ2UiLCJvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2UiLCJvblJlbWFya3NDaGFuZ2UiLCJvbkVycm9yIiwiZXJyb3JTdGF0ZSIsInBvc3RMZWFrcyIsImludGVydmVudGlvbklEIiwiY291bnQiLCJsZWFrIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImludGVydmVudGlvbiIsInVzZXIiLCJtdXN0SW5zdGFsbCIsImZsdWlkVHlwZSIsIkludGVydmVudGlvbnMiLCJ0eXBlcyIsInNldFR5cGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbnRlcnZlbnRpb25zIiwic2V0SW50ZXJ2ZW50aW9ucyIsImludGVydmVudGlvblR5cGUiLCJMZWFrIiwibGVha0NvbXBvbmVudHMiLCJzZXRMZWFrQ29tcG9uZW50cyIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsImZpeGVkIiwic2V0Rml4ZWQiLCJhZGRMZWFrIiwiaW5kZXgiLCJvbkxlYWtDaGFuZ2UiLCJsb2NhdGlvbnNDb3B5IiwiZml4ZWRDb3B5IiwicHVzaCIsIm9uTG9jYXRpb25DaGFuZ2UiLCJvbkZpeGVkQ2hhbmdlIiwicmVtb3ZlTGVhayIsImxlYWtDb21wb25lbnRzQ29weSIsInNwbGljZSIsIm9uTGVha0ZpeGVkIiwic2V0VXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmxhbW1hYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==