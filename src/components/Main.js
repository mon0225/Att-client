import React from 'react'
import { Carousel } from 'react-bootstrap'

class Main extends React.Component{
    render(){
        return(
            <div class="row">
              <div class="col s12 m7">
                <div class="card">
                  <span class="card-title red lighten-3 white-text center"><h2>Bienvenido</h2></span>
                <div class="card-image">
                  <img src="/jefe.webp" alt="jefe" width="50px" height="250px"/>
                </div>
                <div class="card-content justify-align">
                  <p>Buen día trabajador, espero hayas tenido un buen fin de semana con tu familia, me da gusto el poder saludarte 
                  y desearte un excelente día para dar inicio a la jornada laboral con todo la actitud y sin contratiempos. Recibe 
                  un caluroso saludo de bienvenida.</p>
                </div>
                </div>
              <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/carrusel/agentedecambio.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} alt="900x500" src="/carrusel/capacitacion.jpg" height="800"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/carrusel/salud-laboral-tu-postura-en-la-oficina.png" />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/carrusel/cultura-preventiva.jpg" />
                </Carousel.Item>
              </Carousel>
          </div>
        </div>   
        ) 
    }
}
   

export default Main