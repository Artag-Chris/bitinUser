import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";


export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);



  return (
    <div className="home ">
      <div className="home ">
        <h2 className="text">Membresia Actual</h2>
        <h3 className="text">Tu Plan  se describe aqui </h3>
        <h2 className="text mt-5 pt-5">Membresias Y Otros Servicios</h2>
        <h3 className="text">Descripcion de los servicios</h3>
      </div>
    </div>
  );
}
