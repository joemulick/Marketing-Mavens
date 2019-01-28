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
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/index.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__);
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















var styles = {
  sectionTwoMainContainerHead: {
    background: '#fff2e6',
    height: '90px',
    width: 'auto'
  },
  // sectionTwoInnerContainerHead: {
  // },
  sectionTwoInnerContainer: {
    backgroundColor: 'rgba(248, 247, 216, 0.7)',
    height: '200px',
    border: '1px black solid',
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
    margin: 'theme.spacing.unit * 2'
  },
  iconHover: {
    margin: 'theme.spacing.unit * 2',
    '&:hover': {
      color: 'red[800]'
    }
  }
};

function IconOne(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_12___default.a, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
  }));
}

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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoMainContainerHead,
        container: true,
        justify: "center",
        spacing: 8
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        variant: "h3",
        color: "inherit"
      }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoMainContainer,
        container: true,
        spacing: 8
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOne, {
        className: classes.icon,
        color: "secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          cursor: 'pointer'
        }
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenOne
      }, "Open simple dialog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openOne,
        onClose: this.handleCloseOne
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOne, {
        className: classes.icon,
        color: "secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          cursor: 'pointer'
        }
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenTwo
      }, "Open simple dialog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openTwo,
        onClose: this.handleCloseTwo
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOne, {
        className: classes.icon,
        color: "secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          cursor: 'pointer'
        }
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenThree
      }, "Open simple dialog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openThree,
        onClose: this.handleCloseThree
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOne, {
        className: classes.icon,
        color: "secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          cursor: 'pointer'
        }
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenFour
      }, "Open simple dialog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openFour,
        onClose: this.handleCloseFour
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOne, {
        className: classes.icon,
        color: "secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          cursor: 'pointer'
        }
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenFive
      }, "Open simple dialog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openFive,
        onClose: this.handleCloseFive
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainer,
        item: true,
        sm: 12,
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        container: true,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.image
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconOne, {
        className: classes.icon,
        color: "secondary"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 12,
        sm: true,
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true,
        container: true,
        direction: "column",
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true,
        variant: "subtitle1"
      }, "Standard license"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutterBottom: true
      }, "Full resolution 1920x1080 \u2022 JPEG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          cursor: 'pointer'
        }
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpenOne
      }, "Open simple dialog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_serviceModals_ServiceModalOne__WEBPACK_IMPORTED_MODULE_6__["default"], {
        open: this.state.openOne,
        onClose: this.handleCloseOne
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.sectionTwoInnerContainerMainText,
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        variant: "h1",
        color: "inherit"
      }, "What we Do"))));
    }
  }]);

  return ServicesSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ServicesSection.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ServicesSection));

/***/ })

})
//# sourceMappingURL=index.js.47ee7ac48d3bd35e0f83.hot-update.js.map