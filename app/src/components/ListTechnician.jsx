import React, { Component } from 'react';
import TechnicianService from '../services/TechninianService';
import AppNav from '../components/AppNav';

class ListTechnician extends Component {
    constructor(props) {
        super(props)

        this.state = {
                technicians: []
        }
        this.addTechnician = this.addTechnician.bind(this);
        this.editTechnician = this.editTechnician.bind(this);
        this.deleteTechnician=this.deleteTechnician.bind(this);
        
    }
    deleteTechnician(id){
        TechnicianService.deleteTechnician(id).then( res => {
            this.setState({technicians: this.state.technicians.filter(technician => technician.id !== id)});
        });
    }
   
   
    editTechnician(id){
        this.props.history.push(`/update-technician/${id}`);
    }

    componentDidMount(){
        TechnicianService.getTechnicians().then((res) => {
            this.setState({ technicians: res.data});
        });
    }

    addTechnician(){
        this.props.history.push('/add-technician');
    }

    render() {
        return (
            <div> 
              <AppNav/>
            
            <div className = "container">
           
                
                 <h2 className="text-center">Technicians List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTechnician}> Add Technician</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Id</th>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Tel Number</th>
                                    <th> Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.technicians.map(
                                        technician => 
                                        <tr key = {technician.id}>
                                            <td> { technician.id} </td> 
                                             <td> { technician.firstName} </td>   
                                             <td> {technician.lastName}</td>
                                             <td> {technician.telephoneNumber}</td>
                                             <td> {technician.email}</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editTechnician(technician.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTechnician(technician.id)} className="btn btn-danger">Delete </button>
                                                 
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

export default ListTechnician