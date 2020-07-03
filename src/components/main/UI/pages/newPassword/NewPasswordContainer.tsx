import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import NewPassword from "./NewPassword";
import {newPasswordSuccess} from "../../../BLL/newPassword-reduser";
import {useParams} from 'react-router-dom';
import {AppStateType} from "../../../BLL/redux-store";

const NewPasswordContainer = () => {

    let {id} = useParams()

    const dispatch = useDispatch()
    const {isFetching, error, unError, messageError} = useSelector((store: AppStateType) => store.newPass)

    const onClickNewPassword = (newPass: string) => {
        dispatch(newPasswordSuccess(newPass, id))
    }

    return <NewPassword error={error}
                        unError={unError}
                        messageError={messageError}
                        isFetching={isFetching}
                        onClickNewPassword={onClickNewPassword}/>
}

export default NewPasswordContainer
