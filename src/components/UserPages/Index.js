import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import mainBg from "../../assets/mainBackground.png";
import logo from "../../assets/logo.png";
import logoHead from "../../assets/logo-1.png";
import Carousel from "./Carousel";
import ProductField from "./Products";
import LoginModal from "./Login";
import "../Users.css";

const Index = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  // why make so much, because if no this functions, the close button of alert can't be trigerred.
  // If using Reducer, when reload page the alert will be show again.
  const [alertLoginSuccess, setAlertLoginSuccess] = useState(false);

  const loginSuccess = (boolean) => {
    setAlertLoginSuccess(boolean);
  };
  const alertShowLoginSuccess = alertLoginSuccess;
  const AlertDismissible = () => {
    const [alertShow, setAlertShow] = useState(alertShowLoginSuccess);

    if (alertShow) {
      return (
        <Alert
          variant="success"
          onClose={() => setAlertShow(false)}
          dismissible
        >
          <Alert.Heading className="h6 my-0">
            You've Successfully Login!
          </Alert.Heading>
        </Alert>
      );
    }
    return <></>;
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = (boolean) => {
    setShowLoginModal(boolean);
  };

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };
  return (
    <div>
      {/* start header - part1 */}
      <div className="main-bg-height" style={picture(mainBg)}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} className="logo-fx" alt="..." />
            </a>
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
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <li className="nav-item">
                    <button className="btn btn-success d-flex d-row">
                      <i className="fas fa-shopping-cart fa-lg align-self-center mr-2" />
                      <p className="my-0">Cart : 1</p>
                    </button>
                  </li>
                </Link>

                <li className="nav-item mx-4">
                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="btn btn-success"
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="vertical-center">
          <AlertDismissible />
          <h1
            className="display-4 font-weight-bold text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Shop Elegant & Fantastic Fashions!
          </h1>
          <p className="text-center text-secondary">
            Ready to wear dresses tailored for you from online. Hurry up while
            stock lasts.
          </p>
          <div className="input-group mt-5">
            <input
              type="text"
              className="form-control py-4"
              placeholder="Search the fashion name that you want here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-success px-4"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* start header - part 1 */}

      {/* carousel-brochure */}
      <div className="container my-5">
        <Carousel />
      </div>
      {/* carousel-brochure */}

      {/* part 3 - content */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-2 mt-3">
            <div className="list-group">
              <h4 className="ml-3">Gender</h4>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Man
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Women
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Both
              </button>
              <h4 className="ml-3 mt-3">Type</h4>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Tops
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Bottom
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Outer Wear
              </button>
            </div>
          </div>

          <div className="col-md-10">
            <ProductField />
          </div>
        </div>
      </div>
      {/* part 3 - content */}

      {/* Footer */}

      <hr className="horizontal-line" />

      <div className="mx-5 my-5">
        <div className="row">
          <div className="col-md-2">
            <img src={logoHead} alt="..." className="w-100" />
          </div>
          <div className="col-md-3">
            <p className="footer-title">S2 BOUTIQUE</p>
            <small>
              Look inside trendy,elegant & fantastic fashion in Batam. Tell the
              world who you are with style without having to speak.
            </small>
            <div className="mt-4">
              <small className="pt-4">© 2020 S2-Boutique Batam</small>
            </div>
          </div>

          <div className="col-md-3">
            <p className="footer-title">REACH OUT</p>
            <button className="btn btn-outline-success mr-3">
              <i className="fab fa-whatsapp fa-lg" />
            </button>

            <button className="btn btn-outline-instagram mr-3">
              <i className="fab fa-instagram fa-lg" />
            </button>
            <button className="btn btn-outline-primary mr-3">
              <i className="fab fa-facebook-square fa-lg" />
            </button>

            <button className="btn btn-outline-danger">
              <i className="far fa-envelope fa-lg" />
            </button>
          </div>
          <div className="col-md-4">
            <p className="footer-title">SUBSCRIBE</p>
            <small>
              Don't miss out the Latest Sale, Discounts, and New Arrivals !!
            </small>
            <div className="input-group mt-3 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Gmail/Whatsapp"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fas fa-chevron-circle-right"></i>
                </button>
              </div>
            </div>
            <small className="text-secondary">
              We will not share your gmail/whatsapp to anyone else.
            </small>
          </div>
        </div>
      </div>
      {/* Footer */}

      {/* Modals */}
      <LoginModal
        showLoginModal={showLoginModal}
        closeLoginModal={closeLoginModal}
        loginSuccess={loginSuccess}
      />
      {/* Modals */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tokenUser: state.LoginReducer.tokenUser,
  };
};
export default connect(mapStateToProps, null)(Index);
