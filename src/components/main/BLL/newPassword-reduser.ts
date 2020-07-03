import {authAPI} from "../DAL/api";
import {baseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    password: " ",
    isFetching: false,
    error: false,
    unError: false,
    messageError: ""
}

export type InitialStateType = typeof initialState

export const newPasswordReducer = (state: InitialStateType = initialState, action: NewPassActionType): InitialStateType => {
    switch (action.type) {
        case "cards/newPassword/UPDATE_PASSWORD":
            return {
                ...state,
                password: action.password,
                unError: true
            }
        case "cards/newPassword/TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "cards/newPassword/ERROR":
            return {
                ...state,
                error: action.error,
                messageError: action.messageError
            }
        default:
            return state
    }

}

type NewPassActionType = InferActionsTypes<typeof actions>

const actions = {
    newPassword: (password: string) => ({type: "cards/newPassword/UPDATE_PASSWORD", password} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "cards/newPassword/TOGGLE_IS_FETCHING", isFetching} as const),
    changeError: (error: boolean, messageError: string) => ({
        type: "cards/newPassword/ERROR",
        error,
        messageError
    } as const)
}

type thunkType = baseThunkType<NewPassActionType>

export const newPasswordSuccess = (pass: string, id: string): thunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))

    try {
        const res = await authAPI.newPass(pass, id)
        if (res.data.success) dispatch(actions.newPassword(pass))
    } catch (e) {
        dispatch(actions.changeError(true, e.response.data.error))
    }

    dispatch(actions.toggleIsFetching(false))
}


