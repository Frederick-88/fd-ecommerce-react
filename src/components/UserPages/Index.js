import React from "react";
import mainBg from "../../assets/mainBackground.png";
import Carousel from "./Carousel";
import "../Users.css";

const Index = () => {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };
  return (
    <div>
      <div className="main-bg-height" style={picture(mainBg)}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            S2 Boutique
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
              <li className="nav-item">
                <button className="btn btn-success d-flex d-row">
                  <i className="fas fa-shopping-cart fa-lg align-self-center mr-2" />
                  <p className="my-0">Cart : 1</p>
                </button>
              </li>
              <li className="nav-item mx-4">
                <button type="button" className="btn btn-success">
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="vertical-center">
          <h1 className="display-4 font-weight-bold text-center">
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
      <div className="container">
        <Carousel />
      </div>
    </div>
  );
};
export default Index;
