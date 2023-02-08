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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    BSFF = _useState4[0],
    setBSFF = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    E = _useState6[0],
    setE = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    sumDE = _useState8[0],
    setSumDE = _useState8[1];
  var onFluidDChange = function onFluidDChange(e) {
    var d = Number(e.target.value);
    setD(d);
    setSumDE(d + E);
    props.onDChange(d);
  };
  var onBsffChange = function onBsffChange(e) {
    var bsff = e.target.value;
    setBSFF(bsff);
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
    autoFocus: true,
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
  }, fluidLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_FluidLoading__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onAChange: onFluidAChange,
    onBChange: onFluidBChange,
    onCChange: onFluidCChange
  }), fluidCollecting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_FluidCollecting__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
      if (!equipment) setFormError(true);else if (!type) setFormError(true);else if (type.id != 5 && type.id != 6 && checkFluidHandling()) setFormError(true);else if (!equipment.leakDetectionSystem && !detector) setFormError(true);else if (checkLeaks()) setFormError(true);else setFormError(false);
    }
  });
  var checkFluidHandling = function checkFluidHandling() {
    var q = fluidQuantities;
    var d = fluidDestination;
    var w = equipment.weight;
    var tAbc = q.A + q.B + q.C;
    var tDe = q.D + q.E;
    return q.E > 0 && !d || q.D > 0 && q.E > 0 || tAbc <= 0 && tDe <= 0 || tAbc > w || tDe > w;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQW9DLGdCQUNqRDtJQUFLLFNBQVMsRUFBQztFQUFZLGdCQUN6QjtJQUFHLFNBQVMsRUFBQztFQUFhLEVBQUssS0FBQyxFQUFDc0osSUFBSSxDQUFDK0IsU0FBUyxFQUFDLEdBQUMsRUFBQy9CLElBQUksQ0FBQ2dDLFFBQVEsQ0FDM0QsQ0FDRjtBQUVWLENBQUM7QUFFRCxpRUFBZXZHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFFMUIsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQU0sQ0FBSXZGLEtBQUssRUFBSztFQUV4QixvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUN4QjtJQUFLLFNBQVMsRUFBQztFQUErQixnQkFDNUM7SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBRyxTQUFTLEVBQUM7RUFBaUIsRUFBSyw0QkFDckMsQ0FBTSxDQUNGLGVBQ04sd0VBQ0dBLEtBQUssQ0FBQ0ksSUFBSSxDQUFDdUwsU0FBUyxpQkFDbkI7SUFBSyxTQUFTLEVBQUMsMkJBQTJCO0lBQUMsUUFBUTtFQUFBLGdCQUNqRDtJQUFHLFNBQVMsRUFBQztFQUFzQixFQUFLLEtBQUMsRUFBQzNMLEtBQUssQ0FBQ0ksSUFBSSxDQUFDYyxJQUFJLENBQ3JELEVBRVBsQixLQUFLLENBQUNJLElBQUksQ0FBQ3VMLFNBQVMsaUJBQ25CO0lBQUssU0FBUyxFQUFDLDJCQUEyQjtJQUFDLFFBQVE7RUFBQSxnQkFDakQ7SUFBRyxTQUFTLEVBQUM7RUFBaUIsRUFBSyxLQUFDLEVBQUMzTCxLQUFLLENBQUNJLElBQUksQ0FBQ2MsSUFBSSxDQUNoRCxDQUVKLGVBQ1Isc0VBQU0sQ0FDQTtBQUVWLENBQUM7QUFFRCxpRUFBZXFFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQXBwLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQ29udGFpbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRGV0ZWN0b3JDb250cm9sRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRGV0ZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9FcXVpcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkQ29sbGVjdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWREZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWRIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWRMb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9JbnRlcnZlbnRpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9JbnRlcnZlbnRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9JbnRlcnZlbnRpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvTGVha2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvT3RoZXJUeXBlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9SZW1hcmtzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9Vc2VyLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9XYXN0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9qc3gvQXBwXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuaWYgKGNvbnRhaW5lcikge1xuICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4gIHJvb3QucmVuZGVyKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTJcIj5cbiAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICA8QXBwIC8+XG4gICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgPC9kaXY+XG4pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW50ZXJ2ZW50aW9uRm9ybSBmcm9tIFwiLi9JbnRlcnZlbnRpb25Gb3JtXCI7XG5pbXBvcnQgSW50ZXJ2ZW50aW9uTGlzdCBmcm9tIFwiLi9JbnRlcnZlbnRpb25MaXN0XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nICYmXG4gICAgICAgIDxJbnRlcnZlbnRpb25MaXN0IC8+XG4gICAgfVxuICAgIHsgXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09ICcvJyAmJlxuICAgICAgPD5cbiAgICAgICAgPGgyPkZpY2hlIGQnaW50ZXJ2ZW50aW9uPC9oMj5cbiAgICAgICAgPEludGVydmVudGlvbkZvcm0gLz5cbiAgICAgIDwvPlxuICAgIH1cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYW4gYXhpb3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBoZWFkZXJzXG5jb25zdCBheCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gIH0sXG59KTtcblxuLy8gQ2F0Y2ggdW5hdXRob3JpemVkIHJlcXVlc3QgYW5kIHJlZGlyZWN0IGlmIGVycm9yXG5heC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4gcmVzcG9uc2UsIChlcnJvcikgPT4ge1xuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IENvbnRhaW5lcnMgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IFtjb250YWluZXJzLCBzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9jb250YWluZXJzQnlGbHVpZC8nICsgcHJvcHMuZGF0YS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldENvbnRhaW5lcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTFcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGNvbnRhaW5lcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICAgIGlkPVwiY29udGFpbmVyTGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5lcnMubWFwKChjb250YWluZXIsIGkpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17Y29udGFpbmVyLmlkfT5cbiAgICAgICAgICAgICAge2NvbnRhaW5lci5zZXJpYWxOdW1iZXJ9ey8qIC0tIHtjb250YWluZXIuZmx1aWRRdWFudGl0eS50b0ZpeGVkKDIpfS97Y29udGFpbmVyLmNhcGFjaXR5LnRvRml4ZWQoMil9ICovfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWluZXJMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm90dGxlLWRyb3BsZXRcIj48L2k+IENvbnRlbmFudFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGV0ZWN0b3JDb250cm9sRGF0ZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGNvbnRyb2xEYXRlID0gbmV3IERhdGUocHJvcHMuZGF0YS5jb250cm9sRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItZnJcIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCJcbiAgICAgICAgdmFsdWU9e2NvbnRyb2xEYXRlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmQtY2hlY2tcIj48L2k+IERhdGUgZHUgZGVybmllciBjb250csO0bGUgKHtwcm9wcy5kYXRhLm5hbWV9KVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvckNvbnRyb2xEYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IERldGVjdG9ycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtkZXRlY3RvcnMsIHNldERldGVjdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2RldGVjdG9yc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RGV0ZWN0b3JzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBrZXk9e3Byb3BzLmRhdGF9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGRldGVjdG9yc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBkZXRlY3RvcnMubWFwKChkZXRlY3RvciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17ZGV0ZWN0b3IuaWR9PlxuICAgICAgICAgICAge2RldGVjdG9yLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbXBhc3NcIj48L2k+IETDqXRlY3RldXIgZGUgZnVpdGVzXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdG9ycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBFcXVpcG1lbnQgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZXF1aXBtZW50LCBzZXRFcXVpcG1lbnRdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9lcXVpcG1lbnRcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldEVxdWlwbWVudChyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlcXVpcG1lbnRbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJlcXVpcG1lbnRMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGVxdWlwbWVudC5tYXAoKGdlYXIsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2dlYXIuaWR9PlxuICAgICAgICAgICAge2dlYXIubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnRMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdlYXJzXCI+PC9pPiBFcXVpcGVtZW50IGNvbmNlcm7DqVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEVxdWlwbWVudERldGFpbHMgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTEgbWItMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWZsZXggZmxleC1tZC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImVxdWlwbWVudE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TmFtZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPiBJZGVudGlmaWNhdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLmZsdWlkLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkTmFtZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHJvcGxldFwiPjwvaT4gRMOpbm9taW5hdGlvbiBkdSBmbHVpZGVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEud2VpZ2h0LnRvRml4ZWQoMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdlaWdodC1oYW5naW5nXCI+PC9pPiBDaGFyZ2UgdG90YWxlIChrZylcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZENPMlwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5jbzJFcVRvbm5hZ2UudG9GaXhlZCgyKX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkQ08yXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZFwiPjwvaT4gVG9ubmFnZSDDqXF1aXZhbGVudCBDMDxzdWI+Mjwvc3ViPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2ggbXQtMVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgaWQ9XCJsZWFrRGV0ZWN0aW9uU3lzdGVtXCJcbiAgICAgICAgICBjaGVja2VkPXtwcm9wcy5kYXRhLmxlYWtEZXRlY3Rpb25TeXN0ZW19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGVha0RldGVjdGlvblN5c3RlbVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRcIj48L2k+IFByw6lzZW5jZSBkJ3VuIHN5c3TDqG1lIHBlcm1hbmVudCBkZSBkw6l0ZWN0aW9uIGRlIGZ1aXRlc1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50RGV0YWlscztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsdWlkQ29sbGVjdGluZyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtELCBzZXREXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbQlNGRiwgc2V0QlNGRl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW0UsIHNldEVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1ERSwgc2V0U3VtREVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25GbHVpZERDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBkID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXREKGQpO1xuICAgIHNldFN1bURFKGQrRSlcbiAgICBwcm9wcy5vbkRDaGFuZ2UoZCk7XG4gIH1cblxuICBjb25zdCBvbkJzZmZDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBic2ZmID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0QlNGRihic2ZmKTtcbiAgICBwcm9wcy5vbkJTRkZDaGFuZ2UoYnNmZik7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRUNoYW5nZSA9IChldikgPT4ge1xuICAgIGxldCBlID0gTnVtYmVyKGV2LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0RShlKTtcbiAgICBzZXRTdW1ERShEK2UpO1xuICAgIHByb3BzLm9uRUNoYW5nZShlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJ0b3RhbFJldHJpZXZlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgdmFsdWU9e3N1bURFfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi11cFwiPjwvaT4gUXVhbnRpdMOpIHRvdGFsZSByw6ljdXDDqXLDqWUgPHN1cD4oRCtFKTwvc3VwPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWREQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgIDxzdXA+KEQpPC9zdXA+IERvbnQgZmx1aWRlIGRlc3RpbsOpIGF1IHRyYWl0ZW1lbnRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJic2ZmTnVtYmVyXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25Cc2ZmQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJzZmZOdW1iZXJcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgTnVtw6lybyBkdSBCU0ZGIChzaSBjb25udSlcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICBpZD1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRFQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICA8c3VwPihFKTwvc3VwPiBEb250IGZsdWlkZSBjb25zZXJ2w6kgcG91ciByw6l1dGlsaXNhdGlvblxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx1aWRDb2xsZWN0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZERlc3RpbmF0aW9uID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtLTJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgPlxuICAgICAgICBJbnN0YWxsYXRpb24gcHLDqXZ1ZSBkZSBkZXN0aW5hdGlvbiBkdSBmbHVpZGUgcsOpY3Vww6lyw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBpZD1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOb20sIFNJUkVULCBhZHJlc3NlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkRGVzdGluYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgJ3JlYWN0LXRvb2x0aXAvZGlzdC9yZWFjdC10b29sdGlwLmNzcyc7XG5cbmltcG9ydCBGbHVpZExvYWRpbmcgZnJvbSBcIi4vRmx1aWRMb2FkaW5nXCI7XG5pbXBvcnQgRmx1aWRDb2xsZWN0aW5nIGZyb20gXCIuL0ZsdWlkQ29sbGVjdGluZ1wiO1xuXG5jb25zdCBGbHVpZEhhbmRsaW5nID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHtcbiAgICAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ1xuICB9KTtcblxuICBjb25zdCBbZmx1aWRMb2FkaW5nLCBzZXRGbHVpZExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmx1aWRDb2xsZWN0aW5nLCBzZXRGbHVpZENvbGxlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRmx1aWRBQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQSA9IGU7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQTogQVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEIgPSBlO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEI6IEJcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZENDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBDID0gZTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBDOiBDXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgRCA9IGU7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgRDogRFxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEU6IEVcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25Cc2ZmQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBCU0ZGOiBlLnRhcmdldC52YWx1ZVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkxvYWRpbmdDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRMb2FkaW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEE6IDAsXG4gICAgICAgIEI6IDAsXG4gICAgICAgIEM6IDAsXG4gICAgICB9XG4gICAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uQ29sbGVjdGluZ0NsaWNrID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZENvbGxlY3RpbmcoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgaWYgKCFlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBsZXQgZnEgPSB7XG4gICAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgICAgRDogMCxcbiAgICAgICAgQlNGRjogJycsXG4gICAgICAgIEU6IDAsXG4gICAgICB9XG4gICAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbXgtYXV0byBwLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IE1hbmlwdWxhdGlvbiBkdSBmbHVpZGUgZnJpZ29yaWfDqG5lXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4tY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCIgaWQ9XCJsb2FkaW5nRmx1aWRcIiBvbkNsaWNrPXsoZSkgPT4ge29uTG9hZGluZ0NsaWNrKGUpfX0gLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBib3JkZXItMCBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJsb2FkaW5nRmx1aWRcIlxuICAgICAgICAgICAgaWQ9XCJ0dC1sb2FkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi1kb3duXCI+PC9pPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC1sb2FkXCIgY29udGVudD1cIkNoYXJnZW1lbnRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIGlkPVwiY29sbGVjdGluZ0ZsdWlkXCIgb25DbGljaz17KGUpID0+IHtvbkNvbGxlY3RpbmdDbGljayhlKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwiY29sbGVjdGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtY29sbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tdXBcIj48L2k+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8VG9vbHRpcCBhbmNob3JJZD1cInR0LWNvbGxlY3RcIiBjb250ZW50PVwiUsOpY3Vww6lyYXRpb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWZsZXggZmxleC1tZC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgeyBmbHVpZExvYWRpbmcgJiZcbiAgICAgICAgICA8Rmx1aWRMb2FkaW5nXG4gICAgICAgICAgICBvbkFDaGFuZ2U9e29uRmx1aWRBQ2hhbmdlfVxuICAgICAgICAgICAgb25CQ2hhbmdlPXtvbkZsdWlkQkNoYW5nZX1cbiAgICAgICAgICAgIG9uQ0NoYW5nZT17b25GbHVpZENDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7IGZsdWlkQ29sbGVjdGluZyAmJlxuICAgICAgICAgIDxGbHVpZENvbGxlY3RpbmdcbiAgICAgICAgICAgIG9uRENoYW5nZT17b25GbHVpZERDaGFuZ2V9XG4gICAgICAgICAgICBvbkJTRkZDaGFuZ2U9e29uQnNmZkNoYW5nZX1cbiAgICAgICAgICAgIG9uRUNoYW5nZT17b25GbHVpZEVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx1aWRIYW5kbGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsdWlkTG9hZGluZyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtBLCBzZXRBXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbQiwgc2V0Ql0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW0MsIHNldENdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1BQkMsIHNldFN1bUFCQ10gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvbkZsdWlkQUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGEgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEEoYSk7XG4gICAgc2V0U3VtQUJDKGErQitDKTtcbiAgICBwcm9wcy5vbkFDaGFuZ2UoYSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGIgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEIoYik7XG4gICAgc2V0U3VtQUJDKEErYitDKTtcbiAgICBwcm9wcy5vbkJDaGFuZ2UoYik7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQ0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGMgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEMoYyk7XG4gICAgc2V0U3VtQUJDKEErQitjKTtcbiAgICBwcm9wcy5vbkNDaGFuZ2UoYyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgIGlkPVwidG90YWxMb2FkZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWxMb2FkZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLWRvd25cIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICBpZD1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgIDxzdXA+KEEpPC9zdXA+IERvbnQgZmx1aWRlIHZpZXJnZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgIGlkPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEJDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgaWQ9XCJyZWdlbmVyYXRlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQ0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdlbmVyYXRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgPHN1cD4oQyk8L3N1cD4gRG9udCBmbHVpZGUgcsOpZ8OpbsOpcsOpXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbHVpZExvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgRGV0ZWN0b3JzIGZyb20gXCIuL0RldGVjdG9yc1wiO1xuaW1wb3J0IERldGVjdG9yQ29udHJvbERhdGUgZnJvbSBcIi4vRGV0ZWN0b3JDb250cm9sRGF0ZVwiXG5pbXBvcnQgRXF1aXBtZW50IGZyb20gXCIuL0VxdWlwbWVudFwiO1xuaW1wb3J0IEludGVydmVudGlvblR5cGVzIGZyb20gXCIuL0ludGVydmVudGlvblR5cGVzXCI7XG5pbXBvcnQgT3RoZXJUeXBlIGZyb20gXCIuL090aGVyVHlwZVwiO1xuaW1wb3J0IExlYWthZ2UgZnJvbSBcIi4vTGVha2FnZVwiO1xuaW1wb3J0IENvbnRhaW5lcnMgZnJvbSBcIi4vQ29udGFpbmVyc1wiO1xuaW1wb3J0IEVxdWlwbWVudERldGFpbHMgZnJvbSBcIi4vRXF1aXBtZW50RGV0YWlsc1wiO1xuaW1wb3J0IEZsdWlkSGFuZGxpbmcgZnJvbSBcIi4vRmx1aWRIYW5kbGluZ1wiO1xuaW1wb3J0IFdhc3RlcyBmcm9tIFwiLi9XYXN0ZXNcIjtcbmltcG9ydCBGbHVpZERlc3RpbmF0aW9uIGZyb20gXCIuL0ZsdWlkRGVzdGluYXRpb25cIjtcbmltcG9ydCBSZW1hcmtzIGZyb20gXCIuL1JlbWFya3NcIjtcblxuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEludGVydmVudGlvbkZvcm0gPSAoKSA9PiB7XG5cbiAgLy8gQ3VycmVudCBkYXRlXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkpO1xuICBjb25zdCBub3cgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUNBXCIpO1xuICBcbiAgLy8gU3RhdGVzXG5cbiAgY29uc3QgW2ludGVydmVudGlvbkRhdGUsIHNldEludGVydmVudGlvbkRhdGVdID0gdXNlU3RhdGUobm93KTtcbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW290aGVyVHlwZSwgc2V0T3RoZXJUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIEludGVydmVudGlvbiB0eXBlIGlzIDUgb3IgNlxuICBjb25zdCBbbGVha0NvbnRyb2wsIHNldExlYWtDb250cm9sXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBJbnRlcnZlbnRpb24gdHlwZSBpcyBub3QgNSBhbmQgbm90IDZcbiAgLy8gTGVhayBjb250cm9sIGlzIG1hbmRhdG9yeSBhZnRlciBhbiBpbnRlcnZlbnRpb25cbiAgY29uc3QgW21hbmRhdG9yeUxlYWtDb250cm9sLCBzZXRNYW5kYXRvcnlMZWFrQ29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gRGV0ZWN0b3IgdXNlZCBmb3IgbGVha2FnZSBjb250cm9sXG4gIGNvbnN0IFtkZXRlY3Rvciwgc2V0RGV0ZWN0b3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsZWFrTG9jYXRpb25zLCBzZXRMZWFrTG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xlYWtGaXhlZCwgc2V0TGVha0ZpeGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBGbHVpZCBxdWFudGl0aWVzXG4gIGNvbnN0IFtmbHVpZFF1YW50aXRpZXMsIHNldEZsdWlkUXVhbnRpdGllc10gPSB1c2VTdGF0ZSh7XG4gICAgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJydcbiAgfSk7XG5cbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmx1aWREZXN0aW5hdGlvbiwgc2V0Rmx1aWREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlbWFya3MsIHNldFJlbWFya3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZGZQYXRoLCBzZXRQZGZQYXRoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGVha3NQb3N0ZWQsIHNldExlYWtzUG9zdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBJbiBjYXNlIG9mIGlucHV0IGVycm9yIOKGkiB1c2VkIHRvIGRpc2FibGUgc3VibWl0IGJ1dHRvblxuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxlYWtzUG9zdGVkKSB7XG4gICAgICB3aW5kb3cub3BlbihwZGZQYXRoLCAnX2JsYW5rJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGZvciBmb3JtIGVycm9ycyBoZXJlXG4gICAgICBpZiAoIWVxdWlwbWVudClcbiAgICAgICAgc2V0Rm9ybUVycm9yKHRydWUpO1xuICAgICAgZWxzZSBpZiAoIXR5cGUpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2UgaWYgKHR5cGUuaWQgIT0gNSAmJiB0eXBlLmlkICE9IDYgJiYgY2hlY2tGbHVpZEhhbmRsaW5nKCkpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2UgaWYgKCFlcXVpcG1lbnQubGVha0RldGVjdGlvblN5c3RlbSAmJiAhZGV0ZWN0b3IpXG4gICAgICAgIHNldEZvcm1FcnJvcih0cnVlKTtcbiAgICAgIGVsc2UgaWYgKGNoZWNrTGVha3MoKSlcbiAgICAgICAgc2V0Rm9ybUVycm9yKHRydWUpO1xuICAgICAgZWxzZVxuICAgICAgICBzZXRGb3JtRXJyb3IoZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cblxuICBjb25zdCBjaGVja0ZsdWlkSGFuZGxpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHEgPSBmbHVpZFF1YW50aXRpZXM7XG4gICAgbGV0IGQgPSBmbHVpZERlc3RpbmF0aW9uO1xuICAgIGxldCB3ID0gZXF1aXBtZW50LndlaWdodDtcbiAgICBsZXQgdEFiYyA9IHEuQSArIHEuQiArIHEuQztcbiAgICBsZXQgdERlID0gcS5EICsgcS5FO1xuXG4gICAgcmV0dXJuIChxLkUgPiAwICYmICFkKSB8fCAocS5EID4gMCAmJiBxLkUgPiAwKSB8fCAoKHRBYmMgPD0gMCAmJiB0RGUgPD0gMCkgfHwgKHRBYmMgPiB3IHx8IHREZSA+IHcpKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTGVha3MgPSAoKSA9PiB7XG4gICAgbGV0IGwgPSBsZWFrTG9jYXRpb25zO1xuICAgIGlmIChsLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghbFtpXSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBcbiAgY29uc3Qgb25JbnRlcnZlbnRpb25EYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnRlcnZlbnRpb25EYXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRXF1aXBtZW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICBoYW5kbGVSZXNldCgpO1xuICAgIHNldEVxdWlwbWVudChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgaWYgKCFlKSB7XG4gICAgICBzZXRMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgICBzZXRNYW5kYXRvcnlMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICBzZXRMZWFrQ29udHJvbCgoZS5pZCA9PT0gNSB8fCBlLmlkID09PSA2KSk7XG4gICAgIHNldE1hbmRhdG9yeUxlYWtDb250cm9sKChlLmlkICE9PSA1ICYmIGUuaWQgIT09IDYpKVxuICAgIH1cblxuICAgIHNldFR5cGUoZSk7XG4gICAgc2V0RGV0ZWN0b3IobnVsbCk7XG4gIH1cblxuICBjb25zdCBvbk90aGVyVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0T3RoZXJUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRGV0ZWN0b3JDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldERldGVjdG9yKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrTG9jYXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtMb2NhdGlvbnMoZSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtGaXhlZENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TGVha0ZpeGVkKGUpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZFF1YW50aXRpZXNDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzdW1BQkMgPSBlLkEgKyBlLkIgKyBlLkM7XG4gICAgbGV0IHN1bURFID0gZS5EICsgZS5CO1xuICAgIHNldEZvcm1FcnJvcihpc05hTihzdW1BQkMpIHx8IGlzTmFOKHN1bURFKSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGUpO1xuICB9XG5cbiAgY29uc3Qgb25Db250YWluZXJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRhaW5lcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREZXN0aW5hdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvblJlbWFya3NDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFJlbWFya3MoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcnJvciA9IChlcnJvclN0YXRlKSA9PiB7XG4gICAgc2V0Rm9ybUVycm9yKGVycm9yU3RhdGUpO1xuICB9XG5cbiAgY29uc3QgcG9zdExlYWtzID0gYXN5bmMgKGludGVydmVudGlvbklEKSA9PiB7XG4gICAgLy8gUE9TVCBsZWFrcyBvbmUgYnkgb25lXG4gICAgbGV0IGNvdW50ID0gbGVha0xvY2F0aW9ucy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7ICBpIDwgY291bnQ7ICBpKyspIHtcbiAgICAgIGxldCBsZWFrID0ge1xuICAgICAgICBcIm51bVwiOiBpKzEsXG4gICAgICAgIFwiY291bnRcIjogY291bnQsXG4gICAgICAgIFwibG9jYXRpb25cIjogbGVha0xvY2F0aW9uc1tpXSxcbiAgICAgICAgXCJmaXhlZFwiOiBsZWFrRml4ZWRbaV0sXG4gICAgICAgIFwiaW50ZXJ2ZW50aW9uXCI6IFwiL2FwaS9pbnRlcnZlbnRpb25zL1wiICsgaW50ZXJ2ZW50aW9uSUQsXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGF4LnBvc3QoJy9sZWFrYWdlcycsXG4gICAgICAgIGxlYWtcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIGxlYWthZ2UgUE9TVCcsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0TGVha3NQb3N0ZWQodHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW50ZXJ2ZW50aW9uID0ge1xuICAgICAgXCJkYXRlXCI6IGludGVydmVudGlvbkRhdGUsXG4gICAgICBcInZpcmdpbkZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkEsXG4gICAgICBcInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQixcbiAgICAgIFwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5DLFxuICAgICAgXCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuRCxcbiAgICAgIFwiYnNmZk51bWJlclwiOiBmbHVpZFF1YW50aXRpZXMuQlNGRixcbiAgICAgIFwicmV1c2FibGVGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5FLFxuICAgICAgXCJjb2xsZWN0ZWRGbHVpZERlc3RpbmF0aW9uXCI6IGZsdWlkRGVzdGluYXRpb24sXG4gICAgICBcInJlbWFya3NcIjogcmVtYXJrcyxcbiAgICAgIFwiaW50ZXJ2ZW50aW9uVHlwZVwiOiBcIi9hcGkvaW50ZXJ2ZW50aW9uX3R5cGVzL1wiICsgdHlwZS5pZCxcbiAgICAgIFwib3RoZXJJbnRlcnZlbnRpb25UeXBlXCI6IG90aGVyVHlwZSxcbiAgICAgIFwiZXF1aXBtZW50XCI6IFwiL2FwaS9lcXVpcG1lbnQvXCIgKyBlcXVpcG1lbnQuaWQsXG4gICAgICBcImNvbnRhaW5lclwiOiBjb250YWluZXI/XCIvYXBpL2NvbnRhaW5lcnMvXCIgKyBjb250YWluZXIuaWQ6bnVsbCxcbiAgICAgIFwiYWNjZXNzb3J5XCI6IGRldGVjdG9yP1wiL2FwaS9hY2Nlc3Nvcmllcy9cIiArIGRldGVjdG9yLmlkOm51bGwsXG4gICAgICBcImxlYWtzXCI6IGxlYWtMb2NhdGlvbnMubGVuZ3RoID4gMCxcbiAgICAgIFwidXNlclwiOiBcIi9hcGkvdXNlcnMvXCIgKyB3aW5kb3cudXNlcixcbiAgICAgIFwicGRmUGF0aFwiOiBcIlwiLFxuICAgIH07XG5cbiAgICAvLyBQT1NUIGludGVydmVudGlvblxuICAgIGF4LnBvc3QoJy9pbnRlcnZlbnRpb25zJyxcbiAgICAgIGludGVydmVudGlvblxuICAgIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFBPU1QgbGVha3NcbiAgICAgIHBvc3RMZWFrcyhyZXNwb25zZS5kYXRhLmlkKTtcbiAgICAgIHNldFBkZlBhdGgocmVzcG9uc2UuZGF0YS5wZGZQYXRoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEVxdWlwbWVudChudWxsKTtcbiAgICBzZXRUeXBlKG51bGwpO1xuICAgIHNldE90aGVyVHlwZShcIlwiKTtcbiAgICBzZXRMZWFrQ29udHJvbChmYWxzZSk7XG4gICAgc2V0TWFuZGF0b3J5TGVha0NvbnRyb2woZmFsc2UpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICAgIHNldExlYWtMb2NhdGlvbnMoW10pO1xuICAgIHNldExlYWtGaXhlZChbXSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKHsgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJyd9KTtcbiAgICBzZXRDb250YWluZXIobnVsbCk7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihcIlwiKTtcbiAgICBzZXRSZW1hcmtzKFwiXCIpO1xuICAgIHNldFBkZlBhdGgoXCJcIik7XG4gICAgc2V0TGVha3NQb3N0ZWQoZmFsc2UpO1xuICAgIHNldEZvcm1FcnJvcihmYWxzZSk7XG4gIH1cblxuICAvLyBDb2xsZWN0ZWQgZmx1aWQgd2lsbCBiZSBpbnN0YWxsZWQgaW4gYW5vdGhlciBlcXVpcG1lbnRcbiAgY29uc3QgbXVzdEluc3RhbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZsdWlkUXVhbnRpdGllcy5FID4gMDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFVzZXIgZGF0YT17d2luZG93LnVzZXJ9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3d9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlcnZlbnRpb25EYXRlXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+IERhdGUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVxdWlwbWVudCBvbkNoYW5nZT17b25FcXVpcG1lbnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxFcXVpcG1lbnREZXRhaWxzIGRhdGE9e2VxdWlwbWVudH0gLz5cbiAgICAgICAgICAgICAgICA8SW50ZXJ2ZW50aW9uVHlwZXMgb25DaGFuZ2U9e29uVHlwZUNoYW5nZX0gZGF0YT17ZXF1aXBtZW50LmlkfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgdHlwZT8uaWQgPT09IDggICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJiB0eXBlICYmICFsZWFrQ29udHJvbCAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGbHVpZEhhbmRsaW5nIG9uQ2hhbmdlPXtvbkZsdWlkUXVhbnRpdGllc0NoYW5nZX0gb25FcnJvcj17b25FcnJvcn0gLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAobXVzdEluc3RhbGwoKSB8fCBmbHVpZFF1YW50aXRpZXMuRCA+IDApICYmXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJzXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZXF1aXBtZW50LmZsdWlkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbnRhaW5lckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IGZsdWlkUXVhbnRpdGllcy5EID4gMCAmJlxuICAgICAgICAgICAgICAgICAgPFdhc3RlcyBkYXRhPXtlcXVpcG1lbnQuZmx1aWQuZmx1aWRUeXBlfS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeyBtdXN0SW5zdGFsbCgpICYmXG4gICAgICAgICAgICAgICAgPEZsdWlkRGVzdGluYXRpb24gb25DaGFuZ2U9e29uRmx1aWREZXN0aW5hdGlvbkNoYW5nZX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeyB0eXBlICYmICFlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiZcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RGV0ZWN0b3JzIGRhdGE9e3R5cGUuaWR9IG9uQ2hhbmdlPXtvbkRldGVjdG9yQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIHsgIGRldGVjdG9yICYmXG4gICAgICAgICAgICAgICAgICA8RGV0ZWN0b3JDb250cm9sRGF0ZSBkYXRhPXtkZXRlY3Rvcn0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgIHsgKGxlYWtDb250cm9sIHx8IG1hbmRhdG9yeUxlYWtDb250cm9sKSAmJlxuICAgICAgICAgICAgICAgIDxMZWFrYWdlXG4gICAgICAgICAgICAgICAgICBkYXRhPXt0eXBlPy5pZH1cbiAgICAgICAgICAgICAgICAgIG9uTG9jYXRpb25DaGFuZ2U9e29uTGVha0xvY2F0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25GaXhlZENoYW5nZT17b25MZWFrRml4ZWRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8UmVtYXJrcyBvbkNoYW5nZT17b25SZW1hcmtzQ2hhbmdlfSAvPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbS0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCIgdHlwZT1cInJlc2V0XCIgb25DbGljaz17KCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX19PkFubnVsZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25Gb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IEludGVydmVudGlvbnMgZnJvbSBcIi4vSW50ZXJ2ZW50aW9uc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25MaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxVc2VyIGRhdGE9e3dpbmRvdy51c2VyfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW50ZXJ2ZW50aW9ucyBkYXRhPXt3aW5kb3cudXNlcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEludGVydmVudGlvblR5cGVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KCcvaW50ZXJ2ZW50aW9uX3R5cGVzJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFR5cGVzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBrZXk9e3Byb3BzLmRhdGF9IC8vIHJlc2V0IGlmIGVxdWlwbWVudCBjaGFuZ2VkXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKHR5cGVzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwidHlwZUxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgdHlwZXMubWFwKCh0eXBlLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXt0eXBlLmlkfT5cbiAgICAgICAgICAgIHt0eXBlLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZUxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2NyZXdkcml2ZXItd3JlbmNoXCI+PC9pPiBOYXR1cmUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uVHlwZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25zID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2ludGVydmVudGlvbnMsIHNldEludGVydmVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9pbnRlcnZlbnRpb25zQnlVc2VyL1wiICsgcHJvcHMuZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRJbnRlcnZlbnRpb25zKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgc2V0SW50ZXJ2ZW50aW9ucyhbXSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKTtcblxuICBpZiAobG9hZGluZylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSB0ZXh0LXNlY29uZGFyeSBtLTJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+Q2hhcmdlbWVudC4uLjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIGlmIChpbnRlcnZlbnRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUteG1hcmtcIj48L2k+PHNwYW4gY2xhc3NOYW1lPVwic21hbGxcIj4gUGFzIGQnaW50ZXJ2ZW50aW9uIHRyb3V2w6llPC9zcGFuPiBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgIHtcbiAgICAgIGludGVydmVudGlvbnMubWFwKChpbnRlcnZlbnRpb24sIGkpID0+IChcbiAgICAgIFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIHNtYWxsXCIga2V5PXtpfT5cbiAgICAgICAgICB7LyogVE9ETzogRGlzcGxheSBpbnRlcnZlbnRpb24gdHlwZSBhbmQgZXF1aXBtZW50IG5hbWUgKi99XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNjcmV3ZHJpdmVyXCI+PC9pPiA8c3Bhbj57bmV3IERhdGUoaW50ZXJ2ZW50aW9uLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItQ0EnKX08L3NwYW4+IHtpbnRlcnZlbnRpb24uaW50ZXJ2ZW50aW9uVHlwZS5uYW1lfSB7aW50ZXJ2ZW50aW9uLmVxdWlwbWVudC5uYW1lfTxhIGhyZWY9e2ludGVydmVudGlvbi5wZGZQYXRofSB0YXJnZXQ9XCJfYmxhbmtcIj5QREY8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKVxuICAgIH1cbiAgICA8L3VsPlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9ucztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuY29uc3QgTGVhayA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyIGJvcmRlci0wIGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbWUtMlwiPntwcm9wcy5pZCsxfTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBrZXk9e3Byb3BzLmRhdGF9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGJvcmRlciBib3JkZXItMCBtbC0yIG1lLTJcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYWxpc2F0aW9uIGRlIGxhIGZ1aXRlXCJcbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IExlYWthZ2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbbGVha0NvbXBvbmVudHMsIHNldExlYWtDb21wb25lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkTGVhayA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBsZWFrQ29tcG9uZW50cy5sZW5ndGg7XG5cbiAgICBzZXRMZWFrQ29tcG9uZW50cyhbXG4gICAgICAuLi5sZWFrQ29tcG9uZW50cyxcbiAgICAgIDxMZWFrIGRhdGE9e3Byb3BzLmRhdGF9IGlkPXtpbmRleH0gb25DaGFuZ2U9e29uTGVha0NoYW5nZX0gLz5cbiAgICBdKTtcblxuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9ucywgXCJcIl07XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF07XG4gICAgZml4ZWRDb3B5LnB1c2goZmFsc2UpO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGVhayA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQgLSAyMDtcbiAgICBsZXQgbGVha0NvbXBvbmVudHNDb3B5ID0gWy4uLmxlYWtDb21wb25lbnRzXTtcbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnNdO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdXG4gICAgbGVha0NvbXBvbmVudHNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYXRpb25zQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGZpeGVkQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldExlYWtDb21wb25lbnRzKGxlYWtDb21wb25lbnRzQ29weSk7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9uc107XG4gICAgbG9jYXRpb25zQ29weVtpbmRleF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0ZpeGVkID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZCAtIDEwO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdO1xuICAgIGZpeGVkQ29weVtpbmRleF0gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRcIj48L2k+IEZ1aXRlcyBjb25zdGF0w6llcyBsb3JzIGR1IGNvbnRyw7RsZSBkJ8OpdGFuY2jDqWl0w6lcbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodFwiXG4gICAgICAgICAgb25DbGljaz17YWRkTGVha31cbiAgICAgICAgICBkaXNhYmxlZD17bGVha0NvbXBvbmVudHMubGVuZ3RoID09PSAzfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVha0NvbXBvbmVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwibS0yIGJvcmRlciBib3JkZXItMSByb3VuZGVkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBsZWFrQ29tcG9uZW50cy5tYXAoKGxlYWssIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtLTIgZC1mbGV4IGQtZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1ldmVuXCI+XG4gICAgICAgICAgICAgIHtsZWFrfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiXG4gICAgICAgICAgICAgICAgaWQ9ezEwK2l9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxlYWtGaXhlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGlkPVwidHQtd3JlbmNoXCIgaHRtbEZvcj17MTAraX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBib3JkZXIgYm9yZGVyLTAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13cmVuY2hcIj48L2k+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtd3JlbmNoXCIgY29udGVudD1cIkZ1aXRlIHLDqXBhcsOpZVwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD17MjAraX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xvc2UgbWUtMyByb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlTGVha31cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpKzEgPCBsZWFrQ29tcG9uZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVha2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gSW5wdXQgdGV4dCBmb3IgXCJvdGhlclwiIGludGVydmVudGlvbiB0eXBlXG5jb25zdCBPdGhlclR5cGUgPSAocHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVmV1aWxsZXogcHLDqWNpc2VyIGxlIHR5cGUgZCdpbnRlcnZlbnRpb24uLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlclR5cGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlbWFya3MgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwicmVtYXJrc1wiXG4gICAgICA+XG4gICAgICAgIE9ic2VydmF0aW9uc1xuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwicmVtYXJrc1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWFya3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL3VzZXJzLycgKyBwcm9wcy5kYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIgbWUtMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT4ge3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFdhc3RlcyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyXCI+PC9pPiBEw6lub21pbmF0aW9uIEFEUi9SSURcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5kYXRhLmZsYW1tYWJsZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIHJvdW5kZWQtMFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyLWZpcmVcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3Byb3BzLmRhdGEuZmxhbW1hYmxlIHx8XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgcm91bmRlZC0wXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXJcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhc3RlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIkludGVydmVudGlvbkZvcm0iLCJJbnRlcnZlbnRpb25MaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImF4aW9zIiwiYXgiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lcnMiLCJwcm9wcyIsImNvbnRhaW5lcnMiLCJzZXRDb250YWluZXJzIiwiZ2V0IiwiZGF0YSIsImlkIiwidGhlbiIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaSIsInNlcmlhbE51bWJlciIsIkRldGVjdG9yQ29udHJvbERhdGUiLCJjb250cm9sRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJuYW1lIiwiRGV0ZWN0b3JzIiwiZGV0ZWN0b3JzIiwic2V0RGV0ZWN0b3JzIiwiZGV0ZWN0b3IiLCJFcXVpcG1lbnQiLCJlcXVpcG1lbnQiLCJzZXRFcXVpcG1lbnQiLCJnZWFyIiwiRXF1aXBtZW50RGV0YWlscyIsImZsdWlkIiwid2VpZ2h0IiwidG9GaXhlZCIsImNvMkVxVG9ubmFnZSIsImxlYWtEZXRlY3Rpb25TeXN0ZW0iLCJGbHVpZENvbGxlY3RpbmciLCJEIiwic2V0RCIsIkJTRkYiLCJzZXRCU0ZGIiwiRSIsInNldEUiLCJzdW1ERSIsInNldFN1bURFIiwib25GbHVpZERDaGFuZ2UiLCJkIiwiTnVtYmVyIiwib25EQ2hhbmdlIiwib25Cc2ZmQ2hhbmdlIiwiYnNmZiIsIm9uQlNGRkNoYW5nZSIsIm9uRmx1aWRFQ2hhbmdlIiwiZXYiLCJvbkVDaGFuZ2UiLCJGbHVpZERlc3RpbmF0aW9uIiwiVG9vbHRpcCIsIkZsdWlkTG9hZGluZyIsIkZsdWlkSGFuZGxpbmciLCJmbHVpZFF1YW50aXRpZXMiLCJzZXRGbHVpZFF1YW50aXRpZXMiLCJmbHVpZExvYWRpbmciLCJzZXRGbHVpZExvYWRpbmciLCJmbHVpZENvbGxlY3RpbmciLCJzZXRGbHVpZENvbGxlY3RpbmciLCJvbkZsdWlkQUNoYW5nZSIsIkEiLCJmcSIsIm9uRmx1aWRCQ2hhbmdlIiwiQiIsIm9uRmx1aWRDQ2hhbmdlIiwiQyIsIm9uTG9hZGluZ0NsaWNrIiwiY2hlY2tlZCIsIm9uQ29sbGVjdGluZ0NsaWNrIiwic2V0QSIsInNldEIiLCJzZXRDIiwic3VtQUJDIiwic2V0U3VtQUJDIiwiYSIsIm9uQUNoYW5nZSIsImIiLCJvbkJDaGFuZ2UiLCJjIiwib25DQ2hhbmdlIiwiVXNlciIsIkludGVydmVudGlvblR5cGVzIiwiT3RoZXJUeXBlIiwiTGVha2FnZSIsIldhc3RlcyIsIlJlbWFya3MiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJub3ciLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwibGVha0NvbnRyb2wiLCJzZXRMZWFrQ29udHJvbCIsIm1hbmRhdG9yeUxlYWtDb250cm9sIiwic2V0TWFuZGF0b3J5TGVha0NvbnRyb2wiLCJzZXREZXRlY3RvciIsImxlYWtMb2NhdGlvbnMiLCJzZXRMZWFrTG9jYXRpb25zIiwibGVha0ZpeGVkIiwic2V0TGVha0ZpeGVkIiwic2V0Q29udGFpbmVyIiwiZmx1aWREZXN0aW5hdGlvbiIsInNldEZsdWlkRGVzdGluYXRpb24iLCJyZW1hcmtzIiwic2V0UmVtYXJrcyIsInBkZlBhdGgiLCJzZXRQZGZQYXRoIiwibGVha3NQb3N0ZWQiLCJzZXRMZWFrc1Bvc3RlZCIsImZvcm1FcnJvciIsInNldEZvcm1FcnJvciIsIm9wZW4iLCJyZWxvYWQiLCJjaGVja0ZsdWlkSGFuZGxpbmciLCJjaGVja0xlYWtzIiwicSIsInciLCJ0QWJjIiwidERlIiwibCIsImxlbmd0aCIsIm9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSIsIm9uRXF1aXBtZW50Q2hhbmdlIiwiaGFuZGxlUmVzZXQiLCJvblR5cGVDaGFuZ2UiLCJvbk90aGVyVHlwZUNoYW5nZSIsIm9uRGV0ZWN0b3JDaGFuZ2UiLCJvbkxlYWtMb2NhdGlvbkNoYW5nZSIsIm9uTGVha0ZpeGVkQ2hhbmdlIiwib25GbHVpZFF1YW50aXRpZXNDaGFuZ2UiLCJpc05hTiIsIm9uQ29udGFpbmVyQ2hhbmdlIiwib25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlIiwib25SZW1hcmtzQ2hhbmdlIiwib25FcnJvciIsImVycm9yU3RhdGUiLCJwb3N0TGVha3MiLCJpbnRlcnZlbnRpb25JRCIsImNvdW50IiwibGVhayIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpbnRlcnZlbnRpb24iLCJ1c2VyIiwibXVzdEluc3RhbGwiLCJmbHVpZFR5cGUiLCJJbnRlcnZlbnRpb25zIiwidHlwZXMiLCJzZXRUeXBlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW50ZXJ2ZW50aW9ucyIsInNldEludGVydmVudGlvbnMiLCJpbnRlcnZlbnRpb25UeXBlIiwiTGVhayIsImxlYWtDb21wb25lbnRzIiwic2V0TGVha0NvbXBvbmVudHMiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJmaXhlZCIsInNldEZpeGVkIiwiYWRkTGVhayIsImluZGV4Iiwib25MZWFrQ2hhbmdlIiwibG9jYXRpb25zQ29weSIsImZpeGVkQ29weSIsInB1c2giLCJvbkxvY2F0aW9uQ2hhbmdlIiwib25GaXhlZENoYW5nZSIsInJlbW92ZUxlYWsiLCJsZWFrQ29tcG9uZW50c0NvcHkiLCJzcGxpY2UiLCJvbkxlYWtGaXhlZCIsInNldFVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZsYW1tYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=