import Layout from "../components/Layout";
import React from "react";
import groundFloor from "../images/groundFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import fourthFloor from "../images/fourthFloor.png";
import fifthFloor from "../images/fifthFloor.png";

const Venue = () => {
  return (
    <Layout showEthDiamond={false}>
      <h1 className="my-4 underline text-secondary font-ocra">(v)enue</h1>
      <div className="decorate-links flex flex-col items-center text-berlin-yellow mt-16">
        <div className="my-4 italic text-gray-300">
          Gray marked areas and the 4th floor are not available for ETHBerlin³
        </div>
        <h2 className="text-xl lg:text-3xl  mb-4">Ground Floor / Floor 0</h2>
        <div className="relative mb-16 lg:mx-16">
          <img src={groundFloor} alt="ground floor"></img>
        </div>
        <h2 className="text-xl lg:text-3xl  mb-4"> First Floor / Floor 1 </h2>
        <div className="relative mb-16 lg:mx-16">
          <img src={firstFloor} alt="first floor"></img>
        </div>
        <h2 className="text-xl lg:text-3xl  mb-4"> Second Floor / Floor 2 </h2>
        <div className="relative mb-16 lg:mx-16">
          <img src={secondFloor} alt="second floor"></img>
        </div>
        <h2 className="text-xl lg:text-3xl  mb-4"> Third Floor / Floor 3 </h2>
        <div className="relative mb-16 lg:mx-16">
          <img src={thirdFloor} alt="third floor"></img>
        </div>
        <h2 className="text-xl lg:text-3xl  mb-4"> Fourth Floor / Floor 4 </h2>
        <p className="text-gray-300">
          The 4th floor is unavailable for ETHBerlin³{" "}
        </p>
        <div className="relative mb-16 lg:mx-16">
          <img src={fourthFloor} alt="fourth floor"></img>
        </div>
        <h2 className="text-xl lg:text-3xl  mb-4"> Fifth Floor / Floor 5 </h2>
        <div className="relative mb-16 lg:mx-16">
          <img src={fifthFloor} alt="fifth floor"></img>
        </div>
      </div>
    </Layout>
  );
};

export default Venue;
