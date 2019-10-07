import React, { useState } from 'react';
import { ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTerm, getTTS } from '../../actions/termsActions';
import EditTermModal from './EditTermModal';

const TermItem = ({ term, deleteTerm, getTTS }) => {
  const { name, origin, id, ipa } = term;
  const [modal, setModal] = useState(false);
  const [currName, setCurr] = useState(name);

  const toggle = () => {
    setModal(!modal);
  };

  const onClick = () => {
    deleteTerm(id);
  };

  const changeIpa = () => setCurr(ipa);
  const changeName = () => setCurr(name);
  const getSound = () => getTTS(term);

  return (
    <ListGroupItem to="/term">
      <button
        type="button"
        onMouseEnter={changeIpa}
        onMouseLeave={changeName}
        onClick={getSound}
      >
        <h3>{currName}</h3>
      </button>
      <p>{origin}</p>
      <div>
        <button type="button" onClick={toggle}>
          <i className="fas fa-edit" />
        </button>
        <button type="button" onClick={onClick}>
          <i className="fas fa-trash" />
        </button>
      </div>
      <EditTermModal modal={modal} toggle={toggle} terms={term} />
    </ListGroupItem>
  );
};

TermItem.propTypes = {
  term: PropTypes.object.isRequired,
  deleteTerm: PropTypes.func.isRequired,
  getTTS: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    deleteTerm,
    getTTS
  }
)(TermItem);
