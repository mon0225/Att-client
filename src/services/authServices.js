import axios from 'axios'
import swal from 'sweetalert2'

export const signupUser = (username, password) => {
    axios.post('http://localhost:3000/auth/signup', {username,password})
    .then( res => swal({
        title: 'Usuario creado',
        type: 'success',
        text: res.data.username
    }))
    .catch( error => swal({
        title: 'Error',
        text: error.response.data.message,
        type: 'error'
    }))
}

export const loginUser = (username, password) => {
    console.log(username, password)
    axios.post('http://localhost:3000/auth/login', {username,password})
    .then(res => { 
        swal({
        title: 'Bienvenido',
        type: 'success',
        text: res.data.username
    })
    localStorage.setItem('user', JSON.stringify({ username: res.data.username }))
})
    .catch(error=> swal({
        title:'Error',
        type: 'error',
        text: error.response.data.message
    }))
}
