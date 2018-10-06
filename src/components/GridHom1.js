import React from 'react'
import axios from 'axios';

class GridHom1 extends React.Component{
    state= {
        file : {}
      }
    
      handleChange = e => {
        console.log('DEBUG e.target.files[0]', e.target.files[0]);
        this.setState({
          file: e.target.files[0]
        })
      }
      handleSubmit = e =>{
        e.preventDefault();
        let fd = new FormData()
        fd.append('photo', this.state.file)
        axios.post(`http://localhost:3000/photo/add`, fd)
          .then(result=>console.log(result))
          .catch(err => console.log(err))
      }
    render(){
        return(
                <div className="card">
                    <div className="card-content">
                            <h3 className="typwrite">Tips de trabajo</h3>
                        <div className="card-image">
                            <div className="App">
                            <img className="materialboxed" src="https://assets7.domestika.org/project-covers/000/080/487/80487-original-110259-original-todos.jpg?1372677332" alt="tips" width="200px" height="350px"/>
                            <h2>Herramienta de carga de archivos</h2>
                             <form onSubmit={this.handleSubmit}>
                               <input type="file" onChange={this.handleChange}/>
                               <br/>
                               <button type="submit" onClick={()=>console.log("ya guardaste foto")}>Guardarla foto mal</button>
                               </form>
                               <button onClick={()=>console.log(this.state)}>Revisar URL</button>
                           </div>
                                <div className="clearfix"></div>
                            </div>

                            <div>
                            <h3 className="center-align">Sabias que...</h3>
                            <span id="typewrite">Tu jornada laboral esta dividida en tres formas:</span>
                            <br/>
                        </div>
                        <div className="valign-wrapper">
                            <div className="center">
                                <ul>
                                    <li>Jornada diurna.- ocho horas</li>
                                    <li>Jornada nocturna.-siete horas</li>
                                    <li>Jornada mixta.-siete horas y media</li>
                                </ul>
                                <p className="black-text">Durante tu jornada tienes derecho a descanso de por lo menos media hora, el cual en caso de no poder tomarlo te será 
                                computado como tiempo efectivo de tu jornada de trabajo.</p>
                                <br/>
                                <span className="black-text">Que el tiempo extraordinario que labores después de tu horario, debe ser remunerado como horas extras.</span>
                            </div>
                        </div>  

                            
                        </div>
                        </div>
                         
        ) 
    }
}
   

export default GridHom1





