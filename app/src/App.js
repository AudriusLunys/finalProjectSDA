import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Devices from './Devices';
import Home from './Home';
import Technicians from './Technicians';
import EditTechnician from './EditTechnician';
import Customers from './Customers'


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/devices' exact={true} component={Devices}/>
                     <Route path='/customers' exact={true} component={Customers}/>
                     <Route path='/technicians' exact={true} component={Technicians}/>
                     <Route path='/edittechnician' exact={true} component={EditTechnician}/>
                </Switch>
             </Router>
        );
    }
}
 
export default App;