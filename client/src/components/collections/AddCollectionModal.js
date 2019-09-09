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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toasts from '../layout/Toasts';
import { addCollection } from '../../actions/collectionsActions';

const AddCollectionModal = ({ modal, toggle, addCollection }) => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');

  const changeName = e => {
    setName(e.target.value);
  };

  const showToggle = message => {
    setMsg(message);
    setShow(!show);
    setTimeout(() => setShow(false), 5000);
  };

  const onSubmit = () => {
    if (name === '') {
      showToggle('Please enter a name for your collection');
    } else {
      const newCollection = {
        name
      };

      addCollection(newCollection);

      setName('');
      toggle();
    }
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create a Collection</ModalHeader>
      <ModalBody>
        <Form>
          <Toasts message={msg} open={show} />
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

AddCollectionModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  addCollection: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCollection }
)(AddCollectionModal);
