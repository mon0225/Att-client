import React from 'react'
import { textoSubmit } from '../services/evalServices' 
import { Bar } from 'react-chartjs-2'
import { getWorkerById } from '../services/workers'

class MainAdmin extends React.Component{
    state = {
        dates: [],
         percentils: [],
          finished: false,
        };
    handleChange = event => {
        const { target } = event
        const { value, name } = target

        this.setState({
            [name]: value
        })
    }
    
    componentDidMount(){
        getWorkerById(this.props.id).then(res=>{
            console.log(res)
            this.setState ({
                dates: res.data.user.emotion.map(dateUser =>{
                    return dateUser.created_at
                }),
                percentils: res.data.user.emotion.map(emotionUser =>{
                    return  emotionUser.percentil
                }),
                //feelings: res.data.user.feelings.map(feelingUser =>{
                  //  return  feelingUser.happy, feelingUser.meh, feelingUser.unhappy
                //})
            })

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
                    <Chart percentils={this.state.percentils} dates={this.state.dates} />

                    </div>
                </div>
                
            </div>
            
        ) 
    }
}

const Chart = ({percentils, dates}) => {
        return <Bar 
        data={{
            labels: dates,
            datasets:[
              {
                label:["Porcentaje de emoción"],
                data: percentils,
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
           
          }}
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
}
 
   

export default MainAdmin