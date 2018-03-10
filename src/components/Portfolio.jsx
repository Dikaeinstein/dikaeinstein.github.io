import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'Local Weather App',
    imgUrl: 'portfolio/weather-proj_modqed',
    url: 'https://dikaeinstein.github.io/local_weather_app',
  },
  {
    name: 'Styles Conference',
    imgUrl: 'portfolio/resp-proj_x9x7wx',
    url: 'https://dikaeinstein.github.io/styles_conference',
  },
  {
    name: 'Styles Conference Registration',
    imgUrl: 'portfolio/resp2-proj_twvv9d',
    url: 'https://dikaeinstein.github.io/styles_conference/register',
  },
  {
    name: 'Tic Tac Toe',
    imgUrl: 'portfolio/tic-tac-toe-proj_m4ywk2',
    url: 'https://dikaeinstein.github.io/tic-tac-toe',
  },
  {
    name: 'Calculator',
    imgUrl: 'portfolio/calc-proj_crhkbm',
    url: 'https://dikaeinstein.github.io/calculator',
  },
  {
    name: 'Random Quote Machine',
    imgUrl: 'portfolio/quote_proj_revcsz',
    url: 'https://dikaeinstein.github.io/random_quote',
  },
];

const Portfolio = () => (
  <main className="container mt-5">
    <div className="row pt-4 mb-4 text-secondary font-weight-bold">
      <header className="col-md-12 mt-4">
        <h4 className="text-center text-md-left font-weight-bold">Portfolio</h4>
      </header>
      {projects.map(project => (
        <ProjectCard
          imgUrl={project.imgUrl}
          name={project.name}
          url={project.url}
        />
      ))}
    </div>
  </main>
);

export default Portfolio;
