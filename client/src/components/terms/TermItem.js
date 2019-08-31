import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const TermItem = ({ name, origin }) => {
  return (
    <ListGroupItem to="/term">
      <h3>{name}</h3>
      <p>{origin}</p>
      <i className="far fa-star fa-5x" />
    </ListGroupItem>
  );
};

export default TermItem;

TermItem.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired
};
