import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const CollectionItem = ({ name }) => {
  return (
    <ListGroupItem tag={RRNavLink} to="/term">
      <h3>{name}</h3>
      <i className="fas fa-share" />
    </ListGroupItem>
  );
};

export default CollectionItem;

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired
};
