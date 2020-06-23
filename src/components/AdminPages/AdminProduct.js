import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getDataProduct,
  deleteDataProduct,
} from "../../actionCreators/AdminAction";

import { Modal, Button } from "react-bootstrap";

const AdminProduct = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_LOCALHOST_BACKEND_URL}`;
  const [selectedFileName, setSelectedFileName] = useState("");

  const [dataEditInput, setDataEditInput] = useState({
    image: null,
    name: "",
    price: "",
    description: "",
    quantity: "",
    productGender: "",
    productType: "",
  });
  console.log(dataEditInput);

  const handleEditInputChange = (event) => {
    setDataEditInput({
      ...dataEditInput,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const selectFile = (event) => {
    setDataEditInput({
      ...dataEditInput,
      [event.currentTarget.name]: event.target.files[0],
    });
    setSelectedFileName(event.target.files[0].name);
  };

  // Edit Modal Form.
  const [showEditModal, setShowEditModal] = useState(false);
  // dataEdit = productDatas that want to be edited.
  const [dataEdit, setDataEdit] = useState({});

  const displayEditModal = (data) => {
    setDataEdit(data);
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };
  const handleEdit = () => {
    //  props.deleteDataProduct(dataDelete._id);
    setShowEditModal(false);
  };
  const EditProductModal = () => {
    return (
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product of {dataEdit.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleEditInputChange}
              />
            </div>
            <div className="d-flex d-row">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  name="price"
                  onChange={handleEditInputChange}
                />
              </div>
              <div className="form-group ml-3">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  name="quantity"
                  onChange={handleEditInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Choose Image</label>
              <div className="custom-file">
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  className="custom-file-input"
                  id="customFile"
                  onChange={selectFile}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {selectedFileName ? (
                    <p className="text-success-s2 my-0">{selectedFileName}</p>
                  ) : (
                    "Choose file"
                  )}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
                onChange={handleEditInputChange}
              />
            </div>
            <div className="d-flex d-row">
              <div className="form-group w-100">
                <label htmlFor="product-gender">Select Product Gender</label>
                <select
                  className="form-control"
                  name="productGender"
                  onChange={handleEditInputChange}
                >
                  <option value="man">Man</option>
                  <option value="women">Woman</option>
                </select>
              </div>
              <div className="form-group ml-3 w-100">
                <label htmlFor="product-type">Select Product Type</label>
                <select
                  className="form-control"
                  name="productType"
                  onChange={handleEditInputChange}
                >
                  <option value="tops">Tops</option>
                  <option value="bottom">Bottom</option>
                  <option value="outer wear">Outer Wear</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
          <Button variant="warning" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  // delete modal form.
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // dataDelete = productDatas that want to be deleted.
  const [dataDelete, setDataDelete] = useState({});

  const displayDeleteModal = (data) => {
    setDataDelete(data);
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
  }, []);

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
                        <button
                          className="btn btn-warning mr-2"
                          onClick={() => displayEditModal(item)}
                        >
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
      <EditProductModal />
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
