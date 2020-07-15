import axios from 'axios'
import {CardPackType} from "../../BLL/cardsRedusers/cardsPack-reduser";

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

type GetApiType = {
    cardPacks: Array<CardPackType>
    cardPacksTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    token: string | null
    tokenDeathTime: number
}

type AddApiType = {
    newCardsPack: CardPackType
    token: string | null
    tokenDeathTime: number
}

type UpdateApiType = {
    updatedCardsPack: CardPackType
    token: string | null
    tokenDeathTime: number
}

type DeleteApiType = {
    token: string | null
    tokenDeathTime: number

}

export const cardsPackAPI = {
    getPack(token: string | null) {
        return instance.get<GetApiType>(`cards/pack?token=${token}`)
    },
    addPack(token: string | null) {
        return instance.post<AddApiType>(`cards/pack`, {
            cardsPack: {
                name: "Dimaa"
            },
            token
        })
    },
    updatePack(idPack: string, token: string | null) {
        return instance.put<UpdateApiType>(`cards/pack`, {
            cardsPack: {
                _id: idPack
            },
            token
        })
    },
    deletePack(idPack: string, token: string | null) {
        return instance.delete<DeleteApiType>(`/cards/pack?token=${token}&id=${idPack}`)
    },
    searchPack(token: string | null, inputValue: string) {
        return instance.get<GetApiType>(`/cards/pack?token=${token}&id=${inputValue}`)
    },
    setPage(token: string, currentPage: number) {
        return instance.get<GetApiType>(`cards/pack?&token=${token}&page=${currentPage}`)

    },
    sortRatingToUp(token: string | null) {
        return instance.get<GetApiType>
        (`cards/pack?&token=${token}&sortPacks=1`);
    },

    sortRatingToDown(token: string | null) {
        return instance.get<GetApiType>
        (`cards/pack?&token=${token}&sortPacks=0`);
    }
}


