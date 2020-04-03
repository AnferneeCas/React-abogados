import React, { createRef, useContext, useEffect } from "react";
import "./MainTable.css";

//contexts
import mainTableContext from "../../context/mainTable/mainTableContext";

//Components

import { TabView, TabPanel } from "primereact/tabview";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ContextMenu } from "primereact/contextmenu";
import FormNewArrangementExtrajudicial from "./FormNewArrangementExtrajudicial";
import Menu from "../tables/menu/Menu";
const MainTable = () => {
  var cm = createRef();
  var MainTableContext = useContext(mainTableContext);
  var {
    accounts,
    getAccounts,
    selectedAccount,
    changedSelectedAccount,
    isMenuActive,
    showMenu,
    menuIndex,
    changeMenuIndex
  } = MainTableContext;

  ////////////////////////////////////////////////////MENU//////////////////////////////////////////////////////////////////////////
  //actionMenu button list
  let mn = [
    {
      label: "Agregar Gestion Extrajudicial",
      icon: "pi pi-fw pi-plus",
      tabNumber: 0,
      command: event => {
        changeMenuIndex(0);
        // viewAccount(selectedAccount);
        showMenu(true);
      }
    },
    {
      label: "Agregar Gestion Judicial",
      icon: "pi pi-fw pi-plus",
      tabNumber: 1,
      command: event => {
        changeMenuIndex(1);
        // viewAccount(selectedAccount);
        showMenu(true);
      }
    },
    {
      label: "Ver gestiones",
      icon: "pi pi-fw pi-plus",
      tabNumber: 2,
      command: event => {
        changeMenuIndex(2);
        // viewAccount(selectedAccount);
        showMenu(true);
      }
    },
    {
      label: "Mas informacion",
      icon: "pi pi-fw pi-plus",
      tabNumber: 3,
      command: event => {
        changeMenuIndex(3);
        // viewAccount(selectedAccount);
        showMenu(true);
      }
    }
  ];

  //Do when a row is right clicked
  const viewAccount = selectedAccount => {
    console.log(selectedAccount);
    showMenu(true);
  };

  /////////////////////////////////////////////MODAL/////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="p-grid">
      <div className="p-col-12">
        <ContextMenu model={mn} ref={el => (cm = el)} />

        {isMenuActive ? (
          <Menu
            tabNumber={menuIndex}
            selectedCharacterizationProp={selectedAccount.characterization}
          ></Menu>
        ) : // <FormNewArrangementExtrajudicial
        //   selectedCharacterizationprop={selectedAccount.characterization}
        //   show={true}
        // ></FormNewArrangementExtrajudicial>
        null}
        <DataTable
          style={{ textAlign: "Center" }}
          value={accounts}
          paginator={true}
          rows={10}
          header={"Cuentas"}
          emptyMessage="No records found"
          contextMenuSelection={selectedAccount}
          onContextMenuSelectionChange={e => changedSelectedAccount(e.value)}
          onContextMenu={e => cm.show(e.originalEvent)}
        >
          <Column field="nombre" header="Nombre" filter={true} />
          <Column field="cuentaId" header="Numero vasa" filter={true} />
          <Column
            field="Caracterizacion Actual"
            header="Caracterizacion Actual"
            filter={true}
          />
          <Column
            field="Estado Cartera"
            header="Estado Cartera"
            filter={true}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default MainTable;
