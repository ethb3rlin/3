import React from "react";
import Typewriter from "typewriter-effect";

const NotFound = () => (
  <div className="flex flex-col justify-center items-center min-h-screen font-ocra text-black">
    <div className={`glitch layers  flex m-0 text-[72pt]`}>
      <Typewriter
        options={{
          cursor: null,
          strings: ["<<<<404<<"],
          autoStart: true,
          loop: true,
          delay: 30,
          deleteSpeed: 30,
          pauseFor: 10000,
        }}
      />
    </div>
    <div className={`glitch layers`}>
      couldn't find the page you are looking for...
    </div>
  </div>
);

export default NotFound;
