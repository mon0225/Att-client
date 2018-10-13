import React, { Component } from 'react'
import {signupUser} from '../services/authServices' 
import { Redirect, Link} from 'react-router-dom'



class Signup extends Component {
    state={
        username: '',
        password: '',
        email: '',
        user: ''
    }

    handleChange = event => {
        const { target } = event
        const { value, name } = target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {username, password, email} = this.state
        signupUser(username, password, email)
        this.setState({user: username})
    }
    componentWillMount(){
        const user = localStorage.getItem('user')
        if(user != null){
            this.setState({user})
        }
    }

    checkUser= ()=> {
        return (this.state.user === '') ?
        <div className="mx-auto">
            <div className="col">
                <div className="card col s12 m8 l6 mx-auto" style={{width: 900, height:400, }}>
                    <br/>
                    <form className="center-align" onSubmit={this.handleSubmit}>
                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                            <i className="material-icons small center-align">account_circle</i>
                            <label className="text-lg-center" htmlFor="exampleInputPassword1">Username</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}  />
                        </div>
                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                            <i className="material-icons small">account_circle</i>
                            <label className="text-lg-center" htmlFor="exampleInputPassword1">Email</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}  />
                        </div>
                        <div className="form-group col s12 m8 l6 w-76 p-6 d-flex align-content-center flex-wrap align-middle">
                            <i className="material-icons small">security</i>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="inline-block">
                            <button type="submit" className="btn btn-black border-rounded align-middle">Signup</button>
                        </div>     
                    </form>              
                </div>
            </div> 
        </div> : 
        <Redirect to= '/login' />

    }
    render(){
        return(
        <div>
        <div>{this.checkUser()}</div>
        </div>
        )
    }
}

export default Signup