import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between my-8 mx-4 font-w95 fixed w-52">
      <div className="flex flex-col justify-center font-digi">
        <div className="flex text-[24pt]">
          <div>ETHB3rlin</div>
        </div>
        <div className="font-w95">to the power of 3</div>
      </div>
      <nav className="flex flex-col mt-16">
        <a className="my-2">(a)bout</a>
        <a className="my-2">(s)chedule</a>
        <a className="my-2">(p)hotos</a>
        <a className="my-2">(s)ponsors</a>
        <a className="my-2">(b)log</a>
      </nav>
      <div>
        <div className="my-2">
          read our <a>hacker manifesto</a>
        </div>
        <div className="my-2">
          apply to <a>hack</a>, <a>volunteer</a>, <a>mentor</a>
        </div>
        <div className="my-2">
          join our <a>matrix space</a> or <a>e-mail us</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
