import axios from "axios";
import {CardType} from "../../BLL/cardsRedusers/cards-reduser";


export type CardsResponseType = {
    cards: Array<CardType>,
    cardsTotalCount: number,
    maxGrade: string,
    minGrade: number,
    page: number
    pageCount: number,
    token: string,
    tokenDeathTime: number
}

const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});


export const cardsAPI = {
    getCards(token: string, packId: string, page?: number) {
        instance.get<CardsResponseType>(`cards/card?&token=${token}&cardsPack_id=${packId}&pageCount=10&page=${page}`)
            .then(res => {
                    return res.data
                }
            )
    },
    addCard(card: PostPutCardsType) {
        instance.post<PostCardResponseType>(`cards/card`, card)
            .then(res => res.data)
    },
    updateCards(card: PostPutCardsType, token: string) {
        instance.put<PutCardResponseType>(`cards/card`, card)
            .then(res => {
                return res.data
            })
    },
    deleteCard(token: string, _id: string) {
        instance.delete<DeleteCardResponseType>(`cards/card?&token=${token}&id=${_id}`)
            .then(res => {
                return res.data
            })
    }
}


// ___________Types for requests_________________

export type DeleteCardResponseType = {
    deletedCard: CardType
    success: boolean
    token: string
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
    card: PostPutCardType
    token: string
}
export type PostCardResponseType = {
    newCard: CardType
    success: boolean
    token: string
    tokenDeathTime: number
}
export type PutCardResponseType = {
    updatedCard: CardType
    success: boolean
    token: string
    tokenDeathTime: number
}
