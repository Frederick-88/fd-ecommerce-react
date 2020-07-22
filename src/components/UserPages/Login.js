import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Alert, Form } from "react-bootstrap";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import FacebookLogin from "./FacebookButton";

import {
  loginUser,
  registerUser,
  userLoginFacebook,
} from "../../actionCreators/LoginAction";

const Login = (props) => {
  const [loginDisplay, setLoginDisplay] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const displayPassword = () => {
    setShowPassword(showPassword ? false : true);
    props.registerSuccessToastifyNotif.show = false;
  };

  // DYNAMIC ALERT (OCCURS WHEN PROBLEM)
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

  // DYNAMIC TOASTIFY
  // CustomId = only can show 1.
  const customId = "custom-id-yes";
  const registerSuccessToastifyNotif = () => {
    toast.success(`${props.registerSuccessToastifyNotif.message}`, {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
      autoClose: 2500,
      // if not it will show 2 times.
      closeButton: false,
    });
  };

  const comingSoonNotification = () => {
    toast.success("This Feature will coming soon, Stay tune!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  if (props.registerSuccessToastifyNotif.show) {
    registerSuccessToastifyNotif();
  }

  // LOGIN SECTION
  const [dataInputLogin, setDataInputLogin] = useState({
    email: "",
    password: "",
  });
  const handleInputLoginChange = (event) => {
    setDataInputLogin({
      ...dataInputLogin,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    // to cover every time input alert keeps true.
    alert.show = false;
    props.registerSuccessToastifyNotif.show = false;
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    props.loginUser(dataInputLogin);
  };
  const setLoginDisplayTrue = () => {
    setLoginDisplay(true);
    props.registerSuccessToastifyNotif.show = false;
  };
  const closeLoginModal = () => {
    props.closeLoginModal(false);
  };

  // If login success, close modal & trigger alert in home page.
  if (props.tokenUser) {
    closeLoginModal();
    props.loginSuccess(true);
  }

  // REGISTER SECTION
  const [dataInputRegister, setDataInputRegister] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const handleInputRegisterChange = (event) => {
    setDataInputRegister({
      ...dataInputRegister,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    // to cover every time input alert keeps true.
    alert.show = false;
    props.formControlError.username = "";
    props.formControlError.email = "";
    props.formControlError.phoneNumber = "";
    props.formControlError.password = "";
    props.registerSuccessToastifyNotif.show = false;
  };
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    props.registerUser(dataInputRegister);
  };
  const setRegisterDisplay = () => {
    setLoginDisplay(false);
    props.registerSuccessToastifyNotif.show = false;
  };

  // for facebook
  const getDataUserFacebook = (data) => {
    props.userLoginFacebook(data);
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
          {loginDisplay ? (
            <Modal.Title>
              <div className="text-center">
                <form onSubmit={handleLoginSubmit}>
                  <h4 className="text-success-s2 font-weight-bold">
                    Welcome Back
                  </h4>
                  <h6 className="text-secondary">
                    Login with your email & password
                  </h6>
                  <AlertDismissible />
                  <div className="mt-4">
                    <input
                      type="text"
                      name="email"
                      onChange={handleInputLoginChange}
                      className="form-control mb-2 py-4"
                      placeholder="Email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group mb-2">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleInputLoginChange}
                        className="form-control py-4"
                        placeholder="Password"
                        aria-label="Recipient's username"
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
                      type="submit"
                      className="btn btn-success w-100"
                      style={{ padding: "0.7rem 0.2rem" }}
                    >
                      Login
                    </button>
                  </div>

                  <p style={{ fontSize: "1rem", margin: "0.7rem 0rem" }}>or</p>

                  <div>
                    {/* <button
                      onClick={comingSoonNotification}
                      className="btn btn-primary w-100 d-flex d-row justify-content-center mb-2"
                      style={{ padding: "0.7rem 0.2rem" }}
                    >
                      <i className="fab fa-facebook-square fa-lg align-self-center mr-3" />
                      Login with Facebook
                    </button> */}
                    <FacebookLogin getDataUserFacebook={getDataUserFacebook} />
                    <button
                      type="button"
                      onClick={comingSoonNotification}
                      className="btn btn-danger w-100 d-flex d-row justify-content-center"
                      style={{ padding: "0.7rem 0.2rem" }}
                    >
                      <i className="fab fa-google fa-lg align-self-center mr-3" />
                      Login with Google
                    </button>
                  </div>

                  <p style={{ fontSize: "1rem", margin: "0.7rem 0rem" }}>
                    Don't have any account?
                    <button
                      onClick={setRegisterDisplay}
                      className="btn btn-link p-0 text-success-s2 ml-1"
                    >
                      Sign Up
                    </button>
                  </p>
                </form>
              </div>
            </Modal.Title>
          ) : (
            <Modal.Title>
              <div className="text-center">
                <Form onSubmit={handleRegisterSubmit}>
                  <h4 className="text-success-s2 font-weight-bold">Sign Up</h4>
                  <AlertDismissible />
                  <div className="mt-4">
                    <Form.Control
                      type="text"
                      name="username"
                      onChange={handleInputRegisterChange}
                      className="form-control mb-2 py-4"
                      placeholder="Username"
                      isInvalid={!!props.formControlError.username}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="text-left"
                      style={{ fontSize: "0.8rem", marginBottom: "0.35rem" }}
                    >
                      {props.formControlError.username}
                    </Form.Control.Feedback>

                    <Form.Control
                      type="text"
                      name="email"
                      onChange={handleInputRegisterChange}
                      className="form-control mb-2 py-4"
                      placeholder="Your email"
                      isInvalid={!!props.formControlError.email}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="text-left"
                      style={{ fontSize: "0.8rem", marginBottom: "0.35rem" }}
                    >
                      {props.formControlError.email}
                    </Form.Control.Feedback>

                    <Form.Control
                      type="number"
                      name="phoneNumber"
                      onChange={handleInputRegisterChange}
                      className="form-control mb-2 py-4"
                      placeholder="Phone Number"
                      isInvalid={!!props.formControlError.phoneNumber}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="text-left"
                      style={{ fontSize: "0.8rem", marginBottom: "0.35rem" }}
                    >
                      {props.formControlError.phoneNumber}
                    </Form.Control.Feedback>
                    <div className="input-group mb-2">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleInputRegisterChange}
                        className="form-control py-4"
                        placeholder="New Password"
                        isInvalid={!!props.formControlError.password}
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
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-left"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {props.formControlError.password}
                      </Form.Control.Feedback>
                    </div>

                    <p
                      className="text-secondary"
                      style={{ fontSize: "0.75rem", margin: "0.7rem 0rem" }}
                    >
                      By signing up, you agree to S2 Boutique's
                      <button
                        className="btn btn-link p-0 ml-1"
                        style={{ fontSize: "0.75rem" }}
                      >
                        Terms and Conditions
                      </button>
                    </p>

                    <button
                      type="submit"
                      className="btn btn-success w-100"
                      style={{ padding: "0.7rem 0.2rem" }}
                    >
                      Register
                    </button>
                  </div>

                  <p style={{ fontSize: "1rem", margin: "0.7rem 0rem" }}>
                    Already have account?
                    <button
                      onClick={setLoginDisplayTrue}
                      className="btn btn-link p-0 text-success-s2 ml-1"
                    >
                      Login
                    </button>
                  </p>
                </Form>
              </div>
            </Modal.Title>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerSuccessToastifyNotif:
      state.LoginReducer.registerSuccessToastifyNotif,
    formControlError: state.LoginReducer.formControlError,
    alertData: state.LoginReducer.alert,
    tokenUser: state.LoginReducer.tokenUser,
  };
};

const mapDispatchToProps = { loginUser, registerUser, userLoginFacebook };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
