import React from 'react';
import { classNames } from '../../utils/classNames';
/**
 * A progress bar shows the progression of a task
 *
 * ```js
 * import {Progress} from 'pat-ui'
 * ```
 */
export var Progress = function (props) {
    var _a, _b;
    // props destructure
    var className = props.className, pgType = props.pgType, pgSize = props.pgSize, pgColor = props.pgColor, showPercentage = props.showPercentage, pgValue = props.pgValue;
    // manage class names with different type
    var styleClasses;
    if (pgType === 'linear') {
        styleClasses = classNames('pg-linear', (_a = {},
            _a["pg-linear-" + pgSize] = !!(pgSize && typeof pgSize !== 'number'),
            _a["pg-linear-" + pgColor] = !!pgColor,
            _a));
    }
    else if (pgType === 'circular') {
        styleClasses = classNames('pg-circular', (_b = {},
            _b["pg-circular-" + pgSize] = !!(pgSize && typeof pgSize !== 'number'),
            _b["pg-circular-" + pgColor] = !!pgColor,
            _b));
    }
    // add user's custom class
    if (className) {
        styleClasses += ' ' + className;
    }
    // render different component based on type
    var renderComponent;
    if (pgType === 'linear') {
        renderComponent = (React.createElement("div", { role: "progressbar", style: { display: 'flex' } },
            React.createElement("div", { className: styleClasses },
                React.createElement("div", { "data-testid": "linear-bar", style: typeof pgSize !== 'number'
                        ? { width: pgValue + "%" }
                        : {
                            width: pgValue + "%",
                            height: pgSize + "px",
                        }, className: "pg-linear-bar" })),
            showPercentage ? (React.createElement("div", { style: typeof pgSize === 'number'
                    ? {
                        fontSize: pgSize >= 30 ? pgSize / 2 + "px" : pgSize + "px",
                    }
                    : {}, className: "pg-linear-text" }, Math.floor(pgValue) + "%")) : null));
    }
    else if (pgType === 'circular') {
        var ringProps = void 0;
        if (typeof pgSize === 'number') {
            ringProps = {
                height: (pgSize * 10) / 4,
                width: (pgSize * 10) / 4,
                cx: (pgSize * 5) / 4,
                cy: (pgSize * 5) / 4,
                radius: pgSize,
                strokeWidth: pgSize / 4,
            };
        }
        else {
            switch (pgSize) {
                case 'xs':
                    ringProps = {
                        height: 25,
                        width: 25,
                        cx: 12.5,
                        cy: 12.5,
                        radius: 10,
                        strokeWidth: 2.5,
                    };
                    break;
                case 'sm':
                    ringProps = {
                        height: 50,
                        width: 50,
                        cx: 25,
                        cy: 25,
                        radius: 20,
                        strokeWidth: 5,
                    };
                    break;
                case 'lg':
                    ringProps = {
                        height: 100,
                        width: 100,
                        cx: 50,
                        cy: 50,
                        radius: 40,
                        strokeWidth: 10,
                    };
                    break;
                case 'xl':
                    ringProps = {
                        height: 150,
                        width: 150,
                        cx: 75,
                        cy: 75,
                        radius: 60,
                        strokeWidth: 15,
                    };
                    break;
                default:
                    ringProps = {
                        height: 75,
                        width: 75,
                        cx: 37.5,
                        cy: 37.5,
                        radius: 30,
                        strokeWidth: 7.5,
                    };
                    break;
            }
        }
        var circumference = ringProps.radius * 2 * Math.PI;
        var strokeDashoffset = circumference - (pgValue / 100) * circumference;
        renderComponent = (React.createElement("div", { role: "progressbar", style: typeof pgSize === 'number'
                ? {
                    height: (pgSize * 10) / 4 + "px",
                    width: (pgSize * 10) / 4 + "px",
                }
                : {}, className: styleClasses },
            React.createElement("svg", { className: "backgroud", height: ringProps.height, width: ringProps.width },
                React.createElement("circle", { className: "ring", strokeWidth: ringProps.strokeWidth, strokeLinecap: "round", fill: "transparent", r: ringProps.radius, cx: ringProps.cx, cy: ringProps.cy })),
            React.createElement("svg", { className: "progress", height: ringProps.height, width: ringProps.width },
                React.createElement("circle", { className: "progress-ring", "data-testid": "circular-bar", style: { strokeDashoffset: strokeDashoffset }, strokeWidth: ringProps.strokeWidth, strokeLinecap: "round", strokeDasharray: circumference + ' ' + circumference, fill: "transparent", r: ringProps.radius, cx: ringProps.cx, cy: ringProps.cy })),
            showPercentage ? (React.createElement("div", { style: typeof pgSize === 'number'
                    ? {
                        fontSize: pgSize >= 14 ? pgSize / 2 + "px" : '0px',
                    }
                    : {}, className: "pg-circular-text" }, Math.floor(pgValue) + "%")) : null));
    }
    return React.createElement(React.Fragment, null, renderComponent);
};
Progress.defaultProps = {
    pgType: 'linear',
    pgSize: 'md',
    showPercentage: false,
};
export default Progress;
