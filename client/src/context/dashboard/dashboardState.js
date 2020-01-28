import React, { useReducer } from "react";
import dashboardContext from "./dashboardContext.js";
import dashboardReducer from "./dashboardReducer.js";
const DashboardState = props => {
  const initialState = {
    anfer: {}
  };

  const [state] = useReducer(dashboardReducer, initialState);

  return (
    <dashboardContext.Provider
      value={{
        anfer: state.anfer
      }}
    >
      {props.children}
    </dashboardContext.Provider>
  );
};

export default DashboardState;
