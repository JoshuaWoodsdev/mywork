// src/pages/index.js
import React from "react";
import data from "../data/data.json";

const IndexPage = () => {
  return (
    <div>

      <article>
        <header class="bg-washed-yellow sans-serif">
          <div class="mw9 center pa4 pt5-ns ph7-l">
            <h3 class="f1 f1-m f-headline-l measure-narrow lh-title mv0">
              <span class="bg-black-90 lh-copy white pa1 tracked-tight">
                {data.home.title}dddd
              </span>
            </h3>
            <h4 class="f2 fw1 georgia i">{data.home.cta}</h4>
          </div>
        </header>

        <div class="pa4 ph7-l georgia mw9-l center">
          <p class="f3 f2-ns  measure">
            {data.home.description}
          </p>
        </div>

      </article>
    </div>
  );
};

export default IndexPage;
