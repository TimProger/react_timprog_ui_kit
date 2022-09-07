import React from 'react';
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
    ripple?: boolean;
    onClick?: (props?: any) => void;
    success?: boolean;
    error?: boolean;
    disabled?: boolean;
}
declare const Button: React.FC<MyButtonProps>;
export default Button;
