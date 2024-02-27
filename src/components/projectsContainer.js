import React from 'react';
import ProjectCard from './projectCard';

const projects = [
  {
    title: "My First Project",
    imageUrl: "path/to/your/image.jpg",
    replitLink: "https://replit.com/@yourusername/yourproject"
  },
  // Add more projects as needed
];

const ProjectsContainer = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          replitLink={project.replitLink}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
