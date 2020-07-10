import axios from 'axios'
import {CardType} from "../BLL/cards-reduser";

export const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

type GetApiType = {
    cardPacks: Array<CardType>
    token: string
}

type AddApiType = {
    newCardsPack: CardType
    token: string
}

type UpdateApiType = {
    updatedCardsPack: CardType
    token: string
}

type DeleteApiType = {
    token: string
}

export const cardsAPI = {
    getCards(token: string) {
        return instance.get<GetApiType>(`cards/pack?token=${token}`)
    },
    addCards(token: string) {
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
    deletePack(idPack: string,token: string ){
        return instance.delete<DeleteApiType>(`/cards/pack?token=${token}&id=${idPack}`)
    }
}

type ApiType = {
    cardPacks: Array<CardType>
}


