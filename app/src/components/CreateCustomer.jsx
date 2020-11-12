import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class CreateCustomer extends Component {
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
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName, telephoneNumber: this.state.telephoneNumber, email: this.state.email};
        console.log('customer => ' + JSON.stringify(customer));

        CustomerService.createCustomer(customer).then (res =>{
            this.props.history.push('/customers');
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
         this.props.history.push('/customers');
     }
 
    
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
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

                                    <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
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

export default CreateCustomer