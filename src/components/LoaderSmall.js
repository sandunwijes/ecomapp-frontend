import React from "react";

function LoaderSmall() {
  return (
    <div className="mt-5">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "40px", height: "40px" }}
      ></div>
    </div>
  );
}

export default LoaderSmall;
