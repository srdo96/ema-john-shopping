import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart-container">
      <h5 className="cart-title">Order Summary</h5>
      <p>Selected Item: $ </p>
      <p>Total Price: $</p>
      <p>Total Shipping Charge: $</p>
      <p>Tax: $</p>
      <p>Grand Total: $</p>
      <button>
        <p>Clear Cart</p>
      </button>{" "}
      <br />
      <button>
        <p>Review Order</p>
      </button>
    </div>
  );
};

export default Cart;
