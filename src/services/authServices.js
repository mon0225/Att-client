import axios from 'axios'
import swal from 'sweetalert2'


export const signupUser = (username, password, email) => {
    axios.post('http://localhost:3000/auth/signup', {username,password,email}, { withCredentials: true})
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

/*export const signupAdmin = (username, clave) => {
    axios.post('http://localhost:3000/auth/signup', {username,clave}, { withCredentials: true})
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
}*/

export const loginUser = (username, password) => {
    console.log(username, password)
    axios.post(`http://localhost:3000/auth/login`, {username,password}, {withCredentials: true})
    .then(res => { 
        swal({
        title: 'Bienvenido',
        type: 'success',
        text: res.data.username
        }).then((result)=>{
        localStorage.setItem('user', JSON.stringify({ username: res.data.username }))
        localStorage.setItem('role', JSON.stringify({ role: res.data.role}))
        //localStorage.setItem('user', res.data.username )
       
        })

        
    })
    .catch(error=> swal({
        title:'Error',
        type: 'error',
        text: error.response.data.message
    })

)
}

/*export const loginAdmin = (username, clave) => {
    console.log(username, clave)
    axios.post(`http://localhost:3000/auth/login`, {username,clave}, {withCredentials: true})
    .then(res => { 
        swal({
        title: 'Bienvenido',
        type: 'success',
        text: res.data.username
        }).then((result)=>{
        localStorage.setItem('user', JSON.stringify({ username: res.data.username, clave: res.data.clave  }))
        //localStorage.setItem('user', res.data.username )
       
        })

        
    })
    .catch(error=> swal({
        title:'Error',
        type: 'error',
        text: error.response.data.message
    })

)
}*/

export const Logout = () => {
    axios.get(`http://localhost:3000/auth/logout`, { withCredentials: true})
    .then(res=>{
        localStorage.removeItem('user')
        console.log(res)
    })
    .catch(error=>{
        console.log(error)
    })

}

export const Loggedin = () => {
    console.log('in loggedin')
    axios.get(`http://localhost:3000/auth/loggedin`, {withCredentials: true})
    .then(res=>{
        localStorage.setItem('user', JSON.stringify({username: res.data.username}))
    })
    .catch(error => {
        console.log(error)
    })
}

