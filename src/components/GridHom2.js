import React from 'react'

class GridHom2 extends React.Component{
    render(){
        return(
            <div className="card">  
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://previews.123rf.com/images/julioaldana/julioaldana1306/julioaldana130600003/20354040-feliz-cumpleanos-happy-texto-espa%C3%B1ol-cumplea%C3%B1os-letras.jpg" alt="cumple" height="230px"/>
                            </div>
                            <div className="card-content">
                                <h2 className="center">Mes de Septiembre</h2>
                                    <ul className="center">
                                        <li><i class="material-icons">cake</i>Alejandra Monroy</li>
                                        <li><i class="material-icons">card_giftcard</i>Gerardo Díaz</li>
                                        <li><i class="material-icons">event</i>César Vallejo</li>
                                    </ul>
                                <p className="center">El pastel se partira a las quince horas en sala de juntas, todos estan invitados a celebrar!</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="card-content">
                <div className="card">
                    <h4 className="center-align">Risaterapia</h4>
                    <div className="card-image">
                        <img src="http://www.aicf.gr/sites/aicf.gr/files/images/4_0.jpg" alt="risaterapia" width="420px" height="290px" />
                    </div>
                </div>
            </div>
        </div>
        ) 
    }
}
   

export default GridHom2