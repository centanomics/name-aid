import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TermList from '../terms/TermList';

const Terms = ({ collections: { currentCollection } }) => {
  return (
    <section className="container">
      <h1>{currentCollection.name}</h1>
      <TermList />
    </section>
  );
};

Terms.propTypes = {
  collections: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections
});

export default connect(
  mapStateToProps,
  null
)(Terms);
