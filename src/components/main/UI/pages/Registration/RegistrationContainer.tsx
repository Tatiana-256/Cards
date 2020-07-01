import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import Registration from "./Registration";
import {useDispatch, useSelector} from 'react-redux';
import {registration} from "../../../BLL/register-reduser";
import {AppStateType} from "../../../BLL/redux-store";


const RegistrationContainer = () => {
    const [email, enterEmail] = useState<string>('');
    const [password, enterPassword] = useState<string>('');
    const [passwordRepeat, enterPasswordRepeat] = useState<string>('');
    const [isPasswordSame, setSamePassword] = useState<boolean>(false);

    useEffect(() => {
        if (passwordRepeat === password) setSamePassword(true)
        else setSamePassword(false)
    }, [passwordRepeat]);


    const dispatch = useDispatch();

    const addUser = () => {
        dispatch(registration(email, password));
        enterEmail('');
        enterPassword('');
        enterPasswordRepeat('');
    };

    const {isLoading, isSuccess, isError} = useSelector((store: AppStateType) => store.register);

    if (isSuccess) {
        return <Redirect to={'/login'}/>
    }
    return (<Registration email={email} enterEmail={enterEmail} password={password} enterPassword={enterPassword}
                          passwordRepeat={passwordRepeat} enterPasswordRepeat={enterPasswordRepeat}
                          isPasswordSame={isPasswordSame}
                          addUser={addUser} isLoading={isLoading} isError={isError}/>
    )
}

export default RegistrationContainer
