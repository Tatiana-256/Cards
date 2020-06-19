import { ActionsType } from "./actions"

export type initialStateType = typeof initialState

const initialState = {
    text: ''
}


export const loginReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        default:
            return state
    }

}
