import React from "react";

//components
import { Card } from "primereact/card";

//css
import "./Counters.css";
const Counters = () => {
  return (
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
  );
};

export default Counters;
