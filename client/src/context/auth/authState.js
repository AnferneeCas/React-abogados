import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
const Auth = (props) => {
  const initialState = {
    uid: "",
    bufeteId: "",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider value={{}}>{props.children}</authContext.Provider>
  );
};

export default ArrangementsModal;
