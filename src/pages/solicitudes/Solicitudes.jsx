import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Services from '../../components/services/Services';
import OrdenMedica from '../../components/services/OrdenMedica';
import DetallarOrden from '../../components/services/DetallarOrden';

function Solicitudes() {
    const [eleccion, setEleccion] = useState("none")
    console.log(eleccion)
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className='container'>
                    <div className="newUser">
                        <h1 className="newUserTitle">Nueva Solicitud</h1>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Seleccione tipo de Solicitud
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" onClick={()=>setEleccion("servicio")} >Servicio</a></li>
                                <li><a className="dropdown-item" onClick={()=>setEleccion("orden")} >Registrar Orden Medica</a></li>
                                <li><a className="dropdown-item" onClick={()=>setEleccion("detalleOrden")} >Detallar Orden Medica</a></li>
                            </ul>
                        </div>
                        {eleccion ==="servicio" && <Services />}
                        {eleccion ==="orden" && <OrdenMedica />}
                        {eleccion ==="detalleOrden" && <DetallarOrden />}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Solicitudes;
