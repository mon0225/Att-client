import React from 'react'
import GridHom1 from '../components/GridHom1'
import GridHom2 from '../components/GridHom2'
import Main from '../components/Main'


export default class Home extends React.Component{
    render(){
        return(
            <div className="row">
            <div className="col s12 m2 l2">
                <GridHom1 />
            </div>
            <div className="col s12 m8 l8">
                <Main />
            </div>
            <div className="col s12 m2 l2">
                <GridHom2 />
            </div>
        </div>
);
}

}