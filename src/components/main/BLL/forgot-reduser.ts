
import {baseThunkType, InferActionsTypes} from "./redux-store";
import { authAPI } from "../DAL/authAPI";

const initialState = {
    email: " ",
    isFetching: false,
    error: false,
    unError: false,
    messageError: ""
}

export type InitialStateType = typeof initialState

export const forgotReducer = (state: InitialStateType = initialState, action: ForgotActionType): InitialStateType => {
    switch (action.type) {
        case "cards/forgot/SET_EMAIL":
            return {
                ...state,
                email: action.email,
                unError: true,
            }
        case "cards/forgot/TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "cards/forgot/ERROR":
            return {
                ...state,
                error: action.error,
                messageError: action.messageError
            }
        default:
            return state
    }

}

type ForgotActionType = InferActionsTypes<typeof actions>

const actions = {
    forgotPassword: (email: string) => ({type: "cards/forgot/SET_EMAIL", email} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "cards/forgot/TOGGLE_IS_FETCHING", isFetching} as const),
    changeError: (error: boolean, messageError: string) => ({type: "cards/forgot/ERROR", error, messageError} as const)
}

type thunkType = baseThunkType<ForgotActionType>

export const forgotPasswordSuccess = (email: string): thunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    try {
        const res = await authAPI.forgotPass(email)
        if (res.data.success) dispatch(actions.forgotPassword(res.data.info.accepted[0]))
    } catch (e) {
        dispatch(actions.changeError(true, e.response.data.error))
    }
    dispatch(actions.toggleIsFetching(false))
}


