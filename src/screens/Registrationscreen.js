import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import LoaderSmall from "../components/LoaderSmall";
import Success from "../components/Success";

function Registrationscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();

  const registerstate = useSelector((state) => state.registerNewUserReducer);
  const { loading, error, success } = registerstate;

  const register = (e) => {
    e.preventDefault();
 
    const user = {
      name: name,
      email: email,
      password: password,
    };

    if (password === cpassword) {
      dispatch(registerNewUser(user));
    } else {
      alert("passwords not Matching!");
    }
  };

  return (
    <div>
      <div className="row justify-content-center m-2">
        <div
          className="col-md-5 card p-4 shadow rounded"
          style={{ marginTop: "150px" }}
        >
          <div className="div"> 
            <h2 style={{display: 'inline',margin:'15px'}}>Register</h2>
            <i class="fa fa-user-plus" style={{fontSize:'23px'}} aria-hidden="true"></i>
            {loading && <LoaderSmall />}
            {error && <Error error={"Email is already registered"} />}
            {success && <Success success='Registration Successfull..!' />}

            <form action="reg">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={cpassword}
                required
                onChange={(e) => setCpassword(e.target.value)}
              />
              <div className="reg-btn">
                <button type="submit" className="btn mt-3" onClick={register}>
                  REGISTER
                </button>
              </div>
            </form>
          </div>
          <a style={{ color: "black",textDecoration: "none"}} href="/login" className="mt-3">
            Click Here To Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registrationscreen;
