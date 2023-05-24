import React from 'react';
var DropdownOption = function (props) {
    var className = props.className, children = props.children, cssStyle = props.cssStyle, setSelected = props.setSelected, value = props.value;
    var classNames = 'dropdown__option';
    if (className) {
        classNames = ['dropdown__option', className].join(' ');
    }
    var passToDropdown = function () {
        if (setSelected) {
            // call the callback function provided by parent
            var selectedValue = value ? value : '';
            setSelected(selectedValue, children);
        }
    };
    return (React.createElement("div", { className: classNames, style: cssStyle, onClick: passToDropdown }, children));
};
DropdownOption.defaultProps = {
    value: '',
    active: false,
};
export default DropdownOption;
