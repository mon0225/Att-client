import React, { Component } from 'react'

import { Redirect, Link} from 'react-router-dom'



class SignupAdmin extends Component {
    state={
        username: '',
        clave: '',
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
        const {username, clave} = this.state
        //signupAdmin(username, clave)
    }
    componentWillMount(){
        const user = localStorage.getItem('user')
        if(user != null){
            this.setState({user})
        }
    }

    checkUser= ()=> {
        return (this.state.user === '') ?
        <div className="align-middle">
            <div className=" col s12 m8 l4">
                <div className="card col s12 m8 l6 w-75 p-3">
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                            <i className="material-icons small">account_circle</i>
                            <label className="text-lg-center" htmlFor="exampleInputPassword1">Username</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}  />
                        </div>
                        <div className="form-group col s12 m8 l6 w-76 p-6 d-flex align-content-center flex-wrap align-middle">
                            <i className="material-icons small">security</i>
                            <label htmlFor="exampleInputPassword1">Clave de Autorización</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="password" name="clave" placeholder="Clave" value={this.state.clave} onChange={this.handleChange}/>
                        </div>
                        <div className="inline-block">
                            <button type="submit" className="btn btn-black border-rounded align-middle">Signup</button>
                        </div>     
                    </form>              
                </div>
            </div> 
        </div> : 
        <Redirect to= '/user' />

    }
    checkRole= ()=> {
        const role = () =>{
            if(role != null){
                this.setState({role})
            }
            return (this.state.role === '') ?
        <div className="align-middle">
            <div className=" col s12 m8 l4">
                <div className="card col s12 m8 l6 w-75 p-3">
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                            <i className="material-icons small">account_circle</i>
                            <label className="text-lg-center" htmlFor="exampleInputPassword1">Username</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}  />
                        </div>
                        <div className="form-group col s12 m8 l6 w-76 p-6 d-flex align-content-center flex-wrap align-middle">
                            <i className="material-icons small">security</i>
                            <label htmlFor="exampleInputPassword1">Clave de Autorización</label>
                            <input className= "shadow p-2 mb-3 bg-black rounded" type="password" name="clave" placeholder="Clave" value={this.state.clave} onChange={this.handleChange}/>
                        </div>
                        <div className="inline-block">
                            <button type="submit" className="btn btn-black border-rounded align-middle">Signup</button>
                        </div>     
                    </form>              
                </div>
            </div> 
        </div> : 
        <Redirect to= '/workers' />

        }
        
    }

    render(){
        return <div>
            <div>{this.checkUser()}</div>
            <div>{this.checkRole()}</div>
        </div>
        
    }
}

export default SignupAdmin