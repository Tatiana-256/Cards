import React from 'react';
import styles from './Profile.module.css';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";

type PropsType = {}


const Profile = (props: PropsType) => {
    return <div className={styles.baseSettings}>
        <div>Basic style for button and input</div>
        <div className={styles.container}>
            <CustomInput/>
            <Button buttonClass={'regularButton'}>Submit</Button>
            <Button buttonClass={'deleteButton'}>Delete</Button>
        </div>
    </div>
}

export default Profile
