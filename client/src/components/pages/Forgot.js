import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { forgotPassword } from '../../actions/authActions';

const Forgot = ({ forgotPassword }) => {
  const [email, setEmail] = useState('');
  const changeEmail = e => {
    setEmail(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    forgotPassword(email);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} className="container">
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="johndoe@gmail.com"
            onChange={changeEmail}
            value={email}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

Forgot.propTypes = {
  forgotPassword: PropTypes.func.isRequired
};

export default connect(
  null,
  { forgotPassword }
)(Forgot);
