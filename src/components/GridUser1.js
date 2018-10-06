import React from 'react'


class GridUser1 extends React.Component{ 
    state={
        respuesta: ''
    }
    handleChange = event => {
        const { target } = event
        const { value, name }= target

        this.setState({
            [name]: value
        })
    }
    componentWillMount(){
        const respuesta= localStorage.getItem('respuesta')
        if(respuesta != null){
            this.setState({respuesta})
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        const { respuesta } = this.state
        console.log("El password que la Monse no guarda", respuesta); 
    }
    render(){
        return( 
            <div>
                <div className="card ">
                    <div className="card-content">
                        <div className="">
                            <img className="activator" src="/cara-sentimiento.jpg" alt="foto" width="150px" height="60px"/>
                            <h3>Test</h3>
                                <table className="striped centered">
                                    <thead>
                                        <tr>
                                            <th>Nº</th>
                                            <th>Pregunta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><div className="rank"><i className="material-icons">looks_one</i></div></td>
                                            <td>Me siento satisfecho/a con las horas que trabajo</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <form action="#">
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Cierto</span>
                                        </label>
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Falso</span>
                                        </label>
                                    </form>
                                <table className="centered">
                                    <tbody>
                                        <tr>
                                            <td><div className="rank"><i className="material-icons">looks_two</i></div></td>
                                            <td>Considero que mi trabajo puede llegar a ser monótono y/o aburrido</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <form action="#">
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Cierto</span>
                                        </label>
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Falso</span>
                                        </label>
                                    </form>
                                <table className="striped centered">
                                    <tbody>
                                        <tr>
                                            <td><div className="rank"><i class="material-icons">looks_3</i></div></td>
                                            <td>Las responsabilidades que se me exigen se ajustan a mi formación y al puesto que ocupo</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <form action="#">
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Cierto</span>  
                                        </label>
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Falso</span>
                                        </label>
                                    </form>
                                <table className="centered">
                                    <tbody>
                                        <tr>
                                            <td><div className="rank"><i class="material-icons">looks_4</i></div></td>
                                            <td>Si tengo algún problema relacionado con mi trabajo, mi entorno laboral facilita herramientas para solucionarlo</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <form action="#">
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Cierto</span>
                                        </label>
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Falso</span>
                                        </label>
                                    </form>
                                <table className="striped centered">
                                    <tbody>
                                        <tr>
                                            <td><div className="rank"><i class="material-icons">looks_5</i></div></td>
                                            <td>Me siento presionado/a por parte de personas en un cargo superior</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <form action="#">
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Cierto</span>
                                        </label>
                                        <label>
                                            <input className="with-gap" name="group1" type="radio"  />
                                            <span>Falso</span>
                                        </label>
                                    </form>
                                    <button type="submit" className="waves-effect waves-light btn-small" data-js-selector="test_submit">Enviar</button>
                                <br/>
                            </div>
                        </div>
                    <div className="card-content">
                       <div className="center-align">
                            <img className="activator" src="/yoga/meditating-smiley.png" alt="foto" width="150px" height="110px"/>
                            <h3>Relajate un poco</h3>
                                <div className="box">
                                  
                                        <div className="media-left">
                                        
                                        </div>
                          
                                </div>
                            <br/>
                        </div>
                    </div>  
                </div>  
            </div>                       
        ) 
    }
}
 
   

export default GridUser1
