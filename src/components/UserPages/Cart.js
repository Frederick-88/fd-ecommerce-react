import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Users.css";

import { deleteItemFromCart } from "../../actionCreators/UserAction";

const Cart = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
  const samplePhoto3 = "public/productImages/2020-06-23T11:30:30.982Z-tes.jpg";

  const picture = (image) => {
    return {
      backgroundImage: `url(${urlLocalhost}/${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "8rem",
    };
  };

  const removeItemNotification = () =>
    toast.error("You've removed an item from cart.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });

  const removeItem = (item) => {
    removeItemNotification();
    props.deleteItemFromCart(item);
  };

  const checkoutNotification = () =>
    toast.success("Checkout feature coming soon! Stay tune.");

  return (
    <div>
      <nav
        id="top"
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="logo-fx" alt="..." />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-4">
                <h6 className="my-0 text-success-s2 d-flex d-row">
                  <Link to="/" className="text-success-s2 mr-2">
                    HOME
                  </Link>
                  <p className="text-success-s2 my-0">/ CART PAGE</p>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: "6rem" }}>
        <table className="table">
          <thead style={{ backgroundColor: "#009e7f", color: "white" }}>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">NAME</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {props.dataCart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div
                      className="w-75 text-center"
                      style={picture(item.image)}
                    />
                  </td>
                  <td>
                    <div>
                      <h6 className="text-secondary font-weight-bold">
                        {item.name}
                      </h6>
                      <small className="my-0 text-secondary">
                        Color: <b>Light Gray</b>
                      </small>
                      <br />
                      <small className="my-0 text-secondary">
                        Size: <b>XL</b>
                      </small>
                      <br />
                      <small className="my-0 text-secondary">
                        Type: <b>{item.productType}</b>
                      </small>
                    </div>
                  </td>
                  <th style={{ verticalAlign: "middle" }}>
                    <p className="my-0 text-secondary">${item.price}</p>
                  </th>
                  <td>
                    <div className="btn-group" role="group" aria-label="...">
                      <button className="btn btn-outline-success">-</button>
                      <p
                        className="btn my-0 text-success-s2"
                        style={{ borderColor: "#009e7f", cursor: "default" }}
                      >
                        <b>1</b>
                      </p>
                      <button className="btn btn-outline-success">+</button>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex d-row">
                      <h6 className="font-weight-bold text-secondary align-self-center my-0">
                        ${item.price}
                      </h6>
                      <button
                        className="btn trash-cart-btn ml-2"
                        onClick={() => removeItem(item)}
                      >
                        <i className="far fa-trash-alt fa-sm"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(samplePhoto3)}
                />
              </td>
              <td>
                <div>
                  <h6 className="text-secondary font-weight-bold">
                    Perkins Self Striped A Line Dress (SAMPLE)
                  </h6>
                  <small className="my-0 text-secondary">
                    Color: <b>Gold</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Size: <b>L</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </small>
                </div>
              </td>
              <th style={{ verticalAlign: "middle" }}>
                <p className="my-0 text-secondary">$88</p>
              </th>
              <td>
                <div className="btn-group" role="group" aria-label="...">
                  <button className="btn btn-outline-success">-</button>
                  <p
                    className="btn my-0 text-success-s2"
                    style={{ borderColor: "#009e7f", cursor: "default" }}
                  >
                    <b>1</b>
                  </p>
                  <button className="btn btn-outline-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold text-secondary align-self-center my-0">
                    $88
                  </h6>
                  <button className="btn trash-cart-btn ml-2">
                    <i className="far fa-trash-alt fa-sm"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ margin: "4rem 16rem" }}>
          <div className="card shadow-subtotal-fx">
            <div className="card-body p-5">
              <h5 className="font-weight-bold mb-4">Cart Totals</h5>
              <div className="border border-top-0">
                <div className="border-top d-flex d-row py-3 px-3">
                  <h6 className="font-weight-bold my-0">Subtotal</h6>
                  <h6 className="ml-auto my-0">$360</h6>
                </div>
                <div className="border-top d-flex d-row py-3 px-3">
                  <h6 className="font-weight-bold my-0">Shipping</h6>
                  <h6 className="ml-auto my-0">$5</h6>
                </div>
                <div className="border-top d-flex d-row py-3 px-3">
                  <h6 className="font-weight-bold my-0">Total</h6>
                  <h6 className="ml-auto my-0">$365</h6>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <button
                    onClick={checkoutNotification}
                    className="btn btn-outline-success mt-4"
                  >
                    PROCEED TO CHECKOUT <i className="fas fa-print"></i>
                  </button>
                  <ToastContainer />
                </div>
                <Link to="/" className="btn btn-outline-primary mt-4 ml-auto">
                  CONTINUE SHOPPING <i className="fas fa-shopping-cart"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataCart: state.UserReducer.dataCart,
  };
};

const mapDispatchToProps = { deleteItemFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
