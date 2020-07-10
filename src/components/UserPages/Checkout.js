import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";

const Checkout = (props) => {
  console.log(props.dataCart);

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
                  <p className="text-success-s2 my-0">/ CHECKOUT PAGE</p>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ marginTop: "5rem" }}>
        <h1 className="text center">This is your checkout form</h1>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataCart: state.UserReducer.dataCart,
  };
};

export default connect(mapStateToProps, null)(Checkout);
