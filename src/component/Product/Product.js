import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  const { img, ratings, name, seller, price } = product;
  return (
    <div className="product">
      {/* console.log({img}); */}
      <img src={img} alt="" />
      <div className="product-info">
        <p>{name}</p>
        <p>{price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings {ratings} stars</p>
      </div>
    </div>
  );
};

export default Product;
