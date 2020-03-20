import React, { useContext, Fragment, useEffect } from "react";
import dashboardContext from "../../context/dashboard/dashboardContext";

//Components
import { Panel } from "primereact/panel";
import SideMenu from "./SideMenu";
import Counters from "./Counters";
import MainTable from "../tables/MainTable";

//contexts

//css
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./Dashboard.css";
import "../tables/FormNewArrangementExtrajudicial.css";
import "../tables/GestionesFeed.css";

const Dashboard = props => {
  const DashboardContext = useContext(dashboardContext);

  return (
    <Fragment>
      <div className="p-grid">
        <div className="p-col-fixed side-bar" style={{ width: "250px" }}>
          <SideMenu />
        </div>
        <div className="p-col container">
          <Counters />

          <Panel header="Tablas" className="panel-tables">
            <MainTable />
          </Panel>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
