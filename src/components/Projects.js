import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src="/assets/project1.jpg" alt="Project 1" />
        <div className="project-info">
          <h3>Project Name</h3>
          <p>Description of the project...</p>
          <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://project1.live" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
      <div className="project-card">
        <img src="/assets/project1.jpg" alt="Project 1" />
        <div className="project-info">
          <h3>Project Name</h3>
          <p>Description of the project...</p>
          <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://project1.live" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
      <div className="project-card">
        <img src="/assets/project1.jpg" alt="Project 1" />
        <div className="project-info">
          <h3>Project Name</h3>
          <p>Description of the project...</p>
          <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://project1.live" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;