import { FC, CSSProperties, ReactElement } from 'react';
import { IDropdownOptionProps } from './DropdownOption';
export interface IDropdownProps {
    /** children must be React Element */
    children?: ReactElement<IDropdownOptionProps> | ReactElement<IDropdownOptionProps>[];
    /** set customized css class */
    className?: string;
    /** set dropDown to be disabled */
    disabled?: boolean;
    /** set customized css style */
    style?: CSSProperties;
    /** set default string on active option */
    placeholder?: string;
    /** a callback to provide current value */
    onChange?: (val: any) => void;
}
/**
 * A dropdown allows user to select from multiple actions.
 *
 * ```js
 * import { Dropdown } from 'pat-ui'
 * ```
 */
declare const Dropdown: FC<IDropdownProps>;
export default Dropdown;
