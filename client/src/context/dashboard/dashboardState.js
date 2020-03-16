import React, { useReducer } from "react";
import dashboardContext from "./dashboardContext.js";
import dashboardReducer from "./dashboardReducer.js";
const DashboardState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <dashboardContext.Provider value={{}}>
      {props.children}
    </dashboardContext.Provider>
  );
};

export default DashboardState;
