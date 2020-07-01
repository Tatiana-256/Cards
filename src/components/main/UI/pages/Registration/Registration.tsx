import React from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./Registration.module.css"


type PropsType = {}


const Registration = (props: PropsType) => {

    const registration = [
        {name: "Email", placeholder: 'Enter your Email...', type: 'email'},
        {name: "Password", placeholder: 'Enter your password...', type: 'password'},
        {name: "Confirm Password", placeholder: 'Enter your password confirmation...'},
    ]

    return <div className={styles.container}>
        <h3>Registration</h3>
        {
            registration.map(data => <form className={styles.inputArea}>
                <div>{data.name}</div>
                <CustomInput placeholder={data.placeholder} type={data.type}/>
            </form>)
        }
        <div className={styles.buttons}>
            <Button buttonClass={'regularButton'}>Sign up</Button>
            <Button buttonClass={'deleteButton'}>Cancel</Button>
        </div>
    </div>
}

export default Registration
