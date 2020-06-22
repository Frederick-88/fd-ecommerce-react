import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getDataProduct,
  deleteDataProduct,
} from "../../actionCreators/AdminAction";

import { Modal, Button } from "react-bootstrap";

const AdminProduct = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;

  const [showEditModal, setShowEditModal] = useState(false);
  const closeEditModal = () => {
    setShowEditModal(false);
  };

  // delete modal form.
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // dataDelete = productDatas that want to be deleted.
  const [dataDelete, setDataDelete] = useState({});

  const displayDeleteModal = (data) => {
    setDataDelete(data);
    DeleteProductModal();
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleDelete = () => {
    props.deleteDataProduct(dataDelete._id);
    setShowDeleteModal(false);
  };
  const DeleteProductModal = () => {
    return (
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>
              Are you sure want to delete this product with the name of{" "}
              <span className="text-success-s2">"{dataDelete.name}"</span> ?
            </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
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
  }, [props.deleteDataProduct]);

  return (
    <div className="text-center">
      <button className="btn btn-success">Add Product here as Admin</button>

      <div className="mx-4 my-4">
        <div className="row">
          {props.dataProduct.map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="card">
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
                    <div className="d-flex d-row justify-content-center">
                      <small className="card-text text-secondary mr-2">
                        <span className="text-success-s2">Gender :</span>
                        {item.productGender}
                      </small>
                      <small className="card-text text-secondary">
                        <span className="text-success-s2">Type :</span>{" "}
                        {item.productType}
                      </small>
                    </div>
                    <p>{item.description}</p>
                    <div className="d-flex d-row mt-4">
                      <p className="my-0 text-success-s2 font-weight-bold">
                        ${item.price}
                      </p>
                      <div className="d-flex d-row ml-auto">
                        <button className="btn btn-warning mr-2">
                          <i className="far fa-edit fa-lg"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => displayDeleteModal(item)}
                        >
                          <i className="far fa-trash-alt fa-lg"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <DeleteProductModal />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataProduct: state.AdminProductReducer.dataProduct,
  };
};

const mapDispatchToProps = { getDataProduct, deleteDataProduct };

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
