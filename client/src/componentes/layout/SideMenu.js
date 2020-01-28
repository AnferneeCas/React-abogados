import React, { Fragment } from "react";
import "./SideMenu.css";

//primeReact components
import { PanelMenu } from "primereact/panelmenu";

const SideMenu = () => {
  const state = {
    items: [
      {
        label: "File",
        icon: "pi pi-fw pi-file"
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
        items: [
          {
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus"
              }
            ],
            command: onclick => {
              console.log("test");
            }
          }
        ]
      }
    ]
  };
  return (
    <Fragment>
      <div className="sideMenu">
        <PanelMenu
          className="sideMenuMainButton"
          model={state.items}
          style={{ width: "100%" }}
        />
      </div>
    </Fragment>
  );
};

export default SideMenu;
