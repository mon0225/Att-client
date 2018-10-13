import React from 'react'
import { checkAffairs } from '../services/checkServices'
import LikeButton from '../components/LikeButton'


class Todo extends React.Component{
  state={
    prioridad: '',
    tema: '',
    descripcion: '',
    fecha: '',
    pendientes:''
}
handleChange = event => {
    const { target } = event
    const { value, name } = target

    this.setState({
        [name]: value
    })

}
handleSubmit = event =>{
    event.preventDefault();
    const { prioridad,tema,descripcion,fecha } = this.state
    console.log("El password que la Monse no guarda", prioridad,tema,descripcion,fecha);
    checkAffairs(prioridad,tema,descripcion,fecha)
}
componentWillMount(){
  const pendientes = localStorage.getItem('pendientes')
  if(pendientes !== null){
      this.setState({pendientes})
  }
}
  render(){
    return(
        <div className="card pull-s12 w-75">
        <br/>
        <div className="center">
        <h2>Lista de pendientes</h2>
        </div>
        
        <div className="row s12 m6 l10 w-95 p-2">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id="icon_prefix2" value={this.state.prioridad} onChange={this.handleChange}/>
              <input id="icon_prefix" type="text" class="validate"     />
              <label htmlFor="prioridad">Prioridad</label>
            </div>
            <div className="input-field col s6">
              <input id="icon_prefix2" value={this.state.tema} onChange={this.handleChange}/>
              <input id="icon_prefix" type="text" class="validate"     />
              <label htmlFor="prioridad">Tema</label>
            </div>
          </div>
          <div className="row">
            <LikeButton />
            <div className="input-field col s12">
                <input id="icon_prefix2" value={this.state.descripcion} onChange={this.handleChange}/>
                <input id="icon_prefix" type="text" class="validate"     />
                <label htmlFor="prioridad">Descripción</label>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light pink"><i class="tiny material-icons white-text">add</i></a>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light green"><i class="tiny material-icons white-text">delete</i></a>
            </div>
            <LikeButton />
            <div className="input-field col s12">
                <input id="icon_prefix2" value={this.state.descripcion} onChange={this.handleChange}/>
                <input id="icon_prefix" type="text" class="validate"     />
                <label htmlFor="prioridad">Descripción</label>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light pink"><i class="tiny material-icons white-text">add</i></a>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light green"><i class="tiny material-icons white-text">delete</i></a>
            </div>
            <LikeButton />
            <div className="input-field col s12">
                <input id="icon_prefix2"/>
                <input id="icon_prefix" type="text" class="validate"     />
                <label htmlFor="prioridad">Descripción</label>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light pink"><i class="tiny material-icons white-text">add</i></a>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light green"><i class="tiny material-icons white-text">delete</i></a>
            </div>
            <LikeButton />
            <div className="input-field col s12">
                <input id="icon_prefix2" />
                <input id="icon_prefix" type="text" class="validate"     />
                <label htmlFor="prioridad">Descripción</label>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light pink"><i class="tiny material-icons white-text">add</i></a>
                <a class="btn-floating-tiny btn-circle waves-effect waves-light green"><i class="tiny material-icons white-text">delete</i></a>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="fecha" type="date" className="validate" value={this.state.fecha} onChange={this.handleChange}/>
              <label htmlFor="date">Fecha</label>
            </div>
            <div className="input-field col s12">
              <input id="fecha" type="date" className="validate" />
              <label htmlFor="date">Fecha</label>
            </div>
            <div className="input-field col s12">
              <input id="fecha" type="date" className="validate" />
              <label htmlFor="date">Fecha</label>
            </div>
            <div className="input-field col s12">
              <input id="fecha" type="date" className="validate" />
              <label htmlFor="date">Fecha</label>
            </div>
          </div>
        </form>
        
      </div>
      <button type="submit" className="btn btn-black border-rounded align-middle">Enviar</button>
      
    </div>
    );
  }
  
  }


            
 

export default Todo