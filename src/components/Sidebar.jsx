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
        &lt;&lt;m&lt;anifesto
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
            join our{" "}
            <a
              className="underline"
              href="https://matrix.to/#/%23ethberlin:dod.ngo"
              target="_blank"
              rel="noreferrer"
            >
              matrix space
            </a>
            &nbsp;or{" "}
            <a
              className="underline"
              href="mailto:contact@ethberlin.org"
              target="_blank"
              rel="noreferrer"
            >
              e-mail us
            </a>
          </div>
        </div>
      </header>

      <header className="flex sm:hidden flex-col text-xl text-left">
        {/* Non-moving logo navbar for mobile */}
        <div className=" text-black my-8 mx-4">
          {/* Header */}
          <div className="flex justify-between">
            <a style={{ textDecoration: "none" }} href="/">
              <EthBerlinLogo
                className=""
                titleClassName="text-2xl"
                subtitleClassName={`text-xs `}
              />
            </a>
            <div className=" flex flex-col flex-grow-0 font-bundessans text-black bg-white text-2xl leading-3 justify-center">
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
