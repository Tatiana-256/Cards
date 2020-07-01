import {InferActionsTypes} from "./redux-store";

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


type RegisterActionsType = InferActionsTypes<typeof actions>

const actions = {
    registerIsSuccess: (value: boolean) => ({type: "registerReducer/REGISTER_IS_SUCCESS", value} as const),
    registerIsError: () => ({type: "registerReducer/REGISTER_IS_ERROR"} as const),
    registerIsLoading: () => ({type: "registerReducer/REGISTER_IS_LOADING"} as const)
}
