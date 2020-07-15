import {AppStateType, baseThunkType, InferActionsTypes} from "../redux-store";
import {cardsPackAPI} from "../../DAL/cards/cardsAPI";


export type CardsPacksType = {
    cards: Array<CardPackType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string,
    tokenDeathTime: number,
    isLoading: boolean
}

export type CardPackType = {
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

let initialState: CardsPacksType = {
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

export const cardsPackReducer = (state = initialState, action: CardsPackActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'cardsReducer/LOAD_DATA':
            return {
                ...state,
                cards: action.cards,
                cardsTotalCount: action.cardPacksTotalCount,
                page: action.page,
                pageCount: action.pageCount,
                token: action.token,
                isLoading: false
            }
        case "cardsReducer/IS_LOADING":
            return {
                ...state,
                isLoading: action.value,

            }
        case "cardsReducer/ADD_CARD_PACK":
            return {
                ...state,
                cards: [action.newCardsPack, ...state.cards],
                token: action.token
            }
        case "cardsReducer/UPDATE_CARD_PACK":
            return {
                ...state,
                cards: state.cards.map(card => card._id === action.idPack ? {...action.newPack} : card),
                token: action.token
            }
        case "cardsReducer/DELETE_PACK":
            return {
                ...state,
                cards: state.cards.filter(card => card._id !== action.idPack),
                token: action.token
            }
        default:
            return state;
    }
}


type CardsPackActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    loadData: (cards: Array<CardPackType>, cardPacksTotalCount: number, page: number, pageCount: number, token: string) => ({
        type: 'cardsReducer/LOAD_DATA',
        cards,
        cardPacksTotalCount,
        page,
        pageCount,
        token
    } as const),
    isLoading: (value: boolean) => ({type: 'cardsReducer/IS_LOADING', value} as const),
    addCardPackSuccess: (newCardsPack: CardPackType, token: string) => ({
        type: 'cardsReducer/ADD_CARD_PACK',
        newCardsPack,
        token
    } as const),
    changeCardPackSuccess: (idPack: string, newPack: CardPackType, token: string) => ({
        type: 'cardsReducer/UPDATE_CARD_PACK',
        idPack,
        newPack,
        token
    } as const),
    deleteCardPackSuccess: (idPack: string, token: string) => ({
        type: 'cardsReducer/DELETE_PACK',
        idPack,
        token
    } as const),
}

//__________________ thunk-creators __________________

type thunkType = baseThunkType<CardsPackActionsTypes>

export const loadCardsPackData = (): thunkType => async (dispatch, getState: () => AppStateType) => {
    // dispatch(actions.isLoading(true))
    try {
        const token = getState().login.token
        const data = await cardsPackAPI.getPack(token)
        dispatch(actions.loadData(data.cardPacks, data.cardPacksTotalCount, data.page, data.pageCount, data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const setNewPage = (pageCount: number, page?: number): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token = getState().cardsPack.token
        const data = await cardsPackAPI.getPack(token, pageCount, page)
        dispatch(actions.loadData(data.cardPacks, data.cardPacksTotalCount, data.page, data.pageCount, data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const addCardPack = (): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token = getState().cardsPack.token
        const res = await cardsPackAPI.addPack(token)
        dispatch(actions.addCardPackSuccess(res.data.newCardsPack, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const changeCardPack = (idPack: string): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token = getState().cardsPack.token
        const res = await cardsPackAPI.updatePack(idPack, token)
        dispatch(actions.changeCardPackSuccess(idPack, res.data.updatedCardsPack, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const deleteCardPack = (idPack: string): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token = getState().cardsPack.token
        const res = await cardsPackAPI.deletePack(idPack, token)
        dispatch(actions.deleteCardPackSuccess(idPack, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}
