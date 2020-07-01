import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import Registration from "./Registration";
import {useDispatch, useSelector} from 'react-redux';
import {registration} from "../../../BLL/register-reduser";
import {AppStateType} from "../../../BLL/redux-store";


const RegistrationContainer = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
    const [isPasswordSame, setSamePassword] = useState<boolean>(false);

    useEffect(() => {
        if (passwordRepeat === password) setSamePassword(true)
        else setSamePassword(false)
    }, [passwordRepeat]);


    const dispatch = useDispatch();

    const addUser = () => {
        dispatch(registration(email, password));
        setEmail('');
        setPassword('');
        setPasswordRepeat('');
    };

    const {isLoading, isSuccess, isError} = useSelector((store: AppStateType) => store.register);

    if (isSuccess) {
        return <Redirect to={'/login'}/>
    }
    return (<Registration email={email} setEmail={setEmail} password={password} setPassword={setPassword}
                          passwordRepeat={passwordRepeat} setPasswordRepeat={setPasswordRepeat}
                          isPasswordSame={isPasswordSame}
                          addUser={addUser} isLoading={isLoading} isError={isError}/>
    )
}

export default RegistrationContainer
