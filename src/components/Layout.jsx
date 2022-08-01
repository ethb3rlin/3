import React, { useState } from "react";
import EthBerlinLogo from "./EthBerlinLogo";
import EthDiamond from "./EthDiamond";
import Sidebar from "./Sidebar";

const Layout = ({ children, showEthDiamond }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-full font-w95">
      <Sidebar className={`hidden sm:block z-10`} hideLogo={false} />
      {/* Non-moving logo navbar for mobile */}
      <div className="sm:hidden text-berlin-yellow">
        {/* Header */}
        <div className="flex justify-between">
          <a style={{ textDecoration: "none" }} href="/">
            <EthBerlinLogo
              className="my-4 mx-8"
              titleClassName="text-4xl"
              subtitleClassName={`text-lg `}
            />
          </a>
          <div className=" flex flex-col flex-grow-0 font-w95  text-berlin-yellow text-2xl leading-3 justify-center">
            <button
              className="p-2 mr-8 blur-text-smaller"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
              onClick={() => setShowNav((prev) => !prev)}
            >
              <div>---</div>
              <div>---</div>
              <div>---</div>
            </button>
          </div>
        </div>
      </div>
      {/* Open/scole nav menu */}
      <nav
        className={`flex ${
          showNav ? "visible opacity-95" : "invisible opacity-0"
        } flex-col items-center transition-all duration-200 ease-in-out text-xl fixed bg-black top-0 left-0 w-screen h-screen justify-center text-berlin-yellow`}
      >
        <button
          className="fixed top-8 right-8 text-4xl p-8"
          onClick={() => setShowNav(false)}
        >
          X
        </button>
        <a className="my-2" href="/about">
          (a)bout
        </a>
        <a className="my-2" href="/hack">
          {" "}
          (h)ack
        </a>
        <a className="my-2" href="/contribute">
          (c)ontribute
        </a>
        <a className="my-2" href="/program">
          {" "}
          (p)rogram
        </a>
        <a className="my-2" href="/sponsors">
          {" "}
          (s)ponsors
        </a>
        <a className="my-2" href="/manifesto">
          (m)anifesto
        </a>
      </nav>
      {/* Main content */}
      <div className="flex flex-col flex-1 ml-8 sm:ml-64 mr-8">
        {children && (
          <div
            className="mt-16 sm:mt-64 mb-16 w-full mr-8 p-6 text-gray-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
          >
            {children}
          </div>
        )}
      </div>
      {/* Mobile ETH */}
      <div className="flex justify-center sm:hidden sm:ml-60">
        <EthDiamond
          className="flex justify-end"
          smallScreen={true}
          isPrimaryColor={false}
        />
      </div>
      {/* Large screen ETH */}
      <div className={`mx-4 hidden ${showEthDiamond ? "lg:block" : "hidden"}`}>
        <EthDiamond />
      </div>

      {/* Top Right Fixed items */}
      <div
        className={`z-10 sm:fixed sm:top-0 sm:right-0 flex justify-evenly sm:justify-end my-6 sm:mr-12 font-w95`}
      >
        <div>
          <a
            style={{ textDecoration: "none" }}
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=ETHBerlin%C2%B3&location=Lohm%C3%BChlenstra%C3%9Fe+65,+12435+Berlin&dates=20220916T080000+02:00/20220918T200000+02:00"
            target="_blank"
            rel="noopener"
          >
            September 16-18, 2022
          </a>
        </div>
        <div className="sm:ml-8">
          <a
            style={{ textDecoration: "none" }}
            href="https://factoryberlin.com/"
            target="_blank"
            rel="noopener"
          >
            Factory Görlitzer Park
          </a>
        </div>
      </div>
      {/* Bottom Right fixed items */}
      <div
        className={`sm:fixed sm:bottom-0 sm:right-0 flex justify-evenly text-center sm:justify-end my-6 sm:mr-12 z-20 text-sm font-w95`}
      >
        <a className="mx-4 sm:ml-8 text-berlin-yellow" href="/DoD">
          department of decentralization
        </a>
        <a className="mx-4 sm:ml-8 text-berlin-yellow" href="/contact">
          contact & impressum
        </a>
        <a className="mx-4 sm:ml-8 text-berlin-yellow" href="/code-of-conduct">
          code of conduct
        </a>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  showEthDiamond: true,
};
export default Layout;
