import React from 'react'
import { textoSubmit } from '../services/evalServices';


class MainUser extends React.Component{
    state={
        texto: '', 
    }
    handleChange = event => {
        const { target } = event
        const { value, name } = target

        this.setState({
            [name]: value
        })
    }
    componentWillMount(){
        const texto = localStorage.getItem('texto')
        if(texto !== null){
            this.setState({texto})
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        const { texto } = this.state
        textoSubmit(texto)
    }
    render(){
        return(
            <div className="card">
                <div class="row">
                    <div class="col">
                        <div className="card" >
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="/diary/diario.jpg" alt="agenda" width="500px" height="400px"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator black-text text-darken-4">Diario<i className="medium material-icons right">arrow_drop_up</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4"><i className="medium material-icons right">arrow_drop_down</i></span>
                                <br/>
                                    <div className="center">
                                        <input name="fecha" type="text" className="datepicker" placeholder="Fecha"/>
                                    </div>
                                <br/>
                                <div className="valign-wrapper">
                                    <div className="center">
                                        <img src="/diary/leeme2.png" alt="agenda1" width="300px" height="300px"/>
                                    </div>
                                <div className="center">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                                            <i className="material-icons small">account_circle</i>
                                            <input className= "shadow p-2 mb-3 bg-black rounded" type="text" name="texto" placeholder="texto" widht="500px" value={this.state.texto} onChange={this.handleChange}  />
                                            <button type="submit" className="btn btn-black border-rounded align-middle">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                <div class="col">
                  <div class="card">
                    <div class="card-image">
                    <iframe src="https://calendar.google.com/calendar/embed?src=3vvka2mrmh6l2ttti1euvqp2ug%40group.calendar.google.com&ctz=America%2FMexico_City" className="responsive-iframe" width="700px" height="500px"/>
                    </div>
                    <div class="card-action">
                    <h1 class="card-title">Agenda <i class="material-icons">border_color</i></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) 
    }
}
 
   

export default MainUser