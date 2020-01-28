import React, { useContext, Fragment } from "react";
import dashboardContext from "../../context/dashboard/dashboardContext";

//Components
import { Panel } from "primereact/panel";
import SideMenu from "./SideMenu";
// import { DataTable, Column } from "primereact/datatable";
import Counters from "./Counters";
import MainTable from "../tables/MainTable";

//css
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./Dashboard.css";
const Dashboard = () => {
  const DashboardContext = useContext(dashboardContext);
  const { anfer } = DashboardContext;
  console.log(anfer);

  return (
    <Fragment>
      <div className="p-grid">
        <div className="p-col-fixed side-bar" style={{ width: "250px" }}>
          <SideMenu />
        </div>
        <div className="p-col container">
          <Counters />

          <Panel header="Tablas" className="panel-tables">
            {" "}
            sdfsadfasd
            <MainTable />
            <MainTable />
          </Panel>

          {/* <DataTable
            value={[
              { vin: "anfer", year: "2312", brand: "fsadsdf", color: "fasdfas" }
            ]}
            onValueChange={sortedData => console.log(sortedData)}
          >
            <Column field="vin" header="Vin" sortable={true} />
            <Column field="year" header="Year" sortable={true} />
            <Column field="brand" header="Brand" sortable={true} />
            <Column field="color" header="Color" sortable={true} />
          </DataTable> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
