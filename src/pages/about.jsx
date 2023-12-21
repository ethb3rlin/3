import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

const About = () => {
  const [randomizedNames, setRandomizedNames] = useState([]);

  useEffect(() => {
    const names = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6", "Name7", "Name8", "Name9", "Name10", "Name11", "Name12", "Name13", "Name14", "Name15", "Name16", "Name17", "Name18", "Name19", "Name20", "Name21"];

    // names here
    const shuffledNames = names.sort(() => 0.5 - Math.random());
    setRandomizedNames(shuffledNames);
  }, []);

  return (
    <Layout>
      <h1 className="my-4 underline font-ocra text-berlin-yellow">(a)bout</h1>
      <div className="text-justify decorate-links">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, tempora molestias repellat illum tempore illo nemo vero aliquam officia vitae iusto dolores! Nemo est dignissimos deserunt possimus dolore eius beatae.
        </p>
        <p>
          After successful events in 2018 and 2019, ETHBerlin decided to reaffirm
          its commitment with the ecosystem and founded the{" "}
          <a href="/decentralization">Department of Decentralization</a>. The DoD is
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, tempora molestias repellat illum tempore illo nemo vero aliquam officia vitae iusto dolores! Nemo est dignissimos deserunt possimus dolore eius beatae.
        </p>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, tempora molestias repellat illum tempore illo nemo vero aliquam officia vitae iusto dolores! Nemo est dignissimos deserunt possimus dolore eius beatae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, tempora molestias repellat illum tempore illo nemo vero aliquam officia vitae iusto dolores! Nemo est dignissimos deserunt possimus dolore eius beatae..
        </p>
        <p>
          We are (in random order): 
          {randomizedNames.join(', ')}.
          Supported by countless volunteers and creative contributors.
        </p>
      </div>
    </Layout>
  );
};

export default About;
