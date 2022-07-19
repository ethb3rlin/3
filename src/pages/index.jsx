import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex-1 flex  min-h-full  text-berlin-yellow ">
      <Sidebar />
      <div className="flex flex-1 flex-col items-center justify-center font-digi blur-text text-center">
        <div className="flex text-[96pt]">
          <div>ETHB3rlin</div>
        </div>
        <div className="font-w95">to the power of 3</div>
      </div>
    </div>
  );
};

export default Home;
