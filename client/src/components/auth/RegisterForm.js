import React, { useState, useContext } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { login } = authContext;

  const changeName = e => {
    setName(e.value);
  };
  const changeEmail = e => {
    setEmail(e.value);
  };
  const changePassword = e => {
    setPassword(e.value);
  };
  const changePassword2 = e => {
    setPassword2(e.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    login();
    // eslint-disable-next-line react/prop-types
    props.history.push('/home');
  };

  return (
    <Form onSubmit={onSubmit} className="container">
      <h1>Create an Account</h1>
      <FormGroup>
        <Label for="name">Full Name:</Label>
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
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          onChange={changeEmail}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={changePassword}
          value={password}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password2">Confirm Password</Label>
        <Input
          type="password"
          name="password2"
          id="password2"
          onChange={changePassword2}
          value={password2}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default withRouter(Register);
