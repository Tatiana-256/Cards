import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import LoginPage from "./LogInPage";
import {logIn} from "../../../BLL/login-reduser";
import {AppStateType} from "../../../BLL/redux-store";
import Loader from "../../common/loader/LoaderComponent";


const LoginPageContainer = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)


    const dispatch = useDispatch()

    const setUser = () => {
        dispatch(logIn(email, password, rememberMe))
        setEmail('')
        setPassword('')
        setRememberMe(false)
    }
    const {isLoading, isSuccess, isError} = useSelector((store: AppStateType) => store.login)

    if (isSuccess) {
        return <Redirect to={"/"}/>
    } else {
        return <>
            {isLoading ? <Loader/> : <LoginPage email={email}
                                                setEmail={setEmail}
                                                password={password}
                                                setPassword={setPassword}
                                                isError={isError}
                                                rememberMe={rememberMe}
                                                setRememberMe={setRememberMe}
                                                setUser={setUser}
                                                isLoading={isLoading}/>
            }
        </>

    }
}

export default LoginPageContainer
