import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  const { img, ratings, name, seller, price } = product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button className="cart-btn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
