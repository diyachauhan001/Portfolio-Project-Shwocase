import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.screenshot} alt={`${project.title} screenshot`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="links">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;