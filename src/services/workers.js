import axios from 'axios'

export const workers = () => {
    return axios.get(`http://localhost:3000/workers`)
    }

    export const getWorkerById = (userId) => {
        return axios.get(`http://localhost:3000/workers/${userId}`)
        } 