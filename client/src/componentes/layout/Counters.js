import React, { useContext, useEffect } from "react";
import statsContext from "../../context/stats/statsContext";
//components
import { Card } from "primereact/card";

//css
import "./Counters.css";
const Counters = () => {
  const StatsContext = useContext(statsContext);
  const { statsCounters, getStats } = StatsContext;
  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className="p-grid">
      <div className="p-col 4">
        <Card
          title="Gestiones"
          className="card-summary"
          subTitle="Gestiones pendientes"
        >
          <div className="count arrangements">
            {statsCounters.counterArrangements}
          </div>
        </Card>
      </div>
      <div className="p-col 4">
        <Card
          title="Promesas"
          className="card-summary"
          subTitle="Promesas de pago"
        >
          <div className="count payment-promises">
            {statsCounters.counterPromises}
          </div>
        </Card>
      </div>
      <div className="p-col 4">
        <Card
          title="Cuentas"
          className="card-summary"
          subTitle="Cuentas sin gestiones"
        >
          <div className="count unmanaged-accounts">
            {statsCounters.counterUnmanagedAccounts}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Counters;
