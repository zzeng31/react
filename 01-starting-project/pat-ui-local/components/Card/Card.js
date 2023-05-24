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
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';
/**
 * A card displays a flexible and extensible content container for various kinds of content,
 * including site content in a manner of a card
 *
 * ```js
 * import {Card} from 'pat-ui'
 * ```
 */
export var Card = function (props) {
    var _a;
    var cardSize = props.cardSize, cardType = props.cardType, cardMode = props.cardMode, cardTheme = props.cardTheme, children = props.children, className = props.className, buttonTitle = props.buttonTitle, rest = __rest(props, ["cardSize", "cardType", "cardMode", "cardTheme", "children", "className", "buttonTitle"]);
    var styleClasses = classNames('card', (_a = {},
        _a["card-" + cardMode] = true,
        _a["card-" + cardType] = true,
        _a["card-" + cardTheme] = true,
        _a["card-" + cardSize] = !!cardSize,
        _a));
    if (className) {
        styleClasses += ' ' + className;
    }
    var Card = buttonTitle === undefined ? (React.createElement("div", { className: styleClasses, "data-testid": 'card-element' },
        React.createElement("div", { className: styleClasses + ' image', "data-testid": 'card-image-element' },
            React.createElement("img", { src: props.cardImgSrc, "data-testid": 'image-element' })),
        React.createElement("div", { className: styleClasses + ' body', "data-testid": 'card-body-element' },
            React.createElement("h5", null, props.cardTitle),
            React.createElement("p", null, props.cardParagraph)))) : (React.createElement("div", { className: styleClasses, "data-testid": 'card-element' },
        React.createElement("div", { className: styleClasses + ' image', "data-testid": 'card-image-element' },
            React.createElement("img", { src: props.cardImgSrc, "data-testid": 'image-element' })),
        React.createElement("div", { className: styleClasses + ' body', "data-testid": 'card-body-element' },
            React.createElement("h5", null, props.cardTitle),
            React.createElement("p", null, props.cardParagraph),
            React.createElement(Button, { btnType: 'primary', onClick: props.btnOnClick, "data-testid": 'button-element' }, props.buttonTitle))));
    return Card;
};
Card.defaultProps = {
    cardMode: 'default',
};
export default Card;
