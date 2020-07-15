import axios from 'axios'
import {CardPackType} from "../../BLL/cardsRedusers/cardsPack-reduser";

export const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

type GetApiType = {
    cardPacks: Array<CardPackType>
    cardPacksTotalCount: number
    token: string
    page: number
    pageCount: number
}

type AddApiType = {
    newCardsPack: CardPackType
    token: string
}

type UpdateApiType = {
    updatedCardsPack: CardPackType
    token: string
}

type DeleteApiType = {
    token: string
}

export const cardsAPI = {
    getPack(token: string, pageCount: number = 4, page: number = 1) {
        return instance.get<GetApiType>(`cards/pack?token=${token}&pageCount=${pageCount}&page=${page}`).then(res => res.data)
    },
    addPack(token: string) {
        return instance.post<AddApiType>(`cards/pack`, {
            cardsPack: {
                name: "Dimaa"
            },
            token
        })
    },
    updatePack(idPack: string, token: string) {
        return instance.put<UpdateApiType>(`cards/pack`, {
            cardsPack: {
                _id: idPack
            },
            token
        })
    },
    deletePack(idPack: string, token: string) {
        return instance.delete<DeleteApiType>(`/cards/pack?token=${token}&id=${idPack}`)
    }
}


