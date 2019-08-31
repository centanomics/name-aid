import React from 'react';
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="container">
      <h1>Having Trouble Pronouncing Names?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        convallis sodales egestas. Suspendisse ac vestibulum eros. Nunc
        facilisis lacus interdum lobortis convallis. Quisque eu nunc non dui
        pretium maximus et at libero. Etiam tincidunt velit quis sagittis
        condimentum. Sed lacus diam, consectetur ac gravida faucibus, lacinia
        sed nisl. Quisque sed nunc a magna semper dictum. Phasellus fermentum
        orci at dictum pharetra. Quisque sed nunc a magna semper dictum.
        Phasellus fermentum orci at dictum pharetra.
      </p>
      <Button tag={RRNavLink} to="/register">
        Get Started
      </Button>
    </section>
  );
};

export default Home;
