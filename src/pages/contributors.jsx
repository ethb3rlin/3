import Layout from "../components/Layout";
import React from "react";
import mentors from "../assets/people/mentors";
import judges from "../assets/people/judges";
import twitterLogo from "../assets/twitter.png";
import githubLogo from "../assets/github.png";

const Person = ({ name, organization, image, twitter, github }) => {
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
      <div className="flex justify-center mt-2">
        {twitter && (
          <a href={twitter}>
            <img
              src={twitterLogo}
              className="mx-2 h-5 opacity-70 hover:opacity-100"
              alt="twitter"
            />
          </a>
        )}
        {github && (
          <a href={github}>
            <img
              src={githubLogo}
              className="mx-2 h-5 opacity-70 hover:opacity-100"
              alt="github"
            />
          </a>
        )}
      </div>
    </div>
  );
};

///////////////////////
//// MAIN COMPONENT ///
///////////////////////

const Contributors = () => {
  const [people, setPeople] = React.useState(mentors);
  const [title, setTitle] = React.useState("Mentors");

  const handleMentors = () => {
    setPeople(mentors);
    setTitle("Mentors");
  };

  const handleJudges = () => {
    setPeople(judges);
    setTitle("Judges");
  };

  return (
    <Layout showEthDiamond={false}>
      <h1 className="my-4 underline text-secondary">(c)ontributors</h1>
      <p>These are the amazing people that made ETHBerlin³ possible.</p>
      <div className="flex justify-center">
        <button
          className={`${
            title === "Mentors" ? "bg-berlin-yellow text-black" : ""
          } text-xl md:text-2xl mx-4`}
          onClick={handleMentors}
        >
          {"< Mentors >"}
        </button>
        <button
          className={`${
            title === "Judges" ? "bg-berlin-yellow text-black" : ""
          } text-xl md:text-2xl mx-4`}
          onClick={handleJudges}
        >
          {"< Judges >"}
        </button>
      </div>
      <div>
        <h2 className="text-4xl mt-8">{title}</h2>
        <div className="flex flex-wrap justify-around">
          {people
            .sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            )
            .map((person) => (
              <Person {...person} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Contributors;
