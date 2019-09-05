import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const AddCollectionModal = ({ modal, toggle }) => {
  const [name, setName] = useState('');
  const changeName = e => {
    setName(e.value);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create a Collection</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Collection Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Class A"
              onChange={changeName}
              value={name}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

AddCollectionModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default AddCollectionModal;
