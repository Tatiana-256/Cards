import React, {ChangeEvent} from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./Registration.module.css"
import {NavLink} from "react-router-dom";


type PropsType = {
    email: string
    setEmail: (text: string) => void
    password: string
    setPassword: (text: string) => void
    addUser: () => void
    passwordRepeat: string
    setPasswordRepeat: (text: string) => void
    isPasswordSame: boolean
    isLoading: boolean
    isError: boolean
}


const Registration = (props: PropsType) => {

    const onRegisterClick = () => {
        props.addUser()
    }

    const onInputMailChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEmail(e.currentTarget.value)
    }

    const onInputPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setPassword(e.currentTarget.value)
    }


    const registration = [
        {name: "Email", placeholder: 'Enter your Email...', type: 'email', onChange: onInputMailChange},
        {name: "Password", placeholder: 'Enter your password...', type: 'password', onChange: onInputPasswordChange},
        {name: "Confirm Password", placeholder: 'Enter your password confirmation...', onChange: onInputPasswordChange},
    ]

    return <div className={styles.container}>
        <h3>Registration</h3>
        {
            registration.map(data => <form className={styles.inputArea}>
                <div>{data.name}</div>
                <CustomInput placeholder={data.placeholder} type={data.type} onChange={data.onChange}/>
            </form>)
        }
        <div className={styles.buttons}>
            <Button buttonClass={'regularButton'} onClick={onRegisterClick}>Sign up</Button>
            <NavLink to={"/"}><Button buttonClass={'deleteButton'}>Cancel</Button></NavLink>
        </div>
    </div>
}

export default Registration
