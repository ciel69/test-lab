import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';

import './style.scss';

const CustomModal = (props) => {
  const {show, onClose} = props;

  return (
    <Modal className="app__custom-modal custom-modal" show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>External link</Modal.Title>
      </Modal.Header>
      <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem.</Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onClose}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CustomModal;