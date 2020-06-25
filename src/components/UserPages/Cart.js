import React from "react";
import logo from "../../assets/logo.png";
import photoSample1 from "../../assets/product-default.png";

const Cart = () => {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "8rem",
    };
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo-fx" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-4">
                <h4 className="my-0">CART PAGE</h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">NAME</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(photoSample1)}
                />
              </td>
              <td>
                <div className="align-self-center">
                  <h6
                    style={{ fontSize: "1.1rem" }}
                    className="text-secondary font-weight-bold"
                  >
                    Executive Grey Tuxedo
                  </h6>
                  <p className="my-0 text-secondary">
                    Color: <b>Light Blue</b>
                  </p>
                  <p className="my-0 text-secondary">
                    Size: <b>XL</b>
                  </p>
                  <p className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </p>
                </div>
              </td>
              <th>$120</th>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button className="btn btn-success">-</button>
                  <button className="btn btn-success">0</button>
                  <button className="btn btn-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold align-self-center">$120</h6>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt fa-sm"></i>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(photoSample1)}
                />
              </td>
              <td>
                <div className="align-self-center">
                  <h6
                    style={{ fontSize: "1.1rem" }}
                    className="text-secondary font-weight-bold"
                  >
                    Executive Grey Tuxedo
                  </h6>
                  <p className="my-0 text-secondary">
                    Color: <b>Light Blue</b>
                  </p>
                  <p className="my-0 text-secondary">
                    Size: <b>XL</b>
                  </p>
                  <p className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </p>
                </div>
              </td>
              <th>$120</th>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button className="btn btn-success">-</button>
                  <button className="btn btn-success">0</button>
                  <button className="btn btn-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold align-self-center">$120</h6>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt fa-sm"></i>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div
                  className="w-75 text-center"
                  style={picture(photoSample1)}
                />
              </td>
              <td>
                <div className="align-self-center">
                  <h6
                    style={{ fontSize: "1.1rem" }}
                    className="text-secondary font-weight-bold"
                  >
                    Executive Grey Tuxedo
                  </h6>
                  <p className="my-0 text-secondary">
                    Color: <b>Light Blue</b>
                  </p>
                  <p className="my-0 text-secondary">
                    Size: <b>XL</b>
                  </p>
                  <p className="my-0 text-secondary">
                    Material: <b>Cotton</b>
                  </p>
                </div>
              </td>
              <th>$120</th>
              <td>
                <div class="btn-group" role="group" aria-label="...">
                  <button className="btn btn-success">-</button>
                  <button className="btn btn-success">0</button>
                  <button className="btn btn-success">+</button>
                </div>
              </td>
              <td>
                <div className="d-flex d-row">
                  <h6 className="font-weight-bold align-self-center">$120</h6>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt fa-sm"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
