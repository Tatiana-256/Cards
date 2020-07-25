import axios from 'axios'

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
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
}

const learnAPI = {
    updateCardsGradeAPI(token: string, grade: number, card_id: string) {
        instance.put<SetGradeResponseType>(`/cards/grade`,
            {
                token,
                grade,
                card_id
            })
            .then(res => res.data)
    }
}
