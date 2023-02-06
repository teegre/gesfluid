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


var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Fiche d'intervention"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InterventionForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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
    console.log('collec', e);
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
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    formError = _useState32[0],
    setFormError = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (leaksPosted) {
      window.open(pdfPath, '_blank');
      window.location.reload();
    }
  });

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
      "detector": detector ? "/api/detectors/" + detector.id : null,
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
  }), type && (leakControl || mandatoryLeakControl) && !(equipment !== null && equipment !== void 0 && equipment.leakDetectionSystem) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Detectors__WEBPACK_IMPORTED_MODULE_31__["default"], {
    data: type.id,
    onChange: onDetectorChange
  }), detector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_DetectorControlDate__WEBPACK_IMPORTED_MODULE_32__["default"], {
    data: detector
  })), (leakControl || mandatoryLeakControl) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Leakage__WEBPACK_IMPORTED_MODULE_36__["default"], {
    data: type === null || type === void 0 ? void 0 : type.id,
    onLocationChange: onLeakLocationChange,
    onFixedChange: onLeakFixedChange
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
    disabled: !type || !equipment || formError,
    onClick: handleSubmit
  }, "Enregistrer")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBRyxTQUFTLEVBQUM7RUFBaUIsRUFBSyw0QkFDckMsQ0FBTSxDQUNGLGVBQ04sd0VBQ0dBLEtBQUssQ0FBQ0ksSUFBSSxDQUFDc0osU0FBUyxpQkFDbkI7SUFBSyxTQUFTLEVBQUMsMkJBQTJCO0lBQUMsUUFBUTtFQUFBLGdCQUNqRDtJQUFHLFNBQVMsRUFBQztFQUFzQixFQUFLLEtBQUMsRUFBQzFKLEtBQUssQ0FBQ0ksSUFBSSxDQUFDYyxJQUFJLENBQ3JELEVBRVBsQixLQUFLLENBQUNJLElBQUksQ0FBQ3NKLFNBQVMsaUJBQ25CO0lBQUssU0FBUyxFQUFDLDJCQUEyQjtJQUFDLFFBQVE7RUFBQSxnQkFDakQ7SUFBRyxTQUFTLEVBQUM7RUFBaUIsRUFBSyxLQUFDLEVBQUMxSixLQUFLLENBQUNJLElBQUksQ0FBQ2MsSUFBSSxDQUNoRCxDQUVKLGVBQ1Isc0VBQU0sQ0FDQTtBQUVWLENBQUM7QUFFRCxpRUFBZXFELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQXBwLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQ29udGFpbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRGV0ZWN0b3JDb250cm9sRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRGV0ZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9FcXVpcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkSGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9MZWFrYWdlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9PdGhlclR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1JlbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1dhc3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbi8vIGltcG9ydCBcIi4vY3NzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2pzeC9BcHBcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG5pZiAoY29udGFpbmVyKSB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbiAgcm9vdC5yZW5kZXIoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMlwiPlxuICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8L2Rpdj5cbik7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbnRlcnZlbnRpb25Gb3JtIGZyb20gXCIuL0ludGVydmVudGlvbkZvcm1cIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8aDI+RmljaGUgZCdpbnRlcnZlbnRpb248L2gyPlxuICAgICAgPEludGVydmVudGlvbkZvcm0gLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYW4gYXhpb3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBoZWFkZXJzXG5jb25zdCBheCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gIH0sXG59KTtcblxuLy8gQ2F0Y2ggdW5hdXRob3JpemVkIHJlcXVlc3QgYW5kIHJlZGlyZWN0IGlmIGVycm9yXG5heC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4gcmVzcG9uc2UsIChlcnJvcikgPT4ge1xuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IENvbnRhaW5lcnMgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IFtjb250YWluZXJzLCBzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9jb250YWluZXJzQnlGbHVpZC8nICsgcHJvcHMuZGF0YS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldENvbnRhaW5lcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShjb250YWluZXJzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiY29udGFpbmVyTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBjb250YWluZXJzLm1hcCgoY29udGFpbmVyLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtjb250YWluZXIuaWR9PlxuICAgICAgICAgICAge2NvbnRhaW5lci5zZXJpYWxOdW1iZXJ9ey8qIC0tIHtjb250YWluZXIuZmx1aWRRdWFudGl0eS50b0ZpeGVkKDIpfS97Y29udGFpbmVyLmNhcGFjaXR5LnRvRml4ZWQoMil9ICovfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhaW5lckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm90dGxlLWRyb3BsZXRcIj48L2k+IENvbnRlbmFudFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEZXRlY3RvckNvbnRyb2xEYXRlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY29udHJvbERhdGUgPSBuZXcgRGF0ZShwcm9wcy5kYXRhLmNvbnRyb2xEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1mclwiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yQ29udHJvbERhdGVcIlxuICAgICAgICB2YWx1ZT17Y29udHJvbERhdGV9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsaXBib2FyZC1jaGVja1wiPjwvaT4gRGF0ZSBkdSBkZXJuaWVyIGNvbnRyw7RsZSAoe3Byb3BzLmRhdGEubmFtZX0pXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdG9yQ29udHJvbERhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgRGV0ZWN0b3JzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2RldGVjdG9ycywgc2V0RGV0ZWN0b3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoXCIvZGV0ZWN0b3JzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXREZXRlY3RvcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZGV0ZWN0b3JzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGRldGVjdG9ycy5tYXAoKGRldGVjdG9yLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtkZXRlY3Rvci5pZH0+XG4gICAgICAgICAgICB7ZGV0ZWN0b3IubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tcGFzc1wiPjwvaT4gRMOpdGVjdGV1ciBkZSBmdWl0ZXNcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEVxdWlwbWVudCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtlcXVpcG1lbnQsIHNldEVxdWlwbWVudF0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2VxdWlwbWVudFwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RXF1aXBtZW50KHJlc3BvbnNlLmRhdGEpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGVxdWlwbWVudFtlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImVxdWlwbWVudExhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZXF1aXBtZW50Lm1hcCgoZ2VhciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17Z2Vhci5pZH0+XG4gICAgICAgICAgICB7Z2Vhci5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudExhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2VhcnNcIj48L2k+IEVxdWlwZW1lbnQgY29uY2VybsOpXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRXF1aXBtZW50RGV0YWlscyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMSBtYi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZmxleCBmbGV4LW1kLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZXF1aXBtZW50TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+IElkZW50aWZpY2F0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuZmx1aWQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBEw6lub21pbmF0aW9uIGR1IGZsdWlkZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS53ZWlnaHQudG9GaXhlZCgyKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2VpZ2h0LWhhbmdpbmdcIj48L2k+IENoYXJnZSB0b3RhbGUgKGtnKVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkQ08yXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLmNvMkVxVG9ubmFnZS50b0ZpeGVkKDIpfSBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRDTzJcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkXCI+PC9pPiBUb25uYWdlIMOpcXVpdmFsZW50IEMwPHN1Yj4yPC9zdWI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtdC0xXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICBpZD1cImxlYWtEZXRlY3Rpb25TeXN0ZW1cIlxuICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLmRhdGEubGVha0RldGVjdGlvblN5c3RlbX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsZWFrRGV0ZWN0aW9uU3lzdGVtXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZFwiPjwvaT4gUHLDqXNlbmNlIGQndW4gc3lzdMOobWUgcGVybWFuZW50IGRlIGTDqXRlY3Rpb24gZGUgZnVpdGVzXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnREZXRhaWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZERlc3RpbmF0aW9uID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtLTJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgPlxuICAgICAgICBJbnN0YWxsYXRpb24gcHLDqXZ1ZSBkZSBkZXN0aW5hdGlvbiBkdSBmbHVpZGUgcsOpY3Vww6lyw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBpZD1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOb20sIFNJUkVULCBhZHJlc3NlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkRGVzdGluYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgJ3JlYWN0LXRvb2x0aXAvZGlzdC9yZWFjdC10b29sdGlwLmNzcyc7XG5cbmNvbnN0IEZsdWlkSGFuZGxpbmcgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZmx1aWRRdWFudGl0aWVzLCBzZXRGbHVpZFF1YW50aXRpZXNdID0gdXNlU3RhdGUoe1xuICAgICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnXG4gIH0pO1xuICBjb25zdCBbc3VtQUJDLCBzZXRTdW1BQkNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1ERSwgc2V0U3VtREVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbHVpZExvYWRpbmcsIHNldEZsdWlkTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmbHVpZENvbGxlY3RpbmcsIHNldEZsdWlkQ29sbGVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25GbHVpZEFDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBBID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBBOiBBXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIGxldCBzdW0gPSBmbHVpZFF1YW50aXRpZXMuQSArIGZsdWlkUXVhbnRpdGllcy5CICsgZmx1aWRRdWFudGl0aWVzLkM7XG4gICAgaWYgKCFpc05hTihzdW0pKSB7XG4gICAgICBzZXRTdW1BQkMoQStmbHVpZFF1YW50aXRpZXMuQitmbHVpZFF1YW50aXRpZXMuQyk7XG4gICAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25GbHVpZEJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBCID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBCOiBCXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bUFCQyhmbHVpZFF1YW50aXRpZXNbJ0EnXStCK2ZsdWlkUXVhbnRpdGllc1snQyddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQ0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEMgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEM6IENcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtQUJDKGZsdWlkUXVhbnRpdGllc1snQSddK2ZsdWlkUXVhbnRpdGllc1snQiddK0MpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgRCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgRDogRFxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1ERShEK2ZsdWlkUXVhbnRpdGllc1snRSddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEU6IEVcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtREUoZmx1aWRRdWFudGl0aWVzWydEJ10rRSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25Cc2ZmQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBCU0ZGOiBlLnRhcmdldC52YWx1ZVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkxvYWRpbmdDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRMb2FkaW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEE6IDAsXG4gICAgICAgIEI6IDAsXG4gICAgICAgIEM6IDAsXG4gICAgICB9XG4gICAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uQ29sbGVjdGluZ0NsaWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY29sbGVjJywgZSk7XG4gICAgc2V0Rmx1aWRDb2xsZWN0aW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEQ6IDAsXG4gICAgICAgIEJTRkY6ICcnLFxuICAgICAgICBFOiAwLFxuICAgICAgfVxuICAgICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBiZy1zZWNvbmRhcnkgdGV4dC1saWdodCByb3VuZGVkIG14LWF1dG8gcC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBNYW5pcHVsYXRpb24gZHUgZmx1aWRlIGZyaWdvcmlnw6huZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIGlkPVwibG9hZGluZ0ZsdWlkXCIgb25DbGljaz17KGUpID0+IHtvbkxvYWRpbmdDbGljayhlKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwibG9hZGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtbG9hZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtbG9hZFwiIGNvbnRlbnQ9XCJDaGFyZ2VtZW50XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiBpZD1cImNvbGxlY3RpbmdGbHVpZFwiIG9uQ2xpY2s9eyhlKSA9PiB7b25Db2xsZWN0aW5nQ2xpY2soZSl9fSAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJvcmRlci0wIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RpbmdGbHVpZFwiXG4gICAgICAgICAgICBpZD1cInR0LWNvbGxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLXVwXCI+PC9pPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC1jb2xsZWN0XCIgY29udGVudD1cIlLDqWN1cMOpcmF0aW9uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBoaWRkZW49eyFmbHVpZExvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLWRvd25cIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRBQ2hhbmdlfVxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEEpPC9zdXA+IERvbnQgZmx1aWRlIHZpZXJnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEJDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQ0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQyk8L3N1cD4gRG9udCBmbHVpZGUgcsOpZ8OpbsOpcsOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGhpZGRlbj17IWZsdWlkQ29sbGVjdGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgdmFsdWU9e3N1bURFfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi11cFwiPjwvaT4gUXVhbnRpdMOpIHRvdGFsZSByw6ljdXDDqXLDqWUgPHN1cD4oRCtFKTwvc3VwPjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWREQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEQpPC9zdXA+IERvbnQgZmx1aWRlIGRlc3RpbsOpIGF1IHRyYWl0ZW1lbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwiYnNmZk51bWJlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkJzZmZDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJic2ZmTnVtYmVyXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICBOdW3DqXJvIGR1IEJTRkYgKHNpIGNvbm51KVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgRGV0ZWN0b3JzIGZyb20gXCIuL0RldGVjdG9yc1wiO1xuaW1wb3J0IERldGVjdG9yQ29udHJvbERhdGUgZnJvbSBcIi4vRGV0ZWN0b3JDb250cm9sRGF0ZVwiXG5pbXBvcnQgRXF1aXBtZW50IGZyb20gXCIuL0VxdWlwbWVudFwiO1xuaW1wb3J0IEludGVydmVudGlvblR5cGVzIGZyb20gXCIuL0ludGVydmVudGlvblR5cGVzXCI7XG5pbXBvcnQgT3RoZXJUeXBlIGZyb20gXCIuL090aGVyVHlwZVwiO1xuaW1wb3J0IExlYWthZ2UgZnJvbSBcIi4vTGVha2FnZVwiO1xuaW1wb3J0IENvbnRhaW5lcnMgZnJvbSBcIi4vQ29udGFpbmVyc1wiO1xuaW1wb3J0IEVxdWlwbWVudERldGFpbHMgZnJvbSBcIi4vRXF1aXBtZW50RGV0YWlsc1wiO1xuaW1wb3J0IEZsdWlkSGFuZGxpbmcgZnJvbSBcIi4vRmx1aWRIYW5kbGluZ1wiO1xuaW1wb3J0IFdhc3RlcyBmcm9tIFwiLi9XYXN0ZXNcIjtcbmltcG9ydCBGbHVpZERlc3RpbmF0aW9uIGZyb20gXCIuL0ZsdWlkRGVzdGluYXRpb25cIjtcbmltcG9ydCBSZW1hcmtzIGZyb20gXCIuL1JlbWFya3NcIjtcblxuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEludGVydmVudGlvbkZvcm0gPSAoKSA9PiB7XG5cbiAgLy8gQ3VycmVudCBkYXRlXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkpO1xuICBjb25zdCBub3cgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUNBXCIpO1xuICBcbiAgLy8gU3RhdGVzXG4gIGNvbnN0IFtpbnRlcnZlbnRpb25EYXRlLCBzZXRJbnRlcnZlbnRpb25EYXRlXSA9IHVzZVN0YXRlKG5vdyk7XG4gIGNvbnN0IFtlcXVpcG1lbnQsIHNldEVxdWlwbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvdGhlclR5cGUsIHNldE90aGVyVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gSW50ZXJ2ZW50aW9uIHR5cGUgaXMgNSBvciA2XG4gIGNvbnN0IFtsZWFrQ29udHJvbCwgc2V0TGVha0NvbnRyb2xdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBJbnRlcnZlbnRpb24gdHlwZSBpcyBub3QgNSBhbmQgbm90IDZcbiAgLy8gTGVhayBjb250cm9sIGlzIG1hbmRhdG9yeSBhZnRlciBhbiBpbnRlcnZlbnRpb25cbiAgY29uc3QgW21hbmRhdG9yeUxlYWtDb250cm9sLCBzZXRNYW5kYXRvcnlMZWFrQ29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkZXRlY3Rvciwgc2V0RGV0ZWN0b3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsZWFrTG9jYXRpb25zLCBzZXRMZWFrTG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xlYWtGaXhlZCwgc2V0TGVha0ZpeGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHtcbiAgICAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ1xuICB9KTtcbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmx1aWREZXN0aW5hdGlvbiwgc2V0Rmx1aWREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlbWFya3MsIHNldFJlbWFya3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZGZQYXRoLCBzZXRQZGZQYXRoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGVha3NQb3N0ZWQsIHNldExlYWtzUG9zdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Zvcm1FcnJvciwgc2V0Rm9ybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsZWFrc1Bvc3RlZCkge1xuICAgICAgd2luZG93Lm9wZW4ocGRmUGF0aCwgJ19ibGFuaycpO1xuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRXZlbnRzXG4gIFxuICBjb25zdCBvbkludGVydmVudGlvbkRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEludGVydmVudGlvbkRhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcXVpcG1lbnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGhhbmRsZVJlc2V0KCk7XG4gICAgc2V0RXF1aXBtZW50KGUpO1xuICB9XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIHNldExlYWtDb250cm9sKGZhbHNlKTtcbiAgICAgIHNldE1hbmRhdG9yeUxlYWtDb250cm9sKGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgIHNldExlYWtDb250cm9sKChlLmlkID09PSA1IHx8IGUuaWQgPT09IDYpKTtcbiAgICAgc2V0TWFuZGF0b3J5TGVha0NvbnRyb2woKGUuaWQgIT09IDUgJiYgZS5pZCAhPT0gNikpXG4gICAgfVxuXG4gICAgc2V0VHlwZShlKTtcbiAgICBzZXREZXRlY3RvcihudWxsKTtcbiAgfVxuXG4gIGNvbnN0IG9uT3RoZXJUeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRPdGhlclR5cGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25EZXRlY3RvckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RGV0ZWN0b3IoZSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtMb2NhdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TGVha0xvY2F0aW9ucyhlKTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0ZpeGVkQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRMZWFrRml4ZWQoZSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkUXVhbnRpdGllc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHN1bUFCQyA9IGUuQSArIGUuQiArIGUuQztcbiAgICBsZXQgc3VtREUgPSBlLkQgKyBlLkI7XG4gICAgc2V0Rm9ybUVycm9yKGlzTmFOKHN1bUFCQykgfHwgaXNOYU4oc3VtREUpKTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZSk7XG4gIH1cblxuICBjb25zdCBvbkNvbnRhaW5lckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyKGUpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZERlc3RpbmF0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uUmVtYXJrc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UmVtYXJrcyhlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkVycm9yID0gKGVycm9yU3RhdGUpID0+IHtcbiAgICBzZXRGb3JtRXJyb3IoZXJyb3JTdGF0ZSk7XG4gIH1cblxuICBjb25zdCBwb3N0TGVha3MgPSBhc3luYyAoaW50ZXJ2ZW50aW9uSUQpID0+IHtcbiAgICAvLyBQT1NUIGxlYWtzIG9uZSBieSBvbmVcbiAgICBsZXQgY291bnQgPSBsZWFrTG9jYXRpb25zLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgIGkgPCBsZWFrTG9jYXRpb25zLmxlbmd0aDsgIGkrKykge1xuICAgICAgbGV0IGxlYWsgPSB7XG4gICAgICAgIFwibnVtXCI6IGkrMSxcbiAgICAgICAgXCJjb3VudFwiOiBjb3VudCxcbiAgICAgICAgXCJsb2NhdGlvblwiOiBsZWFrTG9jYXRpb25zW2ldLFxuICAgICAgICBcImZpeGVkXCI6IGxlYWtGaXhlZFtpXSxcbiAgICAgICAgXCJpbnRlcnZlbnRpb25cIjogXCIvYXBpL2ludGVydmVudGlvbnMvXCIgKyBpbnRlcnZlbnRpb25JRCxcbiAgICAgIH1cblxuICAgICAgYXdhaXQgYXgucG9zdCgnL2xlYWthZ2VzJyxcbiAgICAgICAgbGVha1xuICAgICAgKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgbGVha2FnZSBQT1NUJywgZXJyb3IpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRMZWFrc1Bvc3RlZCh0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpbnRlcnZlbnRpb24gPSB7XG4gICAgICBcImRhdGVcIjogaW50ZXJ2ZW50aW9uRGF0ZSxcbiAgICAgIFwidmlyZ2luRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQSxcbiAgICAgIFwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5CLFxuICAgICAgXCJyZWdlbmVyYXRlZEZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkMsXG4gICAgICBcImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5ELFxuICAgICAgXCJic2ZmTnVtYmVyXCI6IGZsdWlkUXVhbnRpdGllcy5CU0ZGLFxuICAgICAgXCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkUsXG4gICAgICBcImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIjogZmx1aWREZXN0aW5hdGlvbixcbiAgICAgIFwicmVtYXJrc1wiOiByZW1hcmtzLFxuICAgICAgXCJpbnRlcnZlbnRpb25UeXBlXCI6IFwiL2FwaS9pbnRlcnZlbnRpb25fdHlwZXMvXCIgKyB0eXBlLmlkLFxuICAgICAgXCJvdGhlckludGVydmVudGlvblR5cGVcIjogb3RoZXJUeXBlLFxuICAgICAgXCJlcXVpcG1lbnRcIjogXCIvYXBpL2VxdWlwbWVudC9cIiArIGVxdWlwbWVudC5pZCxcbiAgICAgIFwiY29udGFpbmVyXCI6IGNvbnRhaW5lcj9cIi9hcGkvY29udGFpbmVycy9cIiArIGNvbnRhaW5lci5pZDpudWxsLFxuICAgICAgXCJkZXRlY3RvclwiOiBkZXRlY3Rvcj9cIi9hcGkvZGV0ZWN0b3JzL1wiICsgZGV0ZWN0b3IuaWQ6bnVsbCxcbiAgICAgIFwidXNlclwiOiBcIi9hcGkvdXNlcnMvXCIgKyB3aW5kb3cudXNlcixcbiAgICAgIFwicGRmUGF0aFwiOiBcIlwiLFxuICAgIH07XG5cbiAgICAvLyBQT1NUIGludGVydmVudGlvblxuICAgIGF4LnBvc3QoJy9pbnRlcnZlbnRpb25zJyxcbiAgICAgIGludGVydmVudGlvblxuICAgIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFBPU1QgbGVha3NcbiAgICAgIHBvc3RMZWFrcyhyZXNwb25zZS5kYXRhLmlkKTtcbiAgICAgIHNldFBkZlBhdGgocmVzcG9uc2UuZGF0YS5wZGZQYXRoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEVxdWlwbWVudChudWxsKTtcbiAgICBzZXRUeXBlKG51bGwpO1xuICAgIHNldE90aGVyVHlwZShcIlwiKTtcbiAgICBzZXRMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgc2V0TWFuZGF0b3J5TGVha0NvbnRyb2woZmFsc2UpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICAgIHNldExlYWtMb2NhdGlvbnMoW10pO1xuICAgIHNldExlYWtGaXhlZChbXSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKHsgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJyd9KTtcbiAgICBzZXRDb250YWluZXIobnVsbCk7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihcIlwiKTtcbiAgICBzZXRSZW1hcmtzKFwiXCIpO1xuICAgIHNldFBkZlBhdGgoXCJcIik7XG4gICAgc2V0TGVha3NQb3N0ZWQoZmFsc2UpO1xuICAgIHNldEZvcm1FcnJvcihmYWxzZSk7XG4gIH1cblxuICAvLyBDb2xsZWN0ZWQgZmx1aWQgd2lsbCBiZSBpbnN0YWxsZWQgaW4gYW5vdGhlciBlcXVpcG1lbnRcbiAgY29uc3QgbXVzdEluc3RhbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZsdWlkUXVhbnRpdGllcy5FID4gMDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFVzZXIgZGF0YT17d2luZG93LnVzZXJ9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3d9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlcnZlbnRpb25EYXRlXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+IERhdGUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVxdWlwbWVudCBvbkNoYW5nZT17b25FcXVpcG1lbnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxFcXVpcG1lbnREZXRhaWxzIGRhdGE9e2VxdWlwbWVudH0gLz5cbiAgICAgICAgICAgICAgICA8SW50ZXJ2ZW50aW9uVHlwZXMgb25DaGFuZ2U9e29uVHlwZUNoYW5nZX0gZGF0YT17ZXF1aXBtZW50LmlkfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgdHlwZT8uaWQgPT09IDggICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHR5cGUgJiYgKGxlYWtDb250cm9sIHx8IG1hbmRhdG9yeUxlYWtDb250cm9sKSAmJiAhZXF1aXBtZW50Py5sZWFrRGV0ZWN0aW9uU3lzdGVtICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPERldGVjdG9ycyBkYXRhPXt0eXBlLmlkfSBvbkNoYW5nZT17b25EZXRlY3RvckNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICB7IGRldGVjdG9yICYmXG4gICAgICAgICAgICAgICAgICAgIDxEZXRlY3RvckNvbnRyb2xEYXRlIGRhdGE9e2RldGVjdG9yfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IChsZWFrQ29udHJvbCB8fCBtYW5kYXRvcnlMZWFrQ29udHJvbCkgJiZcbiAgICAgICAgICAgICAgICA8TGVha2FnZVxuICAgICAgICAgICAgICAgICAgZGF0YT17dHlwZT8uaWR9XG4gICAgICAgICAgICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlPXtvbkxlYWtMb2NhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRml4ZWRDaGFuZ2U9e29uTGVha0ZpeGVkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmIHR5cGUgJiYgIWxlYWtDb250cm9sICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZsdWlkSGFuZGxpbmcgb25DaGFuZ2U9e29uRmx1aWRRdWFudGl0aWVzQ2hhbmdlfSBvbkVycm9yPXtvbkVycm9yfSAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChtdXN0SW5zdGFsbCgpIHx8IGZsdWlkUXVhbnRpdGllcy5EID4gMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtlcXVpcG1lbnQuZmx1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29udGFpbmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHsgZmx1aWRRdWFudGl0aWVzLkQgPiAwICYmXG4gICAgICAgICAgICAgICAgICA8V2FzdGVzIGRhdGE9e2VxdWlwbWVudC5mbHVpZC5mbHVpZFR5cGV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IG11c3RJbnN0YWxsKCkgJiZcbiAgICAgICAgICAgICAgICA8Rmx1aWREZXN0aW5hdGlvbiBvbkNoYW5nZT17b25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8UmVtYXJrcyBvbkNoYW5nZT17b25SZW1hcmtzQ2hhbmdlfSAvPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbS0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCIgdHlwZT1cInJlc2V0XCIgb25DbGljaz17aGFuZGxlUmVzZXR9PkFubnVsZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0eXBlIHx8ICFlcXVpcG1lbnQgfHwgZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uVHlwZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9pbnRlcnZlbnRpb25fdHlwZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHlwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX0gLy8gcmVzZXQgaWYgZXF1aXBtZW50IGNoYW5nZWRcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UodHlwZXNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJ0eXBlTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICB0eXBlcy5tYXAoKHR5cGUsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e3R5cGUuaWR9PlxuICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zY3Jld2RyaXZlci13cmVuY2hcIj48L2k+IE5hdHVyZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25UeXBlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuY29uc3QgTGVhayA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyIGJvcmRlci0wIGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbWUtMlwiPntwcm9wcy5pZCsxfTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBrZXk9e3Byb3BzLmRhdGF9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGJvcmRlciBib3JkZXItMCBtbC0yIG1lLTJcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYWxpc2F0aW9uIGRlIGxhIGZ1aXRlXCJcbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IExlYWthZ2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbbGVha0NvbXBvbmVudHMsIHNldExlYWtDb21wb25lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkTGVhayA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBsZWFrQ29tcG9uZW50cy5sZW5ndGg7XG5cbiAgICBzZXRMZWFrQ29tcG9uZW50cyhbXG4gICAgICAuLi5sZWFrQ29tcG9uZW50cyxcbiAgICAgIDxMZWFrIGRhdGE9e3Byb3BzLmRhdGF9IGlkPXtpbmRleH0gb25DaGFuZ2U9e29uTGVha0NoYW5nZX0gLz5cbiAgICBdKTtcblxuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9ucywgXCJcIl07XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF07XG4gICAgZml4ZWRDb3B5LnB1c2goZmFsc2UpO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGVhayA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQgLSAyMDtcbiAgICBsZXQgbGVha0NvbXBvbmVudHNDb3B5ID0gWy4uLmxlYWtDb21wb25lbnRzXTtcbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnNdO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdXG4gICAgbGVha0NvbXBvbmVudHNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYXRpb25zQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGZpeGVkQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldExlYWtDb21wb25lbnRzKGxlYWtDb21wb25lbnRzQ29weSk7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9uc107XG4gICAgbG9jYXRpb25zQ29weVtpbmRleF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0ZpeGVkID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZCAtIDEwO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdO1xuICAgIGZpeGVkQ29weVtpbmRleF0gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRcIj48L2k+IEZ1aXRlcyBjb25zdGF0w6llcyBsb3JzIGR1IGNvbnRyw7RsZSBkJ8OpdGFuY2jDqWl0w6lcbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodFwiXG4gICAgICAgICAgb25DbGljaz17YWRkTGVha31cbiAgICAgICAgICBkaXNhYmxlZD17bGVha0NvbXBvbmVudHMubGVuZ3RoID09PSAzfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVha0NvbXBvbmVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwibS0yIGJvcmRlciBib3JkZXItMSByb3VuZGVkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBsZWFrQ29tcG9uZW50cy5tYXAoKGxlYWssIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtLTIgZC1mbGV4IGQtZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1ldmVuXCI+XG4gICAgICAgICAgICAgIHtsZWFrfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiXG4gICAgICAgICAgICAgICAgaWQ9ezEwK2l9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxlYWtGaXhlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGlkPVwidHQtd3JlbmNoXCIgaHRtbEZvcj17MTAraX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBib3JkZXIgYm9yZGVyLTAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13cmVuY2hcIj48L2k+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtd3JlbmNoXCIgY29udGVudD1cIkZ1aXRlIHLDqXBhcsOpZVwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD17MjAraX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xvc2UgbWUtMyByb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlTGVha31cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpKzEgPCBsZWFrQ29tcG9uZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVha2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gSW5wdXQgdGV4dCBmb3IgXCJvdGhlclwiIGludGVydmVudGlvbiB0eXBlXG5jb25zdCBPdGhlclR5cGUgPSAocHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVmV1aWxsZXogcHLDqWNpc2VyIGxlIHR5cGUgZCdpbnRlcnZlbnRpb24uLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlclR5cGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlbWFya3MgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwicmVtYXJrc1wiXG4gICAgICA+XG4gICAgICAgIE9ic2VydmF0aW9uc1xuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwicmVtYXJrc1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWFya3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL3VzZXJzLycgKyBwcm9wcy5kYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIgbWUtMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT4ge3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFdhc3RlcyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyXCI+PC9pPiBEw6lub21pbmF0aW9uIEFEUi9SSURcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5kYXRhLmZsYW1tYWJsZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIHJvdW5kZWQtMFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyLWZpcmVcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3Byb3BzLmRhdGEuZmxhbW1hYmxlIHx8XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgcm91bmRlZC0wXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXJcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhc3RlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIkludGVydmVudGlvbkZvcm0iLCJheGlvcyIsImF4IiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lcnMiLCJwcm9wcyIsImNvbnRhaW5lcnMiLCJzZXRDb250YWluZXJzIiwiZ2V0IiwiZGF0YSIsImlkIiwidGhlbiIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaSIsInNlcmlhbE51bWJlciIsIkRldGVjdG9yQ29udHJvbERhdGUiLCJjb250cm9sRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJuYW1lIiwiRGV0ZWN0b3JzIiwiZGV0ZWN0b3JzIiwic2V0RGV0ZWN0b3JzIiwiZGV0ZWN0b3IiLCJFcXVpcG1lbnQiLCJlcXVpcG1lbnQiLCJzZXRFcXVpcG1lbnQiLCJnZWFyIiwiRXF1aXBtZW50RGV0YWlscyIsImZsdWlkIiwid2VpZ2h0IiwidG9GaXhlZCIsImNvMkVxVG9ubmFnZSIsImxlYWtEZXRlY3Rpb25TeXN0ZW0iLCJGbHVpZERlc3RpbmF0aW9uIiwiVG9vbHRpcCIsIkZsdWlkSGFuZGxpbmciLCJmbHVpZFF1YW50aXRpZXMiLCJzZXRGbHVpZFF1YW50aXRpZXMiLCJzdW1BQkMiLCJzZXRTdW1BQkMiLCJzdW1ERSIsInNldFN1bURFIiwiZmx1aWRMb2FkaW5nIiwic2V0Rmx1aWRMb2FkaW5nIiwiZmx1aWRDb2xsZWN0aW5nIiwic2V0Rmx1aWRDb2xsZWN0aW5nIiwib25GbHVpZEFDaGFuZ2UiLCJBIiwiTnVtYmVyIiwiZnEiLCJzdW0iLCJCIiwiQyIsImlzTmFOIiwib25GbHVpZEJDaGFuZ2UiLCJvbkZsdWlkQ0NoYW5nZSIsIm9uRmx1aWREQ2hhbmdlIiwiRCIsIm9uRmx1aWRFQ2hhbmdlIiwiRSIsIm9uQnNmZkNoYW5nZSIsIkJTRkYiLCJvbkxvYWRpbmdDbGljayIsImNoZWNrZWQiLCJvbkNvbGxlY3RpbmdDbGljayIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiSW50ZXJ2ZW50aW9uVHlwZXMiLCJPdGhlclR5cGUiLCJMZWFrYWdlIiwiV2FzdGVzIiwiUmVtYXJrcyIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm5vdyIsImludGVydmVudGlvbkRhdGUiLCJzZXRJbnRlcnZlbnRpb25EYXRlIiwidHlwZSIsInNldFR5cGUiLCJvdGhlclR5cGUiLCJzZXRPdGhlclR5cGUiLCJsZWFrQ29udHJvbCIsInNldExlYWtDb250cm9sIiwibWFuZGF0b3J5TGVha0NvbnRyb2wiLCJzZXRNYW5kYXRvcnlMZWFrQ29udHJvbCIsInNldERldGVjdG9yIiwibGVha0xvY2F0aW9ucyIsInNldExlYWtMb2NhdGlvbnMiLCJsZWFrRml4ZWQiLCJzZXRMZWFrRml4ZWQiLCJzZXRDb250YWluZXIiLCJmbHVpZERlc3RpbmF0aW9uIiwic2V0Rmx1aWREZXN0aW5hdGlvbiIsInJlbWFya3MiLCJzZXRSZW1hcmtzIiwicGRmUGF0aCIsInNldFBkZlBhdGgiLCJsZWFrc1Bvc3RlZCIsInNldExlYWtzUG9zdGVkIiwiZm9ybUVycm9yIiwic2V0Rm9ybUVycm9yIiwib3BlbiIsIm9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSIsIm9uRXF1aXBtZW50Q2hhbmdlIiwiaGFuZGxlUmVzZXQiLCJvblR5cGVDaGFuZ2UiLCJvbk90aGVyVHlwZUNoYW5nZSIsIm9uRGV0ZWN0b3JDaGFuZ2UiLCJvbkxlYWtMb2NhdGlvbkNoYW5nZSIsIm9uTGVha0ZpeGVkQ2hhbmdlIiwib25GbHVpZFF1YW50aXRpZXNDaGFuZ2UiLCJvbkNvbnRhaW5lckNoYW5nZSIsIm9uRmx1aWREZXN0aW5hdGlvbkNoYW5nZSIsIm9uUmVtYXJrc0NoYW5nZSIsIm9uRXJyb3IiLCJlcnJvclN0YXRlIiwicG9zdExlYWtzIiwiaW50ZXJ2ZW50aW9uSUQiLCJjb3VudCIsImxlbmd0aCIsImxlYWsiLCJwb3N0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpbnRlcnZlbnRpb24iLCJ1c2VyIiwibXVzdEluc3RhbGwiLCJmbHVpZFR5cGUiLCJ0eXBlcyIsInNldFR5cGVzIiwiTGVhayIsImxlYWtDb21wb25lbnRzIiwic2V0TGVha0NvbXBvbmVudHMiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJmaXhlZCIsInNldEZpeGVkIiwiYWRkTGVhayIsImluZGV4Iiwib25MZWFrQ2hhbmdlIiwibG9jYXRpb25zQ29weSIsImZpeGVkQ29weSIsInB1c2giLCJvbkxvY2F0aW9uQ2hhbmdlIiwib25GaXhlZENoYW5nZSIsInJlbW92ZUxlYWsiLCJsZWFrQ29tcG9uZW50c0NvcHkiLCJzcGxpY2UiLCJvbkxlYWtGaXhlZCIsInNldFVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZsYW1tYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=