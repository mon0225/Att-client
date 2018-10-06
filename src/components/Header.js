import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
  changeUser(){
      if(this.props.username !== ''){
          return [
            <li key={1} onClick={this.props.handleLogout}>Logout</li>,
            <li key={2} onClick={this.props.handleLoggedin}><Link to="/user"> <i className="material-icons">account_box</i></Link></li>
            ]
      }else{
          return [
            <li key={3} onClick={this.props.signupUser}><Link to="/signup">Signup</Link></li>,
            <li key={4} onClick={this.props.loginUser}><Link to="/login">Login</Link></li>
          ]
      }
  }
  
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Trayuda</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.changeUser()}
                    </ul>
                </div>
            </nav>
        )
    }
}




export default Header
