import { FC } from 'react';
export declare type RatingSize = 'small' | 'large' | 'default';
export interface IRatingProps {
    /** Provide custom className  */
    className?: string;
    /** Provide custom name  */
    name?: string;
    /** Provide rating value */
    value: number;
    /** Rating is read only */
    readOnly?: boolean;
    /** Rating can only be viewed  */
    disabled?: boolean;
    /** Rating icon size: small|large|default */
    size?: RatingSize;
    /** Rating icon number */
    max?: number;
    /** Rating precision: floating number 0-1 */
    precision?: number;
    /** Provide a callback function to control the value of the rating from outside of the component  */
    onChange?: (value: number) => void;
    /** Provide a callback function to control the label of the rating from outside of the component  */
    getLabelText?: (value: number) => string;
}
export declare type patRatingProp = IRatingProps;
export declare const Rating: FC<patRatingProp>;
export default Rating;
