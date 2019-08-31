import React, { useState, useContext } from 'react';

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
import { NavLink as RRNavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
  const authContext = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = authContext;

  const toggle = () => {
    setOpen(!open);
  };

  const logOut = () => {
    logout();
  };

  const authLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/collections">
          Collections
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/term">
          Terms
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={logOut}>Logout</NavLink>
      </NavItem>
    </Nav>
  );
  const guestLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/register">
          Register
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <Navbar light expand="md">
      <NavbarBrand tag={RRNavLink} to="/">
        Name Aid
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        {isAuthenticated ? authLinks : guestLinks}
      </Collapse>
    </Navbar>
  );
};

export default Header;
