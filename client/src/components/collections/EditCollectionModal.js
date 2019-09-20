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
import { updateCollection } from '../../actions/collectionsActions';

const EditCollectionModal = ({
  modal,
  toggle,
  collection,
  updateCollection
}) => {
  const [name, setName] = useState(collection.name);
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
      showToggle('Please dont leave the name empty');
    } else {
      const updatedCollection = {
        id: collection.id,
        name
      };

      updateCollection(updatedCollection);

      setName('');
      toggle();
    }
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit this Collection</ModalHeader>
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
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

EditCollectionModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  collection: PropTypes.object.isRequired,
  updateCollection: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateCollection }
)(EditCollectionModal);
