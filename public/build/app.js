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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxJQUFJLENBQUNpQixJQUFJLENBQ2hELENBRUosZUFDUixzRUFBTSxDQUNBO0FBRVYsQ0FBQztBQUVELGlFQUFlb0QsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0F4aW9zLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9Db250YWluZXJzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvckNvbnRyb2xEYXRlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWREZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWRIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0xlYWthZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L090aGVyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvUmVtYXJrcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvV2FzdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuLy8gaW1wb3J0IFwiLi9jc3MvaW5kZXguY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vanN4L0FwcFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbmlmIChjb250YWluZXIpIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuICByb290LnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0yXCI+XG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgIDwvZGl2PlxuKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEludGVydmVudGlvbkZvcm0gZnJvbSBcIi4vSW50ZXJ2ZW50aW9uRm9ybVwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxoMj5GaWNoZSBkJ2ludGVydmVudGlvbjwvaDI+XG4gICAgICA8SW50ZXJ2ZW50aW9uRm9ybSAvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIENyZWF0ZSBhbiBheGlvcyBvYmplY3Qgd2l0aCBkZWZhdWx0IGhlYWRlcnNcbmNvbnN0IGF4ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCIvYXBpXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgfSxcbn0pO1xuXG4vLyBDYXRjaCB1bmF1dGhvcml6ZWQgcmVxdWVzdCBhbmQgcmVkaXJlY3QgaWYgZXJyb3JcbmF4LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiByZXNwb25zZSwgKGVycm9yKSA9PiB7XG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgQ29udGFpbmVycyA9IChwcm9wcykgPT4ge1xuICBcbiAgY29uc3QgW2NvbnRhaW5lcnMsIHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2NvbnRhaW5lcnNCeUZsdWlkLycgKyBwcm9wcy5kYXRhLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0Q29udGFpbmVycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGNvbnRhaW5lcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJjb250YWluZXJMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGNvbnRhaW5lcnMubWFwKChjb250YWluZXIsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2NvbnRhaW5lci5pZH0+XG4gICAgICAgICAgICB7Y29udGFpbmVyLnNlcmlhbE51bWJlcn0gLS0ge2NvbnRhaW5lci5mbHVpZFF1YW50aXR5LnRvRml4ZWQoMil9L3tjb250YWluZXIuY2FwYWNpdHkudG9GaXhlZCgyKX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWluZXJMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvdHRsZS1kcm9wbGV0XCI+PC9pPiBDb250ZW5hbnRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGV0ZWN0b3JDb250cm9sRGF0ZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGNvbnRyb2xEYXRlID0gbmV3IERhdGUocHJvcHMuZGF0YS5jb250cm9sRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItZnJcIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCJcbiAgICAgICAgdmFsdWU9e2NvbnRyb2xEYXRlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmQtY2hlY2tcIj48L2k+IERhdGUgZHUgZGVybmllciBjb250csO0bGUgKHtwcm9wcy5kYXRhLm5hbWV9KVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvckNvbnRyb2xEYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IERldGVjdG9ycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtkZXRlY3RvcnMsIHNldERldGVjdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2RldGVjdG9yc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RGV0ZWN0b3JzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShkZXRlY3RvcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZGV0ZWN0b3JzLm1hcCgoZGV0ZWN0b3IsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2RldGVjdG9yLmlkfT5cbiAgICAgICAgICAgIHtkZXRlY3Rvci5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb21wYXNzXCI+PC9pPiBEw6l0ZWN0ZXVyIGRlIGZ1aXRlc1xuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgRXF1aXBtZW50ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoXCIvZXF1aXBtZW50XCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRFcXVpcG1lbnQocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZXF1aXBtZW50W2UudGFyZ2V0LnZhbHVlXSl9fVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1zbVwiXG4gICAgICAgIGlkPVwiZXF1aXBtZW50TGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBlcXVpcG1lbnQubWFwKChnZWFyLCBpKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtnZWFyLmlkfT5cbiAgICAgICAgICAgIHtnZWFyLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nZWFyc1wiPjwvaT4gRXF1aXBlbWVudCBjb25jZXJuw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFcXVpcG1lbnREZXRhaWxzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0xIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJlcXVpcG1lbnROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT4gSWRlbnRpZmljYXRpb25cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5mbHVpZC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IETDqW5vbWluYXRpb24gZHUgZmx1aWRlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLndlaWdodC50b0ZpeGVkKDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13ZWlnaHQtaGFuZ2luZ1wiPjwvaT4gQ2hhcmdlIHRvdGFsZSAoa2cpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWRDTzJcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuY28yRXFUb25uYWdlLnRvRml4ZWQoMil9IFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZENPMlwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvdWRcIj48L2k+IFRvbm5hZ2Ugw6lxdWl2YWxlbnQgQzA8c3ViPjI8L3N1Yj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG10LTFcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgIGlkPVwibGVha0RldGVjdGlvblN5c3RlbVwiXG4gICAgICAgICAgY2hlY2tlZD17cHJvcHMuZGF0YS5sZWFrRGV0ZWN0aW9uU3lzdGVtfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxlYWtEZXRlY3Rpb25TeXN0ZW1cIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kXCI+PC9pPiBQcsOpc2VuY2UgZCd1biBzeXN0w6htZSBwZXJtYW5lbnQgZGUgZMOpdGVjdGlvbiBkZSBmdWl0ZXNcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudERldGFpbHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsdWlkRGVzdGluYXRpb24gPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiXG4gICAgICA+XG4gICAgICAgIEluc3RhbGxhdGlvbiBwcsOpdnVlIGRlIGRlc3RpbmF0aW9uIGR1IGZsdWlkZSByw6ljdXDDqXLDqVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbSwgU0lSRVQsIGFkcmVzc2VcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx1aWREZXN0aW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuY29uc3QgRmx1aWRIYW5kbGluZyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtmbHVpZFF1YW50aXRpZXMsIHNldEZsdWlkUXVhbnRpdGllc10gPSB1c2VTdGF0ZSh7XG4gICAgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJydcbiAgfSk7XG4gIGNvbnN0IFtzdW1BQkMsIHNldFN1bUFCQ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3N1bURFLCBzZXRTdW1ERV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZsdWlkTG9hZGluZywgc2V0Rmx1aWRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZsdWlkQ29sbGVjdGluZywgc2V0Rmx1aWRDb2xsZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkZsdWlkQUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEEgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEE6IEFcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgbGV0IHN1bSA9IGZsdWlkUXVhbnRpdGllcy5BICsgZmx1aWRRdWFudGl0aWVzLkIgKyBmbHVpZFF1YW50aXRpZXMuQztcbiAgICBpZiAoIWlzTmFOKHN1bSkpIHtcbiAgICAgIHNldFN1bUFCQyhBK2ZsdWlkUXVhbnRpdGllcy5CK2ZsdWlkUXVhbnRpdGllcy5DKTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEIgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEI6IEJcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtQUJDKGZsdWlkUXVhbnRpdGllc1snQSddK0IrZmx1aWRRdWFudGl0aWVzWydDJ10pO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRDQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQyA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQzogQ1xuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1BQkMoZmx1aWRRdWFudGl0aWVzWydBJ10rZmx1aWRRdWFudGl0aWVzWydCJ10rQyk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBEID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBEOiBEXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bURFKEQrZmx1aWRRdWFudGl0aWVzWydFJ10pO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRFQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgRSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgRTogRVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1ERShmbHVpZFF1YW50aXRpZXNbJ0QnXStFKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkJzZmZDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEJTRkY6IGUudGFyZ2V0LnZhbHVlXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZGluZ0NsaWNrID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZExvYWRpbmcoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgaWYgKCFlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBsZXQgZnEgPSB7XG4gICAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgICAgQTogMCxcbiAgICAgICAgQjogMCxcbiAgICAgICAgQzogMCxcbiAgICAgIH1cbiAgICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25Db2xsZWN0aW5nQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjb2xsZWMnLCBlKTtcbiAgICBzZXRGbHVpZENvbGxlY3RpbmcoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgaWYgKCFlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBsZXQgZnEgPSB7XG4gICAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgICAgRDogMCxcbiAgICAgICAgQlNGRjogJycsXG4gICAgICAgIEU6IDAsXG4gICAgICB9XG4gICAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbXgtYXV0byBwLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IE1hbmlwdWxhdGlvbiBkdSBmbHVpZGUgZnJpZ29yaWfDqG5lXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4tY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCIgaWQ9XCJsb2FkaW5nRmx1aWRcIiBvbkNsaWNrPXsoZSkgPT4ge29uTG9hZGluZ0NsaWNrKGUpfX0gLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBib3JkZXItMCBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJsb2FkaW5nRmx1aWRcIlxuICAgICAgICAgICAgaWQ9XCJ0dC1sb2FkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi1kb3duXCI+PC9pPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPFRvb2x0aXAgYW5jaG9ySWQ9XCJ0dC1sb2FkXCIgY29udGVudD1cIkNoYXJnZW1lbnRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIGlkPVwiY29sbGVjdGluZ0ZsdWlkXCIgb25DbGljaz17KGUpID0+IHtvbkNvbGxlY3RpbmdDbGljayhlKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwiY29sbGVjdGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtY29sbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tdXBcIj48L2k+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8VG9vbHRpcCBhbmNob3JJZD1cInR0LWNvbGxlY3RcIiBjb250ZW50PVwiUsOpY3Vww6lyYXRpb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWZsZXggZmxleC1tZC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGhpZGRlbj17IWZsdWlkTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLWRvd25cIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQUNoYW5nZX1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihBKTwvc3VwPiBEb250IGZsdWlkZSB2aWVyZ2VcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQik8L3N1cD4gRG9udCBmbHVpZGUgcmVjeWNsw6lcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQ0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQyk8L3N1cD4gRG9udCBmbHVpZGUgcsOpZ8OpbsOpcsOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGhpZGRlbj17IWZsdWlkQ29sbGVjdGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1ERX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tdXBcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgcsOpY3Vww6lyw6llIDxzdXA+KEQrRSk8L3N1cD48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZERDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oRCk8L3N1cD4gRG9udCBmbHVpZGUgZGVzdGluw6kgYXUgdHJhaXRlbWVudFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJic2ZmTnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQnNmZkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJzZmZOdW1iZXJcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIE51bcOpcm8gZHUgQlNGRiAoc2kgY29ubnUpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgRGV0ZWN0b3JzIGZyb20gXCIuL0RldGVjdG9yc1wiO1xuaW1wb3J0IERldGVjdG9yQ29udHJvbERhdGUgZnJvbSBcIi4vRGV0ZWN0b3JDb250cm9sRGF0ZVwiXG5pbXBvcnQgRXF1aXBtZW50IGZyb20gXCIuL0VxdWlwbWVudFwiO1xuaW1wb3J0IEludGVydmVudGlvblR5cGVzIGZyb20gXCIuL0ludGVydmVudGlvblR5cGVzXCI7XG5pbXBvcnQgT3RoZXJUeXBlIGZyb20gXCIuL090aGVyVHlwZVwiO1xuaW1wb3J0IExlYWthZ2UgZnJvbSBcIi4vTGVha2FnZVwiO1xuaW1wb3J0IENvbnRhaW5lcnMgZnJvbSBcIi4vQ29udGFpbmVyc1wiO1xuaW1wb3J0IEVxdWlwbWVudERldGFpbHMgZnJvbSBcIi4vRXF1aXBtZW50RGV0YWlsc1wiO1xuaW1wb3J0IEZsdWlkSGFuZGxpbmcgZnJvbSBcIi4vRmx1aWRIYW5kbGluZ1wiO1xuaW1wb3J0IFdhc3RlcyBmcm9tIFwiLi9XYXN0ZXNcIjtcbmltcG9ydCBGbHVpZERlc3RpbmF0aW9uIGZyb20gXCIuL0ZsdWlkRGVzdGluYXRpb25cIjtcbmltcG9ydCBSZW1hcmtzIGZyb20gXCIuL1JlbWFya3NcIjtcblxuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IEludGVydmVudGlvbkZvcm0gPSAoKSA9PiB7XG5cbiAgLy8gQ3VycmVudCBkYXRlXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkpO1xuICBjb25zdCBub3cgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUNBXCIpO1xuICBcbiAgLy8gU3RhdGVzXG4gIGNvbnN0IFtpbnRlcnZlbnRpb25EYXRlLCBzZXRJbnRlcnZlbnRpb25EYXRlXSA9IHVzZVN0YXRlKG5vdyk7XG4gIGNvbnN0IFtlcXVpcG1lbnQsIHNldEVxdWlwbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvdGhlclR5cGUsIHNldE90aGVyVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RldGVjdG9yLCBzZXREZXRlY3Rvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xlYWtMb2NhdGlvbnMsIHNldExlYWtMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGVha0ZpeGVkLCBzZXRMZWFrRml4ZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmx1aWRRdWFudGl0aWVzLCBzZXRGbHVpZFF1YW50aXRpZXNdID0gdXNlU3RhdGUoe1xuICAgICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnXG4gIH0pO1xuICBjb25zdCBbY29udGFpbmVyLCBzZXRDb250YWluZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmbHVpZERlc3RpbmF0aW9uLCBzZXRGbHVpZERlc3RpbmF0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVtYXJrcywgc2V0UmVtYXJrc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BkZlBhdGgsIHNldFBkZlBhdGhdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsZWFrc1Bvc3RlZCwgc2V0TGVha3NQb3N0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbdXBkYXRlS2V5LCBzZXRVcGRhdGVLZXldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxlYWtzUG9zdGVkKSB7XG4gICAgICB3aW5kb3cub3BlbihwZGZQYXRoLCAnX2JsYW5rJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBFdmVudHNcbiAgXG4gIGNvbnN0IG9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW50ZXJ2ZW50aW9uRGF0ZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkVxdWlwbWVudENoYW5nZSA9IChlKSA9PiB7XG4gICAgaGFuZGxlUmVzZXQoKTtcbiAgICBzZXRFcXVpcG1lbnQoZSk7XG4gIH1cblxuICBjb25zdCBvblR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFR5cGUoZSk7XG4gIH1cblxuICBjb25zdCBvbk90aGVyVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0T3RoZXJUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRGV0ZWN0b3JDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldERldGVjdG9yKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrTG9jYXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtMb2NhdGlvbnMoZSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtGaXhlZENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TGVha0ZpeGVkKGUpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZFF1YW50aXRpZXNDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzdW1BQkMgPSBlLkEgKyBlLkIgKyBlLkM7XG4gICAgbGV0IHN1bURFID0gZS5EICsgZS5CO1xuICAgIHNldEZvcm1FcnJvcihpc05hTihzdW1BQkMpIHx8IGlzTmFOKHN1bURFKSk7XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGUpO1xuICB9XG5cbiAgY29uc3Qgb25Db250YWluZXJDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRhaW5lcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWREZXN0aW5hdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Rmx1aWREZXN0aW5hdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvblJlbWFya3NDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFJlbWFya3MoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcnJvciA9IChlcnJvclN0YXRlKSA9PiB7XG4gICAgc2V0Rm9ybUVycm9yKGVycm9yU3RhdGUpO1xuICB9XG5cbiAgY29uc3QgcG9zdExlYWtzID0gYXN5bmMgKGludGVydmVudGlvbklEKSA9PiB7XG4gICAgLy8gUE9TVCBsZWFrcyBvbmUgYnkgb25lXG4gICAgbGV0IGNvdW50ID0gbGVha0xvY2F0aW9ucy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7ICBpIDwgbGVha0xvY2F0aW9ucy5sZW5ndGg7ICBpKyspIHtcbiAgICAgIGxldCBsZWFrID0ge1xuICAgICAgICBcIm51bVwiOiBpKzEsXG4gICAgICAgIFwiY291bnRcIjogY291bnQsXG4gICAgICAgIFwibG9jYXRpb25cIjogbGVha0xvY2F0aW9uc1tpXSxcbiAgICAgICAgXCJmaXhlZFwiOiBsZWFrRml4ZWRbaV0sXG4gICAgICAgIFwiaW50ZXJ2ZW50aW9uXCI6IFwiL2FwaS9pbnRlcnZlbnRpb25zL1wiICsgaW50ZXJ2ZW50aW9uSUQsXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGF4LnBvc3QoJy9sZWFrYWdlcycsXG4gICAgICAgIGxlYWtcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIGxlYWthZ2UgUE9TVCcsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0TGVha3NQb3N0ZWQodHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW50ZXJ2ZW50aW9uID0ge1xuICAgICAgXCJkYXRlXCI6IGludGVydmVudGlvbkRhdGUsXG4gICAgICBcInZpcmdpbkZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkEsXG4gICAgICBcInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQixcbiAgICAgIFwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5DLFxuICAgICAgXCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuRCxcbiAgICAgIFwiYnNmZk51bWJlclwiOiBmbHVpZFF1YW50aXRpZXMuQlNGRixcbiAgICAgIFwicmV1c2FibGVGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5FLFxuICAgICAgXCJjb2xsZWN0ZWRGbHVpZERlc3RpbmF0aW9uXCI6IGZsdWlkRGVzdGluYXRpb24sXG4gICAgICBcInJlbWFya3NcIjogcmVtYXJrcyxcbiAgICAgIFwiaW50ZXJ2ZW50aW9uVHlwZVwiOiBcIi9hcGkvaW50ZXJ2ZW50aW9uX3R5cGVzL1wiICsgdHlwZS5pZCxcbiAgICAgIFwib3RoZXJJbnRlcnZlbnRpb25UeXBlXCI6IG90aGVyVHlwZSxcbiAgICAgIFwiZXF1aXBtZW50XCI6IFwiL2FwaS9lcXVpcG1lbnQvXCIgKyBlcXVpcG1lbnQuaWQsXG4gICAgICBcImNvbnRhaW5lclwiOiBjb250YWluZXI/XCIvYXBpL2NvbnRhaW5lcnMvXCIgKyBjb250YWluZXIuaWQ6bnVsbCxcbiAgICAgIFwiZGV0ZWN0b3JcIjogZGV0ZWN0b3I/XCIvYXBpL2RldGVjdG9ycy9cIiArIGRldGVjdG9yLmlkOm51bGwsXG4gICAgICBcInVzZXJcIjogXCIvYXBpL3VzZXJzL1wiICsgd2luZG93LnVzZXIsXG4gICAgICBcInBkZlBhdGhcIjogXCJcIixcbiAgICB9O1xuXG4gICAgLy8gUE9TVCBpbnRlcnZlbnRpb25cbiAgICBheC5wb3N0KCcvaW50ZXJ2ZW50aW9ucycsXG4gICAgICBpbnRlcnZlbnRpb25cbiAgICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBQT1NUIGxlYWtzXG4gICAgICBwb3N0TGVha3MocmVzcG9uc2UuZGF0YS5pZCk7XG4gICAgICBzZXRQZGZQYXRoKHJlc3BvbnNlLmRhdGEucGRmUGF0aCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1InLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRFcXVpcG1lbnQobnVsbCk7XG4gICAgc2V0VHlwZShudWxsKTtcbiAgICBzZXRPdGhlclR5cGUoXCJcIik7XG4gICAgc2V0RGV0ZWN0b3IobnVsbCk7XG4gICAgc2V0TGVha0xvY2F0aW9ucyhbXSk7XG4gICAgc2V0TGVha0ZpeGVkKFtdKTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoeyAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ30pO1xuICAgIHNldENvbnRhaW5lcihudWxsKTtcbiAgICBzZXRGbHVpZERlc3RpbmF0aW9uKFwiXCIpO1xuICAgIHNldFJlbWFya3MoXCJcIik7XG4gICAgc2V0UGRmUGF0aChcIlwiKTtcbiAgICBzZXRMZWFrc1Bvc3RlZChmYWxzZSk7XG4gICAgc2V0Rm9ybUVycm9yKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IG11c3RJbnN0YWxsID0gKCkgPT4ge1xuICAgIHJldHVybiBmbHVpZFF1YW50aXRpZXMuRSA+IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxVc2VyIGRhdGE9e3dpbmRvdy51c2VyfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICBpZD1cImludGVydmVudGlvbkRhdGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bm93fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkludGVydmVudGlvbkRhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FsZW5kYXItZGF5c1wiPjwvaT4gRGF0ZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RXF1aXBtZW50IG9uQ2hhbmdlPXtvbkVxdWlwbWVudENoYW5nZX0gLz5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEVxdWlwbWVudERldGFpbHMgZGF0YT17ZXF1aXBtZW50fSAvPlxuICAgICAgICAgICAgICAgIDxJbnRlcnZlbnRpb25UeXBlcyBvbkNoYW5nZT17b25UeXBlQ2hhbmdlfSBkYXRhPXtlcXVpcG1lbnQuaWR9IC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB0eXBlPy5uYW1lID09PSBcIkF1dHJlXCIgICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHR5cGUgJiYgdHlwZS5uYW1lLnN0YXJ0c1dpdGgoJ0NvbnRyw7RsZScpICYmICFlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiZcbiAgICAgICAgICAgICAgPERldGVjdG9ycyBvbkNoYW5nZT17b25EZXRlY3RvckNoYW5nZX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgZGV0ZWN0b3IgJiZcbiAgICAgICAgICAgICAgICA8RGV0ZWN0b3JDb250cm9sRGF0ZSBkYXRhPXtkZXRlY3Rvcn0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgKGRldGVjdG9yIHx8IChlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiYgdHlwZSAmJiB0eXBlLm5hbWUuc3RhcnRzV2l0aCgnQ29udHLDtGxlJykpKSAmJlxuICAgICAgICAgICAgICAgIDxMZWFrYWdlXG4gICAgICAgICAgICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlPXtvbkxlYWtMb2NhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRml4ZWRDaGFuZ2U9e29uTGVha0ZpeGVkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmIHR5cGUgJiYgIXR5cGUubmFtZS5zdGFydHNXaXRoKCdDb250csO0bGUnKSAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGbHVpZEhhbmRsaW5nIG9uQ2hhbmdlPXtvbkZsdWlkUXVhbnRpdGllc0NoYW5nZX0gb25FcnJvcj17b25FcnJvcn0gLz5cbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgKG11c3RJbnN0YWxsKCkgfHwgZmx1aWRRdWFudGl0aWVzLkQgPiAwKSAmJlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2VxdWlwbWVudC5mbHVpZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db250YWluZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyBmbHVpZFF1YW50aXRpZXMuRCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIDxXYXN0ZXMgZGF0YT17ZXF1aXBtZW50LmZsdWlkLmZsdWlkVHlwZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsgbXVzdEluc3RhbGwoKSAmJlxuICAgICAgICAgICAgICAgIDxGbHVpZERlc3RpbmF0aW9uIG9uQ2hhbmdlPXtvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgIDxSZW1hcmtzIG9uQ2hhbmdlPXtvblJlbWFya3NDaGFuZ2V9IC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtLTJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXdhcm5pbmdcIiB0eXBlPVwicmVzZXRcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+QW5udWxlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXR5cGUgfHwgIWVxdWlwbWVudCB8fCBmb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRW5yZWdpc3RyZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25UeXBlcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2ludGVydmVudGlvbl90eXBlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRUeXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAga2V5PXtwcm9wcy5kYXRhfSAvLyByZXNldCBpZiBlcXVpcG1lbnQgY2hhbmdlZFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZSh0eXBlc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cInR5cGVMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIHR5cGVzLm1hcCgodHlwZSwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17dHlwZS5pZH0+XG4gICAgICAgICAgICB7dHlwZS5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNjcmV3ZHJpdmVyLXdyZW5jaFwiPjwvaT4gTmF0dXJlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvblR5cGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0ICdyZWFjdC10b29sdGlwL2Rpc3QvcmVhY3QtdG9vbHRpcC5jc3MnO1xuXG5jb25zdCBMZWFrID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXIgYm9yZGVyLTAgYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQgcm91bmRlZCBtZS0yXCI+e3Byb3BzLmlkKzF9PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGJvcmRlciBib3JkZXItMCBtbC0yIG1lLTJcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYWxpc2F0aW9uIGRlIGxhIGZ1aXRlXCJcbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IExlYWthZ2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbbGVha0NvbXBvbmVudHMsIHNldExlYWtDb21wb25lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkTGVhayA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBsZWFrQ29tcG9uZW50cy5sZW5ndGg7XG5cbiAgICBzZXRMZWFrQ29tcG9uZW50cyhbXG4gICAgICAuLi5sZWFrQ29tcG9uZW50cyxcbiAgICAgIDxMZWFrIGlkPXtpbmRleH0gb25DaGFuZ2U9e29uTGVha0NoYW5nZX0gLz5cbiAgICBdKTtcblxuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9ucywgXCJcIl07XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF07XG4gICAgZml4ZWRDb3B5LnB1c2goZmFsc2UpO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGVhayA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQgLSAyMDtcbiAgICBsZXQgbGVha0NvbXBvbmVudHNDb3B5ID0gWy4uLmxlYWtDb21wb25lbnRzXTtcbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnNdO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdXG4gICAgbGVha0NvbXBvbmVudHNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYXRpb25zQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGZpeGVkQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldExlYWtDb21wb25lbnRzKGxlYWtDb21wb25lbnRzQ29weSk7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9uc107XG4gICAgbG9jYXRpb25zQ29weVtpbmRleF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0ZpeGVkID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZCAtIDEwO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdO1xuICAgIGZpeGVkQ29weVtpbmRleF0gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRcIj48L2k+IEZ1aXRlcyBjb25zdGF0w6llcyBsb3JzIGR1IGNvbnRyw7RsZSBkJ8OpdGFuY2jDqWl0w6lcbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodFwiXG4gICAgICAgICAgb25DbGljaz17YWRkTGVha31cbiAgICAgICAgICBkaXNhYmxlZD17bGVha0NvbXBvbmVudHMubGVuZ3RoID09PSAzfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVha0NvbXBvbmVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwibS0yIGJvcmRlciBib3JkZXItMSByb3VuZGVkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBsZWFrQ29tcG9uZW50cy5tYXAoKGxlYWssIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtLTIgZC1mbGV4IGQtZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1ldmVuXCI+XG4gICAgICAgICAgICAgIHtsZWFrfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiXG4gICAgICAgICAgICAgICAgaWQ9ezEwK2l9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxlYWtGaXhlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGlkPVwidHQtd3JlbmNoXCIgaHRtbEZvcj17MTAraX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBib3JkZXIgYm9yZGVyLTAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13cmVuY2hcIj48L2k+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtd3JlbmNoXCIgY29udGVudD1cIkZ1aXRlIHLDqXBhcsOpZVwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD17MjAraX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xvc2UgbWUtMyByb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlTGVha31cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpKzEgPCBsZWFrQ29tcG9uZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVha2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gSW5wdXQgdGV4dCBmb3IgXCJvdGhlclwiIGludGVydmVudGlvbiB0eXBlXG5jb25zdCBPdGhlclR5cGUgPSAocHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVmV1aWxsZXogcHLDqWNpc2VyIGxlIHR5cGUgZCdpbnRlcnZlbnRpb24uLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlclR5cGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlbWFya3MgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwicmVtYXJrc1wiXG4gICAgICA+XG4gICAgICAgIE9ic2VydmF0aW9uc1xuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwicmVtYXJrc1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWFya3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL3VzZXJzLycgKyBwcm9wcy5kYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIgbWUtMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT4ge3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFdhc3RlcyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyXCI+PC9pPiBEw6lub21pbmF0aW9uIEFEUi9SSURcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5kYXRhLmZsYW1tYWJsZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIHJvdW5kZWQtMFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyLWZpcmVcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3Byb3BzLmRhdGEuZmxhbW1hYmxlIHx8XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgcm91bmRlZC0wXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXJcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhc3RlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIkludGVydmVudGlvbkZvcm0iLCJheGlvcyIsImF4IiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lcnMiLCJwcm9wcyIsImNvbnRhaW5lcnMiLCJzZXRDb250YWluZXJzIiwiZ2V0IiwiZGF0YSIsImlkIiwidGhlbiIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaSIsInNlcmlhbE51bWJlciIsImZsdWlkUXVhbnRpdHkiLCJ0b0ZpeGVkIiwiY2FwYWNpdHkiLCJEZXRlY3RvckNvbnRyb2xEYXRlIiwiY29udHJvbERhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibmFtZSIsIkRldGVjdG9ycyIsImRldGVjdG9ycyIsInNldERldGVjdG9ycyIsImRldGVjdG9yIiwiRXF1aXBtZW50IiwiZXF1aXBtZW50Iiwic2V0RXF1aXBtZW50IiwiZ2VhciIsIkVxdWlwbWVudERldGFpbHMiLCJmbHVpZCIsIndlaWdodCIsImNvMkVxVG9ubmFnZSIsImxlYWtEZXRlY3Rpb25TeXN0ZW0iLCJGbHVpZERlc3RpbmF0aW9uIiwiVG9vbHRpcCIsIkZsdWlkSGFuZGxpbmciLCJmbHVpZFF1YW50aXRpZXMiLCJzZXRGbHVpZFF1YW50aXRpZXMiLCJzdW1BQkMiLCJzZXRTdW1BQkMiLCJzdW1ERSIsInNldFN1bURFIiwiZmx1aWRMb2FkaW5nIiwic2V0Rmx1aWRMb2FkaW5nIiwiZmx1aWRDb2xsZWN0aW5nIiwic2V0Rmx1aWRDb2xsZWN0aW5nIiwib25GbHVpZEFDaGFuZ2UiLCJBIiwiTnVtYmVyIiwiZnEiLCJzdW0iLCJCIiwiQyIsImlzTmFOIiwib25GbHVpZEJDaGFuZ2UiLCJvbkZsdWlkQ0NoYW5nZSIsIm9uRmx1aWREQ2hhbmdlIiwiRCIsIm9uRmx1aWRFQ2hhbmdlIiwiRSIsIm9uQnNmZkNoYW5nZSIsIkJTRkYiLCJvbkxvYWRpbmdDbGljayIsImNoZWNrZWQiLCJvbkNvbGxlY3RpbmdDbGljayIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiSW50ZXJ2ZW50aW9uVHlwZXMiLCJPdGhlclR5cGUiLCJMZWFrYWdlIiwiV2FzdGVzIiwiUmVtYXJrcyIsImRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm5vdyIsImludGVydmVudGlvbkRhdGUiLCJzZXRJbnRlcnZlbnRpb25EYXRlIiwidHlwZSIsInNldFR5cGUiLCJvdGhlclR5cGUiLCJzZXRPdGhlclR5cGUiLCJzZXREZXRlY3RvciIsImxlYWtMb2NhdGlvbnMiLCJzZXRMZWFrTG9jYXRpb25zIiwibGVha0ZpeGVkIiwic2V0TGVha0ZpeGVkIiwic2V0Q29udGFpbmVyIiwiZmx1aWREZXN0aW5hdGlvbiIsInNldEZsdWlkRGVzdGluYXRpb24iLCJyZW1hcmtzIiwic2V0UmVtYXJrcyIsInBkZlBhdGgiLCJzZXRQZGZQYXRoIiwibGVha3NQb3N0ZWQiLCJzZXRMZWFrc1Bvc3RlZCIsImZvcm1FcnJvciIsInNldEZvcm1FcnJvciIsIm9wZW4iLCJyZWxvYWQiLCJvbkludGVydmVudGlvbkRhdGVDaGFuZ2UiLCJvbkVxdWlwbWVudENoYW5nZSIsImhhbmRsZVJlc2V0Iiwib25UeXBlQ2hhbmdlIiwib25PdGhlclR5cGVDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25MZWFrTG9jYXRpb25DaGFuZ2UiLCJvbkxlYWtGaXhlZENoYW5nZSIsIm9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlIiwib25Db250YWluZXJDaGFuZ2UiLCJvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2UiLCJvblJlbWFya3NDaGFuZ2UiLCJvbkVycm9yIiwiZXJyb3JTdGF0ZSIsInBvc3RMZWFrcyIsImludGVydmVudGlvbklEIiwiY291bnQiLCJsZW5ndGgiLCJsZWFrIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaW50ZXJ2ZW50aW9uIiwidXNlciIsIm11c3RJbnN0YWxsIiwic3RhcnRzV2l0aCIsImZsdWlkVHlwZSIsInR5cGVzIiwic2V0VHlwZXMiLCJMZWFrIiwibGVha0NvbXBvbmVudHMiLCJzZXRMZWFrQ29tcG9uZW50cyIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsImZpeGVkIiwic2V0Rml4ZWQiLCJhZGRMZWFrIiwiaW5kZXgiLCJvbkxlYWtDaGFuZ2UiLCJsb2NhdGlvbnNDb3B5IiwiZml4ZWRDb3B5IiwicHVzaCIsIm9uTG9jYXRpb25DaGFuZ2UiLCJvbkZpeGVkQ2hhbmdlIiwicmVtb3ZlTGVhayIsImxlYWtDb21wb25lbnRzQ29weSIsInNwbGljZSIsIm9uTGVha0ZpeGVkIiwic2V0VXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmxhbW1hYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==