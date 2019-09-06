import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTerm } from '../../actions/termsActions';

const TermItem = ({ term, deleteTerm }) => {
  const { name, origin, id } = term;

  const onClick = () => {
    deleteTerm(id);
  };

  return (
    <ListGroupItem to="/term">
      <h3>{name}</h3>
      <p>{origin}</p>
      <div>
        <button type="button" onClick={onClick}>
          <i className="fas fa-trash" />
        </button>
        <i className="far fa-star" />
      </div>
    </ListGroupItem>
  );
};

TermItem.propTypes = {
  term: PropTypes.object.isRequired,
  deleteTerm: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTerm }
)(TermItem);
