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
    "access-control-allow-origin": "*"
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
  }, "------"), equipments.map(function (equipment, i) {
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
    setSumABC(A + fluidQuantities['B'] + fluidQuantities['C']);
    props.onChange(fq);
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
      setFluidLoading(e.target.checked);
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
      setFluidCollecting(e.target.checked);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./User */ "./react/jsx/User.js");
/* harmony import */ var _Detectors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Detectors */ "./react/jsx/Detectors.js");
/* harmony import */ var _DetectorControlDate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DetectorControlDate */ "./react/jsx/DetectorControlDate.js");
/* harmony import */ var _Equipment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Equipment */ "./react/jsx/Equipment.js");
/* harmony import */ var _InterventionTypes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./InterventionTypes */ "./react/jsx/InterventionTypes.js");
/* harmony import */ var _OtherType__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./OtherType */ "./react/jsx/OtherType.js");
/* harmony import */ var _Leakage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Leakage */ "./react/jsx/Leakage.js");
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Containers */ "./react/jsx/Containers.js");
/* harmony import */ var _EquipmentDetails__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./EquipmentDetails */ "./react/jsx/EquipmentDetails.js");
/* harmony import */ var _FluidHandling__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./FluidHandling */ "./react/jsx/FluidHandling.js");
/* harmony import */ var _Wastes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Wastes */ "./react/jsx/Wastes.js");
/* harmony import */ var _FluidDestination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./FluidDestination */ "./react/jsx/FluidDestination.js");
/* harmony import */ var _Remarks__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Remarks */ "./react/jsx/Remarks.js");
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Axios */ "./react/jsx/Axios.js");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(now),
    _useState2 = _slicedToArray(_useState, 2),
    interventionDate = _useState2[0],
    setInterventionDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    equipment = _useState4[0],
    setEquipment = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    otherType = _useState8[0],
    setOtherType = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    detector = _useState10[0],
    setDetector = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    detectorControlDate = _useState12[0],
    setDetectorControlDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    leakLocations = _useState14[0],
    setLeakLocations = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    leakFixed = _useState16[0],
    setLeakFixed = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)({
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'BSFF': ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    fluidQuantities = _useState18[0],
    setFluidQuantities = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    container = _useState20[0],
    setContainer = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    fluidDestination = _useState22[0],
    setFluidDestination = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    remarks = _useState24[0],
    setRemarks = _useState24[1];

  // Events

  var onInterventionDateChange = function onInterventionDateChange(e) {
    console.log(e.target.value);
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
      "equipment": "/api/equipment/" + equipment.id,
      "container": container ? "/api/containers/" + container.id : null,
      "detector": detector ? "/api/detectors/" + detector.id : null,
      "user": "/api/users/" + window.user,
      "pdfPath": ""
    };
    console.log('json:', intervention);
    _Axios__WEBPACK_IMPORTED_MODULE_32__["default"].post('/interventions', intervention).then(function (response) {
      console.log("response:", response);
      handleReset();
    })["catch"](function (error) {
      console.log('ERROR', error);
    });
  };
  var handleReset = function handleReset() {
    // setInterventionDate(now);
    setEquipment(null);
    setType(null);
    setOtherType("");
    setDetector(null);
    setDetectorControlDate(null);
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
  };
  var mustInstall = function mustInstall() {
    return fluidQuantities.E > 0;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "section-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_User__WEBPACK_IMPORTED_MODULE_19__["default"], {
    data: window.user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "form-floating m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "date",
    id: "interventionDate",
    className: "form-control form-control-sm",
    defaultValue: now,
    onChange: onInterventionDateChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "interventionDate",
    className: "fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("i", {
    className: "fas fa-calendar-days"
  }), " Date de l'intervention")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Equipment__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onChange: onEquipmentChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_EquipmentDetails__WEBPACK_IMPORTED_MODULE_27__["default"], {
    data: equipment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_InterventionTypes__WEBPACK_IMPORTED_MODULE_23__["default"], {
    onChange: onTypeChange,
    data: equipment.id
  })), (type === null || type === void 0 ? void 0 : type.name) === "Autre" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_OtherType__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onChange: onOtherTypeChange
  }), type && type.name.startsWith('Contrôle') && !(equipment !== null && equipment !== void 0 && equipment.leakDetectionSystem) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Detectors__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onChange: onDetectorChange
  }), detector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_DetectorControlDate__WEBPACK_IMPORTED_MODULE_21__["default"], {
    data: detector
  }), (detector || (equipment === null || equipment === void 0 ? void 0 : equipment.leakDetectionSystem) && type && type.name.startsWith('Contrôle')) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Leakage__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onLocationChange: onLeakLocationChange,
    onFixedChange: onLeakFixedChange
  }), equipment && type && !type.name.startsWith('Contrôle') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_FluidHandling__WEBPACK_IMPORTED_MODULE_28__["default"], {
    onChange: onFluidQuantitiesChange
  }), (mustInstall() || fluidQuantities.D > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Containers__WEBPACK_IMPORTED_MODULE_26__["default"], {
    data: equipment.fluid,
    onChange: onContainerChange
  }), fluidQuantities.D > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Wastes__WEBPACK_IMPORTED_MODULE_29__["default"], {
    data: equipment.fluid.fluidType
  })), mustInstall() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_FluidDestination__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onChange: onFluidDestinationChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Remarks__WEBPACK_IMPORTED_MODULE_31__["default"], {
    onChange: onRemarksChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "d-flex d-flex-row align-items-center justify-content-between m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "btn btn-sm btn-warning",
    type: "reset",
    onClick: handleReset
  }, "Annuler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "btn btn-sm btn-danger",
    type: "submit",
    disabled: !type || !equipment
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-603d1b"], () => (__webpack_exec__("./react/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUM7SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBRyxTQUFTLEVBQUM7RUFBaUIsRUFBSyw0QkFDckMsQ0FBTSxDQUNGLGVBQ04sd0VBQ0dBLEtBQUssQ0FBQ0ksSUFBSSxDQUFDd0ksU0FBUyxpQkFDbkI7SUFBSyxTQUFTLEVBQUMsMkJBQTJCO0lBQUMsUUFBUTtFQUFBLGdCQUNqRDtJQUFHLFNBQVMsRUFBQztFQUFzQixFQUFLLEtBQUMsRUFBQzVJLEtBQUssQ0FBQ0ksSUFBSSxDQUFDaUIsSUFBSSxDQUNyRCxFQUVQckIsS0FBSyxDQUFDSSxJQUFJLENBQUN3SSxTQUFTLGlCQUNuQjtJQUFLLFNBQVMsRUFBQywyQkFBMkI7SUFBQyxRQUFRO0VBQUEsZ0JBQ2pEO0lBQUcsU0FBUyxFQUFDO0VBQWlCLEVBQUssS0FBQyxFQUFDNUksS0FBSyxDQUFDSSxJQUFJLENBQUNpQixJQUFJLENBQ2hELENBRUosZUFDUixzRUFBTSxDQUNBO0FBRVYsQ0FBQztBQUVELGlFQUFlOEMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0F4aW9zLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9Db250YWluZXJzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvckNvbnRyb2xEYXRlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9EZXRlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0VxdWlwbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWREZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRmx1aWRIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvSW50ZXJ2ZW50aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0xlYWthZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L090aGVyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvUmVtYXJrcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvV2FzdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuLy8gaW1wb3J0IFwiLi9jc3MvaW5kZXguY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vanN4L0FwcFwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbmlmIChjb250YWluZXIpIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuICByb290LnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0yXCI+XG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgIDwvZGl2PlxuKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEludGVydmVudGlvbkZvcm0gZnJvbSBcIi4vSW50ZXJ2ZW50aW9uRm9ybVwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxoMj5GaWNoZSBkJ2ludGVydmVudGlvbjwvaDI+XG4gICAgICA8SW50ZXJ2ZW50aW9uRm9ybSAvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIENyZWF0ZSBhbiBheGlvcyBvYmplY3Qgd2l0aCBkZWZhdWx0IGhlYWRlcnNcbmNvbnN0IGF4ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCIvYXBpXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpblwiOiBcIipcIixcbiAgfSxcbn0pO1xuXG4vLyBDYXRjaCB1bmF1dGhvcml6ZWQgcmVxdWVzdCBhbmQgcmVkaXJlY3QgaWYgZXJyb3JcbmF4LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiByZXNwb25zZSwgKGVycm9yKSA9PiB7XG4gIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvbG9naW4nO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgQ29udGFpbmVycyA9IChwcm9wcykgPT4ge1xuICBcbiAgY29uc3QgW2NvbnRhaW5lcnMsIHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2NvbnRhaW5lcnNCeUZsdWlkLycgKyBwcm9wcy5kYXRhLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0Q29udGFpbmVycyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGNvbnRhaW5lcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJjb250YWluZXJMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGNvbnRhaW5lcnMubWFwKChjb250YWluZXIsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2NvbnRhaW5lci5pZH0+XG4gICAgICAgICAgICB7Y29udGFpbmVyLnNlcmlhbE51bWJlcn0gLS0ge2NvbnRhaW5lci5mbHVpZFF1YW50aXR5LnRvRml4ZWQoMil9L3tjb250YWluZXIuY2FwYWNpdHkudG9GaXhlZCgyKX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWluZXJMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvdHRsZS1kcm9wbGV0XCI+PC9pPiBDb250ZW5hbnRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGV0ZWN0b3JDb250cm9sRGF0ZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGNvbnRyb2xEYXRlID0gbmV3IERhdGUocHJvcHMuZGF0YS5jb250cm9sRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItZnJcIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCJcbiAgICAgICAgdmFsdWU9e2NvbnRyb2xEYXRlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JDb250cm9sRGF0ZVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmQtY2hlY2tcIj48L2k+IERhdGUgZHUgZGVybmllciBjb250csO0bGUgKHtwcm9wcy5kYXRhLm5hbWV9KVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvckNvbnRyb2xEYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4IGZyb20gXCIuL0F4aW9zXCI7XG5cbmNvbnN0IERldGVjdG9ycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtkZXRlY3RvcnMsIHNldERldGVjdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KFwiL2RldGVjdG9yc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0RGV0ZWN0b3JzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShkZXRlY3RvcnNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJkZXRlY3RvckxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZGV0ZWN0b3JzLm1hcCgoZGV0ZWN0b3IsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2RldGVjdG9yLmlkfT5cbiAgICAgICAgICAgIHtkZXRlY3Rvci5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRldGVjdG9yTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb21wYXNzXCI+PC9pPiBEw6l0ZWN0ZXVyIGRlIGZ1aXRlc1xuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3RvcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgRXF1aXBtZW50cyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtlcXVpcG1lbnRzLCBzZXRFcXVpcG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoXCIvZXF1aXBtZW50XCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRFcXVpcG1lbnRzKHJlc3BvbnNlLmRhdGEpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGVxdWlwbWVudHNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJlcXVpcG1lbnRMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIGVxdWlwbWVudHMubWFwKChlcXVpcG1lbnQsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e2VxdWlwbWVudC5pZH0+XG4gICAgICAgICAgICB7ZXF1aXBtZW50Lm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50TGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nZWFyc1wiPjwvaT4gRXF1aXBlbWVudCBjb25jZXJuw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXF1aXBtZW50cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRXF1aXBtZW50RGV0YWlscyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtMSBtYi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZmxleCBmbGV4LW1kLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZXF1aXBtZW50TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWdcIj48L2k+IElkZW50aWZpY2F0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuZmx1aWQubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWROYW1lXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kcm9wbGV0XCI+PC9pPiBEw6lub21pbmF0aW9uIGR1IGZsdWlkZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS53ZWlnaHQudG9GaXhlZCgyKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2VpZ2h0LWhhbmdpbmdcIj48L2k+IENoYXJnZSB0b3RhbGUgKGtnKVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkQ08yXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLmNvMkVxVG9ubmFnZS50b0ZpeGVkKDIpfSBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmx1aWRDTzJcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkXCI+PC9pPiBUb25uYWdlIMOpcXVpdmFsZW50IEMwPHN1Yj4yPC9zdWI+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBtdC0xXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICBpZD1cImxlYWtEZXRlY3Rpb25TeXN0ZW1cIlxuICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLmRhdGEubGVha0RldGVjdGlvblN5c3RlbX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsZWFrRGV0ZWN0aW9uU3lzdGVtXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZFwiPjwvaT4gUHLDqXNlbmNlIGQndW4gc3lzdMOobWUgcGVybWFuZW50IGRlIGTDqXRlY3Rpb24gZGUgZnVpdGVzXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnREZXRhaWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbHVpZERlc3RpbmF0aW9uID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtLTJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgaHRtbEZvcj1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgPlxuICAgICAgICBJbnN0YWxsYXRpb24gcHLDqXZ1ZSBkZSBkZXN0aW5hdGlvbiBkdSBmbHVpZGUgcsOpY3Vww6lyw6lcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBpZD1cImNvbGxlY3RlZEZsdWlkRGVzdGluYXRpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOb20sIFNJUkVULCBhZHJlc3NlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkRGVzdGluYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgJ3JlYWN0LXRvb2x0aXAvZGlzdC9yZWFjdC10b29sdGlwLmNzcyc7XG5cbmNvbnN0IEZsdWlkSGFuZGxpbmcgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZmx1aWRRdWFudGl0aWVzLCBzZXRGbHVpZFF1YW50aXRpZXNdID0gdXNlU3RhdGUoe1xuICAgICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnXG4gIH0pO1xuICBjb25zdCBbc3VtQUJDLCBzZXRTdW1BQkNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1ERSwgc2V0U3VtREVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmbHVpZExvYWRpbmcsIHNldEZsdWlkTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmbHVpZENvbGxlY3RpbmcsIHNldEZsdWlkQ29sbGVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25GbHVpZEFDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBBID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBBOiBBXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bUFCQyhBK2ZsdWlkUXVhbnRpdGllc1snQiddK2ZsdWlkUXVhbnRpdGllc1snQyddKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkQkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEIgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEI6IEJcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtQUJDKGZsdWlkUXVhbnRpdGllc1snQSddK0IrZmx1aWRRdWFudGl0aWVzWydDJ10pO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRDQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQyA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQzogQ1xuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1BQkMoZmx1aWRRdWFudGl0aWVzWydBJ10rZmx1aWRRdWFudGl0aWVzWydCJ10rQyk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBEID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBEOiBEXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bURFKEQrZmx1aWRRdWFudGl0aWVzWydFJ10pO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRFQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgRSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgRTogRVxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1ERShmbHVpZFF1YW50aXRpZXNbJ0QnXStFKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkJzZmZDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEJTRkY6IGUudGFyZ2V0LnZhbHVlXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbXgtYXV0byBwLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IE1hbmlwdWxhdGlvbiBkdSBmbHVpZGUgZnJpZ29yaWfDqG5lXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4tY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCIgaWQ9XCJsb2FkaW5nRmx1aWRcIiBvbkNsaWNrPXsoZSkgPT4ge3NldEZsdWlkTG9hZGluZyhlLnRhcmdldC5jaGVja2VkKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwibG9hZGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPSd0dC1sb2FkJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLWRvd25cIj48L2k+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8VG9vbHRpcCBhbmNob3JJZD1cInR0LWxvYWRcIiBjb250ZW50PVwiQ2hhcmdlbWVudFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4tY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCIgaWQ9XCJjb2xsZWN0aW5nRmx1aWRcIiBvbkNsaWNrPXsoZSkgPT4ge3NldEZsdWlkQ29sbGVjdGluZyhlLnRhcmdldC5jaGVja2VkKX19IC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYm9yZGVyLTAgYnRuLW91dGxpbmUtZGFyayBidG4tc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBodG1sRm9yPVwiY29sbGVjdGluZ0ZsdWlkXCJcbiAgICAgICAgICAgIGlkPVwidHQtY29sbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tdXBcIj48L2k+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8VG9vbHRpcCBhbmNob3JJZD1cInR0LWNvbGxlY3RcIiBjb250ZW50PVwiUsOpY3Vww6lyYXRpb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWZsZXggZmxleC1tZC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGhpZGRlbj17IWZsdWlkTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1BQkN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b3RhbExvYWRlZEZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10dXJuLWRvd25cIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgY2hhcmfDqWUgPHN1cD4oQStCK0MpPC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQUNoYW5nZX1cbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aXJnaW5GbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihBKTwvc3VwPiBEb250IGZsdWlkZSB2aWVyZ2VcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQik8L3N1cD4gRG9udCBmbHVpZGUgcmVjeWNsw6lcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkQ0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ2VuZXJhdGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oQyk8L3N1cD4gRG9udCBmbHVpZGUgcsOpZ8OpbsOpcsOpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGhpZGRlbj17IWZsdWlkQ29sbGVjdGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHZhbHVlPXtzdW1ERX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsUmV0cmlldmVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tdXBcIj48L2k+IFF1YW50aXTDqSB0b3RhbGUgcsOpY3Vww6lyw6llIDxzdXA+KEQrRSk8L3N1cD48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZERDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oRCk8L3N1cD4gRG9udCBmbHVpZGUgZGVzdGluw6kgYXUgdHJhaXRlbWVudFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJic2ZmTnVtYmVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQnNmZkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJzZmZOdW1iZXJcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIE51bcOpcm8gZHUgQlNGRiAoc2kgY29ubnUpXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25GbHVpZEVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXVzYWJsZUZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEUpPC9zdXA+IERvbnQgZmx1aWRlIGNvbnNlcnbDqSBwb3VyIHLDqXV0aWxpc2F0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkSGFuZGxpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IERldGVjdG9ycyBmcm9tIFwiLi9EZXRlY3RvcnNcIjtcbmltcG9ydCBEZXRlY3RvckNvbnRyb2xEYXRlIGZyb20gXCIuL0RldGVjdG9yQ29udHJvbERhdGVcIlxuaW1wb3J0IEVxdWlwbWVudHMgZnJvbSBcIi4vRXF1aXBtZW50XCI7XG5pbXBvcnQgSW50ZXJ2ZW50aW9uVHlwZXMgZnJvbSBcIi4vSW50ZXJ2ZW50aW9uVHlwZXNcIjtcbmltcG9ydCBPdGhlclR5cGUgZnJvbSBcIi4vT3RoZXJUeXBlXCI7XG5pbXBvcnQgTGVha2FnZSBmcm9tIFwiLi9MZWFrYWdlXCI7XG5pbXBvcnQgQ29udGFpbmVycyBmcm9tIFwiLi9Db250YWluZXJzXCI7XG5pbXBvcnQgRXF1aXBtZW50RGV0YWlscyBmcm9tIFwiLi9FcXVpcG1lbnREZXRhaWxzXCI7XG5pbXBvcnQgRmx1aWRIYW5kbGluZyBmcm9tIFwiLi9GbHVpZEhhbmRsaW5nXCI7XG5pbXBvcnQgV2FzdGVzIGZyb20gXCIuL1dhc3Rlc1wiO1xuaW1wb3J0IEZsdWlkRGVzdGluYXRpb24gZnJvbSBcIi4vRmx1aWREZXN0aW5hdGlvblwiO1xuaW1wb3J0IFJlbWFya3MgZnJvbSBcIi4vUmVtYXJrc1wiO1xuXG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uRm9ybSA9ICgpID0+IHtcblxuICAvLyBDdXJyZW50IGRhdGVcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XG4gIGNvbnN0IG5vdyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItQ0FcIik7XG4gIFxuICAvLyBTdGF0ZXNcbiAgY29uc3QgW2ludGVydmVudGlvbkRhdGUsIHNldEludGVydmVudGlvbkRhdGVdID0gdXNlU3RhdGUobm93KTtcbiAgY29uc3QgW2VxdWlwbWVudCwgc2V0RXF1aXBtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW290aGVyVHlwZSwgc2V0T3RoZXJUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGV0ZWN0b3IsIHNldERldGVjdG9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGV0ZWN0b3JDb250cm9sRGF0ZSwgc2V0RGV0ZWN0b3JDb250cm9sRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xlYWtMb2NhdGlvbnMsIHNldExlYWtMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGVha0ZpeGVkLCBzZXRMZWFrRml4ZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmx1aWRRdWFudGl0aWVzLCBzZXRGbHVpZFF1YW50aXRpZXNdID0gdXNlU3RhdGUoe1xuICAgICdBJzogMCwgJ0InOiAwLCAnQyc6IDAsICdEJzogMCwgJ0UnOiAwLCAnQlNGRic6ICcnXG4gIH0pO1xuICBjb25zdCBbY29udGFpbmVyLCBzZXRDb250YWluZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmbHVpZERlc3RpbmF0aW9uLCBzZXRGbHVpZERlc3RpbmF0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVtYXJrcywgc2V0UmVtYXJrc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBFdmVudHNcbiAgXG4gIGNvbnN0IG9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEludGVydmVudGlvbkRhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcXVpcG1lbnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGhhbmRsZVJlc2V0KCk7XG4gICAgc2V0RXF1aXBtZW50KGUpO1xuICB9XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUeXBlKGUpO1xuICB9XG5cbiAgY29uc3Qgb25PdGhlclR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE90aGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkRldGVjdG9yQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXREZXRlY3RvcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0xvY2F0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRMZWFrTG9jYXRpb25zKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrRml4ZWRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtGaXhlZChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZSk7XG4gIH1cblxuICBjb25zdCBvbkNvbnRhaW5lckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyKGUpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZERlc3RpbmF0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uUmVtYXJrc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UmVtYXJrcyhlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW50ZXJ2ZW50aW9uID0ge1xuICAgICAgXCJkYXRlXCI6IGludGVydmVudGlvbkRhdGUsXG4gICAgICBcInZpcmdpbkZsdWlkUXVhbnRpdHlcIjogZmx1aWRRdWFudGl0aWVzLkEsXG4gICAgICBcInJlY3ljbGVkRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuQixcbiAgICAgIFwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5DLFxuICAgICAgXCJmb3JQcm9jZXNzaW5nRmx1aWRRdWFudGl0eVwiOiBmbHVpZFF1YW50aXRpZXMuRCxcbiAgICAgIFwiYnNmZk51bWJlclwiOiBmbHVpZFF1YW50aXRpZXMuQlNGRixcbiAgICAgIFwicmV1c2FibGVGbHVpZFF1YW50aXR5XCI6IGZsdWlkUXVhbnRpdGllcy5FLFxuICAgICAgXCJjb2xsZWN0ZWRGbHVpZERlc3RpbmF0aW9uXCI6IGZsdWlkRGVzdGluYXRpb24sXG4gICAgICBcInJlbWFya3NcIjogcmVtYXJrcyxcbiAgICAgIFwiaW50ZXJ2ZW50aW9uVHlwZVwiOiBcIi9hcGkvaW50ZXJ2ZW50aW9uX3R5cGVzL1wiICsgdHlwZS5pZCxcbiAgICAgIFwiZXF1aXBtZW50XCI6IFwiL2FwaS9lcXVpcG1lbnQvXCIgKyBlcXVpcG1lbnQuaWQsXG4gICAgICBcImNvbnRhaW5lclwiOiBjb250YWluZXI/XCIvYXBpL2NvbnRhaW5lcnMvXCIgKyBjb250YWluZXIuaWQ6bnVsbCxcbiAgICAgIFwiZGV0ZWN0b3JcIjogZGV0ZWN0b3I/XCIvYXBpL2RldGVjdG9ycy9cIiArIGRldGVjdG9yLmlkOm51bGwsXG4gICAgICBcInVzZXJcIjogXCIvYXBpL3VzZXJzL1wiICsgd2luZG93LnVzZXIsXG4gICAgICBcInBkZlBhdGhcIjogXCJcIixcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coJ2pzb246JywgaW50ZXJ2ZW50aW9uKTtcblxuICAgIGF4LnBvc3QoJy9pbnRlcnZlbnRpb25zJyxcbiAgICAgIGludGVydmVudGlvblxuICAgIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6XCIsIHJlc3BvbnNlKTtcbiAgICAgIGhhbmRsZVJlc2V0KCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICAvLyBzZXRJbnRlcnZlbnRpb25EYXRlKG5vdyk7XG4gICAgc2V0RXF1aXBtZW50KG51bGwpO1xuICAgIHNldFR5cGUobnVsbCk7XG4gICAgc2V0T3RoZXJUeXBlKFwiXCIpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICAgIHNldERldGVjdG9yQ29udHJvbERhdGUobnVsbCk7XG4gICAgc2V0TGVha0xvY2F0aW9ucyhbXSk7XG4gICAgc2V0TGVha0ZpeGVkKFtdKTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoeyAnQSc6IDAsICdCJzogMCwgJ0MnOiAwLCAnRCc6IDAsICdFJzogMCwgJ0JTRkYnOiAnJ30pO1xuICAgIHNldENvbnRhaW5lcihudWxsKTtcbiAgICBzZXRGbHVpZERlc3RpbmF0aW9uKFwiXCIpO1xuICAgIHNldFJlbWFya3MoXCJcIik7XG4gIH1cblxuICBjb25zdCBtdXN0SW5zdGFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gZmx1aWRRdWFudGl0aWVzLkUgPiAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8VXNlciBkYXRhPXt3aW5kb3cudXNlcn0gLz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3d9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlcnZlbnRpb25EYXRlXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYWxlbmRhci1kYXlzXCI+PC9pPiBEYXRlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxFcXVpcG1lbnRzIG9uQ2hhbmdlPXtvbkVxdWlwbWVudENoYW5nZX0gLz5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEVxdWlwbWVudERldGFpbHMgZGF0YT17ZXF1aXBtZW50fSAvPlxuICAgICAgICAgICAgICAgIDxJbnRlcnZlbnRpb25UeXBlcyBvbkNoYW5nZT17b25UeXBlQ2hhbmdlfSBkYXRhPXtlcXVpcG1lbnQuaWR9IC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB0eXBlPy5uYW1lID09PSBcIkF1dHJlXCIgICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHR5cGUgJiYgdHlwZS5uYW1lLnN0YXJ0c1dpdGgoJ0NvbnRyw7RsZScpICYmICFlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiZcbiAgICAgICAgICAgICAgPERldGVjdG9ycyBvbkNoYW5nZT17b25EZXRlY3RvckNoYW5nZX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgZGV0ZWN0b3IgJiZcbiAgICAgICAgICAgICAgICA8RGV0ZWN0b3JDb250cm9sRGF0ZSBkYXRhPXtkZXRlY3Rvcn0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgKGRldGVjdG9yIHx8IChlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiYgdHlwZSAmJiB0eXBlLm5hbWUuc3RhcnRzV2l0aCgnQ29udHLDtGxlJykpKSAmJlxuICAgICAgICAgICAgICAgIDxMZWFrYWdlXG4gICAgICAgICAgICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlPXtvbkxlYWtMb2NhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRml4ZWRDaGFuZ2U9e29uTGVha0ZpeGVkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmIHR5cGUgJiYgIXR5cGUubmFtZS5zdGFydHNXaXRoKCdDb250csO0bGUnKSAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGbHVpZEhhbmRsaW5nIG9uQ2hhbmdlPXtvbkZsdWlkUXVhbnRpdGllc0NoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgKG11c3RJbnN0YWxsKCkgfHwgZmx1aWRRdWFudGl0aWVzLkQgPiAwKSAmJlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2VxdWlwbWVudC5mbHVpZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db250YWluZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyBmbHVpZFF1YW50aXRpZXMuRCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIDxXYXN0ZXMgZGF0YT17ZXF1aXBtZW50LmZsdWlkLmZsdWlkVHlwZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsgbXVzdEluc3RhbGwoKSAmJlxuICAgICAgICAgICAgICAgIDxGbHVpZERlc3RpbmF0aW9uIG9uQ2hhbmdlPXtvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgIDxSZW1hcmtzIG9uQ2hhbmdlPXtvblJlbWFya3NDaGFuZ2V9IC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtLTJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXdhcm5pbmdcIiB0eXBlPVwicmVzZXRcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+QW5udWxlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXR5cGUgfHwgIWVxdWlwbWVudH0+XG4gICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2ZW50aW9uRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBJbnRlcnZlbnRpb25UeXBlcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL2ludGVydmVudGlvbl90eXBlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRUeXBlcyhyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAga2V5PXtwcm9wcy5kYXRhfSAvLyByZXNldCBpZiBlcXVpcG1lbnQgY2hhbmdlZFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZSh0eXBlc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cInR5cGVMYWJlbFwiXG4gICAgICA+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17bnVsbH0+LS0tLS0tPC9vcHRpb24+XG4gICAgICB7XG4gICAgICAgIHR5cGVzLm1hcCgodHlwZSwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17dHlwZS5pZH0+XG4gICAgICAgICAgICB7dHlwZS5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNjcmV3ZHJpdmVyLXdyZW5jaFwiPjwvaT4gTmF0dXJlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvblR5cGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0ICdyZWFjdC10b29sdGlwL2Rpc3QvcmVhY3QtdG9vbHRpcC5jc3MnO1xuXG5jb25zdCBMZWFrID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXIgYm9yZGVyLTAgYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQgcm91bmRlZCBtZS0yXCI+e3Byb3BzLmlkKzF9PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGJvcmRlciBib3JkZXItMCBtbC0yIG1lLTJcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYWxpc2F0aW9uIGRlIGxhIGZ1aXRlXCJcbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IExlYWthZ2UgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbbGVha0NvbXBvbmVudHMsIHNldExlYWtDb21wb25lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpeGVkLCBzZXRGaXhlZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkTGVhayA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBsZWFrQ29tcG9uZW50cy5sZW5ndGg7XG5cbiAgICBzZXRMZWFrQ29tcG9uZW50cyhbXG4gICAgICAuLi5sZWFrQ29tcG9uZW50cyxcbiAgICAgIDxMZWFrIGlkPXtpbmRleH0gb25DaGFuZ2U9e29uTGVha0NoYW5nZX0gLz5cbiAgICBdKTtcblxuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9ucywgXCJcIl07XG4gICAgbGV0IGZpeGVkQ29weSA9IFsuLi5maXhlZF07XG4gICAgZml4ZWRDb3B5LnB1c2goZmFsc2UpO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGVhayA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQgLSAyMDtcbiAgICBsZXQgbGVha0NvbXBvbmVudHNDb3B5ID0gWy4uLmxlYWtDb21wb25lbnRzXTtcbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnNdO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdXG4gICAgbGVha0NvbXBvbmVudHNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYXRpb25zQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGZpeGVkQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldExlYWtDb21wb25lbnRzKGxlYWtDb21wb25lbnRzQ29weSk7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgICBwcm9wcy5vbkZpeGVkQ2hhbmdlKGZpeGVkQ29weSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCBsb2NhdGlvbnNDb3B5ID0gWy4uLmxvY2F0aW9uc107XG4gICAgbG9jYXRpb25zQ29weVtpbmRleF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25Mb2NhdGlvbkNoYW5nZShsb2NhdGlvbnNDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0ZpeGVkID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZCAtIDEwO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdO1xuICAgIGZpeGVkQ29weVtpbmRleF0gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHNldEZpeGVkKGZpeGVkQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRcIj48L2k+IEZ1aXRlcyBjb25zdGF0w6llcyBsb3JzIGR1IGNvbnRyw7RsZSBkJ8OpdGFuY2jDqWl0w6lcbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodFwiXG4gICAgICAgICAgb25DbGljaz17YWRkTGVha31cbiAgICAgICAgICBkaXNhYmxlZD17bGVha0NvbXBvbmVudHMubGVuZ3RoID09PSAzfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVha0NvbXBvbmVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwibS0yIGJvcmRlciBib3JkZXItMSByb3VuZGVkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBsZWFrQ29tcG9uZW50cy5tYXAoKGxlYWssIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtLTIgZC1mbGV4IGQtZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1ldmVuXCI+XG4gICAgICAgICAgICAgIHtsZWFrfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiXG4gICAgICAgICAgICAgICAgaWQ9ezEwK2l9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxlYWtGaXhlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGlkPVwidHQtd3JlbmNoXCIgaHRtbEZvcj17MTAraX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBib3JkZXIgYm9yZGVyLTAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13cmVuY2hcIj48L2k+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtd3JlbmNoXCIgY29udGVudD1cIkZ1aXRlIHLDqXBhcsOpZVwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD17MjAraX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xvc2UgbWUtMyByb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlTGVha31cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpKzEgPCBsZWFrQ29tcG9uZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVha2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gSW5wdXQgdGV4dCBmb3IgXCJvdGhlclwiIGludGVydmVudGlvbiB0eXBlXG5jb25zdCBPdGhlclR5cGUgPSAocHJvcHMpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cIm90aGVySW50ZXJ2ZW50aW9uVHlwZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVmV1aWxsZXogcHLDqWNpc2VyIGxlIHR5cGUgZCdpbnRlcnZlbnRpb24uLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlclR5cGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlbWFya3MgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwicmVtYXJrc1wiXG4gICAgICA+XG4gICAgICAgIE9ic2VydmF0aW9uc1xuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwicmVtYXJrc1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWFya3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgVXNlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldCgnL3VzZXJzLycgKyBwcm9wcy5kYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICB9KVxuICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIgbWUtMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT4ge3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFdhc3RlcyA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1zZWNvbmRhcnkgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyXCI+PC9pPiBEw6lub21pbmF0aW9uIEFEUi9SSURcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5kYXRhLmZsYW1tYWJsZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIHJvdW5kZWQtMFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWR1bXBzdGVyLWZpcmVcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3Byb3BzLmRhdGEuZmxhbW1hYmxlIHx8XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgcm91bmRlZC0wXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHVtcHN0ZXJcIj48L2k+IHtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhc3RlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIkludGVydmVudGlvbkZvcm0iLCJheGlvcyIsImF4IiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lcnMiLCJwcm9wcyIsImNvbnRhaW5lcnMiLCJzZXRDb250YWluZXJzIiwiZ2V0IiwiZGF0YSIsImlkIiwidGhlbiIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaSIsInNlcmlhbE51bWJlciIsImZsdWlkUXVhbnRpdHkiLCJ0b0ZpeGVkIiwiY2FwYWNpdHkiLCJEZXRlY3RvckNvbnRyb2xEYXRlIiwiY29udHJvbERhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibmFtZSIsIkRldGVjdG9ycyIsImRldGVjdG9ycyIsInNldERldGVjdG9ycyIsImRldGVjdG9yIiwiRXF1aXBtZW50cyIsImVxdWlwbWVudHMiLCJzZXRFcXVpcG1lbnRzIiwiZXF1aXBtZW50IiwiRXF1aXBtZW50RGV0YWlscyIsImZsdWlkIiwid2VpZ2h0IiwiY28yRXFUb25uYWdlIiwibGVha0RldGVjdGlvblN5c3RlbSIsIkZsdWlkRGVzdGluYXRpb24iLCJUb29sdGlwIiwiRmx1aWRIYW5kbGluZyIsImZsdWlkUXVhbnRpdGllcyIsInNldEZsdWlkUXVhbnRpdGllcyIsInN1bUFCQyIsInNldFN1bUFCQyIsInN1bURFIiwic2V0U3VtREUiLCJmbHVpZExvYWRpbmciLCJzZXRGbHVpZExvYWRpbmciLCJmbHVpZENvbGxlY3RpbmciLCJzZXRGbHVpZENvbGxlY3RpbmciLCJvbkZsdWlkQUNoYW5nZSIsIkEiLCJOdW1iZXIiLCJmcSIsIm9uRmx1aWRCQ2hhbmdlIiwiQiIsIm9uRmx1aWRDQ2hhbmdlIiwiQyIsIm9uRmx1aWREQ2hhbmdlIiwiRCIsIm9uRmx1aWRFQ2hhbmdlIiwiRSIsIm9uQnNmZkNoYW5nZSIsIkJTRkYiLCJjaGVja2VkIiwiVXNlciIsIkludGVydmVudGlvblR5cGVzIiwiT3RoZXJUeXBlIiwiTGVha2FnZSIsIldhc3RlcyIsIlJlbWFya3MiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJub3ciLCJpbnRlcnZlbnRpb25EYXRlIiwic2V0SW50ZXJ2ZW50aW9uRGF0ZSIsInNldEVxdWlwbWVudCIsInR5cGUiLCJzZXRUeXBlIiwib3RoZXJUeXBlIiwic2V0T3RoZXJUeXBlIiwic2V0RGV0ZWN0b3IiLCJkZXRlY3RvckNvbnRyb2xEYXRlIiwic2V0RGV0ZWN0b3JDb250cm9sRGF0ZSIsImxlYWtMb2NhdGlvbnMiLCJzZXRMZWFrTG9jYXRpb25zIiwibGVha0ZpeGVkIiwic2V0TGVha0ZpeGVkIiwic2V0Q29udGFpbmVyIiwiZmx1aWREZXN0aW5hdGlvbiIsInNldEZsdWlkRGVzdGluYXRpb24iLCJyZW1hcmtzIiwic2V0UmVtYXJrcyIsIm9uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJvbkVxdWlwbWVudENoYW5nZSIsImhhbmRsZVJlc2V0Iiwib25UeXBlQ2hhbmdlIiwib25PdGhlclR5cGVDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25MZWFrTG9jYXRpb25DaGFuZ2UiLCJvbkxlYWtGaXhlZENoYW5nZSIsIm9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlIiwib25Db250YWluZXJDaGFuZ2UiLCJvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2UiLCJvblJlbWFya3NDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImludGVydmVudGlvbiIsInVzZXIiLCJwb3N0IiwibXVzdEluc3RhbGwiLCJzdGFydHNXaXRoIiwiZmx1aWRUeXBlIiwidHlwZXMiLCJzZXRUeXBlcyIsIkxlYWsiLCJsZWFrQ29tcG9uZW50cyIsInNldExlYWtDb21wb25lbnRzIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwiZml4ZWQiLCJzZXRGaXhlZCIsImFkZExlYWsiLCJpbmRleCIsImxlbmd0aCIsIm9uTGVha0NoYW5nZSIsImxvY2F0aW9uc0NvcHkiLCJmaXhlZENvcHkiLCJwdXNoIiwib25Mb2NhdGlvbkNoYW5nZSIsIm9uRml4ZWRDaGFuZ2UiLCJyZW1vdmVMZWFrIiwibGVha0NvbXBvbmVudHNDb3B5Iiwic3BsaWNlIiwib25MZWFrRml4ZWQiLCJsZWFrIiwic2V0VXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmxhbW1hYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==