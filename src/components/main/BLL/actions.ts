import { InferActionsTypes } from "./redux-store";

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    random: () => ({type: "RANDOM"} as const)
}
