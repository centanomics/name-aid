import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import Toasts from '../layout/Toasts';
import { login } from '../../actions/authActions';

const Login = ({ history, login, auth: { isAuthenticated, error } }) => {
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
    email: '',
    password: ''
  });

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const { email, password } = user;

  const onSubmit = e => {
    e.preventDefault();
    login(user);
  };

  return (
    <Form onSubmit={onSubmit} className="container">
      <h1>Login</h1>
      <FormGroup>
        <Toasts message={msg} open={show} />
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
          id="password"
          autoComplete="current-password"
          onChange={onChange}
          value={password}
        />
      </FormGroup>
      <Link to="forgot">Forgot Password?</Link>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Login));
