import React from 'react'
import { textoSubmit } from '../services/evalServices';
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

const photos = [
    { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  ];
  
  const SortablePhoto = SortableElement(Photo);
const SortableGallery = SortableContainer(({ photos }) => {
  return <Gallery photos={photos} columns={4} ImageComponent={SortablePhoto} />;
});

  
class MainUser extends React.Component{
    
      state = {
            texto: '',
            photos: photos
        };
        
      
      onSortEnd=({ oldIndex, newIndex }) =>{
        this.setState({
          photos: arrayMove(this.state.photos, oldIndex, newIndex)
        });
      }
    handleChange = event => {
        const { target } = event
        const { value, name } = target

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    componentWillMount(){
        const texto = localStorage.getItem('texto')
        if(texto !== null){
            this.setState({texto})
        }
    }
    handleSubmit = event =>{
        console.log('enviando texto')
        event.preventDefault();
        const { texto } = this.state
        textoSubmit(texto)
            .then(r=>{
                console.log(r)
            }).catch(e=>{
                console.log(e)
            })

    }
    
    render(){
        return(
            <div className="">
                <div class="row">
                    <div class="col">
                        <div className="card" >
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="/diario/midiario.png" alt="agenda" width="500px" height="395px"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator black-text text-darken-4"><i className="medium material-icons right">arrow_drop_up</i></span>
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
                                        <img src="/stickies/superstickies (2).png" alt="agenda1" width="200px" height="200px"/>
                                    </div>
                                <div className="center">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group col s12 m8 l6 w-76 p-3 d-flex align-content-start flex-wrap align-middle">
                                            <i className="material-icons small">book</i>
                                            <textarea onChange={this.handleChange} id="textarea" name="texto" class="materialize-textarea" rows="4" cols="50">{this.state.texto}</textarea>
                                            <button type="submit" className="btn btn-black border-rounded align-middle">Enviar</button>
                                        </div>
                                        <img src="/stickies/superstickies (1).png" alt="agenda2" width="200px" height="200px"/>
                                    </form>
                                </div>

                                <a id="menu" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">menu</i></a>

                                <div class="tap-target" data-target="menu">
                                  <div class="tap-target-content">
                                    <h5>Title</h5>
                                    <p>A bunch of text</p>
                                  </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col">
                    <div class="card">
                        <SortableGallery
                        axis={"xy"}
                        photos={this.state.photos}
                        onSortEnd={this.onSortEnd}
                        />
                    </div>
                </div>
            </div>
            </div>
        ) 
    }
}
 


   

export default MainUser