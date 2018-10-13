import React from 'react'
import GridUser1 from '../components/GridUser1'

import MainUser from '../components/MainUser'



export default class User extends React.Component{
        render(){
            return (
                <div className="row">
                <div className="col-4 s12 m2 l2">
                    <GridUser1 />
                </div>
                <div className="col-8 s12 m8 l8">
                    <MainUser />
                </div>
                
            </div>
            )
        }
    }
    