import React from "react";
import mainBg from "../../assets/mainBackground.png";
import Carousel from "./Carousel";
import ProductField from "./Products";
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
      {/* start header - part1 */}
      <div className="main-bg-height" style={picture(mainBg)}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
      {/* start header - part 1 */}

      {/* carousel-brochure */}
      <div className="container my-5">
        <Carousel />
      </div>
      {/* carousel-brochure */}

      {/* part 3 - content */}
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-2 mt-3">
            <div class="list-group">
              <h4 className="ml-3">Gender</h4>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Man
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Women
              </button>
              <h4 className="ml-3 mt-3">Type</h4>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Tops
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Pants
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
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
    </div>
  );
};
export default Index;
