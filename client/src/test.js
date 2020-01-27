import React, {useState,setState} from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
function App() {

   const [visibles,cambiarEstado]= useState(true);

  const cities = [
    {vin: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];



  return (
   <div>
    <Sidebar visible={visibles}    className='p-sidebar-lg	' onHide={(e) => cambiarEstado(false)} iconsTemplate={() => (
    <React.Fragment>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-print"/>
        </button>
        <button className="p-sidebar-close p-link">
            <span className="p-sidebar-close-icon pi pi-arrow-right"/>
        </button>
    </React.Fragment>
)}>
    <h1 style={{fontWeight:'normal'}}>Sidebar with custom icons</h1>
    <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
    <Button type="button" onClick={(e) => this.setState({visibleCustomToolbar: false})} label="Cancel" className="p-button-secondary"/>
</Sidebar>
   </div>
  );
}

export default App;
