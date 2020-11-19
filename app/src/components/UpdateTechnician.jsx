import React, { Component } from 'react'
import TechnicianService from '../services/TechninianService';

class UpdateTechnician extends Component {
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
        this.updateTechnician = this.updateTechnician.bind(this);
    }

    componentDidMount(){
        TechnicianService.getTechnicianById(this.state.id).then( (res) =>{
            let technician = res.data;
            this.setState({firstName: technician.firstName,
                lastName: technician.lastName,
                telephoneNumber: technician.telephoneNumber,
                email: technician.email
            });
        });
    }

    updateTechnician = (e) => {
        e.preventDefault();
        let technician= {id:this.state.id,firstName: this.state.firstName, lastName: this.state.lastName, telephoneNumber:this.state.telephoneNumber , email: this.state.email};
        console.log('technician => ' + JSON.stringify(technician));
        console.log('id => ' + JSON.stringify(this.state.id));
        TechnicianService.updateTechnician(technician, this.state.id).then( res => {
            this.props.history.push('/technicians');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeTelNumberHandler= (event) => {
        this.setState({telephoneNumber: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/technicians');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Technician</h3>
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

                                        <button className="btn btn-success" onClick={this.updateTechnician}>Save</button>
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

export default UpdateTechnician