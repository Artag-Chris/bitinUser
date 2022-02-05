import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Reports from "./pages/reports/Reports";
import NewRegister from "./pages/newRegister/NewRegister";
import Solicitudes from "./pages/solicitudes/Solicitudes";

function App() {
  const isAdmin = false
  {/* const admin= useSelector((state) => state.user.currentUser.isAdmin)*/ }

  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Router>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/user">
                <User />
              </Route>

              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/reports">
                <Reports />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/solicitudes">
                <Solicitudes />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/newregister">
                <NewRegister />
              </Route>
            </Switch>
            </div >
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
