import React from "react";
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        // className="spinner-border text-success"
        role="status"
        style={{ width: "250px", height: "250px" }}
      >
        <button style={{backgroundColor:"whitesmoke", color:"black", marginBottom:"5px"}}>
          Order placed successfully
        </button>
        <Link to="/">
          <button>Click here to view food items</button>
        </Link>        
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
