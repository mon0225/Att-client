import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import { textoSubmit } from '../services/evalServices' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faThumbsUp} from '@fortawesome/free-solid-svg-icons'


class GridAdmin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        finished: false,
        porcentaje: [],
        emocion:[],
      };
    } 
    handleChange = event => {
      const { target } = event
      const { value, name } = target

      this.setState({
          [name]: value
      })
  }
  
  componentDidMount(){
          this.setState({
            porcentaje: ['30%','70%','100%'],
            emocion: ['Depresión', 'Estress', 'Angustia' ],
           
          })
   
  }
  handleSubmit = event =>{
      event.preventDefault();
      const { percentil } = this.state
      const perc = textoSubmit(percentil)
      this.setState({
          state:{
          datasets:{
              data: perc
          }
      }})
  }
    render() {
      const label = this.state.finished ? <i className="small material-icons">mood</i> : <i className="small material-icons">mood_bad</i>
      return (
          <div>
          <div class="row">
          <div class="col s12 m10">
            <div class="card">
              <div class="card-image">
                <img src="/diagnostico.jpg" alt="diagnostico" widht="50px" height="200px"/>
                <button className="btn-floating halfway-fab waves-effect waves-light red" width="10px" height="60px" onClick={this.handleClick}>
                {label}</button>
              </div>
              <div class="card-content">
                <h2>Diagnóstico</h2>
                <h5>Dr. Jesús Alonso Lara</h5>
                <h5>Cédula Profesional: 78044</h5>
                <br/>
                <table className="highlight centered responsive-table">
                  <thead>
                    <tr>
                      <th>Emoción</th>
                      <th>Porcentaje</th>
                      <th>Observación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.emocion[0]}</td>
                      <td>{this.state.porcentaje[0]}</td>
                      <td><FontAwesomeIcon icon={faThumbsUp} color="teal" size="lg"/></td>
                    </tr>
                    <tr>
                      <td>{this.state.emocion[1]}</td>
                      <td>{this.state.porcentaje[1]}</td>
                      <td><FontAwesomeIcon icon={faEye} color="red" size="lg"/></td>
                    </tr>
                    <tr>
                      <td>{this.state.emocion[2]}</td>
                      <td>{this.state.porcentaje[2]}</td>
                      <td><FontAwesomeIcon icon={faEye} color="red" size="lg"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
            <div className="card ">
              <div className="card-content">
                <div className="center-align">
                  <h1>Conclusión</h1>
                  <form onSubmit={this.handleSubmit}> 
                  <br/>
                    <Chart emocion={this.state.emocion} porcentaje={this.state.porcentaje}/>
                  </form>       
                </div>
              </div>
             
          </div>
        </div>
      );
    }
  }
  
  const Chart = ({porcentaje, emocion}) => {
    return <HorizontalBar 
    data={{
        labels: emocion,
        datasets:[{
          data: porcentaje.map((x)=>{
            return parseFloat(x)/100
          }),
          backgroundColor: [
            'rgba(191, 63, 127, 0.30)',
            '#FAD7A0',
            'rgba(63, 127, 191, 0.35)'
          ]
        }] 
      }}
    options={{
        responsive: true,
        title:{
        display: false,
        text: 'Resultados Test',
        fontSize: 15
        },
        legend:{
        display: false,
        position: 'bottom'
        }
    }}
  />
}


  export default GridAdmin