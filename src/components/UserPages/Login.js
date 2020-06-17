import React from "react";
import { Modal, Button } from "react-bootstrap";

const Login = (props) => {
  const closeLoginModal = () => {
    props.closeLoginModal(false);
  };
  return (
    <div>
      <Modal show={props.showLoginModal} onHide={closeLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeLoginModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeLoginModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Login;
