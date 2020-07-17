import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwt from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mainBg from "../../assets/mainBackground.png";
import logo from "../../assets/logo.png";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ProductField from "./Products";
import LoginModal from "./Login";
import AboutPage from "./AboutDeveloper";
import "../Users.css";

import { userLogout } from "../../actionCreators/LoginAction";

const Index = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [NavLoginSuccess, setNavLoginSuccess] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const loginSuccess = (boolean) => {
    setNavLoginSuccess(boolean);
  };

  if (localStorage.getItem("token-user")) {
    var userData = jwt(localStorage.getItem("token-user"));
  }

  const noLoginCartNotification = () => {
    toast.error("Please login first to continue.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const comingSoonNotification = () => {
    toast.success("This Feature will coming soon, Stay tune!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const searchNotification = () => {
    toast.success("Discover the clothe that you search below.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSearchInput = (event) => {
    let { value } = event.currentTarget;
    setSearchInput(value);
  };

  const handleSearchSubmit = () => {
    setSubmitSearch(true);
    searchNotification();
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    // cause warning but needed to stop logout alert shows 2 times.
  };

  const closeLoginModal = (boolean) => {
    setShowLoginModal(boolean);
  };

  const Logout = () => {
    props.userLogout();
    setNavLoginSuccess(false);
  };

  const displayAboutModal = () => {
    setShowAbout(true);
  };

  const unDisplayAboutModal = (boolean) => {
    setShowAbout(boolean);
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
                        Hello, {userData.username}
                      </button>
                      <div className="dropdown-menu">
                        <button
                          onClick={displayAboutModal}
                          className="dropdown-item text-success-s2"
                        >
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
              name="searchinput"
              onChange={handleSearchInput}
              onKeyPress={(event) =>
                event.key === "Enter" ? handleSearchSubmit() : null
              }
            />
            <div className="input-group-append">
              <button
                className="btn btn-success px-4"
                type="button"
                id="button-addon2"
                onClick={handleSearchSubmit}
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
          {/* Sidebar */}
          <div className="col-md-3 mt-3">
            <div className="list-group">
              <h5 className="ml-3 text-secondary font-weight-bold mb-3">
                Gender
              </h5>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-male mr-5 fa-lg align-self-center"></i>
                Man
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-female mr-5 fa-lg align-self-center"></i>
                Women
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-4"
              >
                <div style={{ marginRight: "2rem" }}>
                  <i className="fas fa-male mr-2 fa-lg align-self-center"></i>
                  <i className="fas fa-female fa-lg align-self-center"></i>
                </div>
                Both
              </button>

              <h5 className="ml-3 text-secondary font-weight-bold mb-3">
                Type
              </h5>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Tops
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Bottom
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row"
              >
                <i className="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Outer Wear
              </button>
            </div>
          </div>
          {/* Sidebar */}

          <div className="col-md-9">
            <ProductField
              searchInput={searchInput}
              submitSearch={submitSearch}
            />
          </div>
        </div>
      </div>
      {/* part 3 - content */}

      {/* Footer */}
      <hr className="horizontal-line" />
      <Footer />
      {/* Footer */}

      {/* Modals */}
      <LoginModal
        showLoginModal={showLoginModal}
        closeLoginModal={closeLoginModal}
        loginSuccess={loginSuccess}
      />
      <AboutPage
        showAbout={showAbout}
        unDisplayAboutModal={unDisplayAboutModal}
      />
      {/* Modals */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tokenUser: state.LoginReducer.tokenUser,
    dataCart: state.UserReducer.dataCart,
  };
};

const mapDispatchToProps = {
  userLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
