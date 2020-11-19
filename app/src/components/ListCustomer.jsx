import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';
import AppNav from '../components/AppNav';

class ListCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer=this.deleteCustomer.bind(this);
        
    }
    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then( res => {
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)});
        });
    }
   
   
    editCustomer(id){
        this.props.history.push(`/update-customer/${id}`);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer');
    }

    render() {
        return (
            <div> 
              <AppNav/>
            
            <div className = "container">
          
                
                 <h2 className="text-center">Customers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
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
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.id}>
                                            <td> { customer.id} </td> 
                                             <td> { customer.firstName} </td>   
                                             <td> {customer.lastName}</td>
                                             <td> {customer.telephoneNumber}</td>
                                             <td> {customer.email}</td>

                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editCustomer(customer.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.id)} className="btn btn-danger">Delete </button>
                                                 
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

export default ListCustomer