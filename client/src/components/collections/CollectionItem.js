import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCollection } from '../../actions/collectionsActions';

const CollectionItem = ({ name, id, deleteCollection }) => {
  const onClick = () => {
    deleteCollection(id);
  };

  return (
    <ListGroupItem>
      <RRNavLink to="/term">
        <h3>{name}</h3>
      </RRNavLink>
      <div>
        <button type="button" onClick={onClick}>
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-share" />
      </div>
    </ListGroupItem>
  );
};

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteCollection: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCollection }
)(CollectionItem);
