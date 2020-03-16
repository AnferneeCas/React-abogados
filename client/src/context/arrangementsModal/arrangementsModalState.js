import React, { useReducer } from "react";
import arrangementsModalContext from "./arrangementsModalContext";
import arrangementsModalReducer from "./arrangementsModalReducer";
const ArrangementsModal = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(arrangementsModalReducer, initialState);

  return (
    <arrangementsModalContext.Provider value={{}}>
      {props.children}
    </arrangementsModalContext.Provider>
  );
};

export default ArrangementsModal;
