import React from 'react'
import { Radio, FormGroup,ControlLabel, FormControl, Checkbox, Button, FieldGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear, faMeh, faGrinAlt} from '@fortawesome/free-solid-svg-icons'
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap'
import { checkFeelings } from '../services/checkFeelings';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'


class GridUser1 extends React.Component{ 
    state = {
       textValue: null,
        percent: null,
        displayColorPicker: false,
        color: 'FFFFFF', title: 'white'
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
      handleClose = () => {
        this.setState({ displayColorPicker: true })
      };
      handleChange = (color,white,red,blue,orange) => {
          if(color === white){
            this.setState({ color: 'D0021B', title: 'red'})
          }else if(color === red){
              this.setState({color: 'F5A623', tittle:'orange'})
          }else{
              this.setState({color: '4A90E2', title: 'blue'})
          }
        
      };    
    onSlide = (render, handle, value, un, percent) => {
        this.setState({
          textValue: value[0].toFixed(2),
          percent: percent[0].toFixed(2)
        });
      };
    render(){
        const { textValue, percent } = this.state;
        const styles = reactCSS({
            'default': {
              color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });
        return( 
            
            <div className="card">
            <div className="card-content">

            <div>
            <div style={ styles.swatch } onClick={ this.handleClick }>
              <div style={ styles.color } />
            </div>
            { this.state.displayColorPicker ? <div style={ styles.popover }>
              <div style={ styles.cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
            </div> : null }
    
          </div>
                    <h3 className="typwrite">¿Cómo te sientes el día de hoy?</h3>
                <div className="card-image">
                    <div className="App">
                    <img className="materialboxed" src="/cara-sentimiento.jpg" alt="tips" width="100px" height="110px"/>
                    <br/>
                    <div>
                        <Nouislider
                            connect
                            accessibility
                            start={0}
                            step={10}
                            range={{
                                min: 0,
                                max: 100
                        }}
                        onSlide={this.onSlide}
                        />
                        {textValue &&
                        percent && (
                            <div>
                            Value: {percent} %
                            </div>
                        )}
                    </div>
                       <label onClick={()=>console.log(this.state)}>Revisar URL</label>
                   </div>
                        <div className="clearfix"></div>
                    </div>

                    <div>
                    <h3 className="center-align">Sabias que...</h3>
                    <span id="typewrite">Tu jornada laboral esta dividida en tres formas:</span>
                    <br/>
                </div>
                <div className="valign-wrapper">
                    <div className="center">
                        <ul>
                            <li>Jornada diurna.- ocho horas</li>
                            <li>Jornada nocturna.-siete horas</li>
                            <li>Jornada mixta.-siete horas y media</li>
                        </ul>
                        <p className="black-text">Durante tu jornada tienes derecho a descanso de por lo menos media hora, el cual en caso de no poder tomarlo te será 
                        computado como tiempo efectivo de tu jornada de trabajo.</p>
                        <br/>
                        <span className="black-text">Que el tiempo extraordinario que labores después de tu horario, debe ser remunerado como horas extras.</span>
                    </div>
                </div>  

                    
                </div>
                </div>
        

        ) 
    }
}
 
   

export default GridUser1

