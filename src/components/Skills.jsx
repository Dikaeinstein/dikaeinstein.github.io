import React from 'react';
import Button from './Button';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Reactjs', 'Express',
    'MongoDB', 'jQuery', 'Test Driven Development',
    'Postgresql', 'MSSql (SQL Server)', 'Python',
  ];

  return (
    <div className="row m-4">
      <div className="col-md-12" id="skills">
        <h3 className="mb-4 font-weight-bold">Skills and Technologies</h3>
        {skills.map(skill => (
          <Button value={skill} className="btn font-weight-bold" disabled />
        ))}
      </div>
    </div>
  );
};

export default Skills;
