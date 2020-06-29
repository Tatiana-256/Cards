import React from 'react';
import CustomInput from "../../../main/UI/common/input/Input";
import Button from "../../../main/UI/common/button/Button";
import styles from "./Registration.module.css"


type PropsType = {}


const Registration = (props: PropsType) => {

    const registration = [
        {name: "First name", placeholder: 'Enter your first name...'},
        {name: "Last name", placeholder: 'Enter your last name...'},
        {name: "Email", placeholder: 'Enter your Email...'},
        {name: "Password", placeholder: 'Enter your password...'},
        {name: "Confirm Password", placeholder: 'Enter your password confirmation...'},
    ]

    return <div className={styles.container}>
        <h3>Registration</h3>
        {
            registration.map(data => <div className={styles.inputArea}>
                <div>{data.name}</div>
                <CustomInput placeholder={data.placeholder}/>
            </div>)
        }
        <div className={styles.buttons}>
        <Button buttonClass={'regularButton'}>Sign up</Button>
        <Button buttonClass={'deleteButton'}>Cancel</Button>
        </div>
    </div>
}

export default Registration
