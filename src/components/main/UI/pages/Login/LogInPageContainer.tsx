import React, {useState} from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from './LogInPage.module.css'
import LoginPage from "./LogInPage";
import { useDispatch } from 'react-redux';


const LoginPageContainer = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)


    const dispatch = useDispatch()


    return <LoginPage/>
}

export default LoginPageContainer
