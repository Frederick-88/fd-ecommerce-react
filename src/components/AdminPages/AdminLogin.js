import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal, Alert } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "../Users.css";

import { loginAdmin } from "../../actionCreators/LoginAction";

const AdminLogin = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataInput, setDataInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDataInput({
      ...dataInput,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    // to cover every time input alert keeps true.
    alert.show = false;
  };

  const history = useHistory();
  // if token is filled, move to admin dashboard.
  if (props.tokenAdmin) {
    history.push({
      pathname: "/admin",
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataInput);

    props.loginAdmin(dataInput);
  };

  const displayPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  // in the first place, modal always true.
  const showModal = true;

  const alert = props.alertData;

  const AlertDismissible = () => {
    const [alertShow, setAlertShow] = useState(alert.show);

    if (alertShow) {
      return (
        <Alert
          variant={alert.variant}
          onClose={() => setAlertShow(false)}
          dismissible
        >
          <Alert.Heading className="h6 my-0">{alert.message}</Alert.Heading>
        </Alert>
      );
    }
    return <></>;
  };

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

              <AlertDismissible />

              <div className="mt-4">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    onChange={handleInputChange}
                    className="form-control mb-2 py-4"
                    placeholder="Admin's email"
                    aria-label="Admin's email"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group mb-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleInputChange}
                      className="form-control py-4"
                      placeholder="Admin's password"
                      aria-label="Admin's password"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={displayPassword}
                        className="btn btn-outline-success"
                        type="button"
                        id="button-addon2"
                      >
                        <i
                          className={
                            showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                          }
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-success w-100"
                    style={{ padding: "0.7rem 0.2rem" }}
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alertData: state.LoginReducer.alert,
    tokenAdmin: state.LoginReducer.tokenAdmin,
  };
};

const mapDispatchToProps = { loginAdmin };

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
