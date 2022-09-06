import classNames from 'classnames';
import React from 'react';
import { createRipple } from './Button.utils'
import './Button.css'

export interface MyButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    color?: string;
    background?: string;
    size?: 'small' | 'medium' | 'large';
    style?: 'outline' | 'inner'
    className?: string;
    id?: string;
    key?: number | string | null;
    ripple?: boolean;
    onClick?: (props?: any) => void;
    success?: boolean; // Пока не используется
    error?: boolean; // Пока не используется
    disabled?: boolean;
}

const Button: React.FC<MyButtonProps> = ({
    children,
    type = 'button',
    color = 'black',
    background = 'inherit',
    size = 'medium',
    style = 'outer',
    className = '',
    id = '',
    key = null,
    ripple= true,
    onClick,
    disabled = false,
    ...props
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            id={id}
            key={key}
            className={classNames(`btn`, `btn_${size}`, `btn_${style}`, className)}
            style={
                {
                    color: color,
                    outlineColor: color,
                    background: background
                }
            }
            onClick={ripple ? (e)=>{
                createRipple(e)
            } : (e) => onClick && onClick(e)}
        >
            {children}
        </button>
    )
}

export default Button