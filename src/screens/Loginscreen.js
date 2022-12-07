import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import LoaderSmall from "../components/LoaderSmall";

const Loginscreen = () => {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center m-2">
        <div
          className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded"
          style={{ marginTop: "100px" }}
        >
          <div className="div">
            <h2 className="text-center m-2" style={{display: 'inline'}}> LOGIN</h2>
            <i className="fa fa-sign-in" style={{fontSize:'25px'}} aria-hidden="true"></i>

            {error && <Error error="Invalied Credentials" />}
            {loading && <LoaderSmall />}

            <form onSubmit={login}>
              <input
                type="text"
                placeholder="Enter email"
                className="form-control"
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <div className="text-right">
                <button type="submit" className="btn btn-dark mt-3">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
          <a style={{ color: "black",textDecoration:"none" }} href="/register" className="mt-3">
            Click Here To Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
