import React from "react";
import data from "../data/data.json";
import ProjectsContainer from "../components/projectsContainer";



const ProjectsPage = () => {
    return (
      <div className="pa4">
        <h1 className="f2">{data.projects.title}</h1>
        <p className="measure lh-copy">{data.projects.description}</p>
        {Object.entries(data.projects.categories).map(([key, category]) => (
          <div key={key} className="mb5">
            <h2 className="f3 mb3">{category.title}</h2>
            <ProjectsContainer category={category} />
          </div>
        ))}
      </div>
    );
  };


export default ProjectsPage;
