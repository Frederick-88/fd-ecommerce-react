import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { editDataProduct } from "../../actionCreators/AdminAction";

const AdminProductEdit = (props) => {
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

  // useEffect(() => {
  //   setDataEditInput({
  //     image: null,
  //   });
  // }, [props.dataEdit._id]);

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

  const closeEditModal = () => {
    props.unDisplayEditModal(false);
  };

  //  Form Edit Data = for image inputs, we use form data in Insomnia. So here we are.
  const FormEditData = new FormData();
  FormEditData.append("image", dataEditInput.image);
  FormEditData.append("name", dataEditInput.name);
  FormEditData.append("price", dataEditInput.price);
  FormEditData.append("description", dataEditInput.description);
  FormEditData.append("quantity", dataEditInput.quantity);
  FormEditData.append("productGender", dataEditInput.productGender);
  FormEditData.append("productType", dataEditInput.productType);

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    props.editDataProduct(FormEditData, props.dataEdit, dataEditInput);
    props.unDisplayEditModal(false);
  };

  return (
    <Modal show={props.showEditModal} onHide={closeEditModal}>
      <form onSubmit={handleSubmitEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product of {props.dataEdit.name}</Modal.Title>
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
              {/* Stock(Frontend) = Quantity(Backend) */}
              <div className="form-group ml-3">
                <label htmlFor="quantity">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock"
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
              <textarea
                rows="3"
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
                  <option value="women">Women</option>
                  <option value="both">Both</option>
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
          <Button type="submit" variant="warning">
            Edit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
const mapDispatchToProps = {
  editDataProduct,
};

export default connect(null, mapDispatchToProps)(AdminProductEdit);
