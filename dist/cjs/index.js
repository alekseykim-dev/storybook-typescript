'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var styles$1 = {"button":"Button-module_button__18Bed"};

var Button = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement("button", __assign({ className: "".concat(styles$1.button, " ").concat(className !== null && className !== void 0 ? className : '') }, props), children));
};

var styles = {"triggerButton":"Accordion-module_triggerButton__NXThU","title":"Accordion-module_title__-9-np","indicator":"Accordion-module_indicator__-V5wr","content":"Accordion-module_content__RyBzl"};

var Accordion = function (_a) {
    var isOpenProp = _a.isOpen, onToggleProp = _a.onToggle, children = _a.children, title = _a.title, _b = _a.innerControl, innerControl = _b === void 0 ? false : _b;
    var _c = React.useState(false), isOpenState = _c[0], setIsOpenState = _c[1];
    var onToggle = function () {
        if (innerControl) {
            setIsOpenState(function (prevIsOpen) { return !prevIsOpen; });
        }
        else {
            onToggleProp === null || onToggleProp === void 0 ? void 0 : onToggleProp();
        }
    };
    var isOpen = innerControl ? isOpenState : isOpenProp;
    return (React.createElement("div", { className: styles.container },
        React.createElement("button", { onClick: onToggle, className: styles.triggerButton },
            React.createElement("span", { className: styles.title }, title),
            React.createElement("span", { className: styles.indicator }, isOpen ? '-' : '+')),
        isOpen && (React.createElement("div", { className: styles.content }, children))));
};

var _path$2;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "m4.892 13.269 4.274 4.274L18.709 8",
    stroke: "#000",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$1, _path2$1;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgQuestionMark = function SvgQuestionMark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 14v-1.5c0-.822 3.5-1 3.5-3.5 0-1.5-1.5-2.5-3.5-2.5-1.5 0-3 1-3 2.5",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.227 16.953a1.227 1.227 0 1 1-2.454 0 1.227 1.227 0 0 1 2.454 0Z",
    fill: "#000"
  })));
};

var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgUser = function SvgUser(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15 8.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    fill: "#000"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.63 20H5.947c-.402 0-.629-.441-.378-.755C6.684 17.848 9.29 15 12 15c2.727 0 5.063 2.886 6.027 4.273.22.317-.01.727-.396.727Z",
    fill: "#000",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var DEFAULT_SIZE = 25;
var createIcon = function (Icon) { return function (props) { return (React.createElement(Icon, __assign({ width: DEFAULT_SIZE, height: DEFAULT_SIZE }, props))); }; };
var CheckIcon = createIcon(SvgCheck);
var QuestionMarkIcon = createIcon(SvgQuestionMark);
var UserIcon = createIcon(SvgUser);

exports.Accordion = Accordion;
exports.Button = Button;
exports.CheckIcon = CheckIcon;
exports.QuestionMarkIcon = QuestionMarkIcon;
exports.UserIcon = UserIcon;
