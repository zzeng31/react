import { FC } from 'react';
import { IDropdownProps } from './Dropdown';
import { IDropdownOptionProps } from './DropdownOption';
export declare type PatDropdownComponent = FC<IDropdownProps> & {
    Option: FC<IDropdownOptionProps>;
};
declare const TransDropdown: PatDropdownComponent;
export default TransDropdown;
