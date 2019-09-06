import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';

const AddTermModal = ({ modal, toggle }) => {
  const [term, setTerm] = useState({
    name: '',
    origin: ''
  });

  const { name, origin } = term;

  const onChange = e => setTerm({ ...term, [e.target.name]: e.target.value });

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a Name</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              onChange={onChange}
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="origin">Origin:</Label>
            <Input
              type="text"
              name="origin"
              id="origin"
              placeholder="English"
              onChange={onChange}
              value={origin}
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

AddTermModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default AddTermModal;
