import React, { Component } from 'react';
import DeviceService from '../services/DeviceService';

class test extends Component {
    constructor(props) {
        super(props)

        this.state = {
                devices: [],
                
        }
        
        
    }
    componentDidMount(){
        DeviceService.getDevices().then((res) => {
            this.setState({ devices: res.data});
        });
    }

    render() {
        
        return (
            <div>
             {this.state.devices.map(
                 (device) => 
             <div>{device.customer.firstName}
            
             
              </div>
             )}
             
            </div>
        )
            
        
    }
}

export default test