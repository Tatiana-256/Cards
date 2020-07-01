import {AppStateType, baseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../DAL/api";

export type initialStateType = typeof initialState

const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false

}


export const registerReducer = (state = initialState, action: RegisterActionsType): initialStateType => {
    switch (action.type) {
        case "registerReducer/REGISTER_IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isSuccess: action.value
            };
        case "registerReducer/REGISTER_IS_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case "registerReducer/REGISTER_IS_LOADING":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}


// __________________ Actions __________________

type RegisterActionsType = InferActionsTypes<typeof actions>

const actions = {
    registerIsSuccess: (value: boolean) => ({type: "registerReducer/REGISTER_IS_SUCCESS", value} as const),
    registerIsError: () => ({type: "registerReducer/REGISTER_IS_ERROR"} as const),
    registerIsLoading: () => ({type: "registerReducer/REGISTER_IS_LOADING"} as const)
}


//__________________ thunk-creators __________________

type thunkType = baseThunkType<RegisterActionsType>

export const registration = (email: string, password: string): thunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(actions.registerIsLoading(true))
    try {
        const res = await authAPI.registration(email, password)
        if (res.data.success) dispatch(actions.registerIsSuccess(true))
    } catch (e) {
        dispatch(actions.registerIsError())
        console.error(e)
    }
}

