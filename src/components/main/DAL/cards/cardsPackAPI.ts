import axios from 'axios'
import {CardPackType} from "../../BLL/cardsRedusers/cardsPack-reduser";
import {dev} from "../authAPI";

const instance = axios.create({
    baseURL:dev,
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
    getPack(token: string | null, pageCount: number = 4, page: number = 1,) {
        return instance.get<GetApiType>(`cards/pack?token=${token}&pageCount=${pageCount}&page=${page}`).then(res => res.data)
    },
    addPack(token: string | null, value?: string) {
        return instance.post<AddApiType>(`cards/pack`, {
            cardsPack: {
                name: value
            },
            token
        })
    },
    updatePack(newPackName: string, idPack: string, token: string | null) {
        return instance.put<UpdateApiType>(`cards/pack`, {
            cardsPack: {
                _id: idPack,
                name: newPackName
            },
            token
        })
    },
    deletePack(idPack: string, token: string | null) {
        return instance.delete<DeleteApiType>(`/cards/pack?token=${token}&id=${idPack}`)
    },
    searchPack(token: string | null, inputValue: string,) {
        return instance.get<GetApiType>(`/cards/pack?token=${token}&packName=${inputValue}`)
    },
    setPage(token: string, currentPage: number) {
        return instance.get<GetApiType>(`cards/pack?&token=${token}&page=${currentPage}`)
    },
    sortPacksByFilter(token: string | null, number?: string, filter?: string) {
        return instance.get<GetApiType>
        (`cards/pack?&token=${token}&sortPacks=${number}${filter}`);
    }
}


