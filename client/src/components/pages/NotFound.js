import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>Not Found</h1>
      <Link to="/">Go back to the home page?</Link>
    </div>
  );
};

export default NotFound;
