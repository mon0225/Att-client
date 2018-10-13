import axios from 'axios'

export const checkFeelings = (happy, meh, unhappy) => {
    console.log(happy, meh, unhappy)
    axios.post(`http://localhost:3000/feeling`, {happy,meh,unhappy})
    .then(res => { 
        localStorage.setItem('feelings', JSON.stringify({ feelings: res.data.feelings}))
        console.log(res)
        //localStorage.setItem('user', res.data.username )
    })
    .catch(error => {
        console.log(error)
    })
    }



   