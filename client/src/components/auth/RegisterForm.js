import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import Toasts from '../layout/Toasts';

const Register = ({
  auth: { isAuthenticated, error },
  history,
  registerUser
}) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/home');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      setMsg(error);
      setShow(!show);
      setTimeout(() => setShow(false), 5000);
    }
    // eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    registerUser(user);

    // eslint-disable-next-line react/prop-types
  };

  return (
    <Form onSubmit={onSubmit} className="container">
      <h1>Create an Account</h1>
      <FormGroup>
        <Toasts message={msg} open={show} />
        <Label for="name">Full Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="John Doe"
          onChange={onChange}
          value={name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="johndoe@gmail.com"
          onChange={onChange}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          autoComplete="new-password"
          id="password"
          onChange={onChange}
          value={password}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password2">Confirm Password</Label>
        <Input
          type="password"
          name="password2"
          id="password2"
          autoComplete="new-password"
          onChange={onChange}
          value={password2}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
