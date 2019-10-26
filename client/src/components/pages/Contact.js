import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Toasts from '../layout/Toasts';
import { sendEmail } from '../../actions/authActions';

const Contact = ({ sendEmail, auth: { message } }) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
    url: ''
  });

  useEffect(() => {
    if (message !== null) {
      setMsg(message);
      setShow(!show);
      setTimeout(() => setShow(false), 5000);
      setUser({ name: '', email: '', message: '' });
    }
    // eslint-disable-next-line
  }, [message]);

  const { name, email, message: msgUsr, url } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (url === '') {
      sendEmail(user);
    } else {
      setMsg('Your message has been sent!');
      setShow(!show);
      setTimeout(() => setShow(false), 5000);
      setUser({ name: '', email: '', message: '', url: '' });
    }
  };

  return (
    <section className="container">
      <Form onSubmit={onSubmit}>
        <Toasts message={msg} open={show} />
        <h1>Contact us</h1>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="John Doe"
            value={name}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup className="url">
          <Label for="url">Leave this empty:</Label>
          <Input
            type="text"
            name="url"
            id="url"
            autoComplete="url"
            value={url}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            autoComplete="message"
            rows="4"
            placeholder="Enter your message here"
            value={msgUsr}
            onChange={onChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </section>
  );
};

Contact.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { sendEmail }
)(Contact);
