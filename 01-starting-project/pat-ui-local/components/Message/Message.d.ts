import { FC, ReactNode } from 'react';
export declare type messageType = 'basic' | 'list' | 'icon' | 'dismiss' | 'colored' | 'sized';
export declare type messageSize = 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
export declare type messageColor = 'white' | 'red' | 'orange' | 'blue' | 'pink' | 'black';
export interface IMessagesProps {
    /** set class name */
    className?: string;
    /** set message type */
    msgType?: messageType;
    /** set message size */
    msgSize?: messageSize;
    /** set message color */
    msgColor?: messageColor;
    /** set message header */
    msgHeader?: string;
    /** set message content */
    msgContent?: string;
    /** set message list */
    msgList?: boolean;
    /** set message icon */
    msgIcon?: ReactNode;
    /** set message click action */
    msgOnClick?: () => void;
    /** set the second bullet content */
    msgBulletContent?: string;
}
export declare const Message: FC<IMessagesProps>;
export default Message;
