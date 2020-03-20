import React, { Fragment } from "react";
import "./SideMenu.css";
import firebase from "../../firebase";
//primeReact components
import { PanelMenu } from "primereact/panelmenu";

const SideMenu = props => {
  const state = {
    items: [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-users",
        command: () => {
          window.location = "/dashboard";
        }
      },
      {
        label: "Agregar Data",
        icon: "pi pi-fw pi-user-plus",
        items: [
          {
            label: "Agregar nuevos clientes",
            icon: "",
            items: [
              {
                label: "Descargar plantilla",
                icon: "pi pi-fw pi-download"
              },
              {
                label: "Subir plantilla",
                icon: "pi pi-fw pi-upload"
              }
            ],
            command: onclick => {
              console.log("test");
            }
          },
          {
            label: "Actualizar saldos",
            icon: "",
            items: [
              {
                label: "Descargar plantilla",
                icon: "pi pi-fw pi-download"
              },
              {
                label: "Subir plantilla",
                icon: "pi pi-fw pi-upload"
              }
            ],
            command: onclick => {
              console.log("test");
            }
          }
        ]
      },
      {
        label: "Banco de cartas",
        icon: "pi pi-fw pi-envelope"
      },
      {
        label: "Cerrar Session",
        icon: "pi pi-fw pi-envelope",
        command: () => {
          firebase.logout().then(() => {
            window.location = "/";
          });
        }
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
