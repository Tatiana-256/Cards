import {AppStateType, baseThunkType, InferActionsTypes} from "../redux-store";
import {cardsAPI, UpdatedCardType} from "../../DAL/cards/cardsAPI";
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
        case "cardsReducer/ADD_CARDS":
            return {
                ...state,
                cards: [{...action.newCard}, ...state.cards]
            }
        case "cardsReducer/DELETE_CARD":
            return {
                ...state,
                cards: state.cards.filter(card => {
                    return card._id !== action.idPack
                }),
                token: action.token
            }
        case "cardsReducer/UPDATE_CARD":
            return {
                ...state,
                cards: state.cards.filter(card => {
                    return card._id === action.idCard ? {...card, ...action.newCard}: card
                }),
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
    addCardsSuccess: (newCard: CardType, token: string | null) => ({
        type: 'cardsReducer/ADD_CARDS',
        newCard,
        token
    } as const),
    deleteCardSuccess: (idPack: string, token: string | null) => ({
        type: 'cardsReducer/DELETE_CARD',
        idPack,
        token
    } as const),
    updateCardSuccess: (newCard: UpdatedCardType, idCard: string, token: string | null) => ({
        type: 'cardsReducer/UPDATE_CARD',
        newCard,
        idCard,
        token
    } as const),

}

//__________________ thunk-creators __________________

type thunkType = baseThunkType<CardsActionsTypes>

export const loadCardsData = (packId: string): thunkType => async (dispatch, getState: () => AppStateType) => {
    try {
        dispatch(actions.isLoading(true))
        const token: string | null = getCookie('token')
        const res = await cardsAPI.getCards(token, packId)
        setCookie('token', res.token, Math.floor(res.tokenDeathTime / 1000) - 180);
        debugger
        dispatch(actions.loadCards(res.cards, res.token))
    } catch
        (e) {
        console.error(e.response.data.error)
    }
}

export const addCards = (packId: string): thunkType => async (dispatch) => {
    try {
        const token: string | null = getCookie('token')
        const data = await cardsAPI.addCard(token, packId);
        setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);
        await dispatch(actions.addCardsSuccess(data.newCard, data.token));
    } catch (e) {
        console.error(e.response.data.error)
    }
}

export const deleteCard = (cardId: string): thunkType => async (dispatch) => {
    try {
        const token: string | null = getCookie('token')
        const data = await cardsAPI.deleteCard(cardId, token);
        setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);
        await dispatch(actions.deleteCardSuccess(data.deletedCard._id, data.token))
    } catch (e) {
        console.error(e.response.data.error)
    }
};

export const updateCard = (cardId: string): thunkType => async (dispatch) => {
    try {
        const token: string | null = getCookie('token')
        const data = await cardsAPI.updateCard(cardId, token);
        setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);
        dispatch(actions.updateCardSuccess(data.updatedCard, data.updatedCard._id, data.token));
    } catch (e) {
        console.error(e.response.data.error)
    }
};
