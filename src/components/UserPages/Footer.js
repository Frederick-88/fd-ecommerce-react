import React, { useState } from "react";
import logoHead from "../../assets/logo-1.png";
import { toast } from "react-toastify";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const userSendGmailNotification = () => {
    toast.success(
      "Thanks for trusting us! We will send any latest information from S2 Boutique ASAP.",
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 7000,
      }
    );
  };
  const nullValueEmailNotification = () => {
    toast.error("There is no any email to subscribe.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleUserSendEmailInput = (event) => {
    let { value } = event.currentTarget;
    setEmailInput(value);
  };

  const userSendGmail = () => {
    //  email validation
    var checkEmail = emailInput.includes("@");
    if (emailInput === "" || !checkEmail) {
      nullValueEmailNotification();
    } else {
      userSendGmailNotification();
    }
  };
  return (
    <div className="px-5 py-5">
      <div className="row">
        <div className="col-md-2">
          <img src={logoHead} alt="..." className="w-100" />
        </div>
        <div className="col-md-3">
          <p className="footer-title">S2 BOUTIQUE</p>
          <small>
            Look inside trendy,elegant & fantastic fashion in Batam. Tell the
            world who you are with style without having to speak.
          </small>
          <div className="mt-4">
            <small className="pt-4">© 2020 S2-Boutique Batam</small>
          </div>
        </div>

        <div className="col-md-3">
          <p className="footer-title">REACH OUT</p>
          <button className="btn btn-outline-success mr-3">
            <i className="fab fa-whatsapp fa-lg" />
          </button>

          <button className="btn btn-outline-instagram mr-3">
            <i className="fab fa-instagram fa-lg" />
          </button>
          <button className="btn btn-outline-primary mr-3">
            <i className="fab fa-facebook-square fa-lg" />
          </button>

          <button className="btn btn-outline-danger">
            <i className="far fa-envelope fa-lg" />
          </button>
        </div>
        <div className="col-md-4">
          <p className="footer-title">SUBSCRIBE</p>
          <small>
            Don't miss out the Latest Sale, Discounts, and New Arrivals !!
          </small>
          <div className="input-group mt-3 mb-2">
            <input
              type="email"
              className="form-control"
              name="emailUser"
              placeholder="Your Gmail/Email"
              onChange={handleUserSendEmailInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon2"
                onClick={userSendGmail}
              >
                <i className="fas fa-chevron-circle-right"></i>
              </button>
            </div>
          </div>
          <small className="text-secondary">
            We will not share your gmail/whatsapp to anyone else.
          </small>
        </div>
      </div>
    </div>
  );
};
export default Footer;
