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
  }, "------"), containers.map(function (container, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("option", {
      value: i,
      key: container.id
    }, container.serialNumber, " -- ", container.fluidQuantity.toFixed(2), "/", container.capacity.toFixed(2));
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
    type: "text",
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
    type: "text",
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
    type: "text",
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
    type: "text",
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
    type: "text",
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
    type: "text",
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
    type: "text",
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./User */ "./react/jsx/User.js");
/* harmony import */ var _Detectors__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Detectors */ "./react/jsx/Detectors.js");
/* harmony import */ var _DetectorControlDate__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./DetectorControlDate */ "./react/jsx/DetectorControlDate.js");
/* harmony import */ var _Equipment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Equipment */ "./react/jsx/Equipment.js");
/* harmony import */ var _InterventionTypes__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./InterventionTypes */ "./react/jsx/InterventionTypes.js");
/* harmony import */ var _OtherType__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./OtherType */ "./react/jsx/OtherType.js");
/* harmony import */ var _Leakage__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Leakage */ "./react/jsx/Leakage.js");
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Containers */ "./react/jsx/Containers.js");
/* harmony import */ var _EquipmentDetails__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./EquipmentDetails */ "./react/jsx/EquipmentDetails.js");
/* harmony import */ var _FluidHandling__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./FluidHandling */ "./react/jsx/FluidHandling.js");
/* harmony import */ var _Wastes__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Wastes */ "./react/jsx/Wastes.js");
/* harmony import */ var _FluidDestination__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./FluidDestination */ "./react/jsx/FluidDestination.js");
/* harmony import */ var _Remarks__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Remarks */ "./react/jsx/Remarks.js");
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(now),
    _useState2 = _slicedToArray(_useState, 2),
    interventionDate = _useState2[0],
    setInterventionDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    equipment = _useState4[0],
    setEquipment = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    otherType = _useState8[0],
    setOtherType = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    detector = _useState10[0],
    setDetector = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    leakLocations = _useState12[0],
    setLeakLocations = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    leakFixed = _useState14[0],
    setLeakFixed = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)({
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'BSFF': ''
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    fluidQuantities = _useState16[0],
    setFluidQuantities = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    container = _useState18[0],
    setContainer = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    fluidDestination = _useState20[0],
    setFluidDestination = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    remarks = _useState22[0],
    setRemarks = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    pdfPath = _useState24[0],
    setPdfPath = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    leaksPosted = _useState26[0],
    setLeaksPosted = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    formError = _useState28[0],
    setFormError = _useState28[1];
  // const [updateKey, setUpdateKey] = useState(false);

  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    if (leaksPosted) {
      window.open(pdfPath, '_blank');
      // window.location.reload();
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
    setType(e);
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
            return _Axios__WEBPACK_IMPORTED_MODULE_44__["default"].post('/leakages', leak)["catch"](function (error) {
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
    _Axios__WEBPACK_IMPORTED_MODULE_44__["default"].post('/interventions', intervention).then(function (response) {
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
  var mustInstall = function mustInstall() {
    return fluidQuantities.E > 0;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "section-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_User__WEBPACK_IMPORTED_MODULE_31__["default"], {
    data: window.user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("input", {
    type: "date",
    id: "interventionDate",
    className: "form-control form-control-sm",
    defaultValue: now,
    onChange: onInterventionDateChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("label", {
    htmlFor: "interventionDate",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("i", {
    className: "fas fa-calendar-days"
  }), " Date de l'intervention")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_Equipment__WEBPACK_IMPORTED_MODULE_34__["default"], {
    onChange: onEquipmentChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement((react__WEBPACK_IMPORTED_MODULE_30___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_EquipmentDetails__WEBPACK_IMPORTED_MODULE_39__["default"], {
    data: equipment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_InterventionTypes__WEBPACK_IMPORTED_MODULE_35__["default"], {
    onChange: onTypeChange,
    data: equipment.id
  })), (type === null || type === void 0 ? void 0 : type.name) === "Autre" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_OtherType__WEBPACK_IMPORTED_MODULE_36__["default"], {
    onChange: onOtherTypeChange
  }), type && type.name.startsWith('Contrôle') && !(equipment !== null && equipment !== void 0 && equipment.leakDetectionSystem) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_Detectors__WEBPACK_IMPORTED_MODULE_32__["default"], {
    onChange: onDetectorChange
  }), detector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_DetectorControlDate__WEBPACK_IMPORTED_MODULE_33__["default"], {
    data: detector
  }), (detector || (equipment === null || equipment === void 0 ? void 0 : equipment.leakDetectionSystem) && type && type.name.startsWith('Contrôle')) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_Leakage__WEBPACK_IMPORTED_MODULE_37__["default"], {
    onLocationChange: onLeakLocationChange,
    onFixedChange: onLeakFixedChange
  }), equipment && type && !type.name.startsWith('Contrôle') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement((react__WEBPACK_IMPORTED_MODULE_30___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_FluidHandling__WEBPACK_IMPORTED_MODULE_40__["default"], {
    onChange: onFluidQuantitiesChange,
    onError: onError
  }), (mustInstall() || fluidQuantities.D > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_Containers__WEBPACK_IMPORTED_MODULE_38__["default"], {
    data: equipment.fluid,
    onChange: onContainerChange
  }), fluidQuantities.D > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_Wastes__WEBPACK_IMPORTED_MODULE_41__["default"], {
    data: equipment.fluid.fluidType
  })), mustInstall() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_FluidDestination__WEBPACK_IMPORTED_MODULE_42__["default"], {
    onChange: onFluidDestinationChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_Remarks__WEBPACK_IMPORTED_MODULE_43__["default"], {
    onChange: onRemarksChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "d-flex d-flex-row align-items-center justify-content-between m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
    className: "btn btn-sm btn-warning",
    type: "reset",
    onClick: handleReset
  }, "Annuler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ba82d"], () => (__webpack_exec__("./react/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FDQTtBQUVWLENBQUM7QUFFRCxpRUFBZW9ELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQXBwLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQ29udGFpbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRGV0ZWN0b3JDb250cm9sRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRGV0ZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9FcXVpcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ZsdWlkSGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0ludGVydmVudGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9MZWFrYWdlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9PdGhlclR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1JlbWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L1dhc3Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbi8vIGltcG9ydCBcIi4vY3NzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2pzeC9BcHBcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG5pZiAoY29udGFpbmVyKSB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbiAgcm9vdC5yZW5kZXIoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMlwiPlxuICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8L2Rpdj5cbik7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbnRlcnZlbnRpb25Gb3JtIGZyb20gXCIuL0ludGVydmVudGlvbkZvcm1cIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8aDI+RmljaGUgZCdpbnRlcnZlbnRpb248L2gyPlxuICAgICAgPEludGVydmVudGlvbkZvcm0gLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYW4gYXhpb3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBoZWFkZXJzXG5jb25zdCBheCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gIH0sXG59KTtcblxuLy8gQ2F0Y2ggdW5hdXRob3JpemVkIHJlcXVlc3QgYW5kIHJlZGlyZWN0IGlmIGVycm9yXG5heC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4gcmVzcG9uc2UsIChlcnJvcikgPT4ge1xuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSAnL2xvZ2luJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IENvbnRhaW5lcnMgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IFtjb250YWluZXJzLCBzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9jb250YWluZXJzQnlGbHVpZC8nICsgcHJvcHMuZGF0YS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldENvbnRhaW5lcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShjb250YWluZXJzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiY29udGFpbmVyTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBjb250YWluZXJzLm1hcCgoY29udGFpbmVyLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtjb250YWluZXIuaWR9PlxuICAgICAgICAgICAge2NvbnRhaW5lci5zZXJpYWxOdW1iZXJ9IC0tIHtjb250YWluZXIuZmx1aWRRdWFudGl0eS50b0ZpeGVkKDIpfS97Y29udGFpbmVyLmNhcGFjaXR5LnRvRml4ZWQoMil9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFpbmVyTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3R0bGUtZHJvcGxldFwiPjwvaT4gQ29udGVuYW50XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERldGVjdG9yQ29udHJvbERhdGUgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjb250cm9sRGF0ZSA9IG5ldyBEYXRlKHByb3BzLmRhdGEuY29udHJvbERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLWZyXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiXG4gICAgICAgIHZhbHVlPXtjb250cm9sRGF0ZX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yQ29udHJvbERhdGVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xpcGJvYXJkLWNoZWNrXCI+PC9pPiBEYXRlIGR1IGRlcm5pZXIgY29udHLDtGxlICh7cHJvcHMuZGF0YS5uYW1lfSlcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JDb250cm9sRGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBEZXRlY3RvcnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZGV0ZWN0b3JzLCBzZXREZXRlY3RvcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9kZXRlY3RvcnNcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldERldGVjdG9ycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZGV0ZWN0b3JzW2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZGV0ZWN0b3JMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGRldGVjdG9ycy5tYXAoKGRldGVjdG9yLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtkZXRlY3Rvci5pZH0+XG4gICAgICAgICAgICB7ZGV0ZWN0b3IubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29tcGFzc1wiPjwvaT4gRMOpdGVjdGV1ciBkZSBmdWl0ZXNcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0ZWN0b3JzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEVxdWlwbWVudCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtlcXVpcG1lbnQsIHNldEVxdWlwbWVudF0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2VxdWlwbWVudFwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RXF1aXBtZW50KHJlc3BvbnNlLmRhdGEpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGVxdWlwbWVudFtlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImVxdWlwbWVudExhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZXF1aXBtZW50Lm1hcCgoZ2VhciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17Z2Vhci5pZH0+XG4gICAgICAgICAgICB7Z2Vhci5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudExhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZ2VhcnNcIj48L2k+IEVxdWlwZW1lbnQgY29uY2VybsOpXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRXF1aXBtZW50RGV0YWlscyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMSBtYi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZmxleCBmbGV4LW1kLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZXF1aXBtZW50TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+IElkZW50aWZpY2F0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuZmx1aWQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBEw6lub21pbmF0aW9uIGR1IGZsdWlkZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS53ZWlnaHQudG9GaXhlZCgyKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2VpZ2h0LWhhbmdpbmdcIj48L2k+IENoYXJnZSB0b3RhbGUgKGtnKVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkQ08yXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLmNvMkVxVG9ubmFnZS50b0ZpeGVkKDIpfSBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRDTzJcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkXCI+PC9pPiBUb25uYWdlIMOpcXVpdmFsZW50IEMwPHN1Yj4yPC9zdWI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtdC0xXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICBpZD1cImxlYWtEZXRlY3Rpb25TeXN0ZW1cIlxuICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLmRhdGEubGVha0RldGVjdGlvblN5c3RlbX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsZWFrRGV0ZWN0aW9uU3lzdGVtXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZFwiPjwvaT4gUHLDqXNlbmNlIGQndW4gc3lzdMOobWUgcGVybWFuZW50IGRlIGTDqXRlY3Rpb24gZGUgZnVpdGVzXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnREZXRhaWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZERlc3RpbmF0aW9uID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtLTJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgPlxuICAgICAgICBJbnN0YWxsYXRpb24gcHLDqXZ1ZSBkZSBkZXN0aW5hdGlvbiBkdSBmbHVpZGUgcsOpY3Vww6lyw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBpZD1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOb20sIFNJUkVULCBhZHJlc3NlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkRGVzdGluYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgJ3JlYWN0LXRvb2x0aXAvZGlzdC9yZWFjdC10b29sdGlwLmNzcyc7XG5cbmNvbnN0IEZsdWlkSGFuZGxpbmcgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZmx1aWRRdWFudGl0aWVzLCBzZXRGbHVpZFF1YW50aXRpZXNdID0gdXNlU3RhdGUoe1xuICAgICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnXG4gIH0pO1xuICBjb25zdCBbc3VtQUJDLCBzZXRTdW1BQkNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1ERSwgc2V0U3VtREVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbHVpZExvYWRpbmcsIHNldEZsdWlkTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmbHVpZENvbGxlY3RpbmcsIHNldEZsdWlkQ29sbGVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25GbHVpZEFDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBBID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBBOiBBXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIGxldCBzdW0gPSBmbHVpZFF1YW50aXRpZXMuQSArIGZsdWlkUXVhbnRpdGllcy5CICsgZmx1aWRRdWFudGl0aWVzLkM7XG4gICAgaWYgKCFpc05hTihzdW0pKSB7XG4gICAgICBzZXRTdW1BQkMoQStmbHVpZFF1YW50aXRpZXMuQitmbHVpZFF1YW50aXRpZXMuQyk7XG4gICAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25GbHVpZEJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBCID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBCOiBCXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bUFCQyhmbHVpZFF1YW50aXRpZXNbJ0EnXStCK2ZsdWlkUXVhbnRpdGllc1snQyddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQ0NoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEMgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEM6IENcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtQUJDKGZsdWlkUXVhbnRpdGllc1snQSddK2ZsdWlkUXVhbnRpdGllc1snQiddK0MpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgRCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgRDogRFxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1ERShEK2ZsdWlkUXVhbnRpdGllc1snRSddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEU6IEVcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtREUoZmx1aWRRdWFudGl0aWVzWydEJ10rRSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25Cc2ZmQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBCU0ZGOiBlLnRhcmdldC52YWx1ZVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkxvYWRpbmdDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWRMb2FkaW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEE6IDAsXG4gICAgICAgIEI6IDAsXG4gICAgICAgIEM6IDAsXG4gICAgICB9XG4gICAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uQ29sbGVjdGluZ0NsaWNrID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY29sbGVjJywgZSk7XG4gICAgc2V0Rmx1aWRDb2xsZWN0aW5nKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbGV0IGZxID0ge1xuICAgICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICAgIEQ6IDAsXG4gICAgICAgIEJTRkY6ICcnLFxuICAgICAgICBFOiAwLFxuICAgICAgfVxuICAgICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBiZy1zZWNvbmRhcnkgdGV4dC1saWdodCByb3VuZGVkIG14LWF1dG8gcC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBNYW5pcHVsYXRpb24gZHUgZmx1aWRlIGZyaWdvcmlnw6huZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIGlkPVwibG9hZGluZ0ZsdWlkXCIgb25DbGljaz17KGUpID0+IHtvbkxvYWRpbmdDbGljayhlKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwibG9hZGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtbG9hZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtbG9hZFwiIGNvbnRlbnQ9XCJDaGFyZ2VtZW50XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiBpZD1cImNvbGxlY3RpbmdGbHVpZFwiIG9uQ2xpY2s9eyhlKSA9PiB7b25Db2xsZWN0aW5nQ2xpY2soZSl9fSAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJvcmRlci0wIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RpbmdGbHVpZFwiXG4gICAgICAgICAgICBpZD1cInR0LWNvbGxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLXVwXCI+PC9pPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC1jb2xsZWN0XCIgY29udGVudD1cIlLDqWN1cMOpcmF0aW9uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBoaWRkZW49eyFmbHVpZExvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICB2YWx1ZT17c3VtQUJDfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWxMb2FkZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi1kb3duXCI+PC9pPiBRdWFudGl0w6kgdG90YWxlIGNoYXJnw6llIDxzdXA+KEErQitDKTwvc3VwPjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwidmlyZ2luRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEFDaGFuZ2V9XG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmlyZ2luRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQSk8L3N1cD4gRG9udCBmbHVpZGUgdmllcmdlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEJDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEIpPC9zdXA+IERvbnQgZmx1aWRlIHJlY3ljbMOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZENDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdlbmVyYXRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEMpPC9zdXA+IERvbnQgZmx1aWRlIHLDqWfDqW7DqXLDqVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBoaWRkZW49eyFmbHVpZENvbGxlY3Rpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJ0b3RhbFJldHJpZXZlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICB2YWx1ZT17c3VtREV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbFJldHJpZXZlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLXVwXCI+PC9pPiBRdWFudGl0w6kgdG90YWxlIHLDqWN1cMOpcsOpZSA8c3VwPihEK0UpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWREQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEQpPC9zdXA+IERvbnQgZmx1aWRlIGRlc3RpbsOpIGF1IHRyYWl0ZW1lbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwiYnNmZk51bWJlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkJzZmZDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJic2ZmTnVtYmVyXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICBOdW3DqXJvIGR1IEJTRkYgKHNpIGNvbm51KVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRFQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmV1c2FibGVGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihFKTwvc3VwPiBEb250IGZsdWlkZSBjb25zZXJ2w6kgcG91ciByw6l1dGlsaXNhdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbHVpZEhhbmRsaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IERldGVjdG9ycyBmcm9tIFwiLi9EZXRlY3RvcnNcIjtcbmltcG9ydCBEZXRlY3RvckNvbnRyb2xEYXRlIGZyb20gXCIuL0RldGVjdG9yQ29udHJvbERhdGVcIlxuaW1wb3J0IEVxdWlwbWVudCBmcm9tIFwiLi9FcXVpcG1lbnRcIjtcbmltcG9ydCBJbnRlcnZlbnRpb25UeXBlcyBmcm9tIFwiLi9JbnRlcnZlbnRpb25UeXBlc1wiO1xuaW1wb3J0IE90aGVyVHlwZSBmcm9tIFwiLi9PdGhlclR5cGVcIjtcbmltcG9ydCBMZWFrYWdlIGZyb20gXCIuL0xlYWthZ2VcIjtcbmltcG9ydCBDb250YWluZXJzIGZyb20gXCIuL0NvbnRhaW5lcnNcIjtcbmltcG9ydCBFcXVpcG1lbnREZXRhaWxzIGZyb20gXCIuL0VxdWlwbWVudERldGFpbHNcIjtcbmltcG9ydCBGbHVpZEhhbmRsaW5nIGZyb20gXCIuL0ZsdWlkSGFuZGxpbmdcIjtcbmltcG9ydCBXYXN0ZXMgZnJvbSBcIi4vV2FzdGVzXCI7XG5pbXBvcnQgRmx1aWREZXN0aW5hdGlvbiBmcm9tIFwiLi9GbHVpZERlc3RpbmF0aW9uXCI7XG5pbXBvcnQgUmVtYXJrcyBmcm9tIFwiLi9SZW1hcmtzXCI7XG5cbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25Gb3JtID0gKCkgPT4ge1xuXG4gIC8vIEN1cnJlbnQgZGF0ZVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgY29uc3Qgbm93ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1DQVwiKTtcbiAgXG4gIC8vIFN0YXRlc1xuICBjb25zdCBbaW50ZXJ2ZW50aW9uRGF0ZSwgc2V0SW50ZXJ2ZW50aW9uRGF0ZV0gPSB1c2VTdGF0ZShub3cpO1xuICBjb25zdCBbZXF1aXBtZW50LCBzZXRFcXVpcG1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb3RoZXJUeXBlLCBzZXRPdGhlclR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkZXRlY3Rvciwgc2V0RGV0ZWN0b3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsZWFrTG9jYXRpb25zLCBzZXRMZWFrTG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xlYWtGaXhlZCwgc2V0TGVha0ZpeGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZsdWlkUXVhbnRpdGllcywgc2V0Rmx1aWRRdWFudGl0aWVzXSA9IHVzZVN0YXRlKHtcbiAgICAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ1xuICB9KTtcbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZmx1aWREZXN0aW5hdGlvbiwgc2V0Rmx1aWREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlbWFya3MsIHNldFJlbWFya3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZGZQYXRoLCBzZXRQZGZQYXRoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGVha3NQb3N0ZWQsIHNldExlYWtzUG9zdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Zvcm1FcnJvciwgc2V0Rm9ybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VwZGF0ZUtleSwgc2V0VXBkYXRlS2V5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsZWFrc1Bvc3RlZCkge1xuICAgICAgd2luZG93Lm9wZW4ocGRmUGF0aCwgJ19ibGFuaycpO1xuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gRXZlbnRzXG4gIFxuICBjb25zdCBvbkludGVydmVudGlvbkRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEludGVydmVudGlvbkRhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcXVpcG1lbnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGhhbmRsZVJlc2V0KCk7XG4gICAgc2V0RXF1aXBtZW50KGUpO1xuICB9XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUeXBlKGUpO1xuICB9XG5cbiAgY29uc3Qgb25PdGhlclR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE90aGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkRldGVjdG9yQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXREZXRlY3RvcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0xvY2F0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRMZWFrTG9jYXRpb25zKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrRml4ZWRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtGaXhlZChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgc3VtQUJDID0gZS5BICsgZS5CICsgZS5DO1xuICAgIGxldCBzdW1ERSA9IGUuRCArIGUuQjtcbiAgICBzZXRGb3JtRXJyb3IoaXNOYU4oc3VtQUJDKSB8fCBpc05hTihzdW1ERSkpO1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhlKTtcbiAgfVxuXG4gIGNvbnN0IG9uQ29udGFpbmVyQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRDb250YWluZXIoZSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEZsdWlkRGVzdGluYXRpb24oZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25SZW1hcmtzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRSZW1hcmtzKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3JTdGF0ZSkgPT4ge1xuICAgIHNldEZvcm1FcnJvcihlcnJvclN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IHBvc3RMZWFrcyA9IGFzeW5jIChpbnRlcnZlbnRpb25JRCkgPT4ge1xuICAgIC8vIFBPU1QgbGVha3Mgb25lIGJ5IG9uZVxuICAgIGxldCBjb3VudCA9IGxlYWtMb2NhdGlvbnMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyAgaSA8IGxlYWtMb2NhdGlvbnMubGVuZ3RoOyAgaSsrKSB7XG4gICAgICBsZXQgbGVhayA9IHtcbiAgICAgICAgXCJudW1cIjogaSsxLFxuICAgICAgICBcImNvdW50XCI6IGNvdW50LFxuICAgICAgICBcImxvY2F0aW9uXCI6IGxlYWtMb2NhdGlvbnNbaV0sXG4gICAgICAgIFwiZml4ZWRcIjogbGVha0ZpeGVkW2ldLFxuICAgICAgICBcImludGVydmVudGlvblwiOiBcIi9hcGkvaW50ZXJ2ZW50aW9ucy9cIiArIGludGVydmVudGlvbklELFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBheC5wb3N0KCcvbGVha2FnZXMnLFxuICAgICAgICBsZWFrXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBsZWFrYWdlIFBPU1QnLCBlcnJvcik7XG4gICAgICAgIHJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICAgIHNldExlYWtzUG9zdGVkKHRydWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGludGVydmVudGlvbiA9IHtcbiAgICAgIFwiZGF0ZVwiOiBpbnRlcnZlbnRpb25EYXRlLFxuICAgICAgXCJ2aXJnaW5GbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5BLFxuICAgICAgXCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkIsXG4gICAgICBcInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQyxcbiAgICAgIFwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkQsXG4gICAgICBcImJzZmZOdW1iZXJcIjogZmx1aWRRdWFudGl0aWVzLkJTRkYsXG4gICAgICBcInJldXNhYmxlRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuRSxcbiAgICAgIFwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiOiBmbHVpZERlc3RpbmF0aW9uLFxuICAgICAgXCJyZW1hcmtzXCI6IHJlbWFya3MsXG4gICAgICBcImludGVydmVudGlvblR5cGVcIjogXCIvYXBpL2ludGVydmVudGlvbl90eXBlcy9cIiArIHR5cGUuaWQsXG4gICAgICBcIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiOiBvdGhlclR5cGUsXG4gICAgICBcImVxdWlwbWVudFwiOiBcIi9hcGkvZXF1aXBtZW50L1wiICsgZXF1aXBtZW50LmlkLFxuICAgICAgXCJjb250YWluZXJcIjogY29udGFpbmVyP1wiL2FwaS9jb250YWluZXJzL1wiICsgY29udGFpbmVyLmlkOm51bGwsXG4gICAgICBcImRldGVjdG9yXCI6IGRldGVjdG9yP1wiL2FwaS9kZXRlY3RvcnMvXCIgKyBkZXRlY3Rvci5pZDpudWxsLFxuICAgICAgXCJ1c2VyXCI6IFwiL2FwaS91c2Vycy9cIiArIHdpbmRvdy51c2VyLFxuICAgICAgXCJwZGZQYXRoXCI6IFwiXCIsXG4gICAgfTtcblxuICAgIC8vIFBPU1QgaW50ZXJ2ZW50aW9uXG4gICAgYXgucG9zdCgnL2ludGVydmVudGlvbnMnLFxuICAgICAgaW50ZXJ2ZW50aW9uXG4gICAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gUE9TVCBsZWFrc1xuICAgICAgcG9zdExlYWtzKHJlc3BvbnNlLmRhdGEuaWQpO1xuICAgICAgc2V0UGRmUGF0aChyZXNwb25zZS5kYXRhLnBkZlBhdGgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0RXF1aXBtZW50KG51bGwpO1xuICAgIHNldFR5cGUobnVsbCk7XG4gICAgc2V0T3RoZXJUeXBlKFwiXCIpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICAgIHNldExlYWtMb2NhdGlvbnMoW10pO1xuICAgIHNldExlYWtGaXhlZChbXSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKHsgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJyd9KTtcbiAgICBzZXRDb250YWluZXIobnVsbCk7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihcIlwiKTtcbiAgICBzZXRSZW1hcmtzKFwiXCIpO1xuICAgIHNldFBkZlBhdGgoXCJcIik7XG4gICAgc2V0TGVha3NQb3N0ZWQoZmFsc2UpO1xuICAgIHNldEZvcm1FcnJvcihmYWxzZSk7XG4gIH1cblxuICBjb25zdCBtdXN0SW5zdGFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gZmx1aWRRdWFudGl0aWVzLkUgPiAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8VXNlciBkYXRhPXt3aW5kb3cudXNlcn0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnRlcnZlbnRpb25EYXRlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25vd31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnRlcnZlbnRpb25EYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludGVydmVudGlvbkRhdGVcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbGVuZGFyLWRheXNcIj48L2k+IERhdGUgZGUgbCdpbnRlcnZlbnRpb25cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVxdWlwbWVudCBvbkNoYW5nZT17b25FcXVpcG1lbnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxFcXVpcG1lbnREZXRhaWxzIGRhdGE9e2VxdWlwbWVudH0gLz5cbiAgICAgICAgICAgICAgICA8SW50ZXJ2ZW50aW9uVHlwZXMgb25DaGFuZ2U9e29uVHlwZUNoYW5nZX0gZGF0YT17ZXF1aXBtZW50LmlkfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgdHlwZT8ubmFtZSA9PT0gXCJBdXRyZVwiICAmJlxuICAgICAgICAgICAgICAgIDxPdGhlclR5cGUgb25DaGFuZ2U9e29uT3RoZXJUeXBlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB0eXBlICYmIHR5cGUubmFtZS5zdGFydHNXaXRoKCdDb250csO0bGUnKSAmJiAhZXF1aXBtZW50Py5sZWFrRGV0ZWN0aW9uU3lzdGVtICYmXG4gICAgICAgICAgICAgIDxEZXRlY3RvcnMgb25DaGFuZ2U9e29uRGV0ZWN0b3JDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IGRldGVjdG9yICYmXG4gICAgICAgICAgICAgICAgPERldGVjdG9yQ29udHJvbERhdGUgZGF0YT17ZGV0ZWN0b3J9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IChkZXRlY3RvciB8fCAoZXF1aXBtZW50Py5sZWFrRGV0ZWN0aW9uU3lzdGVtICYmIHR5cGUgJiYgdHlwZS5uYW1lLnN0YXJ0c1dpdGgoJ0NvbnRyw7RsZScpKSkgJiZcbiAgICAgICAgICAgICAgICA8TGVha2FnZVxuICAgICAgICAgICAgICAgICAgb25Mb2NhdGlvbkNoYW5nZT17b25MZWFrTG9jYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkZpeGVkQ2hhbmdlPXtvbkxlYWtGaXhlZENoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJiB0eXBlICYmICF0eXBlLm5hbWUuc3RhcnRzV2l0aCgnQ29udHLDtGxlJykgJiZcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Rmx1aWRIYW5kbGluZyBvbkNoYW5nZT17b25GbHVpZFF1YW50aXRpZXNDaGFuZ2V9IG9uRXJyb3I9e29uRXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgIChtdXN0SW5zdGFsbCgpIHx8IGZsdWlkUXVhbnRpdGllcy5EID4gMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtlcXVpcG1lbnQuZmx1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29udGFpbmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHsgZmx1aWRRdWFudGl0aWVzLkQgPiAwICYmXG4gICAgICAgICAgICAgICAgICA8V2FzdGVzIGRhdGE9e2VxdWlwbWVudC5mbHVpZC5mbHVpZFR5cGV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IG11c3RJbnN0YWxsKCkgJiZcbiAgICAgICAgICAgICAgICA8Rmx1aWREZXN0aW5hdGlvbiBvbkNoYW5nZT17b25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8UmVtYXJrcyBvbkNoYW5nZT17b25SZW1hcmtzQ2hhbmdlfSAvPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbS0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCIgdHlwZT1cInJlc2V0XCIgb25DbGljaz17aGFuZGxlUmVzZXR9PkFubnVsZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0eXBlIHx8ICFlcXVpcG1lbnQgfHwgZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uVHlwZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9pbnRlcnZlbnRpb25fdHlwZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHlwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX0gLy8gcmVzZXQgaWYgZXF1aXBtZW50IGNoYW5nZWRcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UodHlwZXNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJ0eXBlTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICB0eXBlcy5tYXAoKHR5cGUsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e3R5cGUuaWR9PlxuICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zY3Jld2RyaXZlci13cmVuY2hcIj48L2k+IE5hdHVyZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25UeXBlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuY29uc3QgTGVhayA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyIGJvcmRlci0wIGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbWUtMlwiPntwcm9wcy5pZCsxfTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBib3JkZXIgYm9yZGVyLTAgbWwtMiBtZS0yXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2FsaXNhdGlvbiBkZSBsYSBmdWl0ZVwiXG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBMZWFrYWdlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2xlYWtDb21wb25lbnRzLCBzZXRMZWFrQ29tcG9uZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZExlYWsgPSAoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gbGVha0NvbXBvbmVudHMubGVuZ3RoO1xuXG4gICAgc2V0TGVha0NvbXBvbmVudHMoW1xuICAgICAgLi4ubGVha0NvbXBvbmVudHMsXG4gICAgICA8TGVhayBpZD17aW5kZXh9IG9uQ2hhbmdlPXtvbkxlYWtDaGFuZ2V9IC8+XG4gICAgXSk7XG5cbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnMsIFwiXCJdO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdO1xuICAgIGZpeGVkQ29weS5wdXNoKGZhbHNlKTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgc2V0Rml4ZWQoZml4ZWRDb3B5KTtcbiAgICBwcm9wcy5vbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uc0NvcHkpO1xuICAgIHByb3BzLm9uRml4ZWRDaGFuZ2UoZml4ZWRDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUxlYWsgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkIC0gMjA7XG4gICAgbGV0IGxlYWtDb21wb25lbnRzQ29weSA9IFsuLi5sZWFrQ29tcG9uZW50c107XG4gICAgbGV0IGxvY2F0aW9uc0NvcHkgPSBbLi4ubG9jYXRpb25zXTtcbiAgICBsZXQgZml4ZWRDb3B5ID0gWy4uLmZpeGVkXVxuICAgIGxlYWtDb21wb25lbnRzQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2F0aW9uc0NvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBmaXhlZENvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRMZWFrQ29tcG9uZW50cyhsZWFrQ29tcG9uZW50c0NvcHkpO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnNdO1xuICAgIGxvY2F0aW9uc0NvcHlbaW5kZXhdID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtGaXhlZCA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQgLSAxMDtcbiAgICBsZXQgZml4ZWRDb3B5ID0gWy4uLmZpeGVkXTtcbiAgICBmaXhlZENvcHlbaW5kZXhdID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uRml4ZWRDaGFuZ2UoZml4ZWRDb3B5KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG15LTIgYmctc2Vjb25kYXJ5IHAtMiByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kXCI+PC9pPiBGdWl0ZXMgY29uc3RhdMOpZXMgbG9ycyBkdSBjb250csO0bGUgZCfDqXRhbmNow6lpdMOpXG4gICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2FkZExlYWt9XG4gICAgICAgICAgZGlzYWJsZWQ9e2xlYWtDb21wb25lbnRzLmxlbmd0aCA9PT0gM31cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPiBBam91dGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7IGxlYWtDb21wb25lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cIm0tMiBib3JkZXIgYm9yZGVyLTEgcm91bmRlZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgbGVha0NvbXBvbmVudHMubWFwKChsZWFrLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbS0yIGQtZmxleCBkLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZXZlblwiPlxuICAgICAgICAgICAgICB7bGVha31cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2hlY2tcIlxuICAgICAgICAgICAgICAgIGlkPXsxMCtpfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25MZWFrRml4ZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBpZD1cInR0LXdyZW5jaFwiIGh0bWxGb3I9ezEwK2l9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci0wIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd3JlbmNoXCI+PC9pPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8VG9vbHRpcCBhbmNob3JJZD1cInR0LXdyZW5jaFwiIGNvbnRlbnQ9XCJGdWl0ZSByw6lwYXLDqWVcIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9ezIwK2l9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNsb3NlIG1lLTMgcm91bmRlZC1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUxlYWt9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aSsxIDwgbGVha0NvbXBvbmVudHMubGVuZ3RofVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWthZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIElucHV0IHRleHQgZm9yIFwib3RoZXJcIiBpbnRlcnZlbnRpb24gdHlwZVxuY29uc3QgT3RoZXJUeXBlID0gKHByb3BzKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJvdGhlckludGVydmVudGlvblR5cGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlZldWlsbGV6IHByw6ljaXNlciBsZSB0eXBlIGQnaW50ZXJ2ZW50aW9uLi4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJUeXBlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSZW1hcmtzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtLTJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgaHRtbEZvcj1cInJlbWFya3NcIlxuICAgICAgPlxuICAgICAgICBPYnNlcnZhdGlvbnNcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBpZD1cInJlbWFya3NcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1hcmtzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IFVzZXIgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy91c2Vycy8nICsgcHJvcHMuZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW3Byb3BzLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC0yIG1lLTIgYmctc2Vjb25kYXJ5IHAtMiByb3VuZGVkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIj48L2k+IHt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBXYXN0ZXMgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctc2Vjb25kYXJ5IHAtMiByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kdW1wc3RlclwiPjwvaT4gRMOpbm9taW5hdGlvbiBBRFIvUklEXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cHJvcHMuZGF0YS5mbGFtbWFibGUgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCByb3VuZGVkLTBcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kdW1wc3Rlci1maXJlXCI+PC9pPiB7cHJvcHMuZGF0YS5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtwcm9wcy5kYXRhLmZsYW1tYWJsZSB8fFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIHJvdW5kZWQtMFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyXCI+PC9pPiB7cHJvcHMuZGF0YS5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8aHIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXN0ZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJJbnRlcnZlbnRpb25Gb3JtIiwiYXhpb3MiLCJheCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXJzIiwicHJvcHMiLCJjb250YWluZXJzIiwic2V0Q29udGFpbmVycyIsImdldCIsImRhdGEiLCJpZCIsInRoZW4iLCJlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImkiLCJzZXJpYWxOdW1iZXIiLCJmbHVpZFF1YW50aXR5IiwidG9GaXhlZCIsImNhcGFjaXR5IiwiRGV0ZWN0b3JDb250cm9sRGF0ZSIsImNvbnRyb2xEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm5hbWUiLCJEZXRlY3RvcnMiLCJkZXRlY3RvcnMiLCJzZXREZXRlY3RvcnMiLCJkZXRlY3RvciIsIkVxdWlwbWVudCIsImVxdWlwbWVudCIsInNldEVxdWlwbWVudCIsImdlYXIiLCJFcXVpcG1lbnREZXRhaWxzIiwiZmx1aWQiLCJ3ZWlnaHQiLCJjbzJFcVRvbm5hZ2UiLCJsZWFrRGV0ZWN0aW9uU3lzdGVtIiwiRmx1aWREZXN0aW5hdGlvbiIsIlRvb2x0aXAiLCJGbHVpZEhhbmRsaW5nIiwiZmx1aWRRdWFudGl0aWVzIiwic2V0Rmx1aWRRdWFudGl0aWVzIiwic3VtQUJDIiwic2V0U3VtQUJDIiwic3VtREUiLCJzZXRTdW1ERSIsImZsdWlkTG9hZGluZyIsInNldEZsdWlkTG9hZGluZyIsImZsdWlkQ29sbGVjdGluZyIsInNldEZsdWlkQ29sbGVjdGluZyIsIm9uRmx1aWRBQ2hhbmdlIiwiQSIsIk51bWJlciIsImZxIiwic3VtIiwiQiIsIkMiLCJpc05hTiIsIm9uRmx1aWRCQ2hhbmdlIiwib25GbHVpZENDaGFuZ2UiLCJvbkZsdWlkRENoYW5nZSIsIkQiLCJvbkZsdWlkRUNoYW5nZSIsIkUiLCJvbkJzZmZDaGFuZ2UiLCJCU0ZGIiwib25Mb2FkaW5nQ2xpY2siLCJjaGVja2VkIiwib25Db2xsZWN0aW5nQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiVXNlciIsIkludGVydmVudGlvblR5cGVzIiwiT3RoZXJUeXBlIiwiTGVha2FnZSIsIldhc3RlcyIsIlJlbWFya3MiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJub3ciLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwic2V0RGV0ZWN0b3IiLCJsZWFrTG9jYXRpb25zIiwic2V0TGVha0xvY2F0aW9ucyIsImxlYWtGaXhlZCIsInNldExlYWtGaXhlZCIsInNldENvbnRhaW5lciIsImZsdWlkRGVzdGluYXRpb24iLCJzZXRGbHVpZERlc3RpbmF0aW9uIiwicmVtYXJrcyIsInNldFJlbWFya3MiLCJwZGZQYXRoIiwic2V0UGRmUGF0aCIsImxlYWtzUG9zdGVkIiwic2V0TGVha3NQb3N0ZWQiLCJmb3JtRXJyb3IiLCJzZXRGb3JtRXJyb3IiLCJvcGVuIiwib25JbnRlcnZlbnRpb25EYXRlQ2hhbmdlIiwib25FcXVpcG1lbnRDaGFuZ2UiLCJoYW5kbGVSZXNldCIsIm9uVHlwZUNoYW5nZSIsIm9uT3RoZXJUeXBlQ2hhbmdlIiwib25EZXRlY3RvckNoYW5nZSIsIm9uTGVha0xvY2F0aW9uQ2hhbmdlIiwib25MZWFrRml4ZWRDaGFuZ2UiLCJvbkZsdWlkUXVhbnRpdGllc0NoYW5nZSIsIm9uQ29udGFpbmVyQ2hhbmdlIiwib25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlIiwib25SZW1hcmtzQ2hhbmdlIiwib25FcnJvciIsImVycm9yU3RhdGUiLCJwb3N0TGVha3MiLCJpbnRlcnZlbnRpb25JRCIsImNvdW50IiwibGVuZ3RoIiwibGVhayIsInBvc3QiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImludGVydmVudGlvbiIsInVzZXIiLCJtdXN0SW5zdGFsbCIsInN0YXJ0c1dpdGgiLCJmbHVpZFR5cGUiLCJ0eXBlcyIsInNldFR5cGVzIiwiTGVhayIsImxlYWtDb21wb25lbnRzIiwic2V0TGVha0NvbXBvbmVudHMiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJmaXhlZCIsInNldEZpeGVkIiwiYWRkTGVhayIsImluZGV4Iiwib25MZWFrQ2hhbmdlIiwibG9jYXRpb25zQ29weSIsImZpeGVkQ29weSIsInB1c2giLCJvbkxvY2F0aW9uQ2hhbmdlIiwib25GaXhlZENoYW5nZSIsInJlbW92ZUxlYWsiLCJsZWFrQ29tcG9uZW50c0NvcHkiLCJzcGxpY2UiLCJvbkxlYWtGaXhlZCIsInNldFVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZsYW1tYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=