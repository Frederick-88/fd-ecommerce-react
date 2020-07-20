import React from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import jwt from "jwt-decode";
import { Modal } from "react-bootstrap";

const CheckoutModal = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date();
  var todayDate =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  const userData = jwt(localStorage.getItem("token-user"));

  const closeCheckoutModal = () => {
    props.unDisplayCheckoutModal(false);
  };

  return (
    <Modal size="lg" show={props.showCheckoutModal} onHide={closeCheckoutModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="..." style={{ width: "25%" }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "2rem 4rem" }}>
        <div style={{ fontFamily: "Karla,sans-serif" }}>
          <div>
            <p
              className=" p-3 text-center text-success-s2"
              style={{ border: "2.5px dashed #009e7f" }}
            >
              Thankyou <b>{userData.username}</b>, your order has been received.
            </p>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <p className="text-center text-secondary my-0">
              Date: <br />
              <span className="font-weight-bold text-dark">{todayDate}</span>
            </p>
            <div
              className="mx-5"
              style={{ borderLeft: "2px solid #e3e3e3", height: "3rem" }}
            />
            <p className="text-center text-secondary my-0">
              Total: <br />
              <span className="font-weight-bold text-dark">
                ${props.subTotalPrice + 5}
              </span>
            </p>
            <div
              className="mx-5"
              style={{ borderLeft: "2px solid #e3e3e3", height: "3rem" }}
            />
            <p className=" text-secondary">
              Payment Method: <br />
              <span className="font-weight-bold text-dark">
                {props.dataInputCheckout.payment}
              </span>
            </p>
          </div>

          <div
            style={{ backgroundColor: "#e3e3e3" }}
            className="text-secondary py-3 mt-3 mb-4"
          >
            <p className="text-center my-0">
              We will also send this to your email (
              <b>{props.dataInputCheckout.emailAddress}</b>)
            </p>
          </div>

          <div>
            <h5 className="font-weight-bold text-success-s2 mb-3">
              ORDER DETAILS
            </h5>
            <table class="table">
              <thead style={{ backgroundColor: "#009e7f", color: "white" }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Firstname:</td>
                  <td>
                    <b>{props.dataInputCheckout.firstName}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Lastname:</td>
                  <td>
                    <b>{props.dataInputCheckout.lastName}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Phone Number:</td>
                  <td>
                    <b>{props.dataInputCheckout.phoneNumber}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Location:</td>
                  <td>
                    <b>
                      {props.dataInputCheckout.address},
                      {props.dataInputCheckout.city},
                      {props.dataInputCheckout.country}
                    </b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td className="checkout-modal-td">Product:</td>
                  <td>
                    {props.dataCart.map((item, index) => {
                      return (
                        <div className="d-flex d-row" key={index}>
                          <div className="col-md-9 px-0">
                            <p className="text-success-s2 mb-0 mt-1">
                              {item.name}
                              <span className="text-secondary font-weight-bold ml-2">
                                × {item.qtyBuy}
                              </span>
                            </p>
                          </div>
                          <div className="col-md-3 text-right pr-0">
                            <p className="text-success-s2 mb-0 mt-2 font-weight-bold">
                              ${item.price * item.qtyBuy}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td> SubTotal:</td>
                  <td>
                    <b className="text-success-s2 font-weight-bold">
                      ${props.subTotalPrice}
                    </b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td> Shipping:</td>
                  <td>
                    <b className="text-success-s2 font-weight-bold">$5 </b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Postal Code:</td>
                  <td>
                    <b>{props.dataInputCheckout.postalCode}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td> Payment:</td>
                  <td>
                    <b>{props.dataInputCheckout.payment}</b>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td
                    className="font-weight-bold"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Total:
                  </td>
                  <td style={{ fontSize: "1.1rem" }}>
                    <b className="text-success-s2">
                      ${props.subTotalPrice + 5}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="mt-4 mb-2"
            style={{ borderTop: "2px solid #009e7f" }}
          />
          <div>
            <h6 className="text-success-s2 my-0">
              Thank you for being our valued customer. We are so grateful for
              the pleasure of serving you and hope you enjoy your experience at
              our website, hope you come back soon!
            </h6>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    dataCart: state.UserReducer.dataCart,
  };
};

export default connect(mapStateToProps, null)(CheckoutModal);
