import React from "react";
import EthBerlinLogo from "./EthBerlinLogo";

const Sidebar = ({ className, hideLogo }) => {
  return (
    <div
      className={`h-screen flex flex-col py-8 px-6 fixed w-60 left-0 top-0 text-black font-ocra ${className}`}
    >
      <a
        style={{ textDecoration: "none" }}
        href="/"
        className={`${hideLogo && "invisible"}`}
      >
        <EthBerlinLogo titleClassName="text-5xl" subtitleClassName="" />
      </a>
      {/* 5.5rem to align with the Latout main content box */}
      <nav className="flex flex-col mt-[5.5rem] text-xl text-left">
        <a className="my-2" href="/about">
          {" "}
          (a)bout
        </a>
        <a className="my-2" href="/manifesto">
          {" "}
          (m)anifesto
        </a>
        <a className="my-2 hidden" href="/gallery">
          {" "}
          (g)allery
        </a>
        <a className="my-2 hidden" href="/hacker-manual">
          {" "}
          (h)acker manual
        </a>
        <a className="my-2 hidden" href="/program">
          {" "}
          (p)rogram
        </a>
        <a className="my-2 hidden" href="/venue">
          {" "}
          (v)enue
        </a>
        <a className="my-2 hidden" href="/contributors">
          {" "}
          (c)ontributors
        </a>
        <a className="my-2 hidden" href="/sponsor">
          {" "}
          (s)ponsors
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
    </div>
  );
};

export default Sidebar;
