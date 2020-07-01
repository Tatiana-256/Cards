import {AppStateType, baseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../DAL/api";


export type initialStateType = typeof initialState

const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    token: '',
    rememberMe: false
}


export const loginReducer = (state = initialState, action: LoginActionType): initialStateType => {
    switch (action.type) {
        case 'loginReducer/IS_SUCCESS':
            return {
                ...state,
                isSuccess: action.value,
                isError: false,
                isLoading: false,
                token: action.token
            }
        case 'loginReducer/IS_ERROR':
            return {
                ...state,
                isError: action.value,
                isSuccess: false,
                isLoading: false
            }
        case 'loginReducer/IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state
    }

}


//____________ Actions________________

type LoginActionType = InferActionsTypes<typeof actions>


const actions = {
    isSuccess: (value: boolean, token: string) => ({
        type: 'loginReducer/IS_SUCCESS',
        value,
        token
    } as const),
    isError: (value: boolean) => ({type: 'loginReducer/IS_ERROR', value} as const),
    isLoading: (value: boolean) => ({type: 'loginReducer/IS_LOADING', value} as const)
}


//__________________ thunk-creators __________________

type thunkType = baseThunkType<LoginActionType>

export const logIn = (email: string, password: string, rememberMe: boolean): thunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(actions.isLoading(true))
    try {
        const res = await authAPI.logIn(email, password, rememberMe)
        dispatch(actions.isSuccess(true, res.data.token))
    } catch (e) {
        dispatch(actions.isError(true))
        console.error(e)
    }
}
