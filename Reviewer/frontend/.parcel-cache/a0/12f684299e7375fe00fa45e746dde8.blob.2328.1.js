var helpers = require("../../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);
try {
  var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
  _parcelHelpers.defineInteropFlag(exports);
  var _react = require('react');
  var _reactDefault = _parcelHelpers.interopDefault(_react);
  require('../App.css');
  var _jsxFileName = "C:\\Users\\Gapstars\\Desktop\\myProject\\Reviewer\\frontend\\src\\Components\\Sidebarmenu.js";
  function Sidebarmenu() {
    return (
      /*#__PURE__*/_reactDefault.default.createElement("div", {
        className: "Sidebarmenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 12
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("a", {
        href: "/#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }
      }, "HOME")), /*#__PURE__*/_reactDefault.default.createElement("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("a", {
        href: "/profile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, "PROFILE")), /*#__PURE__*/_reactDefault.default.createElement("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("a", {
        href: "/research",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }
      }, " RESEARCH PAPERS")), /*#__PURE__*/_reactDefault.default.createElement("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("a", {
        href: "/workshop",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }
      }, "WORKSHOP")), /*#__PURE__*/_reactDefault.default.createElement("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("a", {
        href: "/logout",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, "LOGOUT"))))
    );
  }
  _c = Sidebarmenu;
  exports.default = Sidebarmenu;
  var _c;
  $RefreshReg$(_c, "Sidebarmenu");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
