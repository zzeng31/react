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
import React, { useState, useRef } from 'react';
import { classNames } from '../../utils/classNames';
var normalFill = '#FFB400';
var normalEmpty = 'rgba(0, 0, 0, 0.26)';
var diabledFill = '#ffda80';
var disabledEmpty = 'rgba(0, 0, 0, 0.13)';
var Star = function (_a) {
    var starId = _a.starId, fill = _a.fill, empty = _a.empty, className = _a.className, uniqueId = _a.uniqueId, fraction = _a.fraction, handleRatingChange = _a.handleRatingChange, handleMouseHover = _a.handleMouseHover, handleMouseLeave = _a.handleMouseLeave;
    return (React.createElement("div", { id: starId.toString(), onClick: function (e) {
            handleRatingChange(e, starId);
        }, onMouseMoveCapture: function (e) {
            handleMouseHover(e);
        }, onMouseLeave: function (e) {
            handleMouseLeave(e);
        } },
        React.createElement("svg", { viewBox: "0 0 24 24", className: className + " " + ("rating_star-" + fraction), "data-testid": "star-" + starId },
            React.createElement("defs", null,
                React.createElement("linearGradient", { id: "star-" + uniqueId },
                    React.createElement("stop", { offset: "0%", stopColor: fill }),
                    React.createElement("stop", { offset: fraction + "%", stopColor: fill }),
                    React.createElement("stop", { offset: fraction + "%", stopColor: empty }),
                    React.createElement("stop", { offset: "100%", stopColor: empty }))),
            React.createElement("path", { fill: "url(#star-" + uniqueId + ")", d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }))));
};
export var Rating = function (props) {
    var _a;
    var className = props.className, name = props.name, value = props.value, _b = props.precision, precision = _b === void 0 ? 1 : _b, readOnly = props.readOnly, disabled = props.disabled, size = props.size, max = props.max, onChange = props.onChange, getLabelText = props.getLabelText, rest = __rest(props, ["className", "name", "value", "precision", "readOnly", "disabled", "size", "max", "onChange", "getLabelText"]);
    var styleClasses = classNames('rating_star', (_a = {},
        _a["rating_star-" + size] = !!size,
        _a["rating_star-active"] = disabled ? false : true,
        _a));
    if (className) {
        styleClasses += ' ' + className;
    }
    var numberOfStars = max ? max : 5;
    var _c = useState(value ? Math.floor(value) : -1), rating = _c[0], setRating = _c[1];
    var _d = useState(value ? Math.round((value - Math.floor(value)) * 100) : 0), lastStarFraction = _d[0], setLastStarFraction = _d[1];
    var currentRating = useRef(value ? Math.floor(value) : -1);
    var currentFraction = useRef(value ? Math.round((value - Math.floor(value)) * 100) : 0);
    var currentTotalRating = useRef(value ? value : 0);
    var getFraction = function (event) {
        var _a = event.currentTarget.getBoundingClientRect(), left = _a.left, width = _a.width;
        var x = event.clientX - left;
        var fraction = x / width;
        return fraction;
    };
    var handleMouseHover = function (event) {
        var fraction = getFraction(event);
        if (!disabled && !readOnly) {
            if (precision === 1) {
                var id = +event.currentTarget.id;
                setRating(id);
                setLastStarFraction(100);
                currentTotalRating.current = id + 1;
            }
            else {
                var starFraction = Math.floor(fraction / precision) * precision * 100;
                var nextStarFraction = +(Math.ceil(fraction / precision) *
                    precision *
                    100).toPrecision(2);
                if (fraction * 100 > starFraction) {
                    setRating(+event.currentTarget.id);
                    setLastStarFraction(nextStarFraction >= 100 ? 100 : nextStarFraction);
                    currentTotalRating.current =
                        nextStarFraction >= 100
                            ? +event.currentTarget.id + 1
                            : +event.currentTarget.id + nextStarFraction / 100;
                }
                else {
                    setRating(+event.currentTarget.id);
                    setLastStarFraction(starFraction >= 100 ? 100 : starFraction);
                    currentTotalRating.current =
                        starFraction >= 100
                            ? +event.currentTarget.id + 1
                            : +event.currentTarget.id + starFraction / 100;
                }
            }
            if (getLabelText) {
                return getLabelText(currentTotalRating.current);
            }
        }
    };
    var handleRatingChange = function (event, value) {
        if (!disabled && !readOnly) {
            if (precision === 1) {
                setRating(value);
                currentFraction.current = 100;
                currentRating.current = value;
                currentTotalRating.current = value + 1;
            }
            else {
                var fraction = getFraction(event);
                var ceilFraction = Math.ceil(fraction / precision) * precision;
                var starFraction = Math.floor(ceilFraction * 100);
                setRating(+event.currentTarget.id);
                setLastStarFraction(starFraction >= 100 ? 100 : starFraction);
                currentFraction.current = starFraction >= 100 ? 100 : starFraction;
                currentRating.current = +event.currentTarget.id;
                currentTotalRating.current =
                    starFraction >= 100
                        ? +event.currentTarget.id + 1
                        : +event.currentTarget.id + starFraction / 100;
            }
            if (getLabelText) {
                return getLabelText(currentTotalRating.current);
            }
            if (onChange) {
                onChange(currentTotalRating.current);
            }
        }
    };
    var handleMouseLeave = function (event) {
        if (!disabled && !readOnly) {
            setRating(Math.floor(currentRating.current));
            setLastStarFraction(currentFraction.current);
            if (getLabelText) {
                return getLabelText(Math.floor(currentRating.current) + currentFraction.current / 100);
            }
        }
    };
    // set the fill and empty color
    var fill = disabled === true ? diabledFill : normalFill;
    var empty = disabled === true ? disabledEmpty : normalEmpty;
    return (React.createElement("div", { className: "rating__container", "data-testid": "rating__container" }, Array.from({ length: numberOfStars }).map(function (_, index) {
        var starFraction = rating > index ? 100 : rating === index ? lastStarFraction : 0;
        var uniqueId = index + "-" + Math.random();
        return (React.createElement(Star, { uniqueId: uniqueId, key: index, starId: index, fill: fill, empty: empty, fraction: starFraction, handleMouseLeave: handleMouseLeave, handleMouseHover: handleMouseHover, handleRatingChange: handleRatingChange, className: styleClasses }));
    })));
};
Rating.defaultProps = {
    size: 'default',
    max: 5,
    precision: 1,
};
export default Rating;
