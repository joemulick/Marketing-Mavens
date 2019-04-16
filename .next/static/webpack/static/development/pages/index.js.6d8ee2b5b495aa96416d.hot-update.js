webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ServicesSection.js":
/*!***************************************!*\
  !*** ./components/ServicesSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceModals/ServiceModalOne */ "./components/serviceModals/ServiceModalOne.js");
/* harmony import */ var _serviceModals_ServiceModalTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceModals/ServiceModalTwo */ "./components/serviceModals/ServiceModalTwo.js");
/* harmony import */ var _serviceModals_ServiceModalThree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceModals/ServiceModalThree */ "./components/serviceModals/ServiceModalThree.js");
/* harmony import */ var _serviceModals_ServiceModalFour__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serviceModals/ServiceModalFour */ "./components/serviceModals/ServiceModalFour.js");
/* harmony import */ var _serviceModals_ServiceModalFive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serviceModals/ServiceModalFive */ "./components/serviceModals/ServiceModalFive.js");
/* harmony import */ var _serviceModals_ServiceModalSix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./serviceModals/ServiceModalSix */ "./components/serviceModals/ServiceModalSix.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Web */ "./node_modules/@material-ui/icons/Web.js");
/* harmony import */ var _material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/BorderColor */ "./node_modules/@material-ui/icons/BorderColor.js");
/* harmony import */ var _material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_HourglassEmpty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/HourglassEmpty */ "./node_modules/@material-ui/icons/HourglassEmpty.js");
/* harmony import */ var _material_ui_icons_HourglassEmpty__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HourglassEmpty__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/AssignmentTurnedIn */ "./node_modules/@material-ui/icons/AssignmentTurnedIn.js");
/* harmony import */ var _material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\joemu\\Desktop\\Coding\\Marketing-Mavens-Main-Directory\\Marketing-Mavens\\components\\ServicesSection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















 // import HourglassEmpty from '@material-ui/icons/HourglassEmpty';
// import HourglassEmpty from '@material-ui/icons/HourglassEmpty';

var styles = {
  root: {
    flexGrow: 1
  },
  sectionTwoMainContainerHead: {
    background: 'rgba(239, 239, 239)',
    height: '125px',
    width: 'auto'
  },
  // sectionTwoInnerContainerHead: {
  // },
  sectionTwoInnerContainer: {
    backgroundColor: 'rgba(239, 239, 239, 0.7)',
    height: '200px',
    border: '1px grey dotted',
    flexWrap: 'nowrap'
  },
  sectionTwoMainContainer: {
    width: 'auto',
    background: '#fff2e6'
  },
  sectionTwoInnerContainerMainText: {
    height: '450px'
  },
  icon: {
    fontSize: 68,
    margin: 'auto'
  },
  innerGridHeightAdjust: {
    minHeight: '100%'
  },
  innerGridHeightAdjustTwo: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%'
  },
  sectionThreeMainContainerHead: {
    backgroundColor: 'rgba(239, 239, 239, 0.7)',
    height: '200px',
    border: '1px grey dotted'
  }
};

var ServicesSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ServicesSection, _React$Component);

  function ServicesSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ServicesSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ServicesSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      openOne: false,
      openTwo: false,
      openThree: false,
      openFour: false,
      openFive: false,
      openSix: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpenOne", function () {
      _this.setState({
        openOne: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpenTwo", function () {
      _this.setState({
        openTwo: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpenThree", function () {
      _this.setState({
        openThree: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpenFour", function () {
      _this.setState({
        openFour: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpenFive", function () {
      _this.setState({
        openFive: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOpenSix", function () {
      _this.setState({
        openSix: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseOne", function (valueOne) {
      _this.setState({
        openOne: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseTwo", function (valueTwo) {
      _this.setState({
        openTwo: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseThree", function (valueThree) {
      _this.setState({
        openThree: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseFour", function (valueFour) {
      _this.setState({
        openFour: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseFive", function (valueFive) {
      _this.setState({
        openFive: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseSix", function (valueSix) {
      _this.setState({
        openSix: false
      });
    });

    return _this;
  }

  _createClass(ServicesSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          onClose = _this$props.onClose,
          selectedValue = _this$props.selectedValue,
          other = _objectWithoutProperties(_this$props, ["classes", "onClose", "selectedValue"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoMainContainerHead,
        container: true,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          margin: 'auto'
        },
        variant: "h3",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoMainContainer,
        container: true,
        spacing: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjust,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwo,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwoText,
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: '8%'
        },
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Email Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Strategy, Website development services, Solutions Engineering, Deliverability, Lifecycle Emails, ESP specialists."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          marginTop: '128%'
        },
        variant: "outlined",
        onClick: this.handleClickOpenOne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openOne,
        onClose: this.handleCloseOne,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjust,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwo,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Web__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: '8%'
        },
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Website Design and Development"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "From Website design consultation to entire website devlopment and hosting services."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          marginTop: '128%'
        },
        variant: "outlined",
        onClick: this.handleClickOpenTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        open: this.state.openTwo,
        onClose: this.handleCloseTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        className: classes.innerGridHeightAdjust,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwo,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BorderColor__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: '8%'
        },
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Graphic & Logo Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Web Design, Social Posts, Email layouts and assets, Pring Marketing Material, Logos, Signage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          marginTop: '128%'
        },
        variant: "outlined",
        onClick: this.handleClickOpenThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalThree__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: this.state.openThree,
        onClose: this.handleCloseThree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        className: classes.innerGridHeightAdjust,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwo,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_17___default.a, {
        className: classes.icon,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: '8%'
        },
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Content Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          marginTop: '128%'
        },
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalFour__WEBPACK_IMPORTED_MODULE_9__["default"], {
        open: this.state.openFour,
        onClose: this.handleCloseFour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        className: classes.innerGridHeightAdjust,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwo,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_17___default.a, {
        className: classes.icon,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: '8%'
        },
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Service Five"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          marginTop: '128%'
        },
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenFive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalFive__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.openFive,
        onClose: this.handleCloseFive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        className: classes.innerGridHeightAdjust,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.innerGridHeightAdjustTwo,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AssignmentTurnedIn__WEBPACK_IMPORTED_MODULE_17___default.a, {
        className: classes.icon,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: '8%'
        },
        variant: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Service Six"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          marginTop: '128%'
        },
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenSix,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "learn more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalSix__WEBPACK_IMPORTED_MODULE_11__["default"], {
        open: this.state.openSix,
        onClose: this.handleCloseSix,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionThreeMainContainerHead,
        container: true,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          margin: 'auto'
        },
        variant: "h3",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Section Three")));
    }
  }]);

  return ServicesSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ServicesSection.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ServicesSection));

/***/ }),

/***/ "./node_modules/@material-ui/icons/HourglassEmpty.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/HourglassEmpty.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
})), 'HourglassEmpty');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.6d8ee2b5b495aa96416d.hot-update.js.map