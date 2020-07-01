import axios from 'axios'

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

type ApiType = {
    info: {accepted: string}
    password: string
}

export const authAPI = {
    forgotPass(email: string) {
        return instance.post<ApiType>("auth/forgot", {
            email: email,
            html: "<a href='http://localhost:3000/cards#/refreshPassword'",
            html2: ">http://localhost:3000/cards#/refreshPassword</a>"
        })
    },
    newPass(newPass: string){
        return instance.post<ApiType>("POST /auth/set-new-password", {
            resetPasswordToken: "0b2bdd80-32f2-11ea-aa6d-ebd61add4aaa",
            password: newPass
        })
    }

}