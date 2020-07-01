import {InferActionsTypes} from "./redux-store";


export type initialStateType = typeof initialState

const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
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
            }
        case 'loginReducer/IS_ERROR':
            return {
                ...state,
                isError: action.value,
                isSuccess: false,
                isLoading: false
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
        value
    } as const),
    isError: (value: boolean) => ({type: 'loginReducer/IS_ERROR', value} as const)
}
