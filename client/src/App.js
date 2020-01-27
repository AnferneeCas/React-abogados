import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';

import React from 'react';

import Dashboard from '../src/componentes/layout/Dashboard';


//Context
import DashboardState from './context/dashboard/dashboardState';
function App() {

  return (
  
     <DashboardState>
     <Router>
       <Switch>
              <Route exact path='/dashboard' component={Dashboard}/>
       </Switch>
     </Router>
     </DashboardState>
  
  );
}

export default App;
