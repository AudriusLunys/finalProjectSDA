import React, { Component } from 'react';

class DeviceType extends Component {
    state = { 
        isLoading :true,
        DeviceTypes: []
     }

     async componentDidMount(){
         const response = await fetch('/api/devicetypes')
         const body = await response.json();
         this.setState({DeviceTypes:body , isLoading : false});
     }

    render() { 
         const{DeviceTypes , isLoading} = this.state;
         if (isLoading)
         return(<div>Loading...</div>)

        return ( 
            <div>
             <h2>Device Types</h2>
             {
                 DeviceTypes.map ( deviceType =>
                   <div id={deviceType.id}>
                       {deviceType.type}
                   </div>
                 )

             }

            </div>
         );
    }
}
 
export default DeviceType;