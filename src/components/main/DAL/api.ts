import axios from 'axios'

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

export const authAPI = {
    logIn(email: string, password: string, rememberMe: boolean) {
        return (
            instance.post<LoginResponseType>(`/auth/login`,
                {
                    email: email,
                    password: password,
                    rememberMe: rememberMe
                }
            )
        )
    },
    registration(email: string, password: string) {
        return instance.post<RegisterResponseType>("/auth/register",
            {
                email: email,
                password: password
            }
        )
    },
    forgotPass(email: string) {
        return instance.post<ApiType>("auth/forgot", {
            email: email,
            html: "<a href='http://localhost:3000/cards#/refreshPassword'",
            html2: ">http://localhost:3000/cards#/refreshPassword</a>"
        })
    },
    newPass(newPass: string) {
        return instance.post<ApiType>("POST /auth/set-new-password", {
            resetPasswordToken: "0b2bdd80-32f2-11ea-aa6d-ebd61add4aaa",
            password: newPass
        })
    }

}


//__________ Types ______________


type LoginResponseType = {
    email: string
    name: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    __v: number
    _id: string
    success: boolean
    error: string
    in: string
}


type RegisterResponseType = {
    addedUser: {
        email: string,
        isAdmin: boolean,
        __v: number,
        _id: string
    },
    success: boolean,
    error: string
}


type ApiType = {
    info: { accepted: string }
    password: string
}
