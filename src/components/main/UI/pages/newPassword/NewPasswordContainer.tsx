import React from 'react';
import {useDispatch} from "react-redux";

import NewPassword from "./NewPassword";
import {newPasswordSuccess} from "../../../BLL/newPassword-reduser";


type PropsType = {}

const NewPasswordContainer = (props: PropsType) => {

    const dispatch = useDispatch()

    const onClickNewPassword = (newPass: string) => {
        dispatch(newPasswordSuccess(newPass))

    }
    return <NewPassword onClickNewPassword={onClickNewPassword} />
}

export default NewPasswordContainer
