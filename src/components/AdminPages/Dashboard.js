import React from "react";
import "../Users.css";
import Tuxedo1 from "../../assets/Tuxedo1.jpg";
import Tuxedo2 from "../../assets/Tuxedo2.jpg";

const Dashboard = () => {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: "1rem",
      height: "14rem",
    };
  };
  return (
    <div className="text-center">
      <h1 className="text-success-s2">This is admin dashboard page</h1>
      <button className="btn btn-success">Add Product here</button>

      <div className="mx-4 my-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div
                style={picture(Tuxedo1)}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="font-weight-bold my-0">
                  Fold Over Collar Plain Blazers
                </p>
                <small className="card-text text-secondary">Stock : 11</small>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex d-row mt-4">
                  <p className="my-0 text-success-s2 font-weight-bold">$81</p>
                  <button className="btn btn-outline-success d-flex d-row ml-auto">
                    <i className="fas fa-cart-plus align-self-center mr-2 fa-sm" />
                    <small className="font-weight-bold">Cart</small>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div
                style={picture(Tuxedo2)}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="font-weight-bold my-0">
                  Fold Over Collar Plain Blazers
                </p>
                <small className="card-text text-secondary">Stock : 11</small>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex d-row mt-4">
                  <p className="my-0 text-success-s2 font-weight-bold">$81</p>
                  <button className="btn btn-outline-success d-flex d-row ml-auto">
                    <i className="fas fa-cart-plus align-self-center mr-2 fa-sm" />
                    <small className="font-weight-bold">Cart</small>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div
                style={picture(Tuxedo1)}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="font-weight-bold my-0">
                  Fold Over Collar Plain Blazers
                </p>
                <small className="card-text text-secondary">Stock : 11</small>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex d-row mt-4">
                  <p className="my-0 text-success-s2 font-weight-bold">$81</p>
                  <button className="btn btn-outline-success d-flex d-row ml-auto">
                    <i className="fas fa-cart-plus align-self-center mr-2 fa-sm" />
                    <small className="font-weight-bold">Cart</small>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div
                style={picture(Tuxedo2)}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="font-weight-bold my-0">
                  Fold Over Collar Plain Blazers
                </p>
                <small className="card-text text-secondary">Stock : 11</small>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex d-row mt-4">
                  <p className="my-0 text-success-s2 font-weight-bold">$81</p>
                  <div className="d-flex d-row ml-auto">
                    <button className="btn btn-warning mr-2">
                      <i class="far fa-edit fa-lg"></i>
                    </button>
                    <button className="btn btn-danger">
                      <i class="far fa-trash-alt fa-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
