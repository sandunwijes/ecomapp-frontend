import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrdersByUserId } from "../actions/orderActions";
import Error from "../components/Error";
import Loader from "../components/Loader";

function Ordersscreen() {
  const ordersstate = useSelector((state) => state.getOrdersByUserIdReducer);
  const { orders, loading, error } = ordersstate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  return (
    <div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8  text-center">
          <h2 className="text-center m-3">MY ORDERS</h2>

          {loading && <Loader />}

          <table className="table table-bordered table-responsive-sm">
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Trsnsaction ID</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders &&
                orders.map((order) => {
                  return (
                    <tr className="tr-order" onClick={() =>{window.location=`/orderinfo/${order._id}`}}>
                      <td>{order._id}</td>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.transactionId}</td>
                      <td>
                        {order.isDelivered ? (
                          <li>Delivered</li>
                        ) : (
                          <li>Oreder Placed</li>
                        )}
                      </td>
                    </tr>
                  );
                })}

              {error && <Error eror="Something went wrong" />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ordersscreen;
