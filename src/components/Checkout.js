import React from "react";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  return (
    <div className={classes.checkout_content}>
      <div className={classes.checkout_qty}>
        <p> ₹ {props.total}</p>
        <p>
          <small>{props.qty} Item</small>
        </p>
      </div>
      <div className={classes.checkout_btn}>
        <div className={classes.btn} onClick={props.click}>
          CHECKOUT
        </div>
      </div>
    </div>
  );
};

export default Checkout;
