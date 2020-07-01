import {InferActionsTypes} from "./redux-store";

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    random: () => ({type: "RANDOM"} as const),
    forgotPassword: (email: string) => ({type: "SET_EMAIL", email} as const),
    newPassword: (password: string) => ({type: "UPDATE_PASSWORD", password} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
    changeError: (error: boolean, messageError: string) => ({type: "ERROR", error, messageError} as const),
    changeUnError: (unError: boolean) => ({type: "UNERROR", unError} as const),


}
