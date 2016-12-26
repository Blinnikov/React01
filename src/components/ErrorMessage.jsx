import React, { PropTypes } from 'react';

const ErrorMessage = ({ message }) => (
  <div>
    <h1>Something bad has happened.</h1>
    <p>{message}</p>
  </div>
);
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
