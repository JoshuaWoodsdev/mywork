import React from "react";
import { Link } from "gatsby"; // Import Link

const ProjectsPage = () => {
  return (
    <div className="pa4 mw7 center">
      <h1 className="f2">My Projects</h1>
      <p className="measure lh-copy">
        Here's a selection of some recent projects I've been working on. Click on any project to learn more.
      </p>

      <ul className="list pl0">
        {/* Other projects */}
        <li className="pa2">
          <Link to="/contactcli" className="link">ContactCLI v1.0.0</Link> - A command-line tool for managing your contacts.
        </li>
        <li className="pa2">
          <Link to="/notareactframework" className="link">Narfw</Link> - Your project's description.
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;

