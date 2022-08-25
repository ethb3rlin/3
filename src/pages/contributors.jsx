import Layout from "../components/Layout";
import React from "react";
import mentors from "../assets/people/mentors";

const Person = ({ name, organization, image }) => {
  return (
    <div className="mx-4 my-6 w-48 hover:text-berlin-yellow">
      <div className="flex flex-col justify-center items-center h-48 w-full relative break-words">
        <img
          src={`/letters/${name.charAt(0)}.png`}
          className="max-h-full max-w-full top-0 left-0 right-0 bottom-0 absolute m-auto z-10 opacity-95 hover:opacity-0 transition-all duration-200 ease-in-out"
        />
        <img
          src={image.default}
          className="max-h-full max-w-full top-0 left-0 right-0 bottom-0 absolute m-auto"
        />
      </div>
      <div className="text-2xl text-center mt-2">{name}</div>
      <div className="text-center text-gray-400">
        <a href={organization.url} rel="noopener noreferrer" target="_blank">
          {organization.name}
        </a>{" "}
      </div>
    </div>
  );
};

///////////////////////
//// MAIN COMPONENT ///
///////////////////////

const Contributors = () => (
  <Layout showEthDiamond={false}>
    <h1 className="my-4 underline text-secondary">(c)ontributors</h1>
    <p>These are the amazing people that made ETHBerlin³ possible.</p>
    <div>
      <h2 className="text-4xl mt-8">Mentors</h2>
      <div className="flex flex-wrap justify-around">
        {mentors
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((mentor) => (
            <Person {...mentor} />
          ))}
      </div>
    </div>
  </Layout>
);

export default Contributors;
