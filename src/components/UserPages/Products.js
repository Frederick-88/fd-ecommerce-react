import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../Users.css";
import ProductDetailModal from "./ProductDetailModal";
import Loader from "./Loader";
import Pic404 from "../../assets/404.png";

import { getDataProduct, addItemToCart } from "../../actionCreators/UserAction";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_HEROKU_BACKEND_URL}`;
  const dispatch = useDispatch();

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [dataProduct, setDataProduct] = useState({});
  const [limit, setLimit] = useState(5);

  const unDisplayDetailModal = (boolean) => {
    setShowDetailModal(boolean);
  };

  const inputCart = (data) => {
    dispatch(addItemToCart(data));
  };
  const showDetail = (data) => {
    setDataProduct(data);
    setShowDetailModal(true);
  };
  const picture = (image) => {
    return {
      backgroundImage: `url(${urlLocalhost}/${image})`,
      // backgroundImage:
      //   "url(https://uploads-ssl.webflow.com/5d556af3fe21d65f602dca94/5dec1f7c45001ed823d6ab6e_Vgb1MR8JrGK0.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: "1rem",
      height: "14rem",
    };
  };

  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);

  // limit configuration
  var start = 0;
  var arrayDataProduct = Array.from(props.dataProduct).slice(start, limit);
  var lengthOfDataProduct = props.dataProduct.length;

  // search function
  if (props.submitSearch) {
    var filteredDataProduct = [];
    filteredDataProduct = props.dataProduct.filter((item) => {
      var nameLowercase = item.name.toLowerCase();
      var searchInputLowercase = props.searchInput.toLowerCase();

      if (nameLowercase.includes(searchInputLowercase)) {
        return item;
      } else {
        return false;
      }
    });
    arrayDataProduct = filteredDataProduct;
  }

  const seeMoreFunction = () => {
    setLimit(limit + 3);
  };

  return (
    <div
      style={{
        fontFamily: "Karla,sans-serif",
      }}
    >
      <Loader isProductLoading={props.isProductLoading} />
      <div className="row">
        {arrayDataProduct.length !== 0 ? (
          arrayDataProduct.map((item, index) => {
            return (
              <div className="col-md-4 mt-4" key={index}>
                <div className="card">
                  <div
                    className="product-showdetail"
                    // kalau tanpa ()=> nanti ulang render terus ga bisa jalan
                    onClick={() => showDetail(item)}
                  >
                    <div
                      style={picture(item.image)}
                      className="card-img-top"
                      alt="..."
                    />
                    <h3 className="text-success-s2 font-weight-bold">
                      SEE DETAIL
                    </h3>
                  </div>
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
                      <button
                        onClick={() => inputCart(item)}
                        className="btn btn-outline-success d-flex d-row ml-auto"
                      >
                        <i className="fas fa-cart-plus align-self-center mr-2 fa-sm" />
                        <small className="font-weight-bold">Cart</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            {props.isProductLoading ? (
              <> </>
            ) : (
              <div>
                <div className="d-flex justify-content-center">
                  <img src={Pic404} alt="..." className="w-50" />
                </div>
                <h5
                  className="text-success-s2 text-center"
                  style={{ marginTop: "-25px" }}
                >
                  Sorry, it seems the clothe that you search not found.
                </h5>
              </div>
            )}
          </div>
        )}
      </div>
      {props.dataProduct.length !== 0 &&
      lengthOfDataProduct > limit &&
      arrayDataProduct.length !== 0 ? (
        <div className="text-center">
          <button
            onClick={() => seeMoreFunction()}
            className="btn btn-success mt-3 px-4"
          >
            See More
          </button>
        </div>
      ) : (
        <> </>
      )}
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
    dataProduct: state.UserReducer.dataProduct,
    dataCart: state.UserReducer.dataCart,
    isProductLoading: state.UserReducer.isProductLoading,
  };
};

export default connect(mapStateToProps)(Products);
