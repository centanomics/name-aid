import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/authActions';
import CollectionList from '../collections/CollectionList';

const UserHome = ({ loadUser }) => {
  useEffect(() => {
    // loadUser();
  });

  return (
    <section className="container">
      <h1>Your Collections!</h1>
      <CollectionList />
    </section>
  );
};

UserHome.propTypes = {
  loadUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { loadUser }
)(UserHome);
