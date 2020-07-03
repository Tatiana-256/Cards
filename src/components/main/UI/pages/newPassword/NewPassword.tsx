import React, {ChangeEvent, useState} from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import Preloader from "../../common/Preloader/Preloder";
import styles from "./NewPassword.module.css";

type PropsType = {
    onClickNewPassword: (newPass: string) => void
    isFetching: boolean
    error: boolean
    unError: boolean
    messageError: string
}


const NewPassword: React.FC<PropsType> = ({onClickNewPassword, isFetching, error, unError, messageError}) => {

    const [newPass, setEmail] = useState("")

    const handleSubmit = () => {
        onClickNewPassword(newPass)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return <div className={styles.newPass}>
        <h3>New Password</h3>
        {isFetching ? <Preloader/> : null}
        {error
            ? <span className={styles.error}>{messageError}</span>
            : null
        }
        {unError
            ? <span className={styles.unError}>Success</span>
            : null
        }
        <form className={styles.newPassForm} onSubmit={handleSubmit} action="">
            <CustomInput placeholder="Password" onChange={handleChange} value={newPass}/>
            <Button disabled={isFetching} buttonClass={"regularButton"}>Submit</Button>
        </form>
    </div>
}

export default NewPassword
