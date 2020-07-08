import axios from 'axios'
import {instance} from "./authAPI";
import {CardsType} from "../BLL/cards-reduser";

export const cardsAPI = {
    getCards(){
    return(instance.get<CardsType>('')
    )
    }
}
