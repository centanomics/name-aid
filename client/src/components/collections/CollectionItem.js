import React, { useState } from 'react';
import { ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteCollection,
  setCurrentCollection
} from '../../actions/collectionsActions';
import EditCollectionModal from './EditCollectionModal';

const CollectionItem = ({
  collection,
  deleteCollection,
  setCurrentCollection
}) => {
  const { name, id } = collection;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const onClick = () => {
    deleteCollection(id);
  };

  const setCurrentCol = () => {
    setCurrentCollection(collection);
  };

  return (
    <ListGroupItem>
      <RRNavLink to={`/term/${id}`} onClick={setCurrentCol}>
        <h3>{name}</h3>
      </RRNavLink>
      <div>
        <button type="button" onClick={toggle}>
          <i className="fas fa-edit" />
        </button>
        <button type="button" onClick={onClick}>
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-share" />
      </div>
      <EditCollectionModal
        modal={modal}
        toggle={toggle}
        collection={collection}
      />
    </ListGroupItem>
  );
};

CollectionItem.propTypes = {
  collection: PropTypes.object.isRequired,
  deleteCollection: PropTypes.func.isRequired,
  setCurrentCollection: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCollection, setCurrentCollection }
)(CollectionItem);
