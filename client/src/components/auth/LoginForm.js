import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = e => {
    setEmail(e.value);
  };
  const changePassword = e => {
    setPassword(e.value);
  };

  return (
    <Form>
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
      <Button tag={RRNavLink} to="/home">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
