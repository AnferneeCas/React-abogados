import React, { useState, useContext, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

//CONTEXTS
import mainTableContext from "../../context/mainTable/mainTableContext";

const FormNewArrangementExtrajudicial = ({ selectedCharacterizationprop }) => {
  const [arrangement, setArrangement] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedCharacterization, setSelectedCharacterization] = useState({
    label: "",
    value: ""
  });

  const MainTableContext = useContext(mainTableContext);
  const {
    selectedAccount,
    characterizations,
    getCharacterization,
    changeShowAddArrangementAccion
  } = MainTableContext;

  //HANDLE CHANGES IN THE ARRANGEMENT INPUT
  const handleChange = e => {
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
      "sábado"
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
      "diciembre"
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
      "dic"
    ],
    today: "Hoy",
    clear: "Limpiar",
    dateFormat: "dd/mm/yy",
    weekHeader: "Sm"
  };

  useEffect(() => {
    getCharacterization();
    if (selectedCharacterizationprop !== undefined)
      setSelectedCharacterization(selectedCharacterizationprop.value);
  }, [selectedCharacterizationprop]);

  return (
    <Dialog
      header={"anfer"}
      visible={true}
      style={{ width: "30vw", height: "10vw" }}
      modal={true}
      onHide={() => changeShowAddArrangementAccion(false)}
    >
      <form id="form-new-arrangement-extrajudicial">
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
                  onChange={e => {
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
                  onChange={e => {
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
            />
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default FormNewArrangementExtrajudicial;
