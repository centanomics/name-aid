import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { logout, loadUser } from '../../actions/authActions';

const Header = ({
  history,
  auth: { isAuthenticated },
  logout,
  loadUser,
  collections: { currentCollection }
}) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const logOut = () => {
    logout();
    history.push('/');
  };

  const authLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about" activeClassName="selected">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/home" activeClassName="selected">
          Collections
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag={RRNavLink}
          to={`/term/${currentCollection.id}`}
          activeClassName="selected"
        >
          Terms
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/shared" activeClassName="selected">
          Shared Items
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/contact" activeClassName="selected">
          Contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={logOut} tag={RRNavLink} to="#">
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );
  const guestLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about" activeClassName="selected">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/contact" activeClassName="selected">
          Contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/login" activeClassName="selected">
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/register" activeClassName="selected">
          Register
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <Navbar expand="md">
      <NavbarBrand tag={RRNavLink} to="/">
        <img
          src="icon.png"
          alt="Name Aid Icon"
          height="62px"
          className="icon"
        />
        Name Aid
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        {isAuthenticated ? authLinks : guestLinks}
      </Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  collections: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  collections: state.collections
});

export default connect(
  mapStateToProps,
  { logout, loadUser }
)(withRouter(Header));
