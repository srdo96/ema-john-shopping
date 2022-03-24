import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
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
      <button className="clear-btn">
        <p>
          Clear Cart
          <FontAwesomeIcon className="fa" icon={faTrashCan}></FontAwesomeIcon>
        </p>
      </button>
      <br />
      <button className="review-btn">
        <p>
          Review Order
          <FontAwesomeIcon
            className="fa"
            icon={faArrowRightLong}
          ></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Cart;
