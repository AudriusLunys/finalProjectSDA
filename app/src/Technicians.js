import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import { Container, Form, FormGroup, Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom';

class Technicians extends Component {
     
    emptyItem = {
    
        firstName : '',
        lastnName : '',
        telephoneNumber: '',
        email: ''
    }

    constructor(props){
        super(props)

        this.state = {
            isLoading : true,
            Technicians : [],
    
            item : this.emptyItem

        }
    }


      async remove(id){
          await fetch (`/api/technician/${id}`, {
             method: 'DELETE' ,
             headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
             }
          }).then(()=> {
              let updatedTechnicians = [...this.state.Technicians].filter (i => i.id !== id);
              this.setState({Technicians : updatedTechnicians});
          });
          
      }

      async componentDidMount() {
        
       const response = await fetch('/api/technicians');
       const body = await response.json();
       this.setState({Technicians : body , isLoading : false});
    
      }
    


    render() { 
        const title= <h3>Add technician information</h3>;
        const {Technicians , isLoading} = this.state;
          
        if (isLoading)
            return(<div>Loading....</div>)


         let rows= 
              Technicians.map( technician =>
                <tr>
                    <td>{technician.id}</td>
                    <td>{technician.firstName} </td>
                    <td>{technician.lastName}</td>
                    <td>{technician.telephoneNumber}</td>
                    <td>{technician.email}</td>
                    <td><Button size="sm" color="danger" onClick={() => this.remove(technician.id)}>Delete</Button> </td>

                </tr>

                )  

        return (
            <div>
                <AppNav/>
                <Container>
                 {title}
                 <Form onSubmit={this.handleSubmit}>
                   <FormGroup>
                       <label for ="firstName">First Name</label>
                       <input type="text" name="firstName" id="firstName" onChange={this.handleChange}/>
                   </FormGroup>

                   <FormGroup>
                       <label for ="lastName">Last Name</label>
                       <input type="text" name="lastName" id="lastName" onChange={this.handleChange}/>
                   </FormGroup>

                   <FormGroup>
                       <label for ="telephoneNumber">Telephone Number</label>
                       <input type="text" name="telephoneNumber" id="telephoneNumber" onChange={this.handleChange}/>
                   </FormGroup>

                   <FormGroup>
                       <label for ="temail">Email Address</label>
                       <input type="text" name="email" id="email" onChange={this.handleChange}/>
                   </FormGroup>

                   <FormGroup>
                           <Button color = "primary" type="submit">Save</Button>{' '}
                           <Button color = "secondary" tag ={Link} to= "/">Cancel</Button>
                       </FormGroup>

                 </Form>
               

                </Container>
                {''}

                <Container>
                <h3>Technicians working for this company </h3>
                 <Table className="mt-4">
                     <thead>
                         <tr>
                             <th width ="10%">Technician Id</th>
                             <th>Name</th>
                             <th>Last name</th>
                             <th>Tel Number</th>
                             <th>Email</th>
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
 
export default Technicians;