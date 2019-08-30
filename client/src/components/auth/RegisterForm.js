import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

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

  return (
    <Form>
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
      <Button tag={RRNavLink} to="/home">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
