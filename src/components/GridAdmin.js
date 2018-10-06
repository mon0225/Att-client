import React from 'react';
import { Bar } from 'react-chartjs-2'


class GridAdmin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        observaciones: [],
        finished: false,
        chartData:{
          labels: ['Lunes', 'Martes', "Miércoles", "Jueves", "Viernes"],
          datasets:[
            {
              label: "Verdadero",
              backgroundColor: 'rgba(63, 127, 191, 0.35)',
              data: [7,6,8,9,4]
         
            }, {
              label: "Falso",
              backgroundColor: 'rgba(191, 63, 127, 0.30)',
              data: [3,4,2,1,6]
            },
         
          ],
         
        },
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        finished: !this.state.finished
      });
    }
    
    render() {
      const text = this.state.finished ? 'finished' : 'haven\'t finished';
      const label = this.state.finished ? <i className="small material-icons">mood</i> : <i className="small material-icons">mood_bad</i>
      return (
        <div>
            <div className="card ">
              <div className="card-content">
                <div className="center-align">
                  <h1>Resultados Test</h1>
                  
                <br/>
                  <Bar
                    data={this.state.chartData}
                    options={{
                      responsive: true,
                      title:{
                        display: false,
                        text: 'Resultados Test',
                        fontSize: 25
                      },
                      legend:{
                        display: true,
                        position: 'bottom'
                      }
                    }}
                  />
                             
                </div>
              </div>

              <div class="row">
              <div class="col s12 m10">
                <div class="card">
                  <div class="card-image">
                   <img src="https://previews.123rf.com/images/sonulkaster/sonulkaster1704/sonulkaster170400281/75826669-psychology-abstract-conceptual-symbol-of-vector-human-brain-under-umbrella.jpg" widht="50px" height="200px"/>
                    <button className="btn-floating halfway-fab waves-effect waves-light red" width="10px" height="60px" onClick={this.handleClick}>
                  {label}</button>
                  </div>
                  <div class="card-content">
                    <h1 class="card-title">Diagnóstico</h1>
                    <p>Dr. Jesús Alonso Lara</p>
                    <p>Cédula Profesional: 78044</p>
                    <br/>
                    <p>Resultados: No presenta mayor sintomas de depresión, tienes las presiones diarias de una vida normas, sin embargo debido al stress du su vida diaria presenta riesgo de sufrir depresión.</p>
                    <br/>
                    <p>Indicaciones: En observación.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      );
    }
  }
  
  export default GridAdmin