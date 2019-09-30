import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/authActions';

const Reset = ({
  resetPassword,
  location,
  history,
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/home');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);
  const [user, setUser] = useState({
    password: '',
    password2: ''
  });
  const token = location.search.substring(
    location.search.indexOf('=') + 1,
    location.search.length
  );

  const { password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    console.log(password, password2);
    e.preventDefault();
    resetPassword(token, password, password2);
  };
  return (
    <div>
      <Form onSubmit={onSubmit} className="container">
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
    </div>
  );
};

Reset.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(withRouter(Reset));
