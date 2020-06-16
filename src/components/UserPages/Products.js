import React from "react";
import "../Users.css";
import Tuxedo1 from "../../assets/Tuxedo1.jpg";

const Products = () => {
  //   const picture = (image) => {
  //     return background;
  //   };
  return (
    <div className="row">
      <div className="col-md-4 bg-danger">
        <div class="card">
          <img src={Tuxedo1} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="font-weight-bold">Fold Over Collar Plain Blazers</p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 bg-success">Struktur 2</div>
      <div className="col-md-4 bg-danger">Struktur 3</div>
    </div>
  );
};
export default Products;
