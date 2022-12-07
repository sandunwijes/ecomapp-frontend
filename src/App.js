import "./App.css";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreens from "./screens/Homescreens";
import { BrowserRouter, Route } from "react-router-dom";
import Productdescscreen from "./screens/Productdescscreen";
import React from 'react';
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registrationscreen from "./screens/Registrationscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Orderinfo from "./screens/Orderinfo";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";


function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route path="/" component={Homescreens} exact/>
        <Route path="/product/:id" component={Productdescscreen}/>
        <Route path='/cart' component={Cartscreen}/>
       <Route path='/login' component={Loginscreen}/>
       <Route path='/register' component={Registrationscreen}/>
       <Route path='/orders' component={Ordersscreen}/>
       <Route path="/orderinfo/:orderid" component={Orderinfo}/>
       <Route path="/profile" component={Profilescreen}/>
       <Route path="/admin" component={Adminscreen}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
