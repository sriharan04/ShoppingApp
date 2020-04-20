import React, { Component } from "react";
import classes from "./ShoppingList.module.css";
import RowComponent from "../components/RowComponent";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
import Modal from "../components/Model";
import Backdrop from "../components/Backdrop";
import ModalData from "../components/ModalData";
class ShoppingList extends Component {
  state = {
    modal: false,
    show: false,
    quantity: 0,
    totalPrice: 0,
    products: [],
  };

  componentDidMount() {
    let product = [];
    fetch("./products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((prod) => {
        prod.map((el) => (el.qty = 0));
        console.log(prod);
        this.setState({ products: prod });
      });
  }
  onClickAdd = (id) => {
    const update = [...this.state.products];
    update.map((el) => {
      if (id === el.id) {
        el.qty += 1;
      }
    });
    this.setState((prevstate) => {
      return {
        ...prevstate,
        products: update,
      };
    });
  };
  onClickReduce = (id) => {
    const update = [...this.state.products];
    update.map((el) => {
      if (id === el.id) {
        if (el.qty !== 0) el.qty -= 1;
      }
    });
    this.setState((prevstate) => {
      return {
        ...prevstate,
        products: update,
      };
    });
  };
  OnDelCart = (id) => {
    this.onClickReduce(id);
    const update = [...this.state.products];
    let price = 0;
    let qty = 0;
    update.map((el) => {
      price = price + el.price * el.qty;
      qty = qty + el.qty;
    });
    console.log(price);
    this.setState({
      quantity: qty,
      totalPrice: price,
    });
  };
  OnAddCart = (id) => {
    this.onClickAdd(id);
    const update = [...this.state.products];
    let price = 0;
    let qty = 0;
    update.map((el) => {
      price = price + el.price * el.qty;
      qty = qty + el.qty;
    });
    console.log(price);
    this.setState({
      quantity: qty,
      totalPrice: price,
    });
  };

  OnCheckout = () => {
    if (this.state.quantity > 0) {
      this.setState({ modal: true, show: true });
    }
  };
  OncloseBackdrop = () => {
    this.setState({ modal: false, show: false });
  };

  render() {
    let list = "";
    if (this.state.products.length !== 0) {
      list = this.state.products.map((el) => {
        return (
          <RowComponent
            key={el.id}
            product={el}
            click={(id) => this.OnAddCart(id)}
            dec={(id) => this.OnDelCart(id)}
            cart={(id) => this.OnAddCart(id)}
          />
        );
      });
    }
    let checkout = "";
    if (this.state.modal) {
      checkout = (
        <div>
          <Modal>
            <ModalData
              total={this.state.totalPrice}
              cancel={this.OncloseBackdrop}
            />
          </Modal>
          <Backdrop show={this.state.show} click={this.OncloseBackdrop} />
        </div>
      );
    }
    return (
      <div className={classes.layout}>
        <Header />
        <section className={classes.shopping_list}>
          <ul className={classes.list_item}>{list}</ul>
        </section>
        <Checkout
          qty={this.state.quantity}
          total={this.state.totalPrice}
          click={() => this.OnCheckout()}
        />
        {checkout}
      </div>
    );
  }
}

export default ShoppingList;
