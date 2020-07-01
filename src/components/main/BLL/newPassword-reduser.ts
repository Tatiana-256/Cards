import {actions, ActionsType} from "./actions"
import {Dispatch} from "redux";
import {authAPI} from "../DAL/api";


const initialState = {
    password:" ",
}

export type InitialStateType = typeof initialState

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "UPDATE_PASSWORD":
            debugger
            return {
                ...state,
                password: action.password
            }
        default:
            return state
    }

}

export const newPasswordSuccess = (password: string) => async (dispatch: Dispatch) => {
    debugger
    try {
        debugger
        const res = await authAPI.newPass(password)
        debugger
        dispatch(actions.newPassword(res.data.password))
    } catch (e) {
        debugger
        alert("Error: BAD token")
    }


}


