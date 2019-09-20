import React from 'react';
import { Toast, ToastBody } from 'reactstrap';
import PropTypes from 'prop-types';

const Toasts = ({ message, open }) => {
  return (
    <Toast isOpen={open}>
      <ToastBody>{message}</ToastBody>
    </Toast>
  );
};

Toasts.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

export default Toasts;
