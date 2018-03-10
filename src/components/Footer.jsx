import React from 'react';

const Footer = () => (
  <footer className="row text-center bg-dark text-light p-2" style={{ fontSize: '18px' }}>
    <div className="col-md-4">
      <p className="mt-md-3 font-weight-bold">
        Designed by
        <a
          style={{ color: '#888' }}
          href="https://twitter.com/GbMillz"
        > @Gbmillz
        </a>
      </p>
    </div>
    <div className="col-md-4">
      <p className="mt-md-3 font-weight-bold">
        Made with
        <a
          style={{ color: '#888' }}
          href="https://reactjs.org/"
        > Reactjs
        </a> by Me
        <a
          style={{ color: '#888' }}
          href="https://twitter.com/Dika_einstein"
        > (Dikaeinstein)
        </a>
      </p>
    </div>
    <div className="col-md-4">
      <p className="mt-md-3 font-weight-bold">&copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
