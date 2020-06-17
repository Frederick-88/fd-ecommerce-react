import React from "react";
import { Modal } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Login = (props) => {
  const closeLoginModal = () => {
    props.closeLoginModal(false);
  };
  return (
    <div>
      <Modal show={props.showLoginModal} onHide={closeLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={logo} alt="..." style={{ width: "40%" }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem 4rem" }}>
          <Modal.Title>
            <div className="text-center">
              <h4 className="text-success-s2 font-weight-bold">Welcome Back</h4>
              <h6 className="text-secondary">
                Login with your email & password
              </h6>

              <div className="mt-4">
                <input
                  type="text"
                  className="form-control mb-2 py-4"
                  placeholder="Username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group mb-2">
                  <input
                    type="password"
                    class="form-control py-4"
                    placeholder="Password"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fas fa-eye" />
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-success w-100"
                  style={{ padding: "0.7rem 0.2rem" }}
                >
                  Login
                </button>
              </div>

              <p style={{ fontSize: "1rem", margin: "0.7rem 0rem" }}>or</p>

              <div>
                <button
                  className="btn btn-primary w-100 d-flex d-row justify-content-center mb-2"
                  style={{ padding: "0.7rem 0.2rem" }}
                >
                  <i className="fab fa-facebook-square fa-lg align-self-center mr-3" />
                  Login with Facebook
                </button>
                <button
                  className="btn btn-danger w-100 d-flex d-row justify-content-center"
                  style={{ padding: "0.7rem 0.2rem" }}
                >
                  <i className="fab fa-google fa-lg align-self-center mr-3" />
                  Login with Google
                </button>
              </div>

              <p style={{ fontSize: "1rem", margin: "0.7rem 0rem" }}>
                Don't have any account?{" "}
                <button className="btn btn-link p-0 text-success-s2">
                  Sign Up
                </button>
              </p>
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Login;
