import React, { useContext, Fragment } from "react";
import dashboardContext from "../../context/dashboard/dashboardContext";

//Components
import SideMenu from "./SideMenu";
// import { DataTable, Column } from "primereact/datatable";
import { Card } from "primereact/card";

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
        <div className="p-col-fixed side-bar" style={{ width: "300px" }}>
          <SideMenu />
        </div>
        <div className="p-col container">
          <div className="p-grid">
            <div className="p-col 4">
              <Card
                title="Gestiones"
                className="card-summary"
                subTitle="Gestiones pendientes"
              >
                <div className="count arrangements">12</div>
              </Card>
            </div>
            <div className="p-col 4">
              <Card
                title="Promesas"
                className="card-summary"
                subTitle="Promesas de pago"
              >
                <div className="count payment-promises">12</div>
              </Card>
            </div>
            <div className="p-col 4">
              <Card
                title="Cuentas"
                className="card-summary"
                subTitle="Cuentas sin gestiones"
              >
                <div className="count unmanaged-accounts">12</div>
              </Card>
            </div>
          </div>

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
