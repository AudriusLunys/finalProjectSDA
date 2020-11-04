import React, { Component } from 'react';
import AppNav from './AppNav';




class Home extends Component {
    state = {}

    render() { 
        return (
            <div>
             <AppNav/>
             <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
               Welcome! This is Repair management application for small service 
               providers 
               </h2>
              </div>
            );
    }
}
 
export default Home;