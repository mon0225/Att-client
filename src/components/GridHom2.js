import React from 'react'
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class GridHom2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          cumpleañeros: [ ],
          gallery: [],
            file : {}
        };
      }
    componentDidMount() {
        // Request for images tagged xmas       
        axios.get('https://cloudinary.com/console/media_library/folders/all/tipstrabajo')
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }
    handleChange = e => {
        console.log('DEBUG e.target.files[0]', e.target.files[0]);
        this.setState({
          file: e.target.files[0]
        })
      }
    handleSubmit = e =>{
      e.preventDefault();
      let fd = new FormData()
      fd.append('photo', this.state.file)
      axios.post(`http://localhost:3000/photo/add`, fd)
        .then(result=>console.log(result))
        .catch(err => console.log(err))
    }
    render(){
        const { cumpleañeros } = this.state;
        return(
        <div className="card">
            <div className="card">
                <div className="card-image">
                    <img src="https://media.tenor.com/images/187a94c346e42def29e43d3f89da4566/tenor.png" alt="cumple" width="50px" height="200px"/>
                </div>
            </div>   
            <div className="card-content">
                <h3 className="center-align">Mes de Septiembre</h3>
            <div className="center">
                <ul>
                    {cumpleañeros.map(cumpleañeros => {
                        return <li key={`cumpleañeros_${cumpleañeros}`}>{cumpleañeros}</li>
                    })}
                </ul>
            </div>
                <br/>
                <p>El pastel se partira a las quince horas en sala de juntas, todos estan invitados a celebrar!</p>
            </div>
            <div className="card-content">
                <div className="card">
                    <h4 className="center-align">Risaterapia</h4>
                    <img src="http://www.aicf.gr/sites/aicf.gr/files/images/4_0.jpg" alt="" width="300px" height="260px" />
                        <div className="main">
                            <div className="upload">
                                <form onSubmit={this.handleSubmit}>
                                <input type="file" onChange={this.handleChange}/>
                                <button type="submit" onClick={()=>console.log("ya guardaste foto")}>Guardar</button>
                                </form>
                            </div>
                            <div className="gallery">
                                <CloudinaryContext cloudName="CLOUDNAME">
                                    {
                                        this.state.gallery.map(data => {
                                            return (
                                                <div className="responsive" key={data.public_id}>
                                                    <div className="img">
                                                        <a target="_blank" href={`https://res.cloudinary.com/dmfmtwa9h/image/upload/${data.public_id}.jpg`}>
                                                            <Image publicId={data.public_id}>
                                                                <Transformation
                                                                    crop="scale"
                                                                    width="300"
                                                                    height="200"
                                                                    dpr="auto"
                                                                    responsive_placeholder="blank"
                                                                />
                                                            </Image>
                                                        </a>
                                                        <div className="desc">Creado por {data.created_at}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </CloudinaryContext>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        ) 
    }
}
   

export default GridHom2