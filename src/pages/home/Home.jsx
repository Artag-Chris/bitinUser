
import "./home.css";
import { userData } from "../../dummyData";

import WidgetLg from "../../components/widgetLg/WidgetLg";


export default function Home() {
  return (
   
        <div className="home  ">
          
          <h2 className="text">Solicitudes Activas</h2>
            <WidgetLg />
          <h2 className="text">Historico reciente</h2>
            <WidgetLg />
          <div className="homeWidgets">
            
          </div>
          
        </div>
   
      );
}