import axios from 'axios'
import {CardType} from "../BLL/cards-reduser";

export const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})


export const cardsAPI = {
    getCards(token: string) {
        return instance.get<ApiType>(`cards/pack?token=${token}`)
    },
    addCards(token: string) {
        debugger
        return instance.post<any>(`cards/pack`, {
            cardsPack: {
                name: "Dimaa"
            },
            token
        })
    },
    updatePack(idPack: string, token: string) {
        debugger
        return instance.put<ApiType>(`cards/pack`, {
            cardsPack: {
                _id: idPack
            },
            token
        })
    }
}

type ApiType = {
    cardPacks: Array<CardType>
}


