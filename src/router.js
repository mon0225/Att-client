import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'

const Home =()=> <h1>Home</h1>
const Header= ()=><h1>Header</h1>

export default () => (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <React.Fragment>
            <Route path='/' component= {Home} exact/>
            <Route path='/signup' component={Signup}/>
            <Route path='/login' component={Login}/>
        </React.Fragment>
      </React.Fragment>
    </BrowserRouter>
)