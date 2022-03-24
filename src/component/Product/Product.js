import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="container">
      <img src={product.img} alt="" />
    </div>
  );
};

export default Product;
