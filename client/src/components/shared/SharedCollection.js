import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import SharedCollectionItem from './SharedCollectionItem';
import { addShared } from '../../actions/sharedActions';

const SharedCollection = ({
  match,
  addShared,
  shared: { loading, sharedTerms }
}) => {
  useEffect(() => {
    addShared(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading || sharedTerms === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="list-section">
        <p>
          {!loading ? sharedTerms.length : 'No'}
          {' Shared Collections'}
        </p>
        <div />
      </div>
      <ListGroup>
        {!loading && sharedTerms.length === 0 ? (
          <ListGroupItem>
            <h3>There are no terms to show for this collection</h3>
          </ListGroupItem>
        ) : (
          sharedTerms.map(term => {
            return <SharedCollectionItem term={term} key={term.id} />;
          })
        )}
      </ListGroup>
    </div>
  );
};

SharedCollection.propTypes = {
  match: PropTypes.object.isRequired,
  addShared: PropTypes.func.isRequired,
  shared: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shared: state.shared
});

export default connect(
  mapStateToProps,
  { addShared }
)(withRouter(SharedCollection));
