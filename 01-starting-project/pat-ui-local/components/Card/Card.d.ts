import { FC, ReactNode } from 'react';
export declare type CardSize = 'lg' | 'sm';
export declare type CardMode = 'default' | 'horizontal';
export declare type CardTheme = 'primary' | 'dark' | 'purple' | 'blue' | 'yellow';
export declare type CardType = 'circledImage' | 'noImage' | 'largeImage';
export interface ICardProps {
    /** set customized card */
    className?: string;
    /** set card mode */
    cardMode?: CardMode;
    /** set card type */
    cardType?: CardType;
    /** set card theme */
    cardTheme?: CardTheme;
    /** set card size */
    cardSize?: CardSize;
    /** set card title */
    cardTitle?: string;
    /** set card content */
    cardParagraph?: ReactNode;
    /** set card image source */
    cardImgSrc?: string;
    /** set action on bottun clicked */
    btnOnClick?: () => void;
    /** set button title */
    buttonTitle?: string;
}
export declare type patCardProps = ICardProps;
/**
 * A card displays a flexible and extensible content container for various kinds of content,
 * including site content in a manner of a card
 *
 * ```js
 * import {Card} from 'pat-ui'
 * ```
 */
export declare const Card: FC<patCardProps>;
export default Card;
