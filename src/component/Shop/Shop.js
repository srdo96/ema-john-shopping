import React, { useEffect, useState } from "react";

const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="container">
      <div className="product-container">Hello</div>
      <div className="cart"></div>
    </div>
  );
};

export default Shop;
