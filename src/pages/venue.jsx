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
    <Layout>
      <div className="textbox">
        <h1 className="my-4 underline text-secondary font-ocra">
          &lt;&lt;V&lt;ENUE
        </h1>
        <div className="">
          <p className="mt-4">
            You have access to almost the entire venue for ETHBerlin04. Go
            explore, find all experiences, eat at the restaurant, chill in the
            cinema or discover the best rooms for hacking. This venue map will
            help you navigate all the floors.
          </p>
          <p className="mt-4">
            Start at the registration and gift shop on the ground floor. A
            secondary entrance and exit is available through backyard 0
            (registered hackers only).
          </p>
          <p className="mt-4">
            Note, areas marked in grey (and the entire 4th floor) are not
            available for hackers this year.
          </p>
          <div className="relative mb-16">
            <h2 className="text-3xl text-center mt-12 font-bold">
              Ground Floor
            </h2>
            <img src={groundFloor} alt="ground floor"></img>
          </div>
          <div className="relative mb-16">
            <h2 className="text-3xl text-center mt-12 font-bold">
              First Floor
            </h2>
            <img src={firstFloor} alt="first floor"></img>
          </div>
          <div className="relative mb-16">
            <h2 className="text-3xl text-center mt-12 font-bold">
              Second Floor
            </h2>
            <img src={secondFloor} alt="second floor"></img>
          </div>
          <div className="relative mb-16">
            <h2 className="text-3xl text-center mt-12 font-bold">
              Third Floor
            </h2>
            <img src={thirdFloor} alt="third floor"></img>
          </div>
          <div className="relative mb-16">
            <h2 className="text-3xl text-center mt-12 font-bold">
              Fourth Floor
            </h2>
            <img src={fourthFloor} alt="fourth floor"></img>
          </div>
          <div className="relative mb-16">
            <h2 className="text-3xl text-center mt-12 font-bold">
              Fifth Floor
            </h2>
            <img src={fifthFloor} alt="fifth floor"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Venue;
