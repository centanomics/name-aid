import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  return (
    <Form>
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
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
