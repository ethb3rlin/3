import React from "react";
import EthBerlinLogo from "./EthBerlinLogo";

const Sidebar = ({ className, hideLogo }) => {
  return (
    <div
      className={`h-screen flex flex-col py-8 px-6 font-w95 fixed w-60 left-0 top-0 text-berlin-yellow ${className}`}
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
          (a)bout
        </a>
        <a className="my-2" href="/hack">
          {" "}
          (h)ack
        </a>
        <a className="my-2" href="/contribute">
          (c)ontribute
        </a>
        <a className="my-2" href="/sponsor">
          {" "}
          (s)ponsor
        </a>
        <a className="my-2" href="/manifesto">
          (m)anifesto
        </a>
      </nav>
      <div className="mt-auto">
        <div className="my-2">
          join our{" "}
          <a
            className="underline"
            href="https://matrix.to/#/%23ethberlin:matrix.org"
            target="_blank"
            rel="noreferrer"
          >
            matrix space
          </a>
          <br />
          or{" "}
          <a
            className="underline"
            href="mailto:henlo@ethberlin.ooo"
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
