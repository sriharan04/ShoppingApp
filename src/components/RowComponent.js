import React from "react";
import classes from "./RowComponent.module.css";
const RowComponent = (props) => {
  function handleClick(id) {
    props.click(id);
  }
  function handelNegClick(id) {
    props.dec(id);
  }
  function handelAddClick(id) {
    props.cart(id);
  }
  let offer = "";
  if (props.product.offerytext !== "") {
    offer = props.product.offerytext + "OFF";
  }
  return (
    <li>
      <div className={classes.img_off}>
        <img
          src={props.product.imageURL}
          width="100"
          height="100"
          alt="product image"
        />
        <p>{offer}</p>
      </div>
      <div className={classes.item_detail}>
        <h4>{props.product.brandname}</h4>
        <div className={classes.item_detail_main}>
          <p>{props.product.productname}</p>
        </div>
        <div className={classes.item_detail_sub}>
          <p>{props.product.quantity}</p>
          <p className={classes.line}>MRP {props.product.MRF}</p>
        </div>
        <p className={classes.offer_price}>Rs {props.product.price}</p>
      </div>
      <div className={classes.add_to_cart}>
        <div
          className={classes.cart}
          onClick={(id) => handelAddClick(props.product.id)}
        >
          ADD CART
        </div>
        <div
          className={classes.plus}
          onClick={(id) => handleClick(props.product.id)}
        >
          +
        </div>
        <p>{props.product.qty}</p>
        <div
          className={classes.minus}
          onClick={(id) => handelNegClick(props.product.id)}
          disabled={true}
        >
          -
        </div>
      </div>
    </li>
  );
};

export default RowComponent;
