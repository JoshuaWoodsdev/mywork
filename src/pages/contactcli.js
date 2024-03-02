import React from "react";
import data from "../data/contact.json"; // Make sure the path is correct

const ContactCLIPage = () => {
  return (
    <div className="pa4 mw7 center">
      <h1 className="f2">{data.title}</h1>
      <p className="measure lh-copy">{data.description}</p>

      <h2 className="f3">{data.features.title}</h2>
      <ul className="list pl0">
        {data.features.list.map((feature, index) => (
          <li key={index} className="pa2">{feature}</li>
        ))}
      </ul>

      <h2 className="f3">{data.installation.title}</h2>
      <p className="measure lh-copy">{data.installation.instructions}</p>

      <h2 className="f3">{data.contribution.title}</h2>
      <p className="measure lh-copy">{data.contribution.text}</p>

      <a href={data.githubURL} className="link">GitHub Repository</a>
    </div>
  );
};

export default ContactCLIPage;
