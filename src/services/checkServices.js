import axios from 'axios'

export const checkAffairs = (pendientes) =>{
    axios.post(`http://localhost:3000/pendientes`, {pendientes}, { withCredentials: true })
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })

}


