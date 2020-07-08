import React, {ChangeEvent} from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from './LogInPage.module.css'
import {NavLink} from 'react-router-dom';


type PropsType = {
    email: string
    setEmail: (value: string) => void
    password: string
    setPassword: (value: string) => void
    rememberMe: boolean
    setRememberMe: (value: boolean) => void
    setUser: () => void
    isLoading: boolean
    isError: boolean
}


const LoginPage = (props: PropsType) => {
    const onSubmit = () => {
        props.setUser()
    }

    const onInputMailChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEmail(e.currentTarget.value)
    }

    const onInputPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setPassword(e.currentTarget.value)
    }

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setRememberMe(e.currentTarget.checked)
    }
    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <h3>Log in</h3>
            <div className={styles.logIn}>
                <CustomInput type="email" placeholder='Email' value={props.email} onChange={onInputMailChange}/>
                <CustomInput type='password' placeholder='Password' value={props.password}
                             onChange={onInputPasswordChange}/>
            </div>
            <div className={styles.checkbox}>
                <input type='checkbox' checked={props.rememberMe as boolean} onChange={onCheckboxChange}/>
                <div>Remember me</div>
            </div>
            <Button buttonClass="regularButton">Log in</Button>
            <NavLink to={'/refreshPassword'} className={styles.forgotPass}>Forgot password?</NavLink>
            <NavLink to={'/registration'} className={styles.forgotPass}>I don`t have an account</NavLink>
        </form>)

}
export default LoginPage
