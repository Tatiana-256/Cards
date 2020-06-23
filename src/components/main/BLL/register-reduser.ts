import { ActionsType } from "./actions"

export type initialStateType = typeof initialState

const initialState = {
    text: ''
}


export const registerReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        default:
            return state
    }

}
