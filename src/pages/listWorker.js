import React, {Component} from 'react'
import User from './User';
import { Link } from 'react-router-dom'
import { workers } from '../services/workers';


class listWork extends Component {
    constructor(props){
        super(props);
        this.state={
            emotion: '',
            username: '',
            user: '',
            users: []
        };
    }
   
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({user})
        workers()
        .then(res => {
            console.log(res.data.users)
            this.setState({
                users: res.data.users
            });
        }) 
        
     }
     pregunta = (us) => {
         if(us.emotion === undefined ) 
         console.log(us)
         return <p>hola</p>
     }
render(){
    return(
        <div>
                <div className="card ">
                    <div className="card-content">
                        <div className="">
                            <img className="activator" src="/cara-sentimiento.jpg" alt="foto" width="150px" height="60px"/>
                            <h3>Lista trabajadores</h3>
                                <table className="striped centered">
                                    <thead>
                                        <tr>
                                            <th>Nº</th>
                                            <th>Nombre</th>
                                            <th>Emotion</th>
                                            <th>Rol</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.users.map(us=>{
                                        return(
                                            <tr>
                                            <td><div className="rank"><i className="material-icons">looks_one</i></div></td>
                                            <td>{us.username}</td>
                                            
                                            <td>{()=>{this.pregunta(us)}}</td>
                                            <td>{us.role}</td>
                                              
                                           
                                            
                                           
                                            <td><button type="submit" className="btn btn-black border-rounded align-middle"> <Link to="/workers/:id" className="admin">Admin</Link></button></td>
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