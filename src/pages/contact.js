// src/pages/about.js
import React from "react";
import data from "../data/data.json";

const AboutPage = () => {
  return (
  <div>
    <h2>{data.contact.title}</h2>
    <p>{data.contact.description}</p>
    {/* Add more content as needed */}
  </div>
  );
};

export default AboutPage;
