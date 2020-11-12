import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Devices from './Devices';
import Home from './Home';
import UpdateCustomer from './components/UpdateCustomer';
import ListCustomer from './components/ListCustomer';
import CreateCustomer from './components/CreateCustomer';
import ListTechnician from './components/ListTechnician';
import CreateTechnician from './components/CreateTechnician';
import UpdateTechnician from './components/UpdateTechnician';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/devices' exact={true} component={Devices}/>
                     <Route path='/customers' exact={true} component={ListCustomer}/>
                     <Route path='/technicians' exact={true} component={ListTechnician}/>
                     <Route path='/add-customer' exact={true} component={CreateCustomer}/>
                     <Route path='/update-customer/:id' exact={true} component={UpdateCustomer}/>
                     <Route path='/add-technician' exact={true} component={CreateTechnician}/>
                     <Route path='/update-technician/:id' exact={true} component={UpdateTechnician}/>
                </Switch>
             </Router>
        );
    }
}
 
export default App;