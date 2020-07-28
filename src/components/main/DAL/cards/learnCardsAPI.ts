import axios from 'axios'
import {dev} from "../authAPI";

const instance = axios.create({
    baseURL: dev
})

type SetGradeResponseType = {
    updatedGrade: {
        _id: string;
        cardsPack_id: string;
        card_id: string;
        user_id: string;
        grade: number;
        shots: number;
    },
    token: string;
    tokenDeathTime: number
}

export const learnAPI = {
    updateCardsGradeAPI(token: string | null, grade: number, card_id: string) {
        return instance.put<SetGradeResponseType>(`/cards/grade`,
            {
                token,
                grade,
                card_id
            })
            .then(res => res.data)
    }
}
