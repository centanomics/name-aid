import React, { createRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const CopyModal = ({ modal, toggle, link }) => {
  const inputRef = createRef(link);

  const copyToClip = e => {
    inputRef.current.select();
    document.execCommand('copy');
    toggle();
  };
  const onChange = () => {};

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Share Collection!</ModalHeader>
      <ModalBody>
        <input
          type="text"
          ref={inputRef}
          value={link}
          className="centerinput"
          onChange={onChange}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={copyToClip}>Get Link</Button>
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

CopyModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
};

export default CopyModal;
