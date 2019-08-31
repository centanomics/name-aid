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
  Input,
  ListGroup
} from 'reactstrap';
import CollectionItem from './CollectionItem';

const CollectionList = () => {
  const collections = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6'
  ];

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const changeName = e => {
    setName(e.value);
  };

  return (
    <div>
      <div>
        <p>
          {collections.length}
          Collections
        </p>
        <Button color="danger" onClick={toggle}>
          Add new collection
        </Button>
      </div>
      <ListGroup>
        {collections.map(collection => {
          return <CollectionItem name={collection} />;
        })}
      </ListGroup>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
    </div>
  );
};

export default CollectionList;
