import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import "./widgetLg.css";
import { ordenData } from "../../dummyDataServicio";
import { Link } from "react-router-dom";

export default function WidgetLg() {
  const data = ordenData;
  console.log(data);
  //funcion que mira una fecha y si es menor a la fecha actual, la devuelve en forma de color rojo, si no, la devuelve en forma de color verde
  const getColor = (date) => {
    const today = new Date();
    const dateToCompare = new Date(date);
    if (dateToCompare < today) {
      return "red";
    } 
    if (dateToCompare >= (today.setDate(today.getDate() - 30))) {
      return "yellow";
    }
    if (dateToCompare >= today) {
      return "green";
    }
    else {
      return "green";
    }
  }
  const date = new Date("2200-12-17T03:24:00");
  
  
  const columns = [
    { field: "id", headerName: "id", width: 90,

  },
  { 
    field: "FECHA_ESPERADA_ORDEN",
    headerName: "Fecha Esperada",
    width: 200,  renderCell: (params) => {
      return (
        <div className="userListUser" >
          
          {params.row.FECHA_ESPERADA_ORDEN}
        </div>
      );
    },
  },
  { field: "NUMERO_ORDEN", headerName: "Numero Orden", width: 200,
  },
    {
      field: "CIE_10",
      headerName: "CIE 10",
      width: 120,
     
    },
    {
      field: "DIAGNOSTICO",
      headerName: "Diagnostico",
      width: 120,
    },
    {
      field: "PROFESIONAL",
      headerName: "Profesional",
      width: 120,
    },
    {
      field: "FECHA_ORDEN",
      headerName: "Fecha Orden",
      width: 120,
    },
    {
      field: "FECHA_VENCIMIENTO_ORDEN",
      headerName: "Fecha Vencimiento",
      width: 120,
    },
    {
      field: "TIPO_ORDEN",
      headerName: "Tipo Orden",
      width: 120,
    },
  
  ];


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="container p-0  h-50 ">
    
    <div className="container d-flex col">
      <div className="container d-flex ">
        <DataGrid
          className="container-fluid d-flex flex-column  p-0 m-0 "
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
          
        />
      </div>
    </div>
    </div>
  );
}