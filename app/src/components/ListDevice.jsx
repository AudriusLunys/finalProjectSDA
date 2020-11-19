import React, { Component } from 'react';
import DeviceService from '../services/DeviceService';
import AppNav from '../components/AppNav';

class ListDevice extends Component {
    constructor(props) {
        super(props)

        this.state = {
                devices: []
        }
        this.addDevice = this.addDevice.bind(this);
        this.editDevice = this.editDevice.bind(this);
        this.deleteDevice=this.deleteDevice.bind(this);
        
        
    }
    deleteDevice(id){
        DeviceService.deleteDevice(id).then( res => {
            this.setState({devices: this.state.devices.filter(device => device.id !== id)});
        });
    }

    editDevice(id){
        this.props.history.push(`/update-device/${id}`);
    }


    componentDidMount(){
        DeviceService.getDevices().then((res) => {
            this.setState({ devices: res.data});
        });
    }

    addDevice(){
        this.props.history.push('/add-device');
    }

    render() {
        console.log(this.state.devices);
        return (
            <div> 
              <AppNav/>
           
            <div className = "container">
           
                
                 <h2 className="text-center">Device List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDevice}> Add Device</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Id</th>
                                   
                                    <th> Manufacturer</th>
                                    <th> Model</th>
                                    <th> Serial Number</th>
                                    <th> Failure Description</th>
                                    <th> Repair Status</th>
                                    <th> Repair description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.devices.map(
                                        device => 
                                        <tr key = {device.id}>
                                            <td> { device.id} </td> 
                                    
                                             <td> {device.manufacturer} </td>   
                                             <td> {device.model}</td>
                                             <td> {device.serialNumber}</td>
                                             <td> {device.failureDescription}</td>
                                             <td> {device.repairStatus}</td>
                                             <td> {device.repairDescription}</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editDevice(device.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDevice(device.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        

                 </div>

            </div>
            </div>
      
        )
    }
}

export default ListDevice