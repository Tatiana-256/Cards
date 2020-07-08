import {AppStateType, baseThunkType, InferActionsTypes} from "./redux-store";
import {cardsAPI} from "../DAL/cardsAPI";

export type CardsType = {
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

export type CardType = {
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
                isLoading: false
            }
        case "cardsReducer/IS_LOADING":
            return {
                ...state,
                isLoading: action.value
            }
        case "cardsReducer/ADD_CARD_PACK":
            debugger
            return {
                ...state,
                cards: action.cardPack
            }
        case "cardsReducer/UPDATE_CARD_PACK":
            return {
                ...state,
                cards: state.cards.map(cp => cp._id === action.idPack ? {...cp, ...action.newPack} : cp)
            }
        default:
            return state;
    }
}


type CardsActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    loadData: (cards: Array<CardType>) => ({type: 'cardsReducer/LOAD_DATA', cards} as const),
    isLoading: (value: boolean) => ({type: 'cardsReducer/IS_LOADING', value} as const),
    addCardPackSuccess: (cardPack: any) => ({type: 'cardsReducer/ADD_CARD_PACK', cardPack} as const),
    changeCardPackSuccess: (idPack: string, newPack: any) => ({
        type: 'cardsReducer/UPDATE_CARD_PACK',
        idPack,
        newPack
    } as const),
}

//__________________ thunk-creators __________________

type thunkType = baseThunkType<CardsActionsTypes>

export const loadCardsData = (): thunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(actions.isLoading(true))
    try {
        const token = getState().login.token
        console.log(token)
        const res = await cardsAPI.getCards(token)
        dispatch(actions.loadData(res.data.cardPacks))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const addCardPack = (): thunkType => async (dispatch, getState: () => AppStateType) => {
    try {
        const token = getState().login.token
        debugger
        const res = await cardsAPI.addCards(token)
        debugger
        dispatch(actions.addCardPackSuccess(res.data.cardPacks))
        debugger
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const changeCardPack = (idPack: string): thunkType => async (dispatch, getState: () => AppStateType) => {
    try {
        const token = getState().login.token
        debugger
        const res = await cardsAPI.updatePack(idPack, token)
        debugger
        dispatch(actions.changeCardPackSuccess(idPack, res.data))
        debugger
    } catch (e) {
        console.error(e.response.data.error)
    }
}