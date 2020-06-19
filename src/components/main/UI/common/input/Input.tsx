import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styles from './Input.module.css';

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string, inputStyle?: any };

const CustomInput = (props: InputPropsType) => {
    const {onEnter, error, ...restProps} = props;

    const onClickEnter = (e: any) => {
        if (e.key === "Enter") {
            // @ts-ignore
            onEnter()
        }
    }

    return (
        <>
            <input className={styles.inputStyle} {...restProps} type="text" onKeyPress={onClickEnter}/>
            {error ? <span>{error}</span> : ''}
        </>
    );
}

export default CustomInput;
