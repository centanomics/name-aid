import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SharedCollection from '../shared/SharedCollection';

const Shared = ({ shared: currentShared }) => {
  useEffect(() => {
    // console.log(currentShared);
  }, []);
  return (
    <section className="container">
      <h1>{currentShared.ipa}</h1>
      <SharedCollection />
    </section>
  );
};

Shared.propTypes = {
  shared: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shared: state.shared
});

export default connect(
  mapStateToProps,
  null
)(Shared);
