import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AddProduct from "./AddProduct";
import Editproduct from "./Editproduct";
import OrdersList from "./OrdersList";
import ProductList from "./ProductList";
import UsersList from "./UsersList";

function Adminscreen() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <div className="shadow-sm p-3 mb-2 bg-white rounded">

          <div style={{fontSize: '30px',fontFamily:'Helvetica',fontWeight:'bold',marginBottom:'5px'}}> Admin Panel</div>

          <ul className="admin p-2 ">
            <li><Link className="admin-link " to="/admin/userslist">Users list</Link></li>
            <li><Link className="admin-link" to="/admin/productslist">Products list</Link></li>
            <li><Link className="admin-link" to="/admin/addnewproduct">Add New Product</Link></li>
            <li><Link className="admin-link" to="/admin/orderslist">Orders list</Link></li>
          </ul>
          </div>
          <Switch>
            <Route path="/admin/userslist" component={UsersList}/>
            <Route path="/admin/productslist" component={ProductList}/>
            <Route path="/admin/addnewproduct" component={AddProduct}/>
            <Route path="/admin/orderslist" component={OrdersList}/>
            <Route path="/admin/editproduct/:productid" component={Editproduct}/>

          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Adminscreen;
