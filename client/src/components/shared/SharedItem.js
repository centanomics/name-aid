import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteShared } from '../../actions/sharedActions';

const SharedItem = ({ collection, deleteShared }) => {
  const { name, id } = collection;

  const onClick = () => {
    deleteShared(id);
  };

  return (
    <ListGroupItem>
      <RRNavLink to={`/term/${id}`}>
        <h3>{name}</h3>
      </RRNavLink>
      <button type="button" onClick={onClick}>
        <i className="fas fa-trash" />
      </button>
      <i className="fas fa-share" />
    </ListGroupItem>
  );
};

SharedItem.propTypes = {
  collection: PropTypes.object.isRequired,
  deleteShared: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteShared }
)(SharedItem);
