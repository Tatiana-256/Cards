import {InferActionsTypes} from "../../main/BLL/redux-store";


const initialState = {

    isLoading: false
};

type initialStateType = typeof initialState;

export const filesReducer = (state: initialStateType = initialState, action: LearnActionsTypes): initialStateType => {
    switch (action.type) {
        case "filesReducer/IS_LOADING":
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}


//__________________ actions __________________


type LearnActionsTypes = InferActionsTypes<typeof learnActions>
export const learnActions = {
    isLoading: (value: boolean) => ({type: 'filesReducer/IS_LOADING', value} as const)

}

