import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../Users.css";
import ProductDetailModal from "./ProductDetailModal";

import { getDataProduct } from "../../actionCreators/UserAction";

const Products = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [dataProduct, setDataProduct] = useState({});

  const unDisplayDetailModal = (boolean) => {
    setShowDetailModal(boolean);
  };
  const showDetail = (data) => {
    setDataProduct(data);
    setShowDetailModal(true);
  };
  const picture = (image) => {
    return {
      backgroundImage: `url(${urlLocalhost}/${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: "1rem",
      height: "14rem",
    };
  };

  useEffect(() => {
    props.getDataProduct();
  }, []);

  return (
    <div>
      <div className="row">
        {props.dataProduct.map((item, index) => {
          console.log(item);

          return (
            <div className="col-md-4 mt-4" key={index}>
              <div
                className="card"
                style={{ cursor: "pointer" }}
                // kalau tanpa ()=> nanti ulang render terus ga bisa jalan
                onClick={() => showDetail(item)}
              >
                <div
                  style={picture(item.image)}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="font-weight-bold my-0">{item.name}</p>
                  <small className="card-text text-secondary">
                    Stock : {item.quantity}
                  </small>
                  <br />
                  <div className="d-flex d-row mt-4">
                    <p className="my-0 text-success-s2 font-weight-bold">
                      ${item.price}
                    </p>
                    <button className="btn btn-outline-success d-flex d-row ml-auto">
                      <i className="fas fa-cart-plus align-self-center mr-2 fa-sm" />
                      <small className="font-weight-bold">Cart</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="btn btn-success mt-3 px-4">See More</button>
      </div>
      <ProductDetailModal
        showDetailModal={showDetailModal}
        unDisplayDetailModal={unDisplayDetailModal}
        dataProduct={dataProduct}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataProduct: state.UserProductReducer.dataProduct,
  };
};

const mapDispatchToProps = { getDataProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
