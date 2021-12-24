import React from "react";
import "./spinner.css";

function Spinner() {
  return (
    <>
      <div className="spinner">
        {/* <svg viewBox="0  0 100  100" >
          <circle cx="50" cy="50" r="20" />
        </svg> */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>
    </>
  );
}

export default Spinner;
