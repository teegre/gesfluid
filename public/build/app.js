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
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container mt-2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jsx_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

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
    "Accept": "application/json"
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
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
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



var Containers = function Containers(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    containers = _useState2[0],
    setContainers = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_19__["default"].get('/containersByFluid/' + props.data.id).then(function (response) {
      setContainers(response.data);
    });
  }, [props.data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("select", {
    onChange: function onChange(e) {
      props.onChange(containers[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "containerLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
    defaultValue: null
  }, "---"), containers.map(function (container, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
      value: i,
      key: container.id
    }, container.serialNumber, " -- Capacit\xE9: ", container.capacity.toFixed(2));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "containerLabel",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("i", {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DetectorControlDate = function DetectorControlDate(props) {
  var controlDate = new Date(props.data.controlDate).toLocaleDateString("fr-fr");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: "text",
    disabled: true,
    className: "border border-0 form-control form-control-sm",
    id: "detectorControlDate",
    value: controlDate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: "detectorControlDate",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "fas fa-clipboard-check"
  }), " Date de contr\xF4le"));
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
    onChange: function onChange(e) {
      props.onChange(detectors[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "detectorLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "---"), detectors.map(function (detector, i) {
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
    className: "border border-0 form-control form-control-sm",
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
    className: "border border-0 form-control form-control-sm",
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
    className: "border border-0 form-control form-control-sm",
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
    className: "border border-0 form-control form-control-sm",
    id: "fluidCO2",
    value: props.data.co2EqTonnage.toFixed(2)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "fluidCO2",
    className: "small fw-bold text-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", {
    className: "fas fa-cloud"
  }), " Tonnage \xE9quivalent C0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("sub", null, "2")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EquipmentDetails);

/***/ }),

/***/ "./react/jsx/Equipments.js":
/*!*********************************!*\
  !*** ./react/jsx/Equipments.js ***!
  \*********************************/
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



var Equipments = function Equipments(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    equipments = _useState2[0],
    setEquipments = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    _Axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("/equipment").then(function (response) {
      setEquipments(response.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    onChange: function onChange(e) {
      props.onChange(equipments[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "equipmentLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "---"), equipments.map(function (equipment, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
      value: i,
      key: equipment.id
    }, equipment.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "equipmentLabel",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-gears"
  }), " Equipement concern\xE9"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equipments);

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
      'E': 0
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
  var onFluidAChange = function onFluidAChange(e, props) {
    var A = Number(e.target.value);
    setFluidQuantities(function (fluidQuantities) {
      return _objectSpread(_objectSpread({}, fluidQuantities), {
        'A': A
      });
    });
    setSumABC(A + fluidQuantities['B'] + fluidQuantities['C']);
    props.onChange(fluidQuantities);
  };
  var onFluidBChange = function onFluidBChange(e, props) {
    var B = Number(e.target.value);
    setFluidQuantities(function (fluidQuantities) {
      return _objectSpread(_objectSpread({}, fluidQuantities), {
        'B': B
      });
    });
    setSumABC(fluidQuantities['A'] + B + fluidQuantities['C']);
    props.onChange(fluidQuantities);
  };
  var onFluidCChange = function onFluidCChange(e, props) {
    var C = Number(e.target.value);
    setFluidQuantities(function (fluidQuantities) {
      return _objectSpread(_objectSpread({}, fluidQuantities), {
        'C': C
      });
    });
    setSumABC(fluidQuantities['A'] + fluidQuantities['B'] + C);
    props.onChange(fluidQuantities);
  };
  var onFluidDChange = function onFluidDChange(e, props) {
    var D = Number(e.target.value);
    setFluidQuantities(function (fluidQuantities) {
      return _objectSpread(_objectSpread({}, fluidQuantities), {
        'D': D
      });
    });
    setSumDE(D + fluidQuantities['E']);
    props.onChange(fluidQuantities);
  };
  var onFluidEChange = function onFluidEChange(e, props) {
    var E = Number(e.target.value);
    setFluidQuantities(function (fluidQuantities) {
      return _objectSpread(_objectSpread({}, fluidQuantities), {
        'E': E
      });
    });
    setSumDE(fluidQuantities['D'] + E);
    props.onChange(fluidQuantities);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("h6", {
    className: "text-align-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-droplet"
  }), " Manipulation du fluide frigorig\xE8ne"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "d-md-flex flex-md-row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "border border-0 form-control form-control-sm",
    id: "totalLoadedFluidQuantity",
    disabled: true,
    value: sumABC
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "totalLoadedFluidQuantity",
    className: "fw-bold text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-down-long"
  }), " Quantit\xE9 totale charg\xE9e ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(A+B+C)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "virginFluidQuantity",
    defaultValue: "0",
    onChange: function onChange(e) {
      onFluidAChange(e, props);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "virginFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(A)"), " Dont fluide vierge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "recycledFluidQuantity",
    defaultValue: "0",
    onChange: function onChange(e) {
      onFluidBChange(e, props);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "recycledFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(B)"), " Dont fluide recycl\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "regeneratedFluidQuantity",
    defaultValue: "0",
    onChange: function onChange(e) {
      onFluidCChange(e, props);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "regeneratedFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(C)"), " Dont fluide r\xE9g\xE9n\xE9r\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "border border-0 form-control form-control-sm",
    id: "totalRetrievedFluidQuantity",
    disabled: true,
    value: sumDE
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "totalRetrievedFluidQuantity",
    className: "fw-bold text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
    className: "fas fa-up-long"
  }), " Quantit\xE9 totale r\xE9cup\xE9r\xE9e ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(D+E)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "forProcessingFluidQuantity",
    defaultValue: "0",
    onChange: function onChange(e) {
      onFluidDChange(e, props);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "forProcessingFluidQuantity",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("sup", null, "(D)"), " Dont fluide destin\xE9 au traitement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "bsffNumber",
    onChange: function onChange(e) {
      props.onChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("label", {
    htmlFor: "bsffNumber",
    className: "fw-bold"
  }, "Num\xE9ro du BSFF (si connu)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "reusableFluidQuantity",
    defaultValue: "0",
    onChange: function onChange(e) {
      onFluidEChange(e, props);
    }
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
/* harmony import */ var _Detectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Detectors */ "./react/jsx/Detectors.js");
/* harmony import */ var _DetectorControlDate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DetectorControlDate */ "./react/jsx/DetectorControlDate.js");
/* harmony import */ var _Equipments__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Equipments */ "./react/jsx/Equipments.js");
/* harmony import */ var _InterventionTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./InterventionTypes */ "./react/jsx/InterventionTypes.js");
/* harmony import */ var _OtherType__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./OtherType */ "./react/jsx/OtherType.js");
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Containers */ "./react/jsx/Containers.js");
/* harmony import */ var _EquipmentDetails__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./EquipmentDetails */ "./react/jsx/EquipmentDetails.js");
/* harmony import */ var _FluidHandling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./FluidHandling */ "./react/jsx/FluidHandling.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var InterventionForm = function InterventionForm() {
  // States
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    interventionDate = _useState2[0],
    setInterventionDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    otherType = _useState6[0],
    setOtherType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    equipment = _useState8[0],
    setEquipment = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    detector = _useState10[0],
    setDetector = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    detectorControlDate = _useState12[0],
    setDetectorControlDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    fluidQuantities = _useState14[0],
    setFluidQuantities = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    container = _useState16[0],
    setContainer = _useState16[1];

  // Current date
  var date = new Date();
  date.setDate(date.getDate());
  var now = date.toLocaleDateString("fr-CA");

  // Events
  var onInterventionDateChange = function onInterventionDateChange(e) {
    setInterventionDate(e.target.value);
  };
  var onTypeChange = function onTypeChange(e) {
    setType(e);
  };
  var onOtherTypeChange = function onOtherTypeChange(e) {
    setOtherType(e.target.value);
  };
  var onEquipmentChange = function onEquipmentChange(e) {
    setEquipment(e);
  };
  var onDetectorChange = function onDetectorChange(e) {
    setDetector(e);
  };
  var onFluidQuantitiesChange = function onFluidQuantitiesChange(e) {
    setFluidQuantities(e);
  };
  var onContainerChange = function onContainerChange(e) {
    setContainer(e);
  };
  var handleSubmit = function handleSubmit(e) {
    alert("The form has been submitted!");
    e.preventDefault;
  };
  var handleReset = function handleReset() {
    setInterventionDate(null);
    setType("");
    setOtherType(null);
    setEquipment(null);
    setDetector(null);
    setDetectorControlDate(null);
    setFluidQuantities({});
    setContainer(null);
    // TODO: reset sums in FluidHandling component
  };

  console.log(fluidQuantities);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "section-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "date",
    id: "interventionDate",
    className: "form-control form-control-sm",
    defaultValue: now,
    onChange: onInterventionDateChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    htmlFor: "interventionDate",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
    className: "fas fa-calendar-days"
  }), " Date de l'intervention")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Equipments__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onChange: onEquipmentChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_EquipmentDetails__WEBPACK_IMPORTED_MODULE_24__["default"], {
    data: equipment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_InterventionTypes__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onChange: onTypeChange
  }), type && type.name === "Autre" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_OtherType__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onChange: onOtherTypeChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Detectors__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onChange: onDetectorChange
  }), detector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_DetectorControlDate__WEBPACK_IMPORTED_MODULE_19__["default"], {
    data: detector
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_FluidHandling__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onChange: onFluidQuantitiesChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Containers__WEBPACK_IMPORTED_MODULE_23__["default"], {
    data: equipment.fluid,
    onChange: onContainerChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "d-flex d-flex-row align-items-center justify-content-between m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    className: "btn btn-sm btn-warning",
    type: "reset",
    onClick: handleReset
  }, "Annuler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    className: "btn btn-sm btn-danger",
    type: "submit"
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
    onChange: function onChange(e) {
      props.onChange(types[e.target.value]);
    },
    className: "form-select form-select-sm",
    id: "typeLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    defaultValue: null
  }, "---"), types.map(function (type, i) {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-1d907c"], () => (__webpack_exec__("./react/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFBQSxDQUFFO0lBQ3JDLFNBQVM7RUFBQSxFQUNULENBQ0U7QUFFVixDQUFDO0FBRUQsaUVBQWU2QyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0RldGVjdG9yQ29udHJvbERhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0RldGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWRIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L090aGVyVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbi8vIGltcG9ydCBcIi4vY3NzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2pzeC9BcHBcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxucm9vdC5yZW5kZXIoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTJcIj5cbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIDwvZGl2PlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEludGVydmVudGlvbkZvcm0gZnJvbSBcIi4vSW50ZXJ2ZW50aW9uRm9ybVwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxoMj5GaWNoZSBkJ2ludGVydmVudGlvbjwvaDI+XG4gICAgICA8SW50ZXJ2ZW50aW9uRm9ybSAvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIENyZWF0ZSBhbiBheGlvcyBvYmplY3Qgd2l0aCBkZWZhdWx0IGhlYWRlcnNcbmNvbnN0IGF4ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCIvYXBpXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSxcbn0pO1xuXG4vLyBDYXRjaCB1bmF1dGhvcml6ZWQgcmVxdWVzdCBhbmQgcmVkaXJlY3QgaWYgZXJyb3JcbmF4LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiByZXNwb25zZSwgKGVycm9yKSA9PiB7XG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgQ29udGFpbmVycyA9IChwcm9wcykgPT4ge1xuICBcbiAgY29uc3QgW2NvbnRhaW5lcnMsIHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2NvbnRhaW5lcnNCeUZsdWlkLycgKyBwcm9wcy5kYXRhLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0Q29udGFpbmVycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGNvbnRhaW5lcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJjb250YWluZXJMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGNvbnRhaW5lcnMubWFwKChjb250YWluZXIsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2NvbnRhaW5lci5pZH0+XG4gICAgICAgICAgICB7Y29udGFpbmVyLnNlcmlhbE51bWJlcn0gLS0gQ2FwYWNpdMOpOiB7Y29udGFpbmVyLmNhcGFjaXR5LnRvRml4ZWQoMil9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFpbmVyTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3R0bGUtZHJvcGxldFwiPjwvaT4gQ29udGVuYW50XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERldGVjdG9yQ29udHJvbERhdGUgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjb250cm9sRGF0ZSA9IG5ldyBEYXRlKHByb3BzLmRhdGEuY29udHJvbERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLWZyXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiXG4gICAgICAgIHZhbHVlPXtjb250cm9sRGF0ZX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yQ29udHJvbERhdGVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xpcGJvYXJkLWNoZWNrXCI+PC9pPiBEYXRlIGRlIGNvbnRyw7RsZVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvckNvbnRyb2xEYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IERldGVjdG9ycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtkZXRlY3RvcnMsIHNldERldGVjdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2RldGVjdG9yc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RGV0ZWN0b3JzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShkZXRlY3RvcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZGV0ZWN0b3JzLm1hcCgoZGV0ZWN0b3IsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2RldGVjdG9yLmlkfT5cbiAgICAgICAgICAgIHtkZXRlY3Rvci5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb21wYXNzXCI+PC9pPiBEw6l0ZWN0ZXVyIGRlIGZ1aXRlc1xuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEVxdWlwbWVudERldGFpbHMgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTEgbWItMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWZsZXggZmxleC1tZC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgIGlkPVwiZXF1aXBtZW50TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+IElkZW50aWZpY2F0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICBpZD1cImZsdWlkTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5mbHVpZC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IETDqW5vbWluYXRpb24gZHUgZmx1aWRlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICBpZD1cImZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEud2VpZ2h0LnRvRml4ZWQoMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdlaWdodC1oYW5naW5nXCI+PC9pPiBDaGFyZ2UgdG90YWxlIChrZylcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICBpZD1cImZsdWlkQ08yXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLmNvMkVxVG9ubmFnZS50b0ZpeGVkKDIpfSBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRDTzJcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkXCI+PC9pPiBUb25uYWdlIMOpcXVpdmFsZW50IEMwPHN1Yj4yPC9zdWI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnREZXRhaWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEVxdWlwbWVudHMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZXF1aXBtZW50cywgc2V0RXF1aXBtZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2VxdWlwbWVudFwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RXF1aXBtZW50cyhyZXNwb25zZS5kYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlcXVpcG1lbnRzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZXF1aXBtZW50TGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBlcXVpcG1lbnRzLm1hcCgoZXF1aXBtZW50LCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtlcXVpcG1lbnQuaWR9PlxuICAgICAgICAgICAge2VxdWlwbWVudC5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudExhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2VhcnNcIj48L2k+IEVxdWlwZW1lbnQgY29uY2VybsOpXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZEhhbmRsaW5nID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHsnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMH0pO1xuICBjb25zdCBbc3VtQUJDLCBzZXRTdW1BQkNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1ERSwgc2V0U3VtREVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25GbHVpZEFDaGFuZ2UgPSAoZSwgcHJvcHMpID0+IHtcbiAgICBsZXQgQSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKCBmbHVpZFF1YW50aXRpZXMgPT4gKHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIC4uLnsnQSc6IEF9XG4gICAgfSkpO1xuICAgIHNldFN1bUFCQyhBK2ZsdWlkUXVhbnRpdGllc1snQiddK2ZsdWlkUXVhbnRpdGllc1snQyddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmbHVpZFF1YW50aXRpZXMpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZEJDaGFuZ2UgPSAoZSwgcHJvcHMpID0+IHtcbiAgICBsZXQgQiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKCBmbHVpZFF1YW50aXRpZXMgPT4gKHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIC4uLnsnQic6IEJ9XG4gICAgfSkpO1xuICAgIHNldFN1bUFCQyhmbHVpZFF1YW50aXRpZXNbJ0EnXStCK2ZsdWlkUXVhbnRpdGllc1snQyddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmbHVpZFF1YW50aXRpZXMpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZENDaGFuZ2UgPSAoZSwgcHJvcHMpID0+IHtcbiAgICBsZXQgQyA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKCBmbHVpZFF1YW50aXRpZXMgPT4gKHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIC4uLnsnQyc6IEN9XG4gICAgfSkpO1xuICAgIHNldFN1bUFCQyhmbHVpZFF1YW50aXRpZXNbJ0EnXStmbHVpZFF1YW50aXRpZXNbJ0InXStDKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmbHVpZFF1YW50aXRpZXMpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERDaGFuZ2UgPSAoZSwgcHJvcHMpID0+IHtcbiAgICBsZXQgRCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKCBmbHVpZFF1YW50aXRpZXMgPT4gKHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIC4uLnsnRCc6IER9XG4gICAgfSkpO1xuICAgIHNldFN1bURFKEQrZmx1aWRRdWFudGl0aWVzWydFJ10pO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZsdWlkUXVhbnRpdGllcyk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRUNoYW5nZSA9IChlLCBwcm9wcykgPT4ge1xuICAgIGxldCBFID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoIGZsdWlkUXVhbnRpdGllcyA9PiAoe1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgLi4ueydFJzogRX1cbiAgICB9KSk7XG4gICAgc2V0U3VtREUoZmx1aWRRdWFudGl0aWVzWydEJ10rRSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZmx1aWRRdWFudGl0aWVzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWFsaWduLWNlbnRlclwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHJvcGxldFwiPjwvaT4gTWFuaXB1bGF0aW9uIGR1IGZsdWlkZSBmcmlnb3JpZ8OobmVcbiAgICAgIDwvaDY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZmxleCBmbGV4LW1kLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb3duLWxvbmdcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWRBQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihBKTwvc3VwPiBEb250IGZsdWlkZSB2aWVyZ2VcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWRCQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtvbkZsdWlkQ0NoYW5nZShlLCBwcm9wcyl9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihDKTwvc3VwPiBEb250IGZsdWlkZSByw6lnw6luw6lyw6lcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1ERX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVwLWxvbmdcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgcsOpY3Vww6lyw6llIDxzdXA+KEQrRSk8L3N1cD48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWREQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oRCk8L3N1cD4gRG9udCBmbHVpZGUgZGVzdGluw6kgYXUgdHJhaXRlbWVudFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJic2ZmTnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnNmZk51bWJlclwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgTnVtw6lybyBkdSBCU0ZGIChzaSBjb25udSlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmV1c2FibGVGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWRFQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERldGVjdG9ycyBmcm9tIFwiLi9EZXRlY3RvcnNcIjtcbmltcG9ydCBEZXRlY3RvckNvbnRyb2xEYXRlIGZyb20gXCIuL0RldGVjdG9yQ29udHJvbERhdGVcIlxuaW1wb3J0IEVxdWlwbWVudHMgZnJvbSBcIi4vRXF1aXBtZW50c1wiO1xuaW1wb3J0IEludGVydmVudGlvblR5cGVzIGZyb20gXCIuL0ludGVydmVudGlvblR5cGVzXCI7XG5pbXBvcnQgT3RoZXJUeXBlIGZyb20gXCIuL090aGVyVHlwZVwiO1xuaW1wb3J0IENvbnRhaW5lcnMgZnJvbSBcIi4vQ29udGFpbmVyc1wiO1xuaW1wb3J0IEVxdWlwbWVudERldGFpbHMgZnJvbSBcIi4vRXF1aXBtZW50RGV0YWlsc1wiO1xuaW1wb3J0IEZsdWlkSGFuZGxpbmcgZnJvbSBcIi4vRmx1aWRIYW5kbGluZ1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25Gb3JtID0gKCkgPT4ge1xuXG4gIC8vIFN0YXRlc1xuICBjb25zdCBbaW50ZXJ2ZW50aW9uRGF0ZSwgc2V0SW50ZXJ2ZW50aW9uRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvdGhlclR5cGUsIHNldE90aGVyVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGV0ZWN0b3IsIHNldERldGVjdG9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGV0ZWN0b3JDb250cm9sRGF0ZSwgc2V0RGV0ZWN0b3JDb250cm9sRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIEN1cnJlbnQgZGF0ZVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgY29uc3Qgbm93ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1DQVwiKTtcbiAgXG4gIC8vIEV2ZW50c1xuICBjb25zdCBvbkludGVydmVudGlvbkRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEludGVydmVudGlvbkRhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUeXBlKGUpO1xuICB9XG5cbiAgY29uc3Qgb25PdGhlclR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE90aGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkVxdWlwbWVudENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RXF1aXBtZW50KGUpO1xuICB9XG5cbiAgY29uc3Qgb25EZXRlY3RvckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RGV0ZWN0b3IoZSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkUXVhbnRpdGllc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGUpO1xuICB9XG5cbiAgY29uc3Qgb25Db250YWluZXJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRhaW5lcihlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgYWxlcnQoXCJUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQhXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRJbnRlcnZlbnRpb25EYXRlKG51bGwpO1xuICAgIHNldFR5cGUoXCJcIik7XG4gICAgc2V0T3RoZXJUeXBlKG51bGwpO1xuICAgIHNldEVxdWlwbWVudChudWxsKTtcbiAgICBzZXREZXRlY3RvcihudWxsKTtcbiAgICBzZXREZXRlY3RvckNvbnRyb2xEYXRlKG51bGwpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyh7fSk7XG4gICAgc2V0Q29udGFpbmVyKG51bGwpO1xuICAgIC8vIFRPRE86IHJlc2V0IHN1bXMgaW4gRmx1aWRIYW5kbGluZyBjb21wb25lbnRcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGZsdWlkUXVhbnRpdGllcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIHsvKiB7ZXF1aXBtZW50Py5uYW1lfSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3d9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlcnZlbnRpb25EYXRlXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYWxlbmRhci1kYXlzXCI+PC9pPiBEYXRlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxFcXVpcG1lbnRzIG9uQ2hhbmdlPXtvbkVxdWlwbWVudENoYW5nZX0gLz5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgICAgPEVxdWlwbWVudERldGFpbHMgZGF0YT17ZXF1aXBtZW50fSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPEludGVydmVudGlvblR5cGVzIG9uQ2hhbmdlPXtvblR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IHR5cGUgJiYgdHlwZS5uYW1lID09PSBcIkF1dHJlXCIgICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8RGV0ZWN0b3JzIG9uQ2hhbmdlPXtvbkRldGVjdG9yQ2hhbmdlfSAvPlxuICAgICAgICAgICAgeyBkZXRlY3RvciAmJlxuICAgICAgICAgICAgICA8RGV0ZWN0b3JDb250cm9sRGF0ZSBkYXRhPXtkZXRlY3Rvcn0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgICAgPEZsdWlkSGFuZGxpbmcgb25DaGFuZ2U9e29uRmx1aWRRdWFudGl0aWVzQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyBlcXVpcG1lbnQgJiZcbiAgICAgICAgICAgICAgPENvbnRhaW5lcnNcbiAgICAgICAgICAgICAgICBkYXRhPXtlcXVpcG1lbnQuZmx1aWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29udGFpbmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbS0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCIgdHlwZT1cInJlc2V0XCIgb25DbGljaz17aGFuZGxlUmVzZXR9PkFubnVsZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiB0eXBlPVwic3VibWl0XCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uVHlwZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9pbnRlcnZlbnRpb25fdHlwZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHlwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKHR5cGVzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwidHlwZUxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgdHlwZXMubWFwKCh0eXBlLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXt0eXBlLmlkfT5cbiAgICAgICAgICAgIHt0eXBlLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZUxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2NyZXdkcml2ZXItd3JlbmNoXCI+PC9pPiBOYXR1cmUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uVHlwZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIElucHV0IHRleHQgZm9yIFwib3RoZXJcIiBpbnRlcnZlbnRpb24gdHlwZVxuY29uc3QgT3RoZXJUeXBlID0gKHByb3BzKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJvdGhlckludGVydmVudGlvblR5cGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlZldWlsbGV6IHByw6ljaXNlciBsZSB0eXBlIGQnaW50ZXJ2ZW50aW9uLi4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJUeXBlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiSW50ZXJ2ZW50aW9uRm9ybSIsImF4aW9zIiwiYXgiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVycyIsInByb3BzIiwiY29udGFpbmVycyIsInNldENvbnRhaW5lcnMiLCJnZXQiLCJkYXRhIiwiaWQiLCJ0aGVuIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpIiwic2VyaWFsTnVtYmVyIiwiY2FwYWNpdHkiLCJ0b0ZpeGVkIiwiRGV0ZWN0b3JDb250cm9sRGF0ZSIsImNvbnRyb2xEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIkRldGVjdG9ycyIsImRldGVjdG9ycyIsInNldERldGVjdG9ycyIsImRldGVjdG9yIiwibmFtZSIsIkVxdWlwbWVudERldGFpbHMiLCJmbHVpZCIsIndlaWdodCIsImNvMkVxVG9ubmFnZSIsIkVxdWlwbWVudHMiLCJlcXVpcG1lbnRzIiwic2V0RXF1aXBtZW50cyIsImVxdWlwbWVudCIsIkZsdWlkSGFuZGxpbmciLCJmbHVpZFF1YW50aXRpZXMiLCJzZXRGbHVpZFF1YW50aXRpZXMiLCJzdW1BQkMiLCJzZXRTdW1BQkMiLCJzdW1ERSIsInNldFN1bURFIiwib25GbHVpZEFDaGFuZ2UiLCJBIiwiTnVtYmVyIiwib25GbHVpZEJDaGFuZ2UiLCJCIiwib25GbHVpZENDaGFuZ2UiLCJDIiwib25GbHVpZERDaGFuZ2UiLCJEIiwib25GbHVpZEVDaGFuZ2UiLCJFIiwiSW50ZXJ2ZW50aW9uVHlwZXMiLCJPdGhlclR5cGUiLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwic2V0RXF1aXBtZW50Iiwic2V0RGV0ZWN0b3IiLCJkZXRlY3RvckNvbnRyb2xEYXRlIiwic2V0RGV0ZWN0b3JDb250cm9sRGF0ZSIsInNldENvbnRhaW5lciIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm5vdyIsIm9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSIsIm9uVHlwZUNoYW5nZSIsIm9uT3RoZXJUeXBlQ2hhbmdlIiwib25FcXVpcG1lbnRDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25GbHVpZFF1YW50aXRpZXNDaGFuZ2UiLCJvbkNvbnRhaW5lckNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImFsZXJ0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVSZXNldCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlcyIsInNldFR5cGVzIl0sInNvdXJjZVJvb3QiOiIifQ==