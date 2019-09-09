import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import SharedItem from './SharedItem';
import { getShared } from '../../actions/sharedActions';

const SharedList = ({ shared: { loading, sharedCollections }, getShared }) => {
  useEffect(() => {
    getShared(1);
    // eslint-disable-next-line
  }, []);

  if (loading || sharedCollections === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="list-section">
        <p>
          {!loading ? sharedCollections.length : 'No'}
          {' Shared Collections'}
        </p>
        <div />
      </div>
      <ListGroup>
        {!loading && sharedCollections.length === 0 ? (
          <ListGroupItem>
            <h3>No collections were shared to you</h3>
          </ListGroupItem>
        ) : (
          sharedCollections.map(collection => {
            return <SharedItem collection={collection} key={collection.id} />;
          })
        )}
      </ListGroup>
    </div>
  );
};

SharedList.propTypes = {
  shared: PropTypes.object.isRequired,
  getShared: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shared: state.shared
});

export default connect(
  mapStateToProps,
  { getShared }
)(SharedList);
