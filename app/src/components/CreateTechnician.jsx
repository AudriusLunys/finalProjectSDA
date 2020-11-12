import React, { Component } from 'react'
import TechnicianService from '../services/TechninianService';

class CreateTechnician extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            telephoneNumber: '',
            email: ''

        }
    
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeTelNumberHandler = this.changeTelNumberHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveTechnician = this.saveTechnician.bind(this);
    }

    saveTechnician = (e) => {
        e.preventDefault();
        let technician = {firstName: this.state.firstName, lastName: this.state.lastName, telephoneNumber: this.state.telephoneNumber, email: this.state.email};
        console.log('technician => ' + JSON.stringify(technician));

        TechnicianService.createTechnician(technician).then (res =>{
            this.props.history.push('/technicians');
        });

    }
     

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
     }
 
     changeLastNameHandler =(event) => {
         this.setState({lastName: event.target.value});
     }
     changeTelNumberHandler =(event) => {
         this.setState({telephoneNumber: event.target.value});
     }
     changeEmailHandler=(event) => {
         this.setState({email: event.target.value});
     }
 
     cancel (){
         this.props.history.push('/technicians');
     }
 
    
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Technician</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div classname = "form-group">
                                    <label>Tel number</label>
                                    <input placeholder="Tel Number" name="telephoneNumber" className="form-control"
                                    value={this.state.telephoneNumber} onChange={this.changeTelNumberHandler} />
                                </div>
                                <div classname = "form-group">
                                    <label>Email</label>
                                    <input placeholder="Email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>

                                    <button className="btn btn-success" onClick={this.saveTechnician}>Save</button>
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

export default CreateTechnician