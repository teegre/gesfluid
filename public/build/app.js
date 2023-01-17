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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_FluidHandling__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0F4aW9zLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9Db250YWluZXJzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvckNvbnRyb2xEYXRlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkSGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9PdGhlclR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9qc3gvQXBwXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbnJvb3QucmVuZGVyKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0yXCI+XG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8QXBwIC8+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICA8L2Rpdj5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbnRlcnZlbnRpb25Gb3JtIGZyb20gXCIuL0ludGVydmVudGlvbkZvcm1cIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8aDI+RmljaGUgZCdpbnRlcnZlbnRpb248L2gyPlxuICAgICAgPEludGVydmVudGlvbkZvcm0gLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYW4gYXhpb3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBoZWFkZXJzXG5jb25zdCBheCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuLy8gQ2F0Y2ggdW5hdXRob3JpemVkIHJlcXVlc3QgYW5kIHJlZGlyZWN0IGlmIGVycm9yXG5heC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4gcmVzcG9uc2UsIChlcnJvcikgPT4ge1xuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IENvbnRhaW5lcnMgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IFtjb250YWluZXJzLCBzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9jb250YWluZXJzQnlGbHVpZC8nICsgcHJvcHMuZGF0YS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldENvbnRhaW5lcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShjb250YWluZXJzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiY29udGFpbmVyTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBjb250YWluZXJzLm1hcCgoY29udGFpbmVyLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtjb250YWluZXIuaWR9PlxuICAgICAgICAgICAge2NvbnRhaW5lci5zZXJpYWxOdW1iZXJ9IC0tIENhcGFjaXTDqToge2NvbnRhaW5lci5jYXBhY2l0eS50b0ZpeGVkKDIpfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhaW5lckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm90dGxlLWRyb3BsZXRcIj48L2k+IENvbnRlbmFudFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEZXRlY3RvckNvbnRyb2xEYXRlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY29udHJvbERhdGUgPSBuZXcgRGF0ZShwcm9wcy5kYXRhLmNvbnRyb2xEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1mclwiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yQ29udHJvbERhdGVcIlxuICAgICAgICB2YWx1ZT17Y29udHJvbERhdGV9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsaXBib2FyZC1jaGVja1wiPjwvaT4gRGF0ZSBkZSBjb250csO0bGVcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JDb250cm9sRGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBEZXRlY3RvcnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZGV0ZWN0b3JzLCBzZXREZXRlY3RvcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9kZXRlY3RvcnNcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldERldGVjdG9ycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZGV0ZWN0b3JzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGRldGVjdG9ycy5tYXAoKGRldGVjdG9yLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtkZXRlY3Rvci5pZH0+XG4gICAgICAgICAgICB7ZGV0ZWN0b3IubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tcGFzc1wiPjwvaT4gRMOpdGVjdGV1ciBkZSBmdWl0ZXNcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFcXVpcG1lbnREZXRhaWxzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0xIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICBpZD1cImVxdWlwbWVudE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TmFtZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPiBJZGVudGlmaWNhdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuZmx1aWQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBEw6lub21pbmF0aW9uIGR1IGZsdWlkZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLndlaWdodC50b0ZpeGVkKDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13ZWlnaHQtaGFuZ2luZ1wiPjwvaT4gQ2hhcmdlIHRvdGFsZSAoa2cpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZENPMlwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5jbzJFcVRvbm5hZ2UudG9GaXhlZCgyKX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkQ08yXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZFwiPjwvaT4gVG9ubmFnZSDDqXF1aXZhbGVudCBDMDxzdWI+Mjwvc3ViPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50RGV0YWlscztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBFcXVpcG1lbnRzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2VxdWlwbWVudHMsIHNldEVxdWlwbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9lcXVpcG1lbnRcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldEVxdWlwbWVudHMocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZXF1aXBtZW50c1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImVxdWlwbWVudExhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZXF1aXBtZW50cy5tYXAoKGVxdWlwbWVudCwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17ZXF1aXBtZW50LmlkfT5cbiAgICAgICAgICAgIHtlcXVpcG1lbnQubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnRMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdlYXJzXCI+PC9pPiBFcXVpcGVtZW50IGNvbmNlcm7DqVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRmx1aWRIYW5kbGluZyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtmbHVpZFF1YW50aXRpZXMsIHNldEZsdWlkUXVhbnRpdGllc10gPSB1c2VTdGF0ZSh7J0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDB9KTtcbiAgY29uc3QgW3N1bUFCQywgc2V0U3VtQUJDXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3VtREUsIHNldFN1bURFXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9uRmx1aWRBQ2hhbmdlID0gKGUsIHByb3BzKSA9PiB7XG4gICAgbGV0IEEgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyggZmx1aWRRdWFudGl0aWVzID0+ICh7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAuLi57J0EnOiBBfVxuICAgIH0pKTtcbiAgICBzZXRTdW1BQkMoQStmbHVpZFF1YW50aXRpZXNbJ0InXStmbHVpZFF1YW50aXRpZXNbJ0MnXSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZmx1aWRRdWFudGl0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRCQ2hhbmdlID0gKGUsIHByb3BzKSA9PiB7XG4gICAgbGV0IEIgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyggZmx1aWRRdWFudGl0aWVzID0+ICh7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAuLi57J0InOiBCfVxuICAgIH0pKTtcbiAgICBzZXRTdW1BQkMoZmx1aWRRdWFudGl0aWVzWydBJ10rQitmbHVpZFF1YW50aXRpZXNbJ0MnXSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZmx1aWRRdWFudGl0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRDQ2hhbmdlID0gKGUsIHByb3BzKSA9PiB7XG4gICAgbGV0IEMgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyggZmx1aWRRdWFudGl0aWVzID0+ICh7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAuLi57J0MnOiBDfVxuICAgIH0pKTtcbiAgICBzZXRTdW1BQkMoZmx1aWRRdWFudGl0aWVzWydBJ10rZmx1aWRRdWFudGl0aWVzWydCJ10rQyk7XG4gICAgcHJvcHMub25DaGFuZ2UoZmx1aWRRdWFudGl0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREQ2hhbmdlID0gKGUsIHByb3BzKSA9PiB7XG4gICAgbGV0IEQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyggZmx1aWRRdWFudGl0aWVzID0+ICh7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAuLi57J0QnOiBEfVxuICAgIH0pKTtcbiAgICBzZXRTdW1ERShEK2ZsdWlkUXVhbnRpdGllc1snRSddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmbHVpZFF1YW50aXRpZXMpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZEVDaGFuZ2UgPSAoZSwgcHJvcHMpID0+IHtcbiAgICBsZXQgRSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKCBmbHVpZFF1YW50aXRpZXMgPT4gKHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIC4uLnsnRSc6IEV9XG4gICAgfSkpO1xuICAgIHNldFN1bURFKGZsdWlkUXVhbnRpdGllc1snRCddK0UpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZsdWlkUXVhbnRpdGllcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZmxleCBmbGV4LW1kLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb3duLWxvbmdcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWRBQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihBKTwvc3VwPiBEb250IGZsdWlkZSB2aWVyZ2VcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWRCQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtvbkZsdWlkQ0NoYW5nZShlLCBwcm9wcyl9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihDKTwvc3VwPiBEb250IGZsdWlkZSByw6lnw6luw6lyw6lcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1ERX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVwLWxvbmdcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgcsOpY3Vww6lyw6llIDxzdXA+KEQrRSk8L3N1cD48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWREQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oRCk8L3N1cD4gRG9udCBmbHVpZGUgZGVzdGluw6kgYXUgdHJhaXRlbWVudFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJic2ZmTnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnNmZk51bWJlclwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgTnVtw6lybyBkdSBCU0ZGIChzaSBjb25udSlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmV1c2FibGVGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge29uRmx1aWRFQ2hhbmdlKGUsIHByb3BzKX19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERldGVjdG9ycyBmcm9tIFwiLi9EZXRlY3RvcnNcIjtcbmltcG9ydCBEZXRlY3RvckNvbnRyb2xEYXRlIGZyb20gXCIuL0RldGVjdG9yQ29udHJvbERhdGVcIlxuaW1wb3J0IEVxdWlwbWVudHMgZnJvbSBcIi4vRXF1aXBtZW50c1wiO1xuaW1wb3J0IEludGVydmVudGlvblR5cGVzIGZyb20gXCIuL0ludGVydmVudGlvblR5cGVzXCI7XG5pbXBvcnQgT3RoZXJUeXBlIGZyb20gXCIuL090aGVyVHlwZVwiO1xuaW1wb3J0IENvbnRhaW5lcnMgZnJvbSBcIi4vQ29udGFpbmVyc1wiO1xuaW1wb3J0IEVxdWlwbWVudERldGFpbHMgZnJvbSBcIi4vRXF1aXBtZW50RGV0YWlsc1wiO1xuaW1wb3J0IEZsdWlkSGFuZGxpbmcgZnJvbSBcIi4vRmx1aWRIYW5kbGluZ1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25Gb3JtID0gKCkgPT4ge1xuXG4gIC8vIFN0YXRlc1xuICBjb25zdCBbaW50ZXJ2ZW50aW9uRGF0ZSwgc2V0SW50ZXJ2ZW50aW9uRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvdGhlclR5cGUsIHNldE90aGVyVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGV0ZWN0b3IsIHNldERldGVjdG9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGV0ZWN0b3JDb250cm9sRGF0ZSwgc2V0RGV0ZWN0b3JDb250cm9sRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIEN1cnJlbnQgZGF0ZVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgY29uc3Qgbm93ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1DQVwiKTtcbiAgXG4gIC8vIEV2ZW50c1xuICBjb25zdCBvbkludGVydmVudGlvbkRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEludGVydmVudGlvbkRhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUeXBlKGUpO1xuICB9XG5cbiAgY29uc3Qgb25PdGhlclR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE90aGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkVxdWlwbWVudENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RXF1aXBtZW50KGUpO1xuICB9XG5cbiAgY29uc3Qgb25EZXRlY3RvckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RGV0ZWN0b3IoZSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkUXVhbnRpdGllc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGUpO1xuICB9XG5cbiAgY29uc3Qgb25Db250YWluZXJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRhaW5lcihlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgYWxlcnQoXCJUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQhXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRJbnRlcnZlbnRpb25EYXRlKG51bGwpO1xuICAgIHNldFR5cGUoXCJcIik7XG4gICAgc2V0T3RoZXJUeXBlKG51bGwpO1xuICAgIHNldEVxdWlwbWVudChudWxsKTtcbiAgICBzZXREZXRlY3RvcihudWxsKTtcbiAgICBzZXREZXRlY3RvckNvbnRyb2xEYXRlKG51bGwpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyh7fSk7XG4gICAgc2V0Q29udGFpbmVyKG51bGwpO1xuICB9XG5cbiAgY29uc29sZS5sb2coZmx1aWRRdWFudGl0aWVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgey8qIHtlcXVpcG1lbnQ/Lm5hbWV9ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnRlcnZlbnRpb25EYXRlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vd31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnRlcnZlbnRpb25EYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludGVydmVudGlvbkRhdGVcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+IERhdGUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVxdWlwbWVudHMgb25DaGFuZ2U9e29uRXF1aXBtZW50Q2hhbmdlfSAvPlxuICAgICAgICAgICAgeyBlcXVpcG1lbnQgJiZcbiAgICAgICAgICAgICAgICA8RXF1aXBtZW50RGV0YWlscyBkYXRhPXtlcXVpcG1lbnR9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8SW50ZXJ2ZW50aW9uVHlwZXMgb25DaGFuZ2U9e29uVHlwZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIHsgdHlwZSAmJiB0eXBlLm5hbWUgPT09IFwiQXV0cmVcIiAgJiZcbiAgICAgICAgICAgICAgICA8T3RoZXJUeXBlIG9uQ2hhbmdlPXtvbk90aGVyVHlwZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxEZXRlY3RvcnMgb25DaGFuZ2U9e29uRGV0ZWN0b3JDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IGRldGVjdG9yICYmXG4gICAgICAgICAgICAgIDxEZXRlY3RvckNvbnRyb2xEYXRlIGRhdGE9e2RldGVjdG9yfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPEZsdWlkSGFuZGxpbmcgb25DaGFuZ2U9e29uRmx1aWRRdWFudGl0aWVzQ2hhbmdlfSAvPlxuICAgICAgICAgICAgeyBlcXVpcG1lbnQgJiZcbiAgICAgICAgICAgICAgPENvbnRhaW5lcnNcbiAgICAgICAgICAgICAgICBkYXRhPXtlcXVpcG1lbnQuZmx1aWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29udGFpbmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbS0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCIgdHlwZT1cInJlc2V0XCIgb25DbGljaz17aGFuZGxlUmVzZXR9PkFubnVsZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiB0eXBlPVwic3VibWl0XCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uVHlwZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9pbnRlcnZlbnRpb25fdHlwZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHlwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKHR5cGVzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwidHlwZUxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgdHlwZXMubWFwKCh0eXBlLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXt0eXBlLmlkfT5cbiAgICAgICAgICAgIHt0eXBlLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZUxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2NyZXdkcml2ZXItd3JlbmNoXCI+PC9pPiBOYXR1cmUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uVHlwZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIElucHV0IHRleHQgZm9yIFwib3RoZXJcIiBpbnRlcnZlbnRpb24gdHlwZVxuY29uc3QgT3RoZXJUeXBlID0gKHByb3BzKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJvdGhlckludGVydmVudGlvblR5cGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlZldWlsbGV6IHByw6ljaXNlciBsZSB0eXBlIGQnaW50ZXJ2ZW50aW9uLi4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJUeXBlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiSW50ZXJ2ZW50aW9uRm9ybSIsImF4aW9zIiwiYXgiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVycyIsInByb3BzIiwiY29udGFpbmVycyIsInNldENvbnRhaW5lcnMiLCJnZXQiLCJkYXRhIiwiaWQiLCJ0aGVuIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpIiwic2VyaWFsTnVtYmVyIiwiY2FwYWNpdHkiLCJ0b0ZpeGVkIiwiRGV0ZWN0b3JDb250cm9sRGF0ZSIsImNvbnRyb2xEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIkRldGVjdG9ycyIsImRldGVjdG9ycyIsInNldERldGVjdG9ycyIsImRldGVjdG9yIiwibmFtZSIsIkVxdWlwbWVudERldGFpbHMiLCJmbHVpZCIsIndlaWdodCIsImNvMkVxVG9ubmFnZSIsIkVxdWlwbWVudHMiLCJlcXVpcG1lbnRzIiwic2V0RXF1aXBtZW50cyIsImVxdWlwbWVudCIsIkZsdWlkSGFuZGxpbmciLCJmbHVpZFF1YW50aXRpZXMiLCJzZXRGbHVpZFF1YW50aXRpZXMiLCJzdW1BQkMiLCJzZXRTdW1BQkMiLCJzdW1ERSIsInNldFN1bURFIiwib25GbHVpZEFDaGFuZ2UiLCJBIiwiTnVtYmVyIiwib25GbHVpZEJDaGFuZ2UiLCJCIiwib25GbHVpZENDaGFuZ2UiLCJDIiwib25GbHVpZERDaGFuZ2UiLCJEIiwib25GbHVpZEVDaGFuZ2UiLCJFIiwiSW50ZXJ2ZW50aW9uVHlwZXMiLCJPdGhlclR5cGUiLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwic2V0RXF1aXBtZW50Iiwic2V0RGV0ZWN0b3IiLCJkZXRlY3RvckNvbnRyb2xEYXRlIiwic2V0RGV0ZWN0b3JDb250cm9sRGF0ZSIsInNldENvbnRhaW5lciIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm5vdyIsIm9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSIsIm9uVHlwZUNoYW5nZSIsIm9uT3RoZXJUeXBlQ2hhbmdlIiwib25FcXVpcG1lbnRDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25GbHVpZFF1YW50aXRpZXNDaGFuZ2UiLCJvbkNvbnRhaW5lckNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImFsZXJ0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVSZXNldCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlcyIsInNldFR5cGVzIl0sInNvdXJjZVJvb3QiOiIifQ==