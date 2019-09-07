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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toasts from '../layout/Toasts';
import { updateTerm } from '../../actions/termsActions';

const EditTermModal = ({ modal, toggle, terms, updateTerm }) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  const [term, setTerm] = useState({
    name: terms.name,
    origin: terms.origin
  });

  const showToggle = message => {
    setMsg(message);
    setShow(!show);
    setTimeout(() => setShow(false), 5000);
  };

  const { name, origin } = term;
  const { id, collectionId } = terms;

  const onChange = e => setTerm({ ...term, [e.target.name]: e.target.value });

  const onSubmit = () => {
    if (name === '' || origin === '') {
      showToggle('Please enter a name and origin.');
    } else {
      const updatedTerm = {
        name,
        origin,
        id,
        collectionId
      };

      updateTerm(updatedTerm);
      toggle();
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a Name</ModalHeader>
      <ModalBody>
        <Form>
          <Toasts message={msg} open={show} />
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
        <Button color="primary" onClick={onSubmit}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

EditTermModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  terms: PropTypes.object.isRequired
};

export default connect(
  null,
  { updateTerm }
)(EditTermModal);
