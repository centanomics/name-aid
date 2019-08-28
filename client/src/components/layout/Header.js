import React, { useState } from 'react';

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

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={RRNavLink} to="/">
        reactstrap
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
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
      </Collapse>
    </Navbar>
  );
};

export default Header;

// ask about changing the ul when logging in is that now or later
// <header>
//       <h1>
//         <img src="https://via.placeholder.com/150" alt="placeholder" />
//         Name Aid
//       </h1>
//       <ul>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/register">Signup</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </header>
