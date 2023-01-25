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
/* harmony import */ var _Detectors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Detectors */ "./react/jsx/Detectors.js");
/* harmony import */ var _DetectorControlDate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DetectorControlDate */ "./react/jsx/DetectorControlDate.js");
/* harmony import */ var _Equipment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Equipment */ "./react/jsx/Equipment.js");
/* harmony import */ var _InterventionTypes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./InterventionTypes */ "./react/jsx/InterventionTypes.js");
/* harmony import */ var _OtherType__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./OtherType */ "./react/jsx/OtherType.js");
/* harmony import */ var _Leakage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Leakage */ "./react/jsx/Leakage.js");
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Containers */ "./react/jsx/Containers.js");
/* harmony import */ var _EquipmentDetails__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./EquipmentDetails */ "./react/jsx/EquipmentDetails.js");
/* harmony import */ var _FluidHandling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./FluidHandling */ "./react/jsx/FluidHandling.js");
/* harmony import */ var _Wastes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Wastes */ "./react/jsx/Wastes.js");
/* harmony import */ var _FluidDestination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./FluidDestination */ "./react/jsx/FluidDestination.js");
/* harmony import */ var _Remarks__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Remarks */ "./react/jsx/Remarks.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var InterventionForm = function InterventionForm() {
  // States
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    interventionDate = _useState2[0],
    setInterventionDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    otherType = _useState6[0],
    setOtherType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    equipment = _useState8[0],
    setEquipment = _useState8[1];
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
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)({}),
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

  // Current date
  var date = new Date();
  date.setDate(date.getDate());
  var now = date.toLocaleDateString("fr-CA");

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
    alert("The form has been submitted! ");
    e.preventDefault;
  };
  var handleReset = function handleReset() {
    setInterventionDate(null);
    setType(null);
    setOtherType(null);
    setEquipment(null);
    setDetector(null);
    setDetectorControlDate(null);
    setLeakLocations([]);
    setLeakFixed([]);
    setFluidQuantities({});
    setContainer(null);
    setFluidDestination("");
    setRemarks("");
  };
  var mustInstall = function mustInstall() {
    return fluidQuantities['E'] > 0;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "section-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
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
  }), " Date de l'intervention")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Equipment__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onChange: onEquipmentChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_EquipmentDetails__WEBPACK_IMPORTED_MODULE_26__["default"], {
    data: equipment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_InterventionTypes__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onChange: onTypeChange,
    data: equipment.id
  })), (type === null || type === void 0 ? void 0 : type.name) === "Autre" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_OtherType__WEBPACK_IMPORTED_MODULE_23__["default"], {
    onChange: onOtherTypeChange
  }), type && type.name.startsWith('Contrôle') && !(equipment !== null && equipment !== void 0 && equipment.leakDetectionSystem) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Detectors__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onChange: onDetectorChange
  }), detector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_DetectorControlDate__WEBPACK_IMPORTED_MODULE_20__["default"], {
    data: detector
  }), (detector || (equipment === null || equipment === void 0 ? void 0 : equipment.leakDetectionSystem) && type && type.name.startsWith('Contrôle')) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Leakage__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onLocationChange: onLeakLocationChange,
    onFixedChange: onLeakFixedChange
  }), equipment && type && !type.name.startsWith('Contrôle') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_FluidHandling__WEBPACK_IMPORTED_MODULE_27__["default"], {
    onChange: onFluidQuantitiesChange
  }), (mustInstall() || fluidQuantities['D'] > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Containers__WEBPACK_IMPORTED_MODULE_25__["default"], {
    data: equipment.fluid,
    onChange: onContainerChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Wastes__WEBPACK_IMPORTED_MODULE_28__["default"], {
    data: equipment.fluid.fluidType.name
  }))), mustInstall() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_FluidDestination__WEBPACK_IMPORTED_MODULE_29__["default"], {
    onChange: onFluidDestinationChange
  }), equipment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Remarks__WEBPACK_IMPORTED_MODULE_30__["default"], {
    onChange: onRemarksChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "d-flex d-flex-row align-items-center justify-content-between m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "btn btn-sm btn-warning",
    type: "reset",
    onClick: handleReset
  }, "Annuler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
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

/***/ "./react/jsx/Wastes.js":
/*!*****************************!*\
  !*** ./react/jsx/Wastes.js ***!
  \*****************************/
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
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Wastes = function Wastes(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    wasteType = _useState2[0],
    setWasteType = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "my-2 bg-secondary p-2 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "text-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fas fa-dumpster"
  }), " D\xE9nomination ADR/RID")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDNUM7SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDekI7SUFBRyxTQUFTLEVBQUM7RUFBaUIsRUFBSyw0QkFDckMsQ0FBTSxDQUNGLENBQ0Y7QUFFVixDQUFDO0FBRUQsaUVBQWVuRSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0RldGVjdG9yQ29udHJvbERhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVhY3QvanN4L0RldGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvRXF1aXBtZW50LmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9FcXVpcG1lbnREZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9GbHVpZERlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9GbHVpZEhhbmRsaW5nLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9JbnRlcnZlbnRpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9JbnRlcnZlbnRpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvTGVha2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC9qc3gvT3RoZXJUeXBlLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9SZW1hcmtzLmpzIiwid2VicGFjazovLy8uL3JlYWN0L2pzeC9XYXN0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9qc3gvQXBwXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuaWYgKGNvbnRhaW5lcikge1xuICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG4gIHJvb3QucmVuZGVyKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTJcIj5cbiAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICA8QXBwIC8+XG4gICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgPC9kaXY+XG4pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW50ZXJ2ZW50aW9uRm9ybSBmcm9tIFwiLi9JbnRlcnZlbnRpb25Gb3JtXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPGgyPkZpY2hlIGQnaW50ZXJ2ZW50aW9uPC9oMj5cbiAgICAgIDxJbnRlcnZlbnRpb25Gb3JtIC8+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gQ3JlYXRlIGFuIGF4aW9zIG9iamVjdCB3aXRoIGRlZmF1bHQgaGVhZGVyc1xuY29uc3QgYXggPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcIi9hcGlcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbi8vIENhdGNoIHVuYXV0aG9yaXplZCByZXF1ZXN0IGFuZCByZWRpcmVjdCBpZiBlcnJvclxuYXguaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHJlc3BvbnNlLCAoZXJyb3IpID0+IHtcbiAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gJy9sb2dpbic7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBheDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBDb250YWluZXJzID0gKHByb3BzKSA9PiB7XG4gIFxuICBjb25zdCBbY29udGFpbmVycywgc2V0Q29udGFpbmVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXguZ2V0KCcvY29udGFpbmVyc0J5Rmx1aWQvJyArIHByb3BzLmRhdGEuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRDb250YWluZXJzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH0sIFtwcm9wcy5kYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoY29udGFpbmVyc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImNvbnRhaW5lckxhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgY29udGFpbmVycy5tYXAoKGNvbnRhaW5lciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17Y29udGFpbmVyLmlkfT5cbiAgICAgICAgICAgIHtjb250YWluZXIuc2VyaWFsTnVtYmVyfSAtLSB7Y29udGFpbmVyLmZsdWlkUXVhbnRpdHkudG9GaXhlZCgyKX0ve2NvbnRhaW5lci5jYXBhY2l0eS50b0ZpeGVkKDIpfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhaW5lckxhYmVsXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm90dGxlLWRyb3BsZXRcIj48L2k+IENvbnRlbmFudFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEZXRlY3RvckNvbnRyb2xEYXRlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY29udHJvbERhdGUgPSBuZXcgRGF0ZShwcm9wcy5kYXRhLmNvbnRyb2xEYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1mclwiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yQ29udHJvbERhdGVcIlxuICAgICAgICB2YWx1ZT17Y29udHJvbERhdGV9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRlY3RvckNvbnRyb2xEYXRlXCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsaXBib2FyZC1jaGVja1wiPjwvaT4gRGF0ZSBkdSBkZXJuaWVyIGNvbnRyw7RsZSAoe3Byb3BzLmRhdGEubmFtZX0pXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdG9yQ29udHJvbERhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgRGV0ZWN0b3JzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2RldGVjdG9ycywgc2V0RGV0ZWN0b3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoXCIvZGV0ZWN0b3JzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXREZXRlY3RvcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3Byb3BzLm9uQ2hhbmdlKGRldGVjdG9yc1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImRldGVjdG9yTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICBkZXRlY3RvcnMubWFwKChkZXRlY3RvciwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17ZGV0ZWN0b3IuaWR9PlxuICAgICAgICAgICAge2RldGVjdG9yLm5hbWV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGV0ZWN0b3JMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvbXBhc3NcIj48L2k+IETDqXRlY3RldXIgZGUgZnVpdGVzXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdG9ycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheCBmcm9tIFwiLi9BeGlvc1wiO1xuXG5jb25zdCBFcXVpcG1lbnRzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2VxdWlwbWVudHMsIHNldEVxdWlwbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4LmdldChcIi9lcXVpcG1lbnRcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldEVxdWlwbWVudHMocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZXF1aXBtZW50c1tlLnRhcmdldC52YWx1ZV0pfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgZm9ybS1zZWxlY3Qtc21cIlxuICAgICAgICBpZD1cImVxdWlwbWVudExhYmVsXCJcbiAgICAgID5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPXtudWxsfT4tLS0tLS08L29wdGlvbj5cbiAgICAgIHtcbiAgICAgICAgZXF1aXBtZW50cy5tYXAoKGVxdWlwbWVudCwgaSkgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9IGtleT17ZXF1aXBtZW50LmlkfT5cbiAgICAgICAgICAgIHtlcXVpcG1lbnQubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlcXVpcG1lbnRMYWJlbFwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdlYXJzXCI+PC9pPiBFcXVpcGVtZW50IGNvbmNlcm7DqVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcXVpcG1lbnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFcXVpcG1lbnREZXRhaWxzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0xIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1mbGV4IGZsZXgtbWQtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJlcXVpcG1lbnROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhZ1wiPjwvaT4gSWRlbnRpZmljYXRpb25cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIGZsZXgteGwtZmlsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItMCBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBpZD1cImZsdWlkTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuZGF0YS5mbHVpZC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZE5hbWVcIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRyb3BsZXRcIj48L2k+IETDqW5vbWluYXRpb24gZHUgZmx1aWRlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBmbGV4LXhsLWZpbGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSByb3VuZGVkLTBcIlxuICAgICAgICAgICAgaWQ9XCJmbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5kYXRhLndlaWdodC50b0ZpeGVkKDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwic21hbGwgZnctYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13ZWlnaHQtaGFuZ2luZ1wiPjwvaT4gQ2hhcmdlIHRvdGFsZSAoa2cpXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgZmxleC14bC1maWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci0wIGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcm91bmRlZC0wXCJcbiAgICAgICAgICAgIGlkPVwiZmx1aWRDTzJcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmRhdGEuY28yRXFUb25uYWdlLnRvRml4ZWQoMil9IFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbHVpZENPMlwiIGNsYXNzTmFtZT1cInNtYWxsIGZ3LWJvbGQgdGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvdWRcIj48L2k+IFRvbm5hZ2Ugw6lxdWl2YWxlbnQgQzA8c3ViPjI8L3N1Yj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoIG10LTFcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgIGlkPVwibGVha0RldGVjdGlvblN5c3RlbVwiXG4gICAgICAgICAgY2hlY2tlZD17cHJvcHMuZGF0YS5sZWFrRGV0ZWN0aW9uU3lzdGVtfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxlYWtEZXRlY3Rpb25TeXN0ZW1cIiBjbGFzc05hbWU9XCJzbWFsbCBmdy1ib2xkIHRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kXCI+PC9pPiBQcsOpc2VuY2UgZCd1biBzeXN0w6htZSBwZXJtYW5lbnQgZGUgZMOpdGVjdGlvbiBkZSBmdWl0ZXNcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWlwbWVudERldGFpbHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsdWlkRGVzdGluYXRpb24gPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1vdXRsaW5lIG0tMlwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc21hbGxcIlxuICAgICAgICBodG1sRm9yPVwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiXG4gICAgICA+XG4gICAgICAgIEluc3RhbGxhdGlvbiBwcsOpdnVlIGRlIGRlc3RpbmF0aW9uIGR1IGZsdWlkZSByw6ljdXDDqXLDqVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgIGlkPVwiY29sbGVjdGVkRmx1aWREZXN0aW5hdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbSwgU0lSRVQsIGFkcmVzc2VcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtwcm9wcy5vbkNoYW5nZShlKX19XG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx1aWREZXN0aW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuY29uc3QgRmx1aWRIYW5kbGluZyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtmbHVpZFF1YW50aXRpZXMsIHNldEZsdWlkUXVhbnRpdGllc10gPSB1c2VTdGF0ZSh7XG4gICAgJ0EnOiAwLCAnQic6IDAsICdDJzogMCwgJ0QnOiAwLCAnRSc6IDAsICdCU0ZGJzogJydcbiAgfSk7XG4gIGNvbnN0IFtzdW1BQkMsIHNldFN1bUFCQ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3N1bURFLCBzZXRTdW1ERV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZsdWlkTG9hZGluZywgc2V0Rmx1aWRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZsdWlkQ29sbGVjdGluZywgc2V0Rmx1aWRDb2xsZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkZsdWlkQUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEEgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEE6IEFcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtQUJDKEErZmx1aWRRdWFudGl0aWVzWydCJ10rZmx1aWRRdWFudGl0aWVzWydDJ10pO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRCQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgQiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQjogQlxuICAgIH07XG4gICAgc2V0Rmx1aWRRdWFudGl0aWVzKGZxKTtcbiAgICBzZXRTdW1BQkMoZmx1aWRRdWFudGl0aWVzWydBJ10rQitmbHVpZFF1YW50aXRpZXNbJ0MnXSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZENDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBDID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBDOiBDXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bUFCQyhmbHVpZFF1YW50aXRpZXNbJ0EnXStmbHVpZFF1YW50aXRpZXNbJ0InXStDKTtcbiAgICBwcm9wcy5vbkNoYW5nZShmcSk7XG4gIH1cblxuICBjb25zdCBvbkZsdWlkRENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IEQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCBmcSA9IHtcbiAgICAgIC4uLmZsdWlkUXVhbnRpdGllcyxcbiAgICAgIEQ6IERcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgc2V0U3VtREUoRCtmbHVpZFF1YW50aXRpZXNbJ0UnXSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZEVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBFID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgZnEgPSB7XG4gICAgICAuLi5mbHVpZFF1YW50aXRpZXMsXG4gICAgICBFOiBFXG4gICAgfTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZnEpO1xuICAgIHNldFN1bURFKGZsdWlkUXVhbnRpdGllc1snRCddK0UpO1xuICAgIHByb3BzLm9uQ2hhbmdlKGZxKTtcbiAgfVxuXG4gIGNvbnN0IG9uQnNmZkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IGZxID0ge1xuICAgICAgLi4uZmx1aWRRdWFudGl0aWVzLFxuICAgICAgQlNGRjogZS50YXJnZXQudmFsdWVcbiAgICB9O1xuICAgIHNldEZsdWlkUXVhbnRpdGllcyhmcSk7XG4gICAgcHJvcHMub25DaGFuZ2UoZnEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQgcm91bmRlZCBteC1hdXRvIHAtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZHJvcGxldFwiPjwvaT4gTWFuaXB1bGF0aW9uIGR1IGZsdWlkZSBmcmlnb3JpZ8OobmVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiBpZD1cImxvYWRpbmdGbHVpZFwiIG9uQ2xpY2s9eyhlKSA9PiB7c2V0Rmx1aWRMb2FkaW5nKGUudGFyZ2V0LmNoZWNrZWQpfX0gLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBib3JkZXItMCBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJsb2FkaW5nRmx1aWRcIlxuICAgICAgICAgICAgaWQ9J3R0LWxvYWQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtbG9hZFwiIGNvbnRlbnQ9XCJDaGFyZ2VtZW50XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiBpZD1cImNvbGxlY3RpbmdGbHVpZFwiIG9uQ2xpY2s9eyhlKSA9PiB7c2V0Rmx1aWRDb2xsZWN0aW5nKGUudGFyZ2V0LmNoZWNrZWQpfX0gLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBib3JkZXItMCBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJjb2xsZWN0aW5nRmx1aWRcIlxuICAgICAgICAgICAgaWQ9XCJ0dC1jb2xsZWN0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi11cFwiPjwvaT5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxUb29sdGlwIGFuY2hvcklkPVwidHQtY29sbGVjdFwiIGNvbnRlbnQ9XCJSw6ljdXDDqXJhdGlvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtZmxleCBmbGV4LW1kLXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaGlkZGVuPXshZmx1aWRMb2FkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwidG90YWxMb2FkZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgdmFsdWU9e3N1bUFCQ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvdGFsTG9hZGVkRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGQgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXR1cm4tZG93blwiPjwvaT4gUXVhbnRpdMOpIHRvdGFsZSBjaGFyZ8OpZSA8c3VwPihBK0IrQyk8L3N1cD48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRBQ2hhbmdlfVxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZpcmdpbkZsdWlkUXVhbnRpdHlcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgICAgICAgIDxzdXA+KEEpPC9zdXA+IERvbnQgZmx1aWRlIHZpZXJnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJyZWN5Y2xlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRCQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjeWNsZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihCKTwvc3VwPiBEb250IGZsdWlkZSByZWN5Y2zDqVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgaWQ9XCJyZWdlbmVyYXRlZEZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmx1aWRDQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnZW5lcmF0ZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihDKTwvc3VwPiBEb250IGZsdWlkZSByw6lnw6luw6lyw6lcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaGlkZGVuPXshZmx1aWRDb2xsZWN0aW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLTAgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgdmFsdWU9e3N1bURFfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG90YWxSZXRyaWV2ZWRGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZCB0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHVybi11cFwiPjwvaT4gUXVhbnRpdMOpIHRvdGFsZSByw6ljdXDDqXLDqWUgPHN1cD4oRCtFKTwvc3VwPjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwiZm9yUHJvY2Vzc2luZ0ZsdWlkUXVhbnRpdHlcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkRENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvclByb2Nlc3NpbmdGbHVpZFF1YW50aXR5XCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICA8c3VwPihEKTwvc3VwPiBEb250IGZsdWlkZSBkZXN0aW7DqSBhdSB0cmFpdGVtZW50XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICBpZD1cImJzZmZOdW1iZXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25Cc2ZmQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnNmZk51bWJlclwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgTnVtw6lybyBkdSBCU0ZGIChzaSBjb25udSlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG0tMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgIGlkPVwicmV1c2FibGVGbHVpZFF1YW50aXR5XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZsdWlkRUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJldXNhYmxlRmx1aWRRdWFudGl0eVwiIGNsYXNzTmFtZT1cImZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgPHN1cD4oRSk8L3N1cD4gRG9udCBmbHVpZGUgY29uc2VydsOpIHBvdXIgcsOpdXRpbGlzYXRpb25cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx1aWRIYW5kbGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGV0ZWN0b3JzIGZyb20gXCIuL0RldGVjdG9yc1wiO1xuaW1wb3J0IERldGVjdG9yQ29udHJvbERhdGUgZnJvbSBcIi4vRGV0ZWN0b3JDb250cm9sRGF0ZVwiXG5pbXBvcnQgRXF1aXBtZW50cyBmcm9tIFwiLi9FcXVpcG1lbnRcIjtcbmltcG9ydCBJbnRlcnZlbnRpb25UeXBlcyBmcm9tIFwiLi9JbnRlcnZlbnRpb25UeXBlc1wiO1xuaW1wb3J0IE90aGVyVHlwZSBmcm9tIFwiLi9PdGhlclR5cGVcIjtcbmltcG9ydCBMZWFrYWdlIGZyb20gXCIuL0xlYWthZ2VcIjtcbmltcG9ydCBDb250YWluZXJzIGZyb20gXCIuL0NvbnRhaW5lcnNcIjtcbmltcG9ydCBFcXVpcG1lbnREZXRhaWxzIGZyb20gXCIuL0VxdWlwbWVudERldGFpbHNcIjtcbmltcG9ydCBGbHVpZEhhbmRsaW5nIGZyb20gXCIuL0ZsdWlkSGFuZGxpbmdcIjtcbmltcG9ydCBXYXN0ZXMgZnJvbSBcIi4vV2FzdGVzXCI7XG5pbXBvcnQgRmx1aWREZXN0aW5hdGlvbiBmcm9tIFwiLi9GbHVpZERlc3RpbmF0aW9uXCI7XG5pbXBvcnQgUmVtYXJrcyBmcm9tIFwiLi9SZW1hcmtzXCI7XG5cbmNvbnN0IEludGVydmVudGlvbkZvcm0gPSAoKSA9PiB7XG5cbiAgLy8gU3RhdGVzXG4gIGNvbnN0IFtpbnRlcnZlbnRpb25EYXRlLCBzZXRJbnRlcnZlbnRpb25EYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW290aGVyVHlwZSwgc2V0T3RoZXJUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXF1aXBtZW50LCBzZXRFcXVpcG1lbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkZXRlY3Rvciwgc2V0RGV0ZWN0b3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkZXRlY3RvckNvbnRyb2xEYXRlLCBzZXREZXRlY3RvckNvbnRyb2xEYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbGVha0xvY2F0aW9ucywgc2V0TGVha0xvY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsZWFrRml4ZWQsIHNldExlYWtGaXhlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmbHVpZFF1YW50aXRpZXMsIHNldEZsdWlkUXVhbnRpdGllc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtjb250YWluZXIsIHNldENvbnRhaW5lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2ZsdWlkRGVzdGluYXRpb24sIHNldEZsdWlkRGVzdGluYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZW1hcmtzLCBzZXRSZW1hcmtzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIEN1cnJlbnQgZGF0ZVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgY29uc3Qgbm93ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1DQVwiKTtcbiAgXG4gIC8vIEV2ZW50c1xuICBjb25zdCBvbkludGVydmVudGlvbkRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEludGVydmVudGlvbkRhdGUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3Qgb25FcXVpcG1lbnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGhhbmRsZVJlc2V0KCk7XG4gICAgc2V0RXF1aXBtZW50KGUpO1xuICB9XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUeXBlKGUpO1xuICB9XG5cbiAgY29uc3Qgb25PdGhlclR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE90aGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBvbkRldGVjdG9yQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXREZXRlY3RvcihlKTtcbiAgfVxuXG4gIGNvbnN0IG9uTGVha0xvY2F0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRMZWFrTG9jYXRpb25zKGUpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrRml4ZWRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExlYWtGaXhlZChlKTtcbiAgfVxuXG4gIGNvbnN0IG9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoZSk7XG4gIH1cblxuICBjb25zdCBvbkNvbnRhaW5lckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyKGUpO1xuICB9XG5cbiAgY29uc3Qgb25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRGbHVpZERlc3RpbmF0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uUmVtYXJrc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UmVtYXJrcyhlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGFsZXJ0KFwiVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkISBcIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEludGVydmVudGlvbkRhdGUobnVsbCk7XG4gICAgc2V0VHlwZShudWxsKTtcbiAgICBzZXRPdGhlclR5cGUobnVsbCk7XG4gICAgc2V0RXF1aXBtZW50KG51bGwpO1xuICAgIHNldERldGVjdG9yKG51bGwpO1xuICAgIHNldERldGVjdG9yQ29udHJvbERhdGUobnVsbCk7XG4gICAgc2V0TGVha0xvY2F0aW9ucyhbXSk7XG4gICAgc2V0TGVha0ZpeGVkKFtdKTtcbiAgICBzZXRGbHVpZFF1YW50aXRpZXMoe30pO1xuICAgIHNldENvbnRhaW5lcihudWxsKTtcbiAgICBzZXRGbHVpZERlc3RpbmF0aW9uKFwiXCIpO1xuICAgIHNldFJlbWFya3MoXCJcIik7XG4gIH1cblxuICBjb25zdCBtdXN0SW5zdGFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gZmx1aWRRdWFudGl0aWVzWydFJ10gPiAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZyBtLTJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW50ZXJ2ZW50aW9uRGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtub3d9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW50ZXJ2ZW50aW9uRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlcnZlbnRpb25EYXRlXCIgY2xhc3NOYW1lPVwiZnctYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYWxlbmRhci1kYXlzXCI+PC9pPiBEYXRlIGRlIGwnaW50ZXJ2ZW50aW9uXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxFcXVpcG1lbnRzIG9uQ2hhbmdlPXtvbkVxdWlwbWVudENoYW5nZX0gLz5cbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEVxdWlwbWVudERldGFpbHMgZGF0YT17ZXF1aXBtZW50fSAvPlxuICAgICAgICAgICAgICAgIDxJbnRlcnZlbnRpb25UeXBlcyBvbkNoYW5nZT17b25UeXBlQ2hhbmdlfSBkYXRhPXtlcXVpcG1lbnQuaWR9IC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB0eXBlPy5uYW1lID09PSBcIkF1dHJlXCIgICYmXG4gICAgICAgICAgICAgICAgPE90aGVyVHlwZSBvbkNoYW5nZT17b25PdGhlclR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHR5cGUgJiYgdHlwZS5uYW1lLnN0YXJ0c1dpdGgoJ0NvbnRyw7RsZScpICYmICFlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiZcbiAgICAgICAgICAgICAgPERldGVjdG9ycyBvbkNoYW5nZT17b25EZXRlY3RvckNoYW5nZX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgZGV0ZWN0b3IgJiZcbiAgICAgICAgICAgICAgICA8RGV0ZWN0b3JDb250cm9sRGF0ZSBkYXRhPXtkZXRlY3Rvcn0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgKGRldGVjdG9yIHx8IChlcXVpcG1lbnQ/LmxlYWtEZXRlY3Rpb25TeXN0ZW0gJiYgdHlwZSAmJiB0eXBlLm5hbWUuc3RhcnRzV2l0aCgnQ29udHLDtGxlJykpKSAmJlxuICAgICAgICAgICAgICAgIDxMZWFrYWdlXG4gICAgICAgICAgICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlPXtvbkxlYWtMb2NhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRml4ZWRDaGFuZ2U9e29uTGVha0ZpeGVkQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsgZXF1aXBtZW50ICYmIHR5cGUgJiYgIXR5cGUubmFtZS5zdGFydHNXaXRoKCdDb250csO0bGUnKSAmJlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGbHVpZEhhbmRsaW5nIG9uQ2hhbmdlPXtvbkZsdWlkUXVhbnRpdGllc0NoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgKG11c3RJbnN0YWxsKCkgfHwgZmx1aWRRdWFudGl0aWVzWydEJ10gPiAwKSAmJlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtlcXVpcG1lbnQuZmx1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db250YWluZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8V2FzdGVzIGRhdGE9e2VxdWlwbWVudC5mbHVpZC5mbHVpZFR5cGUubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IG11c3RJbnN0YWxsKCkgJiZcbiAgICAgICAgICAgICAgICA8Rmx1aWREZXN0aW5hdGlvbiBvbkNoYW5nZT17b25GbHVpZERlc3RpbmF0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7IGVxdWlwbWVudCAmJlxuICAgICAgICAgICAgICA8UmVtYXJrcyBvbkNoYW5nZT17b25SZW1hcmtzQ2hhbmdlfSAvPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1mbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbS0yXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi13YXJuaW5nXCIgdHlwZT1cInJlc2V0XCIgb25DbGljaz17aGFuZGxlUmVzZXR9PkFubnVsZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiB0eXBlPVwic3VibWl0XCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmVudGlvbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXggZnJvbSBcIi4vQXhpb3NcIjtcblxuY29uc3QgSW50ZXJ2ZW50aW9uVHlwZXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheC5nZXQoJy9pbnRlcnZlbnRpb25fdHlwZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHlwZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbS0yXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGtleT17cHJvcHMuZGF0YX0gLy8gcmVzZXQgaWYgZXF1aXBtZW50IGNoYW5nZWRcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UodHlwZXNbZS50YXJnZXQudmFsdWVdKX19XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LXNtXCJcbiAgICAgICAgaWQ9XCJ0eXBlTGFiZWxcIlxuICAgICAgPlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e251bGx9Pi0tLS0tLTwvb3B0aW9uPlxuICAgICAge1xuICAgICAgICB0eXBlcy5tYXAoKHR5cGUsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e3R5cGUuaWR9PlxuICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlTGFiZWxcIiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zY3Jld2RyaXZlci13cmVuY2hcIj48L2k+IE5hdHVyZSBkZSBsJ2ludGVydmVudGlvblxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZlbnRpb25UeXBlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCAncmVhY3QtdG9vbHRpcC9kaXN0L3JlYWN0LXRvb2x0aXAuY3NzJztcblxuY29uc3QgTGVhayA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyIGJvcmRlci0wIGJnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0IHJvdW5kZWQgbWUtMlwiPntwcm9wcy5pZCsxfTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBib3JkZXIgYm9yZGVyLTAgbWwtMiBtZS0yXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2FsaXNhdGlvbiBkZSBsYSBmdWl0ZVwiXG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBMZWFrYWdlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2xlYWtDb21wb25lbnRzLCBzZXRMZWFrQ29tcG9uZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZExlYWsgPSAoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gbGVha0NvbXBvbmVudHMubGVuZ3RoO1xuXG4gICAgc2V0TGVha0NvbXBvbmVudHMoW1xuICAgICAgLi4ubGVha0NvbXBvbmVudHMsXG4gICAgICA8TGVhayBpZD17aW5kZXh9IG9uQ2hhbmdlPXtvbkxlYWtDaGFuZ2V9IC8+XG4gICAgXSk7XG5cbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnMsIFwiXCJdO1xuICAgIGxldCBmaXhlZENvcHkgPSBbLi4uZml4ZWRdO1xuICAgIGZpeGVkQ29weS5wdXNoKGZhbHNlKTtcbiAgICBzZXRMb2NhdGlvbnMobG9jYXRpb25zQ29weSk7XG4gICAgc2V0Rml4ZWQoZml4ZWRDb3B5KTtcbiAgICBwcm9wcy5vbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uc0NvcHkpO1xuICAgIHByb3BzLm9uRml4ZWRDaGFuZ2UoZml4ZWRDb3B5KTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUxlYWsgPSAoZSkgPT4ge1xuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkIC0gMjA7XG4gICAgbGV0IGxlYWtDb21wb25lbnRzQ29weSA9IFsuLi5sZWFrQ29tcG9uZW50c107XG4gICAgbGV0IGxvY2F0aW9uc0NvcHkgPSBbLi4ubG9jYXRpb25zXTtcbiAgICBsZXQgZml4ZWRDb3B5ID0gWy4uLmZpeGVkXVxuICAgIGxlYWtDb21wb25lbnRzQ29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2F0aW9uc0NvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBmaXhlZENvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRMZWFrQ29tcG9uZW50cyhsZWFrQ29tcG9uZW50c0NvcHkpO1xuICAgIHNldExvY2F0aW9ucyhsb2NhdGlvbnNDb3B5KTtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gICAgcHJvcHMub25GaXhlZENoYW5nZShmaXhlZENvcHkpO1xuICB9XG5cbiAgY29uc3Qgb25MZWFrQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgbG9jYXRpb25zQ29weSA9IFsuLi5sb2NhdGlvbnNdO1xuICAgIGxvY2F0aW9uc0NvcHlbaW5kZXhdID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0TG9jYXRpb25zKGxvY2F0aW9uc0NvcHkpO1xuICAgIHByb3BzLm9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb25zQ29weSk7XG4gIH1cblxuICBjb25zdCBvbkxlYWtGaXhlZCA9IChlKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQgLSAxMDtcbiAgICBsZXQgZml4ZWRDb3B5ID0gWy4uLmZpeGVkXTtcbiAgICBmaXhlZENvcHlbaW5kZXhdID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBzZXRGaXhlZChmaXhlZENvcHkpO1xuICAgIHByb3BzLm9uRml4ZWRDaGFuZ2UoZml4ZWRDb3B5KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG15LTIgYmctc2Vjb25kYXJ5IHAtMiByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kXCI+PC9pPiBGdWl0ZXMgY29uc3RhdMOpZXMgbG9ycyBkdSBjb250csO0bGUgZCfDqXRhbmNow6lpdMOpXG4gICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2FkZExlYWt9XG4gICAgICAgICAgZGlzYWJsZWQ9e2xlYWtDb21wb25lbnRzLmxlbmd0aCA9PT0gM31cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPiBBam91dGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7IGxlYWtDb21wb25lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cIm0tMiBib3JkZXIgYm9yZGVyLTEgcm91bmRlZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgbGVha0NvbXBvbmVudHMubWFwKChsZWFrLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbS0yIGQtZmxleCBkLWZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZXZlblwiPlxuICAgICAgICAgICAgICB7bGVha31cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2hlY2tcIlxuICAgICAgICAgICAgICAgIGlkPXsxMCtpfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25MZWFrRml4ZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBpZD1cInR0LXdyZW5jaFwiIGh0bWxGb3I9ezEwK2l9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYm9yZGVyIGJvcmRlci0wIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd3JlbmNoXCI+PC9pPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8VG9vbHRpcCBhbmNob3JJZD1cInR0LXdyZW5jaFwiIGNvbnRlbnQ9XCJGdWl0ZSByw6lwYXLDqWVcIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgaWQ9ezIwK2l9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNsb3NlIG1lLTMgcm91bmRlZC1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUxlYWt9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aSsxIDwgbGVha0NvbXBvbmVudHMubGVuZ3RofVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWthZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIElucHV0IHRleHQgZm9yIFwib3RoZXJcIiBpbnRlcnZlbnRpb24gdHlwZVxuY29uc3QgT3RoZXJUeXBlID0gKHByb3BzKSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgaWQ9XCJvdGhlckludGVydmVudGlvblR5cGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlZldWlsbGV6IHByw6ljaXNlciBsZSB0eXBlIGQnaW50ZXJ2ZW50aW9uLi4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJUeXBlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSZW1hcmtzID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tb3V0bGluZSBtLTJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNtYWxsXCJcbiAgICAgICAgaHRtbEZvcj1cInJlbWFya3NcIlxuICAgICAgPlxuICAgICAgICBPYnNlcnZhdGlvbnNcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICBpZD1cInJlbWFya3NcIlxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7cHJvcHMub25DaGFuZ2UoZSl9fVxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1hcmtzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgV2FzdGVzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt3YXN0ZVR5cGUsIHNldFdhc3RlVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctc2Vjb25kYXJ5IHAtMiByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kdW1wc3RlclwiPjwvaT4gRMOpbm9taW5hdGlvbiBBRFIvUklEXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FzdGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiSW50ZXJ2ZW50aW9uRm9ybSIsImF4aW9zIiwiYXgiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVycyIsInByb3BzIiwiY29udGFpbmVycyIsInNldENvbnRhaW5lcnMiLCJnZXQiLCJkYXRhIiwiaWQiLCJ0aGVuIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpIiwic2VyaWFsTnVtYmVyIiwiZmx1aWRRdWFudGl0eSIsInRvRml4ZWQiLCJjYXBhY2l0eSIsIkRldGVjdG9yQ29udHJvbERhdGUiLCJjb250cm9sRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJuYW1lIiwiRGV0ZWN0b3JzIiwiZGV0ZWN0b3JzIiwic2V0RGV0ZWN0b3JzIiwiZGV0ZWN0b3IiLCJFcXVpcG1lbnRzIiwiZXF1aXBtZW50cyIsInNldEVxdWlwbWVudHMiLCJlcXVpcG1lbnQiLCJFcXVpcG1lbnREZXRhaWxzIiwiZmx1aWQiLCJ3ZWlnaHQiLCJjbzJFcVRvbm5hZ2UiLCJsZWFrRGV0ZWN0aW9uU3lzdGVtIiwiRmx1aWREZXN0aW5hdGlvbiIsIlRvb2x0aXAiLCJGbHVpZEhhbmRsaW5nIiwiZmx1aWRRdWFudGl0aWVzIiwic2V0Rmx1aWRRdWFudGl0aWVzIiwic3VtQUJDIiwic2V0U3VtQUJDIiwic3VtREUiLCJzZXRTdW1ERSIsImZsdWlkTG9hZGluZyIsInNldEZsdWlkTG9hZGluZyIsImZsdWlkQ29sbGVjdGluZyIsInNldEZsdWlkQ29sbGVjdGluZyIsIm9uRmx1aWRBQ2hhbmdlIiwiQSIsIk51bWJlciIsImZxIiwib25GbHVpZEJDaGFuZ2UiLCJCIiwib25GbHVpZENDaGFuZ2UiLCJDIiwib25GbHVpZERDaGFuZ2UiLCJEIiwib25GbHVpZEVDaGFuZ2UiLCJFIiwib25Cc2ZmQ2hhbmdlIiwiQlNGRiIsImNoZWNrZWQiLCJJbnRlcnZlbnRpb25UeXBlcyIsIk90aGVyVHlwZSIsIkxlYWthZ2UiLCJXYXN0ZXMiLCJSZW1hcmtzIiwiaW50ZXJ2ZW50aW9uRGF0ZSIsInNldEludGVydmVudGlvbkRhdGUiLCJ0eXBlIiwic2V0VHlwZSIsIm90aGVyVHlwZSIsInNldE90aGVyVHlwZSIsInNldEVxdWlwbWVudCIsInNldERldGVjdG9yIiwiZGV0ZWN0b3JDb250cm9sRGF0ZSIsInNldERldGVjdG9yQ29udHJvbERhdGUiLCJsZWFrTG9jYXRpb25zIiwic2V0TGVha0xvY2F0aW9ucyIsImxlYWtGaXhlZCIsInNldExlYWtGaXhlZCIsInNldENvbnRhaW5lciIsImZsdWlkRGVzdGluYXRpb24iLCJzZXRGbHVpZERlc3RpbmF0aW9uIiwicmVtYXJrcyIsInNldFJlbWFya3MiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJub3ciLCJvbkludGVydmVudGlvbkRhdGVDaGFuZ2UiLCJvbkVxdWlwbWVudENoYW5nZSIsImhhbmRsZVJlc2V0Iiwib25UeXBlQ2hhbmdlIiwib25PdGhlclR5cGVDaGFuZ2UiLCJvbkRldGVjdG9yQ2hhbmdlIiwib25MZWFrTG9jYXRpb25DaGFuZ2UiLCJvbkxlYWtGaXhlZENoYW5nZSIsIm9uRmx1aWRRdWFudGl0aWVzQ2hhbmdlIiwib25Db250YWluZXJDaGFuZ2UiLCJvbkZsdWlkRGVzdGluYXRpb25DaGFuZ2UiLCJvblJlbWFya3NDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJhbGVydCIsInByZXZlbnREZWZhdWx0IiwibXVzdEluc3RhbGwiLCJzdGFydHNXaXRoIiwiZmx1aWRUeXBlIiwidHlwZXMiLCJzZXRUeXBlcyIsIkxlYWsiLCJsZWFrQ29tcG9uZW50cyIsInNldExlYWtDb21wb25lbnRzIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwiZml4ZWQiLCJzZXRGaXhlZCIsImFkZExlYWsiLCJpbmRleCIsImxlbmd0aCIsIm9uTGVha0NoYW5nZSIsImxvY2F0aW9uc0NvcHkiLCJmaXhlZENvcHkiLCJwdXNoIiwib25Mb2NhdGlvbkNoYW5nZSIsIm9uRml4ZWRDaGFuZ2UiLCJyZW1vdmVMZWFrIiwibGVha0NvbXBvbmVudHNDb3B5Iiwic3BsaWNlIiwib25MZWFrRml4ZWQiLCJsZWFrIiwid2FzdGVUeXBlIiwic2V0V2FzdGVUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==