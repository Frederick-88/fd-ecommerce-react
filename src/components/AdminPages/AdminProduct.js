import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getDataProduct,
  deleteDataProduct,
} from "../../actionCreators/AdminAction";
import { useDispatch } from "react-redux";

import { Modal, Button, Alert } from "react-bootstrap";
import EditProductModal from "./AdminProductEdit";
import AddProductModal from "./AdminProductAdd";

const AdminProduct = (props) => {
  const urlLocalhost = `${process.env.REACT_APP_API_URL}`;
  const dispatch = useDispatch();

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
    dispatch(getDataProduct());
  }, [dispatch]);

  // ADD MODAL FORM.
  const [showAddModal, setShowAddModal] = useState(false);
  const displayAddModal = () => {
    setShowAddModal(true);
  };
  const unDisplayAddModal = (boolean) => {
    setShowAddModal(boolean);
  };

  // EDIT MODAL FORM. (WHEN YOU MAKE MODAL FOR EDIT,ETC, YOU NEED TO DIVIDE THAT AS OTHER FILE.)

  // WHY? Because if you make it like delete form, CONST & CALL IT ON THE BOTTOM, THE ONCHANGE WILL NOT WORK.
  // The onchange will read the const and then when return, it will go back on the first state. We need to make it only 1 time run.
  const [showEditModal, setShowEditModal] = useState(false);
  // dataEdit = productDatas that want to be edited.
  const [dataEdit, setDataEdit] = useState({});

  const displayEditModal = (data) => {
    setDataEdit(data);
    setShowEditModal(true);
  };

  // to send to AdminProductEdit.js = function to close modal.
  const unDisplayEditModal = (boolean) => {
    setShowEditModal(boolean);
    // supaya setiap update(edit) slalu ada perubahan pada state.
  };

  // DELETE MODAL FORM.
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
    dispatch(deleteDataProduct(dataDelete._id));
    setShowDeleteModal(false);
  };
  const DeleteProductModal = () => {
    return (
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>
              Are you sure want to delete this product with the name of
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

  // alert from add product problem
  const alert = props.alertData;

  const AlertDismissible = () => {
    const [alertShow, setAlertShow] = useState(alert.show);

    if (alertShow) {
      return (
        <Alert
          variant={alert.variant}
          // BEST PRACTICE TO HANDLE ALERT THAT WILL SHOW AGAIN AFTER WE CLOSE THE ALERT. (2 FUNCTIONS IN 1 ONCLICK)
          onClose={() => {
            setAlertShow(false);
            alert.show = false;
          }}
          dismissible
        >
          <Alert.Heading className="h6 my-0">{alert.message}</Alert.Heading>
        </Alert>
      );
    }
    return <></>;
  };

  return (
    <div className="text-center">
      <AlertDismissible />

      <button className="btn btn-success" onClick={displayAddModal}>
        Add Product here as Admin
      </button>

      <div className="mx-4 my-3">
        <div className="row">
          {props.dataProduct.map((item, index) => {
            return (
              <div className="col-md-3 mt-4" key={index}>
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
                    <div className="d-flex d-row mb-3 justify-content-center">
                      <button
                        className="btn"
                        style={{
                          borderRadius: "7px",
                          backgroundColor: "#dedede",
                        }}
                      >
                        {item.productGender}
                      </button>
                      <button
                        className="btn ml-3"
                        style={{
                          borderRadius: "7px",
                          backgroundColor: "#dedede",
                        }}
                      >
                        {item.productType}
                      </button>
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
      <AddProductModal
        showAddModal={showAddModal}
        unDisplayAddModal={unDisplayAddModal}
      />
      <EditProductModal
        showEditModal={showEditModal}
        dataEdit={dataEdit}
        unDisplayEditModal={unDisplayEditModal}
      />
      <DeleteProductModal />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    alertData: state.AdminProductReducer.alert,
    dataProduct: state.AdminProductReducer.dataProduct,
  };
};

export default connect(mapStateToProps)(AdminProduct);
