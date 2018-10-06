import React from 'react'
import MainAdmin from '../components/MainAdmin'
import GridAdmin from '../components/GridAdmin'


export default class Admin extends React.Component{
        render(){
            return(
            <div>
                <div className="row center">
                    <div className="col s12 m5 l5">
                        <GridAdmin />
                    </div>
                    <div className="col s12 m7 l7">
                        <MainAdmin />
                    </div>
                </div>
            </div> 

            ) 
            
        }
    }