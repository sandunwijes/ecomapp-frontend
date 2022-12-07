import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";
import Error from "../components/Error";
import Loader from "../components/Loader";

function Orderinfo({ match }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);
  const { order, loading, error } = orderstate;

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);

  return (
    <div>
      {error && <Error error="Something went wrong" />}
      {loading && <Loader />}
      {order && (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card p-3 mt-3">
              <h2>Items In Your Order</h2>
              <hr />
              {order.orderItems.map((item) => {
                return (
                  <div className="order-item">
                    <h1>
                      <b>{item.name}</b>
                    </h1>
                    <h1>
                      <b>Quantity</b> : {item.quantity}
                    </h1>
                    <h1>
                      <b>Price</b> : {item.quantity}*{item.price}=
                      {item.quantity * item.price}
                    </h1>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 card m-3 p-3 text-right">
              <h2>Order Details</h2>
              <hr />
              <h3>
                <b>Order id</b> : {order._id}
              </h3>
              <h3>
                <b>Total Amount</b> : {order.orderAmount}
              </h3>
              <h3>
                <b>Date of Order</b> : {order.createdAt.substring(0, 10)}
              </h3>
              <h3>
                <b>Transaction Id</b> : {order.transactionId}
              </h3>
              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order Placed</h3>
              )}
              <hr />

              <div className="text-right">
                <h2>Shipping Details</h2>
                <hr />
                <h1 className="text-right">
                  Address : <b>{order.shipppingAddress.address} </b>
                </h1>
                <h1 className="text-right">
                  City : <b>{order.shipppingAddress.city} </b>
                </h1>
                <h1 className="text-right">
                  Country : <b>{order.shipppingAddress.country} </b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <h2>Replacement Conditions</h2>
          <p>
            <li>
              A free replacement cannot be created for an item which was
              returned and replaced once earlier.
            </li>
            <li>
              If your item is not eligible for free replacement due to any
              reason,you can always return it for a refund.
            </li>
            <li>
              if the item has missing parts or accessories, you may try to
              contact the manufacturer for asistance. Manufacturer contact
              information can usually be found on the item packaging or in the
              paperwork included with item
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Orderinfo;
