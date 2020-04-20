import React from "react";
import classes from "./ModalData.module.css";
import logo from "../assets/tick.png";
const ModalData = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalhead}>
        <img src={logo} alt="tick"></img>
        <h3>Order Placed</h3>
      </div>
      <h2>Total Price: {props.total}</h2>
      <div className={classes.modalfoot}>
        <div className={classes.btn + " " + classes.btn1}>
          <a href="/">Go Home</a>
        </div>
        <div
          className={classes.btn + " " + classes.btn2}
          onClick={props.cancel}
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ModalData;
