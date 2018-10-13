import React, {Component} from 'react'
import { Redirect, Link} from 'react-router-dom'
import { faDiagnoses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component{
    render(){
        return(
            <footer class="page-footer">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Proyecto final</h5>
                  <p class="grey-text text-lighten-4">Ironhack</p>
                  <Link to="/workers" className="admin"><FontAwesomeIcon icon={faDiagnoses} color="#ee6e73" size="1x"/></Link>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              © 2014 Copyright Text
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer