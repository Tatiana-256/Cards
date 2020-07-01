import React, {ChangeEvent, useState} from 'react';
import styles from './RefreshPassword.module.css';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import Preloader from "../../common/Preloader/Preloder";

type PropsType = {
    onClickForgotPassword: (email: string) => void
    isFetching: boolean
    error: boolean
    unError: boolean
    messageError: string
}


const ForgotPassword = ({isFetching, error, unError, messageError, onClickForgotPassword}: PropsType) => {

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        onClickForgotPassword(email)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return <div className={styles.forgot}>
        Refresh Password
        {isFetching ? <Preloader/> : null}
        {error
            ? <span className={styles.error}>{messageError}</span>
            : null
        }
        {unError
            ? <span className={styles.unError}>Success</span>
            : null
        }
        <form className={styles.fagotForm} onSubmit={handleSubmit} action="">

            <CustomInput onChange={handleChange} value={email}/>
            <Button disabled={isFetching} buttonClass={"regularButton"}>Submit</Button>
        </form>
    </div>
}

export default ForgotPassword
