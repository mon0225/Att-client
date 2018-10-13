import React from 'react'

class GridHom1 extends React.Component{
    render(){
        return(
                <div className="card">
                    <div className="card-content">
                        <h2 className="center">Tips de trabajo</h2>
                    <div className="card-image">
                        <div className="card">
                            <img className="materialboxed" src="/tips-de-trabajo/tiptrabajo15.jpg" alt="tips" width="200px" height="350px"/>
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card">
                                    <div class="card-content">
                                        <h2 class="card-title">Sabías que...</h2>
                                        <span>Tu jornada laboral esta dividida en tres formas:</span>
                                        <ul className="center">
                                        <br/>
                                            <li>Jornada diurna.- ocho horas</li>
                                            <li>Jornada nocturna.-siete horas</li>
                                            <li>Jornada mixta.-siete horas y media</li>
                                        </ul>
                                    </div>
                                <div class="card-action">
                                    <p className="black-text">Durante tu jornada tienes derecho a descanso de por lo menos media hora, el cual en caso de no poder tomarlo te será 
                                    computado como tiempo efectivo de tu jornada de trabajo.</p>
                                    <br/>
                                    <span className="black-text">Que el tiempo extraordinario que labores después de tu horario, debe ser remunerado como horas extras.</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>       
        ) 
    }
}
   

export default GridHom1





