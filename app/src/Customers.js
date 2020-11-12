import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import { Button, Container, Form, FormGroup, Table } from 'reactstrap';
import CustomerService from './services/CustomerService';




class Customers extends Component {

    emptyItem = {
        id: this.props.match.params.id,
        firstName: '',
        lastName : '',
        telephoneNumber: '',
        email: '',
        
       }
   
    constructor(props){
        super (props)

        this.state ={
            Customers :[],

            customer : this.emptyItem,
           
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editCustomer = this.editCustomer.bind (this);
    }

   

    editCustomer(event){
        const {id} = this.state;
        CustomerService.updateCustomer(id).then (response =>{
            this.props.history.push(`/updatecustomer/${id}`);

        });
            
    }

  handleSubmit(event){
        const {customer} = this.state;
       CustomerService.createCustomer(customer).then (response =>{
        this.props.history.push("/customers");
       });

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        let customer={...this.state.customer};
        customer[name] = value;
        this.setState({customer});
  
       }

    

    componentDidMount () {
        CustomerService.getCustomers().then((response) => {
              this.setState ({Customers : response.data});
        });
    }

    render( ) {

        const{Customers , isLoading} = this.state;

        if (isLoading)
          return(<div>Loading...</div>)
         
          let rows = 
        Customers.map (customer =>
            <tr>
            <td>{customer.id}</td>           
             <td>{customer.firstName}</td>
             <td>{customer.lastName}</td>
             <td>{customer.telephoneNumber}</td>
             <td>{customer.email}</td>
             <td><Button size="sm" color="primary" onClick={() =>this.editCustomer(customer.id) }>Edit</Button> </td>
             <td><Button size="sm" color="danger" onClick={() => this.remove(customer.id)}>Delete</Button> </td>
             
          
            </tr>

        )

        return ( 
           <div>
              <AppNav/>
               
              <Container>
              <h3>Register Customer </h3>
                  <Form onSubmit={this.handleSubmit}>
              
                  

                      <FormGroup>
                       <label for ="firstName">First Name</label>
                       <input type="text" name = "firstName" id="firstName" onChange={this.handleChange}></input>
                      </FormGroup>
                      
                      <FormGroup>
                       <label for ="lastName">Last Name</label>
                       <input type="text" name = "lastName" id="lastName"onChange={this.handleChange}></input>
                      </FormGroup>

                      <FormGroup>
                       <label for ="telephoneNumber">Tel Number</label>
                       <input type="text" name = "telephoneNumber" id="telephoneNumber" onChange={this.handleChange}></input>
                      </FormGroup>
                       
                      <FormGroup>
                       <label for ="email">Email</label>
                       <input type="text" name = "email" id="email" onChange={this.handleChange}></input>
                      </FormGroup>

                    
                       <FormGroup>
                           <Button color = "primary" type="submit">Save</Button>{' '}
                          
                       </FormGroup>

                  </Form>

                 </Container>

                 {''}


              <Container>
                   <h3>Customer List</h3>
                   <Table className="mt-4">
                       <thead>
                           <tr>
                              <th>Customer Id</th> 
                              <th>First name</th> 
                              <th>Last name</th> 
                              <th>Tel. Number</th> 
                              <th>Email</th> 
                              <th>Action</th>
                              <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                       {rows}

                       </tbody>



                   </Table>


                 </Container>


           </div>

        );
        
    }

}

export default Customers;