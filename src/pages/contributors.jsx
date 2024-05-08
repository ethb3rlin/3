import Layout from "../components/Layout";
import React, { useEffect } from "react";
// import mentors from "../assets/people/mentors";
// import judges from "../assets/people/judges";
import twitterLogo from "../assets/twitter.png";
import githubLogo from "../assets/github.png";
import team from "../assets/people/team";
// import keynotes from "../assets/people/keynotes";
import ETHBerlin from "../components/ETHBerlin";
import { TbWorldWww } from "react-icons/tb";

const Person = ({
  name,
  organization,
  maskImage,
  image,
  twitter,
  github,
  website,
  organization2,
}) => {
  return (
    <div className="mx-4 my-6 w-48 hover:text-berlin-red">
      <div className="flex flex-col justify-center items-center h-48 w-full relative break-words">
        <img
          src={maskImage.default}
          className="max-h-full max-w-full top-0 left-0 right-0 bottom-0 absolute m-auto z-10 opacity-95 hover:opacity-0 transition-all duration-200 ease-in-out"
        />
        <img
          src={image.default}
          className="max-h-full max-w-full top-0 left-0 right-0 bottom-0 absolute m-auto"
        />
      </div>
      <div className="text-2xl text-center mt-2">{name}</div>
      {organization && (
        <div className="text-center text-berlin-red text-lg">
          <a href={organization.url} rel="noopener noreferrer" target="_blank">
            {organization.name}
          </a>{" "}
          {organization2 && <span>{" - "}</span>}
          {organization2 && (
            <a
              href={organization2.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {organization2.name}
            </a>
          )}
        </div>
      )}
      <div className="flex justify-center mt-2">
        {twitter && (
          <a href={twitter} rel="noopener noreferrer" target="_blank">
            <img
              src={twitterLogo}
              className="mx-2 h-5 opacity-40 hover:opacity-100 "
              style={{ filter: "invert(1) grayscale(1)" }}
              alt="twitter"
            />
          </a>
        )}
        {github && (
          <a href={github} rel="noopener noreferrer" target="_blank">
            <img
              src={githubLogo}
              className="mx-2 h-5 opacity-40 hover:opacity-100 "
              style={{ filter: "invert(1) grayscale(1)" }}
              alt="github"
            />
          </a>
        )}
        {website && (
          <a href={website} rel="noopener noreferrer" target="_blank">
            <TbWorldWww
              className="mx-2 w-6 h-6 opacity-40 hover:opacity-100"
              alt="website"
            />
          </a>
        )}
      </div>
    </div>
  );
};

// function to randomize an array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

///////////////////////
//// MAIN COMPONENT ///
///////////////////////

const Contributors = () => {
  const [people, setPeople] = React.useState([]);
  const [title, setTitle] = React.useState("Team");

  useEffect(() => {
    setPeople(team);
  }, []);

  const handleMentors = () => {
    setPeople([]);
    setTitle("Mentors");
  };

  const handleJudges = () => {
    setPeople([]);
    setTitle("Judges");
  };

  const handleTeam = () => {
    setPeople(team);
    setTitle("Team");
  };

  const handleKeynotes = () => {
    setPeople([]);
    setTitle("Keynotes");
  };

  return (
    <Layout>
      <div className="textbox">
        <h1 className="my-4 underline text-secondary font-ocra">
          &lt;&lt;C&lt;ONTRIBUTORS
        </h1>
        <p>
          These are the amazing people that made <ETHBerlin /> possible.{" "}
          <span className="text-sm text-gray-500 italic">
            In pseudo-random order
          </span>
        </p>

        <div className="flex justify-center flex-wrap font-ocra">
          <button
            className={`${
              title === "Team" ? "text-berlin-red underline" : ""
            } text-xl md:text-2xl mx-4 my-2 
          `}
            onClick={handleTeam}
          >
            {"<<Team<<<<<<"}
          </button>
          {/* <button
            className={`${
              title === "Mentors" ? "text-berlin-red underline" : ""
            } text-xl md:text-2xl mx-4 my-2 
          `}
            onClick={handleMentors}
          >
            {"<<Mentors<<<"}
          </button>
          <button
            className={`${
              title === "Judges" ? "text-berlin-red underline" : ""
            } text-xl md:text-2xl mx-4 my-2 
          `}
            onClick={handleJudges}
          >
            {"<<Judges<<<<"}
          </button>
          <button
            className={`${
              title === "Keynotes" ? "text-berlin-red underline" : ""
            } text-xl md:text-2xl mx-4 my-2 
          `}
            onClick={handleKeynotes}
          >
            {"<<Speakers<<"}
          </button> */}
        </div>
        <div>
          <div className="text-4xl mt-8 font-ocra">{title}</div>
          <div className="flex flex-wrap justify-around">
            {shuffle(people).map((person) => (
              <Person {...person} key={person.name + Math.random()} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contributors;
