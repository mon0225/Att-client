import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {loginUser} from '../services/authServices'

class Login extends Component{
    state={
        username: "",
        password: "",
        user: '',
    }
    handleChange = event => {
        const { target } = event
        const { value, name }= target

        this.setState({
            [name]: value
        })

    }
    componentWillMount(){
        const isLoggedin = localStorage.getItem('isLoggedin')
        if(isLoggedin){
            this.setState({isLoggedin})
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        const { username, password } = this.state
        console.log("El password que la Monse no guarda", password);
        
        loginUser(username, password)
        setTimeout((()=>{
            if (localStorage.getItem('isLoggedin')){
                this.setState({username: localStorage.getItem('user')})
                this.setState({isLoggedin: localStorage.getItem('isLoggedin')})
            }
        }), 100

        )
    }

    checkUser = () => {
        return (!this.state.isLoggedin) ?
                <div className="align-middle">
                    <div className=" col s12 m8 l4 align-middle">
                        <div className="card col s12 m8 l6 w-75 p-3">
                        <br/>
                            <form onSubmit={this.handleSubmit}>
                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                            <i className="material-icons small">account_circle</i>
                            <label className="text-lg-center" htmlFor="exampleInputPassword1">Username</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                    <div className="form-group col s12 m8 l6 w-76 p-6 d-flex align-content-center flex-wrap align-middle">
                        <i className="material-icons small">security</i>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input className= "shadow p-2 mb-3 bg-black rounded" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="inline-block">
                        <button type="submit" className="btn btn-black border-rounded align-middle">Login</button>
                    </div>     
                </form>              
            </div>
        </div> 
    </div> :
        <Redirect to='/user'/>
        }

    render(){
        return(
            <div>
                <div>{this.checkUser()}</div>
            </div>
        )
    }
}


export default Login