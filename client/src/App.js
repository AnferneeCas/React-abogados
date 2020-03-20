import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";

import Dashboard from "../src/componentes/layout/Dashboard";
import Login from "../src/componentes/login/Login";
import PrivateRoute from "./PrivateRoute";
//Context
// import { AuthState } from "./context/auth/auth";
import DashboardState from "./context/dashboard/dashboardState";
import StatsState from "./context/stats/statsState";
import MainTableState from "./context/mainTable/mainTableState";
import GestionesFeedState from "./context/gestionesFeed/gestionesFeedState";
import firebase from "./firebase";
import { ProgressSpinner } from "primereact/progressspinner";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });

    console.log(firebaseInitialized);
  }, []);

  return firebaseInitialized != false ? (
    <DashboardState>
      <StatsState>
        <MainTableState>
          <GestionesFeedState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Router>
          </GestionesFeedState>
        </MainTableState>
      </StatsState>
    </DashboardState>
  ) : (
    <ProgressSpinner />
  );
}

export default App;
