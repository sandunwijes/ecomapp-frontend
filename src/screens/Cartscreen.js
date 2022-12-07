import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

function Cartscreen() {
  const cartreducerstate = useSelector((state) => state.cartReducer);
  // console.log('see----->',cartreducerstate);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;
 console.log('dispatch----->',dispatch,
 'dispatchtype',typeof(dispatch));
  const subtotal=cartItems.reduce((sum, item) => sum + (item.price*item.quantity), 0);

// const subtotal=(cartItems)=>{
//   let sum=0;
//   for(let i=0; i<cartItems.length; i++)
//     {sum += (cartItems[i].price*cartItems[i].quantity)}
//    return sum;
// }



  return (
    <div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8 card text-center shadow p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-3">MY CART</h2>
          <table className="table table-bordered table-responsive-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item, e.target.value))}}>
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i className="fa fa-trash" aria-hidden="true" style={{color: 'red'}} onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h2 className="text-center">Subtotal: {subtotal} RS/-</h2>
          <hr />
          <div className="text-center p-3">
          <Checkout amount={subtotal}/>
          </div>
              
        </div>
      </div>
    </div>
  );
}

export default Cartscreen; 
