import React, { Component } from 'react';
import AppNav from './AppNav';




class Home extends Component {
    state = {}

    render() { 
        return (
            <div>
              <div>
              <AppNav/>
              </div>
            
             <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
               Welcome! This is only a CRUD APP :(
               </h2>
              </div>
            );
    }
}
 
export default Home;