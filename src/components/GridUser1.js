import React from 'react'
import { Carousel } from 'react-bootstrap'
import { checkFeelings } from '../services/checkFeelings';
import MultipleDatePicker from "react-multiple-datepicker";
import { Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap'

const styles = {
    textAlign: 'center',
  };
class GridUser1 extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {
          finished: false,
          color: 'green', 
          show: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    } 
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    handleClick() {
        this.setState({
          finished: !this.state.finished
        });
      }
    handleChange = event => {
        const { target } = event
        const { value, name } = target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {happy, meh, unhappy} = this.state
        checkFeelings(happy, meh, unhappy)
    }
    componentWillMount(){
        const user = localStorage.getItem('user')
        if(user != null){
            this.setState({user})
        }
    }
     
    render(){
        const popover = (
            <Popover id="modal-popover" title="popover">
              very popover. such engagement
            </Popover>
          );
          const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return( 
            <div className='card center-align'>
                <div>
                    <Button className="center-align" bsStyle="info" bsSize="large" onClick={this.handleShow}>
                    Regulación en el tema
                    </Button>
    
                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>De conformidad con la Comisión Nacional de los Derechos Humanos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Toda persona tiene derechos humanos en el trabajo</h4>
                        <p>
                        En específico al derecho a la estabilidad en el empleo, en el que se 
                        indica que el trabajador debe gozar de su permanencia en el
                        trabajo, para surtir su seguridad personal y laboral, en la
                        inteligencia de que solamente puede ser separado de su empleo por causa justa 
                        o legal, determinada en el
                        artículo 47 de la Ley Federal del Trabajo. 
                        </p>
    
                        <h4>Ley Federal del Trabajo</h4>
                        <p>
                            Artículo 47
                            <OverlayTrigger overlay={popover}>
                            <p>Son causas de rescisión de la relación de trabajo, sin responsabilidad para el patrón:</p>
                            </OverlayTrigger>
                            I. Engañar con certificados falsos en los que se atribuyan capacidad, aptitudes o facultades de que carezca.  
                            <br/>            
                            II. Incurrir en faltas de probidad u honradez, en actos de violencia en contra del patrón;
                            <br/>
                            III. Cometer contra alguno de sus compañeros, cualquiera de los actos enumerados en la fracción anterior; 
                            <br/>
                            IV. Cometer fuera del servicio, contra el patrón alguno de los actos a que se refiere la fracción II.
                            <br/>
                            V y VI. Ocasionar intencionalmente, perjuicios materiales;
                            <br/>
                            VII. Comprometer por su imprudencia o descuido la seguridad;
                            <br/>
                            VIII. Cometer actos inmorales; 
                            <br/>
                            IX. Revelar secretos de fabricación; 
                            <br/>
                            X. Tener más de tres faltas de asistencia en un período de treinta días; 
                            <br/>
                            XI. Desobedecer al patrón o a sus representantes, sin causa justificada;
                            <br/> 
                            XII. Negarse a adoptar las medidas preventivas para evitar accidentes o enfermedades; 
                            <br/>
                            XIII. Concurrir a sus labores en estado de embriaguez o bajo la influencia de droga enervante; 
                            <br/>
                            XIV. La sentencia ejecutoriada que imponga una pena de prisión; 
                            <br/>
                            XV. Las análogas a las establecidas en las fracciones anteriores.
                        </p>
                    <hr />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
                <div className="row">
                    <div className="col-12">
                    <div className="center-align">
                    <h2 className='center'>Ejercitate</h2>
                    <img className="center-align" src="https://icon-icons.com/icons2/415/PNG/512/exercise73_41344.png" alt="ejercicio" width="60px" height="60px" />
                    <h3 className='center'>Hay muchas formas!!!</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/ejercicio/usabici.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} alt="900x500" src="/ejercicio/beneficios-baile-a-tu-salud.jpg" height="800"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/ejercicio/descansa.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/ejercicio/beneficios.png" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/ejercicio/beneficios-correr.png" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br/>
                      <div className="card center-align">
                        <div className="card-content">
                            <div style={styles}>
                                <h3>Agenda<img src="/Agenda.png" alt="" width="50px" height="50px"/></h3>
                                <br/>
                                <h4>Anota y manten a la mano tus fechas importantes {'\u2728'}</h4>
                            </div>
                        </div>
                            <div style={styles} className="card-action">
                                <h4>Da click aqui</h4>
                                <i class="material-icons font-size: 30px">touch_app</i>
                                <MultipleDatePicker
                                onSubmit={dates => <input>("selected dates ", dates)</input>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
 
   

export default GridUser1
