import React from "react";
import data from "../data/data.json";

const AboutPage = () => {
  return (
    <div className="pa4 ph7-l georgia mw9 center"> {/* Adjusted the class to 'mw9 center' for consistent centering */}
      <h2 className="f2-l fw4">{data.about.title}</h2> {/* Adjusted the font size for the title */}
      <p className="f4 f3-ns lh-copy measure"> {/* Adjusted the font size and line height for the description */}
        {data.about.description}
      </p>

      <h3 className="f3-l fw4 mt5 mb3">{data.about.skillsTitle}</h3> {/* Added a heading for the skills list and adjusted margins for spacing */}
      <ul className="list pl0 mw6 center"> {/* Adjusted the width to 'mw6' for better readability */}
        {data.about.skills.map((skill, index) => ( // Using the skills array from data.json, if available
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={index}>{skill}</li> // Using index as key for lack of unique identifiers
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;

