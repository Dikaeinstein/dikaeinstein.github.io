import React from 'react';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import './AboutCard.css';

const AboutCard = () => (
  <section className="col-md-5 p-4 text-center bg-light">
    <h3 className="mb-4 font-weight-bold">Solomon Okwa</h3>
    <CloudinaryContext cloudName="dikaeinstein">
      <Image
        publicId="portfolio/LinkedIn-dika_refbep.jpg"
        className="img-fluid rounded w-75"
      >
        <Transformation width="1920" y="1000" crop="crop" />
        <Transformation dpr="auto" width="625" crop="scale" />
      </Image>
    </CloudinaryContext>
    <div className="mt-4">
      <h5 className="font-weight-bold">Aspiring Full Stack Web Developer</h5>
      <h6 className="font-weight-bold">in Lagos, Nigeria.</h6>
      <div className="hr m-md-4 mt-4 ml-2 mr-2" />
      <p className="ml-md-4 mr-md-4 mt-4 font-weight-bold text-secondary">
        I&lsquo;m a Physics graduate. Self taught, aspiring Full Stack Web Developer with working knowledge of
        HTML5, CSS3, JavaScript (ES6), jQuery, Reactjs,
        Express, MongoDB, NodeJs, Python and SQL databases (Postgresql and SQL Server).
        Currently living in Lagos, Nigeria.
      </p>
      <p className="ml-md-4 mr-md-4 font-weight-bold text-secondary">
        Software Development is cool cos i get to learn new stuff everyday,
        which aligns with my personality: lifelong learner.
        I&lsquo;m also an aspiring SuperHero and Rockstar.
        When i&lsquo;m not coding, you can catch me talking about Quantum Physics.
        If you&lsquo;d like to get in touch,
        feel free to say hello through any of the social links below.
      </p>
      <div className="hr m-md-4 m-2 mt-4" />
      <div className="social">
        <a href="https://twitter.com/Dika_einstein" target="blank">
          <i className="fa fa-twitter" style={{ fontSize: '18px' }} />
        </a>
        <a href="https://www.linkedin.com/in/dikaeinstein" target="blank">
          <i className="fa fa-linkedin" style={{ fontSize: '18px' }} />
        </a>
        <a href="https://github.com/dikaeinstein" target="blank">
          <i className="fa fa-github" style={{ fontSize: '18px' }} />
        </a>
        <a href="mailto:solozyokwa@gmail.com" target="blank">
          <i className="fa fa-envelope" style={{ fontSize: '18px' }} />
        </a>
      </div>
      <div className="hr m-md-4 m-2" />
    </div>
  </section>
);

export default AboutCard;
