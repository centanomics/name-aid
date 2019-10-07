import React, { useState } from 'react';
import { ListGroupItem } from 'reactstrap';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SharedCollectionItem = ({ term }) => {
  const { name, origin, ipa } = term;
  const [currName, setCurr] = useState(name);

  const changeIpa = () => setCurr(ipa);
  const changeName = () => setCurr(name);
  // const getSound = () => getTTS(term);
  // onClick={getSound}
  return (
    <ListGroupItem to="/term">
      <button type="button" onMouseEnter={changeIpa} onMouseLeave={changeName}>
        <h3>{currName}</h3>
      </button>
      <p>{origin}</p>
    </ListGroupItem>
  );
};

SharedCollectionItem.propTypes = {
  term: PropTypes.object.isRequired
};

export default SharedCollectionItem;
