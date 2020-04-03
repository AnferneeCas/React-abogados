import React, { useReducer } from "react";
import mainTableContext from "./mainTableContext";
import mainTableReducer from "./mainTableReducer";
import firebase from "../../firebase";
import {
  GET_ACCOUNTS,
  CHANGED_SELECTED_ACCOUNT,
  SHOW_MENU,
  GET_CHARACTERIZATION,
  CHANGE_CHARACTERIZATION,
  CHANGE_INDEX,
} from "../../types";
// var cuentas = [
//   {
//     key: "Anfer",
//     id: "21321",
//     nombre: "Francis Cruz",
//     caracterizacion: "Localizado con Trabajo",
//     celular: "914213123",
//     characterization: { label: "PAGANDO CON ARREGLO", value: "IST" }
//   },
//   {
//     key: "Anfer",
//     id: "012312",
//     nombre: "Anfernee Castillo",
//     caracterizacion: "Ilocalizado SB y ST",
//     celular: "914213123",
//     characterization: { label: "ACUERDO PARCIAL", value: "LDN" }
//   },
//   {
//     key: "Anfer",
//     id: "345907",
//     nombre: "Mirna de Castillo",
//     caracterizacion: "Promesa",
//     celular: "914213123",
//     characterization: { label: "LOCALIZADO CON TRABAJO", value: "RM" }
//   },
//   {
//     id: "0123212",
//     nombre: "Bessy Lopez",
//     caracterizacion: "CFP",
//     celular: "914213123",
//     characterization: { label: "ILOCALIZADO SB Y ST", value: "NY" }
//   }
// ];

const MainTableState = (props) => {
  const initialState = {
    accounts: [],
    selectedAccount: "",
    isMenuActive: false,
    characterizations: [],
    menuIndex: 0,
  };

  const [state, dispatch] = useReducer(mainTableReducer, initialState);

  //change the index of the menu
  const changeMenuIndex = (index) => {
    dispatch({
      type: CHANGE_INDEX,
      payload: index,
    });
  };

  //get accounts from api
  const getAccounts = async () => {
    var test = await firebase.getCuentasGestor();

    var cuentas = [];
    test.forEach(async (doc) => {
      // console.log(doc.data());
      // var test = await firebase.db
      //   .collection("clientes")
      //   .doc(`${doc.data().clienteId}`)
      //   .get();
      var data = doc.data();
      var cuenta = {
        key: data.cuentaId,
        nombre: data.dataCuenta.nombre,
        cuentaId: data.cuentaId,
        "Caracterizacion Actual": data["Caracterizacion Actual"],
        "Estado Cartera": data["Estado Cartera"],
      };
      console.log(data);
      cuentas.push(cuenta);
    });
    dispatch({
      type: GET_ACCOUNTS,
      payload: cuentas,
    });
  };

  //changed selected account
  const changedSelectedAccount = (account) => {
    dispatch({
      type: CHANGED_SELECTED_ACCOUNT,
      payload: account,
    });
  };

  //Show addArrangement submenu when click on table
  const showMenu = (bool) => {
    dispatch({
      type: SHOW_MENU,
      payload: bool,
    });
  };

  //get characterizacion from server
  const getCharacterization = async () => {
    const characterizationsList = await firebase.getCaracterizacionesExtrajudicial();
    console.log("CHARACTERITAZIONESSSSSSSSSSSSSS");
    dispatch({
      type: GET_CHARACTERIZATION,
      payload: characterizationsList,
    });
  };

  //Upadate characteruzation of a selected account
  const updateCharacterization = (id, newCharacterization) => {
    var obj = {
      id: id,
      newCharacterization: newCharacterization,
    };
    dispatch({
      type: CHANGE_CHARACTERIZATION,
      payload: obj,
    });
  };
  return (
    <mainTableContext.Provider
      value={{
        accounts: state.accounts,
        selectedAccount: state.selectedAccount,
        isMenuActive: state.isMenuActive,
        characterizations: state.characterizations,
        menuIndex: state.menuIndex,
        getAccounts,
        changedSelectedAccount,
        showMenu,
        getCharacterization,
        updateCharacterization,
        changeMenuIndex,
      }}
    >
      {props.children}
    </mainTableContext.Provider>
  );
};
export default MainTableState;
