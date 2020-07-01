import {actions, ActionsType} from "./actions"
import {Dispatch} from "redux";
import {authAPI} from "../DAL/api";


const initialState = {
    email: " ",
    isFetching: false,
    error: false,
    unError: false,
    messageError: ""
}

export type InitialStateType = typeof initialState

export const forgotReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.email
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "ERROR":
            return {
                ...state,
                error: action.error,
                messageError: action.messageError
            }
        case "UNERROR":
            return {
                ...state, unError: action.unError
            }
        default:
            return state
    }

}

export const forgotPasswordSuccess = (email: string) => async (dispatch: Dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    try {
        const res = await authAPI.forgotPass(email)
        dispatch(actions.forgotPassword(res.data.info.accepted[0]))
        dispatch(actions.changeUnError(true))
    } catch (e) {
        console.log(e.response.data.error)
        dispatch(actions.changeError(true, e.response.data.error))
    }
    dispatch(actions.toggleIsFetching(false))

}


