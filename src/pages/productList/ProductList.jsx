import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  {/*useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
*/}

  {/*const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];*/}

  return (
    <div className="container">
     {/* <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
     />*/}
     <div className="home container-fluid m-0 p-0">
      <Topbar />
      <div className="container">

        <Sidebar />
        <div className="home container-fluid m-0 p-n5">
          {/*<FeaturedInfo />*/}
          <h2 className="text">Membresia Actual</h2>
           <h3 className="text">Tu Plan  se describe aqui </h3>
            
          
          <h2 className="text mt-5 pt-5">Membresias Y Otros Servicios</h2>
           <h3 className="text">Descripcion de los servicios</h3> 
          
        
        </div>
      </div>
    </div>
    </div>
  );
}
