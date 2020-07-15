import {AppStateType, baseThunkType, InferActionsTypes} from "../redux-store";
import {cardsPackAPI} from "../../DAL/cards/cardsPackAPI";
import {getCookie, setCookie} from "../common/cookies";


export type CardsPacksType = {
    cards: Array<CardPackType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string | null,
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
        case 'cardsPackReducer/LOAD_DATA':
            return {
                ...state,
                cards: action.cards,
                token: action.token,
                isLoading: false
            }
        case "cardsPackReducer/IS_LOADING":
            return {
                ...state,
                isLoading: action.value,

            }
        case "cardsPackReducer/ADD_CARD_PACK":
            return {
                ...state,
                cards: [action.newCardsPack, ...state.cards],
                token: action.token
            }
        case "cardsPackReducer/UPDATE_CARD_PACK":
            return {
                ...state,
                cards: state.cards.map(card => card._id === action.idPack ? {...action.newPack} : card),
                token: action.token
            }
        case "cardsPackReducer/DELETE_PACK":
            return {
                ...state,
                cards: state.cards.filter(card => card._id !== action.idPack),
                token: action.token
            }
        case "cardsPackReducer/SEARCH_PACK":
            return {
                ...state,
                cards: action.cards,
                token: action.token
            }
        case "cardsPackReducer/GET_DATA":
            return {
                ...state,
                cards: action.cards,
                cardsTotalCount: action.cardPacksTotalCount,
                page: action.page,
                pageCount: action.pageCount,
                token: action.token,
                isLoading: false
            }
        default:
            return state;
    }
}


type CardsPackActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    loadData: (cards: Array<CardPackType>, token: string | null) => ({
        type: 'cardsPackReducer/LOAD_DATA',
        cards,
        token
    } as const),
    isLoading: (value: boolean) => ({type: 'cardsPackReducer/IS_LOADING', value} as const),
    addCardPackSuccess: (newCardsPack: CardPackType, token: string | null) => ({
        type: 'cardsPackReducer/ADD_CARD_PACK',
        newCardsPack,
        token
    } as const),
    changeCardPackSuccess: (idPack: string, newPack: CardPackType, token: string | null) => ({
        type: 'cardsPackReducer/UPDATE_CARD_PACK',
        idPack,
        newPack,
        token
    } as const),
    deleteCardPackSuccess: (idPack: string, token: string | null) => ({
        type: 'cardsPackReducer/DELETE_PACK',
        idPack,
        token
    } as const),
    searchedPack: (cards: Array<CardPackType>, token: string | null) => ({
        type: 'cardsPackReducer/SEARCH_PACK',
        cards,
        token
    } as const),
    getData: (cards: Array<CardPackType>, cardPacksTotalCount: number, page: number, pageCount: number, token: string | null) => ({
        type: 'cardsPackReducer/GET_DATA',
        cards,
        cardPacksTotalCount,
        page,
        pageCount,
        token
    } as const),
}

//__________________ thunk-creators __________________

type thunkType = baseThunkType<CardsPackActionsTypes>

export const loadCardsPackData = (): thunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(actions.isLoading(true))
    try {
        const token: string | null = getCookie('token')
        const data = await cardsPackAPI.getPack(token)
        setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);
        dispatch(actions.getData(data.cardPacks, data.cardPacksTotalCount, data.page, data.pageCount, data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const setNewPage = (pageCount: number, page?: number): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token = getState().cardsPack.token
        const data = await cardsPackAPI.getPack(token, pageCount, page)
        dispatch(actions.getData(data.cardPacks, data.cardPacksTotalCount, data.page, data.pageCount, data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const addCardPack = (): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token: string | null = getCookie('token')
        const res = await cardsPackAPI.addPack(token)
        setCookie('token', res.data.token, Math.floor(res.data.tokenDeathTime / 1000) - 180);
        dispatch(actions.addCardPackSuccess(res.data.newCardsPack, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const changeCardPack = (idPack: string): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token: string | null = getCookie('token')
        const res = await cardsPackAPI.updatePack(idPack, token)
        setCookie('token', res.data.token, Math.floor(res.data.tokenDeathTime / 1000) - 180);
        dispatch(actions.changeCardPackSuccess(idPack, res.data.updatedCardsPack, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const deleteCardPack = (idPack: string): thunkType => async (dispatch, getState: () => AppStateType) => {

    try {
        const token: string | null = getCookie('token')
        const res = await cardsPackAPI.deletePack(idPack, token)
        setCookie('token', res.data.token, Math.floor(res.data.tokenDeathTime / 1000) - 180);
        dispatch(actions.deleteCardPackSuccess(idPack, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const showSearchedPack = (inputValue: string): thunkType => async (dispatch, getState: () => AppStateType) => {
    debugger
    try {
        const token: string | null = getCookie('token')
        const res = await cardsPackAPI.searchPack(token, inputValue)
        setCookie('token', res.data.token, Math.floor(res.data.tokenDeathTime / 1000) - 180);
        dispatch(actions.loadData(res.data.cardPacks, res.data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }

}
export const searchPackByFilter = (number?: string, filter?: string): thunkType => async (dispatch, getState: () => AppStateType) => {
    try {
        const token: string | null = getCookie('token')
        const res = await cardsPackAPI.sortPacksByFilter(token, number, filter).then(d => d.data)
        setCookie('token', res.token, Math.floor(res.tokenDeathTime / 1000) - 180);
        dispatch(actions.searchedPack(res.cardPacks, token))
    } catch (e) {
        console.error(e.response.data.error)
    }
}

