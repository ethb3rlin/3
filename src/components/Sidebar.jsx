import React from "react";
import EthBerlinLogo from "./EthBerlinLogo";

const Sidebar = ({ className }) => {
  return (
    <nav
      className={`h-screen flex flex-col py-6 px-6 fixed w-72 text-black font-ocra ${className}`}
    >
      <EthBerlinLogo
        className="hidden sm:flex flex-col justify-center origin-center"
        titleClassName="text-3xl"
        subtitleClassName={`text-xs`}
      />
      {/* 5.5rem to align with the Latout main content box */}
      <nav className="flex flex-col mt-[5.5rem] text-xl text-left">
        <a className="my-2" href="/about">
          {" "}
          &lt;&lt;a&lt;bout
        </a>
        <a className="my-2" href="/manifesto">
          {" "}
          &lt;&lt;m&lt;anifesto
        </a>
      </nav>
      <div className="mt-auto">
        <div className="my-2 text-sm">
          join our{" "}
          <a
            className="underline"
            href="https://matrix.to/#/%23ethberlin:matrix.org"
            target="_blank"
            rel="noreferrer"
          >
            matrix space
          </a>
          &nbsp;or{" "}
          <a
            className="underline"
            href="mailto:goerli@ethberlin.org"
            target="_blank"
            rel="noreferrer"
          >
            e-mail us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
