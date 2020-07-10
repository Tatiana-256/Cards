import axios from 'axios'

 export const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
})

export const authAPI = {
    logIn(email: string, password: string, rememberMe: boolean) {
        debugger
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
        debugger

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
            html: "<a href='http://localhost:3000/#/newPassword'",
            html2: "http://localhost:3000/?#/newPassword</a>"
        })

    },
    newPass(newPass: string, id: string) {
        return instance.post<ApiType>("auth/set-new-password", {
            resetPasswordToken: id,
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
    success: boolean
    config: {
        data: string
    }
}
