import React from "react";
import logo from "../../assets/logo.png";
import photoSample1 from "../../assets/product-default.png";
import "../Users.css";

const Cart = () => {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "8rem",
    };
  };
  return (
    <div>
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
              <li className="nav-item mx-4">
                <h6 className="my-0 text-success-s2 d-flex d-row">
                  <a href="/" className="text-success-s2 mr-2">
                    HOME
                  </a>
                  <p className="text-success-s2 my-0">/ CART PAGE</p>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: "6rem" }}>
        <table class="table">
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
            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(photoSample1)}
                />
              </td>
              <td>
                <div>
                  <h6 className="text-secondary font-weight-bold">
                    Executive Grey Tuxedo
                  </h6>
                  <small className="my-0 text-secondary">
                    Color: <b>Light Blue</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Size: <b>XL</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </small>
                </div>
              </td>
              <th style={{ verticalAlign: "middle" }}>
                <p className="my-0 text-secondary">$120</p>
              </th>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button className="btn btn-outline-success">-</button>
                  <p
                    className="btn my-0 text-success-s2"
                    style={{ borderColor: "#009e7f", cursor: "default" }}
                  >
                    0
                  </p>
                  <button className="btn btn-outline-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold text-secondary align-self-center my-0">
                    $120
                  </h6>
                  <button className="btn trash-cart-btn ml-2">
                    <i className="far fa-trash-alt fa-sm"></i>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(photoSample1)}
                />
              </td>
              <td>
                <div>
                  <h6 className="text-secondary font-weight-bold">
                    Executive Grey Tuxedo
                  </h6>
                  <small className="my-0 text-secondary">
                    Color: <b>Light Blue</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Size: <b>XL</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </small>
                </div>
              </td>
              <th style={{ verticalAlign: "middle" }}>
                <p className="my-0 text-secondary">$120</p>
              </th>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button className="btn btn-outline-success">-</button>
                  <p
                    className="btn my-0 text-success-s2"
                    style={{ borderColor: "#009e7f", cursor: "default" }}
                  >
                    0
                  </p>
                  <button className="btn btn-outline-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold text-secondary align-self-center my-0">
                    $120
                  </h6>
                  <button className="btn trash-cart-btn ml-2">
                    <i className="far fa-trash-alt fa-sm"></i>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(photoSample1)}
                />
              </td>
              <td>
                <div>
                  <h6 className="text-secondary font-weight-bold">
                    Executive Grey Tuxedo
                  </h6>
                  <small className="my-0 text-secondary">
                    Color: <b>Light Blue</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Size: <b>XL</b>
                  </small>
                  <br />
                  <small className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </small>
                </div>
              </td>
              <th style={{ verticalAlign: "middle" }}>
                <p className="my-0 text-secondary">$120</p>
              </th>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button className="btn btn-outline-success">-</button>
                  <p
                    className="btn my-0 text-success-s2"
                    style={{ borderColor: "#009e7f", cursor: "default" }}
                  >
                    0
                  </p>
                  <button className="btn btn-outline-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold text-secondary align-self-center my-0">
                    $120
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
          <div class="card shadow-subtotal-fx">
            <div class="card-body p-5">
              <h5 className="font-weight-bold mb-4">Cart Totals</h5>
              <div className="border border-top-0">
                <div className="border-top d-flex d-row py-3 px-3">
                  <h6 className="font-weight-bold my-0">Subtotal</h6>
                  <h6 className="ml-auto my-0">$1640</h6>
                </div>
                <div className="border-top d-flex d-row py-3 px-3">
                  <h6 className="font-weight-bold my-0">Shipping</h6>
                  <h6 className="ml-auto my-0">$5</h6>
                </div>
                <div className="border-top d-flex d-row py-3 px-3">
                  <h6 className="font-weight-bold my-0">Total</h6>
                  <h6 className="ml-auto my-0">$1645</h6>
                </div>
              </div>
              <div className="d-flex">
                <button className="btn btn-outline-success mt-4">
                  PROCEED TO CHECKOUT
                </button>
                <button className="btn btn-outline-danger mt-4 ml-auto">
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
