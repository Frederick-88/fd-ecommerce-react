import React from "react";
import "../Users.css";
import Tuxedo1 from "../../assets/Tuxedo1.jpg";
import Tuxedo2 from "../../assets/Tuxedo2.jpg";

const Products = () => {
  const showDetail = () => {
    console.log("Clicked");
  };
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
    <div>
      <div className="row">
        <div className="col-md-4 mt-4">
          <div
            className="card"
            style={{ cursor: "pointer" }}
            onClick={showDetail}
          >
            <div style={picture(Tuxedo2)} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="font-weight-bold my-0">Exclusive Blue Tuxedo</p>
              <small className="card-text text-secondary">Stock : 11</small>
              <br />
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

        <div className="col-md-4 mt-4">
          <div className="card">
            <div style={picture(Tuxedo1)} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="font-weight-bold my-0">
                Fold Over Collar Plain Blazers
              </p>
              <small className="card-text text-secondary">Stock : 11</small>
              <br />
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

        <div className="col-md-4 mt-4">
          <div className="card">
            <div style={picture(Tuxedo2)} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="font-weight-bold my-0">Exclusive Blue Tuxedo</p>
              <small className="card-text text-secondary">Stock : 11</small>
              <br />
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

        <div className="col-md-4 mt-4">
          <div className="card">
            <div style={picture(Tuxedo1)} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="font-weight-bold my-0">
                Fold Over Collar Plain Blazers
              </p>
              <small className="card-text text-secondary">Stock : 11</small>
              <br />
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
      </div>
      <div className="text-center">
        <button className="btn btn-success mt-3 px-4">See More</button>
      </div>
    </div>
  );
};
export default Products;
