import React from 'react';
import AboutCard from './AboutCard';
import AboutCardSide from './AboutCardSide';

const Main = () => (
  <main className="container mt-5">
    <div className="row">
      <div className="card col-md-12 mt-4">
        <div className="row">
          <AboutCard />
          <AboutCardSide />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
