import React, { Component } from 'react';
import DeviceService from '../services/DeviceService';

class UpdateDevice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
           
            manufacturer: '',
            model: '',
            serialNumber: '',
            failureDescription: '',
            repairStatus: '',
            repairDescription: '',
          
        }
        this.changeManufacturerHandler = this.changeManufacturerHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeSerNumberHandler = this.changeSerNumberHandler.bind(this);
        this.changeFailureHandler = this.changeFailureHandler.bind(this);
        this.changeRepairStatusHandler= this.changeRepairStatusHandler.bind(this);
        this.changeRepDescriptionHandler = this.changeRepDescriptionHandler.bind(this);
    }

    componentDidMount(){
        DeviceService.getDeviceById(this.state.id).then( (res) =>{
            let device = res.data;
            this.setState({manufacturer: device.manufacturer,
                model: device.model,
                serialNumber: device.serialNumber,
                failureDescription: device.failureDescription,
                repairStatus: device.repairStatus,
                repairDescription: device.repairDescription
            });
        });
    }

    updateDevice = (e) => {
        e.preventDefault();
        let device= {id:this.state.id, manufacturer: this.state.manufacturer, model: this.state.model, serialNumber:this.state.serialNumber , failureDescription: this.state.failureDescription, repairStatus:this.state.repairStatus, repairDescription: this.state.repairDescription };
        console.log('device => ' + JSON.stringify(device));
        console.log('id => ' + JSON.stringify(this.state.id));
        DeviceService.updateDevice(device, this.state.id).then( res => {
            this.props.history.push('/devices');
        });
    }
    
    changeManufacturerHandler = (event) => {
        this.setState({manufacturer: event.target.value});
    }
    changeModelHandler = (event) => {
        this.setState({model: event.target.value});
    }
    changeSerNumberHandler = (event) => {
        this.setState({serialNumber: event.target.value});
    }
    
    changeFailureHandler = (event) => {
        this.setState({failureDescription: event.target.value});
    }
    changeRepairStatusHandler = (event) => {
        this.setState({repairStatus: event.target.value});
    }


    changeRepDescriptionHandler=(event) => {
         this.setState({repairDescription: event.target.value});
     }

     cancel(){
        this.props.history.push('/devices');
    }

     render() {

     
       

        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Device</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Manufacturer </label>
                                        <input placeholder="Manufacturer" name="manufacturer" className="form-control" 
                                            value={this.state.manufacturer} onChange={this.changeManufacturerHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Model </label>
                                        <input placeholder="model" name="model" className="form-control" 
                                            value={this.state.model} onChange={this.changeModelHandler}/>
                                    </div>
                                    <div classname = "form-group">
                                    <label>Serial Number</label>
                                    <input placeholder="Serial Number" name="serialNumber" className="form-control"
                                    value={this.state.serialNumber} onChange={this.changeSerNumberHandler} />
                                </div>
                                <div classname = "form-group">
                                    <label>Failure Description</label>
                                    <input placeholder="Failure Description" name="failureDescription" className="form-control"
                                    value={this.state.failureDescription} onChange={this.changeFailureHandler} />
                                </div>
                                <div classname = "form-group">
                                    <label>Repair Status</label>
                                    <input placeholder="Repair Status" name="repairStatus" className="form-control"
                                    value={this.state.repairStatus} onChange={this.changeRepairStatusHandler} />
                                </div>
                                <div classname = "form-group">
                                    <label>Repair Descriptions</label>
                                    <input placeholder="Repair Description" name="repairDescription" className="form-control"
                                    value={this.state.repairDescription} onChange={this.changeRepDescriptionHandler} />
                                </div>


                                    <button className="btn btn-success" onClick={this.updateDevice}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    }

}

export default UpdateDevice