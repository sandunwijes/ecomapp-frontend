import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Review from "../components/Review";

export default function Productdescscreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong..." />
      ) : (
        <div className="row mt-50 text-left">
          <div className="col-md-6">
            <div className="card p-5 m-3 shadow p-3 mb-5 bg-white rounded">
              <div style={{fontSize: '20px'}}>
                <b>{product.name}</b>
              </div>
              <hr />
              <img
                src={product.image}
                alt=""
                className="img-fluid m-3 bigimg "
              />
              <p>{product.description}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="m-2 shadow p-3 mb-5 bg-white rounded">
              <h1>Price:{product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                className="selection"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />

              {product.countInStock > 0 ? (

                <button className="btn btn-dark " onClick={addtocart}>
                  ADD TO CART
                </button>

              ) : (

                <div>
                  <h1>Out of Stock</h1>
                  <button className="btn btn-dark " disabled onClick={addtocart}>
                    ADD TO CART
                  </button>
                </div>

              )}

              <hr />
            </div>
            <div className="m-2">
              <Review product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
