import React from 'react';
import CollectionList from '../collections/CollectionList';

const UserHome = () => {
  return (
    <section className="container">
      <h1>Your Collections!</h1>
      <CollectionList />
    </section>
  );
};

export default UserHome;
