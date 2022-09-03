/// <reference types="react" />
import React from 'React';
import './Button.css';
export interface MyButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    color?: string;
    background?: string;
    size?: 'small' | 'medium' | 'large';
    style?: 'outline' | 'inner';
    className?: string;
    id?: string;
    key?: number | string | null;
}
declare const Button: React.FC<MyButtonProps>;
export default Button;
