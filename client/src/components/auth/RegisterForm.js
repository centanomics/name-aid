import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Full Name:</Label>
        <Input type="text" name="name" id="name" placeholder="John Doe" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </FormGroup>
      <FormGroup>
        <Label for="password2">Confirm Password</Label>
        <Input type="password" name="password2" id="password2" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Register;
