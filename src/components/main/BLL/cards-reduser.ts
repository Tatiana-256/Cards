import {InferActionsTypes} from "./redux-store";

type CardsType = {
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
        default:
            return state;
    }
}


type CardsActionsTypes = InferActionsTypes<typeof actions>

const actions = {}
