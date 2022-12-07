import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/userActions";
import Error from "../components/Error";
import LoaderSmall from "../components/LoaderSmall";
import Success from "../components/Success";

function Profilescreen() {
  const loginstate = useSelector((state) => state.loginReducer);
  const currentUser = loginstate.currentUser;

  const updateuserstate=useSelector((state) => state.updateReducer)
  const {loading, error,success} =updateuserstate

  const dispatch = useDispatch();

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();

  const update = () => {
    if (password == cpassword) {
      const updateduser = {
        name: name,
        email: email,
        password: password,
      };

      dispatch(updateUser(currentUser._id, updateduser));
    } else {
      alert("Password is not confirmed");
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div
          className="col-md-5 card p-4 shadow rounded"
          style={{ marginTop: "150px" }}
        >
          <div className="div">
            <h2>Update</h2>
            {loading && <LoaderSmall />}
            {error && <Error error={"Something went wrong"} />}
            {success && <Success success="Details Updated Successfully,Please Re-login" />}

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
                <button type="submit" className="btn mt-3" onClick={update}>
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilescreen;
