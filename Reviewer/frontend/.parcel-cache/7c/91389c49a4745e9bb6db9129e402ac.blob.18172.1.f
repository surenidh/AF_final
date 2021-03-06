var helpers = require("../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);
try {
  var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
  _parcelHelpers.defineInteropFlag(exports);
  var _react = require('react');
  var _reactDefault = _parcelHelpers.interopDefault(_react);
  require('./App.css');
  var _ComponentsSidebarmenu = require('./Components/Sidebarmenu');
  var _ComponentsSidebarmenuDefault = _parcelHelpers.interopDefault(_ComponentsSidebarmenu);
  var _reactRouterDom = require('react-router-dom');
  var _ComponentsHome = require('./Components/Home');
  var _ComponentsHomeDefault = _parcelHelpers.interopDefault(_ComponentsHome);
  var _ComponentsProfile = require('./Components/Profile');
  var _ComponentsProfileDefault = _parcelHelpers.interopDefault(_ComponentsProfile);
  var _ComponentsResearch = require('./Components/Research');
  var _ComponentsResearchDefault = _parcelHelpers.interopDefault(_ComponentsResearch);
  var _ComponentsWorkshop = require('./Components/Workshop');
  var _ComponentsWorkshopDefault = _parcelHelpers.interopDefault(_ComponentsWorkshop);
  var _ComponentsLogout = require('./Components/Logout');
  var _ComponentsLogoutDefault = _parcelHelpers.interopDefault(_ComponentsLogout);
  var _ComponentsViewProfile = require('./Components/ViewProfile');
  var _ComponentsViewProfileDefault = _parcelHelpers.interopDefault(_ComponentsViewProfile);
  var _jsxFileName = "C:\\Users\\Gapstars\\Desktop\\myProject\\Reviewer\\frontend\\src\\App.js";
  class App extends _reactDefault.default.Component {
    render() {
      return (
        /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.BrowserRouter, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsSidebarmenuDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }
        })), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          path: "/",
          exact: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsHomeDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }
        })), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          path: "/profile",
          exact: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsProfileDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }
        })), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          path: "/viewprofile",
          exact: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsViewProfileDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }
        })), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          path: "/research",
          exact: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsResearchDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }
        })), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          path: "/workshop",
          exact: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsWorkshopDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }
        })), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
          path: "/logout",
          exact: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }
        }, /*#__PURE__*/_reactDefault.default.createElement(_ComponentsLogoutDefault.default, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }
        })))
      );
    }
  }
  exports.default = App;
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
