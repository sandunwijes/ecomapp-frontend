import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loader from "./Loader";
import Success from "./Success";
import Error from "./Error";


function Checkout({ amount }) {
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderstate;

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, amount));
    console.log(token);
  };


  const validate=()=>{
    if(!localStorage.getItem("currentUser")){
      window.location.href='/login';
    }
  }

  return (
    <div>
      {loading && (<Loader/>)}
      {success && (<Success success="Your Order Placed Successfully..!" />)}
      {error && (<Error error="Something went wrong" />)}
      


      <StripeCheckout
        token={tokenHandler}
        amount={amount * 100}
        shippingAddress
        currency="LKR"
        stripeKey="pk_test_51Ld8JWHnlTChknC9H3fnlw2afLhwWuiv93jx0QuzWvypuLU8yV53Z2JWRQLVhtldINAburNW6oGMtPoJ6AIzGyII00UbAB5mWU"
      >
        <button className="btn" onClick={validate}>PAY NOW</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
