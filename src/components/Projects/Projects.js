import React from 'react';
import ProjectsCard from './ProjectsCard/ProjectsCard';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__title'>Проекты</h2>
      <ul className='projects__list'>
        <ProjectsCard />
      </ul>
    </section>
  );
}
export default Projects