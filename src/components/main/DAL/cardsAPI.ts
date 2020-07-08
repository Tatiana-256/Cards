import axios from 'axios'
import {CardsType} from "../BLL/cards-reduser";


export const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

export const cardsAPI = {
    getCards(token: string, deckId: string, page?: number) {
        return (instance.get<CardsType>(`cards/card?&token=${token}&cardsPack_id=${deckId}&pageCount=10&page=${page}`)
                .then(res => {
                    return res.data
                })
        )
    }
}
