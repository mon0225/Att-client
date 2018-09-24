import React, { Component } from 'react'
import {signupUser} from '../services/authServices' 

class Signup extends Component {
    state={
        username: '',
        pwd: ''
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
        const {username, pwd} = this.state
        signupUser(username, pwd)
    }

    render(){
        return <React.Fragment>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}  />
            </div>
            <div>
            <label>password</label>
            <input type="password" name="pwd" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <button type="submit">Signup</button>
        </form>
        </React.Fragment>
    }
}

export default Signup