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
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-1"
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
  }), " Contenant")));
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

/***/ "./react/jsx/FluidCollecting.js":
/*!**************************************!*\
  !*** ./react/jsx/FluidCollecting.js ***!
  \**************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var FluidCollecting = function FluidCollecting(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    D = _useState2[0],
    setD = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    E = _useState4[0],
    setE = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    sumDE = _useState6[0],
    setSumDE = _useState6[1];
  var onFluidDChange = function onFluidDChange(e) {
    var d = Number(e.target.value);
    setD(d);
    setSumDE(d + E);
    props.onDChange(d);
  };
  var onBsffChange = function onBsffChange(e) {
    var bsff = e.target.value;
    props.onBSFFChange(bsff);
  };
  var onFluidEChange = function onFluidEChange(ev) {
    var e = Number(ev.target.value);
    setE(e);
    setSumDE(D + e);
    props.onEChange(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "border border-0 form-control form-control-sm",
    id: "totalRetrievedFluidQuantity",
    disabled: true,
    value: sumDE
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "totalRetrievedFluidQuantity",
    className: "fw-bold text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-turn-up"
  }), " Quantit\xE9 totale r\xE9cup\xE9r\xE9e ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(D+E)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "forProcessingFluidQuantity",
    defaultValue: "0",
    min: "0",
    max: props.capacity,
    onChange: onFluidDChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "forProcessingFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(D)"), " Dont fluide destin\xE9 au traitement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "bsffNumber",
    onChange: onBsffChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "bsffNumber",
    className: "fw-bold"
  }, "Num\xE9ro du BSFF (si connu)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "reusableFluidQuantity",
    defaultValue: "0",
    min: "0",
    max: props.capacity,
    onChange: onFluidEChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "reusableFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(E)"), " Dont fluide conserv\xE9 pour r\xE9utilisation")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FluidCollecting);

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
/* harmony import */ var _FluidLoading__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./FluidLoading */ "./react/jsx/FluidLoading.js");
/* harmony import */ var _FluidCollecting__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./FluidCollecting */ "./react/jsx/FluidCollecting.js");
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fluidLoading = _useState4[0],
    setFluidLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    fluidCollecting = _useState6[0],
    setFluidCollecting = _useState6[1];
  var onFluidAChange = function onFluidAChange(e) {
    var A = e;
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      A: A
    });
    setFluidQuantities(fq);
    props.onChange(fq);
  };
  var onFluidBChange = function onFluidBChange(e) {
    var B = e;
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      B: B
    });
    setFluidQuantities(fq);
    props.onChange(fq);
  };
  var onFluidCChange = function onFluidCChange(e) {
    var C = e;
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      C: C
    });
    setFluidQuantities(fq);
    props.onChange(fq);
  };
  var onFluidDChange = function onFluidDChange(e) {
    var D = e;
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      D: D
    });
    setFluidQuantities(fq);
    props.onChange(fq);
  };
  var onFluidEChange = function onFluidEChange(e) {
    var E = Number(e.target.value);
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      E: E
    });
    setFluidQuantities(fq);
    props.onChange(fq);
  };
  var onBsffChange = function onBsffChange(e) {
    var fq = _objectSpread(_objectSpread({}, fluidQuantities), {}, {
      BSFF: e
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
  }, fluidLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_FluidLoading__WEBPACK_IMPORTED_MODULE_30__["default"], {
    capacity: props.capacity,
    onAChange: onFluidAChange,
    onBChange: onFluidBChange,
    onCChange: onFluidCChange
  }), fluidCollecting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_FluidCollecting__WEBPACK_IMPORTED_MODULE_31__["default"], {
    capacity: props.capacity,
    onDChange: onFluidDChange,
    onBSFFChange: onBsffChange,
    onEChange: onFluidEChange
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FluidHandling);

/***/ }),

/***/ "./react/jsx/FluidLoading.js":
/*!***********************************!*\
  !*** ./react/jsx/FluidLoading.js ***!
  \***********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var FluidLoading = function FluidLoading(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    A = _useState2[0],
    setA = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    B = _useState4[0],
    setB = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    C = _useState6[0],
    setC = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    sumABC = _useState8[0],
    setSumABC = _useState8[1];
  var onFluidAChange = function onFluidAChange(e) {
    var a = Number(e.target.value);
    setA(a);
    setSumABC(a + B + C);
    props.onAChange(a);
  };
  var onFluidBChange = function onFluidBChange(e) {
    var b = Number(e.target.value);
    setB(b);
    setSumABC(A + b + C);
    props.onBChange(b);
  };
  var onFluidCChange = function onFluidCChange(e) {
    var c = Number(e.target.value);
    setC(c);
    setSumABC(A + B + c);
    props.onCChange(c);
  };
  console.log(props.capacity);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "border border-0 form-control form-control-sm",
    id: "totalLoadedFluidQuantity",
    disabled: true,
    value: sumABC
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "totalLoadedFluidQuantity",
    className: "fw-bold text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-turn-down"
  }), " Quantit\xE9 totale charg\xE9e ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(A+B+C)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "virginFluidQuantity",
    defaultValue: "0",
    min: "0",
    max: props.capacity,
    onChange: onFluidAChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "virginFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(A)"), " Dont fluide vierge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "recycledFluidQuantity",
    defaultValue: "0",
    min: "0",
    max: props.capacity,
    onChange: onFluidBChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "recycledFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(B)"), " Dont fluide recycl\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "number",
    className: "form-control form-control-sm",
    id: "regeneratedFluidQuantity",
    defaultValue: "0",
    min: "0",
    max: props.capacity,
    onChange: onFluidCChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "regeneratedFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("sup", null, "(C)"), " Dont fluide r\xE9g\xE9n\xE9r\xE9")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FluidLoading);

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
      if (!equipment) setFormError(true);else if (!type) setFormError(true);else if (type.id != 5 && type.id != 6 && checkFluidHandling()) setFormError(true);else if ((fluidQuantities.D > 0 || fluidQuantities.E > 0) && !container) setFormError(true);else if (!equipment.leakDetectionSystem && !detector) setFormError(true);else if (checkLeaks()) setFormError(true);else setFormError(false);
    }
  });

  // Check fluid quantities conformity
  // A+B+C must be a positive number if loadingFluid is true
  // D or E must be a positive number if collectingFluid is true
  // A, B and C must be less or equal than equipment capacity
  // D or E must be less or equal than equipment capacity
  //
  var checkFluidHandling = function checkFluidHandling() {
    var q = fluidQuantities;
    var d = fluidDestination;
    var w = equipment.weight;
    var tAbc = q.A + q.B + q.C;
    var tDe = q.D + q.E;
    return q.E > 0 && !d || q.D > 0 && q.E > 0 || tAbc <= 0 || q.D > w || q.E > w || tAbc > w || tDe > w;
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
            if (!(i < count)) {
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
    capacity: equipment.weight,
    onChange: onFluidQuantitiesChange
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
    onClick: function onClick() {
      window.location.reload();
    }
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("i", {
      className: "fas fa-screwdriver"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", null, new Date(intervention.date).toLocaleDateString('fr-CA')), " ", intervention.interventionType.name, " ", intervention.equipment.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFDLEVBQUN6TCxLQUFLLENBQUNJLElBQUksQ0FBQ2MsSUFBSSxDQUNyRCxFQUVQbEIsS0FBSyxDQUFDSSxJQUFJLENBQUNxTCxTQUFTLGlCQUNuQjtJQUFLLFNBQVMsRUFBQywyQkFBMkI7SUFBQyxRQUFRO0VBQUEsZ0JBQ2pEO0lBQUcsU0FBUyxFQUFDO0VBQWlCLEVBQUssS0FBQyxFQUFDekwsS0FBSyxDQUFDSSxJQUFJLENBQUNjLElBQUksQ0FDaEQsQ0FFSixlQUNSLHNFQUFNLENBQ0E7QUFFVixDQUFDO0FBRUQsaUVBQWV1RSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0RldGVjdG9yQ29udHJvbERhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0RldGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9FcXVpcG1lbnREZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9GbHVpZENvbGxlY3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkSGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0xlYWthZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L090aGVyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvUmVtYXJrcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvV2FzdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuLy8gaW1wb3J0IFwiLi9jc3MvaW5kZXguY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vanN4L0FwcFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbmlmIChjb250YWluZXIpIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuICByb290LnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0yXCI+XG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgIDwvZGl2PlxuKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEludGVydmVudGlvbkZvcm0gZnJvbSBcIi4vSW50ZXJ2ZW50aW9uRm9ybVwiO1xuaW1wb3J0IEludGVydmVudGlvbkxpc3QgZnJvbSBcIi4vSW50ZXJ2ZW50aW9uTGlzdFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyAmJlxuICAgICAgICA8SW50ZXJ2ZW50aW9uTGlzdCAvPlxuICAgIH1cbiAgICB7IFxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycgJiZcbiAgICAgIDw+XG4gICAgICAgIDxoMj5GaWNoZSBkJ2ludGVydmVudGlvbjwvaDI+XG4gICAgICAgIDxJbnRlcnZlbnRpb25Gb3JtIC8+XG4gICAgICA8Lz5cbiAgICB9XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gQ3JlYXRlIGFuIGF4aW9zIG9iamVjdCB3aXRoIGRlZmF1bHQgaGVhZGVyc1xuY29uc3QgYXggPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcIi9hcGlcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICB9LFxufSk7XG5cbi8vIENhdGNoIHVuYXV0aG9yaXplZCByZXF1ZXN0IGFuZCByZWRpcmVjdCBpZiBlcnJvclxuYXguaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHJlc3BvbnNlLCAoZXJyb3IpID0+IHtcbiAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBheDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBDb250YWluZXJzID0gKHByb3BzKSA9PiB7XG4gIFxuICBjb25zdCBbY29udGFpbmVycywgc2V0Q29udGFpbmVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KCcvY29udGFpbmVyc0J5Rmx1aWQvJyArIHByb3BzLmRhdGEuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRDb250YWluZXJzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtwcm9wcy5kYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0xXCI+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShjb250YWluZXJzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgICBpZD1cImNvbnRhaW5lckxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluZXJzLm1hcCgoY29udGFpbmVyLCBpKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2NvbnRhaW5lci5pZH0+XG4gICAgICAgICAgICAgIHtjb250YWluZXIuc2VyaWFsTnVtYmVyfXsvKiAtLSB7Y29udGFpbmVyLmZsdWlkUXVhbnRpdHkudG9GaXhlZCgyKX0ve2NvbnRhaW5lci5jYXBhY2l0eS50b0ZpeGVkKDIpfSAqL31cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFpbmVyTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvdHRsZS1kcm9wbGV0XCI+PC9pPiBDb250ZW5hbnRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERldGVjdG9yQ29udHJvbERhdGUgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjb250cm9sRGF0ZSA9IG5ldyBEYXRlKHByb3BzLmRhdGEuY29udHJvbERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLWZyXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiXG4gICAgICAgIHZhbHVlPXtjb250cm9sRGF0ZX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yQ29udHJvbERhdGVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xpcGJvYXJkLWNoZWNrXCI+PC9pPiBEYXRlIGR1IGRlcm5pZXIgY29udHLDtGxlICh7cHJvcHMuZGF0YS5uYW1lfSlcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JDb250cm9sRGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBEZXRlY3RvcnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZGV0ZWN0b3JzLCBzZXREZXRlY3RvcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9kZXRlY3RvcnNcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldERldGVjdG9ycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAga2V5PXtwcm9wcy5kYXRhfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShkZXRlY3RvcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZGV0ZWN0b3JzLm1hcCgoZGV0ZWN0b3IsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2RldGVjdG9yLmlkfT5cbiAgICAgICAgICAgIHtkZXRlY3Rvci5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb21wYXNzXCI+PC9pPiBEw6l0ZWN0ZXVyIGRlIGZ1aXRlc1xuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgRXF1aXBtZW50ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoXCIvZXF1aXBtZW50XCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRFcXVpcG1lbnQocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZXF1aXBtZW50W2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZXF1aXBtZW50TGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBlcXVpcG1lbnQubWFwKChnZWFyLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtnZWFyLmlkfT5cbiAgICAgICAgICAgIHtnZWFyLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nZWFyc1wiPjwvaT4gRXF1aXBlbWVudCBjb25jZXJuw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFcXVpcG1lbnREZXRhaWxzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0xIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJlcXVpcG1lbnROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT4gSWRlbnRpZmljYXRpb25cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5mbHVpZC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IETDqW5vbWluYXRpb24gZHUgZmx1aWRlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLndlaWdodC50b0ZpeGVkKDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13ZWlnaHQtaGFuZ2luZ1wiPjwvaT4gQ2hhcmdlIHRvdGFsZSAoa2cpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWRDTzJcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuY28yRXFUb25uYWdlLnRvRml4ZWQoMil9IFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZENPMlwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvdWRcIj48L2k+IFRvbm5hZ2Ugw6lxdWl2YWxlbnQgQzA8c3ViPjI8L3N1Yj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG10LTFcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgIGlkPVwibGVha0RldGVjdGlvblN5c3RlbVwiXG4gICAgICAgICAgY2hlY2tlZD17cHJvcHMuZGF0YS5sZWFrRGV0ZWN0aW9uU3lzdGVtfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxlYWtEZXRlY3Rpb25TeXN0ZW1cIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kXCI+PC9pPiBQcsOpc2VuY2UgZCd1biBzeXN0w6htZSBwZXJtYW5lbnQgZGUgZMOpdGVjdGlvbiBkZSBmdWl0ZXNcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudERldGFpbHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZENvbGxlY3RpbmcgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbRCwgc2V0RF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW0UsIHNldEVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1ERSwgc2V0U3VtREVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25GbHVpZERDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBkID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXREKGQpO1xuICAgIHNldFN1bURFKGQrRSlcbiAgICBwcm9wcy5vbkRDaGFuZ2UoZCk7XG4gIH1cblxuICBjb25zdCBvbkJzZmZDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBic2ZmID0gZS50YXJnZXQudmFsdWU7XG4gICAgcHJvcHMub25CU0ZGQ2hhbmdlKGJzZmYpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZEVDaGFuZ2UgPSAoZXYpID0+IHtcbiAgICBsZXQgZSA9IE51bWJlcihldi50YXJnZXQudmFsdWUpO1xuICAgIHNldEUoZSk7XG4gICAgc2V0U3VtREUoRCtlKTtcbiAgICBwcm9wcy5vbkVDaGFuZ2UoZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgIGlkPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIHZhbHVlPXtzdW1ERX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbFJldHJpZXZlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tdXBcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgcsOpY3Vww6lyw6llIDxzdXA+KEQrRSk8L3N1cD48L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgIGlkPVwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIG1heD17cHJvcHMuY2FwYWNpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWREQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgIDxzdXA+KEQpPC9zdXA+IERvbnQgZmx1aWRlIGRlc3RpbsOpIGF1IHRyYWl0ZW1lbnRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJic2ZmTnVtYmVyXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25Cc2ZmQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJzZmZOdW1iZXJcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgTnVtw6lybyBkdSBCU0ZGIChzaSBjb25udSlcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICBpZD1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbWF4PXtwcm9wcy5jYXBhY2l0eX1cbiAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmV1c2FibGVGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbHVpZENvbGxlY3Rpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsdWlkRGVzdGluYXRpb24gPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiXG4gICAgICA+XG4gICAgICAgIEluc3RhbGxhdGlvbiBwcsOpdnVlIGRlIGRlc3RpbmF0aW9uIGR1IGZsdWlkZSByw6ljdXDDqXLDqVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbSwgU0lSRVQsIGFkcmVzc2VcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx1aWREZXN0aW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuaW1wb3J0IEZsdWlkTG9hZGluZyBmcm9tIFwiLi9GbHVpZExvYWRpbmdcIjtcbmltcG9ydCBGbHVpZENvbGxlY3RpbmcgZnJvbSBcIi4vRmx1aWRDb2xsZWN0aW5nXCI7XG5cbmNvbnN0IEZsdWlkSGFuZGxpbmcgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZmx1aWRRdWFudGl0aWVzLCBzZXRGbHVpZFF1YW50aXRpZXNdID0gdXNlU3RhdGUoe1xuICAgICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnXG4gIH0pO1xuXG4gIGNvbnN0IFtmbHVpZExvYWRpbmcsIHNldEZsdWlkTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmbHVpZENvbGxlY3RpbmcsIHNldEZsdWlkQ29sbGVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25GbHVpZEFDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBBID0gZTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBBOiBBXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRCQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQiA9IGU7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQjogQlxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQ0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEMgPSBlO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEM6IENcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBEID0gZTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBEOiBEXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRFQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgRSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgRTogRVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkJzZmZDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEJTRkY6IGVcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25Mb2FkaW5nQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldEZsdWlkTG9hZGluZyhlLnRhcmdldC5jaGVja2VkKTtcbiAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGxldCBmcSA9IHtcbiAgICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgICBBOiAwLFxuICAgICAgICBCOiAwLFxuICAgICAgICBDOiAwLFxuICAgICAgfVxuICAgICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkNvbGxlY3RpbmdDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRDb2xsZWN0aW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEQ6IDAsXG4gICAgICAgIEJTRkY6ICcnLFxuICAgICAgICBFOiAwLFxuICAgICAgfVxuICAgICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBiZy1zZWNvbmRhcnkgdGV4dC1saWdodCByb3VuZGVkIG14LWF1dG8gcC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBNYW5pcHVsYXRpb24gZHUgZmx1aWRlIGZyaWdvcmlnw6huZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIGlkPVwibG9hZGluZ0ZsdWlkXCIgb25DbGljaz17KGUpID0+IHtvbkxvYWRpbmdDbGljayhlKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwibG9hZGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtbG9hZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtbG9hZFwiIGNvbnRlbnQ9XCJDaGFyZ2VtZW50XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiBpZD1cImNvbGxlY3RpbmdGbHVpZFwiIG9uQ2xpY2s9eyhlKSA9PiB7b25Db2xsZWN0aW5nQ2xpY2soZSl9fSAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJvcmRlci0wIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RpbmdGbHVpZFwiXG4gICAgICAgICAgICBpZD1cInR0LWNvbGxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLXVwXCI+PC9pPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC1jb2xsZWN0XCIgY29udGVudD1cIlLDqWN1cMOpcmF0aW9uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIHsgZmx1aWRMb2FkaW5nICYmXG4gICAgICAgICAgPEZsdWlkTG9hZGluZ1xuICAgICAgICAgICAgY2FwYWNpdHk9e3Byb3BzLmNhcGFjaXR5fVxuICAgICAgICAgICAgb25BQ2hhbmdlPXtvbkZsdWlkQUNoYW5nZX1cbiAgICAgICAgICAgIG9uQkNoYW5nZT17b25GbHVpZEJDaGFuZ2V9XG4gICAgICAgICAgICBvbkNDaGFuZ2U9e29uRmx1aWRDQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgeyBmbHVpZENvbGxlY3RpbmcgJiZcbiAgICAgICAgICA8Rmx1aWRDb2xsZWN0aW5nXG4gICAgICAgICAgICBjYXBhY2l0eT17cHJvcHMuY2FwYWNpdHl9XG4gICAgICAgICAgICBvbkRDaGFuZ2U9e29uRmx1aWREQ2hhbmdlfVxuICAgICAgICAgICAgb25CU0ZGQ2hhbmdlPXtvbkJzZmZDaGFuZ2V9XG4gICAgICAgICAgICBvbkVDaGFuZ2U9e29uRmx1aWRFQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZExvYWRpbmcgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbQSwgc2V0QV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW0IsIHNldEJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtDLCBzZXRDXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3VtQUJDLCBzZXRTdW1BQkNdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25GbHVpZEFDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBhID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRBKGEpO1xuICAgIHNldFN1bUFCQyhhK0IrQyk7XG4gICAgcHJvcHMub25BQ2hhbmdlKGEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZEJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBiID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRCKGIpO1xuICAgIHNldFN1bUFCQyhBK2IrQyk7XG4gICAgcHJvcHMub25CQ2hhbmdlKGIpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZENDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBjID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRDKGMpO1xuICAgIHNldFN1bUFCQyhBK0IrYyk7XG4gICAgcHJvcHMub25DQ2hhbmdlKGMpO1xuICB9XG5cbiAgY29uc29sZS5sb2cocHJvcHMuY2FwYWNpdHkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgdmFsdWU9e3N1bUFCQ31cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT4gUXVhbnRpdMOpIHRvdGFsZSBjaGFyZ8OpZSA8c3VwPihBK0IrQyk8L3N1cD48L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgIGlkPVwidmlyZ2luRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbWF4PXtwcm9wcy5jYXBhY2l0eX1cbiAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEFDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmlyZ2luRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICA8c3VwPihBKTwvc3VwPiBEb250IGZsdWlkZSB2aWVyZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICBpZD1cInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbWF4PXtwcm9wcy5jYXBhY2l0eX1cbiAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEJDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJyZWdlbmVyYXRlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIG1heD17cHJvcHMuY2FwYWNpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRDQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICA8c3VwPihDKTwvc3VwPiBEb250IGZsdWlkZSByw6lnw6luw6lyw6lcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBEZXRlY3RvcnMgZnJvbSBcIi4vRGV0ZWN0b3JzXCI7XG5pbXBvcnQgRGV0ZWN0b3JDb250cm9sRGF0ZSBmcm9tIFwiLi9EZXRlY3RvckNvbnRyb2xEYXRlXCJcbmltcG9ydCBFcXVpcG1lbnQgZnJvbSBcIi4vRXF1aXBtZW50XCI7XG5pbXBvcnQgSW50ZXJ2ZW50aW9uVHlwZXMgZnJvbSBcIi4vSW50ZXJ2ZW50aW9uVHlwZXNcIjtcbmltcG9ydCBPdGhlclR5cGUgZnJvbSBcIi4vT3RoZXJUeXBlXCI7XG5pbXBvcnQgTGVha2FnZSBmcm9tIFwiLi9MZWFrYWdlXCI7XG5pbXBvcnQgQ29udGFpbmVycyBmcm9tIFwiLi9Db250YWluZXJzXCI7XG5pbXBvcnQgRXF1aXBtZW50RGV0YWlscyBmcm9tIFwiLi9FcXVpcG1lbnREZXRhaWxzXCI7XG5pbXBvcnQgRmx1aWRIYW5kbGluZyBmcm9tIFwiLi9GbHVpZEhhbmRsaW5nXCI7XG5pbXBvcnQgV2FzdGVzIGZyb20gXCIuL1dhc3Rlc1wiO1xuaW1wb3J0IEZsdWlkRGVzdGluYXRpb24gZnJvbSBcIi4vRmx1aWREZXN0aW5hdGlvblwiO1xuaW1wb3J0IFJlbWFya3MgZnJvbSBcIi4vUmVtYXJrc1wiO1xuXG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uRm9ybSA9ICgpID0+IHtcblxuICAvLyBDdXJyZW50IGRhdGVcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XG4gIGNvbnN0IG5vdyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItQ0FcIik7XG4gIFxuICAvLyBTdGF0ZXNcblxuICBjb25zdCBbaW50ZXJ2ZW50aW9uRGF0ZSwgc2V0SW50ZXJ2ZW50aW9uRGF0ZV0gPSB1c2VTdGF0ZShub3cpO1xuICBjb25zdCBbZXF1aXBtZW50LCBzZXRFcXVpcG1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3RoZXJUeXBlLCBzZXRPdGhlclR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gSW50ZXJ2ZW50aW9uIHR5cGUgaXMgNSBvciA2XG4gIGNvbnN0IFtsZWFrQ29udHJvbCwgc2V0TGVha0NvbnRyb2xdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEludGVydmVudGlvbiB0eXBlIGlzIG5vdCA1IGFuZCBub3QgNlxuICAvLyBMZWFrIGNvbnRyb2wgaXMgbWFuZGF0b3J5IGFmdGVyIGFuIGludGVydmVudGlvblxuICBjb25zdCBbbWFuZGF0b3J5TGVha0NvbnRyb2wsIHNldE1hbmRhdG9yeUxlYWtDb250cm9sXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBEZXRlY3RvciB1c2VkIGZvciBsZWFrYWdlIGNvbnRyb2xcbiAgY29uc3QgW2RldGVjdG9yLCBzZXREZXRlY3Rvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xlYWtMb2NhdGlvbnMsIHNldExlYWtMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGVha0ZpeGVkLCBzZXRMZWFrRml4ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIEZsdWlkIHF1YW50aXRpZXNcbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHtcbiAgICAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ1xuICB9KTtcblxuICBjb25zdCBbY29udGFpbmVyLCBzZXRDb250YWluZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmbHVpZERlc3RpbmF0aW9uLCBzZXRGbHVpZERlc3RpbmF0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVtYXJrcywgc2V0UmVtYXJrc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BkZlBhdGgsIHNldFBkZlBhdGhdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsZWFrc1Bvc3RlZCwgc2V0TGVha3NQb3N0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEluIGNhc2Ugb2YgaW5wdXQgZXJyb3Ig4oaSIHVzZWQgdG8gZGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IFtmb3JtRXJyb3IsIHNldEZvcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGVha3NQb3N0ZWQpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHBkZlBhdGgsICdfYmxhbmsnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIGZvcm0gZXJyb3JzIGhlcmVcbiAgICAgIGlmICghZXF1aXBtZW50KVxuICAgICAgICBzZXRGb3JtRXJyb3IodHJ1ZSk7XG4gICAgICBlbHNlIGlmICghdHlwZSlcbiAgICAgICAgc2V0Rm9ybUVycm9yKHRydWUpO1xuICAgICAgZWxzZSBpZiAodHlwZS5pZCAhPSA1ICYmIHR5cGUuaWQgIT0gNiAmJiBjaGVja0ZsdWlkSGFuZGxpbmcoKSlcbiAgICAgICAgc2V0Rm9ybUVycm9yKHRydWUpO1xuICAgICAgZWxzZSBpZiAoKChmbHVpZFF1YW50aXRpZXMuRCA+IDApIHx8IChmbHVpZFF1YW50aXRpZXMuRSA+IDApKSAmJiAhY29udGFpbmVyKVxuICAgICAgICBzZXRGb3JtRXJyb3IodHJ1ZSk7XG4gICAgICBlbHNlIGlmICghZXF1aXBtZW50LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiYgIWRldGVjdG9yKVxuICAgICAgICBzZXRGb3JtRXJyb3IodHJ1ZSk7XG4gICAgICBlbHNlIGlmIChjaGVja0xlYWtzKCkpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2VcbiAgICAgICAgc2V0Rm9ybUVycm9yKGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgLy8gQ2hlY2sgZmx1aWQgcXVhbnRpdGllcyBjb25mb3JtaXR5XG4gIC8vIEErQitDIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgaWYgbG9hZGluZ0ZsdWlkIGlzIHRydWVcbiAgLy8gRCBvciBFIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgaWYgY29sbGVjdGluZ0ZsdWlkIGlzIHRydWVcbiAgLy8gQSwgQiBhbmQgQyBtdXN0IGJlIGxlc3Mgb3IgZXF1YWwgdGhhbiBlcXVpcG1lbnQgY2FwYWNpdHlcbiAgLy8gRCBvciBFIG11c3QgYmUgbGVzcyBvciBlcXVhbCB0aGFuIGVxdWlwbWVudCBjYXBhY2l0eVxuICAvL1xuICBjb25zdCBjaGVja0ZsdWlkSGFuZGxpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHEgPSBmbHVpZFF1YW50aXRpZXM7XG4gICAgbGV0IGQgPSBmbHVpZERlc3RpbmF0aW9uO1xuICAgIGxldCB3ID0gZXF1aXBtZW50LndlaWdodDtcbiAgICBsZXQgdEFiYyA9IHEuQSArIHEuQiArIHEuQztcbiAgICBsZXQgdERlID0gcS5EICsgcS5FO1xuXG4gICAgcmV0dXJuIChxLkUgPiAwICYmICFkKSB8fCAocS5EID4gMCAmJiBxLkUgPiAwKSB8fCAoKHRBYmMgPD0gMCkgfHwgKHEuRCA+IHcgfHwgcS5FID4gdykgfHwgKHRBYmMgPiB3IHx8IHREZSA+IHcpKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTGVha3MgPSAoKSA9PiB7XG4gICAgbGV0IGwgPSBsZWFrTG9jYXRpb25zO1xuICAgIGlmIChsLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghbFtpXSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBcbiAgY29uc3Qgb25JbnRlcnZlbnRpb25EYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnRlcnZlbnRpb25EYXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRXF1aXBtZW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICBoYW5kbGVSZXNldCgpO1xuICAgIHNldEVxdWlwbWVudChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBzZXRMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgICBzZXRNYW5kYXRvcnlMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICBzZXRMZWFrQ29udHJvbCgoZS5pZCA9PT0gNSB8fCBlLmlkID09PSA2KSk7XG4gICAgIHNldE1hbmRhdG9yeUxlYWtDb250cm9sKChlLmlkICE9PSA1ICYmIGUuaWQgIT09IDYpKVxuICAgIH1cblxuICAgIHNldFR5cGUoZSk7XG4gICAgc2V0RGV0ZWN0b3IobnVsbCk7XG4gIH1cblxuICBjb25zdCBvbk90aGVyVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0T3RoZXJUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRGV0ZWN0b3JDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldERldGVjdG9yKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrTG9jYXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtMb2NhdGlvbnMoZSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtGaXhlZENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TGVha0ZpeGVkKGUpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZFF1YW50aXRpZXNDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzdW1BQkMgPSBlLkEgKyBlLkIgKyBlLkM7XG4gICAgbGV0IHN1bURFID0gZS5EICsgZS5CO1xuICAgIHNldEZvcm1FcnJvcihpc05hTihzdW1BQkMpIHx8IGlzTmFOKHN1bURFKSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGUpO1xuICB9XG5cbiAgY29uc3Qgb25Db250YWluZXJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRhaW5lcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREZXN0aW5hdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvblJlbWFya3NDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFJlbWFya3MoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgcG9zdExlYWtzID0gYXN5bmMgKGludGVydmVudGlvbklEKSA9PiB7XG4gICAgLy8gUE9TVCBsZWFrcyBvbmUgYnkgb25lXG4gICAgbGV0IGNvdW50ID0gbGVha0xvY2F0aW9ucy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7ICBpIDwgY291bnQ7ICBpKyspIHtcbiAgICAgIGxldCBsZWFrID0ge1xuICAgICAgICBcIm51bVwiOiBpKzEsXG4gICAgICAgIFwiY291bnRcIjogY291bnQsXG4gICAgICAgIFwibG9jYXRpb25cIjogbGVha0xvY2F0aW9uc1tpXSxcbiAgICAgICAgXCJmaXhlZFwiOiBsZWFrRml4ZWRbaV0sXG4gICAgICAgIFwiaW50ZXJ2ZW50aW9uXCI6IFwiL2FwaS9pbnRlcnZlbnRpb25zL1wiICsgaW50ZXJ2ZW50aW9uSUQsXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGF4LnBvc3QoJy9sZWFrYWdlcycsXG4gICAgICAgIGxlYWtcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIGxlYWthZ2UgUE9TVCcsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0TGVha3NQb3N0ZWQodHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW50ZXJ2ZW50aW9uID0ge1xuICAgICAgXCJkYXRlXCI6IGludGVydmVudGlvbkRhdGUsXG4gICAgICBcInZpcmdpbkZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkEsXG4gICAgICBcInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQixcbiAgICAgIFwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5DLFxuICAgICAgXCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuRCxcbiAgICAgIFwiYnNmZk51bWJlclwiOiBmbHVpZFF1YW50aXRpZXMuQlNGRixcbiAgICAgIFwicmV1c2FibGVGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5FLFxuICAgICAgXCJjb2xsZWN0ZWRGbHVpZERlc3RpbmF0aW9uXCI6IGZsdWlkRGVzdGluYXRpb24sXG4gICAgICBcInJlbWFya3NcIjogcmVtYXJrcyxcbiAgICAgIFwiaW50ZXJ2ZW50aW9uVHlwZVwiOiBcIi9hcGkvaW50ZXJ2ZW50aW9uX3R5cGVzL1wiICsgdHlwZS5pZCxcbiAgICAgIFwib3RoZXJJbnRlcnZlbnRpb25UeXBlXCI6IG90aGVyVHlwZSxcbiAgICAgIFwiZXF1aXBtZW50XCI6IFwiL2FwaS9lcXVpcG1lbnQvXCIgKyBlcXVpcG1lbnQuaWQsXG4gICAgICBcImNvbnRhaW5lclwiOiBjb250YWluZXI/XCIvYXBpL2NvbnRhaW5lcnMvXCIgKyBjb250YWluZXIuaWQ6bnVsbCxcbiAgICAgIFwiYWNjZXNzb3J5XCI6IGRldGVjdG9yP1wiL2FwaS9hY2Nlc3Nvcmllcy9cIiArIGRldGVjdG9yLmlkOm51bGwsXG4gICAgICBcImxlYWtzXCI6IGxlYWtMb2NhdGlvbnMubGVuZ3RoID4gMCxcbiAgICAgIFwidXNlclwiOiBcIi9hcGkvdXNlcnMvXCIgKyB3aW5kb3cudXNlcixcbiAgICAgIFwicGRmUGF0aFwiOiBcIlwiLFxuICAgIH07XG5cbiAgICAvLyBQT1NUIGludGVydmVudGlvblxuICAgIGF4LnBvc3QoJy9pbnRlcnZlbnRpb25zJyxcbiAgICAgIGludGVydmVudGlvblxuICAgIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFBPU1QgbGVha3NcbiAgICAgIHBvc3RMZWFrcyhyZXNwb25zZS5kYXRhLmlkKTtcbiAgICAgIHNldFBkZlBhdGgocmVzcG9uc2UuZGF0YS5wZGZQYXRoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEVxdWlwbWVudChudWxsKTtcbiAgICBzZXRUeXBlKG51bGwpO1xuICAgIHNldE90aGVyVHlwZShcIlwiKTtcbiAgICBzZXRMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgc2V0TWFuZGF0b3J5TGVha0NvbnRyb2woZmFsc2UpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICAgIHNldExlYWtMb2NhdGlvbnMoW10pO1xuICAgIHNldExlYWtGaXhlZChbXSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKHsgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJyd9KTtcbiAgICBzZXRDb250YWluZXIobnVsbCk7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihcIlwiKTtcbiAgICBzZXRSZW1hcmtzKFwiXCIpO1xuICAgIHNldFBkZlBhdGgoXCJcIik7XG4gICAgc2V0TGVha3NQb3N0ZWQoZmFsc2UpO1xuICAgIHNldEZvcm1FcnJvcihmYWxzZSk7XG4gIH1cblxuICAvLyBDb2xsZWN0ZWQgZmx1aWQgd2lsbCBiZSBpbnN0YWxsZWQgaW4gYW5vdGhlciBlcXVpcG1lbnRcbiAgY29uc3QgbXVzdEluc3RhbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZsdWlkUXVhbnRpdGllcy5FID4gMDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFVzZXIgZGF0YT17d2luZG93LnVzZXJ9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3d9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlcnZlbnRpb25EYXRlXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+IERhdGUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVxdWlwbWVudCBvbkNoYW5nZT17b25FcXVpcG1lbnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxFcXVpcG1lbnREZXRhaWxzIGRhdGE9e2VxdWlwbWVudH0gLz5cbiAgICAgICAgICAgICAgICA8SW50ZXJ2ZW50aW9uVHlwZXMgb25DaGFuZ2U9e29uVHlwZUNoYW5nZX0gZGF0YT17ZXF1aXBtZW50LmlkfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgdHlwZT8uaWQgPT09IDggICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJiB0eXBlICYmICFsZWFrQ29udHJvbCAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGbHVpZEhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICBjYXBhY2l0eT17ZXF1aXBtZW50LndlaWdodH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkUXVhbnRpdGllc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChtdXN0SW5zdGFsbCgpIHx8IGZsdWlkUXVhbnRpdGllcy5EID4gMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtlcXVpcG1lbnQuZmx1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29udGFpbmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHsgZmx1aWRRdWFudGl0aWVzLkQgPiAwICYmXG4gICAgICAgICAgICAgICAgICA8V2FzdGVzIGRhdGE9e2VxdWlwbWVudC5mbHVpZC5mbHVpZFR5cGV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IG11c3RJbnN0YWxsKCkgJiZcbiAgICAgICAgICAgICAgICA8Rmx1aWREZXN0aW5hdGlvbiBvbkNoYW5nZT17b25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IHR5cGUgJiYgIWVxdWlwbWVudD8ubGVha0RldGVjdGlvblN5c3RlbSAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxEZXRlY3RvcnMgZGF0YT17dHlwZS5pZH0gb25DaGFuZ2U9e29uRGV0ZWN0b3JDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgeyAgZGV0ZWN0b3IgJiZcbiAgICAgICAgICAgICAgICAgIDxEZXRlY3RvckNvbnRyb2xEYXRlIGRhdGE9e2RldGVjdG9yfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgeyAobGVha0NvbnRyb2wgfHwgbWFuZGF0b3J5TGVha0NvbnRyb2wpICYmXG4gICAgICAgICAgICAgICAgPExlYWthZ2VcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3R5cGU/LmlkfVxuICAgICAgICAgICAgICAgICAgb25Mb2NhdGlvbkNoYW5nZT17b25MZWFrTG9jYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkZpeGVkQ2hhbmdlPXtvbkxlYWtGaXhlZENoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgIDxSZW1hcmtzIG9uQ2hhbmdlPXtvblJlbWFya3NDaGFuZ2V9IC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtLTJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXdhcm5pbmdcIiB0eXBlPVwicmVzZXRcIiBvbkNsaWNrPXsoKSA9PiB7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfX0+QW5udWxlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9ybUVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgSW50ZXJ2ZW50aW9ucyBmcm9tIFwiLi9JbnRlcnZlbnRpb25zXCI7XG5cbmNvbnN0IEludGVydmVudGlvbkxpc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFVzZXIgZGF0YT17d2luZG93LnVzZXJ9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbnRlcnZlbnRpb25zIGRhdGE9e3dpbmRvdy51c2VyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uVHlwZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9pbnRlcnZlbnRpb25fdHlwZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHlwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX0gLy8gcmVzZXQgaWYgZXF1aXBtZW50IGNoYW5nZWRcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UodHlwZXNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJ0eXBlTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICB0eXBlcy5tYXAoKHR5cGUsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e3R5cGUuaWR9PlxuICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zY3Jld2RyaXZlci13cmVuY2hcIj48L2k+IE5hdHVyZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25UeXBlcztcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEludGVydmVudGlvbnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbaW50ZXJ2ZW50aW9ucywgc2V0SW50ZXJ2ZW50aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2ludGVydmVudGlvbnNCeVVzZXIvXCIgKyBwcm9wcy5kYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldEludGVydmVudGlvbnMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBzZXRJbnRlcnZlbnRpb25zKFtdKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pO1xuXG4gIGlmIChsb2FkaW5nKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtc2Vjb25kYXJ5IG0tMlwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5DaGFyZ2VtZW50Li4uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgaWYgKGludGVydmVudGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS14bWFya1wiPjwvaT48c3BhbiBjbGFzc05hbWU9XCJzbWFsbFwiPiBQYXMgZCdpbnRlcnZlbnRpb24gdHJvdXbDqWU8L3NwYW4+IFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAge1xuICAgICAgaW50ZXJ2ZW50aW9ucy5tYXAoKGludGVydmVudGlvbiwgaSkgPT4gKFxuICAgICAgXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gc21hbGxcIiBrZXk9e2l9PlxuICAgICAgICAgIHsvKiBUT0RPOiBEaXNwbGF5IGludGVydmVudGlvbiB0eXBlIGFuZCBlcXVpcG1lbnQgbmFtZSAqL31cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2NyZXdkcml2ZXJcIj48L2k+IDxzcGFuPntuZXcgRGF0ZShpbnRlcnZlbnRpb24uZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1DQScpfTwvc3Bhbj4ge2ludGVydmVudGlvbi5pbnRlcnZlbnRpb25UeXBlLm5hbWV9IHtpbnRlcnZlbnRpb24uZXF1aXBtZW50Lm5hbWV9PGEgaHJlZj17aW50ZXJ2ZW50aW9uLnBkZlBhdGh9IHRhcmdldD1cIl9ibGFua1wiPlBERjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpXG4gICAgfVxuICAgIDwvdWw+XG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0ICdyZWFjdC10b29sdGlwL2Rpc3QvcmVhY3QtdG9vbHRpcC5jc3MnO1xuXG5jb25zdCBMZWFrID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXIgYm9yZGVyLTAgYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQgcm91bmRlZCBtZS0yXCI+e3Byb3BzLmlkKzF9PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gYm9yZGVyIGJvcmRlci0wIG1sLTIgbWUtMlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJMb2NhbGlzYXRpb24gZGUgbGEgZnVpdGVcIlxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgTGVha2FnZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtsZWFrQ29tcG9uZW50cywgc2V0TGVha0NvbXBvbmVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZml4ZWQsIHNldEZpeGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRMZWFrID0gKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGxlYWtDb21wb25lbnRzLmxlbmd0aDtcblxuICAgIHNldExlYWtDb21wb25lbnRzKFtcbiAgICAgIC4uLmxlYWtDb21wb25lbnRzLFxuICAgICAgPExlYWsgZGF0YT17cHJvcHMuZGF0YX0gaWQ9e2luZGV4fSBvbkNoYW5nZT17b25MZWFrQ2hhbmdlfSAvPlxuICAgIF0pO1xuXG4gICAgbGV0IGxvY2F0aW9uc0NvcHkgPSBbLi4ubG9jYXRpb25zLCBcIlwiXTtcbiAgICBsZXQgZml4ZWRDb3B5ID0gWy4uLmZpeGVkXTtcbiAgICBmaXhlZENvcHkucHVzaChmYWxzZSk7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICBjb25zdCByZW1vdmVMZWFrID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZCAtIDIwO1xuICAgIGxldCBsZWFrQ29tcG9uZW50c0NvcHkgPSBbLi4ubGVha0NvbXBvbmVudHNdO1xuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9uc107XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF1cbiAgICBsZWFrQ29tcG9uZW50c0NvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhdGlvbnNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgZml4ZWRDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0TGVha0NvbXBvbmVudHMobGVha0NvbXBvbmVudHNDb3B5KTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgc2V0Rml4ZWQoZml4ZWRDb3B5KTtcbiAgICBwcm9wcy5vbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uc0NvcHkpO1xuICAgIHByb3BzLm9uRml4ZWRDaGFuZ2UoZml4ZWRDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQ7XG4gICAgbGV0IGxvY2F0aW9uc0NvcHkgPSBbLi4ubG9jYXRpb25zXTtcbiAgICBsb2NhdGlvbnNDb3B5W2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uc0NvcHkpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrRml4ZWQgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkIC0gMTA7XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF07XG4gICAgZml4ZWRDb3B5W2luZGV4XSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgc2V0Rml4ZWQoZml4ZWRDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yIGJnLXNlY29uZGFyeSBwLTIgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZFwiPjwvaT4gRnVpdGVzIGNvbnN0YXTDqWVzIGxvcnMgZHUgY29udHLDtGxlIGQnw6l0YW5jaMOpaXTDqVxuICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWxpZ2h0XCJcbiAgICAgICAgICBvbkNsaWNrPXthZGRMZWFrfVxuICAgICAgICAgIGRpc2FibGVkPXtsZWFrQ29tcG9uZW50cy5sZW5ndGggPT09IDN9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiPjwvaT4gQWpvdXRlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBsZWFrQ29tcG9uZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJtLTIgYm9yZGVyIGJvcmRlci0xIHJvdW5kZWRcIj5cbiAgICAgICAge1xuICAgICAgICAgIGxlYWtDb21wb25lbnRzLm1hcCgobGVhaywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG0tMiBkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWV2ZW5cIj5cbiAgICAgICAgICAgICAge2xlYWt9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCJcbiAgICAgICAgICAgICAgICBpZD17MTAraX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTGVha0ZpeGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJ0dC13cmVuY2hcIiBodG1sRm9yPXsxMCtpfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJvcmRlciBib3JkZXItMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdyZW5jaFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC13cmVuY2hcIiBjb250ZW50PVwiRnVpdGUgcsOpcGFyw6llXCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGlkPXsyMCtpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbG9zZSBtZS0zIHJvdW5kZWQtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVMZWFrfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2krMSA8IGxlYWtDb21wb25lbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFrYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBJbnB1dCB0ZXh0IGZvciBcIm90aGVyXCIgaW50ZXJ2ZW50aW9uIHR5cGVcbmNvbnN0IE90aGVyVHlwZSA9IChwcm9wcykgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIGlkPVwib3RoZXJJbnRlcnZlbnRpb25UeXBlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJWZXVpbGxleiBwcsOpY2lzZXIgbGUgdHlwZSBkJ2ludGVydmVudGlvbi4uLlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyVHlwZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVtYXJrcyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW91dGxpbmUgbS0yXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzbWFsbFwiXG4gICAgICAgIGh0bWxGb3I9XCJyZW1hcmtzXCJcbiAgICAgID5cbiAgICAgICAgT2JzZXJ2YXRpb25zXG4gICAgICA8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgaWQ9XCJyZW1hcmtzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGUpfX1cbiAgICAgID5cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtYXJrcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBVc2VyID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KCcvdXNlcnMvJyArIHByb3BzLmRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtwcm9wcy5kYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMiBtZS0yIGJnLXNlY29uZGFyeSBwLTIgcm91bmRlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCI+PC9pPiB7dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgV2FzdGVzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXNlY29uZGFyeSBwLTIgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXJcIj48L2k+IETDqW5vbWluYXRpb24gQURSL1JJRFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb3BzLmRhdGEuZmxhbW1hYmxlICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgcm91bmRlZC0wXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXItZmlyZVwiPjwvaT4ge3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7cHJvcHMuZGF0YS5mbGFtbWFibGUgfHxcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCByb3VuZGVkLTBcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kdW1wc3RlclwiPjwvaT4ge3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FzdGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiSW50ZXJ2ZW50aW9uRm9ybSIsIkludGVydmVudGlvbkxpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYXhpb3MiLCJheCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVycyIsInByb3BzIiwiY29udGFpbmVycyIsInNldENvbnRhaW5lcnMiLCJnZXQiLCJkYXRhIiwiaWQiLCJ0aGVuIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpIiwic2VyaWFsTnVtYmVyIiwiRGV0ZWN0b3JDb250cm9sRGF0ZSIsImNvbnRyb2xEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm5hbWUiLCJEZXRlY3RvcnMiLCJkZXRlY3RvcnMiLCJzZXREZXRlY3RvcnMiLCJkZXRlY3RvciIsIkVxdWlwbWVudCIsImVxdWlwbWVudCIsInNldEVxdWlwbWVudCIsImdlYXIiLCJFcXVpcG1lbnREZXRhaWxzIiwiZmx1aWQiLCJ3ZWlnaHQiLCJ0b0ZpeGVkIiwiY28yRXFUb25uYWdlIiwibGVha0RldGVjdGlvblN5c3RlbSIsIkZsdWlkQ29sbGVjdGluZyIsIkQiLCJzZXREIiwiRSIsInNldEUiLCJzdW1ERSIsInNldFN1bURFIiwib25GbHVpZERDaGFuZ2UiLCJkIiwiTnVtYmVyIiwib25EQ2hhbmdlIiwib25Cc2ZmQ2hhbmdlIiwiYnNmZiIsIm9uQlNGRkNoYW5nZSIsIm9uRmx1aWRFQ2hhbmdlIiwiZXYiLCJvbkVDaGFuZ2UiLCJjYXBhY2l0eSIsIkZsdWlkRGVzdGluYXRpb24iLCJUb29sdGlwIiwiRmx1aWRMb2FkaW5nIiwiRmx1aWRIYW5kbGluZyIsImZsdWlkUXVhbnRpdGllcyIsInNldEZsdWlkUXVhbnRpdGllcyIsImZsdWlkTG9hZGluZyIsInNldEZsdWlkTG9hZGluZyIsImZsdWlkQ29sbGVjdGluZyIsInNldEZsdWlkQ29sbGVjdGluZyIsIm9uRmx1aWRBQ2hhbmdlIiwiQSIsImZxIiwib25GbHVpZEJDaGFuZ2UiLCJCIiwib25GbHVpZENDaGFuZ2UiLCJDIiwiQlNGRiIsIm9uTG9hZGluZ0NsaWNrIiwiY2hlY2tlZCIsIm9uQ29sbGVjdGluZ0NsaWNrIiwic2V0QSIsInNldEIiLCJzZXRDIiwic3VtQUJDIiwic2V0U3VtQUJDIiwiYSIsIm9uQUNoYW5nZSIsImIiLCJvbkJDaGFuZ2UiLCJjIiwib25DQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIlVzZXIiLCJJbnRlcnZlbnRpb25UeXBlcyIsIk90aGVyVHlwZSIsIkxlYWthZ2UiLCJXYXN0ZXMiLCJSZW1hcmtzIiwiZGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwibm93IiwiaW50ZXJ2ZW50aW9uRGF0ZSIsInNldEludGVydmVudGlvbkRhdGUiLCJ0eXBlIiwic2V0VHlwZSIsIm90aGVyVHlwZSIsInNldE90aGVyVHlwZSIsImxlYWtDb250cm9sIiwic2V0TGVha0NvbnRyb2wiLCJtYW5kYXRvcnlMZWFrQ29udHJvbCIsInNldE1hbmRhdG9yeUxlYWtDb250cm9sIiwic2V0RGV0ZWN0b3IiLCJsZWFrTG9jYXRpb25zIiwic2V0TGVha0xvY2F0aW9ucyIsImxlYWtGaXhlZCIsInNldExlYWtGaXhlZCIsInNldENvbnRhaW5lciIsImZsdWlkRGVzdGluYXRpb24iLCJzZXRGbHVpZERlc3RpbmF0aW9uIiwicmVtYXJrcyIsInNldFJlbWFya3MiLCJwZGZQYXRoIiwic2V0UGRmUGF0aCIsImxlYWtzUG9zdGVkIiwic2V0TGVha3NQb3N0ZWQiLCJmb3JtRXJyb3IiLCJzZXRGb3JtRXJyb3IiLCJvcGVuIiwicmVsb2FkIiwiY2hlY2tGbHVpZEhhbmRsaW5nIiwiY2hlY2tMZWFrcyIsInEiLCJ3IiwidEFiYyIsInREZSIsImwiLCJsZW5ndGgiLCJvbkludGVydmVudGlvbkRhdGVDaGFuZ2UiLCJvbkVxdWlwbWVudENoYW5nZSIsImhhbmRsZVJlc2V0Iiwib25UeXBlQ2hhbmdlIiwib25PdGhlclR5cGVDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25MZWFrTG9jYXRpb25DaGFuZ2UiLCJvbkxlYWtGaXhlZENoYW5nZSIsIm9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlIiwiaXNOYU4iLCJvbkNvbnRhaW5lckNoYW5nZSIsIm9uRmx1aWREZXN0aW5hdGlvbkNoYW5nZSIsIm9uUmVtYXJrc0NoYW5nZSIsInBvc3RMZWFrcyIsImludGVydmVudGlvbklEIiwiY291bnQiLCJsZWFrIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaW50ZXJ2ZW50aW9uIiwidXNlciIsIm11c3RJbnN0YWxsIiwiZmx1aWRUeXBlIiwiSW50ZXJ2ZW50aW9ucyIsInR5cGVzIiwic2V0VHlwZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImludGVydmVudGlvbnMiLCJzZXRJbnRlcnZlbnRpb25zIiwiaW50ZXJ2ZW50aW9uVHlwZSIsIkxlYWsiLCJsZWFrQ29tcG9uZW50cyIsInNldExlYWtDb21wb25lbnRzIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwiZml4ZWQiLCJzZXRGaXhlZCIsImFkZExlYWsiLCJpbmRleCIsIm9uTGVha0NoYW5nZSIsImxvY2F0aW9uc0NvcHkiLCJmaXhlZENvcHkiLCJwdXNoIiwib25Mb2NhdGlvbkNoYW5nZSIsIm9uRml4ZWRDaGFuZ2UiLCJyZW1vdmVMZWFrIiwibGVha0NvbXBvbmVudHNDb3B5Iiwic3BsaWNlIiwib25MZWFrRml4ZWQiLCJzZXRVc2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmbGFtbWFibGUiXSwic291cmNlUm9vdCI6IiJ9