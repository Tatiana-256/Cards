import {baseThunkType, InferActionsTypes} from "../redux-store";
import {getCookie, setCookie} from "../common/cookies";
import {cardsPackAPI} from "../../DAL/cards/cardsPackAPI";
import {learnAPI} from "../../DAL/cards/learnCardsAPI";

const initialState = {
    updateGradeSuccess: false,
    isError: false,
    cardToShow: {
        answer: "",
        question: "",
        cardsPack_id: "",
        grade: 0,
        rating: 0,
        shots: 0,
        type: "",
        created: "",
        updated: "",
        __v: 0,
        _id: "",
    },
    isLoading: false
};

type initialStateType = typeof initialState;

export const learnReducer = (state: initialStateType = initialState, action: LearnActionsTypes): initialStateType => {
    switch (action.type) {
        case "cardsLearnReducer/UPDATE_GRADE_SUCCESS":
            return {
                ...state,
                updateGradeSuccess: action.success,
                isLoading: false
            };
        case "cardsLearnReducer/IS_LOADING":
            return {
                ...state,
                isLoading: action.value,

            }
        default:
            return state;
    }
}


//__________________ actions __________________


type LearnActionsTypes = InferActionsTypes<typeof actions>
const actions = {
    isLoading: (value: boolean) => ({type: 'cardsLearnReducer/IS_LOADING', value} as const),
    setGradeSuccess: (success: boolean) => ({type: "cardsLearnReducer/UPDATE_GRADE_SUCCESS", success} as const)

}


//__________________ thunk-creators __________________

type thunkType = baseThunkType<LearnActionsTypes>


export const setCardGrade = (grade: number, card_id: string): thunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    try {
        const token: string | null = getCookie('token')
        const data = await learnAPI.updateCardsGradeAPI(token, grade, card_id)
        setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);
        dispatch(actions.setGradeSuccess(true))
    } catch (e) {
        console.error(e.response.data.error)
    }
}
