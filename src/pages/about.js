// src/pages/about.js
import React from "react";
import data from "../data/data.json";

const AboutPage = () => {
  return (
  <div>
    <h2>{data.about.title}</h2>
    <p>{data.about.description}</p>
    {/* Add more content as needed */}
  </div>
  );
};

export default AboutPage;
