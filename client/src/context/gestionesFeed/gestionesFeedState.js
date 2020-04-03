import React, { useReducer } from "react";
import gestionesFeedContext from "./gestionesFeedContext";
import gestionesFeedReducer from "./gestionesFeedReducer";
import firebase from "../../firebase";
import { ADD_GESTIONES, GET_GESTIONES } from "../../types/index";
var gestiones = [];
const GestionesFeedState = (props) => {
  const initialState = {
    gestiones: [],
  };

  const [state, dispatch] = useReducer(gestionesFeedReducer, initialState);

  //get gestiones from db
  const getGestiones = () => {
    console.log(gestiones);
    dispatch({
      type: GET_GESTIONES,
      payload: gestiones,
    });
  };

  //add gestiones to db

  const addGestiones = async (gestion) => {
    gestion.bufeteId = await firebase.getUserBufete(
      firebase.auth.currentUser.uid
    );
    dispatch({
      type: ADD_GESTIONES,
      payload: gestion,
    });
  };

  return (
    <gestionesFeedContext.Provider
      value={{
        gestiones: state.gestiones,
        addGestiones,
        getGestiones,
      }}
    >
      {props.children}
    </gestionesFeedContext.Provider>
  );
};
export default GestionesFeedState;
