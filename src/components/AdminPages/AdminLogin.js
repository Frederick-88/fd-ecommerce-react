import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "../Users.css";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const displayPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const showModal = true;

  return (
    <div className="login-admin">
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>
            <img src={logo} alt="..." style={{ width: "40%" }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem 4rem", paddingBottom: "4rem" }}>
          <Modal.Title>
            <div className="text-center">
              <h4 className="text-success-s2 font-weight-bold">
                Welcome Back, Admin.
              </h4>
              <h6 className="text-secondary">
                Login with your email & password
              </h6>

              <div className="mt-4">
                <input
                  type="text"
                  className="form-control mb-2 py-4"
                  placeholder="Admin's email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group mb-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    class="form-control py-4"
                    placeholder="Admin's password"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      onClick={displayPassword}
                      class="btn btn-outline-success"
                      type="button"
                      id="button-addon2"
                    >
                      <i
                        class={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                      />
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
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AdminLogin;
