import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

import Dashboard from "../src/componentes/layout/Dashboard";

//Context
import DashboardState from "./context/dashboard/dashboardState";
import StatsState from "./context/stats/statsState";
import MainTableState from "./context/mainTable/mainTableState";
function App() {
  return (
    <DashboardState>
      <StatsState>
        <MainTableState>
          <Router>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </MainTableState>
      </StatsState>
    </DashboardState>
  );
}

export default App;
