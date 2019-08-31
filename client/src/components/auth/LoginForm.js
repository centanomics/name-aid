import React, { useState, useContext } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = authContext;

  const changeEmail = e => {
    setEmail(e.value);
  };
  const changePassword = e => {
    setPassword(e.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    login();
    // eslint-disable-next-line react/prop-types
    props.history.push('/home');
  };

  return (
    <Form onSubmit={onSubmit} className="container">
      <h1>Login</h1>
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default withRouter(Login);
