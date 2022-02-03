import Chart from "../../components/chart/Chart";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home container-fluid m-0 p-0">
      <Topbar />
      <div className="container">

        <Sidebar />
        <div className="home container-fluid m-0 p-n5">
          {/*<FeaturedInfo />*/}
          <h2 className="text">Solicitudes Activas</h2>
            <WidgetLg />
          <h2 className="text">Historico reciente</h2>
            <WidgetLg />
          <div className="homeWidgets">
            
          </div>
          
        </div>
      </div>
    </div>
      );
}