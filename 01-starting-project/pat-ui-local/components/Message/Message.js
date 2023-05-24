var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { classNames } from '../../utils/classNames';
export var Message = function (props) {
    var _a;
    var className = props.className, msgType = props.msgType, msgSize = props.msgSize, msgColor = props.msgColor, rest = __rest(props, ["className", "msgType", "msgSize", "msgColor"]);
    var styleClasses = classNames('msg', (_a = {},
        _a["msg-" + msgType] = true,
        _a["msg-" + msgSize] = !!msgSize,
        _a["msg-" + msgColor] = true,
        _a));
    if (className) {
        styleClasses += ' ' + className;
    }
    if (props.msgList === true) {
        return (React.createElement("div", __assign({ className: styleClasses }, rest, { "data-testid": 'message-element' }),
            React.createElement("div", { className: 'list-header' },
                React.createElement("p", null, props.msgHeader)),
            React.createElement("div", null,
                React.createElement("ul", { className: 'list-content' },
                    React.createElement("li", null, props.msgContent),
                    React.createElement("li", null, props.msgBulletContent)))));
    }
    var message = (React.createElement("div", __assign({ className: styleClasses }, rest, { "data-testid": 'message-element' }),
        React.createElement("div", { className: 'icon', onClick: props.msgOnClick, "data-testid": 'icon-element' },
            React.createElement("p", null, props.msgIcon)),
        React.createElement("div", { className: 'header' },
            React.createElement("p", null, props.msgHeader)),
        React.createElement("div", { className: 'content' },
            React.createElement("p", null, props.msgContent))));
    return message;
};
Message.defaultProps = {
    msgType: 'basic',
    msgSize: 'large',
    msgColor: 'white'
};
export default Message;
