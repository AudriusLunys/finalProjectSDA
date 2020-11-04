import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Devices from './Devices';
import Home from './Home';
import Technicians from './Technicians';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/devices' exact={true} component={Devices}/>
                     <Route path='/technicians' exact={true} component={Technicians}/>
                </Switch>
             </Router>
        );
    }
}
 
export default App;