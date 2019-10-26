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
import CopyModal from './CopyModal';

const CollectionItem = ({
  collection,
  deleteCollection,
  setCurrentCollection
}) => {
  const { name, id } = collection;
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleCopy = () => setModal2(!modal2);

  const onClick = () => deleteCollection(id);

  const setCurrentCol = () => setCurrentCollection(collection);

  return (
    <ListGroupItem>
      <RRNavLink to={`/term/${id}`} onClick={setCurrentCol}>
        <h3>{name}</h3>
      </RRNavLink>
      <div>
        <button type="button" onClick={toggle} className="collection-button">
          <span>Edit</span>
          <i className="fas fa-edit" />
        </button>
        <button type="button" onClick={onClick} className="collection-button">
          <span>Delete</span>
          <i className="fas fa-trash" />
        </button>
        {document.queryCommandSupported('copy') && (
          <button
            type="button"
            onClick={toggleCopy}
            className="collection-button"
          >
            <span>Share</span>
            <i className="fas fa-share" />
          </button>
        )}
      </div>
      <EditCollectionModal
        modal={modal}
        toggle={toggle}
        collection={collection}
      />
      <CopyModal
        modal={modal2}
        toggle={toggleCopy}
        link={`http://localhost:3000/shared/${id}`}
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
