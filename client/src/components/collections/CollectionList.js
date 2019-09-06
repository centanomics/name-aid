import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import CollectionItem from './CollectionItem';
import AddCollectionModal from './AddCollectionModal';

import { getCollections } from '../../actions/collectionsActions';

const CollectionList = ({
  collections: { collections, loading },
  getCollections
}) => {
  useEffect(() => {
    getCollections();
    // eslint-disable-next-line
  }, []);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  if (loading || collections === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="list-section">
        <p>
          {!loading ? collections.length : 'No'}
          {' Collections'}
        </p>
        <Button color="danger" onClick={toggle}>
          Add new collection
        </Button>
      </div>
      <ListGroup>
        {!loading && collections.length === 0 ? (
          <ListGroupItem>
            <h3>No collections to show</h3>
          </ListGroupItem>
        ) : (
          collections.map(collection => {
            return (
              <CollectionItem
                name={collection.name}
                key={collection.id}
                id={collection.id}
              />
            );
          })
        )}
      </ListGroup>
      <AddCollectionModal modal={modal} toggle={toggle} />
    </div>
  );
};

CollectionList.propTypes = {
  collections: PropTypes.object.isRequired,
  getCollections: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections
});

export default connect(
  mapStateToProps,
  { getCollections }
)(CollectionList);
