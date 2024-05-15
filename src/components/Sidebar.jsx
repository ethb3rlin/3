import React, { useState } from "react";
import EthBerlinLogo from "./EthBerlinLogo";

const Sidebar = ({ className }) => {
  const [showNav, setShowNav] = useState(false);

  const MenuItems = ({ className, style, mobile, setShowNav }) => (
    <nav
      className={`flex flex-col gap-2 text-lg font-ocra ${className}`}
      style={style}
    >
      {mobile && (
        <button
          className="p-2 absolute top-0 left-0 text-3xl ml-12 mt-12"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <div>X</div>
        </button>
      )}
      <a className="my-2" href="/manifesto">
        {" "}
        &lt;&lt;<span className="text-berlin-red">M</span>&lt;ANIFESTO
      </a>
      <a className="my-2" href="/hacker-manual">
        {" "}
        &lt;&lt;<span className="text-berlin-red">H</span>&lt;ACKER MANUAL
      </a>
      <a className="my-2" href="/schedule">
        {" "}
        &lt;&lt;<span className="text-berlin-red">S</span>&lt;CHEDULE
      </a>
      <a className="my-2" href="/venue">
        {" "}
        &lt;&lt;<span className="text-berlin-red">V</span>&lt;ENUE
      </a>
      <a className="my-2" href="/art">
        {" "}
        &lt;&lt;<span className="text-berlin-red">A</span>&lt;RT
      </a>
      <a className="my-2" href="/face-idont">
        {" "}
        &lt;&lt;<span className="text-berlin-red">F</span>&lt;ACE IDON'T
      </a>
      <a className="my-2" href="/contributors">
        {" "}
        &lt;&lt;<span className="text-berlin-red">C</span>&lt;ONTRIBUTORS
      </a>
      <a className="my-2" href="/decentralization">
        {" "}
        &lt;&lt;<span className="text-berlin-red">D</span>&lt;EPARTMENT
      </a>
      <a
        className="my-2"
        href="https://blog.dod.ngo/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        &lt;&lt;<span className="text-berlin-red">B</span>&lt;LOG (&#94;)
      </a>
    </nav>
  );

  return (
    <>
      {/* 5.5rem to align with the Latout main content box */}
      <header
        className={`h-screen hidden sm:flex flex-col py-6 px-6 fixed w-72 text-black font-ocra ${className}`}
      >
        {" "}
        <EthBerlinLogo
          className="flex flex-col justify-center origin-center"
          titleClassName="text-3xl"
          subtitleClassName={`text-xs`}
        />
        <MenuItems className="mt-16" />
        <div className="mt-auto">
          <div className="my-2 text-sm">
            <a
              className="underline"
              href="https://matrix.to/#/%23ethberlin:dod.ngo"
              target="_blank"
              rel="noreferrer"
            >
              #ethberlin:dod.ngo
            </a>
            <br />
            <a
              className="underline"
              href="mailto:contact@ethberlin.org"
              target="_blank"
              rel="noreferrer"
            >
              contact@ethberlin.org
            </a>
          </div>
        </div>
      </header>

      <header className="flex sm:hidden flex-col text-xl text-left">
        {/* Non-moving logo navbar for mobile */}
        <div className=" text-black my-8 mx-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <a
              style={{ textDecoration: "none" }}
              href="/"
              className="mr-8 max-w-[300px]"
            >
              <EthBerlinLogo
                className=""
                titleClassName="text-2xl"
                subtitleClassName={`text-xs `}
              />
            </a>
            <div className=" flex flex-col flex-grow-0 font-bundessans whitespace-nowrap text-black bg-white text-2xl leading-3 justify-center">
              <button
                className="p-2"
                onClick={() => setShowNav((prev) => !prev)}
              >
                <div>---</div>
                <div>---</div>
                <div>---</div>
              </button>
            </div>
            <MenuItems
              className={`flex z-30 ${
                showNav ? "visible opacity-95" : "invisible opacity-0"
              } flex-col items-center transition-all duration-200 ease-in-out text-xl fixed bg-black top-0 left-0 w-screen h-screen justify-center`}
              style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
              setShowNav={setShowNav}
              mobile
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
