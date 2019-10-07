import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import TermItem from './TermItem';
import AddTermModal from './AddTermModal';

import { getTerms } from '../../actions/termsActions';

const TermList = ({ terms: { terms, loading }, getTerms, match }) => {
  useEffect(() => {
    getTerms(match.params.id);
    // eslint-disable-next-line
  }, []);

  const [modal, setModal] = useState(false);
  const [tts] = useState(
    'https://translate.google.com/translate_tts?ie=UTF-8&q=James&tl=en&total=1&idx=0&textlen=13&tk=731467.888472&client=t&prev=input'
  );

  const toggle = () => {
    setModal(!modal);
  };

  if (match.params.id === 'undefined') {
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
          <ListGroupItem>
            <h3>
              No terms selected! Go back to
              <Link to="/home"> collections </Link>
              to select one
            </h3>
          </ListGroupItem>
        </ListGroup>
        <AddTermModal modal={modal} toggle={toggle} id={match.params.id} />
      </div>
    );
  }

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
            return <TermItem term={term} key={term.id} />;
          })
        )}
      </ListGroup>
      <AddTermModal modal={modal} toggle={toggle} id={match.params.id} />
      <audio autoPlay>
        <source src={tts} type="audio/mpeg" />
      </audio>
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
