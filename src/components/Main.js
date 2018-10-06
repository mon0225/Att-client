import React from 'react'

class Main extends React.Component{
    render(){
        return(
            <div class="row">
            <div class="col s12 m7">
              <div class="card">
              <span class="card-title blue-grey white-text center"><h2>Bienvenido</h2></span>
                <div class="card-image">
                    <img src="/jefe.webp" alt="jefe" width="50px" height="250px"/>
                </div>
                <div class="card-content justify-align">
                  <p>Buen día trabajador, espero hayas tenido un buen fin de semana con tu familia, me da gusto el poder saludarte 
                  y desearte un excelente día para dar inicio a la jornada laboral con todo la actitud y sin contratiempos. Recibe 
                  un caluroso saludo de bienvenida.</p>
                </div>
              </div>
             
              <div class="slider">
              <ul class="slides">
                <li>
                  <img src="https://lorempixel.com/580/250/nature/1"/> 
                  <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="https://lorempixel.com/580/250/nature/2" /> 
                  <div class="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="https://lorempixel.com/580/250/nature/3" /> 
                  <div class="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="https://lorempixel.com/580/250/nature/4" />
                  <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
              </ul>
            </div>
              
              </div>
              
            </div>
           
        ) 
    }
}
   

export default Main