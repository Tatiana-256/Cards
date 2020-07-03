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


const ForgotPassword: React.FC<PropsType> = ({isFetching, error, unError, messageError, onClickForgotPassword}) => {

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        onClickForgotPassword(email)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return <div className={styles.forgot}>
        <h3>Refresh Password</h3>
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
            <CustomInput placeholder="Email" onChange={handleChange} value={email}/>
            <Button disabled={isFetching} buttonClass={"regularButton"}>Submit</Button>
        </form>
    </div>
}

export default ForgotPassword
