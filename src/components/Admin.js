import React, { Component } from 'react'
import {signupUser} from '../services/authServices' 
import { Redirect } from 'react-router-dom'

class Admin extends Component {
    state={
       rol:'',
    }

    // handleChange = event => {
    //     const { target } = event
    //     const { value, name } = target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     const {rol} = this.state
    //     signupUser(rol)
    //     this.setState({rol: 'admin'})
    // }
    // componentWillMount(){
    //     const rol = localStorage.getItem('rol')
    //     if(rol != null){
    //         this.setState({rol})
    //     }
    // }

    // checkAdmin= ()=> {
    //     console.log('user')
    //     return (this.state.rol !== 'user') ?
    //     <Redirect to= '/workers' />
    //         : 
    //     <Redirect to= '/home' />

    // }

    render(){
        return(
        <div>
        {/* <div>{this.checkAdmin()}</div>*/}
        </div>
        )
    }
}


export default Admin