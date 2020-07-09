import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mainBg from "../../assets/mainBackground.png";
import logo from "../../assets/logo.png";
import logoHead from "../../assets/logo-1.png";
import Carousel from "./Carousel";
import ProductField from "./Products";
import LoginModal from "./Login";
import "../Users.css";

import { userLogout } from "../../actionCreators/LoginAction";

const Index = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [NavLoginSuccess, setNavLoginSuccess] = useState(false);

  const loginSuccess = (boolean) => {
    setNavLoginSuccess(boolean);
  };

  // CustomId = only can show 1.
  const customId = "custom-id-yes";
  const variant = props.toastifyNotifData.variant;
  const SuccessLoginAlert = () => {
    if (variant === "success") {
      toast.success(`${props.toastifyNotifData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
    } else {
      toast.error(`${props.toastifyNotifData.message}`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });
    }
  };

  // ToastContainer = <AlertDismissable/> in React Bootstrap

  if (props.toastifyNotifData.show) {
    SuccessLoginAlert();
  }

  const noLoginCartNotification = () => {
    toast.error("Please login first to continue.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    // cause warning but needed to stop logout alert shows 2 times.
    props.toastifyNotifData.show = false;
  };

  const closeLoginModal = (boolean) => {
    setShowLoginModal(boolean);
  };

  const Logout = () => {
    props.userLogout();
    setNavLoginSuccess(false);
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
                {props.tokenUser ? (
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <li className="nav-item">
                      <button className="btn btn-success d-flex d-row">
                        <i className="fas fa-shopping-cart align-self-center mr-2" />
                        <p className="my-0">Cart : {props.dataCart.length}</p>
                      </button>
                    </li>
                  </Link>
                ) : (
                  <li className="nav-item">
                    <button
                      onClick={() => noLoginCartNotification()}
                      className="btn btn-secondary d-flex d-row"
                    >
                      <i className="fas fa-shopping-cart align-self-center mr-2" />
                      <p className="my-0">Cart : {props.dataCart.length}</p>
                    </button>
                  </li>
                )}

                <li className="nav-item mx-4">
                  {NavLoginSuccess ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Hello, Chen Frederick
                      </button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item text-success-s2">
                          About Developer <i className="fas fa-info-circle"></i>
                        </button>
                        <button
                          className="dropdown-item text-danger"
                          onClick={Logout}
                        >
                          Logout <i className="fas fa-sign-out-alt"></i>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={openLoginModal}
                      className="btn btn-success"
                    >
                      Sign In <i className="fas fa-sign-in-alt ml-2"></i>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ToastContainer />

        <div className="vertical-center">
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
          <div className="col-md-3 mt-3">
            <div className="list-group">
              <h5 className="ml-3 text-secondary font-weight-bold mb-3">
                Gender
              </h5>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i class="fas fa-male mr-5 fa-lg align-self-center"></i>
                Man
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i class="fas fa-female mr-5 fa-lg align-self-center"></i>
                Women
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-4"
              >
                <div style={{ marginRight: "2rem" }}>
                  <i class="fas fa-male mr-2 fa-lg align-self-center"></i>
                  <i class="fas fa-female fa-lg align-self-center"></i>
                </div>
                Both
              </button>

              <h5 className="ml-3 text-secondary font-weight-bold mb-3">
                Type
              </h5>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i class="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Tops
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i class="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Bottom
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex d-row"
              >
                <i class="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Outer Wear
              </button>
            </div>
          </div>

          <div className="col-md-9">
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
    toastifyNotifData: state.LoginReducer.toastifyNotif,
    dataCart: state.UserReducer.dataCart,
  };
};

const mapDispatchToProps = {
  userLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
