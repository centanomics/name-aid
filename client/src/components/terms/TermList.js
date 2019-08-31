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
import TermItem from './TermItem';

const TermList = () => {
  const collections = [
    { name: 'Riley-Jay Shelton', origin: 'American' },
    { name: 'Gordon Dunkley', origin: 'American' },
    { name: 'Jarvis Mair', origin: 'American' },
    { name: 'Ismael Swift', origin: 'American' },
    { name: 'Ailish Griffin', origin: 'American' }
  ];

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const changeName = e => {
    setName(e.value);
  };

  const changeOrigin = e => {
    setOrigin(e.value);
  };

  return (
    <div>
      <div className="list-section">
        <p>
          {collections.length}
          {' Names'}
        </p>
        <Button color="danger" onClick={toggle}>
          Add new name
        </Button>
      </div>
      <ListGroup>
        {collections.map(collection => {
          return <TermItem name={collection.name} origin={collection.origin} />;
        })}
      </ListGroup>
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
                onChange={changeName}
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
                onChange={changeOrigin}
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
    </div>
  );
};

export default TermList;
