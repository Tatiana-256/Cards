import React from 'react';
import './Button.module.css';

type PropsType = {
    title: string
    buttonClass: any
}

const Button = (props: PropsType) => {
    return (
        <button className={props.buttonClass}>{props.title}</button>
    );
}

export default Button;
