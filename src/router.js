import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Logout, Loggedin} from './services/authServices'

import Signup from './components/Signup'
import SignupAdmin from './components/SignupAdmin'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import User from './pages/User'
import Admin from './pages/Admin'
import listWorker from './pages/listWorker';

class Router extends React.Component{
  state={
    username: '',
    pendientes: ''
}
componentWillMount(){
    Loggedin()
    setTimeout(()=>{
      const username = localStorage.getItem('user')
     if(username != null ) this.setState({username: JSON.parse(username).username})
    }, 100)
}

handleLogout = () => {
    console.log('Logout')
    Logout()
    this.setState({username: ''})
    
}

  render(){
    return(
      <BrowserRouter>
      <React.Fragment>
        <Header username={this.state.username} handleLogout={this.handleLogout}/>
        <React.Fragment>
            <Route authorize={['user', 'admin']} path='/' component= {Home} exact/>
            <Route component={Home} path="/not-found" />
            <Route path='/signup' component={Signup}/>
            <Route path='/signupAdmin' component={SignupAdmin}/>
            <Route path='/login' component={Login}/>
            <Route path='/user' component={User}/>
            <Route exact authorize={['workers']} path='/workers' component={listWorker}/>
            <Route authorize={['workers']} path='/workers/:id' component={Admin}/>
        </React.Fragment>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
    )
  }
}




export default Router
   
