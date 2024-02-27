import React from 'react';

const ProjectCard = ({ title, imageUrl, replitLink }) => {
  return (
    <div className="project-card mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src={imageUrl} alt={title} className="br-100 h4 w4 dib ba b--black-05 pa2" />
        <h1 className="f4">{title}</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f6 black-70">
        {title}
      </p>
      <a href={replitLink} className="f6 link dim br1 ba ph3 pv2 mb2 dib dark-blue" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;
