import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TermItem from './TermItem';
import AddTermModal from './AddTermModal';

import { getTerms } from '../../actions/termsActions';

const TermList = ({ terms: { terms, loading }, getTerms, match }) => {
  // const collections = [
  //   { name: 'Riley-Jay Shelton', origin: 'American' },
  //   { name: 'Gordon Dunkley', origin: 'American' },
  //   { name: 'Jarvis Mair', origin: 'American' },
  //   { name: 'Ismael Swift', origin: 'American' },
  //   { name: 'Ailish Griffin', origin: 'American' }
  // ];

  useEffect(() => {
    getTerms(match.params.id);
  }, []);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  if (loading || terms === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="list-section">
        <p>
          {terms.length}
          {' Names'}
        </p>
        <Button color="danger" onClick={toggle}>
          Add new name
        </Button>
      </div>
      <ListGroup>
        {!loading && terms.length === 0 ? (
          <ListGroupItem>
            <h3>No terms to show for this collection</h3>
          </ListGroupItem>
        ) : (
          terms.map(term => {
            return (
              <TermItem name={term.name} origin={term.origin} key={term.id} />
            );
          })
        )}
      </ListGroup>
      <AddTermModal modal={modal} toggle={toggle} />
    </div>
  );
};

TermList.propTypes = {
  terms: PropTypes.object.isRequired,
  getTerms: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  terms: state.terms
});

export default connect(
  mapStateToProps,
  { getTerms }
)(withRouter(TermList));
