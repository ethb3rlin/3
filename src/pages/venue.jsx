import Layout from "../components/Layout";
import React from "react";
import groundFloor from "../images/groundFloor.png";
import firstFloor from "../images/firstFloor.png";
import secondFloor from "../images/secondFloor.png";
import secondFloorSunday from "../images/secondFloor-sunday.png";
// import thirdFloor from "../images/thirdFloor.png";
// import fourthFloor from "../images/fourthFloor.png";
import fifthFloor from "../images/fifthFloor.png";

const isSundayCheck = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (day === 18 && month === 9 && year === 2022) {
    return true;
  } else {
    return false;
  }
};

const Venue = () => {
  const [isSunday, setIsSunday] = React.useState(isSundayCheck());

  return (
    <Layout showEthDiamond={false}>
      <h1 className="my-4 underline text-secondary">(v)enue</h1>
      <div className="decorate-links flex flex-col items-center text-berlin-yellow mt-16">
        <div className="my-4 italic text-gray-300">
          Gray marked areas and the4th floor are not available for ETHBerlin
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
        <div className="mb-4">
          <button
            className={`bg-berlin-yellow ${
              isSunday && "opacity-50"
            } text-gray-800 px-4 py-2 mx-4 rounded-xl`}
            onClick={() => setIsSunday(false)}
          >
            Friday & Saturday
          </button>
          <button
            className={`bg-berlin-yellow ${
              !isSunday && "opacity-50"
            } text-gray-800 px-4 py-2 mx-4 rounded-xl`}
            onClick={() => setIsSunday(true)}
          >
            Sunday
          </button>
        </div>
        <div className="relative mb-16 lg:mx-16">
          {isSunday ? (
            <img src={secondFloor} alt="second floor"></img>
          ) : (
            <img src={secondFloorSunday} alt="second floor"></img>
          )}
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
