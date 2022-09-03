import classNames from 'classnames';
import React from 'React';
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
}

const Button: React.FC<MyButtonProps> = ({
    children,
    type = 'button',
    color = 'black',
    background = 'inherit',
    size = 'medium',
    style = 'outline',
    className = '',
    id = '',
    key = null,
    ...props
}) => {
    return (
        <button
            type={type}
            id={id}
            key={key}
            className={classNames(`btn_${size}`, `btn_${style}`, className)}
            style={
                {
                    color: color,
                    outlineColor: color,
                    background: background
                }
            }>
            {children}
        </button>
    )
}

export default Button