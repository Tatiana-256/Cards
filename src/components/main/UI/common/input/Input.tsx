import React, {DetailedHTMLProps, InputHTMLAttributes, ChangeEvent} from 'react';
import styles from './Input.module.css';

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

const CustomInput = (props: InputPropsType) => {
    const {onEnter, error, ...restProps} = props;

    const onClickEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (onEnter && event.key === "Enter") {
            onEnter()
        }
    }

    return (
        <>
            <input className={styles.inputClass} {...restProps} type="text" onKeyPress={onClickEnter}/>
            {error ? <span>{error}</span> : ''}
        </>
    );
}

export default CustomInput;
