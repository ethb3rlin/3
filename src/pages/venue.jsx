import Layout from "../components/Layout";
import React from "react";
import groundFloor from "../images/groundFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import thirdFloor from "../images/thirdFloor.png";
import fourthFloor from "../images/fourthFloor.png";
import fifthFloor from "../images/fifthFloor.png";
import ReactTooltip from "react-tooltip";

const About = () => (
  <Layout showEthDiamond={false}>
    <h1 className="my-4 underline text-secondary">(v)enue</h1>
    <div className="text-justify decorate-links">
      <div className="relative">
        <div className="yard1" data-tip="Yard 1" />
        <div className="yard2" data-tip="Yard 2" />
        <div className="restaurant" data-tip="Restaurant" />
        <div className="yard3" data-tip="Yard 3" />
        <div className="lexis" data-tip="Lexis" />
        <div className="creators-lab" data-tip="Creators Lab" />
        <img src={groundFloor} alt="ground floor"></img>
      </div>
      <div className="relative">
        <div
          className="community-space-first-floor"
          data-tip="Community Space (1st Floor)"
        />
        <div className="peter" data-tip="Peter" />
        <div className="else" data-tip="Else" />
        <img src={firstFloor} alt="first floor"></img>
      </div>
      <div className="relative">
        <div
          className="community-space-second-floor"
          data-tip="Community Space (2nd Floor)"
        />
        <div className="grace" data-tip="Grace" />
        <div className="mercury" data-tip="Mercury" />
        <div className="kiefholz" data-tip="Kiefholz" />
        <div
          className="meeting-room-1-second-floor"
          data-tip="Meeting Room 1 (2nd Floor)"
        />
        <div
          className="meeting-room-2-second-floor"
          data-tip="Meeting Room 2 (2nd Floor)"
        ></div>
        <img src={secondFloor} alt="second floor"></img>
      </div>
      <div className="relative">
        <img
          src={thirdFloor}
          alt="third floor"
          data-tip="No ETHBerlin spaces on 3rd floor"
        ></img>
      </div>
      <div className="relative">
        <img
          src={fourthFloor}
          alt="fourth floor"
          data-tip="No ETHBerlin spaces on 4rd floor"
        ></img>
      </div>
      <div className="relative">
        <div className="wildenbruch" data-tip="Wildenbruch"></div>
        <div className="persius" data-tip="Persius"></div>
        <div className="parlour" data-tip="Parlour"></div>
        <div className="cinema" data-tip="Cinema"></div>
        <div className="cinebar" data-tip="Cinebar"></div>
        <img src={fifthFloor} alt="fifth floor"></img>
      </div>
    </div>
    <ReactTooltip />
  </Layout>
);

export default About;
