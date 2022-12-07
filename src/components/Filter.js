import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

const Filter = () => {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  const action = () => {
    dispatch(filterProducts(searchkey, sort, category));
  };

  return (
    <div className=" card align-middle p-3 shadow p-3 mb-5 bg-white rounded">
      <div className="row justify-content-center d-flex flex-row">
        <div className="col-md-3" style={{marginTop:'-2px'}}>
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="Search Products"
            className="form-control"
          />
        </div>

        <div className="col-md-2 mt-2 ">
          <select
            className="form-control select"
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>

        <div className="col-md-2 mt-2 ">
          <select
            className="form-control select"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashions</option>
            <option value="mobiles">Mobiles</option>
            <option value="game">Games</option>
          </select>
        </div>

        <button className="btn btn-dark col-md-2 mt-2" onClick={action}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
