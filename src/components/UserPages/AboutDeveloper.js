import React from "react";
import logo from "../../assets/logo.png";
import devPic from "../../assets/fred2.png";
import { Modal } from "react-bootstrap";

const AboutDeveloper = (props) => {
  const closeAboutModal = () => {
    props.unDisplayAboutModal(false);
  };
  return (
    <Modal size="md" show={props.showAbout} onHide={closeAboutModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="..." style={{ width: "33%" }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "2rem 4rem" }}>
        <div style={{ fontFamily: "Karla,sans-serif" }}>
          <div className="d-flex justify-content-center">
            <img src={devPic} alt="..." className="w-50 rounded-circle" />
          </div>
          <div>
            <h4 className="mt-3 font-weight-bold text-center">
              Chen Frederick
            </h4>
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-outline-success mr-3">
                <i className="fab fa-whatsapp fa-lg" />
              </button>

              <button
                className="btn btn-outline-github rounded-circle p-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="fab fa-instagram fa-lg" />
              </button>
              <button
                className="btn btn-outline-primary rounded-circle p-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="fab fa-linkedin" />
              </button>

              <button
                className="btn btn-outline-danger rounded-circle p-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="far fa-envelope" />
              </button>
            </div>
          </div>
          Ini adalah about developer
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default AboutDeveloper;
