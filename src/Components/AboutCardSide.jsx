import React from 'react';
import Skills from './Skills';
import Experience from './Experience';
import './AboutCardSide.css';

const AboutCardSide = () => (
  <section className="col-md-7 p-md-4 bg-white">
    <Experience />
    <div className="hr ml-5 mr-5" />
    <Skills />
    <div className="hr ml-5 mr-5" />
    <div id="ed" className="row m-4">
      <div className="col-md-12" id="ed">
        <h3 className="mb-3 ml-1 font-weight-bold">Education</h3>
        <div className="font-weight-bold text-secondary">
          <p className="font-weight-bold">FreeCodeCamp</p>
          <p className="font-weight-bold">2016 - Present</p>
          <p className="font-weight-bold">Computer Software Engineering</p>
        </div>
        <div className="font-weight-bold text-secondary mt-4">
          <p className="font-weight-bold">Abia State University, Uturu.</p>
          <p className="font-weight-bold">2010 - 2015</p>
          <p className="font-weight-bold">Physics</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCardSide;
