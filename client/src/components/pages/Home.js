import React from 'react';
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="container">
      <h1>Having Trouble Pronouncing Names?</h1>
      <p className="cta">
        Then Name Aid is the site for you. Organize names as you see fit and
        practice whenever. Start by creating your collection today!
      </p>
      <Button tag={RRNavLink} to="/register">
        Get Started
      </Button>
    </section>
  );
};

export default Home;
