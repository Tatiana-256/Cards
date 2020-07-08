import {AppStateType, baseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../DAL/authAPI";
import {cardsAPI} from "../DAL/cardsAPI";

export  type CardsType = {
    cards: Array<CardType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string,
    tokenDeathTime: number,
    isLoading: boolean
}


type CardType = {
    _id: string
    user_id: string,
    name: string,
    path: string,
    grade: number,
    shots: number,
    rating: number,
    type: string
    created: string
    updated: string
    __v: number
}

let initialState: CardsType = {
    cards: [
        {
            _id: "5eb6cef840b7bf1cf0d8122d",
            user_id: "5eb543f6bea3ad21480f1ee7",
            name: "no Name",
            path: "/def", // папка
            grade: 0,// средняя оценка карточек
            shots: 0, // количество попыток
            rating: 0, // лайки
            type: "pack", // ещё будет "folder" (папка)
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
            __v: 0
        }
    ],
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
                ...action.cards,
                isLoading: false
            }
        case "cardsReducer/IS_LOADING":
            return {
                ...state,
                isLoading: action.value
            }

        default:
            return state;
    }
}


type CardsActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    loadData: (cards: CardsType) => ({type: 'cardsReducer/LOAD_DATA', cards} as const),
    isLoading: (value: boolean) => ({type: 'cardsReducer/IS_LOADING', value} as const)

}


//__________________ thunk-creators __________________

type thunkType = baseThunkType<CardsActionsTypes>

export const loadCardsData = (token: string, deckId: string, page?: number): thunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(actions.isLoading(true))

    try {
        debugger
        const res = await cardsAPI.getCards(token, deckId, page)
        dispatch(actions.loadData(res))
    } catch (e) {
        console.error(e)
    }
}
