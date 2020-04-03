import React, { useState, useContext, useEffect, useReducer } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import firebase from "../../firebase";
//CONTEXTS
import mainTableContext from "../../context/mainTable/mainTableContext";
import gestionesFeedContext from "../../context/gestionesFeed/gestionesFeedContext";

const FormNewArrangementExtrajudicial = ({ selectedCharacterizationprop }) => {
  const [arrangement, setArrangement] = useState("gestion");
  const [date, setDate] = useState(new Date());
  console.log(selectedCharacterizationprop.value);
  const [selectedCharacterization, setSelectedCharacterization] = useState(
    "LOCTR"
  );

  console.log(selectedCharacterization);
  const MainTableContext = useContext(mainTableContext);
  const {
    selectedAccount,
    characterizations,
    getCharacterization,
    showMenu,
  } = MainTableContext;

  const GestionesFeedContext = useContext(gestionesFeedContext);
  const { addGestiones } = GestionesFeedContext;
  //HANDLE CHANGES IN THE ARRANGEMENT INPUT
  const handleChange = (e) => {
    setArrangement(e.target.value);
  };

  let es = {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
    dateFormat: "dd/mm/yy",
    weekHeader: "Sm",
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    showMenu(false);
  };

  useEffect(() => {
    getCharacterization();
    if (selectedCharacterization === "") {
      setSelectedCharacterization(selectedAccount["Caracterizacion Actual"]);
      console.log(selectedCharacterizationprop);
    }
  }, [selectedCharacterization]);

  console.log(selectedAccount["Caracterizacion Actual"]);
  return (
    <form
      onSubmit={(e) => onSubmitHandler(e)}
      id="form-new-arrangement-extrajudicial"
    >
      <div className="p-grid">
        <div className="p-col-12">
          <span className="p-float-label">
            <InputText
              id="inputGestion"
              value={arrangement}
              onChange={handleChange}
            />

            <label htmlFor="inputGestion">Nueva gestion extrajudicial</label>
          </span>
        </div>
        <div className="p-col-12">
          <div className="p-grid ">
            <div className="p-col-6" style={{ display: " flex" }}>
              <Calendar
                locale={es}
                dateFormat="dd/mm/yy"
                value={date}
                onChange={(e) => {
                  setDate(e.value);
                  console.log(e.value);
                }}
                required={true}
                showIcon={true}
              ></Calendar>
            </div>
            <div className="p-col-6" style={{ display: " flex" }}>
              <Dropdown
                value={selectedCharacterization}
                options={characterizations}
                onChange={(e) => {
                  setSelectedCharacterization(e.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="p-col-12">
          <Button
            label="Ingresar Gestion"
            className="p-button-raised p-button-rounded"
            onClick={() => {
              addGestiones({
                texto: arrangement,
                fecha: date,
                uid: firebase.auth.currentUser.uid,

                caracterizacion: selectedCharacterization,
                tipo: "EXTRAJUDICIAL",
              });
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default FormNewArrangementExtrajudicial;
