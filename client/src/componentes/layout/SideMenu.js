import React, { Fragment, createRef } from "react";
import "./SideMenu.css";
import firebase from "../../firebase";
import { FileUpload } from "primereact/fileupload";

//primeReact components
import { PanelMenu } from "primereact/panelmenu";

const SideMenu = props => {
  var uploadRef = createRef();
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
                icon: "pi pi-fw pi-download",
                command: onclick => {
                  descargarPlantillaAgregarCliente(0);
                }
              },
              {
                label: "Subir plantilla",
                icon: "pi pi-fw pi-upload",
                command: onclick => {
                  document.getElementsByTagName(`input`)[0].click();
                }
              }
            ]
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
                icon: "pi pi-fw pi-upload",
                command: onclick => {
                  // document.getElementsByTagName(`input`)[0].click();
                }
              }
            ],
            command: onclick => {
              console.log("test");
              // document.getElementById("input").click();
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

  const descargarPlantillaAgregarCliente = async id => {
    var downloadUrl = await firebase.downloadForm(id);

    window.location.href = downloadUrl;
  };

  const agregarClientesCustomUpload = event => {
    console.log("uploading");
    console.log(event.files);

    uploadRef.current.clear();
    // uploadRef.current;

    firebase.uploadFile(event.files[0], firebase.auth.currentUser.uid);
  };
  return (
    <Fragment>
      <FileUpload
        name="demo"
        style={{ display: "none" }}
        id="up"
        customUpload={true}
        uploadHandler={agregarClientesCustomUpload}
        multiple={false}
        auto={true}
        ref={uploadRef}
      ></FileUpload>

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
