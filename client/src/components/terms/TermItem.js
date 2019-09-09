import React, { useState } from 'react';
import { ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTerm } from '../../actions/termsActions';
import EditTermModal from './EditTermModal';

const TermItem = ({ term, deleteTerm }) => {
  const { name, origin, id } = term;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const onClick = () => {
    deleteTerm(id);
  };

  return (
    <ListGroupItem to="/term">
      <h3>{name}</h3>
      <p>{origin}</p>
      <div>
        <button type="button" onClick={toggle}>
          <i className="fas fa-edit" />
        </button>
        <button type="button" onClick={onClick}>
          <i className="fas fa-trash" />
        </button>
        <i className="far fa-star" />
      </div>
      <EditTermModal modal={modal} toggle={toggle} terms={term} />
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
