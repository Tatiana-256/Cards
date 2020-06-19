import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.css';

type   ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    { buttonClass: any }

const Button = (props: ButtonNyaPropsType) => {
    return (
        <button className={props.buttonClass}>{props.title}</button>
    );
}

export default Button;
