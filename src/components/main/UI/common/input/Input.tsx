import React from 'react';
import './Input.module.css';

type PropsType = {
    value: string
    placeholder: string
    type: string
    inputClass: any
}

const Input = (props: PropsType) => {
    return (
        <input className={props.inputClass} type={props.type}
               placeholder={props.placeholder} value={props.value}/>

    );
}

export default Input;
