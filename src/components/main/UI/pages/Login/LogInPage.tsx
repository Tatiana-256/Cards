import React from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from './LogInPage.module.css'


type PropsType = {

}


const LoginPage = (props: PropsType) => {
    return <form className={styles.container}>
        <h3>Log in</h3>
        <div className={styles.logIn}>
            <CustomInput type="email" placeholder='Email'/>
            <CustomInput type='password' placeholder='Password'/>
        </div>
        <div className={styles.checkbox}>
            <input type='checkbox'/>
            <div>Remember me</div>
        </div>
        <Button buttonClass="regularButton">Log in</Button>
        <div className={styles.forgotPass}>Forgot password?</div>
    </form>
}

export default LoginPage
