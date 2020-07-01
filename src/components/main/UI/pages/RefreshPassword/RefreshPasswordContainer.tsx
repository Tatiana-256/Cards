import React from 'react';
import ForgotPassword from "./RefreshPassword";
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordSuccess} from "../../../BLL/forgot-reduser";
import {AppStateType} from "../../../BLL/redux-store";


const ForgotPasswordContainer = () => {

    const dispatch = useDispatch()
    const {isFetching, error, unError, messageError} = useSelector((store: AppStateType) => store.forgot)

    const onClickForgotPassword = (email: string) => {
        dispatch(forgotPasswordSuccess(email))
    }
    return <div>
        <ForgotPassword onClickForgotPassword={onClickForgotPassword} error={error} unError={unError}
                        isFetching={isFetching} messageError={messageError}/>
    </div>
}

export default ForgotPasswordContainer
