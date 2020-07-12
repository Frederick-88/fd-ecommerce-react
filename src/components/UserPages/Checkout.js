import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import "../Checkout.css";

const Checkout = (props) => {
  console.log(props.dataCart);
  const [dataInputCheckout, setDataInputCheckout] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    country: "",
    city: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
  });

  const handleInputCheckoutChange = (event) => {
    setDataInputCheckout({
      ...dataInputCheckout,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  console.log(dataInputCheckout);

  return (
    <div
      style={{
        fontFamily: "Karla,sans-serif",
        backgroundColor: "#f8f9fa",
      }}
    >
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

      <div style={{ paddingTop: "5rem" }} className="mx-5">
        <form>
          <div className="row">
            <div className="col-md-7 pr-3">
              <div className="checkout-div-1">
                <h4 className="font-weight-bold text-success-s2 mb-4">
                  BILLING DETAILS
                </h4>

                <div class="form-row">
                  <div class="form-group col-md-6 pr-3">
                    <p className="checkout-txt">
                      First Name <span className="text-danger">*</span>
                    </p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      onChange={handleInputCheckoutChange}
                      required
                    />
                  </div>
                  <div class="form-group col-md-6 pl-3">
                    <p className="checkout-txt">
                      Last Name <span className="text-danger">*</span>
                    </p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      onChange={handleInputCheckoutChange}
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <p className="checkout-txt">
                    Email Address <span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                    onChange={handleInputCheckoutChange}
                    required
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6 pr-3">
                    <p className="checkout-txt">
                      Country <span className="text-danger">*</span>
                    </p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Country"
                      onChange={handleInputCheckoutChange}
                      required
                    />
                  </div>
                  <div class="form-group col-md-6 pl-3">
                    <p className="checkout-txt">
                      Town/City <span className="text-danger">*</span>
                    </p>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Town/City"
                      onChange={handleInputCheckoutChange}
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <p className="checkout-txt">
                    Address <span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    onChange={handleInputCheckoutChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <p className="checkout-txt">
                    Phone Number <span className="text-danger">*</span>
                  </p>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone Number"
                    onChange={handleInputCheckoutChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <p className="checkout-txt">
                    Postal Code <span className="text-danger">*</span>
                  </p>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Postal Code"
                    onChange={handleInputCheckoutChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 pl-5">
              <div className="checkout-div-2 ">
                <h4 className="font-weight-bold text-center text-success-s2 mb-4">
                  YOUR ORDER
                </h4>
                <div className="mx-1">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="text-success-s2 my-0 font-weight-bold">
                        Product
                      </h5>
                    </div>
                    <div className="col-md-5 pl-0">
                      <h5 className="text-success-s2 my-0 text-right font-weight-bold">
                        Subtotal
                      </h5>
                    </div>
                  </div>
                </div>

                <hr
                  className="w-100 my-2"
                  style={{ borderTop: "2px solid #009e7f" }}
                />

                <div className="mx-1 mb-4">
                  <div className="d-flex d-row">
                    <div className="col-md-9 px-0">
                      <p className="text-success-s2 mb-0 mt-2">
                        Fold Over Collar Plain Blazers{" "}
                        <span className="text-secondary font-weight-bold ml-2">
                          × 1
                        </span>
                      </p>
                    </div>
                    <div className="col-md-3 text-right pr-0">
                      <p className="text-success-s2 mb-0 mt-2 font-weight-bold">
                        $15
                      </p>
                    </div>
                  </div>

                  <div className="d-flex d-row">
                    <div className="col-md-9 px-0">
                      <p className="text-success-s2 mb-0 mt-2">
                        Perkins Self Striped Line Dress
                        <span className="text-secondary font-weight-bold ml-2">
                          × 2
                        </span>
                      </p>
                    </div>
                    <div className="col-md-3 text-right pr-0">
                      <p className="text-success-s2 mb-0 mt-2 font-weight-bold">
                        $32
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  className="w-100 my-2"
                  style={{ borderTop: "2px solid #009e7f" }}
                />

                <div className="mx-1">
                  <div className="row">
                    <div className="col-md-7">
                      <p className="text-success-s2 my-0 font-weight-bold">
                        Subtotal
                      </p>
                      <p className="text-success-s2 mb-0 mt-2 font-weight-bold">
                        Shipping
                      </p>
                    </div>
                    <div className="col-md-5 pl-0 text-right">
                      <p className="text-success-s2 my-0 font-weight-bold">
                        $47
                      </p>
                      <p className="text-success-s2 mb-0 mt-2 font-weight-bold">
                        $5
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  className="w-100 my-2"
                  style={{ borderTop: "2px solid #009e7f" }}
                />

                <div className="mx-1 mt-3">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="text-success-s2 my-0 font-weight-bold">
                        TOTAL
                      </h5>
                    </div>
                    <div className="col-md-5 pl-0 text-right">
                      <h5 className="text-success-s2 my-0 font-weight-bold">
                        $52
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label
                      class="form-check-label font-weight-bold"
                      htmlFor="exampleRadios1"
                    >
                      Direct Bank Transfer
                    </label>
                    <div>
                      <p style={{ fontSize: "0.9rem" }}>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>

                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label
                      class="form-check-label font-weight-bold"
                      htmlFor="exampleRadios1"
                    >
                      Cash On Delivery
                    </label>
                    <div>
                      <p style={{ fontSize: "0.9rem" }}>
                        Pay with cash upon delivery.
                      </p>
                    </div>
                  </div>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      style={{ fontSize: "0.75rem" }}
                      class="form-check-label "
                      htmlFor="exampleCheck1"
                    >
                      I have read and agree to the website{" "}
                      <b className="text-success-s2">terms and conditions</b>{" "}
                      <span className="text-danger h6 my-0">*</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-success w-100 py-3 mt-4"
                  style={{ borderRadius: "0" }}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </form>
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
