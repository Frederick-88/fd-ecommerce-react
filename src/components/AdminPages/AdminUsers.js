import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Modal, Button } from "react-bootstrap";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { getDataUser, deleteUser } from "../../actionCreators/AdminAction";
import { useDispatch } from "react-redux";

const AdminUsers = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataUser());
  }, [dispatch]);

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
    dispatch(deleteUser(dataDelete._id));
    setShowDeleteModal(false);
  };
  const DeleteProductModal = () => {
    return (
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>
              Are you sure want to delete this user with the name of
              <span className="text-success-s2">"{dataDelete.username}"</span> ?
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

  console.log(props.dataUser);

  return (
    <div className="text-center container">
      <Table className="table table-success">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>
              <i className="far fa-trash-alt fa-lg"></i>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.dataUser.map((item, index) => {
            return (
              <Tr key={index}>
                <Td className="text-justify text-center">{index + 1}</Td>
                <Td className="text-justify text-center">{item.username}</Td>
                <Td className="text-justify text-center">{item.email}</Td>
                <Td className="text-justify text-center">
                  0{item.phoneNumber}
                </Td>
                <Td>
                  <button
                    className="btn btn-danger"
                    onClick={() => displayDeleteModal(item)}
                  >
                    <i className="far fa-trash-alt fa-lg"></i>
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <DeleteProductModal />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataUser: state.AdminUserReducer.dataUser,
  };
};

export default connect(mapStateToProps)(AdminUsers);
