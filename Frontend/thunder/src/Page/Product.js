import React from "react";

const Product = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-left h-100"
      style={{ border: "solid 3px red" }}
    >
      <div className="col-6 d-flex-column justify-content-center">
        <img
          src="https://placebeard.it/640x360"
          style={{ height: "100px", width: "100px" }}
        />
      </div>

      <div className="col-6">test content</div>
    </div>
  );
};

export default Product;
