import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Logout, Loggedin} from './services/authServices'
import Signup from './components/Signup'
import Login from './components/Login'
import Header from './components/Header'
import Home from './pages/Home'
import User from './pages/User'
import Admin from './pages/Admin'
import listWorker from './pages/listWorker';
import Footer from './components/Footer'


class Router extends React.Component{
  state={
    username: '',
}
componentWillMount(){
    Loggedin()
    setTimeout(()=>{
      const username = localStorage.getItem('user')
      console.log(username)
      if(username != null ) this.setState({username: username})
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
              <Route path='/' component= {Home} exact/>
              <Route component={Home} path="/not-found" />
              <Route path='/signup' component={Signup}/>
              <Route path='/login' component={Login}/>
              <Route path='/user' component={User}/>
              <Route exact path='/workers' component={listWorker}/>
              <Route path='/workers/:id' component={Admin}/>
              {(!this.state.username)?<Redirect to="/signup"/>:<Redirect to="/user" />}
              {/*(!this.state.rol)?<Redirect to="/signup"/>:<Redirect to="/workers" />*/}
          </React.Fragment>
          <Footer/>
        </React.Fragment>
    </BrowserRouter>
    
    )
  }
}




export default Router
   
