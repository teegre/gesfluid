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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
    readOnly: true,
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
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    container = _useState14[0],
    setContainer = _useState14[1];

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
    setContainer(null);
  };
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
    className: "small fw-bold"
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-a566a7"], () => (__webpack_exec__("./react/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBQzlDOztBQUU0QjtBQUU1QixJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUNqRCxJQUFNQyxJQUFJLEdBQUdMLDREQUFVLENBQUNFLFNBQVMsQ0FBQztBQUVsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQ1Q7RUFBSyxTQUFTLEVBQUM7QUFBZ0IsZ0JBQzdCLDJEQUFDLHlEQUFnQixxQkFDZiwyREFBQyxnREFBRyxPQUFHLENBQ1UsQ0FDZixDQUNQOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QjtBQUV3QjtBQUVsRCxJQUFNTCxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBRWhCLG9CQUNFLDJEQUFDLHlEQUFnQixxQkFDZix1RUFBSSxzQkFBb0IsQ0FBSyxlQUM3QiwyREFBQyx5REFBZ0IsT0FBRyxDQUNIO0FBRXZCLENBQUM7QUFFRCxpRUFBZUEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDZFE7O0FBRTFCO0FBQ0EsSUFBTVEsRUFBRSxHQUFHRCxvREFBWSxDQUFDO0VBQ3RCRyxPQUFPLEVBQUUsTUFBTTtFQUNmQyxPQUFPLEVBQUU7SUFDUCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLFFBQVEsRUFBRTtFQUNaO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FILEVBQUUsQ0FBQ0ksWUFBWSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQyxVQUFDRCxRQUFRO0VBQUEsT0FBS0EsUUFBUTtBQUFBLEdBQUUsVUFBQ0UsS0FBSyxFQUFLO0VBQzlELElBQUlBLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLEtBQUssR0FBRyxFQUFFO0lBQ2pDQyxNQUFNLENBQUNDLFFBQVEsR0FBRyxRQUFRO0VBQzVCO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVWLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJTO0FBQ2tCO0FBQ25CO0FBRXpCLElBQU1hLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLEtBQUssRUFBSztFQUU1QixnQkFBb0NGLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBekNHLFVBQVU7SUFBRUMsYUFBYTtFQUNoQ0wsaURBQVMsQ0FBQyxZQUFNO0lBQ2RYLG1EQUFNLENBQUMscUJBQXFCLEdBQUdjLEtBQUssQ0FBQ0ksSUFBSSxDQUFDQyxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNmLFFBQVEsRUFBSztNQUMvRFcsYUFBYSxDQUFDWCxRQUFRLENBQUNhLElBQUksQ0FBQztJQUM5QixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsQ0FBQ0osS0FBSyxDQUFDSSxJQUFJLENBQUMsQ0FBQztFQUVoQixvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFtQixnQkFDaEM7SUFDRSxRQUFRLEVBQUUsa0JBQUNHLENBQUMsRUFBSztNQUFDUCxLQUFLLENBQUNRLFFBQVEsQ0FBQ1AsVUFBVSxDQUFDTSxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFBQSxDQUFFO0lBQzlELFNBQVMsRUFBQyw0QkFBNEI7SUFDdEMsRUFBRSxFQUFDO0VBQWdCLGdCQUVyQjtJQUFRLFlBQVksRUFBRTtFQUFLLEdBQUMsS0FBRyxDQUFTLEVBRXRDVCxVQUFVLENBQUNVLEdBQUcsQ0FBQyxVQUFDaEMsU0FBUyxFQUFFaUMsQ0FBQztJQUFBLG9CQUMxQjtNQUFRLEtBQUssRUFBRUEsQ0FBRTtNQUFDLEdBQUcsRUFBRWpDLFNBQVMsQ0FBQzBCO0lBQUcsR0FDakMxQixTQUFTLENBQUNrQyxZQUFZLEVBQUMsbUJBQWMsRUFBQ2xDLFNBQVMsQ0FBQ21DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUM3RDtFQUFBLENBQ1YsQ0FBQyxDQUVLLGVBQ1Q7SUFBTyxPQUFPLEVBQUMsZ0JBQWdCO0lBQUMsU0FBUyxFQUFDO0VBQVMsZ0JBQ2pEO0lBQUcsU0FBUyxFQUFDO0VBQXVCLEVBQUssY0FDM0MsQ0FBUSxDQUNKO0FBRVYsQ0FBQztBQUVELGlFQUFlaEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQztBQUUxQixJQUFNaUIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJaEIsS0FBSyxFQUFLO0VBRXJDLElBQU1pQixXQUFXLEdBQUcsSUFBSUMsSUFBSSxDQUFDbEIsS0FBSyxDQUFDSSxJQUFJLENBQUNhLFdBQVcsQ0FBQyxDQUFDRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7RUFFaEYsb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxRQUFRO0lBQ1IsU0FBUyxFQUFDLDhDQUE4QztJQUN4RCxFQUFFLEVBQUMscUJBQXFCO0lBQ3hCLEtBQUssRUFBRUY7RUFBWSxFQUNuQixlQUNGO0lBQU8sT0FBTyxFQUFDLHFCQUFxQjtJQUFDLFNBQVMsRUFBQztFQUE0QixnQkFDekU7SUFBRyxTQUFTLEVBQUM7RUFBd0IsRUFBSyx3QkFDNUMsQ0FBUSxDQUNKO0FBRVYsQ0FBQztBQUVELGlFQUFlRCxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJSO0FBQ2tCO0FBQ25CO0FBRXpCLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUlwQixLQUFLLEVBQUs7RUFFM0IsZ0JBQWtDRixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXZDdUIsU0FBUztJQUFFQyxZQUFZO0VBQzlCekIsaURBQVMsQ0FBQyxZQUFNO0lBQ2RYLG1EQUFNLENBQUMsWUFBWSxDQUFDLENBQUNvQixJQUFJLENBQUMsVUFBQ2YsUUFBUSxFQUFLO01BQ3RDK0IsWUFBWSxDQUFDL0IsUUFBUSxDQUFDYSxJQUFJLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQW1CLGdCQUNoQztJQUNFLFFBQVEsRUFBRSxrQkFBQ0csQ0FBQyxFQUFLO01BQUNQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDYSxTQUFTLENBQUNkLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUFBLENBQUU7SUFDN0QsU0FBUyxFQUFDLDRCQUE0QjtJQUN0QyxFQUFFLEVBQUM7RUFBZSxnQkFFcEI7SUFBUSxZQUFZLEVBQUU7RUFBSyxHQUFDLEtBQUcsQ0FBUyxFQUV0Q1csU0FBUyxDQUFDVixHQUFHLENBQUMsVUFBQ1ksUUFBUSxFQUFFWCxDQUFDO0lBQUEsb0JBQ3hCO01BQVEsS0FBSyxFQUFFQSxDQUFFO01BQUMsR0FBRyxFQUFFVyxRQUFRLENBQUNsQjtJQUFHLEdBQ2hDa0IsUUFBUSxDQUFDQyxJQUFJLENBQ1A7RUFBQSxDQUNWLENBQUMsQ0FFSyxlQUNUO0lBQU8sT0FBTyxFQUFDLGVBQWU7SUFBQyxTQUFTLEVBQUM7RUFBUyxnQkFDaEQ7SUFBRyxTQUFTLEVBQUM7RUFBZ0IsRUFBSywyQkFDcEMsQ0FBUSxDQUNKO0FBRVYsQ0FBQztBQUVELGlFQUFlSixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENFO0FBRTFCLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBSXpCLEtBQUssRUFBSztFQUVsQyxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFxQixnQkFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBK0MsZ0JBQzVEO0lBQUssU0FBUyxFQUFDO0VBQTRCLGdCQUN6QztJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsUUFBUTtJQUNSLFNBQVMsRUFBQyw4Q0FBOEM7SUFDeEQsRUFBRSxFQUFDLGVBQWU7SUFDbEIsS0FBSyxFQUFFQSxLQUFLLENBQUNJLElBQUksQ0FBQ29CO0VBQUssRUFDdkIsZUFDRjtJQUFPLE9BQU8sRUFBQyxlQUFlO0lBQUMsU0FBUyxFQUFDO0VBQTRCLGdCQUNuRTtJQUFHLFNBQVMsRUFBQztFQUFZLEVBQUssbUJBQ2hDLENBQVEsQ0FDSixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQTRCLGdCQUN6QztJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsUUFBUTtJQUNSLFNBQVMsRUFBQyw4Q0FBOEM7SUFDeEQsRUFBRSxFQUFDLFdBQVc7SUFDZCxLQUFLLEVBQUV4QixLQUFLLENBQUNJLElBQUksQ0FBQ3NCLEtBQUssQ0FBQ0Y7RUFBSyxFQUM3QixlQUNGO0lBQU8sT0FBTyxFQUFDLFdBQVc7SUFBQyxTQUFTLEVBQUM7RUFBNEIsZ0JBQy9EO0lBQUcsU0FBUyxFQUFDO0VBQWdCLEVBQUssOEJBQ3BDLENBQVEsQ0FDSixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQTRCLGdCQUN6QztJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsUUFBUTtJQUNSLFNBQVMsRUFBQyw4Q0FBOEM7SUFDeEQsRUFBRSxFQUFDLGVBQWU7SUFDbEIsS0FBSyxFQUFFeEIsS0FBSyxDQUFDSSxJQUFJLENBQUN1QixNQUFNLENBQUNaLE9BQU8sQ0FBQyxDQUFDO0VBQUUsRUFDcEMsZUFDRjtJQUFPLE9BQU8sRUFBQyxlQUFlO0lBQUMsU0FBUyxFQUFDO0VBQTRCLGdCQUNuRTtJQUFHLFNBQVMsRUFBQztFQUF1QixFQUFLLHVCQUMzQyxDQUFRLENBQ0osZUFDTDtJQUFLLFNBQVMsRUFBQztFQUE0QixnQkFDMUM7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLFFBQVE7SUFDUixTQUFTLEVBQUMsOENBQThDO0lBQ3hELEVBQUUsRUFBQyxVQUFVO0lBQ2IsS0FBSyxFQUFFZixLQUFLLENBQUNJLElBQUksQ0FBQ3dCLFlBQVksQ0FBQ2IsT0FBTyxDQUFDLENBQUM7RUFBRSxFQUMxQyxlQUNGO0lBQU8sT0FBTyxFQUFDLFVBQVU7SUFBQyxTQUFTLEVBQUM7RUFBNEIsZ0JBQzlEO0lBQUcsU0FBUyxFQUFDO0VBQWMsRUFBSyw2QkFBc0IsdUZBQUssR0FBQyxDQUFNLENBQzVELENBQ0osQ0FDRixDQUNGO0FBRVYsQ0FBQztBQUVELGlFQUFlVSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURMO0FBQ2tCO0FBQ25CO0FBRXpCLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUk3QixLQUFLLEVBQUs7RUFFNUIsZ0JBQW9DRixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXpDZ0MsVUFBVTtJQUFFQyxhQUFhO0VBQ2hDbEMsaURBQVMsQ0FBQyxZQUFNO0lBQ2RYLG1EQUFNLENBQUMsWUFBWSxDQUFDLENBQUNvQixJQUFJLENBQUMsVUFBQ2YsUUFBUSxFQUFLO01BQ3RDd0MsYUFBYSxDQUFDeEMsUUFBUSxDQUFDYSxJQUFJLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQW1CLGdCQUNoQztJQUNFLFFBQVEsRUFBRSxrQkFBQ0csQ0FBQyxFQUFLO01BQUNQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDc0IsVUFBVSxDQUFDdkIsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQUEsQ0FBRTtJQUM5RCxTQUFTLEVBQUMsNEJBQTRCO0lBQ3RDLEVBQUUsRUFBQztFQUFnQixnQkFFckI7SUFBUSxZQUFZLEVBQUU7RUFBSyxHQUFDLEtBQUcsQ0FBUyxFQUV0Q29CLFVBQVUsQ0FBQ25CLEdBQUcsQ0FBQyxVQUFDcUIsU0FBUyxFQUFFcEIsQ0FBQztJQUFBLG9CQUMxQjtNQUFRLEtBQUssRUFBRUEsQ0FBRTtNQUFDLEdBQUcsRUFBRW9CLFNBQVMsQ0FBQzNCO0lBQUcsR0FDakMyQixTQUFTLENBQUNSLElBQUksQ0FDUjtFQUFBLENBQ1YsQ0FBQyxDQUVLLGVBQ1Q7SUFBTyxPQUFPLEVBQUMsZ0JBQWdCO0lBQUMsU0FBUyxFQUFDO0VBQVMsZ0JBQ2pEO0lBQUcsU0FBUyxFQUFDO0VBQWMsRUFBSywyQkFDbEMsQ0FBUSxDQUNKO0FBRVYsQ0FBQztBQUVELGlFQUFlSyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQztBQUNPO0FBQ0c7QUFDbUI7QUFDakI7QUFDYztBQUNoQjtBQUNFO0FBQ1k7QUFFbEQsSUFBTTdDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsR0FBUztFQUU3QjtFQUNBLGdCQUFnRGMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUF2RHFDLGdCQUFnQjtJQUFFQyxtQkFBbUI7RUFDNUMsaUJBQXdCdEMsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUE3QnVDLElBQUk7SUFBRUMsT0FBTztFQUNwQixpQkFBa0N4QyxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQXpDeUMsU0FBUztJQUFFQyxZQUFZO0VBQzlCLGlCQUFrQzFDLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE7SUFBekNrQyxTQUFTO0lBQUVTLFlBQVk7RUFDOUIsaUJBQWdDM0MsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUF2Q3lCLFFBQVE7SUFBRW1CLFdBQVc7RUFDNUIsa0JBQXNENUMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUE3RDZDLG1CQUFtQjtJQUFFQyxzQkFBc0I7RUFDbEQsa0JBQWtDOUMsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUF6Q25CLFNBQVM7SUFBRWtFLFlBQVk7O0VBRTlCO0VBQ0EsSUFBTUMsSUFBSSxHQUFHLElBQUk1QixJQUFJLEVBQUU7RUFDdkI0QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDRSxPQUFPLEVBQUUsQ0FBQztFQUM1QixJQUFNQyxHQUFHLEdBQUdILElBQUksQ0FBQzNCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs7RUFFNUM7RUFDQSxJQUFNK0Isd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QixDQUFJM0MsQ0FBQyxFQUFLO0lBQ3RDNkIsbUJBQW1CLENBQUM3QixDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3JDLENBQUM7RUFFRCxJQUFNeUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSTVDLENBQUMsRUFBSztJQUMxQitCLE9BQU8sQ0FBQy9CLENBQUMsQ0FBQztFQUNaLENBQUM7RUFFRCxJQUFNNkMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQixDQUFJN0MsQ0FBQyxFQUFLO0lBQy9CaUMsWUFBWSxDQUFDakMsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUM5QixDQUFDO0VBRUQsSUFBTTJDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSTlDLENBQUMsRUFBSztJQUMvQmtDLFlBQVksQ0FBQ2xDLENBQUMsQ0FBQztFQUNqQixDQUFDO0VBRUQsSUFBTStDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBSS9DLENBQUMsRUFBSztJQUM5Qm1DLFdBQVcsQ0FBQ25DLENBQUMsQ0FBQztFQUNoQixDQUFDO0VBRUQsSUFBTWdELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSWhELENBQUMsRUFBSztJQUMvQnNDLFlBQVksQ0FBQ3RDLENBQUMsQ0FBQztFQUNqQixDQUFDO0VBRUQsSUFBTWlELFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlqRCxDQUFDLEVBQUs7SUFDMUJrRCxLQUFLLENBQUMsOEJBQThCLENBQUM7SUFDckNsRCxDQUFDLENBQUNtRCxjQUFjO0VBQ2xCLENBQUM7RUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0lBQ3hCdkIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBQ3pCRSxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ1hFLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDbEJDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDbEJDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakJFLHNCQUFzQixDQUFDLElBQUksQ0FBQztJQUM1QkMsWUFBWSxDQUFDLElBQUksQ0FBQztFQUNwQixDQUFDO0VBRUQsb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBUyxnQkFDdEI7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzdCO0lBQUssU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCO0lBQU0sUUFBUSxFQUFFVztFQUFhLGdCQUUzQjtJQUFLLFNBQVMsRUFBQztFQUFtQixnQkFDaEM7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLEVBQUUsRUFBQyxrQkFBa0I7SUFDckIsU0FBUyxFQUFDLDhCQUE4QjtJQUN4QyxZQUFZLEVBQUVQLEdBQUk7SUFDbEIsUUFBUSxFQUFFQztFQUF5QixFQUNuQyxlQUNGO0lBQU8sT0FBTyxFQUFDLGtCQUFrQjtJQUFDLFNBQVMsRUFBQztFQUFlLGdCQUN6RDtJQUFHLFNBQVMsRUFBQztFQUFzQixFQUFLLDJCQUMxQyxDQUFRLENBQ0osZUFDTiw0REFBQyxvREFBVTtJQUFDLFFBQVEsRUFBRUc7RUFBa0IsRUFBRyxFQUN6Q3JCLFNBQVMsaUJBQ1AsNERBQUMsMERBQWdCO0lBQUMsSUFBSSxFQUFFQTtFQUFVLEVBQUcsZUFFekMsNERBQUMsMkRBQWlCO0lBQUMsUUFBUSxFQUFFbUI7RUFBYSxFQUFHLEVBQzNDZCxJQUFJLElBQUlBLElBQUksQ0FBQ2IsSUFBSSxLQUFLLE9BQU8saUJBQzNCLDREQUFDLG1EQUFTO0lBQUMsUUFBUSxFQUFFNEI7RUFBa0IsRUFBRyxlQUU5Qyw0REFBQyxtREFBUztJQUFDLFFBQVEsRUFBRUU7RUFBaUIsRUFBRyxFQUN2Qy9CLFFBQVEsaUJBQ1IsNERBQUMsNkRBQW1CO0lBQUMsSUFBSSxFQUFFQTtFQUFTLEVBQUcsRUFFdkNTLFNBQVMsaUJBQ1QsNERBQUMsb0RBQVU7SUFDVCxJQUFJLEVBQUVBLFNBQVMsQ0FBQ04sS0FBTTtJQUN0QixRQUFRLEVBQUU2QjtFQUFrQixFQUM1QixlQUVKO0lBQUssU0FBUyxFQUFDO0VBQWtFLGdCQUMvRSxzRkFDRTtJQUFRLFNBQVMsRUFBQyx3QkFBd0I7SUFBQyxJQUFJLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRUk7RUFBWSxHQUFDLFNBQU8sQ0FBUyxDQUMxRixlQUNOLHNGQUNFO0lBQVEsU0FBUyxFQUFDLHVCQUF1QjtJQUFDLElBQUksRUFBQztFQUFRLEdBQUMsYUFBVyxDQUFTLENBQ3hFLENBQ0YsQ0FDRCxDQUNILENBQ0YsQ0FDRjtBQUVWLENBQUM7QUFFRCxpRUFBZTNFLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEw7QUFDa0I7QUFDbkI7QUFFekIsSUFBTWlELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSWpDLEtBQUssRUFBSztFQUVuQyxnQkFBMEJGLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0I4RCxLQUFLO0lBQUVDLFFBQVE7RUFDdEJoRSxpREFBUyxDQUFDLFlBQU07SUFDZFgsbURBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb0IsSUFBSSxDQUFDLFVBQUNmLFFBQVEsRUFBSztNQUMvQ3NFLFFBQVEsQ0FBQ3RFLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFtQixnQkFDaEM7SUFDRSxRQUFRLEVBQUUsa0JBQUNHLENBQUMsRUFBSztNQUFDUCxLQUFLLENBQUNRLFFBQVEsQ0FBQ29ELEtBQUssQ0FBQ3JELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUFBLENBQUU7SUFDekQsU0FBUyxFQUFDLDRCQUE0QjtJQUN0QyxFQUFFLEVBQUM7RUFBVyxnQkFFaEI7SUFBUSxZQUFZLEVBQUU7RUFBSyxHQUFDLEtBQUcsQ0FBUyxFQUV0Q2tELEtBQUssQ0FBQ2pELEdBQUcsQ0FBQyxVQUFDMEIsSUFBSSxFQUFFekIsQ0FBQztJQUFBLG9CQUNoQjtNQUFRLEtBQUssRUFBRUEsQ0FBRTtNQUFDLEdBQUcsRUFBRXlCLElBQUksQ0FBQ2hDO0lBQUcsR0FDNUJnQyxJQUFJLENBQUNiLElBQUksQ0FDSDtFQUFBLENBQ1YsQ0FBQyxDQUVLLGVBQ1Q7SUFBTyxPQUFPLEVBQUMsV0FBVztJQUFDLFNBQVMsRUFBQztFQUFTLGdCQUM1QztJQUFHLFNBQVMsRUFBQztFQUEyQixFQUFLLDZCQUMvQyxDQUFRLENBQ0o7QUFFVixDQUFDO0FBRUQsaUVBQWVTLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTjs7QUFFMUI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFJbEMsS0FBSyxFQUFLO0VBRTNCLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2xCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxTQUFTLEVBQUMsOEJBQThCO0lBQ3hDLEVBQUUsRUFBQyx1QkFBdUI7SUFDMUIsV0FBVyxFQUFDLGdEQUE2QztJQUN6RCxRQUFRLEVBQUUsa0JBQUNPLENBQUMsRUFBSztNQUFDUCxLQUFLLENBQUNRLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDO0lBQUEsQ0FBRTtJQUNyQyxTQUFTO0VBQUEsRUFDVCxDQUNFO0FBRVYsQ0FBQztBQUVELGlFQUFlMkIsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0F4aW9zLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9Db250YWluZXJzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvckNvbnRyb2xEYXRlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9PdGhlclR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9qc3gvQXBwXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbnJvb3QucmVuZGVyKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0yXCI+XG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8QXBwIC8+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICA8L2Rpdj5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbnRlcnZlbnRpb25Gb3JtIGZyb20gXCIuL0ludGVydmVudGlvbkZvcm1cIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8aDI+RmljaGUgZCdpbnRlcnZlbnRpb248L2gyPlxuICAgICAgPEludGVydmVudGlvbkZvcm0gLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYW4gYXhpb3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBoZWFkZXJzXG5jb25zdCBheCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuLy8gQ2F0Y2ggdW5hdXRob3JpemVkIHJlcXVlc3QgYW5kIHJlZGlyZWN0IGlmIGVycm9yXG5heC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4gcmVzcG9uc2UsIChlcnJvcikgPT4ge1xuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IENvbnRhaW5lcnMgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IFtjb250YWluZXJzLCBzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9jb250YWluZXJzQnlGbHVpZC8nICsgcHJvcHMuZGF0YS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldENvbnRhaW5lcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShjb250YWluZXJzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiY29udGFpbmVyTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBjb250YWluZXJzLm1hcCgoY29udGFpbmVyLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtjb250YWluZXIuaWR9PlxuICAgICAgICAgICAge2NvbnRhaW5lci5zZXJpYWxOdW1iZXJ9IC0tIENhcGFjaXTDqToge2NvbnRhaW5lci5jYXBhY2l0eS50b0ZpeGVkKDIpfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhaW5lckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm90dGxlLWRyb3BsZXRcIj48L2k+IENvbnRlbmFudFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEZXRlY3RvckNvbnRyb2xEYXRlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY29udHJvbERhdGUgPSBuZXcgRGF0ZShwcm9wcy5kYXRhLmNvbnRyb2xEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1mclwiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yQ29udHJvbERhdGVcIlxuICAgICAgICB2YWx1ZT17Y29udHJvbERhdGV9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsaXBib2FyZC1jaGVja1wiPjwvaT4gRGF0ZSBkZSBjb250csO0bGVcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JDb250cm9sRGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBEZXRlY3RvcnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZGV0ZWN0b3JzLCBzZXREZXRlY3RvcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9kZXRlY3RvcnNcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldERldGVjdG9ycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZGV0ZWN0b3JzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGRldGVjdG9ycy5tYXAoKGRldGVjdG9yLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtkZXRlY3Rvci5pZH0+XG4gICAgICAgICAgICB7ZGV0ZWN0b3IubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tcGFzc1wiPjwvaT4gRMOpdGVjdGV1ciBkZSBmdWl0ZXNcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFcXVpcG1lbnREZXRhaWxzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0xIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICBpZD1cImVxdWlwbWVudE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TmFtZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFnXCI+PC9pPiBJZGVudGlmaWNhdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuZmx1aWQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBEw6lub21pbmF0aW9uIGR1IGZsdWlkZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLndlaWdodC50b0ZpeGVkKDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13ZWlnaHQtaGFuZ2luZ1wiPjwvaT4gQ2hhcmdlIHRvdGFsZSAoa2cpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZENPMlwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5jbzJFcVRvbm5hZ2UudG9GaXhlZCgyKX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsdWlkQ08yXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZFwiPjwvaT4gVG9ubmFnZSDDqXF1aXZhbGVudCBDMDxzdWI+Mjwvc3ViPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50RGV0YWlscztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBFcXVpcG1lbnRzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2VxdWlwbWVudHMsIHNldEVxdWlwbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9lcXVpcG1lbnRcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldEVxdWlwbWVudHMocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZXF1aXBtZW50c1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImVxdWlwbWVudExhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZXF1aXBtZW50cy5tYXAoKGVxdWlwbWVudCwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17ZXF1aXBtZW50LmlkfT5cbiAgICAgICAgICAgIHtlcXVpcG1lbnQubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnRMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdlYXJzXCI+PC9pPiBFcXVpcGVtZW50IGNvbmNlcm7DqVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEZXRlY3RvcnMgZnJvbSBcIi4vRGV0ZWN0b3JzXCI7XG5pbXBvcnQgRGV0ZWN0b3JDb250cm9sRGF0ZSBmcm9tIFwiLi9EZXRlY3RvckNvbnRyb2xEYXRlXCJcbmltcG9ydCBFcXVpcG1lbnRzIGZyb20gXCIuL0VxdWlwbWVudHNcIjtcbmltcG9ydCBJbnRlcnZlbnRpb25UeXBlcyBmcm9tIFwiLi9JbnRlcnZlbnRpb25UeXBlc1wiO1xuaW1wb3J0IE90aGVyVHlwZSBmcm9tIFwiLi9PdGhlclR5cGVcIjtcbmltcG9ydCBDb250YWluZXJzIGZyb20gXCIuL0NvbnRhaW5lcnNcIjtcbmltcG9ydCBFcXVpcG1lbnREZXRhaWxzIGZyb20gXCIuL0VxdWlwbWVudERldGFpbHNcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uRm9ybSA9ICgpID0+IHtcblxuICAvLyBTdGF0ZXNcbiAgY29uc3QgW2ludGVydmVudGlvbkRhdGUsIHNldEludGVydmVudGlvbkRhdGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3RoZXJUeXBlLCBzZXRPdGhlclR5cGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcXVpcG1lbnQsIHNldEVxdWlwbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RldGVjdG9yLCBzZXREZXRlY3Rvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RldGVjdG9yQ29udHJvbERhdGUsIHNldERldGVjdG9yQ29udHJvbERhdGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250YWluZXIsIHNldENvbnRhaW5lcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBDdXJyZW50IGRhdGVcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XG4gIGNvbnN0IG5vdyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItQ0FcIik7XG4gIFxuICAvLyBFdmVudHNcbiAgY29uc3Qgb25JbnRlcnZlbnRpb25EYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnRlcnZlbnRpb25EYXRlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VHlwZShlKTtcbiAgfVxuXG4gIGNvbnN0IG9uT3RoZXJUeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRPdGhlclR5cGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcXVpcG1lbnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEVxdWlwbWVudChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRGV0ZWN0b3JDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldERldGVjdG9yKGUpO1xuICB9XG5cbiAgY29uc3Qgb25Db250YWluZXJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRhaW5lcihlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgYWxlcnQoXCJUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQhXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRJbnRlcnZlbnRpb25EYXRlKG51bGwpO1xuICAgIHNldFR5cGUoXCJcIik7XG4gICAgc2V0T3RoZXJUeXBlKG51bGwpO1xuICAgIHNldEVxdWlwbWVudChudWxsKTtcbiAgICBzZXREZXRlY3RvcihudWxsKTtcbiAgICBzZXREZXRlY3RvckNvbnRyb2xEYXRlKG51bGwpO1xuICAgIHNldENvbnRhaW5lcihudWxsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICB7Lyoge2VxdWlwbWVudD8ubmFtZX0gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICBpZD1cImludGVydmVudGlvbkRhdGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm93fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkludGVydmVudGlvbkRhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsZW5kYXItZGF5c1wiPjwvaT4gRGF0ZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RXF1aXBtZW50cyBvbkNoYW5nZT17b25FcXVpcG1lbnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICAgIDxFcXVpcG1lbnREZXRhaWxzIGRhdGE9e2VxdWlwbWVudH0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxJbnRlcnZlbnRpb25UeXBlcyBvbkNoYW5nZT17b25UeXBlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgeyB0eXBlICYmIHR5cGUubmFtZSA9PT0gXCJBdXRyZVwiICAmJlxuICAgICAgICAgICAgICAgIDxPdGhlclR5cGUgb25DaGFuZ2U9e29uT3RoZXJUeXBlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPERldGVjdG9ycyBvbkNoYW5nZT17b25EZXRlY3RvckNoYW5nZX0gLz5cbiAgICAgICAgICAgIHsgZGV0ZWN0b3IgJiZcbiAgICAgICAgICAgICAgPERldGVjdG9yQ29udHJvbERhdGUgZGF0YT17ZGV0ZWN0b3J9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8Q29udGFpbmVyc1xuICAgICAgICAgICAgICAgIGRhdGE9e2VxdWlwbWVudC5mbHVpZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db250YWluZXJDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtLTJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXdhcm5pbmdcIiB0eXBlPVwicmVzZXRcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+QW5udWxlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25UeXBlcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2ludGVydmVudGlvbl90eXBlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRUeXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UodHlwZXNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJ0eXBlTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICB0eXBlcy5tYXAoKHR5cGUsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e3R5cGUuaWR9PlxuICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zY3Jld2RyaXZlci13cmVuY2hcIj48L2k+IE5hdHVyZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25UeXBlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gSW5wdXQgdGV4dCBmb3IgXCJvdGhlclwiIGludGVydmVudGlvbiB0eXBlXG5jb25zdCBPdGhlclR5cGUgPSAocHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVmV1aWxsZXogcHLDqWNpc2VyIGxlIHR5cGUgZCdpbnRlcnZlbnRpb24uLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlclR5cGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJJbnRlcnZlbnRpb25Gb3JtIiwiYXhpb3MiLCJheCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXJzIiwicHJvcHMiLCJjb250YWluZXJzIiwic2V0Q29udGFpbmVycyIsImdldCIsImRhdGEiLCJpZCIsInRoZW4iLCJlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImkiLCJzZXJpYWxOdW1iZXIiLCJjYXBhY2l0eSIsInRvRml4ZWQiLCJEZXRlY3RvckNvbnRyb2xEYXRlIiwiY29udHJvbERhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiRGV0ZWN0b3JzIiwiZGV0ZWN0b3JzIiwic2V0RGV0ZWN0b3JzIiwiZGV0ZWN0b3IiLCJuYW1lIiwiRXF1aXBtZW50RGV0YWlscyIsImZsdWlkIiwid2VpZ2h0IiwiY28yRXFUb25uYWdlIiwiRXF1aXBtZW50cyIsImVxdWlwbWVudHMiLCJzZXRFcXVpcG1lbnRzIiwiZXF1aXBtZW50IiwiSW50ZXJ2ZW50aW9uVHlwZXMiLCJPdGhlclR5cGUiLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwic2V0RXF1aXBtZW50Iiwic2V0RGV0ZWN0b3IiLCJkZXRlY3RvckNvbnRyb2xEYXRlIiwic2V0RGV0ZWN0b3JDb250cm9sRGF0ZSIsInNldENvbnRhaW5lciIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm5vdyIsIm9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSIsIm9uVHlwZUNoYW5nZSIsIm9uT3RoZXJUeXBlQ2hhbmdlIiwib25FcXVpcG1lbnRDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25Db250YWluZXJDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJhbGVydCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlUmVzZXQiLCJ0eXBlcyIsInNldFR5cGVzIl0sInNvdXJjZVJvb3QiOiIifQ==