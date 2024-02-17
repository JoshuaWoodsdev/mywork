// src/pages/index.js
import React from "react";
import data from "../data/data.json";

const IndexPage = () => {
  return (
<div>
      <h2>{data.home.title}</h2>
      <p>{data.home.description}</p>
</div>
  );
};

export default IndexPage;
