import React from 'react'
import { textoSubmit } from '../services/evalServices' 
import { Bar } from 'react-chartjs-2'

var emotion = [localStorage.getItem("percentil")]
var percentilUse = emotion.slice(0, -2);
percentilUse.push(percentilUse);

console.log(percentilUse)
class MainAdmin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          percentil: '',
          finished: false,
          chartData:{
            labels: ["Lunes","Martes","Mièrcoles","Jueves","Viernes"],
            datasets:[
              {
                label:["Porcentaje de emoción"],
                data: [percentilUse],
                width: 5,
                backgroundColor:[
                  'rgba(63, 127, 191, 0.17)',
                  'rgba(81, 127, 173, 0.30)',
                  'rgba(191, 63, 127, 0.30)',
                  'rgba(63, 191, 191, 0.21)',
                  'rgba(127, 102, 153, 0.4)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
              }
           
           
            ],
           
          },
        };
      } 
    handleChange = event => {
        const { target } = event
        const { value, name } = target

        this.setState({
            [name]: value
        })
    }
    componentWillMount(){
        const percentil = localStorage.getItem('percentil')
        if(percentil !== null){
            this.setState({percentil})
        }
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
    render(){
        return(
            <div className="card">
                <div className="row">
                    <div className="col">
                        <h1>Resultados</h1>
                        <img className="activator" src="/animo.png" alt="foto" width="210px" height="180px"/>
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="fecha" id="fecha" type="date" className="validate" value={this.state.texto} onChange={this.handleChange}/>
                                <label htmlFor="fecha">Fecha</label>
                            </div>
                        </div>
                    </form>
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
                
            </div>
            
        ) 
    }
}
 
   

export default MainAdmin