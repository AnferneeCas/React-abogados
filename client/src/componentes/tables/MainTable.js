import React, { createRef, useContext, useEffect } from "react";
import "./MainTable.css";

//contexts
import mainTableContext from "../../context/mainTable/mainTableContext";

//Components
import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ContextMenu } from "primereact/contextmenu";
import FormNewArrangementExtrajudicial from "./FormNewArrangementExtrajudicial";
const MainTable = () => {
  var cm = createRef();
  var MainTableContext = useContext(mainTableContext);
  var {
    accounts,
    getAccounts,
    selectedAccount,
    changedSelectedAccount,
    showAddArrangementAccion,
    changeShowAddArrangementAccion
  } = MainTableContext;

  ////////////////////////////////////////////////////MENU//////////////////////////////////////////////////////////////////////////
  //actionMenu button list
  let mn = [
    {
      label: "Agregar Gestion Extrajudicial",
      icon: "pi pi-fw pi-plus",
      command: event => {
        viewAccount(selectedAccount);
        changeShowAddArrangementAccion(true);
      }
    },
    {
      label: "Delete",
      icon: "pi pi-fw pi-times"
    },
    {
      label: "Ver mas informacion",
      icon: "pi pi-fw pi-plus"
    }
  ];

  //Do when a row is right clicked
  const viewAccount = selectedAccount => {
    console.log(selectedAccount);
    changeShowAddArrangementAccion(true);
  };

  /////////////////////////////////////////////MODAL/////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="p-grid">
      <div className="p-col-12">
        <ContextMenu model={mn} ref={el => (cm = el)} />

        {showAddArrangementAccion ? (
          <FormNewArrangementExtrajudicial
            selectedCharacterizationprop={selectedAccount.characterization}
            show={true}
          ></FormNewArrangementExtrajudicial>
        ) : null}
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
          <Column field="id" header="Identidad" filter={true} />
          <Column
            field="caracterizacion"
            header="Caracterizacion"
            filter={true}
          />
          <Column field="celular" header="Celular" filter={true} />
        </DataTable>
      </div>
    </div>
  );
};

export default MainTable;
