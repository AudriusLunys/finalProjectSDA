import React, { Component } from 'react'
import DeviceService from '../services/DeviceService';
import TechnicianService from '../services/TechninianService';
import CustomerService from '../services/CustomerService';


class CreateDevice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            customers: [],
            technicians: [],

            id: this.props.match.params.id,
           
            manufacturer: '',
            model: '',
            serialNumber: '',
            failureDescription: '',
            repairStatus: '',
            repairDescription: '',
            customer : '',
            technician : '',
            
          
        }
    
        this.changeManufacturerHandler = this.changeManufacturerHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeSerNumberHandler = this.changeSerNumberHandler.bind(this);
        this.changeFailureHandler = this.changeFailureHandler.bind(this);
        this.changeRepairStatusHandler= this.changeRepairStatusHandler.bind(this);
        this.changeRepDescriptionHandler = this.changeRepDescriptionHandler.bind(this);
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
      

        this.saveDevice = this.saveDevice.bind(this);
    }

    saveDevice = (e) => {
        e.preventDefault();
        let device = {manufacturer: this.state.manufacturer, model: this.state.model, serialNumber: this.state.serialNumber, failureDescription: this.state.failureDescription, repairStatus: this.state.repairStatus, repairDescription: this.state.repairDescription  };
        console.log('device => ' + JSON.stringify(device));

        DeviceService.createDevice(device).then (res =>{
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
    
     changeCustomerHandler = (event) => {
         this.setState({customer: event.target.value});
     }
     

     cancel (){
         this.props.history.push('/devices');
     }
     
     componentDidMount(){
        TechnicianService.getTechnicians().then((res) => {
            this.setState({ technicians: res.data});
        });

        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

  
    
    render() {
       
   
       let customerList = this.state.customers.map ((customer) =>
       <option value={customer.id}>{customer.firstName}</option>
       );

       
       let technicianList = this.state.technicians.map ((technician) =>
       <option value={technician.id}>{technician.firstName}</option>
       );

        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Device</h3>
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
                                  <div className = "form-group">
                                  <label>Assign Customer</label>
                                      <select  onChange={this.changeCustomerHandler}>
                                      {customerList}
                                      </select>
                                  </div>

                                  <div className = "form-group">
                                  <label>Assign Technician</label>
                                      <select>
                                          {technicianList}   
                                      </select>
                                  </div>
                               
                            
                                    <button className="btn btn-success" onClick={this.saveDevice}>Save</button>
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

export default CreateDevice