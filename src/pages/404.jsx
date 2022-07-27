import React from "react";
import { RandomReveal } from "react-random-reveal";

const NotFound = () => (
  <div className="flex flex-col justify-center items-center min-h-screen font-digi text-berlin-yellow">
    <div className={`flex blur-text m-0 text-[96pt]`}>
      <div className=" layers" data-text={`404`}>
        <RandomReveal isPlaying duration={1} characters="404" />
      </div>
    </div>
    <div className={`glitch layers font-w95`} data-text="to the power of 3">
      couldn't find the page you are looking for...
    </div>
  </div>
);

export default NotFound;
