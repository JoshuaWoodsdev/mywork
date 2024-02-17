// gatsby-browser.js
import React from "react";
import Layout from "./src/components/Layout";
import "./src/styles/global.css"; // Import global styles here

export const wrapPageElement = ({ element, props }) => {
  // You can pass additional props to the Layout component if needed
  return <Layout {...props}>{element}</Layout>;
};
