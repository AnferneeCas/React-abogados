import React, { useContext } from "react";
import mainTableContext from "../../../context/mainTable/mainTableContext";
import { Dialog } from "primereact/dialog";
import { TabView, TabPanel } from "primereact/tabview";
import GestionesFeed from "../GestionesFeed";
import FormNewArrangementExtrajudicial from "../FormNewArrangementExtrajudicial";
const Menu = ({ tabNumber }) => {
  console.log(tabNumber);
  var MainTableContext = useContext(mainTableContext);
  var { showMenu, changeMenuIndex, selectedAccount } = MainTableContext;
  return (
    <Dialog
      header={"anfer"}
      visible={true}
      style={{ width: "50vw", height: "40vw" }}
      modal={true}
      onHide={() => showMenu(false)}
    >
      <TabView
        activeIndex={tabNumber}
        onTabChange={e => changeMenuIndex(e.index)}
      >
        <TabPanel header="Gestion Extrajudical">
          <FormNewArrangementExtrajudicial
            selectedCharacterizationprop={{
              value: "etreate"
            }}
            show={true}
          ></FormNewArrangementExtrajudicial>
        </TabPanel>
        <TabPanel header="Gestion Judicial"></TabPanel>
        <TabPanel header="Gestiones">
          <GestionesFeed></GestionesFeed>
        </TabPanel>
        <TabPanel header="Mas informacion"></TabPanel>
      </TabView>
    </Dialog>
  );
};

export default Menu;
