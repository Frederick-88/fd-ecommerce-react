import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import { Modal } from "react-bootstrap";

const ProductDetailModal = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
  // Sample photo to try on display
  const samplePhoto1 =
    "public/productImages/2020-06-23T11:07:29.174Z-!GRADIENT%20COLOR.png";
  const samplePhoto2 =
    "public/productImages/2020-06-23T11:28:36.352Z-flat-thinking-concept_23-2148154726.jpg";
  const samplePhoto3 = "public/productImages/2020-06-23T11:30:30.982Z-tes.jpg";

  console.log(props.dataProduct.image);
  const [Image, setImage] = useState("");

  useEffect(() => {
    setImage(props.dataProduct.image);
  }, []);

  // Function to change Image.
  const changeImage = (imageCandidate) => {
    setImage(imageCandidate);
  };

  const picture = (picture) => {
    console.log(Image);
    return {
      backgroundImage: `url(${urlLocalhost}/${picture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "17rem",
    };
  };

  const miniPicture = (picture) => {
    return {
      backgroundImage: `url(${urlLocalhost}/${picture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "2.5rem",
      width: "2.5rem",
      cursor: "pointer",
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
              <div style={picture(Image)} alt="..." className="w-100 mb-3" />

              <div className="d-flex d-row justify-content-center">
                <div
                  className="mini-picture mr-3"
                  onClick={() => changeImage(props.dataProduct.image)}
                >
                  <div style={miniPicture(props.dataProduct.image)} alt="..." />
                </div>

                <div
                  className="mini-picture mr-3"
                  onClick={() => changeImage(samplePhoto1)}
                >
                  <div style={miniPicture(samplePhoto1)} alt="..." />
                </div>

                <div
                  className="mini-picture mr-3"
                  onClick={() => changeImage(samplePhoto2)}
                >
                  <div style={miniPicture(samplePhoto2)} alt="..." />
                </div>

                <div
                  className="mini-picture"
                  onClick={() => changeImage(samplePhoto3)}
                >
                  <div style={miniPicture(samplePhoto3)} alt="..." />
                </div>
              </div>
            </div>

            <div className="col-md-6 px-5 py-3 border-left">
              <div className="mb-4">
                <h3 className="font-weight-bold">{props.dataProduct.name}</h3>
                <p className="my-0 text-success-s2 font-weight-bold">
                  ${props.dataProduct.price}
                </p>
                <small className="card-text text-secondary">
                  Stock : {props.dataProduct.quantity}
                </small>
              </div>

              <div className="mb-5">
                <p className="text-secondary">
                  {props.dataProduct.description}
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
                  {props.dataProduct.productGender}
                </button>
                <button
                  className="btn ml-3"
                  style={{ borderRadius: "7px", backgroundColor: "#dedede" }}
                >
                  {props.dataProduct.productType}
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
