import { FC } from 'react';
export declare type ProgressType = 'circular' | 'linear';
export declare type ProgressColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
export declare type ProgressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface IRingProps {
    height: number;
    width: number;
    cx: number;
    cy: number;
    radius: number;
    strokeWidth: number;
}
export interface IProgressProps {
    /** set customize style */
    className?: string;
    /** set progress type: circular or linear */
    pgType?: ProgressType;
    /** set progress size: 5 pre-set size or number (px)
     *  - when passing in number for linear progress, you are setting the height
     *  - when passing in number for circular progress, you are setting the radius of the inner circle
     *
     * use (pgSize * 5) / 2 to get the diametor of the whole circle
     */
    pgSize?: ProgressSize | number;
    /** set progress color */
    pgColor?: ProgressColor;
    /** show or hide percentage */
    showPercentage?: boolean;
    /** set progress value: from 0 to 100 (%) */
    pgValue: number;
}
/**
 * A progress bar shows the progression of a task
 *
 * ```js
 * import {Progress} from 'pat-ui'
 * ```
 */
export declare const Progress: FC<IProgressProps>;
export default Progress;
