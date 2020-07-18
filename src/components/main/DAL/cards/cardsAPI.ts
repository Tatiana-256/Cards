import axios from "axios";
import {CardType} from "../../BLL/cardsRedusers/cards-reduser";


export type CardsResponseType = {
    cards: Array<CardType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string | null,
    tokenDeathTime: number
}


const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})


export const cardsAPI = {
    getCards(token: string | null, packId: string, page?: number) {
        return instance.get<CardsResponseType>(`cards/card?&token=${token}&cardsPack_id=${packId}&pageCount=10&page=${page}`)
            .then(res => {
                    return res.data
                }
            )
    },
    addCard(token: string | null, packId: string) {
        return instance.post<PostCardResponseType>('/cards/card', {
            card: {cardsPack_id: packId, answer: "GOGOGOGO"},
            token
        })
            .then(res => res.data)
    },
    updateCard(cardId: string, token: string | null, question: string, answer: string) {
        return instance.put<PostPutCardsType>('/cards/card', {
            card: {_id: cardId, answer: answer, question: question, grade: 0},
            token
        })
            .then(res => res.data)
    },
    deleteCard(cardId: string, token: string | null,) {
        return instance.delete<DeleteCardResponseType>(`/cards/card?token=${token}&id=${cardId}`)
            .then(res => res.data)
    },
    searchCard(token: string | null, inputValue: string,) {
        return instance.get<CardsResponseType>(`/cards/card?token=${token}&cardAnswer=${inputValue}`)
    },
}


// ___________Types for requests_________________

export type UpdatedCardType = {
    answer: string
    cardsPack_id: string
    created: string
    grade: number
    question: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}

export type DeleteCardResponseType = {
    deletedCard: CardType
    success: boolean
    token: string | null
    tokenDeathTime: number
}
export type PostPutCardType = {
    cardsPack_id?: string
    _id?: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    type?: string
}


export type PostPutCardsType = {
    updatedCard: UpdatedCardType
    token: string | null
    tokenDeathTime: number
}
export type PostCardResponseType = {
    newCard: CardType
    success: boolean
    token: string | null
    tokenDeathTime: number
}
export type PutCardResponseType = {
    updatedCard: CardType
    success: boolean
    token: string | null
    tokenDeathTime: number
}
