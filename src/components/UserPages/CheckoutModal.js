import React, { useState } from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import { Modal } from "react-bootstrap";

const CheckoutModal = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;

  console.log(props.dataCart);
  console.log(props.dataInputCheckout);

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

      <Modal.Body className="px-0">
        <div className="container">Masuk</div>
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
