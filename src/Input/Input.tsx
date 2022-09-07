import classNames from 'classnames';
import React from 'react';
import { onChangePhone } from './Input.utils'
import './Input.css'

export interface MyInputProps {
    text?: string;
    placeholder?: string;
    value?: any;
    type?: 'text' | 'submit' | 'checkbox' | 'email' | 'tel' | 'password' | 'file';
    color?: string;
    background?: string;
    size?: 'small' | 'medium' | 'large';
    style?: 'outline' | 'inner'
    className?: string;
    id?: string;
    key?: number | string | null;
    onClick?: (props?: any) => void;
    onChange?: (props?: any) => void;
}

const Input: React.FC<MyInputProps> = ({
                                           text = '',
                                           placeholder = '',
                                           value = '',
                                           type = 'text',
                                           color = 'black',
                                           background = 'inherit',
                                           size = 'medium',
                                           style = 'inner',
                                           className = '',
                                           id = '',
                                           key = null,
                                           onClick,
                                           onChange = () => {},
                                           ...props
                                       }) => {

    switch(type){
        case 'text':
            const [inputValue, setInputValue] = React.useState('')

            return (
                <input
                    id={id}
                    key={key}
                    value={value}
                    placeholder={placeholder}
                    className={classNames(`input input_text`, `input_${size}`, `input_${style}`, className)}
                    style={
                        {
                            color: color,
                            outlineColor: color,
                            background: background
                        }
                    }
                    onChange={(e) => onChange(e)}
                    type="text" />
            )
        case 'password':
            return (
                <input
                    id={id}
                    key={key}
                    placeholder={placeholder}
                    className={classNames(`input input_password`, `input_${size}`, `input_${style}`, className)}
                    style={
                        {
                            color: color,
                            outlineColor: color,
                            background: background
                        }
                    }
                    type="password" />
            )
        case 'email':
            return(
                <input
                    id={id}
                    key={key}
                    value={value}
                    placeholder={placeholder}
                    className={classNames(`input input_email`, `input_${size}`, `input_${style}`, className)}
                    style={
                        {
                            color: color,
                            outlineColor: color,
                            background: background
                        }
                    }
                    onChange={(e) => onChange(e)}
                    type="email" />
            )
        case 'tel':
            return(
                <input
                    id={id}
                    key={key}
                    value={value}
                    placeholder={placeholder}
                    className={classNames(`input input_tel`, `input_${size}`, `input_${style}`, className)}
                    style={
                        {
                            color: color,
                            outlineColor: color,
                            background: background
                        }
                    }
                    onChange={(e) => onChange(e)}
                    type="tel" />
            )
        default:
            return (
                <input
                    id={id}
                    key={key}
                    className={classNames(`input input_text`, `input_${size}`, `input_${style}`, className)}
                    style={
                        {
                            color: color,
                            outlineColor: color,
                            background: background
                        }
                    }
                    type="text" />
            )
    }
}

export default Input