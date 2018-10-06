import React from 'react'
import GridUser1 from '../components/GridUser1'
import MainUser from '../components/MainUser'


export default class User extends React.Component{
    
        render(){
            return (
                <div>
                    <div className="row center">
                        <div className="col s12 m5 l5">
                            <MainUser />
                        </div>
                        <div className="col s12 m7 l12">
                           <GridUser1 />
                        </div>
                    </div>
                </div>
            )
        }
    }
    