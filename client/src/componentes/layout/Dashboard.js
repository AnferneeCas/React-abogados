import React, {useContext} from 'react';
import dashboardContext from '../../context/dashboard/dashboardContext';


const Dashboard = () => {
    const DashboardContext = useContext(dashboardContext);
    const {anfer} = DashboardContext;
    console.log(anfer);
    return (  
        <div>From dashboard</div>
    );
}
 
export default Dashboard;

