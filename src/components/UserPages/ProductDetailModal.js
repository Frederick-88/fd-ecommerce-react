import React, { useState } from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import productDefault from "../../assets/bg-admin.jpg";
import Tuxedo2 from "../../assets/Brochure.png";
import { Modal } from "react-bootstrap";

const ProductDetailModal = (props) => {
  const [Image, setImage] = useState(productDefault);

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "17rem",
    };
  };

  const miniPicture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "2.5rem",
      width: "2.5rem",
    };
  };
  const closeDetailModal = () => {
    props.unDisplayDetailModal(false);
  };

  return (
    <Modal size="lg" show={props.showDetailModal} onHide={closeDetailModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="..." style={{ width: "25%" }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-5 py-3 align-self-center">
              <div style={picture(Tuxedo2)} alt="..." className="w-100" />

              <div className="d-flex d-row flex-wrap justify-content-center">
                <div className="mini-picture mr-3">
                  <div style={miniPicture(Tuxedo2)} alt="..." />
                </div>

                <div className="mini-picture mr-3">
                  <div style={miniPicture(productDefault)} alt="..." />
                </div>

                <div className="mini-picture mr-3">
                  <div style={miniPicture(Tuxedo2)} alt="..." />
                </div>

                <div className="mini-picture">
                  <div style={miniPicture(productDefault)} alt="..." />
                </div>
              </div>
            </div>

            <div className="col-md-6 px-5 py-3 border-left">
              <div className="mb-4">
                <h3 className="font-weight-bold">Roadster Women Solid Top</h3>
                <p className="my-0 text-success-s2 font-weight-bold">$81</p>
                <small className="card-text text-secondary">Stock : 11</small>
              </div>

              <div className="mb-5">
                <p className="text-secondary">
                  Fendi began life in 1925 as a fur and leather speciality store
                  in Rome. Despite growing into one of the world’s most renowned
                  luxury labels, the business has retained its family feel, with
                  a focus on fine detail, Italian craftsmanship and the support
                  of local artisans.
                </p>
              </div>

              <button className="btn btn-outline-success d-flex d-row mt-5 mb-4">
                <i className="fas fa-cart-plus align-self-center mr-2 fa-sm" />
                <small className="font-weight-bold">Cart</small>
              </button>

              <div className="d-flex d-row">
                <button
                  className="btn"
                  style={{ borderRadius: "7px", backgroundColor: "#dedede" }}
                >
                  Man
                </button>
                <button
                  className="btn ml-3"
                  style={{ borderRadius: "7px", backgroundColor: "#dedede" }}
                >
                  Outer Wear
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, null)(ProductDetailModal);
