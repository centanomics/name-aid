import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        Name Aid
      </h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

// ask about changing the ul when logging in is that now or later
