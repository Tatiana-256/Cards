import {AppStateType, baseThunkType, InferActionsTypes} from "../redux-store";
import {cardsAPI} from "../../DAL/cards/cardsAPI";
import {getCookie, setCookie} from "../common/cookies";

export  type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    created: string
    updated: string
    __v: number
    _id: string
}


export type CardsType = {
    cards: Array<CardType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string | null,
    tokenDeathTime: number,
    isLoading: boolean
}


let initialState: CardsType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: '',
    minGrade: 0,
    page: 0,
    pageCount: 0,
    token: '',
    tokenDeathTime: 0,
    isLoading: false,
};

type InitialStateType = typeof initialState;

export const cardsReducer = (state = initialState, action: CardsActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'cardsReducer/LOAD_DATA':
            return {
                ...state,
                cards: action.cards,
                token: action.token,
                isLoading: false
            }
        case "cardsReducer/IS_LOADING":
            return {
                ...state,
                isLoading: action.value,
            }
        default:
            return state;
    }
}


type CardsActionsTypes = InferActionsTypes<typeof actions>;

const actions = {
    loadCards: (cards: Array<CardType>, token: string | null) => ({
        type: 'cardsReducer/LOAD_DATA',
        cards,
        token
    } as const),
    isLoading: (value: boolean) => ({type: 'cardsReducer/IS_LOADING', value} as const),

}

//__________________ thunk-creators __________________

type thunkType = baseThunkType<CardsActionsTypes>

export const loadCardsData = (packId: string): thunkType => async (dispatch, getState: () => AppStateType) => {
    try {
        dispatch(actions.isLoading(true))
        const token: string | null = getCookie('token')
        const res = await cardsAPI.getCards(token, packId)
        setCookie('token', res.token, Math.floor(res.tokenDeathTime / 1000) - 180);
        dispatch(actions.loadCards(res.cards, res.token))
    } catch
        (e) {
        console.error(e.response.data.error)
    }
}

