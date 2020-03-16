import React, { useReducer } from "react";
import mainTableContext from "./mainTableContext";
import mainTableReducer from "./mainTableReducer";
import {
  GET_ACCOUNTS,
  CHANGED_SELECTED_ACCOUNT,
  CHANGE_SHOW_ADD_ARRANGEMENT_ACTION,
  GET_CHARACTERIZATION,
  CHANGE_CHARACTERIZATION
} from "../../types";
var cuentas = [
  {
    key: "Anfer",
    id: "21321",
    nombre: "Francis Cruz",
    caracterizacion: "Localizado con Trabajo",
    celular: "914213123",
    characterization: { label: "PAGANDO CON ARREGLO", value: "IST" }
  },
  {
    key: "Anfer",
    id: "012312",
    nombre: "Anfernee Castillo",
    caracterizacion: "Ilocalizado SB y ST",
    celular: "914213123",
    characterization: { label: "ACUERDO PARCIAL", value: "LDN" }
  },
  {
    key: "Anfer",
    id: "345907",
    nombre: "Mirna de Castillo",
    caracterizacion: "Promesa",
    celular: "914213123",
    characterization: { label: "LOCALIZADO CON TRABAJO", value: "RM" }
  },
  {
    id: "0123212",
    nombre: "Bessy Lopez",
    caracterizacion: "CFP",
    celular: "914213123",
    characterization: { label: "ILOCALIZADO SB Y ST", value: "NY" }
  }
];

const characterizationstmp = [
  { label: "ILOCALIZADO SB Y ST", value: "NY" },
  { label: "LOCALIZADO CON TRABAJO", value: "RM" },
  { label: "ACUERDO PARCIAL", value: "LDN" },
  { label: "PAGANDO CON ARREGLO", value: "IST" },
  { label: "CLIENTE FUERA DEL PAIS", value: "PRS" }
];
const MainTableState = props => {
  const initialState = {
    accounts: [],
    selectedAccount: "",
    showAddArrangementAccion: false,
    characterizations: []
  };

  const [state, dispatch] = useReducer(mainTableReducer, initialState);

  //get accounts from api
  const getAccounts = () => {
    dispatch({
      type: GET_ACCOUNTS,
      payload: cuentas
    });
  };

  //changed selected account
  const changedSelectedAccount = account => {
    dispatch({
      type: CHANGED_SELECTED_ACCOUNT,
      payload: account
    });
  };

  //Show addArrangement submenu when click on table
  const changeShowAddArrangementAccion = bool => {
    dispatch({
      type: CHANGE_SHOW_ADD_ARRANGEMENT_ACTION,
      payload: bool
    });
  };

  //get characterizacion from server
  const getCharacterization = () => {
    dispatch({
      type: GET_CHARACTERIZATION,
      payload: characterizationstmp
    });
  };

  //Upadate characteruzation of a selected account
  const updateCharacterization = (id, newCharacterization) => {
    var obj = {
      id: id,
      newCharacterization: newCharacterization
    };
    dispatch({
      type: CHANGE_CHARACTERIZATION,
      payload: obj
    });
  };
  return (
    <mainTableContext.Provider
      value={{
        accounts: state.accounts,
        selectedAccount: state.selectedAccount,
        showAddArrangementAccion: state.showAddArrangementAccion,
        characterizations: state.characterizations,
        getAccounts,
        changedSelectedAccount,
        changeShowAddArrangementAccion,
        getCharacterization,
        updateCharacterization
      }}
    >
      {props.children}
    </mainTableContext.Provider>
  );
};
export default MainTableState;
