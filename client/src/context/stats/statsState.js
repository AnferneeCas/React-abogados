import React, { useReducer } from "react";
import statsContext from "./statsContext";
import statsReducer from "./statsReducer";
import { GET_STATS } from "../../types/index";

var counters = {
  counterArrangements: 3,
  counterPromises: 5,
  counterUnmanagedAccounts: 12
};
const StatsState = props => {
  const initialState = {
    statsCounters: {
      counterArrangements: null,
      counterPromises: null,
      counterUnmanagedAccounts: null
    }
  };

  const [state, dispatch] = useReducer(statsReducer, initialState);

  //GET STATS
  const getStats = async () => {
    dispatch({
      type: GET_STATS,
      payload: counters
    });
  };
  return (
    <statsContext.Provider
      value={{
        statsCounters: state.statsCounters,
        getStats
      }}
    >
      {props.children}
    </statsContext.Provider>
  );
};

export default StatsState;
