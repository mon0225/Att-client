import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Admin from '../components/Admin'
import { workers } from '../services/workers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear, faFrownOpen, faLaugh, faCheckDouble, faSearchPlus} from '@fortawesome/free-solid-svg-icons'



class listWork extends Component {
    constructor(props){
        super(props);
        this.state={
            id: '',
            emotion: '',
            feeling: '',
            username: '',
            user: '',
            users: []
        };
    }
   
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        //if(!user) this.props.history.push('/login')
        this.setState({user})
        workers()
        .then(res => {
            console.log(res.data.users)
            this.setState({
                users: res.data.users
            });
        }) 
        
     }   

    getGrade = emocion => {
        if(emocion <= .20){
            return <FontAwesomeIcon icon={faSadTear} color="blue" size="lg"/>
        }
        if(emocion > .20 && emocion <= .40){
            return <FontAwesomeIcon icon={faLaugh} size="lg"/>
        }
        if(emocion > .40)
            return <FontAwesomeIcon icon={faFrownOpen} color="lightsalmon" size="2x"/>
    }
           
render(){
    
    return(
        <div>
            <div className="card ">
                <div className="card-content">
                <Admin />
                    <div className="center-align">
                        <h2><img className="activator" src="/lista.png" alt="foto" width="100px" height="100px"/>Lista trabajadores</h2>
                        
                            <table class="centered table table-responsive-sm table-striped table-bordered ">
                                <thead class="thead-dark">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Antiguedad</th>
                                    <th scope="col">Nivel</th>
                                    <th scope="col">Emoción</th>
                                    <th scope="col">Detalle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map(us=>{
                                return(
                                    <tr key="listworker">
                                        <td><FontAwesomeIcon icon={faCheckDouble} color="black" size="1x"/></td>
                                        <td>{us.username}</td>
                                        <td>{us.antiguedad}</td>
                                        <td>{us.nivel}</td>
                                        <td>{(us.emotion.length>0) ? <p>{this.getGrade(us.emotion[us.emotion.length-1].percentil)}</p> : <p>sin registro</p>}</td>
                                        <td><button type="submit" className="btn btn-info border-rounded align-middle"> <Link to={`/workers/${us._id}`} className="admin"><FontAwesomeIcon icon={faSearchPlus} color="black" size="1x"/></Link></button></td>
                                    </tr>
                                    )  
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default listWork