import React, { Component } from 'react';
import AppNav from './AppNav'
import './App.css';
import { Button, Container, Form, FormGroup, Table } from 'reactstrap';
import {Link} from 'react-router-dom';

class Devices extends Component {

     emptyItem = {

     }
      
     constructor (props){
         super(props)

         this.state = { 
            isLoading :true,
            DeviceTypes: [],
            Devices: [],
            item : this.emptyItem
    
    
         }
     }


    
     async componentDidMount () {
        const response = await fetch('/api/devicetypes')
         const body = await response.json();
         this.setState({DeviceTypes:body , isLoading : false});
        
         const responseDevices = await fetch('/api/devices')
         const bodyDevices = await responseDevices.json();
         this.setState({Devices :bodyDevices , isLoading : false});


     }


    render() { 
        const title = <h3>Register device</h3>
        const{DeviceTypes } = this.state;
        const{Devices , isLoading} = this.state;

        if (isLoading)
          return(<div>Loading...</div>)
          
          let optionList =     
            DeviceTypes.map ( deviceType =>
              <option id={deviceType.id}>
                  {deviceType.type}
              </option>
            )
           
            let rows = 
                Devices.map (device =>
                  <tr>
                   <td>{device.deviceType}</td>
                   <td>{device.manufacturer}</td>
                   <td>{device.model}</td>
                   <td>{device.serialNumber}</td>
                   <td>{device.failureDescription}</td>
                   <td>{device.repairStatus}</td>
                   <td>{device.repairDescription}</td>
                   
                   
                
                  </tr>
                    
                    )

        return (
            <div>
                <AppNav/>
                 <Container>
                   {title}
                  <Form>
                  <FormGroup>
                       <label for ="deviceType">Device type</label>
                       <select>
                        {optionList}
                       </select>
                      </FormGroup>

                      <FormGroup>
                       <label for ="manufacturer">Manufacturer</label>
                       <input type="text" name = "manufacturer" onChange={this.handleChange}></input>
                      </FormGroup>
                      
                      <FormGroup>
                       <label for ="model">Model</label>
                       <input type="text" name = "model" onChange={this.handleChange}></input>
                      </FormGroup>

                      <FormGroup>
                       <label for ="serialNumber">Serial Number</label>
                       <input type="text" name = "serialNumber" onChange={this.handleChange}></input>
                      </FormGroup>
                       
                      <FormGroup>
                       <label for ="failureDescription">Failure description</label>
                       <input type="text" name = "failureDescription" onChange={this.handleChange}></input>
                      </FormGroup>

                       <FormGroup>
                           <Button color = "primary" type="submit">Save</Button>{' '}
                           <Button color = "secondary" tag ={Link} to= "/">Cancel</Button>
                       </FormGroup>

                  </Form>

                 </Container>

                 {''}

                 <Container>
                   <h3>Devices List</h3>
                   <Table className="mt-4">
                       <thead>
                           <tr>
                              <th>Device Type</th> 
                              <th>Manufacturer</th> 
                              <th>Model</th> 
                              <th>Serial Mumber</th> 
                              <th>Failure description</th> 
                              <th>Repair status</th> 
                              <th>Repair description</th>
                        
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
 
export default Devices;