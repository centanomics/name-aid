import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const TermItem = term => {
  const { name, origin } = term;
  return (
    <ListGroupItem to="/term">
      <h3>{name}</h3>
      <p>{origin}</p>
      <i className="far fa-star fa-5x" />
    </ListGroupItem>
  );
};

TermItem.propTypes = {
  term: PropTypes.object.isRequired
};

export default TermItem;
