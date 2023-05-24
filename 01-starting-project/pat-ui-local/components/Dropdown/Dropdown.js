import React, { useState, Children, cloneElement, } from 'react';
/**
 * A dropdown allows user to select from multiple actions.
 *
 * ```js
 * import { Dropdown } from 'pat-ui'
 * ```
 */
var Dropdown = function (props) {
    var className = props.className, children = props.children, style = props.style, placeholder = props.placeholder, onChange = props.onChange, disabled = props.disabled;
    var _a = useState(false), isOptionListOpen = _a[0], setIsOptionListOpen = _a[1];
    // Check if there is an active option among children
    var activeOption = undefined;
    if (children) {
        Children.forEach(children, function (child) {
            // set activeOption if active is set to true
            var active = child.props.active;
            var childChildren = child.props.children;
            if (active) {
                activeOption = childChildren;
            }
        });
    }
    // if no active child is set, then use the placeholder
    var _b = useState(activeOption ? activeOption : placeholder), currActiveOption = _b[0], setCurrActiveOption = _b[1];
    var toggleOptionList = function () {
        setIsOptionListOpen(!isOptionListOpen);
    };
    var closeOptionList = function () {
        if (isOptionListOpen) {
            setIsOptionListOpen(!isOptionListOpen);
        }
    };
    var setSelected = function (val, innerChild) {
        // trigger callback function
        if (onChange) {
            onChange(val);
        }
        setCurrActiveOption(innerChild);
    };
    return (React.createElement("div", { className: className ? "dropdown__wrapper " + className : 'dropdown__wrapper', style: style },
        React.createElement("div", { className: isOptionListOpen ? 'dropdown open' : 'dropdown', onClick: function (e) {
                if (disabled) {
                    e.preventDefault();
                }
                else {
                    toggleOptionList();
                }
            }, onBlur: function () {
                closeOptionList();
            }, tabIndex: 0 },
            React.createElement("div", { className: disabled
                    ? 'dropdown__active_option disabled'
                    : 'dropdown__active_option' },
                React.createElement("div", { className: "dropdown__active_option__inner" }, currActiveOption),
                React.createElement("div", { className: "arrow" })),
            React.createElement("div", { className: "dropdown__options" }, children
                ? Children.map(children, function (child) {
                    return cloneElement(child, { setSelected: setSelected });
                })
                : children))));
};
Dropdown.defaultProps = {
    placeholder: '',
};
export default Dropdown;
