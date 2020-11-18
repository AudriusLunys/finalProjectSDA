import React, { Component } from 'react';
import DeviceService from '../services/DeviceService';
import CustomerService from '../services/CustomerService';

class test extends Component {
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
            technician: {id: '', firstname: '', lastname: '', telephoneNumber: '', email: ''},
          
        }
        
    }
    componentDidMount(){
        DeviceService.getDevices().then((res) => {
            this.setState({ devices: res.data});
        });
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    render() {

        let optionList = this.state.technicians.map (technician => <div key = {technician.id}>
            {technician.firstName}
        </div>
          )
        
        
        return (
           <div>
               <select> {optionList} </select>
           </div> 
        )
            
        
    }
}

export default test