import React, { useContext,useEffect } from 'react';
import {ScrollPanel} from 'primereact/scrollpanel';
import {Card} from 'primereact/card';

//context
import gestionesFeedContext from '../../context/gestionesFeed/gestionesFeedContext';


const GestionesFeed = () => {
    const GestionesFeedContext = useContext(gestionesFeedContext)

const {getGestiones,gestiones}= GestionesFeedContext

useEffect(()=>{
    getGestiones();
},[])

 


    return ( 
        
<ScrollPanel style={{width: '100%', height: '20vw'}}>

        {gestiones.map((gestion)=>(
            <button onClick={()=>{console.log('hola')}} className='unstyled-button'>
            <Card title={gestion.fecha.toISOString().substring(0, 10)} subTitle="Gestion Extrajudicial" className='gestion-extrajudicial' >
               {gestion.texto}
            </Card>
            </button>
        ))}


</ScrollPanel>

     );
}
 
export default GestionesFeed;