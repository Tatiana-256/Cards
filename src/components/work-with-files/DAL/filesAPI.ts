import axios from 'axios'
import {dev} from '../../main/DAL/authAPI'


const instance = axios.create({
    baseURL: dev
})


export const loadFileAPI = {
    setFileAPI(file: any) {
        return instance.post(`${file}`,
            {
                myFile: file
            })
            .then(res => res.data)
    }
}
